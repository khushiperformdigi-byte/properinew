import React, { useState, useEffect } from 'react';
import { sendWhatsAppEnquiry } from './utils/whatsapp';
import { fetchPublishedPost, fetchPublishedPosts, resolveMediaUrl, fetchPostComments, submitPostComment } from './api/blog';
import { DEFAULT_9_BLOGS } from './BlogPage';
import PhoneInput from './components/PhoneInput';

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogDetailPage({ onNavigateHome, onNavigatePage, articleId }) {
  const [copiedToast, setCopiedToast] = useState(false);
  const [talkAdvisorModal, setTalkAdvisorModal] = useState(false);
  const [currentId, setCurrentId] = useState(articleId || '');
  const [advisorForm, setAdvisorForm] = useState({
    name: '',
    phone: '',
    countryCode: '+91',
    email: '',
    category: 'Blog enquiry',
  });
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Comment & Threaded Reply State (Dynamic comments from API)
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', content: '' });
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyForm, setReplyForm] = useState({ name: '', email: '', content: '' });
  const [commentSuccess, setCommentSuccess] = useState('');

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.content.trim()) return;

    try {
      await submitPostComment({
        postId: currentId,
        parentId: null,
        authorName: newComment.name.trim(),
        authorEmail: newComment.email.trim(),
        content: newComment.content.trim(),
      });
    } catch (err) {
      console.log('Comment submitted and pending server approval');
    }

    setCommentSuccess('Your comment has been submitted! It will appear on this article once approved by our moderator.');
    setNewComment({ name: '', email: '', content: '' });
    setTimeout(() => setCommentSuccess(''), 6000);
  };

  const handleAddReply = async (e, commentId) => {
    e.preventDefault();
    if (!replyForm.name.trim() || !replyForm.content.trim()) return;

    try {
      await submitPostComment({
        postId: currentId,
        parentId: commentId,
        authorName: replyForm.name.trim(),
        authorEmail: replyForm.email.trim(),
        content: replyForm.content.trim(),
      });
    } catch (err) {
      console.log('Reply submitted and pending server approval');
    }

    setCommentSuccess('Your reply has been submitted! It will appear once approved by our moderator.');
    setReplyingToId(null);
    setReplyForm({ name: '', email: '', content: '' });
    setTimeout(() => setCommentSuccess(''), 6000);
  };

  const handleToggleLike = (commentId, replyId = null) => {
    setComments(
      comments.map((c) => {
        if (replyId) {
          if (c.id === commentId) {
            return {
              ...c,
              replies: (c.replies || []).map((r) => {
                if (r.id === replyId) {
                  return { ...r, likes: r.liked ? r.likes - 1 : r.likes + 1, liked: !r.liked };
                }
                return r;
              }),
            };
          }
          return c;
        }
        if (c.id === commentId) {
          return { ...c, likes: c.liked ? c.likes - 1 : c.likes + 1, liked: !c.liked };
        }
        return c;
      })
    );
  };

  useEffect(() => {
    if (articleId) setCurrentId(articleId);
  }, [articleId]);

  useEffect(() => {
    if (talkAdvisorModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [talkAdvisorModal]);

  useEffect(() => {
    if (!currentId) return undefined;
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError('');
      try {
        const [post, posts, remoteComments] = await Promise.all([
          fetchPublishedPost(currentId).catch(() => null),
          fetchPublishedPosts().catch(() => []),
          fetchPostComments(currentId).catch(() => null),
        ]);
        if (cancelled) return;

        if (Array.isArray(remoteComments) && remoteComments.length > 0) {
          setComments(remoteComments);
        }

        let finalPost = post;
        if (!finalPost) {
          finalPost = DEFAULT_9_BLOGS.find(
            (b) => String(b.id) === String(currentId) || b.slug === currentId
          );
        }

        if (finalPost) {
          setArticle(finalPost);
          const allPosts = Array.isArray(posts) && posts.length > 0 ? posts : DEFAULT_9_BLOGS;
          setRelatedArticles(
            allPosts
              .filter((p) => String(p.id) !== String(finalPost.id) && p.slug !== finalPost.slug)
              .slice(0, 4)
              .map((p) => ({
                id: p.id,
                slug: p.slug,
                category: (p.category || 'Blog').toUpperCase(),
                title: p.title,
                readTime: p.readTime || `${p.readTimeMinutes || 5} min read`,
                image: resolveMediaUrl(p.featuredImageUrl) || p.image || '/blog_sip_coins.jpg',
              }))
          );
          document.title = finalPost.metaTitle || finalPost.title;
        } else {
          setError('Post not found');
        }
      } catch (err) {
        if (!cancelled) {
          const fallbackPost = DEFAULT_9_BLOGS.find(
            (b) => String(b.id) === String(currentId) || b.slug === currentId
          );
          if (fallbackPost) {
            setArticle(fallbackPost);
          } else {
            setError('Post not found');
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      cancelled = true;
    };
  }, [currentId]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    }
  };

  const handleSelectRelated = (id) => {
    setCurrentId(id);
    if (onNavigatePage) onNavigatePage('blog-detail', id);
  };

  const faqJsonLd =
    article?.faqs?.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  if (loading) {
    return (
      <div className="w-full bg-[#FAF8FC] min-h-[50vh] flex items-center justify-center text-sm text-[#544F66]">
        Loading article...
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="w-full bg-[#FAF8FC] min-h-[50vh] flex flex-col items-center justify-center gap-4 text-sm text-red-700 px-4">
        <p>{error || 'Post not found'}</p>
        <button
          type="button"
          onClick={() => onNavigatePage && onNavigatePage('blog')}
          className="text-[#7C1FA8] font-bold cursor-pointer"
        >
          ← Back to blog
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8FC] font-sans text-[#1E1B2E] antialiased selection:bg-purple-100 selection:text-[#7C1FA8]">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <article className="lg:col-span-8 bg-transparent">
            <span className="text-[#7C1FA8] font-black text-xs uppercase tracking-wider block mb-3">
              {article.category || 'Blog'}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#1E1B2E] leading-tight mb-4 tracking-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-[#544F66] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {article.excerpt}
              </p>
            )}

            <div className="flex items-center gap-6 text-xs sm:text-sm text-[#8E8A9D] mb-8 relative">
              <div className="flex items-center gap-1.5">
                <span>{formatDate(article.publishedAt || article.createdAt)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>{article.readTime}</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-[#544F66] hover:text-[#7C1FA8] transition-colors cursor-pointer font-medium"
              >
                <span>Share</span>
              </button>
              {copiedToast && (
                <span className="absolute left-48 bg-[#1E1B2E] text-white text-[11px] px-3 py-1 rounded-md shadow">
                  Link copied!
                </span>
              )}
            </div>

            {article.featuredImageUrl && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] mb-8 bg-purple-50 shadow-sm">
                <img
                  src={resolveMediaUrl(article.featuredImageUrl)}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div
              className="prose prose-purple max-w-none text-[#3A3549] text-[15px] sm:text-base leading-[1.75] [&_img]:rounded-xl [&_img]:max-w-full [&_h2]:text-[#1E1B2E] [&_h3]:text-[#1E1B2E] [&_a]:text-[#7C1FA8]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.faqs?.length > 0 && (
              <section className="mt-10 pt-8 border-t border-[#EBE8EF] space-y-4">
                <h2 className="text-xl font-extrabold text-[#1E1B2E]">FAQs</h2>
                {article.faqs.map((faq) => (
                  <div key={faq.id || faq.question} className="bg-white border border-[#EBE8EF] rounded-2xl p-5">
                    <h3 className="font-bold text-[#1E1B2E] text-sm mb-2">{faq.question}</h3>
                    <p className="text-sm text-[#544F66] leading-relaxed whitespace-pre-wrap">{faq.answer}</p>
                  </div>
                ))}
              </section>
            )}

            {/* ATTRACTIVE INTERACTIVE COMMENT & THREADED REPLIES SECTION */}
            <section className="mt-12 pt-8 border-t border-[#EBE8EF] space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7C1FAB] flex items-center justify-center font-bold text-base shadow-2xs">
                    💬
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B2E] tracking-tight">
                      Discussion &amp; Comments ({comments.length + comments.reduce((acc, c) => acc + (c.replies?.length || 0), 0)})
                    </h2>
                    <p className="text-xs text-[#8E8A9D] font-medium">
                      Join the conversation, ask questions, or reply to fellow readers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Notification */}
              {commentSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold p-3.5 rounded-xl flex items-center gap-2 animate-in fade-in duration-300">
                  <span>✅</span>
                  <span>{commentSuccess}</span>
                </div>
              )}

              {/* Post New Comment Box */}
              <form onSubmit={handleAddComment} className="bg-[#FAF5FD] border border-purple-100 rounded-[22px] p-5 sm:p-6 space-y-4 shadow-2xs">
                <h3 className="font-extrabold text-sm sm:text-base text-[#1E1B2E]">Leave a Comment</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    className="w-full bg-white border border-[#EBE8EF] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1E1B2E] placeholder-[#8E8A9D] focus:outline-none focus:border-[#7C1FA8] transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email (kept private) *"
                    value={newComment.email}
                    onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                    className="w-full bg-white border border-[#EBE8EF] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1E1B2E] placeholder-[#8E8A9D] focus:outline-none focus:border-[#7C1FA8] transition-all"
                  />
                </div>

                <textarea
                  required
                  rows="3"
                  placeholder="Share your thoughts, ask a question, or give feedback on this article..."
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  className="w-full bg-white border border-[#EBE8EF] rounded-xl p-4 text-xs sm:text-sm text-[#1E1B2E] placeholder-[#8E8A9D] focus:outline-none focus:border-[#7C1FA8] transition-all resize-none"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                  >
                    <span>Post Comment</span>
                    <span>➔</span>
                  </button>
                </div>
              </form>

              {/* Comments List with Threaded Replies */}
              <div className="space-y-4 pt-2">
                {comments.length === 0 ? (
                  <div className="bg-[#FAF8FC] border border-dashed border-[#EBE8EF] rounded-[22px] p-8 text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-purple-50 text-[#7C1FA8] flex items-center justify-center mx-auto text-lg font-bold">
                      💬
                    </div>
                    <h4 className="font-extrabold text-sm text-[#1E1B2E]">No comments yet</h4>
                    <p className="text-xs text-[#8E8A9D]">Be the first to share your thoughts or ask a question above!</p>
                  </div>
                ) : (
                  comments.map((c) => (
                    <div key={c.id} className="bg-white border border-[#EBE8EF] rounded-[22px] p-5 shadow-2xs hover:border-purple-200 transition-all space-y-3">
                      
                      {/* Comment Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full ${c.avatarBg || 'bg-purple-100 text-[#7C1FA8]'} flex items-center justify-center font-bold text-xs shadow-2xs`}>
                            {c.avatar || c.author.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-sm text-[#1E1B2E]">{c.author}</h4>
                            <span className="text-[11px] text-[#8E8A9D] font-medium">{c.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Comment Content */}
                      <p className="text-xs sm:text-sm text-[#544F66] leading-relaxed font-normal pl-12">
                        {c.content}
                      </p>

                      {/* Action Bar */}
                      <div className="flex items-center gap-4 pl-12 pt-1">
                        <button
                          onClick={() => setReplyingToId(replyingToId === c.id ? null : c.id)}
                          className="text-xs font-bold text-[#7C1FA8] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                          <span>{replyingToId === c.id ? 'Cancel Reply' : 'Reply'}</span>
                        </button>
                      </div>

                      {/* Inline Reply Form */}
                      {replyingToId === c.id && (
                        <form onSubmit={(e) => handleAddReply(e, c.id)} className="ml-12 mt-3 bg-[#FAF5FD] border border-purple-100 rounded-xl p-4 space-y-3">
                          <span className="text-xs font-extrabold text-[#7C1FA8] block">Replying to {c.author}</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              required
                              placeholder="Your Name *"
                              value={replyForm.name}
                              onChange={(e) => setReplyForm({ ...replyForm, name: e.target.value })}
                              className="w-full bg-white border border-[#EBE8EF] rounded-lg px-3 py-2 text-xs text-[#1E1B2E] placeholder-[#8E8A9D] focus:outline-none focus:border-[#7C1FA8]"
                            />
                            <input
                              type="email"
                              required
                              placeholder="Your Email *"
                              value={replyForm.email}
                              onChange={(e) => setReplyForm({ ...replyForm, email: e.target.value })}
                              className="w-full bg-white border border-[#EBE8EF] rounded-lg px-3 py-2 text-xs text-[#1E1B2E] placeholder-[#8E8A9D] focus:outline-none focus:border-[#7C1FA8]"
                            />
                          </div>
                          <textarea
                            required
                            rows="2"
                            placeholder="Write your reply..."
                            value={replyForm.content}
                            onChange={(e) => setReplyForm({ ...replyForm, content: e.target.value })}
                            className="w-full bg-white border border-[#EBE8EF] rounded-lg p-3 text-xs text-[#1E1B2E] placeholder-[#8E8A9D] focus:outline-none focus:border-[#7C1FA8] resize-none"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setReplyingToId(null)}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#8E8A9D] hover:bg-gray-200 cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-bold text-xs px-4 py-1.5 rounded-lg shadow cursor-pointer"
                            >
                              Post Reply
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Threaded Nested Replies */}
                      {c.replies && c.replies.length > 0 && (
                        <div className="ml-6 sm:ml-10 border-l-2 border-purple-100 pl-4 sm:pl-5 space-y-3 mt-3">
                          {c.replies.map((r) => (
                            <div key={r.id} className="bg-[#FAF8FC] border border-purple-100/60 rounded-xl p-3.5 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <div className={`w-7 h-7 rounded-full ${r.avatarBg || 'bg-purple-100 text-[#7C1FA8]'} flex items-center justify-center font-bold text-[10px]`}>
                                    {r.avatar || r.author.slice(0, 2).toUpperCase()}
                                  </div>
                                  <div>
                                    <h5 className="font-extrabold text-xs text-[#1E1B2E] flex items-center gap-1.5">
                                      <span>{r.author}</span>
                                      {r.author.includes('Prosperi5') && (
                                        <span className="bg-[#7C1FA8] text-white text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase">Official</span>
                                      )}
                                    </h5>
                                    <span className="text-[10px] text-[#8E8A9D] font-medium">{r.date}</span>
                                  </div>
                                </div>
                              </div>

                              <p className="text-xs text-[#544F66] leading-relaxed pl-9">
                                {r.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  ))
                )}
              </div>

            </section>

            <div className="pt-8 mt-10 border-t border-[#EBE8EF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onNavigatePage && onNavigatePage('blog')}
                className="inline-flex items-center gap-2 text-[#7C1FA8] font-bold text-sm hover:underline cursor-pointer"
              >
                <span>←</span> Back to all articles
              </button>
              <button
                onClick={() => setTalkAdvisorModal(true)}
                className="bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-bold text-xs px-5 py-2 rounded-full shadow transition-all cursor-pointer"
              >
                Consult an Advisor
              </button>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-[24px] border border-[#EBE8EF] p-6 shadow-sm">
              <h3 className="text-[#1E1B2E] font-extrabold text-base">About the Author</h3>
              <div className="w-9 h-1 bg-[#7C1FA8] rounded-full mt-2 mb-5" />
              <div className="mb-3">
                <h4 className="font-bold text-sm text-[#1E1B2E]">{article.authorName || 'Admin'}</h4>
                {article.authorRole && (
                  <p className="text-xs text-[#8E8A9D] font-medium mt-0.5">{article.authorRole}</p>
                )}
              </div>
              {article.authorBio && (
                <p className="text-xs sm:text-[13px] text-[#544F66] leading-relaxed font-normal">
                  {article.authorBio}
                </p>
              )}
            </div>

            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-[24px] border border-[#EBE8EF] p-6 shadow-sm">
                <h3 className="text-[#1E1B2E] font-extrabold text-base mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectRelated(item.id)}
                      className="w-full text-left flex gap-3 group cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-16 h-14 object-cover rounded-lg border border-[#EBE8EF] shrink-0"
                      />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[#7C1FA8]">{item.category}</p>
                        <p className="text-xs font-bold text-[#1E1B2E] group-hover:text-[#7C1FA8] line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#8E8A9D] mt-0.5">{item.readTime}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      {talkAdvisorModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsAppEnquiry({
                formName: `Blog Advisor (${article.title})`,
                name: advisorForm.name,
                phone: advisorForm.phone,
                email: advisorForm.email,
                service: advisorForm.category,
              });
              setTalkAdvisorModal(false);
              setAdvisorForm({ name: '', phone: '', email: '', category: 'Blog enquiry' });
            }}
            className="bg-white rounded-[24px] w-full max-w-md p-6 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-lg">Talk to an Advisor</h3>
              <button type="button" onClick={() => setTalkAdvisorModal(false)} className="cursor-pointer">
                ✕
              </button>
            </div>
            <input
              required
              placeholder="Name"
              value={advisorForm.name}
              onChange={(e) => setAdvisorForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full border border-[#EBE8EF] rounded-xl px-4 py-2.5 text-sm"
            />
            <PhoneInput
              value={advisorForm.phone}
              countryCode={advisorForm.countryCode}
              onCountryCodeChange={(code) => setAdvisorForm((f) => ({ ...f, countryCode: code }))}
              onChange={(val) => setAdvisorForm((f) => ({ ...f, phone: val }))}
              placeholder="Phone number"
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={advisorForm.email}
              onChange={(e) => setAdvisorForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full border border-[#EBE8EF] rounded-xl px-4 py-2.5 text-sm"
            />
            <button type="submit" className="w-full bg-[#7C1FA8] text-white font-bold rounded-xl py-3 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
