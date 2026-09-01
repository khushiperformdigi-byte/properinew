import React, { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp, FiCreditCard, FiUser, FiStar, FiCheck, FiHeart } from 'react-icons/fi';
import Footer from './Footer';

export default function InvestorsPage({ onNavigateHome, onNavigatePage }) {
  const [selectedModal, setSelectedModal] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');

  const scrollToDifference = () => {
    const el = document.getElementById('prosperi5-difference-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNav = (page, anchor) => {
    if (onNavigatePage) {
      onNavigatePage(page, anchor);
    } else {
      window.location.href = `/${page}${anchor ? '#' + anchor : ''}`;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  const prosperi5DifferencePoints = [
    {
      title: 'Comprehensive Financial Solutions',
      description: 'From investments and insurance to financing, access every financial solution through one trusted partner.',
      icon: <FiTrendingUp className="w-5 h-5 text-[#7C1FA8]" />
    },
    {
      title: 'Your Interests Come First',
      description: 'Every recommendation is guided by what best serves your financial needs.',
      icon: <FiCheckCircle className="w-5 h-5 text-[#7C1FA8]" />
    },
    {
      title: 'Solutions Tailored To You',
      description: 'No two financial journeys are the same. We recommend solutions that match your needs—not a one-size-fits-all approach.',
      icon: <FiShield className="w-5 h-5 text-[#7C1FA8]" />
    },
    {
      title: 'Long-Term Relationships',
      description: "We're here to support your financial journey, not just a single transaction.",
      icon: <FiHeart className="w-5 h-5 text-[#7C1FA8]" />
    },
    {
      title: 'Transparency You Can Count On',
      description: 'Clear communication, informed decisions and no unnecessary complexity.',
      icon: <FiCreditCard className="w-5 h-5 text-[#7C1FA8]" />
    },
    {
      title: 'Dedicated Relationship Manager',
      description: 'One trusted point of contact for every financial need.',
      icon: <FiUser className="w-5 h-5 text-[#7C1FA8]" />
    }
  ];

  const testimonials = [
    {
      quote: "PROSPERi5 transformed how we manage our family wealth. Having our investments, family insurance, and business credit lines managed under one trusted relationship has simplified our lives completely.",
      name: "Rajesh & Anita Verma",
      role: "Business Owner & Educator",
      location: "Mumbai",
      avatar: "/Portrait 2.png"
    },
    {
      quote: "The transparency and objective advice are unmatched. Their relationship manager helped me structure my surplus capital into high-yield portfolios while securing our enterprise credit line seamlessly.",
      name: "Vikramaditya Mehta",
      role: "Tech Founder & Investor",
      location: "Bengaluru",
      avatar: "/Portrait 2 (2).png"
    },
    {
      quote: "I value long-term trust over quick sales pitches. PROSPERi5 tailored a comprehensive retirement and wealth plan that perfectly aligns with my family's future aspirations.",
      name: "Dr. Sunita Deshmukh",
      role: "Senior Medical Consultant",
      location: "Pune",
      avatar: "/Portrait 2 (3).png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-[#544F66] antialiased selection:bg-purple-100 selection:text-[#7C1FA8] overflow-x-hidden">
      
      {/* SCREEN 1: HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Light Purple Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Category Pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest font-sans">
                PROSPERI5 FOR INVESTORS
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-sans font-extrabold text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] lg:text-[50px] lg:leading-[58px] tracking-[-0.03em] text-[#1E1B2E] mb-4">
              Your Wealth. Your Security. Your Aspirations. <span className="bg-gradient-to-r from-[#7C1FA8] via-[#C81E8C] to-[#F5A623] bg-clip-text text-transparent">Powered by PROSPERi5</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-7 max-w-[540px]">
              Bringing investments, insurance and financing together through one trusted relationship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={() => setSelectedModal(true)}
                className="h-[52px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Talk To an Expert</span>
                <FiArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={scrollToDifference}
                className="h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-2xl border-2 border-[#7C1FA8] text-[#7C1FA8] hover:bg-purple-50 font-extrabold text-sm sm:text-base transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-purple-100/90 w-full max-w-[540px]">
              <div className="flex items-center">
                <img src="/Portrait 2.png" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs" alt="Investor 1" />
                <img src="/Portrait 2 (2).png" className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-xs" alt="Investor 2" />
                <img src="/Portrait 2 (3).png" className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-xs" alt="Investor 3" />
                <img src="/Portrait 2 (4).png" className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-xs" alt="Investor 4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#1E1B2E]">
                  Trusted by <span className="text-[#7C1FA8] font-black">24,500+</span> individuals &amp; families
                </span>
                <div className="flex items-center gap-1 mt-0.5 text-xs">
                  <span className="font-extrabold text-[#1E1B2E]">4.9/5</span>
                  <div className="flex text-[#F5A623]">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Investor Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/ChatGPT Image Aug 29, 2026, 05_15_23 PM.png"
                alt="Your Wealth Your Security - PROSPERi5"
                draggable={false}
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] max-w-[540px] object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* SCREEN 2: ONE TRUSTED PARTNER (Un-boxed & Compact) */}
        <section className="w-full space-y-5 py-2">
          <div className="max-w-4xl mx-auto text-center space-y-2.5">
            <div>
              <span className="inline-block bg-[#F5EEFB] border border-purple-200/80 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#7C1FA8]">
                ONE RELATIONSHIP. UNLIMITED POSSIBILITIES.
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#1E1B2E] tracking-tight">
              One Trusted Partner for Every Financial Need.
            </h2>

            <p className="font-body font-semibold text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-[600px] mx-auto pt-0.5">
              Why manage multiple financial relationships when one trusted partner can do it all? PROSPERi5 brings investments, insurance and financing together thereby making every financial decision simpler, more connected and easier to manage.
            </p>
          </div>

          {/* Speech Bubble Banner Accent */}
          <div className="max-w-2xl mx-auto text-center relative pt-2 pb-1">
            <div className="bg-gradient-to-r from-[#7C1FA8] via-[#6E1C98] to-[#5E1683] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl sm:rounded-[36px] shadow-lg relative inline-block border border-purple-300/30">
              <p className="font-heading font-semibold text-xs sm:text-sm lg:text-base leading-snug tracking-tight text-white">
                Why Go To Three Different Places? <br className="hidden sm:block" />
                <span>When One Trusted Partner Can Do It All.</span>
              </p>
              {/* Pointer Tail */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#5E1683]" />
            </div>
          </div>

          {/* 3 Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-2">
            
            {/* Card 1: Grow Your Wealth */}
            <div 
              onClick={() => handleNav('investment')}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-100 to-purple-50 text-[#7C1FA8] border border-purple-200/60 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#7C1FA8] group-hover:text-white transition-all duration-300">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-snug">
                  Grow Your Wealth
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
                  Build long-term wealth with investment solutions tailored to your financial goals.
                </p>
              </div>
            </div>

            {/* Card 2: Protect What Matters */}
            <div 
              onClick={() => handleNav('insurance')}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-100 to-purple-50 text-[#7C1FA8] border border-purple-200/60 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#7C1FA8] group-hover:text-white transition-all duration-300">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-snug">
                  Protect What Matters
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
                  Comprehensive insurance solutions for you, your family and your assets.
                </p>
              </div>
            </div>

            {/* Card 3: Finance Your Aspirations */}
            <div 
              onClick={() => handleNav('financing')}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-100 to-purple-50 text-[#7C1FA8] border border-purple-200/60 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#7C1FA8] group-hover:text-white transition-all duration-300">
                  <FiCreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-snug">
                  Finance Your Aspirations
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
                  Smart financing solutions for homes, businesses and life's biggest milestones.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SCREEN 3: THE PROSPERi5 DIFFERENCE (Un-boxed & Compact) */}
        <section id="prosperi5-difference-section" className="w-full space-y-8 py-2">
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <div>
              <span className="bg-[#F5EEFB] text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
                THE PROSPERI5 DIFFERENCE
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#1E1B2E] tracking-tight pt-0.5">
              The PROSPERi5 Difference
            </h2>

            <p className="font-body font-semibold text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              Financial advice built around what's right for you.
            </p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {prosperi5DifferencePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6FC] rounded-2xl border border-purple-100/90 p-5.5 space-y-3 hover:border-[#7C1FA8] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs text-[#7C1FA8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#1E1B2E] group-hover:text-[#7C1FA8] transition-colors leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#544F66] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCREEN 4: BUILT ON TRUST (TESTIMONIALS - Un-boxed & Compact) */}
        <section className="w-full space-y-8 py-2">
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <div>
              <span className="bg-[#F5EEFB] text-[#7C1FA8] text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-purple-200/80 inline-block">
                CLIENT TESTIMONIALS
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#1E1B2E] tracking-tight pt-0.5">
              Built On Trust. Strengthened By Relationships.
            </h2>

            <p className="font-body font-semibold text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              The trust our clients place in us is the greatest measure of our success.
            </p>
          </div>

          {/* 3 Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testi, i) => (
              <div
                key={i}
                className="bg-[#FAF6FC] rounded-2xl p-5.5 border border-purple-100/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex text-[#F5A623] text-xs font-black">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-xs sm:text-sm text-[#544F66] font-semibold leading-relaxed italic">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-purple-100/70">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-200 shrink-0"
                  />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#1E1B2E] leading-tight">{testi.name}</h4>
                    <p className="text-[11px] text-[#7C1FA8] font-extrabold">{testi.role}</p>
                    <p className="text-[10px] text-gray-400 font-semibold">{testi.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCREEN 5: FINAL CTA BANNER (Ultra-Compact Low-Profile Strip) */}
        <section className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[20px] px-5 sm:px-7 py-3.5 sm:py-4 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 relative z-10 text-left">
            <div className="space-y-1 max-w-2xl">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider inline-block">
                START YOUR JOURNEY TODAY
              </span>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl leading-snug text-white tracking-tight">
                Let's Start Your Financial Journey Together
              </h2>
              <p className="font-body font-medium text-[11.5px] sm:text-xs text-purple-100/90 leading-normal max-w-xl">
                Whether you're planning your investments, protecting your family or exploring financing options, we're here to help.
              </p>
            </div>
            
            <div className="shrink-0 w-full sm:w-auto text-center lg:text-right">
              <button
                onClick={() => setSelectedModal(true)}
                className="bg-[#F5A623] hover:bg-[#D49300] text-[#1E1B2E] font-extrabold px-6 py-2.5 sm:py-3 rounded-xl text-xs shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5"
              >
                <span>Talk To an Expert</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* LEAD GENERATION POPUP MODAL */}
      {selectedModal && (
        <div className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in fade-in zoom-in duration-200 space-y-4 text-left">
            
            <div className="flex items-center justify-between border-b border-purple-100 pb-3">
              <div>
                <span className="bg-purple-100 text-[#7C1FA8] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1">
                  EXPERT ADVISORY
                </span>
                <h3 className="font-extrabold text-lg text-[#1E1B2E]">Talk To an Investor Specialist</h3>
              </div>
              <button 
                onClick={() => { setSelectedModal(false); setModalSubmitted(false); }}
                className="w-8 h-8 rounded-full bg-purple-50 text-[#7C1FA8] flex items-center justify-center font-bold text-sm hover:bg-purple-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {!modalSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <p className="text-xs text-[#544F66] font-semibold leading-relaxed">
                  Share your details below. A PROSPERi5 wealth specialist will connect with you shortly.
                </p>

                <div>
                  <label className="text-xs font-bold text-[#1E1B2E] block mb-1">Full Name *</label>
                  <input 
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#FAF6FC] border border-purple-100 rounded-xl p-3 text-xs font-semibold text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E1B2E] block mb-1">Mobile Number *</label>
                  <input 
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full bg-[#FAF6FC] border border-purple-100 rounded-xl p-3 text-xs font-semibold text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-3.5 rounded-xl text-xs shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <span>Request Callback</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mx-auto">
                  ✓
                </div>
                <h4 className="font-extrabold text-lg text-[#1E1B2E]">Callback Requested!</h4>
                <p className="text-xs text-[#544F66] font-semibold leading-relaxed">
                  Thank you, {formName || 'Investor'}! A PROSPERi5 specialist will reach out to you within 15 minutes.
                </p>
                <button
                  onClick={() => { setSelectedModal(false); setModalSubmitted(false); }}
                  className="bg-[#7C1FA8] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs cursor-pointer mt-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer onNavigateHome={onNavigateHome} onNavigatePage={onNavigatePage} />

    </div>
  );
}
