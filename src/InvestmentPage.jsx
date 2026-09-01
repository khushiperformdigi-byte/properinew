import React, { useState, useEffect, useRef } from 'react';
import { FiShield, FiTarget, FiTrendingUp, FiPieChart, FiCalendar, FiUsers, FiCheckCircle, FiUser, FiFileText, FiCreditCard } from 'react-icons/fi';
import Footer from './Footer';

export default function InvestmentPage({ onNavigateHome, onNavigatePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('individual'); // 'individual' | 'partner'
  const [selectedModal, setSelectedModal] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [openPartnerFaq, setOpenPartnerFaq] = useState(0);

  // Partner FAQs from prompt
  const partnerFaqs = [
    {
      q: 'Q: What investment products can I distribute through PROSPERi5?',
      a: 'A: The full investment suite includes mutual funds and SIPs, fixed income instruments, AIF (Category I, II & III), PMS, listed equities, unlisted / pre-IPO shares, Market Linked Debentures (MLDs), smallcases, and alternatives such as invoice discounting. All under one empanelment.'
    },
    {
      q: 'Q: Do I need to be NISM-certified to distribute mutual funds?',
      a: "A: Yes, NISM Series V-A certification is required to distribute mutual funds. If you don't hold it yet, your dedicated RM will guide you through the process and help you get empanelled as quickly as possible."
    },
    {
      q: 'Q: Can I offer AIF and PMS to my clients even if I don\'t have the expertise?',
      a: 'A: Absolutely. The referral model exists precisely for this. Identify the client need, flag it to your RM, and PROSPERi5 specialists handle the entire advisory, documentation, and execution process under your name. You earn the revenue split without needing to be the product expert.'
    },
    {
      q: 'Q: How and when is investment commission paid?',
      a: 'A: Mutual fund trail commissions are credited on a fixed monthly schedule and are visible in your real-time partner dashboard before payout. For upfront and one-time product fees, payout timelines are shared transparently at empanelment. No reconciliation surprises — every rupee owed is visible before it is paid.'
    },
    {
      q: 'Q: What exactly are MLDs and smallcases?',
      a: 'A: Market Linked Debentures (MLDs) are structured debt instruments whose returns are benchmarked to a market index as they offer clients capital-protection potential alongside market-linked upside. Smallcases are curated baskets of stocks or ETFs built around a theme, sector, or strategy, giving clients a more sophisticated alternative to plain mutual funds.'
    },
    {
      q: 'Q: Can I migrate my existing investment clients to PROSPERi5?',
      a: 'A: Yes. Your dedicated RM manages the transition with minimal disruption to your clients. Your relationships remain entirely yours and PROSPERi5 never contacts your clients directly without your explicit authorisation for a specific transaction.'
    }
  ];

  // Partner Investment Product Suite from prompt
  const partnerProductSuite = [
    {
      title: '1. Mutual Funds',
      desc: "The core of every portfolio. Access all major AMCs be it lump sum, SIP, STP, SWP with the industry's highest payout rates. Recurring trail commissions credited monthly, every month, on time.",
      bgGradient: 'bg-[#FAF4FD]',
      border: 'border-[#EBE3F5]',
      badgeColor: 'text-[#8B1FA8]',
      badgeBg: 'bg-purple-100/60'
    },
    {
      title: '2. Fixed Income',
      desc: "Bonds, debt instruments, NCDs, and government securities for clients who want capital preservation and predictable yield. Serve the conservative half of every HNI's portfolio.",
      bgGradient: 'bg-[#F0FDF4]',
      border: 'border-[#DCFCE7]',
      badgeColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-100/60'
    },
    {
      title: '3. AIF & PMS',
      desc: 'Alternative Investment Funds (Category I, II & III) and Portfolio Management Services for your HNI and ultra-HNI clients. You don\'t need in-house expertise, just refer the requirement and our specialists execute.',
      bgGradient: 'bg-[#F5F3FF]',
      border: 'border-[#DDD6FE]',
      badgeColor: 'text-purple-700',
      badgeBg: 'bg-purple-100/80'
    },
    {
      title: '4. Listed Stocks & Unlisted Shares',
      desc: 'Give clients access to listed equities and high-potential pre-IPO / unlisted opportunities before they go public. A growing demand segment few advisors currently address.',
      bgGradient: 'bg-[#EFF6FF]',
      border: 'border-[#DBEAFE]',
      badgeColor: 'text-blue-700',
      badgeBg: 'bg-blue-100/60'
    },
    {
      title: '5. Market Linked Debentures (MLDs)',
      desc: 'Structured products whose returns are indexed to a market benchmark, combining capital protection potential with equity-linked upside. A differentiated offering for clients bored of plain vanilla products.',
      bgGradient: 'bg-[#FDF2F8]',
      border: 'border-[#FCE7F3]',
      badgeColor: 'text-pink-700',
      badgeBg: 'bg-pink-100/80'
    },
    {
      title: '6. Invoice Discounting',
      desc: 'Theme-based stock baskets for the modern investor, plus alternative yield through invoice discounting for clients seeking non-market-correlated returns. Products that open conversations your competitors can\'t.',
      bgGradient: 'bg-[#FFF7ED]',
      border: 'border-[#FFEDD5]',
      badgeColor: 'text-orange-700',
      badgeBg: 'bg-orange-100/80'
    }
  ];

  // Calculator state
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(15);
  const [stepsVisible, setStepsVisible] = useState(false);
  const stepsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStepsVisible(true); },
      { threshold: 0.15 }
    );
    if (stepsRef.current) observer.observe(stepsRef.current);
    return () => observer.disconnect();
  }, []);

  // Compound Interest Calculation for SIP
  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment) || 0;
    const r = (parseFloat(expectedReturn) || 0) / 12 / 100;
    const n = (parseFloat(timePeriod) || 0) * 12;

    if (P <= 0 || n <= 0 || r <= 0) {
      return { futureValue: 0, invested: 0, gainPercent: 0 };
    }

    const futureValue = Math.round(P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const invested = P * n;
    const gain = futureValue - invested;
    const gainPercent = Math.round((gain / invested) * 100);

    return { futureValue, invested, gainPercent };
  };

  const { futureValue, invested, gainPercent } = calculateSIP();

  // Dynamic calculation for comparison chart
  const getComparisonData = () => {
    const P = parseFloat(monthlyInvestment) || 0;
    const r_inv = (parseFloat(expectedReturn) || 0) / 12 / 100;
    const r_trad = 6 / 12 / 100;

    const t3 = Math.max(1, parseInt(timePeriod) || 15);
    const t1 = Math.max(1, Math.round(t3 / 3));
    const t2 = Math.max(t1 + 1, Math.round((2 * t3) / 3));

    const calculateFV = (years, rate) => {
      if (P <= 0 || years <= 0 || rate <= 0) return 0;
      const n = years * 12;
      return Math.round(P * ((Math.pow(1 + rate, n) - 1) / rate) * (1 + rate));
    };

    const periods = [
      { years: t1, label: `${t1} ${t1 === 1 ? 'Year' : 'Years'}` },
      { years: t2, label: `${t2} Years` },
      { years: t3, label: `${t3} Years` }
    ];

    const items = periods.map((p) => {
      const invFV = calculateFV(p.years, r_inv);
      const tradFV = calculateFV(p.years, r_trad);
      return { ...p, invFV, tradFV };
    });

    const maxVal = Math.max(...items.map((d) => d.invFV), 100000);
    return { items, maxVal };
  };

  const { items: comparisonItems, maxVal: comparisonMaxVal } = getComparisonData();

  const formatLakhs = (val) => {
    if (!val || val <= 0) return '₹0';
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    if (val >= 1000) return `₹${(val / 1000).toFixed(0)}k`;
    return `₹${val}`;
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="w-full bg-white font-sans text-body-text antialiased selection:bg-purple-100 selection:text-primary-purple overflow-x-hidden">

      {viewMode === 'individual' ? (
        <>
          {/* INDIVIDUAL INVESTOR VIEW */}
          <section className="w-full bg-gradient-to-br from-[#FAF5FD] via-[#FDFBFD] to-[#F6EEFC] -mt-[76px] lg:-mt-[88px] pt-[104px] sm:pt-[116px] lg:pt-[128px] pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-purple-100/50 flex items-center">
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-extrabold text-[#1E1B2E] leading-[1.12] tracking-tight">
                  Invest With Confidence.<br />
                  <span className="bg-gradient-to-r from-[#7C1FAB] via-[#C81E8C] to-[#F5A623] bg-clip-text text-transparent">
                    Grow With Purpose.
                  </span>
                </h1>

                <p className="text-base sm:text-lg font-body text-[#544F66] max-w-xl mx-auto lg:mx-0 font-semibold leading-relaxed">
                  Whether you're investing for your first milestone or building long-term wealth, PROSPERi5 offers investment solutions designed around your financial goals.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={() => {
                      setSelectedModal({ title: 'Start Investing - Empanelment Form' });
                    }}
                    className="bg-[#7C1FAB] hover:bg-[#63148B] text-white font-bold px-8 py-4 rounded-[18px] text-sm sm:text-base shadow-xl shadow-[#7C1FAB]/25 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
                  >
                    <span>Start Investing</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end select-none">
                <img
                  src="/dc1af9b7-84fe-44db-9ec3-7674a25fd1fd.png"
                  alt="Smart Investments 3D Growth Illustration"
                  draggable={false}
                  className="w-full max-w-[620px] lg:max-w-[680px] h-[300px] sm:h-[360px] lg:h-[400px] object-contain object-center transition-transform duration-300 hover:scale-[1.02] select-none pointer-events-none user-select-none"
                />
              </div>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

            {/* SCREEN 2: PHILOSOPHY */}
            <section className="bg-gradient-to-r from-[#F4ECFB] via-[#FAF5FE] to-[#F3EAFA] border border-[#E6D7F5] rounded-[22px] p-4 sm:p-5 shadow-2xs relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#7C1FAB]">
                      OUR INVESTMENT PHILOSOPHY
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1B2E] leading-snug">
                    Investments Should Match Your Goals, <span className="text-[#7C1FAB]">Not Just Market Trends.</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed max-w-2xl">
                    Every investor is different. Your age, income, risk appetite and financial aspirations all play a role in choosing the right investment strategy.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-xs border border-purple-200/80 rounded-xl p-3.5 sm:p-4 max-w-md w-full md:w-auto shrink-0 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C1FAB] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <FiTarget className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <p className="text-xs font-bold text-[#1E1B2E] leading-snug">
                    At PROSPERi5, we help you access a comprehensive range of investment opportunities <span className="text-[#7C1FAB]">through one trusted relationship.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* SCREEN 3: INVESTMENT PRODUCTS GRID */}
            <section className="space-y-6">
              <div className="text-center space-y-2 max-w-3xl mx-auto">
                <span className="text-[#7C1FAB] text-xs font-heading font-extrabold tracking-widest uppercase block">
                  EXPLORE SOLUTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1E1B2E] tracking-tight">
                  Investment Solutions for Every Financial Goal
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-[#FAF4FD] border border-[#EBE3F5] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-purple-100/60 border border-purple-200/60 text-[#8B1FA8] flex items-center justify-center shadow-2xs">
                      <FiPieChart className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Mutual Funds</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Diversified solutions for long-term wealth creation through SIPs and lump sum investments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100/60 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shadow-2xs">
                      <FiShield className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Government Bonds</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Stable investment options backed by Central and State Governments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-amber-100/60 border border-amber-200/60 text-amber-700 flex items-center justify-center shadow-2xs">
                      <FiCheckCircle className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Corporate Fixed Deposits & NCDs</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Fixed-income opportunities for investors seeking predictable returns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100/60 border border-blue-200/60 text-blue-700 flex items-center justify-center shadow-2xs">
                      <FiTrendingUp className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Equities</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Participate in the growth of leading listed companies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-purple-100/80 border border-purple-200/80 text-purple-700 flex items-center justify-center shadow-2xs">
                      <FiUsers className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">AIF & PMS</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Sophisticated investment solutions for HNI and Ultra-HNI investors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FDF2F8] border border-[#FCE7F3] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-pink-100/80 border border-pink-200/80 text-pink-700 flex items-center justify-center shadow-2xs">
                      <FiTarget className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Structured Investment Products</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Market-linked investment opportunities designed for specific risk-return objectives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-teal-100/80 border border-teal-200/80 text-teal-700 flex items-center justify-center shadow-2xs">
                      <FiShield className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Unlisted Investment Opportunities</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Access select pre-IPO and private market investment opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFF7ED] border border-[#FFEDD5] rounded-[22px] p-5 flex flex-col justify-between min-h-[160px] shadow-2xs">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-orange-100/80 border border-orange-200/80 text-orange-700 flex items-center justify-center shadow-2xs">
                      <FiCreditCard className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B2E]">Invoice Discounting</h3>
                      <p className="text-xs font-body text-[#544F66] font-semibold mt-1 leading-snug">
                        Alternative investment opportunities for investors seeking diversified sources of returns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SCREEN 4: WHY INVEST THROUGH PROSPERIS */}
            <section className="w-full bg-cover bg-center bg-no-repeat py-7 lg:py-9 border-y border-purple-100/60 my-4 relative overflow-hidden rounded-[22px]" style={{ backgroundImage: "url('/partner-value-bg.png')" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <img
                      src="/ChatGPT Image Aug 24, 2026, 11_00_47 AM.png"
                      alt="Why Invest Through PROSPERi5 3D Illustration"
                      className="w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] lg:w-[350px] lg:h-[350px] object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-xl"
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between py-1">
                    <div className="mb-3">
                      <span className="bg-[#F5EEFB] text-[#7C1FAB] text-[10px] sm:text-[11px] font-body font-extrabold px-4 py-1 rounded-full uppercase tracking-wider border border-purple-200/60 shadow-2xs inline-block">
                        THE PROSPERIS ADVANTAGE
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#1E1B2E] tracking-tight mt-1.5">
                        Why Invest Through PROSPERi5
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1">
                      <div className="bg-[#7C1FAB] p-4 sm:p-5 rounded-[20px] border border-[#7C1FAB] shadow-md flex items-start gap-3.5 h-full">
                        <div className="w-8 h-8 rounded-xl bg-[#F5A623] text-[#1E1B2E] flex items-center justify-center shrink-0 font-extrabold mt-0.5 shadow-2xs">
                          <FiPieChart className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-white tracking-wide">Comprehensive Spectrum</h4>
                          <p className="text-xs font-body text-white/95 font-medium leading-normal mt-1.5">
                            From traditional investments to sophisticated opportunities, access all through one trusted partner.
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#7C1FAB] p-4 sm:p-5 rounded-[20px] border border-[#7C1FAB] shadow-md flex items-start gap-3.5 h-full">
                        <div className="w-8 h-8 rounded-xl bg-[#F5A623] text-[#1E1B2E] flex items-center justify-center shrink-0 font-extrabold mt-0.5 shadow-2xs">
                          <FiTarget className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-white tracking-wide">Matched To Your Needs</h4>
                          <p className="text-xs font-body text-white/95 font-medium leading-normal mt-1.5">
                            Whether first-time investor or experienced HNI, access solutions aligned with your risk profile.
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#7C1FAB] p-4 sm:p-5 rounded-[20px] border border-[#7C1FAB] shadow-md flex items-start gap-3.5 h-full">
                        <div className="w-8 h-8 rounded-xl bg-[#F5A623] text-[#1E1B2E] flex items-center justify-center shrink-0 font-extrabold mt-0.5 shadow-2xs">
                          <FiTrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-white tracking-wide">Diversification Made Simple</h4>
                          <p className="text-xs font-body text-white/95 font-medium leading-normal mt-1.5">
                            Build a balanced portfolio across equity, fixed income, alternative investments and structured products.
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#7C1FAB] p-4 sm:p-5 rounded-[20px] border border-[#7C1FAB] shadow-md flex items-start gap-3.5 h-full">
                        <div className="w-8 h-8 rounded-xl bg-[#F5A623] text-[#1E1B2E] flex items-center justify-center shrink-0 font-extrabold mt-0.5 shadow-2xs">
                          <FiShield className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-white tracking-wide">Exclusive Opportunities</h4>
                          <p className="text-xs font-body text-white/95 font-medium leading-normal mt-1.5">
                            Explore investment opportunities that are often not available through conventional channels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* B2B PARTNER CROSSOVER BANNER */}
            <section className="bg-gradient-to-r from-[#F4EDFC] via-[#FAF5FE] to-[#F4EDFC] border border-[#E8DAF5] rounded-[24px] p-6 sm:p-8 lg:p-9 min-h-[120px] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm my-4">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#7C1FA8] text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
                  💼
                </div>
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg text-[#1E1B2E]">Are you an MFD, IFA, or Financial Distributor?</h4>
                  <p className="text-xs sm:text-sm text-[#544F66] font-semibold mt-1 leading-snug">
                    Distribute mutual funds, AIF, PMS, bonds, MLDs & invoice discounting to your clients and earn top payouts.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  else if (onNavigatePage) onNavigatePage('home');
                  setTimeout(() => {
                    const el = document.getElementById('partner-waitlist') || document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#partner-waitlist';
                  }, 100);
                }}
                className="bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0 hover:scale-105 active:scale-95"
              >
                Become an Investment Partner →
              </button>
            </section>

          </main>
        </>
      ) : (
        <>
          {/* DISTRIBUTOR & PARTNER INVESTMENT PROGRAM VIEW (PROMPT CONTENT) */}

          {/* 1. PARTNER HERO SECTION */}
          <section className="w-full bg-[#FAF8FC] bg-gradient-to-r from-[#FAF8FC] via-[#F5EEFC] to-[#FAF8FC] relative overflow-hidden border-b border-[#EBE8EF]/60 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7C1FA8] inline-block animate-pulse"></span>
                  <span className="text-[#7C1FA8] text-xs font-black uppercase tracking-widest">
                    INVESTMENT DISTRIBUTION PARTNER PROGRAM
                  </span>
                </div>

                {/* H1 */}
                <h1 className="font-sans font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[40px] sm:leading-[50px] lg:leading-[56px] text-[#1E1B2E] tracking-[-0.02em]">
                  Distribute A Wide Range of <span className="text-[#7C1FA8]">Financial Products Under One Roof</span>
                </h1>

                <p className="text-sm sm:text-base font-semibold text-[#544F66] leading-relaxed">
                  PROSPERi5 offers a full range from traditional investments such as mutual funds and SIPs, to AIF and PMS, and new-age products like MLD (Market Linked Debentures), smallcase, and invoice discounting.
                </p>

                {/* Partner Hero CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => setPartnerModalOpen(true)}
                    className="h-[50px] px-8 rounded-xl bg-[#7C1FA8] hover:bg-[#68198f] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Join us in 2 Minutes → Zero Fee</span>
                  </button>

                  <button
                    onClick={() => setPartnerModalOpen(true)}
                    className="h-[50px] px-7 rounded-xl border-2 border-[#7C1FA8] text-[#7C1FA8] hover:bg-purple-50 font-extrabold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Watch 2-Min Platform Overview</span>
                  </button>
                </div>
              </div>

              {/* Right Hero Graphic Card */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="bg-gradient-to-br from-[#7C1FA8] to-[#5E1683] text-white p-7 sm:p-8 rounded-[28px] shadow-2xl space-y-5 border border-purple-300/30 relative overflow-hidden w-full max-w-md">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl">
                    📈
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200 block">COMPLETE INVESTMENT SHELF</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                      Maximize Your AUM & Trail Payouts
                    </h3>
                    <p className="text-xs text-purple-100 font-medium leading-relaxed">
                      Every rupee your client invests stays in your portfolio. High payout rates credited monthly on time.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-extrabold">
                    <span>• 50+ AMC Access</span>
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
                  INVESTMENT PRODUCT SUITE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E] leading-tight">
                  The Investment Products Your Clients Are Buying from Someone Else
                </h2>
                <p className="text-xs sm:text-sm text-[#544F66] font-medium leading-relaxed">
                  Most distributors offer one or two product categories. PROSPERi5 gives you the complete investment shelf, so every rupee your client invests stays in your portfolio.
                </p>
              </div>

              {/* 6 Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {partnerProductSuite.map((prod, idx) => (
                  <div
                    key={idx}
                    className={`${prod.bgGradient} border ${prod.border} rounded-[22px] p-5 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all hover:scale-[1.01]`}
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
                  Questions Partners Ask About Investment Distribution
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
                  START PROFITING TODAY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                  Your Clients Buy From Us, You Earn A Commission. Start Profiting Today.
                </h2>
                <p className="text-xs sm:text-sm text-purple-100 font-medium leading-relaxed">
                  Fill in your details. Your dedicated RM contacts you within 24 hours. Creating your team makes between 5 to 7 working days. First payout rolls within 30 days of your first transaction.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button
                  onClick={() => setPartnerModalOpen(true)}
                  className="bg-[#F5A623] hover:bg-[#D49300] text-[#1E1B2E] font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm min-w-[200px] transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Connect with us in 2 Minutes</span>
                </button>
                <button
                  onClick={() => setPartnerModalOpen(true)}
                  className="bg-white hover:bg-purple-50 text-[#1E1B2E] font-extrabold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md cursor-pointer whitespace-nowrap active:scale-95"
                >
                  Download Partner Brochure
                </button>
              </div>
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
                  Become a PROSPERi5 Investment Partner
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
                <h4 className="text-lg font-extrabold text-[#1E1B2E]">Application Submitted!</h4>
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Your dedicated RM will contact you within 24 hours. First payout rolls within 30 days of your first transaction.
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
                  setPartnerSubmitted(true);
                }}
                className="space-y-3.5"
              >
                <p className="text-xs text-[#544F66] font-medium leading-relaxed">
                  Get empanelled to distribute Mutual Funds, Fixed Income, AIF, PMS, MLDs, Unlisted Shares & Invoice Discounting.
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
                    <option>Insurance Agent</option>
                    <option>Wealth Manager / Wealth Tech</option>
                    <option>Chartered Accountant / Tax Advisor</option>
                    <option>Other Financial Distributor</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C1FA8] hover:bg-[#65148D] text-white font-extrabold py-3.5 rounded-full text-xs shadow-md transition-all cursor-pointer mt-2"
                >
                  Connect in 2 Minutes → Zero Fee
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* LEAD CONSULTATION MODAL FOR CUSTOMERS */}
      {selectedModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in fade-in zoom-in duration-200 space-y-4">

            <div className="flex items-center justify-between border-b border-purple-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#7C1FAB] flex items-center justify-center font-bold text-sm">
                  📈
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#1E1B2E]">
                  {typeof selectedModal === 'object' && selectedModal.title ? selectedModal.title : 'Talk To An Investment Expert'}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModal(false)}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#544F66] font-medium leading-relaxed">
              Fill in your details below and our certified wealth advisor will connect with you to construct your personalized investment portfolio.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Our PROSPERi5 Wealth Expert will contact you shortly.');
                setSelectedModal(false);
              }}
              className="space-y-3 pt-1"
            >
              <div>
                <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FAB]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FAB]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1E1B2E] block mb-1">Preferred Investment Solution</label>
                <select
                  className="w-full bg-gray-50 border border-purple-200 rounded-xl p-2.5 text-xs font-medium text-[#1E1B2E] focus:outline-none focus:border-[#7C1FAB]"
                >
                  <option>Mutual Funds</option>
                  <option>Government Bonds</option>
                  <option>Corporate FDs & NCDs</option>
                  <option>Equities</option>
                  <option>AIF & PMS</option>
                  <option>Structured Investment Products</option>
                  <option>Unlisted Investment Opportunities</option>
                  <option>Invoice Discounting</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7C1FAB] hover:bg-[#63148B] text-white font-extrabold py-3 rounded-full text-xs shadow-md transition-all cursor-pointer mt-2"
              >
                Submit & Get Expert Callback →
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
