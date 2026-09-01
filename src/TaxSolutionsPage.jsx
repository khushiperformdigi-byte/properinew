import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { sendWhatsAppEnquiry } from './utils/whatsapp';

// Animated Counter Component for Trust Metrics
function AnimatedMetric({ value, label, prefix = '', suffix = '' }) {
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    const numericOnly = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericOnly)) return;

    let current = 0;
    const steps = 25;
    const increment = numericOnly / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericOnly) {
        setDisplayNum(numericOnly);
        clearInterval(timer);
      } else {
        setDisplayNum(Math.floor(current));
      }
    }, 40);

    return () => clearInterval(timer);
  }, [value]);

  const renderText = () => {
    if (value.includes('24/7')) return '24/7';
    if (value.includes('Cr')) return `${prefix}${displayNum.toLocaleString('en-IN')} Cr${suffix}`;
    if (value.includes('L')) return `${prefix}${displayNum}L${suffix}`;
    if (value.includes('%')) return `${displayNum}%`;
    return `${prefix}${displayNum}${suffix}`;
  };

  return (
    <div className="bg-white hover:bg-[#FAF4FD] border border-purple-100 rounded-2xl p-4 text-center space-y-1 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#7C1FA8] tracking-tight">
        {renderText()}
      </div>
      <div className="text-[11px] sm:text-xs font-extrabold text-[#666077] uppercase tracking-wider">{label}</div>
    </div>
  );
}

