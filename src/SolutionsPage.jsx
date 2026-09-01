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

  return (
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-[#544F66] antialiased selection:bg-purple-100 selection:text-[#7C1FA8] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Background Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
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
            <p className="font-medium text-[15px] sm:text-[17px] leading-[26px] sm:leading-[29px] text-[#544F66] mb-7 max-w-[640px]">
              Deliver everything your clients’ needs such as investments, insurance, and financing through one powerful partnership. With PROSPERi5, you make a connection, and we handle the rest, ensuring every client requirement is met.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="h-[52px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Get Started — Zero Fee</span>
                <FiArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('what-we-offer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-2xl border-2 border-[#7C1FA8] text-[#7C1FA8] hover:bg-purple-50 font-extrabold text-sm sm:text-base transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore 50+ Products</span>
              </button>
            </div>

            {/* Micro Trust Bullet Bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-[#544F66] pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <FiCheck className="w-4 h-4 stroke-[3]" /> 100% Client Ownership
              </span>
              <span className="text-purple-200">•</span>
              <span className="flex items-center gap-1.5 text-emerald-600">
                <FiCheck className="w-4 h-4 stroke-[3]" /> Zero Empanelment Fee
              </span>
              <span className="text-purple-200">•</span>
              <span className="flex items-center gap-1.5 text-emerald-600">
                <FiCheck className="w-4 h-4 stroke-[3]" /> Dedicated Back-office RM
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* SECTION 1: WHY MULTI-PRODUCTS? */}
        <section className="bg-white border border-purple-100/90 rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-block bg-[#F5EEFB] border border-purple-200/80 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#7C1FA8]">
              WHY MULTI-PRODUCTS?
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#1E1B2E] tracking-tight">
              Multiple Verticals. One Client. <span className="text-[#C81E8C]">Zero Leakage.</span>
            </h2>

            <p className="font-body font-semibold text-base sm:text-lg text-[#544F66] leading-relaxed max-w-3xl mx-auto">
              You might capture one part of a client's financial life and watch the rest walk out the door. When you hold the Investments, Insurance, and Financing conversation in a single meeting, you become indispensable, unreplaceable.
            </p>

            {/* 3 Verticals Zero Leakage Pill Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 text-left">
              <div className="bg-[#FAF6FC] border border-purple-100 rounded-2xl p-5 space-y-2 hover:border-[#7C1FA8]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#7C1FA8] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  📈
                </div>
                <h4 className="font-extrabold text-base text-[#1E1B2E]">Investments</h4>
                <p className="text-xs font-semibold text-[#544F66] leading-relaxed">
                  Capture equity, mutual funds, AIFs & fixed income wealth creation with long-term recurring trail payouts.
                </p>
              </div>

              <div className="bg-[#FAF6FC] border border-purple-100 rounded-2xl p-5 space-y-2 hover:border-[#7C1FA8]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#C81E8C] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  🛡️
                </div>
                <h4 className="font-extrabold text-base text-[#1E1B2E]">Insurance</h4>
                <p className="text-xs font-semibold text-[#544F66] leading-relaxed">
                  Protect client family & assets with health, term & general policies while unlocking upfront + renewal commission.
                </p>
              </div>

              <div className="bg-[#FAF6FC] border border-purple-100 rounded-2xl p-5 space-y-2 hover:border-[#7C1FA8]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623] text-[#1E1B2E] flex items-center justify-center font-bold text-lg shadow-sm">
                  💳
                </div>
                <h4 className="font-extrabold text-base text-[#1E1B2E]">Financing</h4>
                <p className="text-xs font-semibold text-[#544F66] leading-relaxed">
                  Fulfill home loans, business loans & overdraft needs instantly so your clients never consult outside lenders.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: WHAT WE OFFER? */}
        <section id="what-we-offer" className="space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="bg-[#F5EEFB] text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
              COMPLETE PRODUCT SHELF
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1E1B2E] tracking-tight">
              What We Offer?
            </h2>
            <p className="font-body font-semibold text-sm sm:text-base text-[#544F66]">
              Access over 50+ financial products across three core verticals under a single empanelment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* H3: Investments */}
            <div className="bg-white rounded-[24px] border-2 border-purple-100 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#7C1FA8] flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  📈
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#1E1B2E]">Investments</h3>
                <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed bg-[#FAF6FC] p-4 rounded-xl border border-purple-100">
                  Mutual Funds · Fixed Income · AIF · PMS · Equities · Unlisted Securities · Smallcase
                </p>
              </div>

              <button
                onClick={() => handleNav('investment')}
                className="w-full py-3 px-5 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore More</span>
                <span>→</span>
              </button>
            </div>

            {/* H3: Insurance */}
            <div className="bg-white rounded-[24px] border-2 border-purple-100 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#C81E8C] flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  🛡️
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#1E1B2E]">Insurance</h3>
                <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed bg-[#FDF2F8] p-4 rounded-xl border border-pink-100">
                  Life · Health · Motor · Travel · Property · More
                </p>
              </div>

              <button
                onClick={() => handleNav('insurance')}
                className="w-full py-3 px-5 rounded-xl bg-[#C81E8C] hover:bg-[#a81674] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore More</span>
                <span>→</span>
              </button>
            </div>

            {/* H3: Financing */}
            <div className="bg-white rounded-[24px] border-2 border-purple-100 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#D49300] flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  💳
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#1E1B2E]">Financing</h3>
                <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed bg-[#FFFBEB] p-4 rounded-xl border border-amber-100">
                  Home Loan · Personal Loan · Business Loan · Vehicle Loan · LAP · Overdraft
                </p>
              </div>

              <button
                onClick={() => handleNav('financing')}
                className="w-full py-3 px-5 rounded-xl bg-[#F5A623] hover:bg-[#D49300] text-[#1E1B2E] font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore More</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 3: HOW YOU EARN */}
        <section className="bg-gradient-to-br from-[#FAF8FC] via-[#F4ECFB] to-[#FAF8FC] border border-purple-100 rounded-[28px] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="bg-purple-100 text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
              REVENUE MODELS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1E1B2E] tracking-tight">
              One Client. Multiple Ways To Earn.
            </h2>
            <p className="font-body font-semibold text-sm sm:text-base text-[#544F66]">
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

        {/* SECTION 4: CTA BANNER */}
        <section className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[28px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <span className="bg-white/15 border border-white/20 text-purple-100 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider inline-block">
              START EARNING MORE
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-tight text-white tracking-tight">
              Increase Your Earning Potential From The Same Client
            </h1>
            <p className="font-body font-medium text-xs sm:text-sm lg:text-base text-purple-100/90 leading-relaxed max-w-2xl mx-auto">
              Become the only financial partner your clients need. Join PROSPERi5 and unlock 50+ products across Investments, Insurance, and Financing to build stronger, more profitable relationships.
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="bg-[#F5A623] hover:bg-[#D49300] text-[#1E1B2E] font-extrabold px-9 py-4 rounded-2xl text-sm sm:text-base shadow-lg transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
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
