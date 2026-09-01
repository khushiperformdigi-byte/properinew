import React, { useState } from 'react';
import { FiCheck, FiArrowRight, FiPlus, FiMinus, FiHome, FiLock, FiUser, FiBriefcase, FiTruck, FiCreditCard } from 'react-icons/fi';
import Footer from './Footer';

export default function FinancingPage({ onNavigateHome, onNavigatePage }) {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArn, setFormArn] = useState('');

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  const productSuite = [
    {
      title: 'Home Loan',
      description: 'Your highest-earning disbursal. Make it your flagship.',
      icon: <FiHome className="w-6 h-6 text-[#7C1FA8]" />,
      bgColor: 'bg-[#FAF6FC]',
      borderColor: 'border-purple-100',
      badgeColor: 'bg-purple-100 text-[#7C1FA8]'
    },
    {
      title: 'Loan Against Property',
      description: 'Clients have assets. Help them leverage every rupee.',
      icon: <FiLock className="w-6 h-6 text-[#C81E8C]" />,
      bgColor: 'bg-[#FDF2F8]',
      borderColor: 'border-pink-100',
      badgeColor: 'bg-pink-100 text-[#C81E8C]'
    },
    {
      title: 'Personal Loan',
      description: 'Fast approvals, zero collateral. Close deals faster.',
      icon: <FiUser className="w-6 h-6 text-[#F5A623]" />,
      bgColor: 'bg-[#FFFBEB]',
      borderColor: 'border-amber-100',
      badgeColor: 'bg-amber-100 text-[#D49300]'
    },
    {
      title: 'Business Loan',
      description: "Fund your clients' growth. Earn big on every sanction.",
      icon: <FiBriefcase className="w-6 h-6 text-[#2563EB]" />,
      bgColor: 'bg-[#EFF6FF]',
      borderColor: 'border-blue-100',
      badgeColor: 'bg-blue-100 text-[#2563EB]'
    },
    {
      title: 'Vehicle Loan',
      description: 'Cars, two-wheelers loans are a fast, easy win for new clients.',
      icon: <FiTruck className="w-6 h-6 text-[#059669]" />,
      bgColor: 'bg-[#ECFDF5]',
      borderColor: 'border-emerald-100',
      badgeColor: 'bg-emerald-100 text-[#059669]'
    },
    {
      title: 'Overdraft Facility',
      description: 'Flexible limits, repeat clients, recurring relationships.',
      icon: <FiCreditCard className="w-6 h-6 text-[#7C1FA8]" />,
      bgColor: 'bg-[#FAF6FC]',
      borderColor: 'border-purple-100',
      badgeColor: 'bg-purple-100 text-[#7C1FA8]'
    }
  ];

  const faqs = [
    {
      q: 'What types of loans can I offer my clients?',
      a: 'Home loans, LAP, personal, business, vehicle loans, and overdraft facilities that are distributed across 40+ banks and NBFCs through a single multi-lender DSA platform.'
    },
    {
      q: 'Do I need a certification to distribute loans?',
      a: 'No certification required to begin. DSA loan agent registration is straightforward which is why most new partners start with lending.'
    },
    {
      q: 'How do I earn on a loan?',
      a: 'You earn an upfront payout on every disbursal. Home loan DSA commissions are especially attractive because the larger the loan, the larger your payout.'
    },
    {
      q: 'Do I apply to each bank separately?',
      a: 'No, submit once and we route your client\'s application to the most suitable lenders across our 40+ bank and NBFC network.'
    },
    {
      q: 'Can I add loans to my existing investment or insurance clients?',
      a: 'Absolutely, financing is often the highest-value need your clients have, and the most natural product to layer onto your existing book.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-[#544F66] antialiased selection:bg-purple-100 selection:text-[#7C1FA8] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Background Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Top Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest">
                PROSPERI5 FINANCING PLATFORM
              </span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-sans font-extrabold text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] lg:text-[50px] lg:leading-[58px] tracking-[-0.03em] text-[#1E1B2E] mb-4">
              Your Clients Need Financing. <span className="bg-gradient-to-r from-[#7C1FA8] via-[#C81E8C] to-[#F5A623] bg-clip-text text-transparent">Serve Them. Earn Every Time.</span>
            </h1>

            {/* Support Para */}
            <p className="font-medium text-[15px] sm:text-[17px] leading-[26px] sm:leading-[29px] text-[#544F66] mb-7 max-w-[640px]">
              Through our platform cover your clients across home loans, LAP, personal, business, vehicle loans and more. Strengthen relationships while earning attractive upfront payouts on every disbursal.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="h-[52px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Register as a Partner</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Micro Trust Bullet Bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-[#1E1B2E] pt-1">
              <span className="flex items-center gap-1.5 text-[#1E1B2E]">
                <FiCheck className="w-4 h-4 text-[#7C1FA8] stroke-[3.5]" /> 40+ Bank &amp; NBFC Network
              </span>
              <span className="text-purple-200">•</span>
              <span className="flex items-center gap-1.5 text-[#1E1B2E]">
                <FiCheck className="w-4 h-4 text-[#7C1FA8] stroke-[3.5]" /> Upfront Disbursal Payouts
              </span>
              <span className="text-purple-200">•</span>
              <span className="flex items-center gap-1.5 text-[#1E1B2E]">
                <FiCheck className="w-4 h-4 text-[#7C1FA8] stroke-[3.5]" /> 100% Client Retention
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Financing Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/fin_home_clean.png"
                alt="Your Clients Need Financing - PROSPERi5"
                draggable={false}
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] max-w-[540px] object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* 2. SECTION: PRODUCT SUITE */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="bg-[#F5EEFB] text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
              PRODUCT SUITE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[36px] text-[#1E1B2E] tracking-tight">
              Multiple Financing Products. One Platform To Earn Through All.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productSuite.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setPartnerModalOpen(true)}
                className={`${item.bgColor} border ${item.borderColor} rounded-[24px] p-6 space-y-4 hover:shadow-xl hover:border-[#7C1FA8] transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#544F66] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[#7C1FA8] font-extrabold text-xs pt-2 group-hover:translate-x-1 transition-transform">
                  <span>Register &amp; Distribute</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SECTION: FAQ (Un-boxed & Compact) */}
        <section className="w-full space-y-6 py-2">
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="bg-[#F5EEFB] text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#1E1B2E] tracking-tight">
              Questions Partners Ask About Distributing Loans
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6FC] rounded-2xl border border-purple-100/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4.5 sm:p-5 text-left font-extrabold text-sm sm:text-base text-[#1E1B2E] flex justify-between items-center gap-4 hover:text-[#7C1FA8] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#7C1FA8] text-lg shrink-0 font-bold">
                    {openFaq === idx ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4.5 pb-4.5 text-xs sm:text-sm text-[#544F66] font-semibold leading-relaxed border-t border-purple-100/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECTION: CLOSING CTA (Ultra-Compact Low-Profile Strip) */}
        <section className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[20px] px-5 sm:px-7 py-3.5 sm:py-4 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 relative z-10 text-left">
            <div className="space-y-1 max-w-2xl">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider inline-block">
                UNLIMITED EARNING POTENTIAL
              </span>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl leading-snug text-white tracking-tight">
                Serve More. Earn More. Unlimited Upside.
              </h2>
            </div>
            
            <div className="shrink-0 w-full sm:w-auto text-center lg:text-right">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="bg-[#F5A623] hover:bg-[#D49300] text-[#1E1B2E] font-extrabold px-6 py-2.5 sm:py-3 rounded-xl text-xs shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5"
              >
                <span>Start Earning Now</span>
                <FiArrowRight className="w-4 h-4" />
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
                  💳
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#1E1B2E]">
                  Register as a Financing Partner
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
                  Start offering home loans, LAP, personal, business &amp; vehicle loans across 40+ banks &amp; NBFCs.
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
                    Submit &amp; Register Now →
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
                  Our Financing Partner Specialist will connect with you within 15 minutes to initiate your empanelment.
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
