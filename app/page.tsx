import React from 'react';
import { CategoryNav } from '@/components/layout/CategoryNav';
import { Hero } from '@/components/home/Hero';
import { MenuSection } from '@/components/home/MenuSection';
import { Bestsellers } from '@/components/home/Bestsellers';
import { PromiseSection } from '@/components/home/PromiseSection';
import { TrustBanner } from '@/components/home/TrustBanner';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page py-0 lg:py-11">
      <div className="mx-auto w-full max-w-[1356px] overflow-hidden bg-card shadow-page lg:rounded-card">
        {/* Header & Category Navigation */}
        <CategoryNav />

        {/* Hero Section */}
        <Hero />

        {/* Content Panel: Overlaps the hero with negative margin and large top border radius */}
        <main className="relative z-10 -mt-20 sm:-mt-24 lg:-mt-36 mx-3 lg:mx-8 rounded-t-[32px] lg:rounded-t-[48px] bg-panel px-4 sm:px-6 lg:px-12 py-8 lg:py-10 shadow-xs">
          <MenuSection />
          <Bestsellers />
          <PromiseSection />
          <TrustBanner />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
