import React from 'react';
import { getPathForPage } from './utils/routing';

export default function Footer({ onNavigatePage }) {
  const handleNav = (page) => {
    if (onNavigatePage) {
      onNavigatePage(page);
    } else {
      const path = getPathForPage(page);
      if (window.location.pathname + window.location.search !== path || window.location.hash) {
        window.history.pushState({ page }, '', path);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    handleNav('about');
    setTimeout(() => {
      const el = document.getElementById('contact-form-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* FOOTER - MOBILE VIEW ONLY */}
      <footer id="footer-mobile" className="block lg:hidden bg-[#130B24] text-white py-10 px-5 sm:px-8 border-t border-purple-900/40 font-sans select-none w-full">
        <div className="w-full max-w-md mx-auto flex flex-col items-center text-center">

          {/* Logo */}
          <img
            src="/PROPSERI 5 LOGO.png"
            className="h-14 sm:h-16 w-auto object-contain mb-3 filter drop-shadow-md cursor-pointer"
            alt="PROSPERi5 Logo"
            onClick={() => handleNav('home')}
          />

          {/* Tagline */}
          <p className="font-medium text-sm sm:text-base leading-relaxed text-white/90 text-center max-w-xs mb-8">
            Investments, insurance and financing through one trusted relationship.
          </p>

          {/* 4 Link Columns Grid (2x2) */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 w-full text-left mb-8 px-1">

            {/* Column 1: SOLUTIONS */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#F5A623] text-xs font-bold tracking-wider uppercase mb-1">
                SOLUTIONS
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-white/80">
                <li><a href={getPathForPage('grow')} onClick={(e) => { e.preventDefault(); handleNav('grow'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Grow</a></li>
                <li><a href={getPathForPage('protect')} onClick={(e) => { e.preventDefault(); handleNav('protect'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Protect</a></li>
                <li><a href={getPathForPage('investment')} onClick={(e) => { e.preventDefault(); handleNav('investment'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Investments</a></li>
                <li><a href={getPathForPage('insurance')} onClick={(e) => { e.preventDefault(); handleNav('insurance'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Insurance</a></li>
                <li><a href={getPathForPage('financing')} onClick={(e) => { e.preventDefault(); handleNav('financing'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Financing</a></li>
                <li><a href={getPathForPage('loan')} onClick={(e) => { e.preventDefault(); handleNav('loan'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Loans</a></li>
                <li><a href={getPathForPage('borrow')} onClick={(e) => { e.preventDefault(); handleNav('borrow'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Borrow</a></li>
                <li><a href={getPathForPage('tools')} onClick={(e) => { e.preventDefault(); handleNav('tools'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Financial Tools</a></li>
              </ul>
            </div>

            {/* Column 2: FOR INVESTORS */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#F5A623] text-xs font-bold tracking-wider uppercase mb-1">
                FOR INVESTORS
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-white/80">
                <li><a href={getPathForPage('investors')} onClick={(e) => { e.preventDefault(); handleNav('investors'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Investor Overview</a></li>
                <li><a href={getPathForPage('insights')} onClick={(e) => { e.preventDefault(); handleNav('insights'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Market Insights</a></li>
                <li><a href={getPathForPage('tax')} onClick={(e) => { e.preventDefault(); handleNav('tax'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Tax Solutions</a></li>
                <li><a href={getPathForPage('personal-finance')} onClick={(e) => { e.preventDefault(); handleNav('personal-finance'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Personal Finance</a></li>
                <li><a href={getPathForPage('knowledge')} onClick={(e) => { e.preventDefault(); handleNav('knowledge'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Knowledge Centre</a></li>
                <li><a href={getPathForPage('blog')} onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Blog &amp; Articles</a></li>
                <li><a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Talk To an Expert</a></li>
                <li><a href={getPathForPage('home')} onClick={(e) => { e.preventDefault(); handleNav('home'); setTimeout(() => { const el = document.getElementById('faqs'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }} className="hover:text-white transition-colors cursor-pointer text-left block">FAQs</a></li>
              </ul>
            </div>

            {/* Column 3: FOR PARTNERS */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#F5A623] text-xs font-bold tracking-wider uppercase mb-1">
                FOR PARTNERS
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-white/80">
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Partner Overview</button></li>
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Become a Partner</button></li>
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Partner Login</button></li>
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Partner Brochure</button></li>
              </ul>
            </div>

            {/* Column 4: COMPANY */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#F5A623] text-xs font-bold tracking-wider uppercase mb-1">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-white/80">
                <li><a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-white transition-colors cursor-pointer text-left block">About Us</a></li>
                <li><a href={getPathForPage('careers')} onClick={(e) => { e.preventDefault(); handleNav('careers'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Careers</a></li>
                <li><a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Why PROSPERi5</a></li>
                <li><a href={getPathForPage('home')} onClick={(e) => { e.preventDefault(); handleNav('home'); setTimeout(() => { const el = document.getElementById('testimonials'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }} className="hover:text-white transition-colors cursor-pointer text-left block">Testimonials</a></li>
                <li><a href={getPathForPage('contact')} onClick={handleNavContact} className="hover:text-white transition-colors cursor-pointer text-left block">Contact Us</a></li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-4"></div>

          {/* Ready to start conversation block */}
          <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center my-4">
            <span className="text-[#F5A623] text-[11px] font-extrabold tracking-wider uppercase mb-1.5 block">
              READY TO START A CONVERSATION?
            </span>

            <p className="font-medium text-xs sm:text-sm text-white/90 mb-4 max-w-xs leading-snug">
              Talk to a financial expert or partner specialist.
            </p>

            <button
              onClick={handleNavContact}
              className="bg-[#7C1FA8] hover:bg-[#9B26D4] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer mb-5 flex items-center justify-center gap-1.5 border border-white/10"
            >
              <span>Contact Us</span>
              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>

            {/* Contact info */}
            <div className="flex flex-col items-center gap-1 mb-4">
              <a href="mailto:hello@prosperi5.com" className="font-semibold text-xs sm:text-sm text-white hover:text-[#F5A623] transition-colors">
                hello@prosperi5.com
              </a>
              <p className="text-xs text-white/70 font-medium">
                +91 00000 00000
              </p>
            </div>

            {/* Social Follow */}
            <div className="flex flex-col items-center gap-2 pt-2 border-t border-white/10 w-full">
              <span className="text-[#F5A623] text-[10px] font-extrabold tracking-wider uppercase">FOLLOW US</span>
              <div className="flex items-center justify-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="w-full flex flex-col items-center text-center mt-2 pt-4 border-t border-white/10">
            <p className="font-medium text-[11px] text-white/70 mb-2.5">
              © 2026 PROSPERi5. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[#F5A623] text-xs font-medium mb-3 text-center w-full">
              <button onClick={() => handleNav('privacy-policy')} className="hover:underline cursor-pointer">Privacy Policy</button>
              <span>·</span>
              <button onClick={() => handleNav('terms-and-conditions')} className="hover:underline cursor-pointer">Terms &amp; Conditions</button>
              <span>·</span>
              <button onClick={() => handleNav('terms-and-conditions')} className="hover:underline cursor-pointer">Disclaimer</button>
              <span>·</span>
              <button onClick={() => handleNav('about')} className="hover:underline cursor-pointer">Grievance Redressal</button>
            </div>

            <p className="text-[10px] text-white/50 leading-relaxed mb-4 max-w-xs text-center">
              Investment products are subject to market risks. Insurance and financing solutions are subject to provider terms, eligibility and applicable regulations.
            </p>

            <button
              onClick={scrollToTop}
              className="text-[#F5A623] text-xs font-semibold flex items-center justify-center gap-1.5 hover:underline cursor-pointer py-1"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>

        </div>
      </footer>

      {/* FOOTER - DESKTOP VIEW ONLY */}
      <footer
        style={{ backgroundImage: "url('/ChatGPT Image Aug 12, 2026, 09_15_25 PM.png')" }}
        className="hidden lg:block w-full py-4 sm:py-5 lg:py-6 px-3 sm:px-4 lg:px-5 relative overflow-hidden select-none font-sans text-white border-t border-purple-900/40 bg-cover bg-center"
      >
        {/* Main Floating Footer Card Container */}
        <div className="bg-[#180F24]/95 backdrop-blur-md rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 lg:p-6 max-w-[1248px] mx-auto border border-white/10 shadow-2xl relative overflow-hidden">

          {/* TOP NAVIGATION GRID (5 COLUMNS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 mb-5 sm:mb-6">

            {/* Column 1: Brand Info */}
            <div className="lg:col-span-1 flex flex-col justify-start">
              <div>
                <img
                  src="/PROPSERI 5 LOGO.png"
                  className="h-14 sm:h-16 lg:h-18 w-auto object-contain mb-3.5 filter drop-shadow-md cursor-pointer"
                  alt="PROSPERi5 Logo"
                  onClick={() => handleNav('home')}
                />
                <p className="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-semibold max-w-[220px]">
                  Investments, insurance and financing through one trusted relationship.
                </p>
              </div>
            </div>

            {/* Column 2: SOLUTIONS */}
            <div>
              <h4 className="text-[#F5A623] text-xs font-extrabold tracking-wider uppercase mb-2">SOLUTIONS</h4>
              <ul className="space-y-1 text-xs sm:text-[13px] text-white/90 font-semibold">
                <li><a href={getPathForPage('grow')} onClick={(e) => { e.preventDefault(); handleNav('grow'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Grow</a></li>
                <li><a href={getPathForPage('protect')} onClick={(e) => { e.preventDefault(); handleNav('protect'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Protect</a></li>
                <li><a href={getPathForPage('investment')} onClick={(e) => { e.preventDefault(); handleNav('investment'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Investments</a></li>
                <li><a href={getPathForPage('insurance')} onClick={(e) => { e.preventDefault(); handleNav('insurance'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Insurance</a></li>
                <li><a href={getPathForPage('financing')} onClick={(e) => { e.preventDefault(); handleNav('financing'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Financing</a></li>
                <li><a href={getPathForPage('loan')} onClick={(e) => { e.preventDefault(); handleNav('loan'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Loans</a></li>
                <li><a href={getPathForPage('borrow')} onClick={(e) => { e.preventDefault(); handleNav('borrow'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Borrow</a></li>
                <li><a href={getPathForPage('tools')} onClick={(e) => { e.preventDefault(); handleNav('tools'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Financial Tools</a></li>
              </ul>
            </div>

            {/* Column 3: FOR INVESTORS */}
            <div>
              <h4 className="text-[#F5A623] text-xs font-extrabold tracking-wider uppercase mb-2">FOR INVESTORS</h4>
              <ul className="space-y-1 text-xs sm:text-[13px] text-white/90 font-semibold">
                <li><a href={getPathForPage('investors')} onClick={(e) => { e.preventDefault(); handleNav('investors'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Investor Overview</a></li>
                <li><a href={getPathForPage('insights')} onClick={(e) => { e.preventDefault(); handleNav('insights'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Market Insights</a></li>
                <li><a href={getPathForPage('tax')} onClick={(e) => { e.preventDefault(); handleNav('tax'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Tax Solutions</a></li>
                <li><a href={getPathForPage('personal-finance')} onClick={(e) => { e.preventDefault(); handleNav('personal-finance'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Personal Finance</a></li>
                <li><a href={getPathForPage('knowledge')} onClick={(e) => { e.preventDefault(); handleNav('knowledge'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Knowledge Centre</a></li>
                <li><a href={getPathForPage('blog')} onClick={(e) => { e.preventDefault(); handleNav('blog'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Blog &amp; Articles</a></li>
                <li><a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Talk To an Expert</a></li>
                <li><a href={getPathForPage('home')} onClick={(e) => { e.preventDefault(); handleNav('home'); setTimeout(() => { const el = document.getElementById('faqs'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }} className="hover:text-white transition-colors cursor-pointer text-left block">FAQs</a></li>
              </ul>
            </div>

            {/* Column 4: FOR PARTNERS */}
            <div>
              <h4 className="text-[#F5A623] text-xs font-extrabold tracking-wider uppercase mb-2">FOR PARTNERS</h4>
              <ul className="space-y-1 text-xs sm:text-[13px] text-white/90 font-semibold">
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Partner Overview</button></li>
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Become a Partner</button></li>
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Partner Login</button></li>
                <li><button onClick={() => handleNav('partner')} className="hover:text-white transition-colors cursor-pointer text-left">Partner Brochure</button></li>
              </ul>
            </div>

            {/* Column 5: COMPANY */}
            <div>
              <h4 className="text-[#F5A623] text-xs font-extrabold tracking-wider uppercase mb-2">COMPANY</h4>
              <ul className="space-y-1 text-xs sm:text-[13px] text-white/90 font-semibold">
                <li><a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-white transition-colors cursor-pointer text-left block">About Us</a></li>
                <li><a href={getPathForPage('careers')} onClick={(e) => { e.preventDefault(); handleNav('careers'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Careers</a></li>
                <li><a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-white transition-colors cursor-pointer text-left block">Why PROSPERi5</a></li>
                <li><a href={getPathForPage('home')} onClick={(e) => { e.preventDefault(); handleNav('home'); setTimeout(() => { const el = document.getElementById('testimonials'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }} className="hover:text-white transition-colors cursor-pointer text-left block">Testimonials</a></li>
                <li><a href={getPathForPage('contact')} onClick={handleNavContact} className="hover:text-white transition-colors cursor-pointer text-left block">Contact Us</a></li>
              </ul>
            </div>

          </div>

          {/* MIDDLE DIVIDER */}
          <div className="border-t border-white/10 my-3 sm:my-3.5"></div>

          {/* MIDDLE CONTACT & SOCIAL ROW */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-3 sm:mb-3.5">

            {/* Left: CTA */}
            <div className="md:col-span-5">
              <span className="text-[#F5A623] text-[11px] font-extrabold tracking-wider uppercase mb-0.5 block">
                READY TO START A CONVERSATION?
              </span>
              <h4 className="text-xs sm:text-[14px] font-bold text-white mb-2">
                Talk to a financial expert or partner specialist.
              </h4>
              <button
                onClick={handleNavContact}
                className="bg-[#7C1FAB] hover:bg-[#9B26D4] text-white font-bold text-xs px-5 py-2 rounded-full shadow-md inline-flex items-center gap-1.5 transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>Contact Us</span>
                <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>

            {/* Center: Contact info */}
            <div className="md:col-span-4">
              <a href="mailto:hello@prosperi5.com" className="text-sm sm:text-[15px] font-extrabold text-white hover:text-[#F5A623] transition-colors block leading-snug">
                hello@prosperi5.com
              </a>
              <p className="text-xs sm:text-[13px] text-white/90 font-semibold mt-0.5">+91 00000 00000</p>
            </div>

            {/* Right: Social Icons */}
            <div className="md:col-span-3 flex flex-col md:items-start lg:items-end">
              <span className="text-[#F5A623] text-[11px] font-extrabold tracking-wider uppercase mb-1.5 block">FOLLOW</span>
              <div className="flex items-center gap-2.5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all cursor-pointer shadow-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all cursor-pointer shadow-sm">
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all cursor-pointer shadow-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* SERVICES PILLARS BOX */}
          <div className="border border-white/10 rounded-[16px] py-3.5 px-5 bg-white/[0.03] mb-4 sm:mb-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
              <div 
                onClick={() => handleNav('investment')}
                className="flex items-center gap-2.5 md:border-r md:border-white/10 md:pr-3 cursor-pointer group hover:opacity-80 transition-opacity"
              >
                <span className="text-[#E84C88] font-extrabold text-xs sm:text-[13.5px]">01</span>
                <span className="text-xs sm:text-[13.5px] font-bold text-white group-hover:text-[#F5A623] transition-colors">Investments</span>
              </div>
              <div 
                onClick={() => handleNav('insurance')}
                className="flex items-center gap-2.5 md:border-r md:border-white/10 md:px-3 cursor-pointer group hover:opacity-80 transition-opacity"
              >
                <span className="text-[#9B26D4] font-extrabold text-xs sm:text-[13.5px]">02</span>
                <span className="text-xs sm:text-[13.5px] font-bold text-white group-hover:text-[#F5A623] transition-colors">Insurance</span>
              </div>
              <div 
                onClick={() => handleNav('financing')}
                className="flex items-center gap-2.5 md:border-r md:border-white/10 md:px-3 cursor-pointer group hover:opacity-80 transition-opacity"
              >
                <span className="text-[#E84C88] font-extrabold text-xs sm:text-[13.5px]">03</span>
                <span className="text-xs sm:text-[13.5px] font-bold text-white group-hover:text-[#F5A623] transition-colors">Financing</span>
              </div>
              <div 
                onClick={() => handleNav('partner')}
                className="flex items-center gap-2.5 md:pl-3 cursor-pointer group hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-extrabold text-xs sm:text-[13.5px]">04</span>
                <span className="text-xs sm:text-[13.5px] font-bold text-white group-hover:text-[#F5A623] transition-colors">Partner Platform</span>
              </div>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT & DISCLAIMER & SCROLL TO TOP */}
          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2 text-xs sm:text-[12.5px] text-white/90 font-semibold">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-x-4 gap-y-2 text-center sm:text-left">

              <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2">
                <span className="font-semibold">© 2026 PROSPERi5. All rights reserved.</span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 sm:gap-x-3 gap-y-1 text-white/90 font-semibold">
                  <a href={getPathForPage('privacy-policy')} onClick={(e) => { e.preventDefault(); handleNav('privacy-policy'); }} className="hover:text-[#F5A623] transition-colors cursor-pointer">Privacy Policy</a>
                  <span className="text-white/40">·</span>
                  <a href={getPathForPage('terms-and-conditions')} onClick={(e) => { e.preventDefault(); handleNav('terms-and-conditions'); }} className="hover:text-[#F5A623] transition-colors cursor-pointer">Terms &amp; Conditions</a>
                  <span className="text-white/40">·</span>
                  <a href={getPathForPage('terms-and-conditions')} onClick={(e) => { e.preventDefault(); handleNav('terms-and-conditions'); }} className="hover:text-[#F5A623] transition-colors cursor-pointer">Disclaimer</a>
                  <span className="text-white/40">·</span>
                  <a href={getPathForPage('about')} onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="hover:text-[#F5A623] transition-colors cursor-pointer">Grievance Redressal</a>
                </div>
              </div>

              {/* Scroll to Top Action Button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#F5A623] hover:text-white transition-all text-xs font-bold shadow-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <span>Back to top</span>
                <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
              </button>

            </div>

            <p className="text-[11px] sm:text-xs text-white/70 text-center sm:text-left leading-normal font-semibold">
              Investment products are subject to market risks. Insurance and financing solutions are subject to provider terms, eligibility and applicable regulations.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
