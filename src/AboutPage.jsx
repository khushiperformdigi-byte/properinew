import React, { useState, useEffect } from 'react';
import PhoneInput from './components/PhoneInput';

export default function AboutPage({ onNavigateHome, onNavigatePage }) {
  const [selectedModal, setSelectedModal] = useState(null);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerFormData, setPartnerFormData] = useState({
    name: '',
    phone: '',
    countryCode: '+91',
    city: '',
    email: '',
    partnerType: 'Financial Advisor / IFA'
  });
  const [partnerFormSubmitted, setPartnerFormSubmitted] = useState(false);

  useEffect(() => {
    if (partnerModalOpen || selectedModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [partnerModalOpen, selectedModal]);

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerFormSubmitted(true);
    setTimeout(() => {
      setPartnerFormSubmitted(false);
      setPartnerModalOpen(false);
      setPartnerFormData({
        name: '',
        phone: '',
        countryCode: '+91',
        city: '',
        email: '',
        partnerType: 'Financial Advisor / IFA'
      });
    }, 2500);
  };

  return (
    <div className="w-full bg-[#FAF8FC] font-sans text-body-text antialiased selection:bg-purple-100 selection:text-primary-purple overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 font-sans">
        
        {/* Ambient Curved Light Purple Background Overlay */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[550px] h-[550px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
            <span className="text-[#C81E8C] font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase mb-3 inline-block">
              ABOUT PROSPERi5
            </span>
            <h1 className="font-sans font-extrabold text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] lg:text-[50px] lg:leading-[58px] tracking-[-0.03em] text-[#1E1B2E] mb-4">
              Unified Wealth Platform for <span className="text-[#7C1FA8]">Partners & Investors</span>
            </h1>
            <p className="font-medium text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[28px] text-[#544F66] mb-7 max-w-[560px]">
              PROSPERi5 is a unified wealth platform that helps partners build scalable, multi-product businesses and enables investors to manage their finances better across investments, insurance, and lending.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="h-[48px] px-7 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm shadow-lg shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Become a Partner</span>
                <span>➔</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Graphic Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full">
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/ChatGPT Image Aug 29, 2026, 10_11_47 PM.png"
                alt="PROSPERi5 Unified Wealth Platform"
                className="w-full h-auto max-h-[420px] sm:max-h-[460px] lg:max-h-[480px] object-contain drop-shadow-xl select-none max-w-[580px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY WE EXIST BANNER */}
      <section className="w-full bg-white py-8 lg:py-12">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-purple-900/10">
            <img
              src="/ChatGPT Image Aug 31, 2026, 03_59_40 PM.png"
              alt="Why We Exist - Empowering partners to create financial well-being for all"
              className="w-full block h-auto object-cover object-center max-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* 3. SECTION: OUR ECOSYSTEM */}
      <section className="w-full bg-[#FAF8FC] py-12 lg:py-16 border-t border-[#EBE8EF]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase mb-2 block">
              OUR ECOSYSTEM
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight">
              Bringing Together Individuals & Businesses into One Integrated Financial Landscape.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* For Clients Card */}
            <div className="bg-white rounded-[22px] p-5 sm:p-6 border border-purple-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C1FA8] flex items-center justify-center font-bold mb-3 group-hover:bg-[#7C1FA8] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E1B2E] mb-1.5">
                  For Clients
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-snug mb-3.5">
                  We help clients build wealth responsibly, protect assets, and achieve aspirations, through curated solutions.
                </p>
              </div>

              <div className="pt-3.5 border-t border-purple-100/60">
                <div className="flex flex-wrap gap-2">
                  {['Investment', 'Insurance', 'Financing'].map((bullet, idx) => (
                    <span key={idx} className="bg-[#FAF6FC] text-[#7C1FA8] border border-purple-200/80 text-[11px] font-extrabold px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C1FA8]"></span>
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* For Partners Card */}
            <div className="bg-white rounded-[22px] p-5 sm:p-6 border border-purple-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C1FA8] flex items-center justify-center font-bold mb-3 group-hover:bg-[#7C1FA8] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E1B2E] mb-1.5">
                  For Partners
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-snug mb-3.5">
                  A scalable distribution and execution platform, enabling you to offer full suite of financial solutions while retaining client ownership.
                </p>
              </div>

              <div className="pt-3.5 border-t border-purple-100/60">
                <div className="flex flex-wrap gap-2">
                  {['Platform', 'Partner', 'Scale'].map((bullet, idx) => (
                    <span key={idx} className="bg-[#FAF6FC] text-[#7C1FA8] border border-purple-200/80 text-[11px] font-extrabold px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C1FA8]"></span>
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 5. SECTION: OUR PHILOSOPHY */}
      <section className="w-full bg-[#FAF8FC] py-12 lg:py-16 border-t border-[#EBE8EF]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#C81E8C] font-semibold text-xs tracking-[0.2em] uppercase mb-2 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1E1B2E] leading-tight tracking-tight mb-3">
              Built on Three Core Principles
            </h2>
            <p className="font-medium text-sm sm:text-base text-[#544F66] leading-relaxed">
              At PROSPERi5, we believe wealth management should be clear, transparent, and genuinely aligned with the people we work. Whether you are an investor or a business partner, our philosophy is built on three core principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Principle 1 */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C1FA8] flex items-center justify-center font-extrabold text-lg mb-5">
                  01
                </div>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#1E1B2E] mb-2.5">
                  Do What Is Right, Always
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
                  We prioritise suitability, fairness, and clarity in every solution we offer. Your goals guide our decisions, ensuring you receive what is right & not what is convenient.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C1FA8] flex items-center justify-center font-extrabold text-lg mb-5">
                  02
                </div>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#1E1B2E] mb-2.5">
                  Deliver End-to-End Financial Solutions
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
                  We integrate investments, protection, and financing into a single, seamless platform creating a smooth wealth journey for clients and empowering partners.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-purple-100/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C1FA8] flex items-center justify-center font-extrabold text-lg mb-5">
                  03
                </div>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#1E1B2E] mb-2.5">
                  Build Long-Term Transparent Relationships
                </h3>
                <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed">
                  Trust is at the core of everything we do. We focus on sustainable strategies, fair and transparent structures, and reliable servicing for consistency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION: OUR LEADERSHIP TEAM */}
      <section className="w-full bg-[#FAF8FC] py-10 lg:py-14 border-t border-[#EBE8EF]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Section Breadcrumb & Header */}
          <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">

            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#1E1B2E] leading-tight tracking-tight mb-2">
              Our Leadership
            </h2>
            <p className="font-medium text-xs sm:text-sm text-[#544F66] leading-relaxed max-w-2xl mx-auto">
              Driven by experience. Focused on execution. Committed to creating long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Leader 1: Darshit Shah */}
            <div className="bg-white rounded-[28px] p-5 sm:p-6 lg:p-7 border border-purple-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* TOP AREA: Photo on Left + Name, Title, Socials & Metadata List IN FRONT OF Photo */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pb-6 border-b border-purple-100/70">
                  
                  {/* Left Photo Frame */}
                  <div className="relative w-36 sm:w-44 h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100/60 to-purple-50 shrink-0 border border-purple-200/60 shadow-sm">
                    <img
                      src="/darshit_shah.jpg"
                      alt="Darshit Shah"
                      className="w-full h-full object-cover object-top select-none"
                    />
                  </div>

                  {/* Right Content Area: Name, Title, Socials & Metadata Points IN FRONT OF Photo */}
                  <div className="flex-1 w-full text-center sm:text-left flex flex-col justify-between">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-100/60">
                      <div>
                        <h3 className="font-sans font-extrabold text-2xl sm:text-[26px] text-[#1E1B2E] tracking-tight leading-tight">
                          Darshit Shah
                        </h3>
                        <p className="text-[#7C1FA8] font-extrabold text-xs sm:text-sm mt-0.5">
                          Investment Professional & Entrepreneur
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:darshit.shah@prosperi5.com"
                          className="w-8 h-8 rounded-full bg-[#7C1FA8] hover:bg-[#68198f] text-white flex items-center justify-center transition-all shadow-xs"
                          title="Email Darshit Shah"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                        <a
                          href="https://linkedin.com/in/darshit-s-869720285"
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-[#7C1FA8] hover:bg-[#68198f] text-white flex items-center justify-center transition-all shadow-xs"
                          title="LinkedIn Profile"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.46 1.46 0 1 0 0 2.92 1.46 1.46 0 0 0 0-2.92Z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Metadata Stacked IN FRONT OF Photo */}
                    <div className="space-y-2 pt-3">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Role</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            Investment Professional & Entrepreneur
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Experience</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            10+ Years
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            Mumbai, India
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="overflow-hidden">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Email</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5 truncate" title="darshit.shah@prosperi5.com">
                            darshit.shah@prosperi5.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            +91 98765 43210
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* BOTTOM AREA: Full-Width Bio Bullets */}
                <div className="space-y-3 pt-5">
                  {[
                    "Darshit Shah is an investment professional and entrepreneur with over a decade of experience across Institutional Equities, Investment Banking, and business building. He established and led the UK-Europe Institutional Equity Desk, working closely with global investors, including sovereign wealth funds, pension funds, endowments, family offices, and long-only institutions.",
                    "He is the founder of Midas Enterprise, an investment and operating platform that backs listed and unlisted companies using a disciplined approach combining capital, strategy, and execution. Through Midas Enterprise, Darshit partners with founders and management teams to support businesses across fintech, wealth-tech, renewables, consumer products, manufacturing, electric mobility, agriculture, hygiene, hospitality, and technology to guide them from early-stage stages through institutional fundraising, IPO readiness, and long-term value creation.",
                    "Darshit serves as a promoter at Madhav Solar Energy Ltd, a vertically integrated clean energy platform operating across industrial and non-industrial EPC, rooftop and utility-scale solar projects, inverter manufacturing, and R&D-driven battery energy storage solutions (BESS).",
                    "He also leads Estrip Solutions, a next-generation OEM and white-label platform focused on zero-plastic, sustainable home-care products. The company develops R&D-driven, vegan, chemical-free cleaning sheet formats and partners with retailers, brands, and institutional clients seeking environmentally responsible alternatives.",
                    "In addition, Darshit founded Midas Fintech Solutions, a high-performance algorithmic trading and wealth-tech ecosystem offering low-latency, multi-strategy execution systems built on a modern technology stack.",
                    "Darshit is known for a hands-on, execution-driven approach, with a strong focus on disciplined capital allocation, governance, and building high-quality leadership teams."
                  ].map((para, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full border border-purple-300 bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7C1FA8]" />
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#4A4458] font-medium leading-relaxed">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Leader 2: Paras Shah */}
            <div className="bg-white rounded-[28px] p-5 sm:p-6 lg:p-7 border border-purple-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* TOP AREA: Photo on Left + Name, Title, Socials & Metadata List IN FRONT OF Photo */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pb-6 border-b border-purple-100/70">
                  
                  {/* Left Photo Frame */}
                  <div className="relative w-36 sm:w-44 h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100/60 to-purple-50 shrink-0 border border-purple-200/60 shadow-sm">
                    <img
                      src="/paras_shah.jpg"
                      alt="Paras Shah"
                      className="w-full h-full object-cover object-top select-none"
                    />
                  </div>

                  {/* Right Content Area: Name, Title, Socials & Metadata Points IN FRONT OF Photo */}
                  <div className="flex-1 w-full text-center sm:text-left flex flex-col justify-between">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-100/60">
                      <div>
                        <h3 className="font-sans font-extrabold text-2xl sm:text-[26px] text-[#1E1B2E] tracking-tight leading-tight">
                          Paras Shah
                        </h3>
                        <p className="text-[#7C1FA8] font-extrabold text-xs sm:text-sm mt-0.5">
                          Operations & Governance Leader
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:paras.shah@prosperi5.com"
                          className="w-8 h-8 rounded-full bg-[#7C1FA8] hover:bg-[#68198f] text-white flex items-center justify-center transition-all shadow-xs"
                          title="Email Paras Shah"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                        <a
                          href="https://linkedin.com/in/paras-shah-71517a8a"
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-[#7C1FA8] hover:bg-[#68198f] text-white flex items-center justify-center transition-all shadow-xs"
                          title="LinkedIn Profile"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.46 1.46 0 1 0 0 2.92 1.46 1.46 0 0 0 0-2.92Z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Metadata Stacked IN FRONT OF Photo */}
                    <div className="space-y-2 pt-3">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Role</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            Operations & Governance Leader
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Experience</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            18+ Years
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            Mumbai, India
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="overflow-hidden">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Email</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5 truncate" title="paras.shah@prosperi5.com">
                            paras.shah@prosperi5.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-100/60 text-[#7C1FA8] shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone</span>
                          <p className="text-[11px] font-bold text-[#1E1B2E] leading-tight mt-0.5">
                            +91 98765 43210
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* BOTTOM AREA: Full-Width Bio Bullets */}
                <div className="space-y-3 pt-5">
                  {[
                    "Paras brings over 18 years of corporate experience across Fund Raising & Investments, Business Development, Consulting, and Research & Advisory, with deep domain exposure in financial services, real estate, and advisory-led engagements.",
                    "He has played a pivotal role in the resolution of stressed companies under the IBC framework, working closely with legal, financial, and regulatory stakeholders. He has also led acquisition and divestment transactions across Mumbai, Bengaluru, and Pune, and has been instrumental in raising private equity capital from leading real estate funds to support value creation and growth initiatives.",
                    "In his current role, Paras oversees the company's day-to-day operations, providing comprehensive oversight of operational and regulatory functions, ensuring adherence to applicable laws and regulatory frameworks, and leading coordination across internal teams and external stakeholders. His responsibilities include client and partner management, financial oversight, vendor governance, and regulatory liaison, ensuring strong governance, disciplined execution, and seamless organizational functioning.",
                    "Paras is known for his hands-on leadership and strong execution focus. He effectively balances operational efficiency with regulatory discipline while building and sustaining strong relationships with investors, strategic partners, clients, employees, and regulators, this approach has consistently driven organizational stability, governance, and long-term growth."
                  ].map((para, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full border border-purple-300 bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7C1FA8]" />
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#4A4458] font-medium leading-relaxed">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Shared Summary Banner */}
          <div className="mt-7 bg-[#F5EEFC]/80 border border-purple-100/90 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#7C1FA8] text-white flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="font-semibold text-xs sm:text-sm text-[#1E1B2E] leading-relaxed">
              Together, Darshit and Paras bring complementary strengths that drive discipline, innovation, and long-term value for all our stakeholders.
            </p>
          </div>

        </div>
      </section>

      {/* PARTNER REGISTRATION MODAL */}
      {partnerModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPartnerModalOpen(false)}
        >
          <div
            className="bg-[#FAF7FD] rounded-[28px] p-6 sm:p-8 max-w-[460px] w-full shadow-2xl relative border border-purple-100/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPartnerModalOpen(false)}
              className="w-8 h-8 rounded-full bg-purple-100/80 text-[#7C1FA8] hover:bg-purple-200 flex items-center justify-center cursor-pointer absolute top-5 right-5 transition-colors font-bold text-sm z-20"
            >
              ✕
            </button>

            {partnerFormSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1E1B2E]">Thank You!</h3>
                <p className="text-xs text-[#666077]">
                  Your request has been submitted successfully. A Prosperi5 Partner Specialist will call you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-3.5">
                <div className="text-center pb-1">
                  <span className="text-xs font-black text-[#7C1FA8] uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-purple-200 inline-block shadow-2xs">
                    PARTNER REGISTRATION
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1E1B2E] mt-2 tracking-tight">
                    Partner with Prosperi5
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666077] mt-1 font-medium">
                    Fill out your details to connect with a partner manager.
                  </p>
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-extrabold text-[#1E1B2E] block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={partnerFormData.name}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 bg-white text-sm font-medium text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none focus:border-[#7C1FA8] focus:ring-1 focus:ring-[#7C1FA8] transition-all shadow-2xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs sm:text-sm font-extrabold text-[#1E1B2E] block mb-1">Mobile Number *</label>
                    <PhoneInput
                      value={partnerFormData.phone}
                      countryCode={partnerFormData.countryCode}
                      onCountryCodeChange={(code) => setPartnerFormData((f) => ({ ...f, countryCode: code }))}
                      onChange={(val) => setPartnerFormData((f) => ({ ...f, phone: val }))}
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-extrabold text-[#1E1B2E] block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai"
                      value={partnerFormData.city}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 bg-white text-sm font-medium text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none focus:border-[#7C1FA8] focus:ring-1 focus:ring-[#7C1FA8] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-extrabold text-[#1E1B2E] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={partnerFormData.email}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 bg-white text-sm font-medium text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none focus:border-[#7C1FA8] focus:ring-1 focus:ring-[#7C1FA8] transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-extrabold text-[#1E1B2E] block mb-1">Partner Type</label>
                  <select
                    value={partnerFormData.partnerType}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, partnerType: e.target.value })}
                    className="w-full px-[#16px] py-2.5 rounded-xl border border-purple-200/90 bg-white text-sm font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FA8] focus:ring-1 focus:ring-[#7C1FA8] transition-all shadow-2xs cursor-pointer"
                  >
                    <option value="Financial Advisor / IFA">Financial Advisor / IFA</option>
                    <option value="Mutual Fund Distributor (MFD)">Mutual Fund Distributor (MFD)</option>
                    <option value="Insurance Advisor">Insurance Advisor</option>
                    <option value="Chartered Accountant (CA)">Chartered Accountant (CA)</option>
                    <option value="Wealth Manager / RIA">Wealth Manager / RIA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-3 rounded-xl uppercase tracking-wider text-sm shadow-md shadow-purple-900/20 transition-all active:scale-[0.99] cursor-pointer mt-1"
                >
                  SUBMIT REQUEST
                </button>

                <p className="text-[11px] text-center text-[#666077] font-medium pt-1">
                  🔒 We respect your privacy. Zero spam guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
