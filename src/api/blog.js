import { getAdminToken, clearAdminToken } from './careers';
import { API_BASE, resolveApiOrigin } from '../config/api.js';

async function request(path, options = {}) {
  const { auth = false, headers: customHeaders, body, ...fetchOptions } = options;

  const headers = { ...(customHeaders || {}) };
  if (!(body instanceof FormData)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  }

  if (auth) {
    const token = getAdminToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      mode: 'cors',
      ...fetchOptions,
      headers,
      body: body instanceof FormData || typeof body === 'string' ? body : body != null ? JSON.stringify(body) : undefined,
    });

    // Binary media responses are handled separately
    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json')
      ? await response.json().catch(() => ({}))
      : {};

    if (!response.ok) {
      if (response.status === 401 && auth) clearAdminToken();
      const error = new Error(payload.message || `Request failed (${response.status})`);
      error.status = response.status;
      error.details = payload.details;
      throw error;
    }

    return payload;
  } catch (err) {
    console.warn(`[API Path ${path}] Network/CORS fetch error:`, err.message);
    throw err;
  }
}

export function resolveMediaUrl(urlOrId) {
  if (!urlOrId) return '';
  if (String(urlOrId).startsWith('http') || String(urlOrId).startsWith('data:')) {
    return urlOrId;
  }
  if (String(urlOrId).startsWith('/api/')) {
    return `${resolveApiOrigin()}${urlOrId}`;
  }
  return `${API_BASE}/media/${urlOrId}`;
}

export async function fetchPublishedPosts(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });
  const query = search.toString();
  const payload = await request(`/posts${query ? `?${query}` : ''}`);
  return payload.data?.posts || [];
}

export async function fetchPublishedPost(idOrSlug) {
  const payload = await request(`/posts/${encodeURIComponent(idOrSlug)}`);
  return payload.data?.post;
}

export async function fetchAdminPosts(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });
  const query = search.toString();
  const payload = await request(`/admin/posts${query ? `?${query}` : ''}`, { auth: true });
  return Array.isArray(payload.data?.posts) ? payload.data.posts : [];
}

export async function fetchAdminPost(id) {
  const payload = await request(`/admin/posts/${id}`, { auth: true });
  return payload.data?.post;
}

export async function createAdminPost(body) {
  const payload = await request('/admin/posts', { method: 'POST', auth: true, body });
  return payload.data?.post;
}

export async function updateAdminPost(id, body) {
  const payload = await request(`/admin/posts/${id}`, { method: 'PATCH', auth: true, body });
  return payload.data?.post;
}

export async function deleteAdminPost(id) {
  const payload = await request(`/admin/posts/${id}`, { method: 'DELETE', auth: true });
  return payload.data;
}

export async function uploadAdminMedia(file, altText = '') {
  const formData = new FormData();
  formData.append('file', file);
  if (altText) formData.append('altText', altText);
  const payload = await request('/admin/media', {
    method: 'POST',
    auth: true,
    body: formData,
  });
  return payload.data?.media;
}

export async function uploadAdminMediaFromUrl(url, altText = '') {
  const payload = await request('/admin/media/from-url', {
    method: 'POST',
    auth: true,
    body: { url, altText },
  });
  return payload.data?.media;
}

/* ==========================================================================
   BLOG COMMENTS API ENDPOINTS (Public & Admin Moderation)
   ========================================================================== */

/** Fetch approved comments and nested replies for a specific post */
export async function fetchPostComments(postId) {
  try {
    const payload = await request(`/posts/${encodeURIComponent(postId)}/comments`);
    return Array.isArray(payload.data?.comments) ? payload.data.comments : (payload.data || []);
  } catch (err) {
    console.warn(`[Comments API] Fetch error for post ${postId}:`, err.message);
    return null; // Signals fallback to local state if server offline
  }
}

/** Submit a new comment or reply (stored as pending for admin approval) */
export async function submitPostComment({ postId, parentId = null, authorName, authorEmail, content }) {
  const payload = await request(`/posts/${encodeURIComponent(postId)}/comments`, {
    method: 'POST',
    body: {
      parent_id: parentId,
      author_name: authorName,
      author_email: authorEmail,
      content: content,
    },
  });
  return payload.data?.comment || payload;
}

/** Fetch comments for Admin Moderation (filtered by status: 'pending', 'approved', 'rejected') */
export async function fetchAdminComments(status = 'pending') {
  const payload = await request(`/admin/comments?status=${encodeURIComponent(status)}`, { auth: true });
  return Array.isArray(payload.data?.comments) ? payload.data.comments : [];
}

/** Admin: Approve a comment */
export async function approveAdminComment(commentId) {
  const payload = await request(`/admin/comments/${commentId}/approve`, {
    method: 'PATCH',
    auth: true,
  });
  return payload.data?.comment || payload;
}

/** Admin: Reject a comment */
export async function rejectAdminComment(commentId) {
  const payload = await request(`/admin/comments/${commentId}/reject`, {
    method: 'PATCH',
    auth: true,
  });
  return payload.data?.comment || payload;
}

/** Admin: Delete a comment */
export async function deleteAdminComment(commentId) {
  const payload = await request(`/admin/comments/${commentId}`, {
    method: 'DELETE',
    auth: true,
  });
  return payload.data;
}

/* ==========================================================================
   ENQUIRIES & LEADS API ENDPOINTS (Public Lead Capture)
   ========================================================================== */

/** Submit a new enquiry/lead form to /api/enquiries */
export async function submitEnquiry(payload) {
  try {
    const data = await request('/enquiries', {
      method: 'POST',
      body: payload,
    });
    return data;
  } catch (err) {
    console.warn('[Enquiry API Error]:', err.message);
    return { success: false, error: err.message };
  }
}

/** Submit a job application to /api/applications */
export async function submitJobApplication(payload) {
  try {
    const data = await request('/applications', {
      method: 'POST',
      body: payload,
    });
    return data;
  } catch (err) {
    console.warn('[Job Application API Error]:', err.message);
    return { success: false, error: err.message };
  }
}

export { API_BASE };
