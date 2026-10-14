import React from 'react';

export const TrustBanner: React.FC = () => {
  return (
    <section
      aria-label="Trust and Certification Banner"
      className="w-full mt-10 lg:mt-15"
    >
      <div
        className="w-full min-h-[80px] sm:min-h-[108px] rounded-[24px] px-6 sm:px-10 py-5 flex items-center justify-center text-center shadow-soft"
        style={{
          background: 'linear-gradient(90deg, #A3262F 0%, #B7333B 100%)',
        }}
      >
        <p className="text-white font-bold text-lg sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.2] tracking-normal drop-shadow-xs">
          Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
        </p>
      </div>
    </section>
  );
};
