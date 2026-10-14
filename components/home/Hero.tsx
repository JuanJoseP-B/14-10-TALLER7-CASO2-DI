import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Hero - Decadent Chocolate Bliss"
      className="relative w-full min-h-[580px] lg:h-[608px] overflow-hidden select-none pb-28 lg:pb-0"
      style={{
        background: 'linear-gradient(100deg, var(--hero-from) 0%, #D45A62 35%, var(--hero-to) 100%)',
      }}
    >
      {/* Translucent decorative bubbles per spec section 5 */}
      <div
        className="absolute w-[120px] h-[120px] rounded-full bg-white/10 pointer-events-none"
        style={{ left: '48%', top: '-20px' }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[60px] h-[60px] rounded-full bg-white/10 pointer-events-none"
        style={{ right: '40px', top: '180px' }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[80px] h-[80px] rounded-full bg-white/10 pointer-events-none"
        style={{ left: '12%', top: '480px' }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full bg-white/10 pointer-events-none"
        style={{ right: '60px', top: '420px' }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[90px] h-[90px] rounded-full bg-white/10 pointer-events-none"
        style={{ left: '50px', top: '60px' }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[140px] h-[140px] rounded-full bg-white/10 pointer-events-none"
        style={{ right: '28%', top: '60px' }}
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 w-full h-full max-w-[1356px] mx-auto px-4 sm:px-8 lg:px-[72px] pt-8 lg:pt-[36px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
        {/* Left: Main Circular Image */}
        <div className="relative shrink-0 flex justify-center">
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] xl:w-[400px] xl:h-[400px] rounded-full border-[6px] sm:border-[8px] xl:border-[10px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden bg-primary-dark">
            <Image
              src="/images/hero-main.jpg"
              alt="Decadent Chocolate Cake with rich ganache drip, blackberries and fresh strawberries"
              fill
              priority
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 320px, 260px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Center: Text Block */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-[44px] lg:pl-10 xl:pl-14 max-w-[500px] shrink-0">
          <div className="relative inline-block">
            <h1 className="text-white uppercase font-extrabold text-[34px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[60px] leading-[1.05] tracking-[1px] drop-shadow-xs">
              <span>DECADENT</span>
              <br />
              <span>CHOCOLATE</span>
              <br />
              <span className="relative inline-block">
                BLISS!
                {/* Thin white cursive swash/flourish to the right of BLISS! */}
                <svg
                  className="hidden sm:inline-block absolute left-full ml-2 -bottom-1 w-[120px] xl:w-[150px] h-[34px] xl:h-[40px] opacity-80"
                  viewBox="0 0 150 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M 5 24 C 35 38, 80 32, 115 15 C 135 6, 142 12, 126 22 C 105 34, 75 32, 45 28"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 120 18 C 135 14, 145 20, 138 26"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-white text-lg sm:text-2xl xl:text-[34px] font-normal leading-[1.2] mt-3 sm:mt-3.5 tracking-normal drop-shadow-xs">
            Satisfy Your Sweet Cravings
          </p>

          {/* Offer Pill with floating "Special Offer!" */}
          <div className="relative mt-7 sm:mt-9">
            <span
              className="absolute -top-3.5 left-5 text-white font-script text-base sm:text-[17px] font-semibold tracking-wide drop-shadow-md select-none z-10"
              style={{ transform: 'rotate(-4deg)' }}
            >
              Special Offer!
            </span>
            <div className="h-12 sm:h-14 xl:h-[64px] px-8 sm:px-10 xl:px-11 bg-primary-dark rounded-pill flex items-center justify-center shadow-lg hover:brightness-105 transition-all">
              <span className="text-white font-extrabold text-2xl sm:text-3xl xl:text-[34px] tracking-wide leading-none">
                SAVE 20%
              </span>
            </div>
          </div>
        </div>

        {/* Right: Two Small Circular Images */}
        {/* On desktop (xl/lg): vertical stack aligned right. On md: row below. On base/sm: hidden per spec section 12 */}
        <div className="hidden lg:flex flex-col items-center justify-start gap-10 xl:gap-[36px] pt-1 xl:pt-[10px] xl:pr-6 shrink-0">
          {/* Top circle: Lava cake */}
          <div className="relative w-[140px] h-[140px] xl:w-[184px] xl:h-[184px] rounded-full border-[6px] xl:border-[8px] border-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] overflow-hidden bg-primary-dark">
            <Image
              src="/images/hero-side-top.jpg"
              alt="Molten chocolate lava cake dusted with powdered sugar"
              fill
              sizes="(min-width: 1280px) 184px, 140px"
              className="object-cover"
            />
          </div>

          {/* Bottom circle: Cake slice */}
          <div className="relative w-[140px] h-[140px] xl:w-[184px] xl:h-[184px] rounded-full border-[6px] xl:border-[8px] border-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] overflow-hidden bg-primary-dark">
            <Image
              src="/images/hero-side-bottom.jpg"
              alt="Delicious slice of chocolate layered cake with fudge filling"
              fill
              sizes="(min-width: 1280px) 184px, 140px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Medium screens (768-1023px): Two side circles displayed in a horizontal row */}
        <div className="hidden md:flex lg:hidden items-center justify-center gap-6 mt-4">
          <div className="relative w-[120px] h-[120px] rounded-full border-[5px] border-white shadow-md overflow-hidden bg-primary-dark">
            <Image
              src="/images/hero-side-top.jpg"
              alt="Molten chocolate lava cake"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div className="relative w-[120px] h-[120px] rounded-full border-[5px] border-white shadow-md overflow-hidden bg-primary-dark">
            <Image
              src="/images/hero-side-bottom.jpg"
              alt="Slice of chocolate cake"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
