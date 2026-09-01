import React, { useState, useRef } from 'react';

export default function Testimonials() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const testimonialCarouselRef = useRef(null);

  const handleTestimonialScroll = (direction) => {
    const newIndex =
      direction === 'next'
        ? Math.min(activeTestimonialIndex + 1, 3)
        : Math.max(activeTestimonialIndex - 1, 0);

    setActiveTestimonialIndex(newIndex);

    if (testimonialCarouselRef.current) {
      testimonialCarouselRef.current.scrollTo({
        left: newIndex * 296,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="w-full bg-[#FAF8FC] py-10 sm:py-14 border-t border-purple-100/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center flex flex-col items-center mx-auto lg:max-w-5xl">
          {/* Top Badge: STRENGTHENED BY RELATIONSHIPS */}
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#C81E8C] font-semibold text-[14px] leading-none tracking-[-0.5px] uppercase mb-2 inline-block text-center"
          >
            STRENGTHENED BY RELATIONSHIPS
          </span>

          {/* Main Heading: Hear It from Partners Already Earning More */}
          <h2 className="font-sans font-semibold text-[30px] leading-[38px] sm:text-[34px] sm:leading-[42px] lg:text-[36px] lg:leading-[44px] text-[#1E1B2E] tracking-[-0.5px] mb-2 text-center max-w-3xl mx-auto">
            Hear It from Partners Already Earning More
          </h2>

          {/* Subheading Paragraph (Width Contained Under Heading Width) */}
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="font-medium text-[14px] leading-[20px] sm:leading-relaxed lg:text-[15.5px] lg:leading-[24px] text-[#544F66] tracking-[-0.5px] text-center max-w-xl mx-auto"
          >
            Understand what you gain when you choose PROSPERi5 over other distribution models.
          </p>
        </div>

        {/* Mobile Testimonials Horizontal Scroll Carousel (Shown on < lg) */}
        <div className="block lg:hidden w-full max-w-[576px] mx-auto mb-6">
          <div
            ref={testimonialCarouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-2 scrollbar-none"
            onScroll={(e) => {
              const scrollLeft = e.target.scrollLeft;
              const cardWidth = 296;
              const index = Math.round(scrollLeft / cardWidth);
              if (index !== activeTestimonialIndex && index >= 0 && index <= 3) {
                setActiveTestimonialIndex(index);
              }
            }}
          >
            {/* Card 1: Meena T */}
            <div className="w-[280px] min-w-[280px] min-h-[250px] shrink-0 snap-center rounded-[16px] bg-white text-heading-ink border border-purple-100/80 p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#2A3447] text-white flex items-center justify-center font-extrabold text-base relative shrink-0 shadow-xs select-none">
                    <span>M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] text-[#1E1135] leading-tight">Meena T</h4>
                    <div className="flex items-center gap-0.5 text-[#FF9800] text-xs mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="font-body-spec text-[#4A4458] text-xs leading-relaxed italic">
                  "I was earlier only distributing Mutual Funds, but after partnering with PROSPERi5, I've been able to offer many more financial products to my clients. Not just that — even the Mutual Fund payout I receive now is better than before. This partnership has given a double boost to my income and helped me grow my business much faster."
                </p>
              </div>
            </div>

            {/* Card 2: Pratik K */}
            <div className="w-[280px] min-w-[280px] min-h-[250px] shrink-0 snap-center rounded-[16px] bg-white text-heading-ink border border-purple-100/80 p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#2A3447] text-white flex items-center justify-center font-extrabold text-base relative shrink-0 shadow-xs select-none">
                    <span>P</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] text-[#1E1135] leading-tight">Pratik K</h4>
                    <div className="flex items-center gap-0.5 text-[#FF9800] text-xs mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="font-body-spec text-[#4A4458] text-xs leading-relaxed italic">
                  "My background was mainly in insurance, with limited experience in investments. With hands-on support from PROSPERi5, I started offering investment products confidently. This helped me earn from new products and also improved my understanding of investments"
                </p>
              </div>
            </div>

            {/* Card 3: Umesh G */}
            <div className="w-[280px] min-w-[280px] min-h-[250px] shrink-0 snap-center rounded-[16px] bg-white text-heading-ink border border-purple-100/80 p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#2A3447] text-white flex items-center justify-center font-extrabold text-base relative shrink-0 shadow-xs select-none">
                    <span>U</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] text-[#1E1135] leading-tight">Umesh G</h4>
                    <div className="flex items-center gap-0.5 text-[#FF9800] text-xs mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="font-body-spec text-[#4A4458] text-xs leading-relaxed italic">
                  "PROSPERi5 handles most of the operational work, which has significantly reduced my day-to-day effort. I now spend more time on client servicing and acquiring new clients, helping me grow my business."
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Carousel Navigation Controls */}
          <div className="w-[342px] max-w-full h-[40px] flex items-center justify-center gap-6 mx-auto mt-4 select-none">
            {/* Left Arrow Button */}
            <button
              onClick={() => handleTestimonialScroll('prev')}
              disabled={activeTestimonialIndex === 0}
              className={`w-[40px] h-[40px] rounded-full border border-purple-200/80 bg-purple-100/60 text-[#7C1FA8] flex items-center justify-center transition-all ${
                activeTestimonialIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:bg-purple-200/80 active:scale-95 cursor-pointer'
              }`}
              aria-label="Previous Testimonial"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots Indicators */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTestimonialIndex(idx);
                    if (testimonialCarouselRef.current) {
                      testimonialCarouselRef.current.scrollTo({
                        left: idx * 296,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`transition-all duration-200 cursor-pointer ${
                    activeTestimonialIndex === idx
                      ? 'w-2.5 h-2.5 rounded-full bg-[#F5A623] shadow-xs'
                      : 'w-2 h-2 rounded-full border border-purple-300 bg-transparent'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => handleTestimonialScroll('next')}
              disabled={activeTestimonialIndex === 2}
              className={`w-[40px] h-[40px] rounded-full bg-[#7C1FA8] text-white flex items-center justify-center shadow-md transition-all ${
                activeTestimonialIndex === 2 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:bg-[#6b1991] active:scale-95 cursor-pointer'
              }`}
              aria-label="Next Testimonial"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid (Desktop View Only: hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 items-stretch">

          {/* Column 1: Meena T */}
          <div className="h-full">
            <div className="bg-white text-heading-ink rounded-[20px] p-6 flex flex-col justify-between h-full border border-purple-100/80 shadow-sm hover:shadow-md transition-all duration-300 font-sans">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2A3447] text-white flex items-center justify-center font-extrabold text-lg relative shrink-0 shadow-xs select-none">
                    <span>M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#1E1135] leading-tight">Meena T</h4>
                    <div className="flex items-center gap-0.5 text-[#FF9800] text-sm mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="font-body-spec text-[#4A4458] text-xs sm:text-[13.5px] font-medium leading-relaxed italic">
                  "I was earlier only distributing Mutual Funds, but after partnering with PROSPERi5, I've been able to offer many more financial products to my clients. Not just that — even the Mutual Fund payout I receive now is better than before. This partnership has given a double boost to my income and helped me grow my business much faster."
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Pratik K */}
          <div className="h-full">
            <div className="bg-[#FAF8FC] text-heading-ink rounded-[20px] p-6 flex flex-col justify-between h-full border border-purple-100/80 shadow-sm hover:shadow-md transition-all duration-300 font-sans">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2A3447] text-white flex items-center justify-center font-extrabold text-lg relative shrink-0 shadow-xs select-none">
                    <span>P</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#1E1135] leading-tight">Pratik K</h4>
                    <div className="flex items-center gap-0.5 text-[#FF9800] text-sm mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="font-body-spec text-[#4A4458] text-xs sm:text-[13.5px] font-medium leading-relaxed italic">
                  "My background was mainly in insurance, with limited experience in investments. With hands-on support from PROSPERi5, I started offering investment products confidently. This helped me earn from new products and also improved my understanding of investments"
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Umesh G */}
          <div className="h-full">
            <div className="bg-white text-heading-ink rounded-[20px] p-6 flex flex-col justify-between h-full border border-purple-100/80 shadow-sm hover:shadow-md transition-all duration-300 font-sans">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2A3447] text-white flex items-center justify-center font-extrabold text-lg relative shrink-0 shadow-xs select-none">
                    <span>U</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#1E1135] leading-tight">Umesh G</h4>
                    <div className="flex items-center gap-0.5 text-[#FF9800] text-sm mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="font-body-spec text-[#4A4458] text-xs sm:text-[13.5px] font-medium leading-relaxed italic">
                  "PROSPERi5 handles most of the operational work, which has significantly reduced my day-to-day effort. I now spend more time on client servicing and acquiring new clients, helping me grow my business."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
