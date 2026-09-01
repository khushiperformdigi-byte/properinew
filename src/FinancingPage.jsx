import React, { useState } from 'react';
import { FiCheck, FiArrowRight, FiPlus, FiMinus, FiHome, FiLock, FiUser, FiBriefcase, FiTruck, FiCreditCard } from 'react-icons/fi';
import Footer from './Footer';

export default function FinancingPage({ onNavigateHome, onNavigatePage }) {
  const [activeStep, setActiveStep] = useState('01');
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenureYears, setTenureYears] = useState(10);
  const [selectedOptionModal, setSelectedOptionModal] = useState(null);
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

  const productSuite = [
    {
      id: 'home-loans',
      title: 'Home Loans',
      subtitle: 'Turn your dream home into reality with competitive rates and easy EMIs.',
      description: 'Turn your dream home into reality with competitive rates and easy EMIs.',
      image: '/fin_home_clean.png',
      bgGradient: 'bg-[#FAF4FD]',
      cardBorder: 'border-[#EBE3F5]',
      iconBg: 'bg-purple-100/60 border border-purple-200/60',
      iconColor: 'text-[#8B1FA8]',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'lap',
      title: 'Loan Against Property',
      subtitle: 'Leverage the value of your real estate assets to unlock low-cost capital.',
      description: 'Clients have assets. Help them leverage every rupee.',
      image: '/fin_vault_clean.png',
      bgGradient: 'bg-[#FFFBEB]',
      cardBorder: 'border-[#FEF3C7]',
      iconBg: 'bg-amber-100/60 border border-amber-200/60',
      iconColor: 'text-amber-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'personal-loans',
      title: 'Personal Loans',
      subtitle: "Access flexible, multi-purpose funds for life's immediate financial needs.",
      description: 'Fast approvals, zero collateral. Close deals faster.',
      image: '/fin_wallet_clean.png',
      bgGradient: 'bg-[#FDF2F8]',
      cardBorder: 'border-[#FCE7F3]',
      iconBg: 'bg-pink-100/80 border border-pink-200/80',
      iconColor: 'text-pink-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'business-loans',
      title: 'Business Loans',
      subtitle: 'Power your enterprise expansion with customized, quick-disposal capital.',
      description: "Fund your clients' growth. Earn big on every sanction.",
      image: '/fin_chart_clean.png',
      bgGradient: 'bg-[#EFF6FF]',
      cardBorder: 'border-[#DBEAFE]',
      iconBg: 'bg-blue-100/60 border border-blue-200/60',
      iconColor: 'text-blue-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'working-capital',
      title: 'Working Capital Finance',
      subtitle: 'Maintain smooth cash flows, manage inventory, and fund daily operations.',
      description: 'Maintain smooth cash flows, manage inventory, and fund daily operations.',
      image: '/working_capital_3d_clean.jpg',
      bgGradient: 'bg-[#F0FDF4]',
      cardBorder: 'border-[#DCFCE7]',
      iconBg: 'bg-emerald-100/60 border border-emerald-200/60',
      iconColor: 'text-emerald-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'overdraft',
      title: 'Overdraft Facilities',
      subtitle: 'Enjoy on-demand credit lines with interest charged only on utilized amount.',
      description: 'Flexible limits, repeat clients, recurring relationships.',
      image: '/overdraft_3d_clean.jpg',
      bgGradient: 'bg-[#F0FDFA]',
      cardBorder: 'border-[#CCFBF1]',
      iconBg: 'bg-teal-100/80 border border-teal-200/80',
      iconColor: 'text-teal-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'vehicle-loans',
      title: 'Vehicle Loans',
      subtitle: 'Drive your personal or commercial vehicle with tailored financing options.',
      description: 'Cars, two-wheelers loans are a fast, easy win for new clients.',
      image: '/fin_car_clean.png',
      bgGradient: 'bg-[#F5F3FF]',
      cardBorder: 'border-[#DDD6FE]',
      iconBg: 'bg-purple-100/80 border border-purple-200/80',
      iconColor: 'text-purple-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 102 0m-2 0a1 1 0 112 0m6 0a1 1 0 102 0m-2 0a1 1 0 112 0" />
        </svg>
      )
    },
    {
      id: 'vendor-financing',
      title: 'Vendor Financing',
      subtitle: 'Optimize supply chain liquidity and build stronger trade relationships.',
      description: 'Optimize supply chain liquidity and build stronger trade relationships.',
      image: '/fin_books_clean.png',
      bgGradient: 'bg-[#FFF7ED]',
      cardBorder: 'border-[#FFEDD5]',
      iconBg: 'bg-orange-100/60 border border-orange-200/60',
      iconColor: 'text-orange-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
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
    <div className="min-h-screen bg-[#FAF8FC] font-sans text-[#544F66] antialiased selection:bg-purple-100 selection:text-[#7C1FA8] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 -mt-[88px] lg:-mt-[104px] pt-[130px] sm:pt-[145px] lg:pt-[160px] pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
        
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
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-7 max-w-[540px]">
              Through our platform cover your clients across home loans, LAP, personal, business, vehicle loans and more. Strengthen relationships while earning attractive upfront payouts on every disbursal.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={handlePartnerRedirect}
                className="h-[52px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Register as a Partner</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Highlight Pills - All 3 Points on a Single Line */}
            <div className="flex flex-nowrap items-center gap-2 pt-1 overflow-x-auto scrollbar-none no-scrollbar max-w-full">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-purple-100/90 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#1E1B2E] shadow-2xs whitespace-nowrap shrink-0">
                <span className="text-amber-500 font-black">⚡</span>
                <span>Fast Approvals</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-purple-100/90 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#1E1B2E] shadow-2xs whitespace-nowrap shrink-0">
                <span className="text-[#7C1FA8] font-black">🔒</span>
                <span>Competitive Interest Rates</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-purple-100/90 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#1E1B2E] shadow-2xs whitespace-nowrap shrink-0">
                <span className="text-emerald-600 font-black">💼</span>
                <span>Multiple Lending Partners</span>
              </div>
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
                onClick={handlePartnerRedirect}
                className={`${item.bgColor || 'bg-[#FAF6FC]'} border ${item.borderColor || 'border-purple-100'} rounded-[24px] p-6 space-y-4 hover:shadow-xl hover:border-[#7C1FA8] transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#544F66] leading-relaxed">
                    {item.description || item.subtitle}
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

      {/* SCREEN 4: WHY FINANCE THROUGH PROSPERi5 SECTION */}
      <section className="w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-block bg-amber-400 text-[#1E1B2E] font-extrabold px-5 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-2xs mb-1">
              WHY CHOOSE PROSPERi5
            </div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-[#1E1B2E] leading-tight tracking-tight">
              Why Finance Through PROSPERi5
            </h2>
            <p className="font-medium text-base text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              We streamline your borrowing process with multi-lender access, competitive terms, and dedicated end-to-end guidance.
            </p>
          </div>

          {/* Vertical Timeline List Matching Five Reasons Partners Switch Section */}
          <div className="max-w-4xl mx-auto relative space-y-4 sm:space-y-5">
            {/* Connecting Vertical Timeline Line */}
            <div className="absolute left-[19px] sm:left-[23px] top-[24px] bottom-[24px] w-[2px] bg-purple-200/80 pointer-events-none z-0"></div>

            {whyChoosePoints.map((point) => {
              const isActive = activeStep === point.step;
              return (
                <div 
                  key={point.step} 
                  className="flex items-center gap-4 sm:gap-6 relative z-10"
                  onMouseEnter={() => setActiveStep(point.step)}
                >
                  
                  {/* Timeline Number Circle */}
                  <div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#7C1FA8] text-white shadow-md scale-105' 
                        : 'bg-white border-2 border-purple-300 text-[#7C1FA8] shadow-xs'
                    }`}
                  >
                    {point.step}
                  </div>

                  {/* Card Container - Matching Homepage Active/Inactive styling */}
                  <div 
                    className={`flex-1 rounded-[22px] p-5 sm:p-6 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer ${
                      isActive 
                        ? 'bg-[#7C1FA8] text-white shadow-xl shadow-purple-950/20' 
                        : 'bg-white border border-purple-100/90 shadow-xs hover:shadow-md hover:border-purple-300'
                    }`}
                  >
                    {/* Left Text Block */}
                    <div className="space-y-1 text-left max-w-2xl">
                      <h3 className={`font-sans font-extrabold text-base sm:text-xl leading-tight transition-colors ${
                        isActive ? 'text-white' : 'text-[#1E1B2E] group-hover:text-[#7C1FA8]'
                      }`}>
                        {point.title}
                      </h3>
                      <p className={`text-base font-medium leading-relaxed transition-colors ${
                        isActive ? 'text-purple-100' : 'text-[#544F66]'
                      }`}>
                        {point.description}
                      </p>
                    </div>

                    {/* Right Circle Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-[#7C1FA8] shadow-md scale-105'
                        : 'bg-purple-50 text-[#7C1FA8] group-hover:bg-[#7C1FA8] group-hover:text-white'
                    }`}>
                      {React.cloneElement(point.icon, {
                        className: `w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                          isActive ? 'text-[#7C1FA8]' : 'text-[#7C1FA8] group-hover:text-white'
                        }`
                      })}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
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

          <div className="max-w-7xl mx-auto space-y-3">
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
                onClick={handlePartnerRedirect}
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
                className="text-gray-400 hover:text-[#7C1FA8] w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center font-extrabold text-sm cursor-pointer transition-colors z-20"
              >
                ✕
              </button>
            </div>

              {!modalSubmitted ? (
                <>
                  <div className="space-y-1 pr-6">
                    <span className="bg-purple-100 text-[#7C1FA8] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                      PROSPERI5 FINANCING
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1B2E]">
                      {selectedOptionModal.title}
                    </h3>
                    {selectedOptionModal.subtitle && (
                      <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                        {selectedOptionModal.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Lead Form */}
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setModalSubmitted(true);
                    }}
                    className="space-y-3.5 pt-1"
                  >
                    <div>
                      <label className="text-xs font-extrabold text-[#1E1B2E] block mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-white border border-gray-300 focus:border-[#7C1FA8] rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] placeholder:text-gray-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold text-[#1E1B2E] block mb-1">Phone Number *</label>
                      <div className="flex items-center bg-white border border-gray-300 focus-within:border-[#7C1FA8] rounded-xl overflow-hidden">
                        <select className="bg-white pl-2.5 pr-1 py-2.5 text-xs font-bold text-[#1E1B2E] outline-none border-r border-gray-300 cursor-pointer">
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+65">🇸🇬 +65</option>
                        </select>
                        <input 
                          type="tel" 
                          required 
                          placeholder="e.g. 98765 43210"
                          className="w-full bg-white p-2.5 text-xs font-medium text-[#1E1B2E] placeholder:text-gray-400 outline-none"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Request Financing Offer</span>
                      <span>→</span>
                    </button>

                    <p className="text-[10px] text-center text-gray-400 font-medium">
                      🔒 100% confidential. Zero spam guaranteed.
                    </p>
                  </form>
                </>
              ) : (
                /* Success View */
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-extrabold text-[#1E1B2E]">Request Submitted!</h4>
                    <p className="text-xs text-[#544F66] font-medium max-w-xs mx-auto leading-relaxed">
                      Thank you! A PROSPERi5 financing specialist will connect with you shortly to assist with your requirement.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedOptionModal(null);
                      setModalSubmitted(false);
                    }}
                    className="bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}

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
