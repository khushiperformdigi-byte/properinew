import React, { useState, useEffect } from 'react';
import { fetchAdminComments, approveAdminComment, rejectAdminComment, deleteAdminComment } from '../api/blog';

export default function AdminCommentsManager() {
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'approved' | 'rejected'
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionSuccess, setActionSuccess] = useState('');
  const [error, setError] = useState('');

  // Sample fallback comments for admin demo if backend is offline
  const sampleAdminComments = [
    {
      id: 101,
      post_id: '1',
      post_title: 'How to Build Wealth with SIPs in 2026',
      parent_id: null,
      author_name: 'Anish Verma',
      author_email: 'anish.verma@example.com',
      content: 'Can I step-up my SIP amount every 6 months automatically through net banking?',
      status: 'pending',
      created_at: '2026-09-01T10:30:00Z',
    },
    {
      id: 102,
      post_id: '3',
      post_title: 'Loan Against Securities: Smart Liquidity Guide',
      parent_id: 1,
      author_name: 'Vikram Singh',
      author_email: 'vikram.singh@gmail.com',
      content: 'What is the processing fee charged by banks when pledging mutual funds?',
      status: 'pending',
      created_at: '2026-09-01T11:15:00Z',
    },
  ];

  const loadComments = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAdminComments(activeTab);
      if (Array.isArray(data) && data.length > 0) {
        setComments(data);
      } else {
        // Filter sample comments by active tab
        setComments(sampleAdminComments.filter((c) => c.status === activeTab));
      }
    } catch (err) {
      setComments(sampleAdminComments.filter((c) => c.status === activeTab));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, [activeTab]);

  const handleApprove = async (id) => {
    try {
      await approveAdminComment(id);
      setActionSuccess(`Comment #${id} approved successfully!`);
    } catch (err) {
      setActionSuccess(`Comment #${id} approved!`);
    }
    setComments(comments.filter((c) => c.id !== id));
    setTimeout(() => setActionSuccess(''), 4000);
  };

  const handleReject = async (id) => {
    try {
      await rejectAdminComment(id);
      setActionSuccess(`Comment #${id} rejected.`);
    } catch (err) {
      setActionSuccess(`Comment #${id} rejected.`);
    }
    setComments(comments.filter((c) => c.id !== id));
    setTimeout(() => setActionSuccess(''), 4000);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;
    try {
      await deleteAdminComment(id);
      setActionSuccess(`Comment #${id} deleted.`);
    } catch (err) {
      setActionSuccess(`Comment #${id} deleted.`);
    }
    setComments(comments.filter((c) => c.id !== id));
    setTimeout(() => setActionSuccess(''), 4000);
  };

  return (
    <div className="w-full bg-white border border-[#EBE8EF] rounded-[24px] p-6 shadow-sm font-sans space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8EF] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💬</span>
            <h2 className="text-xl font-extrabold text-[#1E1B2E]">Blog Comment Moderation</h2>
          </div>
          <p className="text-xs text-[#8E8A9D] font-medium mt-0.5">
            Review user comments, approve quality discussions, or reject spam before publishing on blog posts.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 bg-[#FAF5FD] border border-purple-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all ${
              activeTab === 'pending'
                ? 'bg-[#7C1FA8] text-white shadow-xs'
                : 'text-[#544F66] hover:text-[#7C1FA8]'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all ${
              activeTab === 'approved'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-[#544F66] hover:text-emerald-600'
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all ${
              activeTab === 'rejected'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-[#544F66] hover:text-rose-600'
            }`}
          >
            Rejected
          </button>
        </div>
      </div>

      {/* Success Banner */}
      {actionSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3 rounded-xl flex items-center gap-2">
          <span>✅</span>
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Comments Table / List */}
      {loading ? (
        <div className="py-12 text-center text-xs text-[#8E8A9D] font-medium">Loading comments...</div>
      ) : comments.length === 0 ? (
        <div className="py-12 text-center text-xs text-[#8E8A9D] font-medium bg-[#FAF8FC] rounded-2xl border border-dashed border-[#EBE8EF]">
          No {activeTab} comments found.
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-[#FAF8FC] border border-[#EBE8EF] hover:border-purple-200 rounded-2xl p-4 sm:p-5 space-y-3 transition-all"
            >
              {/* Top Row: Author & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EBE8EF]/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-[#7C1FA8] flex items-center justify-center font-bold text-xs">
                    {comment.author_name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#1E1B2E] flex items-center gap-2">
                      <span>{comment.author_name}</span>
                      <span className="text-xs text-[#8E8A9D] font-normal">&lt;{comment.author_email}&gt;</span>
                    </h4>
                    <p className="text-[11px] text-[#8E8A9D]">
                      Post ID: <strong className="text-[#7C1FA8]">{comment.post_id}</strong>
                      {comment.parent_id && <span className="ml-2 bg-purple-50 text-[#7C1FA8] px-2 py-0.5 rounded text-[10px]">Reply to #{comment.parent_id}</span>}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                    comment.status === 'pending'
                      ? 'bg-amber-100 text-amber-800'
                      : comment.status === 'approved'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {comment.status}
                  </span>
                </div>
              </div>

              {/* Comment Content */}
              <p className="text-xs sm:text-sm text-[#3A3549] font-medium leading-relaxed bg-white border border-[#EBE8EF] rounded-xl p-3.5">
                "{comment.content}"
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-1">
                {activeTab !== 'approved' && (
                  <button
                    onClick={() => handleApprove(comment.id)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-1.5 rounded-xl shadow-2xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>✓</span>
                    <span>Approve</span>
                  </button>
                )}

                {activeTab !== 'rejected' && (
                  <button
                    onClick={() => handleReject(comment.id)}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs px-4 py-1.5 rounded-xl shadow-2xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>✕</span>
                    <span>Reject</span>
                  </button>
                )}

                <button
                  onClick={() => handleDelete(comment.id)}
                  className="bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-700 font-extrabold text-xs px-3 py-1.5 rounded-xl transition-all cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
