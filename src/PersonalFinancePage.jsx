import React, { useState } from 'react';
import Footer from './Footer';
import { FiPieChart, FiDollarSign, FiTrendingUp, FiShield, FiCreditCard, FiTarget, FiActivity, FiCheckCircle, FiRefreshCw } from 'react-icons/fi';

export default function PersonalFinancePage({ onNavigateHome, onNavigatePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  // Interactive Planning Popup Modal States
  const [planningModalOpen, setPlanningModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [financialGoal, setFinancialGoal] = useState('Wealth Creation');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E1B2E] antialiased selection:bg-purple-100 selection:text-[#7C1FA8] overflow-x-hidden">



      {/* 3. HERO SECTION (FULL WIDTH - CUSTOM REACT) */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 -mt-[76px] lg:-mt-[88px] pt-[116px] sm:pt-[126px] lg:pt-[136px] pb-5 sm:pb-6 lg:pb-7 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Purple Background Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-200/40 rounded-full filter blur-[90px] pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Rupee Badge Tag, Main Heading, Subtitle & Action CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left py-1">
            
            {/* Category Pill Tag with Rupee Icon */}
            <div className="inline-flex items-center gap-2 bg-[#F0E6F8] text-[#7C1FA8] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5">
              <span className="w-5 h-5 rounded-md bg-[#7C1FA8] text-white flex items-center justify-center text-xs font-extrabold shadow-xs">₹</span>
              <span>PERSONAL FINANCE</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-sans font-extrabold text-[36px] leading-[44px] sm:text-[44px] sm:leading-[50px] lg:text-[48px] lg:leading-[54px] tracking-[-0.035em] text-[#1E1B2E] mb-3.5 w-full max-w-[540px]">
              Take control of <br />your money. <br />
              <span className="text-[#7C1FA8]">Build a better future.</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="font-medium text-[14.5px] sm:text-[15.5px] leading-[23px] sm:leading-[26px] text-[#544F66] mb-6 w-full max-w-[480px]">
              Smart money habits today lead to financial freedom tomorrow. Learn, plan and take action with confidence.
            </p>

            {/* Left Action CTA Button */}
            <div>
              <button 
                onClick={() => {
                  setPlanningModalOpen(true);
                  setModalSubmitted(false);
                }}
                className="bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Start Planning</span>
                <span>➔</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Personal Finance Workstation & Dashboard (Expanding Leftward) */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-start w-full h-full mt-4 lg:mt-0 lg:-ml-4">
            <div className="relative z-10 w-full flex justify-center lg:justify-start items-center">
              <img
                src="/ChatGPT Image Aug 29, 2026, 09_36_25 PM.png"
                alt="Take control of your money - PROSPERi5 Personal Finance 3D Illustration"
                className="w-full max-w-[660px] sm:max-w-[720px] lg:max-w-[780px] h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] object-contain drop-shadow-xl select-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION 2: LEARN AND GROW - PERSONAL FINANCE MADE SIMPLE */}
      <section id="learn-and-grow" className="py-8 lg:py-12 bg-[#FAF8FC] font-sans border-b border-purple-200/60">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#7C1FA8] text-xs font-extrabold uppercase tracking-widest bg-purple-100/80 px-3.5 py-1 rounded-full border border-purple-200/80">
              LEARN AND GROW
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1E1B2E] mt-3 tracking-tight">
              Personal finance made simple
            </h2>
            <p className="text-xs sm:text-sm text-[#544F66] mt-1.5 font-medium">
              Practical guides and tools to help you make better financial decisions.
            </p>
          </div>

          {/* 6 Cards Grid (Matching Investment Solutions card layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Card 1: Budgeting 101 */}
            <div className="bg-[#FAF4FD] border border-[#EBE3F5] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-purple-100/60 border border-purple-200/60 text-[#8B1FA8] flex items-center justify-center shadow-2xs">
                  <FiPieChart className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Budgeting 101</h3>
                  <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                    Learn how to create a budget that works for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Save Smart */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/60 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shadow-2xs">
                  <FiDollarSign className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Save Smart</h3>
                  <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                    Simple ways to save more money & emergency funds.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Invest for Growth */}
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-100/60 border border-blue-200/60 text-blue-700 flex items-center justify-center shadow-2xs">
                  <FiTrendingUp className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Invest for Growth</h3>
                  <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                    Choose the right investments to grow wealth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Protect What Matters */}
            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-purple-100/80 border border-purple-200/80 text-purple-700 flex items-center justify-center shadow-2xs">
                  <FiShield className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Protect What Matters</h3>
                  <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                    Explore insurance options for your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Manage Debt */}
            <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-100/60 border border-amber-200/60 text-amber-700 flex items-center justify-center shadow-2xs">
                  <FiCreditCard className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Manage Debt</h3>
                  <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                    Smart tips to improve your financial health.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6: Plan Your Goals */}
            <div className="bg-[#FDF2F8] border border-[#FCE7F3] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-pink-100/80 border border-pink-200/80 text-pink-700 flex items-center justify-center shadow-2xs">
                  <FiTarget className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Plan Your Goals</h3>
                  <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                    Plan for major life goals & retirement.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION 3: TOOLS TO EMPOWER YOU - CALCULATORS */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF6FC] via-[#F5EEFA] to-white font-sans border-b border-purple-100/60">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Centered Header with Increased Size (No Explore All Tools button) */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-[#7C1FA8] text-xs font-extrabold uppercase tracking-widest bg-purple-100/80 px-3.5 py-1 rounded-full border border-purple-200/80">
              TOOLS TO EMPOWER YOU
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B2E] mt-2.5 tracking-tight">
              Calculate. Plan. Achieve.
            </h2>
            <p className="text-xs sm:text-sm text-[#666077] mt-1.5 font-normal">
              Use our free tools to plan your finances better.
            </p>
          </div>

          {/* 4 Improved Calculator Cards Grid (2-column on mobile, 4 on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            
            {/* Calculator 1: SIP Calculator */}
            <div 
              onClick={() => onNavigatePage && onNavigatePage('knowledge')}
              className="group bg-white hover:bg-[#7C1FA8] hover:border-[#7C1FA8] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-purple-100 shadow-2xs hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between space-y-2.5 sm:space-y-4"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-100 text-[#7C1FA8] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center font-bold flex-shrink-0 transition-colors">
                  <svg className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-lg font-extrabold text-[#1E1B2E] group-hover:text-white transition-colors leading-tight">
                  SIP Calculator
                </h3>
                <p className="text-[10.5px] sm:text-sm text-[#666077] group-hover:text-purple-100/90 leading-snug sm:leading-relaxed transition-colors font-medium">
                  Calculate returns on your SIP investments.
                </p>
              </div>
              <div className="text-[11px] sm:text-sm font-extrabold text-[#7C1FA8] group-hover:text-white group-hover:translate-x-1.5 transition-all flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                <span>Calculate</span>
                <span className="text-xs sm:text-base">➔</span>
              </div>
            </div>

            {/* Calculator 2: EMI Calculator */}
            <div 
              onClick={() => onNavigatePage && onNavigatePage('borrow')}
              className="group bg-white hover:bg-[#7C1FA8] hover:border-[#7C1FA8] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-purple-100 shadow-2xs hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between space-y-2.5 sm:space-y-4"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-100 text-[#7C1FA8] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center font-bold flex-shrink-0 transition-colors">
                  <svg className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-lg font-extrabold text-[#1E1B2E] group-hover:text-white transition-colors leading-tight">
                  EMI Calculator
                </h3>
                <p className="text-[10.5px] sm:text-sm text-[#666077] group-hover:text-purple-100/90 leading-snug sm:leading-relaxed transition-colors font-medium">
                  Plan your loan EMIs and manage your finances.
                </p>
              </div>
              <div className="text-[11px] sm:text-sm font-extrabold text-[#7C1FA8] group-hover:text-white group-hover:translate-x-1.5 transition-all flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                <span>Calculate</span>
                <span className="text-xs sm:text-base">➔</span>
              </div>
            </div>

            {/* Calculator 3: Retirement Calculator */}
            <div 
              onClick={() => onNavigatePage && onNavigatePage('investment')}
              className="group bg-white hover:bg-[#7C1FA8] hover:border-[#7C1FA8] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-purple-100 shadow-2xs hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between space-y-2.5 sm:space-y-4"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-100 text-[#7C1FA8] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center font-bold flex-shrink-0 transition-colors">
                  <svg className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-lg font-extrabold text-[#1E1B2E] group-hover:text-white transition-colors leading-tight">
                  Retirement Calculator
                </h3>
                <p className="text-[10.5px] sm:text-sm text-[#666077] group-hover:text-purple-100/90 leading-snug sm:leading-relaxed transition-colors font-medium">
                  Find out how much you need for retirement.
                </p>
              </div>
              <div className="text-[11px] sm:text-sm font-extrabold text-[#7C1FA8] group-hover:text-white group-hover:translate-x-1.5 transition-all flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                <span>Calculate</span>
                <span className="text-xs sm:text-base">➔</span>
              </div>
            </div>

            {/* Calculator 4: Savings Goal Calculator */}
            <div 
              onClick={() => onNavigatePage && onNavigatePage('investment')}
              className="group bg-white hover:bg-[#7C1FA8] hover:border-[#7C1FA8] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-purple-100 shadow-2xs hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between space-y-2.5 sm:space-y-4"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-100 text-[#7C1FA8] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center font-bold flex-shrink-0 transition-colors">
                  <svg className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-lg font-extrabold text-[#1E1B2E] group-hover:text-white transition-colors leading-tight">
                  Savings Goal Calculator
                </h3>
                <p className="text-[10.5px] sm:text-sm text-[#666077] group-hover:text-purple-100/90 leading-snug sm:leading-relaxed transition-colors font-medium">
                  Plan and track savings towards your goals.
                </p>
              </div>
              <div className="text-[11px] sm:text-sm font-extrabold text-[#7C1FA8] group-hover:text-white group-hover:translate-x-1.5 transition-all flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                <span>Calculate</span>
                <span className="text-xs sm:text-base">➔</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION 4: MONEY HABITS THAT MATTER */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1500px] mx-auto font-sans border-b border-purple-100/60">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[#7C1FA8] text-xs font-extrabold uppercase tracking-widest bg-purple-100/80 px-3.5 py-1 rounded-full border border-purple-200/80">
            MONEY HABITS THAT MATTER
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1E1B2E] mt-3 tracking-tight">
            Build better habits, build a better life
          </h2>
          <p className="text-xs sm:text-sm text-[#544F66] mt-1.5 font-medium">
            Small changes today can lead to big financial wins tomorrow.
          </p>
        </div>

        {/* 5 Cards Grid (Matching Investment Solutions card layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          
          {/* Habit 1: Set Clear Goals */}
          <div className="bg-[#FAF4FD] border border-[#EBE3F5] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-purple-100/60 border border-purple-200/60 text-[#8B1FA8] flex items-center justify-center shadow-2xs">
                <FiTarget className="w-5.5 h-5.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Set Clear Goals</h3>
                <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                  Define what you want to achieve.
                </p>
              </div>
            </div>
          </div>

          {/* Habit 2: Track Your Money */}
          <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-100/60 border border-blue-200/60 text-blue-700 flex items-center justify-center shadow-2xs">
                <FiActivity className="w-5.5 h-5.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Track Your Money</h3>
                <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                  Know where your money goes every month.
                </p>
              </div>
            </div>
          </div>

          {/* Habit 3: Live Below Your Means */}
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100/60 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shadow-2xs">
                <FiCheckCircle className="w-5.5 h-5.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Live Below Your Means</h3>
                <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                  Spend less than you earn and save the rest.
                </p>
              </div>
            </div>
          </div>

          {/* Habit 4: Invest Consistently */}
          <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-100/60 border border-amber-200/60 text-amber-700 flex items-center justify-center shadow-2xs">
                <FiTrendingUp className="w-5.5 h-5.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Invest Consistently</h3>
                <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                  Start small, stay consistent and grow wealth.
                </p>
              </div>
            </div>
          </div>

          {/* Habit 5: Review & Improve */}
          <div className="bg-[#FDF2F8] border border-[#FCE7F3] rounded-[22px] p-5 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative text-left sm:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-pink-100/80 border border-pink-200/80 text-pink-700 flex items-center justify-center shadow-2xs">
                <FiRefreshCw className="w-5.5 h-5.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Review & Improve</h3>
                <p className="text-base font-body text-[#544F66] font-medium mt-1 leading-relaxed">
                  Review regularly and keep improving.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PERSONAL FINANCIAL PLANNING POPUP MODAL */}
      {planningModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in fade-in zoom-in duration-200 space-y-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-purple-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#7C1FA8] flex items-center justify-center font-extrabold text-xs">
                  🎯
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#1E1B2E]">
                  Personal Financial Plan
                </h3>
              </div>
              <button
                onClick={() => {
                  setPlanningModalOpen(false);
                  setModalSubmitted(false);
                }}
                className="text-gray-400 hover:text-[#7C1FA8] w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center font-extrabold text-sm cursor-pointer transition-colors z-20"
              >
                ✕
              </button>
            </div>

            {!modalSubmitted ? (
              <>
                <div className="space-y-1">
                  <span className="bg-purple-100 text-[#7C1FA8] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    PERSONAL FINANCE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1B2E]">
                    Start Your Financial Journey
                  </h3>
                  <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                    Get a personalized financial roadmap tailored to your life goals and budget.
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                      </select>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. 98765 43210"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full bg-white p-2.5 text-xs font-medium text-[#1E1B2E] placeholder:text-gray-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-[#1E1B2E] block mb-1">Primary Financial Goal</label>
                    <select
                      value={financialGoal}
                      onChange={(e) => setFinancialGoal(e.target.value)}
                      className="w-full bg-white border border-gray-300 focus:border-[#7C1FA8] rounded-xl p-2.5 text-xs font-bold text-[#1E1B2E] outline-none cursor-pointer"
                    >
                      <option value="Wealth Creation">Wealth Creation &amp; Growth</option>
                      <option value="Retirement Planning">Retirement &amp; Pension</option>
                      <option value="Buying a Home">Buying Property / Home</option>
                      <option value="Tax Savings">Tax Saving &amp; Optimization</option>
                      <option value="Children Education">Children's Future &amp; Education</option>
                      <option value="Emergency Fund">Building Emergency Reserves</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 active:scale-95"
                  >
                    <span>Get My Free Financial Plan</span>
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
                    Thank you, <span className="font-bold text-[#1E1B2E]">{fullName || 'Valued User'}</span>! Our personal finance advisor will connect with you within 24 hours to help craft your roadmap.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPlanningModalOpen(false);
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
      )}

      {/* FOOTER */}
      <Footer onNavigatePage={onNavigatePage} onNavigateHome={onNavigateHome} />
    </div>
  );
}
