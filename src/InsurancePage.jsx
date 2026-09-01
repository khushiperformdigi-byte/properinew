import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { sendWhatsAppEnquiry } from './utils/whatsapp';

// Helper component for animated Protection Score gauge & counter
function AnimatedProtectionScore({ onOpenModal }) {
  const [score, setScore] = useState(0);
  const [strokeVal, setStrokeVal] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1800; // 1.8 seconds smooth animation

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth acceleration & deceleration (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentScore = Math.round(easeProgress * 85);
      const currentStroke = easeProgress * 85;

      setScore(currentScore);
      setStrokeVal(currentStroke);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <div className="relative sm:absolute sm:bottom-0 sm:right-2 mt-3 sm:mt-0 bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[20px] p-3 sm:p-4 border border-purple-100 shadow-lg sm:shadow-xl flex items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-[310px] sm:max-w-[370px] z-20 select-none mx-auto sm:mx-0">
      {/* Score Gauge Circle */}
      <div className="flex flex-col items-center shrink-0">
        <span className="text-[9px] sm:text-[10px] font-extrabold text-[#544F66] uppercase tracking-wider mb-1 block text-left w-full">
          Your Protection Score
        </span>
        <div className="relative w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="w-13 h-13 sm:w-16 sm:h-16 -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-purple-100"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#7C1FA8] transition-all duration-75 ease-out"
              strokeDasharray={`${strokeVal}, 100`}
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="font-extrabold text-sm sm:text-base text-[#1E1B2E] leading-none">{score}%</span>
            <span className="text-[8px] sm:text-[9px] font-bold text-[#666077] leading-none mt-0.5">Excellent</span>
          </div>
        </div>
      </div>

      <div className="w-[1px] bg-purple-100 self-stretch my-1"></div>

      {/* Score Copy & Link */}
      <div className="flex flex-col text-left">
        <h4 className="font-extrabold text-xs sm:text-sm text-[#1E1B2E] mb-0.5 leading-tight">You're well protected!</h4>
        <p className="text-[10.5px] sm:text-[11px] text-[#666077] font-medium leading-tight mb-1.5 sm:mb-2">
          Review your policies and increase coverage.
        </p>
        <button
          onClick={() => onOpenModal({ title: 'Your Coverage Details' })}
          className="text-[#7C1FA8] font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer w-fit"
        >
          <span>View My Coverage</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default function InsurancePage({ onNavigateHome, onNavigatePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('individual'); // 'individual' | 'partner'
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [openPartnerFaq, setOpenPartnerFaq] = useState(0);
  const [coverageAmount, setCoverageAmount] = useState(1000000);
  const [memberAge, setMemberAge] = useState(30);
  const [quoteSuccessMsg, setQuoteSuccessMsg] = useState(false);

  const partnerFaqs = [
    {
      q: '1. What does it mean to become a POSP insurance agent?',
      a: "POSP stands for Point of Sales Person, a certification category introduced by IRDAI that allows financial distributors like you to sell pre-approved insurance products. It's designed specifically for professionals who already have a client base in financial services. PROSPERi5 helps you get certified and start distributing."
    },
    {
      q: '2. What is the IRDAI POSP certification, and do I need it?',
      a: 'Yes. IRDAI POSP certification is mandatory to legally distribute insurance products in India. The process involves a short training module and a certification exam. PROSPERi5 guides you through both so you are certified, compliant, and ready to earn.'
    },
    {
      q: '3. How do I earn commission as an insurance distributor?',
      a: 'You earn POSP commission in two ways: an upfront first-year commission when a new policy is placed, and trail commission on renewals for certain products. Life and health insurance products typically carry higher first-year payouts. Motor insurance delivers consistent renewal business. The earning structure varies by product and we will walk you through the specifics before you start.'
    },
    {
      q: '4. How do I become an insurance agent if I\'m already an MFD or IFA?',
      a: 'You are already halfway there. If you\'re a mutual fund distributor or independent financial advisor, your existing client relationships and compliance discipline are exactly what insurance distribution requires. The POSP certification pathway is designed for professionals in your position, and PROSPERi5 makes the transition fast and straightforward.'
    },
    {
      q: '5. Can I sell insurance and earn commission on top of my existing income?',
      a: 'Yes. Insurance distribution sits alongside your mutual fund, loan, or investment income, and it doesn\'t replace anything. It\'s one of the cleanest ways to earn more from the same client base without adding significantly to your workload.'
    },
    {
      q: '6. What insurance products can I distribute through PROSPERi5?',
      a: 'Life, health, motor, travel, fire and property, and a full range of general insurance products directly sourced from multiple IRDAI-registered insurers. You get access to a multi-insurer panel, so you can match the right cover to each client rather than being locked into a single company\'s product set.'
    }
  ];

  const partnerProductSuite = [
    {
      title: 'Life Insurance',
      desc: "Term insurance and savings plans that protect your client's family.",
      gradient: 'bg-[#F4EDFC]',
      border: 'border-[#E8DAF5]',
      badgeColor: 'text-[#7C1FAB]',
      badgeBg: 'bg-[#F4EDFC]'
    },
    {
      title: 'Health Insurance',
      desc: 'Individual and family floater plans built for rising medical costs.',
      gradient: 'bg-[#FDF0F6]',
      border: 'border-[#FAD6E7]',
      badgeColor: 'text-[#C81E8C]',
      badgeBg: 'bg-[#FDF0F6]'
    },
    {
      title: 'Motor Insurance',
      desc: 'Car and two-wheeler cover, including renewals.',
      gradient: 'bg-[#FFF6ED]',
      border: 'border-[#FFE3CD]',
      badgeColor: 'text-[#EA580C]',
      badgeBg: 'bg-[#FFF6ED]'
    },
    {
      title: 'Travel Insurance',
      desc: 'Domestic and international travel protection.',
      gradient: 'bg-[#F0F7FF]',
      border: 'border-[#D3E6FE]',
      badgeColor: 'text-[#0284C7]',
      badgeBg: 'bg-[#F0F7FF]'
    },
    {
      title: 'Fire & Property',
      desc: 'Cover for homes, shops, and business premises.',
      gradient: 'bg-[#F1F9F4]',
      border: 'border-[#D5ECE0]',
      badgeColor: 'text-[#16A34A]',
      badgeBg: 'bg-[#F1F9F4]'
    },
    {
      title: 'General Insurance & More',
      desc: 'A broad range of insurance products to complete your distribution offering.',
      gradient: 'bg-[#F5F3FF]',
      border: 'border-[#DDD6FE]',
      badgeColor: 'text-[#7C3AED]',
      badgeBg: 'bg-[#F5F3FF]'
    }
  ];

  const calculateEstimate = () => {
    const base = coverageAmount / 10000;
    const ageMultiplier = memberAge > 40 ? 1.5 : memberAge > 50 ? 2.2 : 1.0;
    const monthly = Math.round(base * ageMultiplier * 1.2);
    return monthly;
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const insurancePlans = [
    {
      id: 'life',
      title: 'Life Insurance',
      subtitle: "Secure your family's future with complete protection.",
      image: '/card_umbrella_clean.png',
      bgGradient: 'bg-[#FAF4FD]',
      cardBorder: 'border-[#EBE3F5]',
      iconBg: 'bg-purple-100/60 border border-purple-200/60',
      iconColor: 'text-[#8B1FA8]',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'health',
      title: 'Health Insurance',
      subtitle: 'Quality healthcare for you & your family.',
      image: '/card_heart_clean.png',
      bgGradient: 'bg-[#FDF2F8]',
      cardBorder: 'border-[#FCE7F3]',
      iconBg: 'bg-pink-100/80 border border-pink-200/80',
      iconColor: 'text-pink-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'motor',
      title: 'Motor Insurance',
      subtitle: 'Complete protection for your car, bike & vehicles.',
      image: '/card_car_orange.png',
      bgGradient: 'bg-[#FFFBEB]',
      cardBorder: 'border-[#FEF3C7]',
      iconBg: 'bg-amber-100/60 border border-amber-200/60',
      iconColor: 'text-amber-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 102 0m-2 0a1 1 0 112 0" />
        </svg>
      )
    },
    {
      id: 'travel',
      title: 'Travel Insurance',
      subtitle: 'Worry-free travel across the world.',
      image: '/card_plane_clean.png',
      bgGradient: 'bg-[#EFF6FF]',
      cardBorder: 'border-[#DBEAFE]',
      iconBg: 'bg-blue-100/60 border border-blue-200/60',
      iconColor: 'text-blue-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      id: 'property',
      title: 'Property Insurance',
      subtitle: 'Protect your home, building & valuable assets.',
      image: '/card_home_clean.png',
      bgGradient: 'bg-[#F0FDF4]',
      cardBorder: 'border-[#DCFCE7]',
      iconBg: 'bg-emerald-100/60 border border-emerald-200/60',
      iconColor: 'text-emerald-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'commercial',
      title: 'Commercial Insurance',
      subtitle: 'Safeguard your business operations & commercial assets.',
      image: '/working_capital_3d_clean.jpg',
      bgGradient: 'bg-[#F5F3FF]',
      cardBorder: 'border-[#DDD6FE]',
      iconBg: 'bg-purple-100/80 border border-purple-200/80',
      iconColor: 'text-purple-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0a2 2 0 100 4m0-4a2 2 0 110 4m4-4a2 2 0 100 4m0-4a2 2 0 110 4" />
        </svg>
      )
    },
    {
      id: 'marine',
      title: 'Marine Insurance',
      subtitle: 'Comprehensive cargo & transit security across sea and land.',
      image: '/card_clock_3d.png',
      bgGradient: 'bg-[#F0FDFA]',
      cardBorder: 'border-[#CCFBF1]',
      iconBg: 'bg-teal-100/80 border border-teal-200/80',
      iconColor: 'text-teal-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 'workmen',
      title: 'Workmen Insurance',
      subtitle: 'Employee compensation & workplace risk protection.',
      image: '/card_teddy_clean.png',
      bgGradient: 'bg-[#FFF7ED]',
      cardBorder: 'border-[#FFEDD5]',
      iconBg: 'bg-orange-100/60 border border-orange-200/60',
      iconColor: 'text-orange-700',
      icon: (
        <svg className="w-5.5 h-5.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const scrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8FC] font-sans text-body-text antialiased selection:bg-purple-100 selection:text-primary-purple overflow-x-hidden">
      
      {/* VIEW MODE TOGGLE HEADER BAR */}
      <div className="w-full bg-[#F3EBFB] border-b border-purple-200/60 -mt-[76px] lg:-mt-[88px] pt-[84px] lg:pt-[96px] pb-2.5 px-4 text-center relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="bg-white p-1 rounded-full border border-purple-200 shadow-sm inline-flex items-center gap-1">
            <button
              onClick={() => setViewMode('individual')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'individual'
                  ? 'bg-[#7C1FA8] text-white shadow-md'
                  : 'text-[#544F66] hover:text-[#7C1FA8]'
              }`}
            >
              🛡️ Individual & Family Protection
            </button>
            <button
              onClick={() => setViewMode('partner')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'partner'
                  ? 'bg-[#7C1FA8] text-white shadow-md'
                  : 'text-[#544F66] hover:text-[#7C1FA8]'
              }`}
            >
              💼 Partner & Distributor Program (Earn Commission)
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'individual' ? (
        <>
          {/* INDIVIDUAL CUSTOMER VIEW */}
          {/* 2. HERO SECTION (PROTECT WHAT MATTERS MOST) */}
          <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8 font-sans">
            
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-purple-300/20 rounded-full filter blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* LEFT COLUMN: Badge, Title, Subtitle, Buttons & 3 Feature Badges */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                
                {/* Top Category Badge */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
                  <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest font-sans">
                    SECURE TODAY, STAY PROTECTED TOMORROW
                  </span>
                </div>

                {/* Screen 1 Headline */}
                <h1 className="font-sans font-extrabold text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] lg:text-[50px] lg:leading-[58px] tracking-[-0.03em] text-[#1E1B2E] mb-3 max-w-[560px]">
                  Protect What Matters Most. 
                </h1>

                {/* Screen 1 Sub-Headline */}
                <p className="font-medium text-[14.5px] sm:text-[15.5px] leading-[22px] sm:leading-[25px] text-[#544F66] mb-6 max-w-[500px]">
                  Life is unpredictable. The right protection ensures your family, health and assets remain secure when it matters most.
                </p>

                {/* CTA Buttons Row */}
                <div className="flex flex-wrap items-center gap-3.5 mb-7">
                  <button
                    onClick={scrollToSolutions}
                    className="h-[46px] sm:h-[50px] px-7 sm:px-8 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-bold text-sm sm:text-base shadow-md shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Explore Insurance Solutions</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => setSelectedPlanModal({ title: 'Talk To an Insurance Expert' })}
                    className="h-[46px] sm:h-[50px] px-7 sm:px-8 rounded-xl bg-white hover:bg-purple-50 text-[#7C1FA8] border border-[#7C1FA8]/40 font-bold text-sm sm:text-base shadow-2xs transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                  >
                    Talk to Advisor
                  </button>
                </div>

                {/* 3 Feature Badges Row */}
                <div className="flex items-center gap-3.5 pt-2 border-t border-purple-100/80 w-full max-w-[560px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-100/70 border border-purple-200/60 text-[#7C1FA8] flex items-center justify-center shrink-0 shadow-2xs">
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-extrabold text-xs text-[#1E1B2E]">Trusted Insurers</span>
                      <span className="text-[11px] font-medium text-[#666077]">Top partners</span>
                    </div>
                  </div>

                  <span className="text-purple-200 hidden sm:inline">|</span>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-100/70 border border-purple-200/60 text-[#7C1FA8] flex items-center justify-center shrink-0 shadow-2xs">
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-extrabold text-xs text-[#1E1B2E]">100% Transparent</span>
                      <span className="text-[11px] font-medium text-[#666077]">No hidden charges</span>
                    </div>
                  </div>

                  <span className="text-purple-200 hidden sm:inline">|</span>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-100/70 border border-purple-200/60 text-[#7C1FA8] flex items-center justify-center shrink-0 shadow-2xs">
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-extrabold text-xs text-[#1E1B2E]">Quick & Hassle-free</span>
                      <span className="text-[11px] font-medium text-[#666077]">Buy in minutes</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: User Image & Protection Score Floating Card */}
              <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full mt-4 lg:mt-0">
                <div className="relative z-10 w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] flex flex-col sm:flex-row justify-center items-center sm:items-end">
                  <img
                    src="/ChatGPT Image Aug 29, 2026, 03_09_25 PM.png"
                    alt="Insurance that protects what matters most - Family Shield"
                    className="w-full h-auto max-h-[320px] sm:max-h-[460px] lg:max-h-[480px] object-contain drop-shadow-xl select-none translate-y-0 sm:translate-y-7 lg:translate-y-8 mb-0 sm:-mb-7 lg:-mb-8"
                  />
                  <AnimatedProtectionScore onOpenModal={(modal) => setSelectedPlanModal(modal)} />
                </div>
              </div>

            </div>
          </section>

          {/* MAIN CONTAINER FOR PAGE CONTENT */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6">

            {/* SCREEN 2: COMPACT PHILOSOPHY SECTION */}
            <section className="bg-gradient-to-r from-[#F4ECFB] via-[#FAF5FE] to-[#F3EAFA] border border-[#E6D7F5] rounded-[22px] p-4 sm:p-5 shadow-2xs relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#7C1FAB]">
                      OUR INSURANCE PHILOSOPHY
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1B2E] leading-snug">
                    Insurance Isn't About Products. <span className="text-[#7C1FAB]">It's About Peace of Mind.</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed max-w-2xl">
                    The right insurance is about ensuring that life's uncertainties don't derail your financial future.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-xs border border-purple-200/80 rounded-xl p-3.5 sm:p-4 max-w-md w-full md:w-auto shrink-0 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C1FAB] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#1E1B2E] leading-snug">
                    PROSPERi5 helps you choose protection solutions aligned with your needs, <span className="text-[#7C1FAB]">not just policies.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* SCREEN 3: INSURANCE SOLUTIONS FOR EVERY NEED (8 PRODUCT CARDS) */}
            <section id="solutions" className="py-2 space-y-4">
              <div className="text-center space-y-0.5">
                <span className="text-[#7C1FAB] text-[11px] font-extrabold tracking-widest uppercase block">
                  COMPREHENSIVE COVERAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E]">
                  Insurance Solutions for Every Need
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {insurancePlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlanModal(plan)}
                    className={`${plan.bgGradient} border ${plan.cardBorder} rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="space-y-3">
                      <div className={`w-11 h-11 rounded-2xl ${plan.iconBg} ${plan.iconColor} flex items-center justify-center shadow-2xs`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">
                          {plan.title}
                        </h3>
                        <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                          {plan.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SCREEN 4: WHY CHOOSE PROSPERIS FOR INSURANCE (MATCHING CARD DESIGN) */}
            <section className="py-2 space-y-4">
              <div className="text-center space-y-0.5">
                <span className="text-[#7C1FAB] text-[11px] font-extrabold tracking-widest uppercase block">
                  THE PROSPERIS ADVANTAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E]">
                  Why Choose PROSPERi5 For Insurance
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {/* Feature 1 */}
                <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/40 border border-purple-100/90 rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-purple-100 text-[#7C1FAB] flex items-center justify-center shadow-2xs shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0a2 2 0 100 4m0-4a2 2 0 110 4m4-4a2 2 0 100 4m0-4a2 2 0 110 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">
                        Access to Leading Insurance Companies
                      </h3>
                      <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                        Choose from a wide network of trusted insurers, giving you the flexibility to find protection that best suits your needs and budget.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-gradient-to-br from-pink-50/80 to-pink-100/40 border border-pink-100/90 rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-pink-100 text-[#C81E8C] flex items-center justify-center shadow-2xs shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">
                        Complete Protection Under One Roof
                      </h3>
                      <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                        Life, health, motor, travel, home and business insurance—designed to protect what matters most.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-gradient-to-br from-indigo-50/80 to-indigo-100/40 border border-indigo-100/90 rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-100 text-[#4F46E5] flex items-center justify-center shadow-2xs shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">
                        Claims Support That Stands By You
                      </h3>
                      <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                        Insurance is tested at the time of a claim. Our team assists you through the claims process, helping make it smoother and less stressful.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-gradient-to-br from-emerald-50/80 to-emerald-100/40 border border-emerald-100/90 rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center shadow-2xs shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">
                        Protection Without Interruption
                      </h3>
                      <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                        From periodic policy reviews to timely renewal reminders, we help keep your coverage active and up to date.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* B2B PARTNER CROSSOVER BANNER */}
            <section className="bg-gradient-to-r from-[#F4EDFC] via-[#FAF5FE] to-[#F4EDFC] border border-[#E8DAF5] rounded-[22px] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-11 h-11 rounded-2xl bg-[#7C1FA8] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                  💼
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#1E1B2E]">Are you a Financial Advisor or Distributor?</h4>
                  <p className="text-xs text-[#544F66] font-semibold mt-0.5">
                    Offer life, health, motor & property insurance to your clients and earn high POSP commissions.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setViewMode('partner')}
                className="bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
              >
                Become a Partner Distributor →
              </button>
            </section>

            {/* SCREEN 5: BANNER CTA SECTION */}
            <section className="bg-[#5E1683] rounded-[22px] p-4.5 sm:p-6 lg:px-8 py-5 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-4.5 text-left max-w-xl sm:max-w-2xl lg:max-w-3xl flex-1">
                <div className="w-12.5 h-12.5 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl sm:text-2xl shadow-inner shrink-0">
                  🛡️
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-widest text-purple-200 block">
                    STAY PREPARED FOR TOMORROW
                  </span>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-extrabold text-white leading-snug tracking-tight">
                    Protect Today. Stay Prepared for Tomorrow.
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-100/90 font-medium">
                    The right protection starts with understanding your needs. Let us help you choose insurance solutions that protect what matters most.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedPlanModal({ title: 'Talk To an Insurance Expert' })}
                className="bg-white hover:bg-purple-50 text-[#1E1B2E] font-extrabold px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm min-w-[210px] sm:min-w-[240px] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
              >
                <span>Talk To an Insurance Expert</span>
                <span className="text-sm">→</span>
              </button>
            </section>

          </main>
        </>
      ) : (
        <>
          {/* DISTRIBUTOR & PARTNER PROGRAM VIEW (PROMPT CONTENT) */}
          
          {/* 1. PARTNER HERO SECTION */}
          <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
                  <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest">
                    INSURANCE DISTRIBUTION PARTNER PROGRAM
                  </span>
                </div>

                {/* H1 */}
                <h1 className="font-sans font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[40px] sm:leading-[50px] lg:leading-[56px] text-[#1E1B2E] tracking-[-0.02em]">
                  Insurance For Your Client & <span className="text-[#7C1FA8]">Revenue Stream For You</span>
                </h1>

                <p className="text-sm sm:text-base font-bold text-[#7C1FA8] leading-relaxed">
                  Insurance solutions for your clients, a new revenue stream for you. Insurance Solutions That Benefit Both You and Your Clients.
                </p>

                {/* H2 & Body */}
                <div className="bg-white/90 backdrop-blur-md border border-purple-200/80 rounded-2xl p-5 shadow-sm space-y-2.5">
                  <h2 className="text-base sm:text-lg font-extrabold text-[#1E1B2E] leading-snug">
                    Your existing clients already need multiple insurance. Now you can offer it and earn a commission through it.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed">
                    You leave commission on the table, simply because you don't yet offer insurance. With PROSPERi5 you can offer life, health, motor, and more. You keep the client relationships you have built. We add a revenue stream that pays from the start.
                  </p>
                </div>

                {/* Partner CTA Button */}
                <button
                  onClick={() => setPartnerModalOpen(true)}
                  className="h-[50px] px-8 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <span>Start earning with PROSPERi5 insurance</span>
                  <span className="text-lg">→</span>
                </button>
              </div>

              {/* Right Hero Card Graphic */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="bg-gradient-to-br from-[#7C1FA8] to-[#5E1683] text-white p-7 sm:p-8 rounded-[28px] shadow-2xl space-y-6 border border-purple-300/30 relative overflow-hidden w-full max-w-md">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl">
                    💼
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200 block">POSP CERTIFICATION</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                      Add Insurance Revenue To Your Financial Practice
                    </h3>
                    <p className="text-xs text-purple-100 font-medium leading-relaxed">
                      Join hundreds of MFDs, IFAs, and financial distributors generating additional trail and upfront income.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-extrabold">
                    <span>• Multi-Insurer Panel</span>
                    <span>• 100% Client Ownership</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* MAIN CONTAINER FOR PARTNER CONTENT */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

            {/* 2. SECTION: PRODUCT SUITE */}
            <section className="space-y-6">
              <div className="text-left space-y-2 max-w-3xl">
                <span className="text-[#7C1FAB] text-xs font-extrabold tracking-widest uppercase block">
                  PRODUCT SUITE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E] leading-tight">
                  Insurance products your clients need, now available through you.
                </h2>
                <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed">
                  As a life and health insurance distributor or motor insurance distributor, you are not pitching something unfamiliar. You are filling a gap your clients already have. Here's what you can offer:
                </p>
              </div>

              {/* 6 Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {partnerProductSuite.map((prod, idx) => (
                  <div
                    key={idx}
                    className={`${prod.gradient} border ${prod.border} rounded-[22px] p-5 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all hover:scale-[1.01]`}
                  >
                    <div className="space-y-3">
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md ${prod.badgeBg} ${prod.badgeColor} border border-current/20 inline-block`}>
                        {prod.title}
                      </span>
                      <h3 className="font-extrabold text-lg text-[#1E1B2E] leading-snug">
                        {prod.title}
                      </h3>
                      <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                        {prod.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => setPartnerModalOpen(true)}
                      className="text-xs font-bold text-[#7C1FAB] hover:underline flex items-center gap-1 cursor-pointer pt-2"
                    >
                      <span>Offer to Clients</span>
                      <span>→</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SECTION: FAQ */}
            <section className="bg-white border border-[#EBE8EF] rounded-[24px] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="text-left space-y-1">
                <span className="text-[#7C1FAB] text-xs font-extrabold tracking-widest uppercase block">
                  PARTNER FAQs
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E]">
                  Questions Partners Ask About Selling Insurance
                </h2>
                <div className="w-12 h-1 bg-[#7C1FAB] rounded-full mt-2"></div>
              </div>

              {/* Accordion FAQ List */}
              <div className="space-y-3 pt-2">
                {partnerFaqs.map((faq, idx) => {
                  const isOpen = openPartnerFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-purple-100 rounded-2xl overflow-hidden transition-all bg-[#FAF8FC]"
                    >
                      <button
                        onClick={() => setOpenPartnerFaq(isOpen ? -1 : idx)}
                        className="w-full p-4 text-left flex items-center justify-between font-extrabold text-sm sm:text-base text-[#1E1B2E] hover:text-[#7C1FA8] transition-colors cursor-pointer gap-4"
                      >
                        <span>{faq.q}</span>
                        <span className="w-7 h-7 rounded-full bg-purple-100 text-[#7C1FA8] flex items-center justify-center text-base shrink-0">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed border-t border-purple-100/60 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. SECTION: FINAL CTA */}
            <section className="bg-[#5E1683] rounded-[24px] p-6 sm:p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2 text-left max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-200 block">
                  JOIN PROSPERIS PARTNER NETWORK
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                  Your clients need insurance. You should be the one to provides it.
                </h2>
                <p className="text-xs sm:text-sm text-purple-100 font-medium leading-relaxed">
                  Join distributors who are using PROSPERi5 to add insurance to what they offer and earn from it. Get certified, get supported, and grow.
                </p>
              </div>

              <button
                onClick={() => setPartnerModalOpen(true)}
                className="bg-white hover:bg-purple-50 text-[#1E1B2E] font-extrabold px-8 sm:px-10 py-4 rounded-full text-xs sm:text-sm min-w-[220px] transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
              >
                <span>Get started as a partner</span>
                <span className="text-base">→</span>
              </button>
            </section>

          </main>
        </>
      )}

      {/* PARTNER REGISTRATION MODAL */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-purple-100 relative space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7C1FA8] flex items-center justify-center font-bold text-base">
                  💼
                </div>
                <h3 className="font-extrabold text-base text-[#1E1B2E]">
                  Become a PROSPERi5 Insurance Partner
                </h3>
              </div>
              <button
                onClick={() => { setPartnerModalOpen(false); setPartnerSubmitted(false); }}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {partnerSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-extrabold text-[#1E1B2E]">Partner Request Received!</h4>
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Our Partner Onboarding Specialist will call you within 2 hours to guide you through POSP IRDAI certification & commission structure.
                </p>
                <button
                  onClick={() => { setPartnerModalOpen(false); setPartnerSubmitted(false); }}
                  className="bg-[#7C1FA8] text-white font-bold px-6 py-2.5 rounded-full text-xs cursor-pointer mt-2"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);
                  sendWhatsAppEnquiry({
                    formName: 'IRDAI POSP Insurance Partner Form',
                    name: fd.get('fullName') || 'Insurance Partner Applicant',
                    phone: fd.get('phone') || '',
                    email: fd.get('email') || '',
                    city: fd.get('city') || '',
                    service: 'IRDAI POSP Insurance Advisor Partner'
                  });
                  setPartnerSubmitted(true);
                }}
                className="space-y-3.5"
              >
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Get certified under IRDAI POSP framework and start distributing life, health, motor & general insurance to your clients.
                </p>

                <div>
                  <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit phone number"
                      className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Current Profession / Role</label>
                  <select className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]">
                    <option>Mutual Fund Distributor (MFD)</option>
                    <option>Independent Financial Advisor (IFA)</option>
                    <option>Life / Health Insurance Agent</option>
                    <option>Motor / General Insurance Broker</option>
                    <option>Tax / CA Professional</option>
                    <option>Other Financial Distributor</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C1FA8] hover:bg-[#65148D] text-white font-extrabold py-3.5 rounded-full text-xs shadow-md transition-all cursor-pointer mt-2"
                >
                  Submit Partner Application →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL / CALCULATOR DIALOG */}
      {selectedPlanModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in fade-in zoom-in duration-200"
          >
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#7C1FAB] flex items-center justify-center font-bold text-sm">
                    🛡️
                  </div>
                  <h3 className="font-extrabold text-base text-[#1E1B2E]">
                    {selectedPlanModal.title || 'Insurance Policy Quote'}
                  </h3>
                </div>
                <button 
                  onClick={() => { setSelectedPlanModal(null); setQuoteSuccessMsg(false); }}
                  className="w-7 h-7 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors z-20"
                >
                  ✕
                </button>
              </div>

              {quoteSuccessMsg ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-extrabold text-[#1E1B2E]">Quote Request Sent!</h4>
                  <p className="text-xs text-[#544F66]">
                    Our certified insurance advisor will call you within 15 minutes with customized plan options.
                  </p>
                  <button 
                    onClick={() => { setSelectedPlanModal(null); setQuoteSuccessMsg(false); }}
                    className="bg-[#7C1FAB] text-white font-bold px-6 py-2 rounded-full text-xs mt-2"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-[#544F66] font-medium">
                    {selectedPlanModal.subtitle || 'Calculate estimated premium and get instant quotes from 50+ top insurers.'}
                  </p>

                  {/* Instant Quote Estimator */}
                  <div className="bg-[#FAF5FD]/90 backdrop-blur-xs p-3.5 rounded-2xl border border-purple-100 space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Coverage Amount</label>
                      <select 
                        value={coverageAmount}
                        onChange={(e) => setCoverageAmount(Number(e.target.value))}
                        className="w-full bg-white border border-purple-200 rounded-xl p-2 text-xs font-bold text-[#1E1B2E]"
                      >
                        <option value={500000}>₹ 5 Lakhs</option>
                        <option value={1000000}>₹ 10 Lakhs</option>
                        <option value={2500000}>₹ 25 Lakhs</option>
                        <option value={5000000}>₹ 50 Lakhs</option>
                        <option value={10000000}>₹ 1 Crore</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Your Age</label>
                      <input 
                        type="number"
                        value={memberAge}
                        onChange={(e) => setMemberAge(Number(e.target.value))}
                        className="w-full bg-white border border-purple-200 rounded-xl p-2 text-xs font-bold text-[#1E1B2E]"
                      />
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-purple-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-[#8E8A9D] block">Estimated Premium</span>
                        <span className="text-lg font-extrabold text-[#7C1FAB]">{formatCurrency(calculateEstimate())} <span className="text-[10px] font-normal text-gray-500">/ mo</span></span>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-md">
                        Zero Commission
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <input 
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full bg-white/95 border border-gray-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FAB] shadow-2xs"
                    />
                    <div className="flex items-center bg-white/95 border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#7C1FAB] shadow-2xs">
                      <select className="bg-transparent pl-2.5 pr-1 py-2.5 text-xs font-bold text-[#1E1B2E] outline-none border-r border-gray-200 cursor-pointer">
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+1">🇨🇦 +1</option>
                      </select>
                      <input 
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full bg-transparent p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => setQuoteSuccessMsg(true)}
                    className="w-full bg-[#7C1FAB] hover:bg-[#65148D] text-white font-extrabold py-3 rounded-full text-xs shadow-md transition-all cursor-pointer"
                  >
                    Get Instant Free Quotes →
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