// Compact Animated Metric Counter for Hero Section
function HeroMetricCounter({ value, label, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericVal = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericVal)) return;

    let current = 0;
    const steps = 30;
    const increment = numericVal / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericVal) {
        setCount(numericVal);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#7C1FA8] tracking-tight">
        {prefix}{count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-[11px] sm:text-xs font-semibold text-[#666077] mt-0.5">{label}</div>
    </div>
  );
}

export default function TaxSolutionsPage({ onNavigateHome, onNavigatePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tax Calculator State
  const [annualIncome, setAnnualIncome] = useState(1200000); // 12 Lakhs default
  const [invested80C, setInvested80C] = useState(150000); // 1.5 Lakhs max 80C default

  // Modal State
  const [selectedModal, setSelectedModal] = useState(false);
  const [modalOption, setModalOption] = useState({ title: '', subtitle: '' });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', loanType: 'Tax Solutions', amount: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Tax Savings Calculation (80C Deduction up to 1.5L @ ~30% marginal slab rate + 4% Cess = ~31.2%)
  const calculateTaxSavings = () => {
    const capped80C = Math.min(invested80C, 150000);
    // Rate estimation based on income slab
    let slabRate = 0.30;
    if (annualIncome <= 500000) slabRate = 0.05;
    else if (annualIncome <= 1000000) slabRate = 0.20;
    
    const taxSaved = Math.round(capped80C * slabRate * 1.04);
    return taxSaved;
  };

  const taxSaved = calculateTaxSavings();

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleOpenApplyModal = (title = 'Tax Saving Consultation', subtitle = 'Fill in your details to receive personalized tax-saving strategy recommendations from our experts.') => {
    setModalOption({ title, subtitle });
    setFormData((prev) => ({ ...prev, amount: formatINR(taxSaved) }));
    setFormSubmitted(false);
    setSelectedModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppEnquiry({
      formName: modalOption.title || 'Tax Solutions Lead Form',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      service: 'Tax Solutions',
      extra: {
        annualIncome: formatINR(annualIncome),
        invested80C: formatINR(invested80C),
        taxSaved: formatINR(taxSaved),
      }
    });
    setFormSubmitted(true);
    setTimeout(() => {
      setSelectedModal(false);
      setFormSubmitted(false);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1B2E] font-sans selection:bg-purple-200 selection:text-[#7C1FA8]">


      {/* 2. HERO SECTION (SMART TAX PLANNING FOR A WEALTHIER TOMORROW) */}
      <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 -mt-[76px] lg:-mt-[88px] pt-[116px] sm:pt-[126px] lg:pt-[136px] pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Ambient Curved Light Purple Background Overlay on Right */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[550px] h-[550px] bg-purple-200/40 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Category Tag, Main Heading, Subtitle & Action Button */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left relative py-1">
            
            {/* Top Category Tag */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
              <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest font-sans">
                TAX SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-sans font-extrabold text-[32px] leading-[40px] sm:text-[42px] sm:leading-[50px] lg:text-[46px] lg:leading-[54px] tracking-[-0.03em] text-[#1E1B2E] mb-3 w-full max-w-[640px]">
              Smart tax planning <span className="text-[#7C1FA8]">for a wealthier tomorrow.</span>
            </h1>

            {/* Subtitle Paragraph (Matching Heading Width) */}
            <p className="font-medium text-[14.5px] sm:text-[15.5px] leading-[22px] sm:leading-[25px] text-[#544F66] mb-6 w-full max-w-[640px]">
              Reduce your tax liability legally and build wealth with intelligent tax saving investments tailored for your income goals.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-3.5 mb-5">
              <button
                onClick={() => handleOpenApplyModal('Explore Tax Saving Options', 'Start saving up to ₹46,800 under Section 80C with curated ELSS & National Pension System plans.')}
                className="h-[46px] sm:h-[50px] px-7 sm:px-8 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-bold text-sm sm:text-base shadow-md shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Explore Tax Saving Options</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Animated Counter Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-200/60 w-full max-w-[640px]">
              <HeroMetricCounter value="46800" prefix="₹" label="Max 80C Savings" />
              <HeroMetricCounter value="30" suffix="+" label="Tax-Saving Plans" />
              <HeroMetricCounter value="100" suffix="%" label="Paperless Process" />
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Tax Solutions Illustration */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end w-full h-full mt-4 lg:mt-0">
            <div className="relative z-10 w-full flex justify-center lg:justify-end items-center">
              <img
                src="/ChatGPT Image Aug 29, 2026, 09_43_11 PM.png"
                alt="Smart tax planning for a wealthier tomorrow - Prosperi5 3D Tax Illustration"
                className="w-full h-auto max-h-[340px] sm:max-h-[380px] lg:max-h-[400px] object-contain drop-shadow-xl select-none rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>



      {/* 3. SECTION 3: HOW IT WORKS (EXACT MATCH TO REFERENCE SCREENSHOT 2) */}
      <section className="w-full bg-[#FAF5FD] py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#EBE8EF]/60 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title & Decorative Squiggly Arrow */}
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
            <span className="text-[#7C1FA8] text-sm font-black uppercase tracking-widest block">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-[1.15]">
              3 simple steps <br className="hidden sm:block"/> to save tax
            </h2>

            {/* Decorative Squiggly Arrow (Matching Screenshot 2) */}
            <div className="pt-3 pl-4 hidden lg:block">
              <svg className="w-32 h-16 text-purple-300" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 C 25 45, 55 45, 80 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="4 3"/>
                <path d="M72 20 L80 20 L78 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Right Column: 3 Horizontal Steps with Glowing White Circles & Connecting Line */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              
              {/* Connecting Dashed Arrow Line across steps (Desktop Only) */}
              <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-purple-200 z-0" />

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-2.5">
                {/* Glowing White Circle Container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg border border-purple-100 p-3.5 flex items-center justify-center transition-transform hover:scale-105">
                  <img 
                    src="/tax_step1_3d.jpg" 
                    alt="Step 1 Choose Investment" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <span className="text-sm font-black text-[#7C1FA8] tracking-wider block mt-1">
                  01
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1E1B2E]">Choose Investment</h3>
                <p className="text-xs sm:text-sm text-[#666077] leading-relaxed font-medium max-w-[210px]">
                  Pick the best 80C investment that suits your goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-2.5">
                {/* Glowing White Circle Container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg border border-purple-100 p-3.5 flex items-center justify-center transition-transform hover:scale-105">
                  <img 
                    src="/tax_step2_3d.jpg" 
                    alt="Step 2 Invest & Grow" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <span className="text-sm font-black text-[#7C1FA8] tracking-wider block mt-1">
                  02
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1E1B2E]">Invest & Grow</h3>
                <p className="text-xs sm:text-sm text-[#666077] leading-relaxed font-medium max-w-[210px]">
                  Invest up to ₹ 1,50,000 and let your money grow.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-2.5">
                {/* Glowing White Circle Container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg border border-emerald-100 p-3.5 flex items-center justify-center transition-transform hover:scale-105">
                  <img 
                    src="/tax_step3_3d.jpg" 
                    alt="Step 3 Save Tax" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <span className="text-sm font-black text-emerald-600 tracking-wider block mt-1">
                  03
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1E1B2E]">Save Tax</h3>
                <p className="text-xs sm:text-sm text-[#666077] leading-relaxed font-medium max-w-[210px]">
                  Lower your taxable income and save up to ₹ 46,800.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION 4: CALCULATE YOUR SAVINGS (INTERACTIVE TAX CALCULATOR WITH MATCHING HEIGHT) */}
      <section className="w-full bg-[#FCE9F4] py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#EBE8EF]/60 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* Left Content Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            <div className="space-y-3">
              <span className="text-[#7C1FA8] text-xs font-extrabold uppercase tracking-widest bg-white/90 px-3.5 py-1 rounded-full border border-purple-200/80 inline-block shadow-2xs">
                CALCULATE YOUR SAVINGS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1B2E] tracking-tight leading-tight">
                See how much tax you can save
              </h2>
              <p className="text-sm sm:text-base text-[#666077] leading-relaxed font-medium max-w-sm sm:max-w-md">
                Use our calculator to estimate your tax savings and plan your investments better.
              </p>

              <div className="pt-1">
                <button 
                  onClick={() => handleOpenApplyModal(`Tax Calculator Apply - Saved ${formatINR(taxSaved)}`, `Estimated Savings: ${formatINR(taxSaved)} on Section 80C`)}
                  className="bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-extrabold px-5.5 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-md cursor-pointer active:scale-95 flex items-center gap-2"
                >
                  <span>Try Tax Calculator</span>
                  <span className="text-sm">➔</span>
                </button>
              </div>
            </div>

            {/* 3D Calculator Image - Full View Without Clipping */}
            <div className="w-full mt-3 flex items-center justify-center rounded-2xl overflow-hidden">
              <img 
                src="/calculator_3d.jpg" 
                alt="3D Tax Calculator" 
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-md mix-blend-multiply opacity-95 hover:opacity-100 transition-opacity select-none"
              />
            </div>
          </div>

          {/* Right Interactive Tax Calculator Card */}
          <div className="lg:col-span-7 bg-white text-[#1E1B2E] rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5 border border-purple-100/90 flex flex-col justify-between">
            
            {/* Slider 1: Annual Income */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-extrabold">
                <span className="text-[#666077]">Annual Income</span>
                <span className="text-base sm:text-lg font-black text-[#7C1FA8]">{formatINR(annualIncome)}</span>
              </div>
              <input
                type="range"
                min="300000"
                max="3000000"
                step="50000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7C1FA8]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                <span>₹3 Lakhs</span>
                <span>₹30 Lakhs</span>
              </div>
            </div>

            {/* Slider 2: Invested Amount (Section 80C) */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-extrabold">
                <span className="text-[#666077]">Invested Amount (80C)</span>
                <span className="text-base sm:text-lg font-black text-[#7C1FA8]">{formatINR(invested80C)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="150000"
                step="5000"
                value={invested80C}
                onChange={(e) => setInvested80C(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7C1FA8]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                <span>₹0</span>
                <span>₹1.5 Lakhs (Max)</span>
              </div>
            </div>

            {/* Savings Highlight Box */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">YOU CAN SAVE UP TO</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">{formatINR(taxSaved)} <span className="text-xs font-bold text-emerald-700">in taxes</span></div>
              </div>
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-xs">
                ✓
              </div>
            </div>

            {/* CTA Button Inside Calculator */}
            <button
              onClick={() => handleOpenApplyModal(`Tax Calculator - ${formatINR(taxSaved)} Saved`, `Save ${formatINR(taxSaved)} under Section 80C.`)}
              className="w-full py-3 bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-extrabold rounded-xl transition-all text-xs uppercase tracking-wider shadow-md cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Get Expert Tax Advice</span>
              <span>➔</span>
            </button>

          </div>

        </div>
      </section>


      {/* 7. SECTION 6: 5 TRUST METRICS STRIP WITH GENEROUS MARGIN & PADDING */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5">
          
          <AnimatedMetric value="2L+" label="Happy Investors" />
          <AnimatedMetric value="₹ 8500 Cr+" prefix="₹ " suffix="+" label="Assets Managed" />
          <AnimatedMetric value="25+" label="Lending Partners" />
          <AnimatedMetric value="100%" label="Transparent Process" />
          <AnimatedMetric value="24/7" label="Customer Support" />

        </div>
      </section>

      {/* 8. SECTION 7: BOTTOM CTA BANNER WITH GENEROUS MARGIN & PADDING */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
        <div 
          className="rounded-[22px] sm:rounded-[28px] py-6 sm:py-8 px-6 sm:px-8 lg:px-10 shadow-xl text-white relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/ChatGPT Image Aug 26, 2026, 09_00_05 PM.png')" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Smart tax planning today,<br className="hidden sm:block"/> financial freedom tomorrow.
              </h2>
              <p className="text-xs sm:text-sm text-purple-100 font-medium leading-normal">
                Explore tax saving investments and build wealth while reducing your tax liability.
              </p>
            </div>

            <button
              onClick={() => handleOpenApplyModal('Bottom CTA - Explore Tax Solutions', 'Get started with Prosperi5 tax saving plans today.')}
              className="bg-white text-[#7C1FA8] hover:bg-purple-50 font-extrabold px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm transition-all shadow-md cursor-pointer active:scale-95 whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Explore Tax Solutions</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* 9. LEAD CONSULTATION MODAL */}
      {selectedModal && (
        <div className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 overflow-hidden border border-purple-100"
          >
            <div className="relative z-10">
              <button
                onClick={() => setSelectedModal(false)}
                className="absolute top-0 right-0 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center cursor-pointer font-bold transition-colors z-20"
              >
                ✕
              </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E1B2E]">Application Submitted!</h3>
                <p className="text-sm text-[#666077] font-medium leading-relaxed max-w-xs mx-auto">
                  Thank you! Our tax optimization specialist will call you back within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full inline-block">
                    TAX CONSULTATION
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1E1B2E] mt-2">{modalOption.title}</h3>
                  <p className="text-sm text-[#666077] font-medium mt-1 leading-snug">{modalOption.subtitle}</p>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div>
                    <label className="text-sm font-extrabold text-[#1E1B2E] block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none focus:border-[#7C1FA8] focus:ring-1 focus:ring-[#7C1FA8] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-extrabold text-[#1E1B2E] block mb-1.5">Phone Number</label>
                    <div className="flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden focus-within:border-[#7C1FA8] focus-within:ring-1 focus-within:ring-[#7C1FA8] transition-all">
                      <select className="bg-white pl-3 pr-1 py-3 text-xs sm:text-sm font-bold text-[#1E1B2E] outline-none border-r border-gray-300 cursor-pointer">
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
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-3 text-sm font-medium text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-extrabold text-[#1E1B2E] block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none focus:border-[#7C1FA8] focus:ring-1 focus:ring-[#7C1FA8] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-extrabold text-[#1E1B2E] block mb-1.5">Estimated Tax Savings</label>
                    <input
                      type="text"
                      value={formData.amount || formatINR(taxSaved)}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl text-sm font-black text-[#7C1FA8] bg-purple-50 focus:outline-none focus:border-[#7C1FA8]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#7C1FA8] hover:bg-[#6b1a91] text-white font-extrabold rounded-xl transition-all text-sm uppercase tracking-wider shadow-md cursor-pointer mt-3 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <span>➔</span>
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
