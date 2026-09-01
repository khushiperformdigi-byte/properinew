import React, { useState } from 'react';

export default function FinancingPage({ onNavigateHome, onNavigatePage }) {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenureYears, setTenureYears] = useState(10);
  const [selectedOptionModal, setSelectedOptionModal] = useState(null);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) return { emi: 0, totalPayment: 0, totalInterest: 0 };

    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return { emi, totalPayment, totalInterest };
  };

  const { emi, totalPayment, totalInterest } = calculateEMI();

  const scrollToProducts = () => {
    const el = document.getElementById('financing-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const financingProducts = [
    {
      id: 'home-loans',
      title: 'Home Loans',
      subtitle: 'Turn your dream home into reality with competitive rates and easy EMIs.',
      image: '/fin_home_clean.png',
      bgGradient: 'bg-white',
      cardBorder: 'border-purple-200/90',
      iconBg: 'bg-[#7C1FA8]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'lap',
      title: 'Loan Against Property',
      subtitle: 'Leverage the value of your real estate assets to unlock low-cost capital.',
      image: '/fin_vault_clean.png',
      bgGradient: 'bg-white',
      cardBorder: 'border-amber-200/90',
      iconBg: 'bg-[#F59E0B]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'personal-loans',
      title: 'Personal Loans',
      subtitle: "Access flexible, multi-purpose funds for life's immediate financial needs.",
      image: '/fin_wallet_clean.png',
      bgGradient: 'bg-white',
      cardBorder: 'border-pink-200/90',
      iconBg: 'bg-[#EC4899]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'business-loans',
      title: 'Business Loans',
      subtitle: 'Power your enterprise expansion with customized, quick-disposal capital.',
      image: '/fin_chart_clean.png',
      bgGradient: 'bg-white',
      cardBorder: 'border-blue-200/90',
      iconBg: 'bg-[#3B82F6]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'working-capital',
      title: 'Working Capital Finance',
      subtitle: 'Maintain smooth cash flows, manage inventory, and fund daily operations.',
      image: '/working_capital_3d_clean.jpg',
      bgGradient: 'bg-white',
      cardBorder: 'border-emerald-200/90',
      iconBg: 'bg-[#10B981]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'overdraft',
      title: 'Overdraft Facilities',
      subtitle: 'Enjoy on-demand credit lines with interest charged only on utilized amount.',
      image: '/overdraft_3d_clean.jpg',
      bgGradient: 'bg-white',
      cardBorder: 'border-teal-200/90',
      iconBg: 'bg-[#14B8A6]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'vehicle-loans',
      title: 'Vehicle Loans',
      subtitle: 'Drive your personal or commercial vehicle with tailored financing options.',
      image: '/fin_car_clean.png',
      bgGradient: 'bg-white',
      cardBorder: 'border-violet-200/90',
      iconBg: 'bg-[#8B5CF6]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 102 0m-2 0a1 1 0 112 0m6 0a1 1 0 102 0m-2 0a1 1 0 112 0" />
        </svg>
      )
    },
    {
      id: 'vendor-financing',
      title: 'Vendor Financing',
      subtitle: 'Optimize supply chain liquidity and build stronger trade relationships.',
      image: '/fin_books_clean.png',
      bgGradient: 'bg-white',
      cardBorder: 'border-rose-200/90',
      iconBg: 'bg-[#F43F5E]',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  const whyChoosePoints = [
    {
      step: '01',
      title: 'Access to Multiple Lending Partners',
      description: 'Compare financing options across a wide network of banks and financial institutions, helping you find the solution that best fits your requirement.',
      isPastel: true,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Competitive Financing Solutions',
      description: 'Access financing options designed to offer competitive interest rates, flexible repayment structures and terms that align with your financial needs.',
      isPastel: false,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'End-to-End Documentation Support',
      description: 'From application and documentation to coordination with lenders, we assist you through every step of the financing process.',
      isPastel: true,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Efficient Processing',
      description: 'Our experienced team works closely with lending partners to help ensure a smooth and timely financing experience.',
      isPastel: false,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      step: '05',
      title: 'Solutions for Diverse Financing Needs',
      description: "Whether you're buying a home, expanding your business, purchasing a vehicle or managing working capital, access a comprehensive range of financing solutions through one trusted partner.",
      isPastel: true,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-body-text antialiased selection:bg-purple-100 selection:text-primary-purple overflow-x-hidden">
      
      {/* SCREEN 1: HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 -mt-[76px] lg:-mt-[84px] pt-[104px] sm:pt-[112px] lg:pt-[120px] pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Light Purple Background Overlay on Right */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[550px] h-[550px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: Badge, Headline, Subheadline, CTA Button */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest font-sans">
                PROSPERi5 FINANCING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-[36px] leading-[44px] sm:text-[46px] sm:leading-[54px] lg:text-[52px] lg:leading-[60px] tracking-[-0.03em] text-[#1E1B2E] mb-4 max-w-[600px]">
              Finance Your Aspirations with <span className="text-[#7C1FA8]">Confidence.</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-7 max-w-[560px]">
              Whether you're buying a home, growing your business or meeting personal financial needs, PROSPERi5 helps you find financing solutions that work for you.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-3.5 mb-6">
              <button
                onClick={scrollToProducts}
                className="h-[48px] sm:h-[52px] px-7 sm:px-9 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Explore Financing Solutions</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Highlight Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-purple-100/90 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1E1B2E] shadow-2xs">
                <span className="text-amber-500 font-black">⚡</span>
                <span>Fast Approvals</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-purple-100/90 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1E1B2E] shadow-2xs">
                <span className="text-[#7C1FA8] font-black">🔒</span>
                <span>Competitive Interest Rates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-purple-100/90 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1E1B2E] shadow-2xs">
                <span className="text-emerald-600 font-black">💼</span>
                <span>Multiple Lending Partners</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Hero Graphic */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/ChatGPT Image Aug 29, 2026, 10_37_45 PM.png"
                alt="Finance Your Aspirations with Confidence - PROSPERi5"
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] max-w-[580px] object-contain drop-shadow-xl select-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SCREEN 2: VALUE BANNER SECTION */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[22px] p-5 sm:p-7 lg:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Ambient Background Glow */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-2 text-center md:text-left max-w-3xl relative z-10">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase inline-block">
                TRUSTED BORROWING PARTNER
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                The Right Financing Can Turn Plans into Possibilities.
              </h2>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium leading-relaxed">
                Every financial requirement is different. Access financing solutions through one trusted partner with support throughout your borrowing journey.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <button
                onClick={() => setSelectedOptionModal({ title: 'Talk To a Financing Expert', subtitle: "Connect with our financing specialists to find solutions tailored to your needs." })}
                className="bg-white hover:bg-purple-50 text-[#7C1FA8] font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Get Expert Support</span>
                <span>➔</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SCREEN 3: FINANCING PRODUCTS SECTION */}
      <section id="financing-products-section" className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase block">
              FINANCING PRODUCTS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              Financing Solutions for Every Requirement
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
              Explore our comprehensive portfolio of tailored financing options designed to power your home, personal, and business milestones.
            </p>
          </div>

          {/* 8 Product Cards Grid (4 columns on lg, 2 columns on sm) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {financingProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedOptionModal({ title: product.title, subtitle: product.subtitle })}
                className={`bg-white border-2 ${product.cardBorder} hover:border-[#7C1FA8] hover:shadow-2xl hover:scale-[1.02] rounded-[24px] p-6 transition-all duration-300 shadow-md group cursor-pointer flex flex-col justify-between relative overflow-hidden min-h-[230px]`}
              >
                <div className="space-y-4 relative z-10">
                  {/* Icon Badge */}
                  <div className={`w-11 h-11 rounded-2xl ${product.iconBg} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-extrabold text-lg text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#4A4458] font-semibold leading-relaxed">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-purple-100 mt-4 relative z-10 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#7C1FA8] group-hover:translate-x-1.5 transition-all flex items-center gap-1.5">
                    <span>Apply Now</span>
                    <span>→</span>
                  </span>
                </div>

                {/* Background 3D Graphic */}
                <div className="absolute right-[-8px] bottom-[-8px] w-24 h-24 sm:w-28 sm:h-28 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none overflow-hidden rounded-br-[22px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ mixBlendMode: 'multiply' }}
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SCREEN 4: WHY FINANCE THROUGH PROSPERi5 SECTION */}
      <section className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-block bg-amber-400 text-[#1E1B2E] font-extrabold px-5 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-2xs mb-1">
              WHY CHOOSE PROSPERi5
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#1E1B2E] leading-tight tracking-tight">
              Why Finance Through PROSPERi5
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              We streamline your borrowing process with multi-lender access, competitive terms, and dedicated end-to-end guidance.
            </p>
          </div>

          {/* Timeline List Layout matching Screenshot 1 */}
          <div className="max-w-4xl mx-auto relative space-y-6 sm:space-y-7">
            {/* Connecting Vertical Timeline Line */}
            <div className="absolute left-[19px] sm:left-[23px] top-[24px] bottom-[24px] w-[2px] bg-purple-200/80 pointer-events-none z-0"></div>

            {whyChoosePoints.map((point) => (
              <div key={point.step} className="flex items-center gap-4 sm:gap-6 relative z-10">
                
                {/* Timeline Number Circle */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#7C1FA8] text-[#7C1FA8] font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm">
                  {point.step}
                </div>

                {/* Staggered Card Container */}
                <div 
                  className={`flex-1 rounded-[22px] p-5 sm:p-6 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer ${
                    point.isPastel 
                      ? 'bg-[#F6EFFC] border border-[#EADBFA] shadow-2xs hover:shadow-md hover:border-[#7C1FA8]' 
                      : 'bg-white border border-purple-100/90 shadow-md hover:shadow-xl hover:border-[#7C1FA8] ml-3 sm:ml-10'
                  }`}
                >
                  {/* Left Text Block */}
                  <div className="space-y-1 text-left max-w-2xl">
                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Right Circle Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#7C1FA8] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPACT EMI CALCULATOR SECTION */}
      <section className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F7F2FB] border border-[#E8DEF3] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Box Header */}
              <div className="lg:col-span-4 space-y-2 text-left border-b lg:border-b-0 lg:border-r border-purple-200/60 pb-6 lg:pb-0 lg:pr-8">
                <span className="text-[#7C1FA8] text-xs font-extrabold uppercase tracking-wider block">
                  INTERACTIVE EMI CALCULATOR
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E] leading-tight">
                  Calculate Your Monthly EMI in Seconds
                </h3>
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Adjust loan amount, interest rate, and tenure to visualize your monthly outflow and plan your finances better.
                </p>
              </div>

              {/* Sliders Area */}
              <div className="lg:col-span-5 space-y-5">
                {/* Loan Amount Slider */}
                <div className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span className="text-[#5E1683]">Loan Amount</span>
                    <span className="text-[#1E1B2E] text-sm">₹ {loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range"
                    min="100000"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7C1FA8]"
                  />
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span className="text-[#5E1683]">Interest Rate (% p.a.)</span>
                    <span className="text-[#1E1B2E] text-sm">{interestRate}%</span>
                  </div>
                  <input 
                    type="range"
                    min="6"
                    max="18"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7C1FA8]"
                  />
                </div>

                {/* Tenure Slider */}
                <div className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span className="text-[#5E1683]">Tenure (Years)</span>
                    <span className="text-[#1E1B2E] text-sm">{tenureYears} Years</span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(parseInt(e.target.value) || 0)}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7C1FA8]"
                  />
                </div>
              </div>

              {/* Estimated EMI Result */}
              <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-purple-100 text-center shadow-xs flex flex-col justify-center space-y-3">
                <span className="text-xs font-extrabold text-[#8E8A9D] uppercase block">Estimated Monthly EMI</span>
                <div className="text-3xl font-extrabold text-[#7C1FA8] tracking-tight">
                  ₹ {emi.toLocaleString('en-IN')}
                </div>
                <button
                  onClick={() => setSelectedOptionModal({ title: 'Financing Callback', subtitle: `Selected Loan: ₹${loanAmount.toLocaleString('en-IN')} @ ${interestRate}% for ${tenureYears} years` })}
                  className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-2.5 rounded-xl text-xs shadow-md transition-all cursor-pointer"
                >
                  Apply For This Loan →
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 5: FINAL CTA SECTION */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[22px] p-5 sm:p-7 lg:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Ambient Lighting Accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-2 text-center md:text-left max-w-3xl relative z-10">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase inline-block">
                GET STARTED TODAY
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                Let's Turn Your Plans into Reality
              </h2>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium leading-relaxed">
                Whether you're financing a home, business expansion or personal aspirations, we're here to help you move forward with confidence.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <button
                onClick={() => setSelectedOptionModal({ title: 'Talk To a Financing Expert', subtitle: "Connect with our senior financing specialists to get your custom offers." })}
                className="bg-white hover:bg-purple-50 text-[#7C1FA8] font-extrabold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Talk To a Financing Expert</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* LEAD GENERATION MODAL DIALOG */}
      {selectedOptionModal && (
        <div className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white bg-cover bg-center rounded-[28px] max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-purple-100/80 animate-in fade-in zoom-in-95 duration-200 text-left overflow-hidden"
            style={{ backgroundImage: `url("/ChatGPT Image Aug 21, 2026, 10_49_29 AM.png")` }}
          >
            {/* Translucent Overlay */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-0 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#7C1FA8] via-[#EC4899] to-[#F59E0B]"></div>

              {/* Close Button */}
              <button 
                onClick={() => {
                  setSelectedOptionModal(null);
                  setModalSubmitted(false);
                }}
                className="absolute top-0 right-0 text-gray-400 hover:text-[#7C1FA8] w-8 h-8 rounded-full bg-gray-100/90 hover:bg-purple-100 flex items-center justify-center font-extrabold text-sm cursor-pointer transition-colors z-20"
              >
                ✕
              </button>

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
                        className="w-full bg-white/95 border border-[#EBE8EF] focus:border-[#7C1FA8] rounded-xl p-2.5 text-xs font-bold text-[#1E1B2E] outline-none transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold text-[#1E1B2E] block mb-1">Phone Number *</label>
                      <div className="flex items-center bg-white/95 border border-[#EBE8EF] focus-within:border-[#7C1FA8] rounded-xl overflow-hidden shadow-2xs">
                        <select className="bg-transparent pl-2.5 pr-1 py-2.5 text-xs font-bold text-[#1E1B2E] outline-none border-r border-[#EBE8EF] cursor-pointer">
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
                          className="w-full bg-transparent p-2.5 text-xs font-bold text-[#1E1B2E] outline-none"
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

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
