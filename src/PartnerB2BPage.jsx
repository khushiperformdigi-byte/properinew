import React, { useState } from 'react';

export default function PartnerB2BPage({ onNavigateHome, onNavigatePage }) {
  const [selectedModal, setSelectedModal] = useState(null); // 'partner' | 'demo' | null
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Form states for Section 8 inline form & popup modal
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArn, setFormArn] = useState('');
  const [inlineSubmitted, setInlineSubmitted] = useState(false);

  const handleInlineFormSubmit = (e) => {
    e.preventDefault();
    setInlineSubmitted(true);
    setTimeout(() => {
      setInlineSubmitted(false);
      setFormName('');
      setFormPhone('');
      setFormArn('');
    }, 4000);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('partner-product-offering');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefitsList = [
    {
      step: '01',
      title: 'Highest Revenue Share',
      description: 'Earn up to 30% more from your existing client.',
      isPastel: true
    },
    {
      step: '02',
      title: '50+ Products',
      description: 'Offer multiple products through our platform and earn the additional income which you were otherwise losing out.',
      isPastel: false
    },
    {
      step: '03',
      title: 'End to End Operational Support',
      description: 'We handle the backend processing and administrative tasks so you can focus entirely on your clients.',
      isPastel: true
    },
    {
      step: '04',
      title: 'Zero Joining Fee',
      description: 'No joining fees ensure that you start your journey with zero charges/investment.',
      isPastel: false
    },
    {
      step: '05',
      title: 'You Own Your Clients. Always.',
      description: 'Every relationship you bring to PROSPERi5 stays yours.',
      isPastel: true
    }
  ];

  const comparisonRows = [
    { cap: 'Revenue share to partner', p5: 'Up to 90%', nd1: '50–75%', nd2: '50–75%' },
    { cap: 'Mutual funds', p5: true, nd1: true, nd2: true },
    { cap: 'Life & Health Insurance', p5: true, nd1: false, nd2: true },
    { cap: 'Other General Insurance', p5: true, nd1: false, nd2: false },
    { cap: 'AIF / PMS', p5: true, nd1: true, nd2: true },
    { cap: 'Loans', p5: true, nd1: false, nd2: true },
    { cap: 'Equity / Unlisted', p5: true, nd1: false, nd2: false },
    { cap: 'New Age Investment', p5: true, nd1: false, nd2: false },
    { cap: 'Full back-office operations', p5: true, nd1: false, nd2: false },
    { cap: 'Zero joining & platform fees', p5: true, nd1: false, nd2: false }
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Identify the Client Need',
      desc: 'Recognise the requirement for the product or service that falls outside your area of expertise.'
    },
    {
      step: '02',
      title: 'Refer the Opportunity',
      desc: 'Introduce the client or share the lead with the PROSPERi5 team.'
    },
    {
      step: '03',
      title: 'Solutioning by Experts',
      desc: 'Our specialists engage with the client, understand their requirements, and recommend the most suitable solution.'
    },
    {
      step: '04',
      title: 'Client Requirement Fulfilled',
      desc: 'The client receives the right product and a seamless service experience.'
    },
    {
      step: '05',
      title: 'Earn Revenue & Retain Relationship',
      desc: 'You earn your share of the revenue while continuing to own and strengthen the client relationship.'
    }
  ];

  const testimonials = [
    {
      quote: "Partnering with PROSPERi5 allowed me to offer loans and AIFs to my existing mutual fund clients. My revenue increased by 35% in the first quarter alone.",
      name: "Arvind Sharma",
      role: "Mutual Fund Distributor",
      location: "Delhi",
      avatar: "/Portrait 2.png"
    },
    {
      quote: "The back-office support is phenomenal. I refer opportunities, their experts handle documentation, and I get timely monthly payouts while keeping my client relationships 100% mine.",
      name: "Pooja Hegde",
      role: "Financial Planner",
      location: "Mumbai",
      avatar: "/Portrait 2 (2).png"
    },
    {
      quote: "Zero joining fee and 50+ products under one roof. Joining PROSPERi5 was the best decision for my advisory business.",
      name: "Siddharth Rao",
      role: "Wealth Advisor",
      location: "Hyderabad",
      avatar: "/Portrait 2 (3).png"
    }
  ];

  const faqs = [
    {
      q: 'Who owns my client relationship? Does PROSPERi5 contact my clients directly?',
      a: 'Your clients are always yours. We work in the background to process transactions under your name, and we never contact your clients directly without your explicit permission for a specific deal.'
    },
    {
      q: 'Are there any hidden fees, platform charges, or minimum AUM requirements?',
      a: "None. There's no joining fee, no platform fee, and no minimum business target, as we earn only from the standard product fees and trail commissions your clients already pay, and we share that with you."
    },
    {
      q: 'I don\'t know enough about AIF, PMS, or insurance to recommend them confidently. Does that matter?',
      a: "Not at all, that's exactly what our refer-in model is for. Tell your RM what your client needs, and our specialists handle the advice, paperwork, and execution while you stay the relationship owner."
    },
    {
      q: 'How long does empanelment actually take, and what documentation do I need?',
      a: 'Empanelment takes between 24 to 48 hours after you submit your ARN, PAN, bank details, and one cancelled cheque. Your RM manages all the paperwork with the companies, so you don\'t have to chase anyone.'
    },
    {
      q: 'What is your payout schedule? How do I know I will receive my commissions on time?',
      a: 'You receive trail commissions on a fixed monthly schedule, visible on your live dashboard before every payout. Every rupee you\'ve earned is shown to you in advance, so there\'s never any guesswork.'
    },
    {
      q: 'Can I join PROSPERi5 if I already distribute through another aggregator? Do I have to leave them?',
      a: 'No, AMFI rules allow you to work with multiple platforms under the same ARN for different products. Your RM will guide you on exactly which products you can start with us without disturbing your existing setup.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-body-text antialiased selection:bg-purple-100 selection:text-primary-purple overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 -mt-[76px] lg:-mt-[84px] pt-[104px] sm:pt-[112px] lg:pt-[120px] pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Background Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[550px] h-[550px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Top Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest font-sans">
                PROSPERi5 PARTNER PLATFORM
              </span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-sans font-extrabold text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] lg:text-[50px] lg:leading-[58px] tracking-[-0.03em] text-[#1E1B2E] mb-4 max-w-[660px]">
              The Multi-Asset Wealth Management Platform for <span className="text-[#7C1FA8]">Every Partner</span>
            </h1>

            {/* Sub Heading */}
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-5 max-w-[620px]">
              Join the financial advisors increasing their revenue by offering wealth solution through investment, insurance, and financing solutions to their clients.
            </p>

            {/* Purple Banner Strip */}
            <div className="bg-[#4E0C72] bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] text-white px-4 sm:px-6 py-2.5 rounded-2xl border border-purple-300/30 text-xs sm:text-sm font-extrabold mb-6 w-full max-w-[640px] flex flex-wrap items-center justify-between gap-2 shadow-md">
              <span>Up to 30% more Revenue</span>
              <span className="text-purple-300 hidden sm:inline">•</span>
              <span>50+ Products</span>
              <span className="text-purple-300 hidden sm:inline">•</span>
              <span>Timely Payouts</span>
              <span className="text-purple-300 hidden sm:inline">•</span>
              <span>0 Joining Fee</span>
            </div>

            {/* Primary CTA Button */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <button
                onClick={() => setSelectedModal('partner')}
                className="h-[48px] sm:h-[52px] px-8 sm:px-9 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Get Started — Zero Fee</span>
                <span>→</span>
              </button>

              <button
                onClick={() => setSelectedModal('demo')}
                className="h-[48px] sm:h-[52px] px-7 sm:px-8 rounded-xl border-2 border-[#7C1FA8] text-[#7C1FA8] hover:bg-purple-50 font-extrabold text-sm sm:text-base transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Micro Trust Bar */}
            <div className="flex items-center gap-3 text-xs font-bold text-[#666077]">
              <span className="text-emerald-600">✓ 24-48h Empanelment</span>
              <span>•</span>
              <span className="text-emerald-600">✓ 100% Client Ownership</span>
              <span>•</span>
              <span className="text-emerald-600">✓ Dedicated RM</span>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Partner Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/ChatGPT Image Aug 26, 2026, 03_11_20 PM.png"
                alt="Multi-Asset Wealth Management Platform for Every Partner - PROSPERi5"
                className="w-full h-auto max-h-[360px] sm:max-h-[400px] lg:max-h-[420px] max-w-[540px] object-contain drop-shadow-xl select-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: PRODUCT OFFERING */}
      <section id="partner-product-offering" className="w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase block">
              COMPLETE WEALTH ECOSYSTEM
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              A Complete Financial Ecosystem For Your Clients
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
              PROSPERi5 gives you access to the complete wealth ecosystem, helping you become the first call for every financial need. Instead of watching clients turn elsewhere for products you don't offer, you can deepen relationships, increase wallet share, and ensure more of their financial journey stays with you.
            </p>
          </div>

          {/* 3 Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Product 1: Investment */}
            <div className="bg-white border-2 border-purple-200/90 rounded-[22px] p-6 shadow-md hover:shadow-2xl hover:border-[#7C1FA8] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#7C1FA8] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                  Investment
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4458] font-semibold leading-relaxed">
                  Give your clients access to a portfolio of traditional and new-age investments.
                </p>
              </div>
              <button
                onClick={() => onNavigatePage ? onNavigatePage('investment') : setSelectedModal('partner')}
                className="w-full bg-[#FAF6FC] group-hover:bg-[#7C1FA8] text-[#7C1FA8] group-hover:text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Explore Investment Products</span>
                <span>→</span>
              </button>
            </div>

            {/* Product 2: Insurance */}
            <div className="bg-white border-2 border-pink-200/90 rounded-[22px] p-6 shadow-md hover:shadow-2xl hover:border-[#7C1FA8] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#EC4899] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                  Insurance
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4458] font-semibold leading-relaxed">
                  Help your clients protect what matters with a comprehensive range of insurance solutions.
                </p>
              </div>
              <button
                onClick={() => onNavigatePage ? onNavigatePage('insurance') : setSelectedModal('partner')}
                className="w-full bg-[#FAF6FC] group-hover:bg-[#7C1FA8] text-[#7C1FA8] group-hover:text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Explore Insurance Products</span>
                <span>→</span>
              </button>
            </div>

            {/* Product 3: Financing */}
            <div className="bg-white border-2 border-emerald-200/90 rounded-[22px] p-6 shadow-md hover:shadow-2xl hover:border-[#7C1FA8] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                  Financing
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4458] font-semibold leading-relaxed">
                  Help your clients access the ideal financing solutions for their personal and business requirements.
                </p>
              </div>
              <button
                onClick={() => onNavigatePage ? onNavigatePage('financing') : setSelectedModal('partner')}
                className="w-full bg-[#FAF6FC] group-hover:bg-[#7C1FA8] text-[#7C1FA8] group-hover:text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Explore Financing Products</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: BENEFITS OF JOINING PROSPERI5 */}
      <section className="w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-block bg-amber-400 text-[#1E1B2E] font-extrabold px-5 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-2xs mb-1">
              WHY PARTNERS SWITCH
            </div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-[#1E1B2E] leading-tight tracking-tight">
              Five Reasons Partners Switch To PROSPERi5
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              Your competition has already started distributing more than one product. It is time to expand your advisory suite and become the only expert your clients need. Here are the benefits of joining PROSPERi5.
            </p>
          </div>

          {/* Staggered Vertical Timeline List Matching Reference Layout */}
          <div className="max-w-4xl mx-auto relative space-y-5 sm:space-y-6">
            {/* Connecting Vertical Timeline Line */}
            <div className="absolute left-[19px] sm:left-[23px] top-[24px] bottom-[24px] w-[2px] bg-purple-200/80 pointer-events-none z-0"></div>

            {benefitsList.map((item) => (
              <div key={item.step} className="flex items-center gap-4 sm:gap-6 relative z-10">
                
                {/* Number Circle */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#7C1FA8] text-[#7C1FA8] font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm">
                  {item.step}
                </div>

                {/* Staggered Card */}
                <div 
                  className={`flex-1 rounded-[20px] p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer ${
                    item.isPastel 
                      ? 'bg-[#F6EFFC] border border-[#EADBFA] shadow-2xs hover:shadow-md hover:border-[#7C1FA8]' 
                      : 'bg-white border border-purple-100/90 shadow-md hover:shadow-xl hover:border-[#7C1FA8] ml-3 sm:ml-10'
                  }`}
                >
                  <div className="space-y-1 text-left max-w-2xl">
                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#7C1FA8] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: COMPARISON TABLE */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto pt-2 sm:pt-3">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase mt-2 sm:mt-3 mb-3 sm:mb-4 block">
              WHY PARTNERS CHOOSE US
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              PROSPERi5 vs. Other National Distributors
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
              Understand what you gain when you choose us over others.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-[24px] border-2 border-purple-100 shadow-lg bg-white">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#FAF6FC] border-b border-purple-100 text-xs sm:text-sm font-extrabold text-[#1E1B2E]">
                  <th className="p-4 sm:p-5 w-2/5">Capability</th>
                  <th className="p-4 sm:p-5 w-1/5 text-center bg-[#7C1FA8] text-white rounded-t-xl">
                    PROSPERi5 🏆
                  </th>
                  <th className="p-4 sm:p-5 w-1/5 text-center text-[#544F66]">ND1</th>
                  <th className="p-4 sm:p-5 w-1/5 text-center text-[#544F66]">ND2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100/70 text-xs sm:text-sm font-semibold">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8FC]/60'}>
                    <td className="p-4 sm:p-4.5 text-[#1E1B2E] font-bold">{row.cap}</td>
                    <td className="p-4 sm:p-4.5 text-center bg-purple-50/80 font-extrabold text-[#7C1FA8]">
                      {typeof row.p5 === 'boolean' ? (
                        row.p5 ? <span className="text-emerald-600 font-extrabold text-base">✓</span> : <span className="text-rose-500 font-extrabold">✕</span>
                      ) : (
                        row.p5
                      )}
                    </td>
                    <td className="p-4 sm:p-4.5 text-center text-gray-500 font-medium">
                      {typeof row.nd1 === 'boolean' ? (
                        row.nd1 ? <span className="text-emerald-600 font-bold">✓</span> : <span className="text-gray-300">✕</span>
                      ) : (
                        row.nd1
                      )}
                    </td>
                    <td className="p-4 sm:p-4.5 text-center text-gray-500 font-medium">
                      {typeof row.nd2 === 'boolean' ? (
                        row.nd2 ? <span className="text-emerald-600 font-bold">✓</span> : <span className="text-gray-300">✕</span>
                      ) : (
                        row.nd2
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="bg-purple-100 text-[#7C1FA8] text-[10.5px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block border border-purple-200">
              HOW IT WORKS
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              You Don't Need to Master Every Financial Product
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
              You shouldn't leave money on the table just because a client's need falls outside your area of expertise. With PROSPERi5, simply identify the need and connect us with the client. Our experts deliver the right solution, while you retain the relationship and earn the revenue share.
            </p>
          </div>

          {/* 5 Steps Grid Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howItWorksSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[20px] p-5 border border-purple-100/90 shadow-sm hover:shadow-md hover:border-[#7C1FA8] transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#7C1FA8] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="font-sans font-extrabold text-base text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase block">
              PARTNER SUCCESS STORIES
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              Hear It from Partners Already Earning More
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, i) => (
              <div 
                key={i} 
                className="bg-[#FAF6FC] rounded-[22px] p-6 border border-purple-100/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-[#F5A623] text-sm font-black">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4458] font-medium leading-relaxed italic">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-3.5 border-t border-purple-100">
                  <img 
                    src={testi.avatar} 
                    alt={testi.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-200 shrink-0"
                  />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#1E1B2E] leading-tight">{testi.name}</h4>
                    <p className="text-[11px] text-[#7C1FA8] font-bold">{testi.role}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{testi.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-[#7C1FA8] font-semibold text-xs tracking-[0.2em] uppercase block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              Questions Every Serious Advisor Asks Us
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-extrabold text-sm sm:text-base text-[#1E1B2E] flex justify-between items-center gap-4 hover:text-[#7C1FA8] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#7C1FA8] text-lg shrink-0">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed border-t border-purple-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: FINAL CTA FORM & BANNER */}
      <section className="w-full py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[24px] p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden space-y-6">
            
            {/* Ambient Accent Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Banner Header */}
            <div className="space-y-2 text-center max-w-3xl mx-auto relative z-10">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3.5 py-1 rounded-full text-[10.5px] font-extrabold tracking-wider uppercase inline-block">
                MONETIZE YOUR TRUST
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Your Clients Need These Products. You Need PROSPERi5.
              </h2>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium leading-relaxed">
                Your clients have financial needs that extend beyond your current offerings, and they are turning to others to fill the gap. The longer you wait, the more revenue opportunities you miss. Step up now to provide complete solutions and monetize the trust you have already built.
              </p>
            </div>

            {/* Inline Compact Form */}
            <div className="max-w-3xl mx-auto relative z-10 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20">
              {!inlineSubmitted ? (
                <form onSubmit={handleInlineFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-extrabold text-white block mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter full name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white text-[#1E1B2E] font-bold text-xs p-2.5 rounded-xl outline-none shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold text-white block mb-1">Mobile Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Enter mobile"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full bg-white text-[#1E1B2E] font-bold text-xs p-2.5 rounded-xl outline-none shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold text-white block mb-1">Your ARN Number</label>
                      <input 
                        type="text" 
                        placeholder="Optional (ARN-XXXX)"
                        value={formArn}
                        onChange={(e) => setFormArn(e.target.value)}
                        className="w-full bg-white text-[#1E1B2E] font-bold text-xs p-2.5 rounded-xl outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <button 
                      type="submit"
                      className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-[#1E1B2E] font-extrabold px-8 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Get Started — Zero Fee</span>
                      <span>→</span>
                    </button>

                    <button 
                      type="button"
                      onClick={() => setSelectedModal('demo')}
                      className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-extrabold px-6 py-3 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Watch 2-Min Platform Demo</span>
                      <span>➔</span>
                    </button>
                  </div>

                  <p className="text-[10.5px] text-center text-purple-100/80 font-medium">
                    We don't spam. Your RM calls only to discuss your next step and you are always in control.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4 space-y-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-emerald-400 text-[#1E1B2E] font-black text-2xl flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="text-lg font-extrabold">Application Submitted Successfully!</h4>
                  <p className="text-xs text-purple-100 font-medium">
                    Thank you! Your dedicated Partner RM will get in touch with you within 24 hours.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* POPUP MODAL DIALOG FOR PARTNER & DEMO */}
      {selectedModal && (
        <div className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white bg-cover bg-center rounded-[28px] max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-purple-100/80 animate-in fade-in zoom-in-95 duration-200 text-left overflow-hidden"
            style={{ backgroundImage: `url("/ChatGPT Image Aug 21, 2026, 10_49_29 AM.png")` }}
          >
            {/* Translucent Overlay */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-0 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#7C1FA8] via-[#EC4899] to-[#F59E0B]"></div>

              {/* Close Button */}
              <button 
                onClick={() => {
                  setSelectedModal(null);
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
                      PROSPERI5 PARTNERS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1B2E]">
                      {selectedModal === 'demo' ? 'Schedule a 2-Min Platform Demo' : 'Empanel as a PROSPERi5 Partner'}
                    </h3>
                    <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                      Zero joining fee. Complete back-office support. Live in 24-48 hours.
                    </p>
                  </div>

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
                        className="w-full bg-white/95 border border-[#EBE8EF] focus:border-[#7C1FA8] rounded-xl p-2.5 text-xs font-bold text-[#1E1B2E] outline-none shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold text-[#1E1B2E] block mb-1">Mobile Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. 98765 43210"
                        className="w-full bg-white/95 border border-[#EBE8EF] focus:border-[#7C1FA8] rounded-xl p-2.5 text-xs font-bold text-[#1E1B2E] outline-none shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold text-[#1E1B2E] block mb-1">ARN Number (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. ARN-12345"
                        className="w-full bg-white/95 border border-[#EBE8EF] focus:border-[#7C1FA8] rounded-xl p-2.5 text-xs font-bold text-[#1E1B2E] outline-none shadow-2xs"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Get Started — Zero Fee</span>
                      <span>→</span>
                    </button>

                    <p className="text-[10px] text-center text-gray-400 font-medium">
                      🔒 We don't spam. Your RM calls only to discuss your next step.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-extrabold text-[#1E1B2E]">Registration Received!</h4>
                    <p className="text-xs text-[#544F66] font-medium max-w-xs mx-auto leading-relaxed">
                      Thank you! A senior Partner Relationship Manager will get in touch with you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedModal(null);
                      setModalSubmitted(false);
                    }}
                    className="bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer"
                  >
                    Done
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
