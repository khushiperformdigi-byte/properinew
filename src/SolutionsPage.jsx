import React, { useState } from 'react';
import { FiTrendingUp, FiShield, FiCreditCard, FiArrowRight, FiCheckCircle, FiPieChart, FiDollarSign, FiLayers, FiCheck } from 'react-icons/fi';
import Footer from './Footer';

export default function SolutionsPage({ onNavigatePage, onNavigateHome }) {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArn, setFormArn] = useState('');

  const handleNav = (page, anchor) => {
    if (onNavigatePage) {
      onNavigatePage(page, anchor);
    } else {
      window.location.href = `/${page}${anchor ? '#' + anchor : ''}`;
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  const handlePartnerRedirect = () => {
    if (onNavigatePage) {
      onNavigatePage('partner', 'signup');
    } else {
      window.location.href = '/partner-b2b#signup';
    }
    setTimeout(() => {
      const el = document.getElementById('signup') || document.getElementById('partner-journey') || document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-[#544F66] antialiased selection:bg-purple-100 selection:text-[#7C1FA8] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Background Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Top Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest">
                PROSPERI5 MULTI-PRODUCT PLATFORM
              </span>
            </div>

            {/* Main H1 */}
            <h1 className="font-sans font-extrabold text-[36px] leading-[44px] sm:text-[46px] sm:leading-[54px] lg:text-[54px] lg:leading-[62px] tracking-[-0.03em] text-[#1E1B2E] mb-4">
              Multi-Product Distribution, <span className="bg-gradient-to-r from-[#7C1FA8] via-[#C81E8C] to-[#F5A623] bg-clip-text text-transparent">Simplified.</span>
            </h1>

            {/* Sub Paragraph */}
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-7 max-w-[490px]">
              Deliver everything your clients’ needs such as investments, insurance, and financing through one powerful partnership. With PROSPERi5, you make a connection, and we handle the rest, ensuring every client requirement is met.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={handlePartnerRedirect}
                className="h-[52px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Get Started — Zero Fee</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Micro Trust Bullet Bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-[#1E1B2E] pt-1">
              <span className="flex items-center gap-1.5 text-[#1E1B2E]">
                <FiCheck className="w-4 h-4 text-[#7C1FA8] stroke-[3.5]" /> 100% Client Ownership
              </span>
              <span className="text-purple-200">•</span>
              <span className="flex items-center gap-1.5 text-[#1E1B2E]">
                <FiCheck className="w-4 h-4 text-[#7C1FA8] stroke-[3.5]" /> Zero Empanelment Fee
              </span>
              <span className="text-purple-200">•</span>
              <span className="flex items-center gap-1.5 text-[#1E1B2E]">
                <FiCheck className="w-4 h-4 text-[#7C1FA8] stroke-[3.5]" /> Dedicated Back-office RM
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/ChatGPT Image Aug 26, 2026, 03_11_20 PM.png"
                alt="Multi-Product Distribution Simplified - PROSPERi5"
                draggable={false}
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] max-w-[540px] object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </section>

      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 space-y-16">

        {/* SECTION 1: WHY MULTI-PRODUCTS? */}
        <section className="w-full space-y-8 py-2">
          <div className="w-full text-center space-y-3.5">
            
            <div>
              <span className="inline-block bg-[#F5EEFB] border border-purple-200/80 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#7C1FA8]">
                WHY MULTI-PRODUCTS?
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[36px] leading-tight text-[#1E1B2E] tracking-tight pt-1">
              Multiple Verticals. One Client. <span className="text-[#C81E8C]">Zero Leakage.</span>
            </h2>

            <p className="font-body font-semibold text-sm sm:text-[15.5px] text-[#544F66] leading-relaxed max-w-3xl mx-auto pt-0.5">
              You might capture one part of a client's financial life and watch the rest walk out the door. When you hold the Investments, Insurance, and Financing conversation in a single meeting, you become indispensable, unreplaceable.
            </p>

            {/* 3 Verticals Zero Leakage Pill Cards Grid (Clickable Cards with Explore →) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              
              {/* Card 1: Investments */}
              <div 
                onClick={() => handleNav('investment')}
                className="bg-[#FAF6FC] border border-purple-100/90 rounded-2xl p-5 sm:p-5.5 space-y-3 hover:border-[#7C1FA8] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#7C1FA8] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                    📈
                  </div>
                  <h4 className="font-extrabold text-lg text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors">Investments</h4>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-[#544F66] leading-snug">
                    Capture equity, mutual funds, AIFs &amp; fixed income wealth creation with long-term recurring trail payouts.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[#7C1FA8] font-extrabold text-xs sm:text-sm pt-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 2: Insurance */}
              <div 
                onClick={() => handleNav('insurance')}
                className="bg-[#FDF2F8] border border-pink-100 rounded-2xl p-5 sm:p-5.5 space-y-3 hover:border-[#C81E8C] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C81E8C] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                    🛡️
                  </div>
                  <h4 className="font-extrabold text-lg text-[#1E1B2E] group-hover:text-[#C81E8C] transition-colors">Insurance</h4>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-[#544F66] leading-snug">
                    Protect client family &amp; assets with health, term &amp; general policies while unlocking upfront + renewal commission.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[#C81E8C] font-extrabold text-xs sm:text-sm pt-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 3: Financing */}
              <div 
                onClick={() => handleNav('financing')}
                className="bg-[#FFFBEB] border border-amber-100 rounded-2xl p-5 sm:p-5.5 space-y-3 hover:border-[#F5A623] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623] text-[#1E1B2E] flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                    💳
                  </div>
                  <h4 className="font-extrabold text-lg text-[#1E1B2E] group-hover:text-[#D49300] transition-colors">Financing</h4>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-[#544F66] leading-snug">
                    Fulfill home loans, business loans &amp; overdraft needs instantly so your clients never consult outside lenders.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[#D49300] font-extrabold text-xs sm:text-sm pt-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: HOW YOU EARN (Un-boxed & Compact) */}
        <section id="how-you-earn" className="w-full space-y-8 py-2">
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <div>
              <span className="bg-[#F5EEFB] text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
                REVENUE MODELS
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#1E1B2E] tracking-tight pt-1">
              One Client. Multiple Ways To Earn.
            </h2>

            <p className="font-body font-semibold text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto pt-0.5">
              Transparent, automated commission structures across all three vertical lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Earning Card 1: Investments */}
            <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-[#1E1B2E]">Investments</h3>
                  <span className="bg-purple-100 text-[#7C1FA8] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                    Recurring Trail
                  </span>
                </div>
                <div className="h-px bg-purple-50 my-2" />
                <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed">
                  Earn every year, on every rupee, as long as your client stays invested with PROSPERi5.
                </p>
              </div>
            </div>

            {/* Earning Card 2: Insurance */}
            <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-[#1E1B2E]">Insurance</h3>
                  <span className="bg-pink-100 text-[#C81E8C] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                    Upfront + Trail
                  </span>
                </div>
                <div className="h-px bg-purple-50 my-2" />
                <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed">
                  First-year commission on every policy. Trail income on every renewal.
                </p>
              </div>
            </div>

            {/* Earning Card 3: Financing */}
            <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-[#1E1B2E]">Financing</h3>
                  <span className="bg-amber-100 text-[#D49300] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                    Upfront Payout
                  </span>
                </div>
                <div className="h-px bg-purple-50 my-2" />
                <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed">
                  Earn commission on every successful closure of financing transaction referred by you.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: CTA BANNER (Ultra-Compact Low-Profile Strip) */}
        <section className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[20px] px-5 sm:px-7 py-3.5 sm:py-4 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 relative z-10 text-left">
            <div className="space-y-1 max-w-3xl">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider inline-block">
                START EARNING MORE
              </span>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl leading-snug text-white tracking-tight">
                Increase Your Earning Potential From The Same Client
              </h2>
              <p className="font-body font-medium text-[11.5px] sm:text-xs text-purple-100/90 leading-normal max-w-2xl">
                Become the only financial partner your clients need. Join PROSPERi5 and unlock 50+ products across Investments, Insurance, and Financing to build stronger, more profitable relationships.
              </p>
            </div>
            
            <div className="shrink-0 w-full sm:w-auto text-center lg:text-right">
              <button
                onClick={handlePartnerRedirect}
                className="bg-[#F5A623] hover:bg-[#D49300] text-[#1E1B2E] font-extrabold px-6 py-2.5 sm:py-3 rounded-xl text-xs shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5"
              >
                <span>Become a PROSPERi5 Partner</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* PARTNER EMPANELMENT MODAL POPUP */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in fade-in zoom-in duration-200 space-y-4">
            
            <div className="flex items-center justify-between border-b border-purple-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#7C1FA8] flex items-center justify-center font-bold text-sm">
                  🤝
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#1E1B2E]">
                  Empanel as a PROSPERi5 Partner
                </h3>
              </div>
              <button
                onClick={() => {
                  setPartnerModalOpen(false);
                  setModalSubmitted(false);
                }}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {!modalSubmitted ? (
              <>
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Join 50+ products distribution ecosystem. Zero joining fee. Complete back-office support.
                </p>

                <form onSubmit={handleModalSubmit} className="space-y-3.5 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">ARN Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="ARN-XXXX (Optional)"
                      value={formArn}
                      onChange={(e) => setFormArn(e.target.value)}
                      className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-3.5 rounded-xl text-xs shadow-md transition-all cursor-pointer mt-2"
                  >
                    Submit &amp; Empanel Now →
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h4 className="font-extrabold text-base text-[#1E1B2E]">Thank You, {formName || 'Partner'}!</h4>
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Our Partner Empanelment Specialist will reach out to you within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setPartnerModalOpen(false);
                    setModalSubmitted(false);
                  }}
                  className="bg-[#7C1FA8] text-white font-bold px-6 py-2 rounded-xl text-xs mt-2 cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer onNavigatePage={onNavigatePage} onNavigateHome={onNavigateHome} />
    </div>
  );
}
