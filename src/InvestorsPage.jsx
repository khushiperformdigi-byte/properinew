import React, { useState } from 'react';

export default function InvestorsPage({ onNavigateHome, onNavigatePage }) {
  const [selectedModal, setSelectedModal] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const scrollToSolutions = () => {
    const el = document.getElementById('prosperi5-difference-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prosperi5DifferencePoints = [
    {
      title: 'Comprehensive Financial Solutions',
      description: 'From investments and insurance to financing, access every financial solution through one trusted partner.',
      icon: (
        <svg className="w-6 h-6 text-[#7C1FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Your Interests Come First',
      description: 'Every recommendation is guided by what best serves your financial needs.',
      icon: (
        <svg className="w-6 h-6 text-[#7C1FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Solutions Tailored To You',
      description: 'No two financial journeys are the same. We recommend solutions that match your needs—not a one-size-fits-all approach.',
      icon: (
        <svg className="w-6 h-6 text-[#7C1FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Long-Term Relationships',
      description: "We're here to support your financial journey, not just a single transaction.",
      icon: (
        <svg className="w-6 h-6 text-[#7C1FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Transparency You Can Count On',
      description: 'Clear communication, informed decisions and no unnecessary complexity.',
      icon: (
        <svg className="w-6 h-6 text-[#7C1FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Dedicated Relationship Manager',
      description: 'One trusted point of contact for every financial need.',
      icon: (
        <svg className="w-6 h-6 text-[#7C1FA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
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
    <div className="min-h-screen bg-[#FDFBFD] font-sans text-body-text antialiased selection:bg-purple-100 selection:text-primary-purple overflow-x-hidden">
      
      {/* SCREEN 1: HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 -mt-[76px] lg:-mt-[84px] pt-[104px] sm:pt-[112px] lg:pt-[120px] pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Light Purple Background Overlay */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[550px] h-[550px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: Category Pill, Headline, Subheadline, Buttons & Social Proof */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Top Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest font-sans">
                PROSPERi5 FOR INVESTORS
              </span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-sans font-extrabold text-[36px] leading-[44px] sm:text-[46px] sm:leading-[54px] lg:text-[52px] lg:leading-[60px] tracking-[-0.03em] text-[#1E1B2E] mb-4 max-w-[620px]">
              Your Wealth. Your Security. Your Aspirations. <br />
              <span className="text-[#7C1FA8]">Powered by PROSPERi5</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-7 max-w-[560px]">
              Bringing investments, insurance and financing together through one trusted relationship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7 w-full sm:w-auto">
              <button
                onClick={() => setSelectedModal(true)}
                className="h-[48px] sm:h-[52px] px-7 sm:px-8 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Talk To an Expert</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <button
                onClick={scrollToSolutions}
                className="h-[48px] sm:h-[52px] px-7 sm:px-8 rounded-xl border-2 border-[#7C1FA8] text-[#7C1FA8] hover:bg-purple-50 font-extrabold text-sm sm:text-base transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Social Proof Strip */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-purple-100/90 w-full max-w-[540px]">
              <div className="flex items-center">
                <img src="/Portrait 2.png" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-2xs" alt="Investor 1" />
                <img src="/Portrait 2 (2).png" className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-2xs" alt="Investor 2" />
                <img src="/Portrait 2 (3).png" className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-2xs" alt="Investor 3" />
                <img src="/Portrait 2 (4).png" className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-2xs" alt="Investor 4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#1E1B2E]">
                  Trusted by <span className="text-[#7C1FA8] font-black">24,500+</span> individuals & families
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

          {/* RIGHT COLUMN: 3D Investor Graphic */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/ChatGPT Image Aug 29, 2026, 05_15_23 PM.png"
                alt="Your Wealth. Your Security. Your Aspirations. - PROSPERi5"
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] max-w-[580px] object-contain drop-shadow-xl select-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SCREEN 2: ONE TRUSTED PARTNER SECTION */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#4E0C72] via-[#5E1683] to-[#6E1C98] rounded-[22px] p-5 sm:p-7 lg:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Ambient Background Glow */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-2 text-center md:text-left max-w-3xl relative z-10">
              <span className="bg-white/15 border border-white/20 text-purple-100 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase inline-block">
                ONE RELATIONSHIP. UNLIMITED POSSIBILITIES.
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                One Trusted Partner for Every Financial Need.
              </h2>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium leading-relaxed">
                Why manage multiple financial relationships when one trusted partner can do it all? PROSPERi5 brings investments, insurance and financing together thereby making every financial decision simpler, more connected and easier to manage.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <button
                onClick={() => setSelectedModal(true)}
                className="bg-white hover:bg-purple-50 text-[#7C1FA8] font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Get Expert Support</span>
                <span>➔</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SCREEN 3: THE PROSPERi5 DIFFERENCE SECTION */}
      <section id="prosperi5-difference-section" className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8FC] border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase block">
              THE PROSPERi5 DIFFERENCE
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              Built on trust, transparency and doing what's right for every client.
            </h2>
            <p className="font-extrabold text-sm sm:text-base text-[#7C1FA8] pt-1">
              Financial advice built around what's right for you.
            </p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prosperi5DifferencePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-7 border-2 border-purple-100/90 shadow-md hover:shadow-2xl hover:border-[#7C1FA8] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100/80 text-[#7C1FA8] flex items-center justify-center shrink-0 group-hover:bg-[#7C1FA8] group-hover:text-white transition-colors duration-300 shadow-xs">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-lg text-[#1E1B2E] mb-2 leading-tight group-hover:text-[#7C1FA8] transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4458] font-medium leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SCREEN 4: BUILT ON TRUST (TESTIMONIALS SECTION) */}
      <section className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EBE8EF]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-block bg-amber-400 text-[#1E1B2E] font-extrabold px-5 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-2xs mb-1">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#1E1B2E] leading-tight tracking-tight">
              Built On Trust. Strengthened By Relationships.
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              The trust our clients place in us is the greatest measure of our success.
            </p>
          </div>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, i) => (
              <div 
                key={i} 
                className="bg-[#FAF6FC] rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 relative"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex text-[#F5A623] text-sm font-black">
                    ★ ★ ★ ★ ★
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-[#4A4458] font-medium leading-relaxed italic">
                    "{testi.quote}"
                  </p>
                </div>

                {/* Client Bio Footer */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-purple-100">
                  <img 
                    src={testi.avatar} 
                    alt={testi.name} 
                    className="w-11 h-11 rounded-full object-cover border-2 border-purple-200 shrink-0"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#1E1B2E] leading-tight">{testi.name}</h4>
                    <p className="text-[11px] text-[#7C1FA8] font-bold">{testi.role}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{testi.location}</p>
                  </div>
                </div>
              </div>
            ))}
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
                START YOUR JOURNEY TODAY
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                Let's Start Your Financial Journey Together
              </h2>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium leading-relaxed">
                Whether you're planning your investments, protecting your family or exploring financing options, we're here to help.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <button
                onClick={() => setSelectedModal(true)}
                className="bg-white hover:bg-purple-50 text-[#7C1FA8] font-extrabold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Talk To an Expert</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* LEAD GENERATION MODAL DIALOG */}
      {selectedModal && (
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
                  setSelectedModal(false);
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
                      PROSPERI5 INVESTORS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1B2E]">
                      Connect with a Wealth Specialist
                    </h3>
                    <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                      Speak to a certified financial advisor to build your personalized investment, insurance, and financing strategy.
                    </p>
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
                          <option value="+65">🇸GQ +65</option>
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
                      <span>Request Expert Callback</span>
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
                      Thank you! A PROSPERi5 wealth specialist will connect with you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedModal(false);
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
