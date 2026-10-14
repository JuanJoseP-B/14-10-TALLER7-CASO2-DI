import React from 'react';
import Image from 'next/image';
import { Truck, Palette, ShoppingCart, Flame } from 'lucide-react';
import { PROMISE_STATS, GALLERY_ITEMS } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export const PromiseSection: React.FC = () => {
  const renderStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'truck':
        return <Truck className="w-8 h-8 stroke-primary" strokeWidth={1.8} />;
      case 'palette':
        return <Palette className="w-8 h-8 stroke-primary" strokeWidth={1.8} />;
      case 'cart':
        return <ShoppingCart className="w-8 h-8 stroke-primary" strokeWidth={1.8} />;
      case 'flame':
        return <Flame className="w-8 h-8 stroke-primary" strokeWidth={1.8} />;
      default:
        return <Truck className="w-8 h-8 stroke-primary" strokeWidth={1.8} />;
    }
  };

  const socialAvatars = [
    { initial: 'DK', bg: 'bg-[#A3262F] text-white' },
    { initial: 'SR', bg: 'bg-[#E8838A] text-white' },
    { initial: 'AP', bg: 'bg-[#D45A62] text-white' },
    { initial: 'MJ', bg: 'bg-[#F3D3D1] text-primary' },
    { initial: 'NL', bg: 'bg-[#8A1E26] text-white' },
  ];

  return (
    <section
      id="promise"
      aria-labelledby="promise-heading"
      className="w-full mt-14 lg:mt-16"
    >
      <SectionTitle
        level="h2"
        id="promise-heading"
        title="Our Promise"
        subtitle="There's no secret spell – only honest hard work!"
      />

      {/* 2-column grid: 540px | 1fr on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] xl:grid-cols-[540px_1fr] gap-8 lg:gap-12 xl:gap-[60px] mt-8 lg:mt-10 items-start">
        {/* Left Column: 3 Pink Boxes */}
        <div className="flex flex-col gap-6 lg:gap-[30px] w-full">
          {/* Box 1: Stats Box */}
          <div className="w-full bg-surface-tint rounded-[20px] p-6 sm:p-8 min-h-[240px] xl:h-[260px] flex flex-col justify-between shadow-xs">
            <h4 className="text-center text-[19px] sm:text-[20px] font-semibold text-primary leading-tight">
              A glimpse into our sweet world!
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 mt-4 text-center items-start">
              {PROMISE_STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full border-2 border-primary bg-white flex items-center justify-center shrink-0 mb-2.5 transition-transform hover:scale-105 shadow-xs">
                    {renderStatIcon(stat.iconName)}
                  </div>
                  <span className="text-[13px] sm:text-[14px] xl:text-[15px] font-bold uppercase text-primary leading-tight max-w-[100px] text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Magical Ticket Box */}
          <div className="w-full bg-surface-tint rounded-[20px] p-6 sm:p-8 min-h-[260px] xl:h-[290px] flex flex-col sm:flex-row items-center gap-6 shadow-xs">
            {/* Left: Golden Ticket SVG + Confetti */}
            <div className="relative w-[140px] sm:w-[150px] h-[130px] shrink-0 flex items-center justify-center">
              <svg
                viewBox="0 0 160 140"
                className="w-full h-full drop-shadow-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Confetti pieces */}
                <circle cx="25" cy="20" r="4" fill="#E8838A" />
                <rect x="130" y="15" width="7" height="7" rx="1.5" fill="#E8A93B" transform="rotate(25 130 15)" />
                <polygon points="145,55 140,65 150,65" fill="#3B82F6" />
                <circle cx="15" cy="115" r="4.5" fill="#3B82F6" />
                <rect x="20" y="80" width="8" height="5" rx="1" fill="#E8A93B" transform="rotate(40 20 80)" />
                <rect x="125" y="110" width="6" height="6" rx="1" fill="#E8838A" transform="rotate(15 125 110)" />

                {/* Ticket Base (Golden Gradient) */}
                <defs>
                  <linearGradient id="ticketGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9D479" />
                    <stop offset="50%" stopColor="#E8B64C" />
                    <stop offset="100%" stopColor="#C99427" />
                  </linearGradient>
                </defs>

                {/* Ticket Body with scalloped cutouts */}
                <path
                  d="M 30 35 
                     H 130 
                     C 130 35, 134 35, 136 37 
                     C 138 39, 138 43, 138 45 
                     V 55 
                     C 130 55, 130 65, 138 65 
                     V 75 
                     C 130 75, 130 85, 138 85 
                     V 95 
                     C 138 97, 138 101, 136 103 
                     C 134 105, 130 105, 130 105 
                     H 30 
                     C 30 105, 26 105, 24 103 
                     C 22 101, 22 97, 22 95 
                     V 85 
                     C 30 85, 30 75, 22 75 
                     V 65 
                     C 30 65, 30 55, 22 55 
                     V 45 
                     C 22 43, 22 39, 24 37 
                     C 26 35, 30 35, 30 35 Z"
                  fill="url(#ticketGold)"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                />

                {/* Dashed line inside ticket */}
                <line x1="55" y1="42" x2="55" y2="98" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />

                {/* Star on Ticket */}
                <polygon
                  points="95,54 98,63 107,63 100,68 103,77 95,72 87,77 90,68 83,63 92,63"
                  fill="#FFFFFF"
                />
              </svg>
            </div>

            {/* Right: Copy & Unlock Button */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl xl:text-[28px] font-extrabold text-primary leading-tight tracking-tight">
                THE MAGICAL TICKET
              </h4>
              <p className="text-sm sm:text-base xl:text-[18px] text-text-body font-normal leading-snug mt-2">
                Add 3 reminders in your account. Win offers worth Rs. 750
              </p>
              <div className="mt-4">
                <Button
                  href="#ticket"
                  variant="primary"
                  size="md"
                  className="h-11 sm:h-12 px-6 sm:px-8 text-base sm:text-lg font-bold"
                >
                  UNLOCK NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Box 3: Social Box */}
          <div className="w-full bg-surface-tint rounded-[20px] px-6 py-4 xl:py-0 xl:h-[100px] flex flex-col sm:flex-row items-center justify-between sm:justify-start gap-4 shadow-xs">
            {/* 5 Circular Avatars overlapping -6px */}
            <div className="flex items-center">
              {socialAvatars.map((av, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs select-none shadow-xs shrink-0 ${av.bg}`}
                  style={{ marginLeft: index === 0 ? '0px' : '-6px' }}
                >
                  {av.initial}
                </div>
              ))}
            </div>

            {/* Text with left margin */}
            <span className="text-base sm:text-[18px] font-medium text-text-body sm:ml-8 xl:ml-10 text-center sm:text-left">
              Follow us on social!
            </span>
          </div>
        </div>

        {/* Right Column: 2x3 Photo Gallery */}
        <div className="w-full grid grid-cols-2 gap-4 lg:gap-[18px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative w-full aspect-[9/7] rounded-[20px] overflow-hidden bg-primary-soft shadow-card group"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1280px) 288px, (min-width: 1024px) 220px, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
