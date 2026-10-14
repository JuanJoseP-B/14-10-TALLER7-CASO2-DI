import React from 'react';
import Link from 'next/link';
import { Cake, Coffee, Sparkles, Cookie, IceCream } from 'lucide-react';
import { MENU_TILES } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const MenuSection: React.FC = () => {
  const renderTileIcon = (iconName: string) => {
    switch (iconName) {
      case 'cake':
        return <Cake className="w-12 h-12 lg:w-14 lg:h-14 stroke-primary" strokeWidth={1.75} />;
      case 'crown':
        return <Sparkles className="w-12 h-12 lg:w-14 lg:h-14 stroke-primary" strokeWidth={1.75} />;
      case 'dessert':
        return <IceCream className="w-12 h-12 lg:w-14 lg:h-14 stroke-primary" strokeWidth={1.75} />;
      case 'cookie':
        return <Cookie className="w-12 h-12 lg:w-14 lg:h-14 stroke-primary" strokeWidth={1.75} />;
      default:
        return <Cake className="w-12 h-12 lg:w-14 lg:h-14 stroke-primary" strokeWidth={1.75} />;
    }
  };

  return (
    <section id="menu" aria-labelledby="menu-heading" className="w-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left: Intro + 3 Circular Icons */}
        <div className="w-full lg:max-w-[440px] shrink-0">
          <SectionTitle
            level="h2"
            id="menu-heading"
            title="Menu"
            subtitle="What will you wish for?"
          />

          <div className="flex items-center gap-4 mt-5 sm:mt-[22px]">
            {/* Circle 1: Cake */}
            <div
              className="w-14 h-14 rounded-full bg-primary-soft flex items-center justify-center transition-transform hover:scale-110"
              title="Cakes"
            >
              <Cake className="w-6 h-6 stroke-primary" strokeWidth={2} />
            </div>

            {/* Circle 2: Cake Slice / Treat */}
            <div
              className="w-14 h-14 rounded-full bg-primary-soft flex items-center justify-center transition-transform hover:scale-110"
              title="Pastries"
            >
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 9.5l10 3.5 10-3.5L12 2z" />
                <path d="M2 9.5V17l10 5 10-5V9.5" />
                <path d="M12 13v9" />
              </svg>
            </div>

            {/* Circle 3: Coffee Cup */}
            <div
              className="w-14 h-14 rounded-full bg-primary-soft flex items-center justify-center transition-transform hover:scale-110"
              title="Beverages"
            >
              <Coffee className="w-6 h-6 stroke-primary" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Right: 4 White Tiles */}
        <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 justify-end">
          {MENU_TILES.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              className="w-full sm:w-[130px] sm:h-[130px] xl:w-[150px] xl:h-[150px] aspect-square rounded-[24px] bg-white shadow-card flex flex-col items-center justify-center p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-soft group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-center justify-center mb-2 lg:mb-3 group-hover:scale-110 transition-transform">
                {renderTileIcon(tile.iconName)}
              </div>
              <span className="text-sm xl:text-[16px] font-semibold uppercase tracking-wider text-primary">
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
