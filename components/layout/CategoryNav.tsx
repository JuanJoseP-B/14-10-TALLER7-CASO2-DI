'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';

export const CategoryNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* Desktop / Tablet Category Navigation */}
      <nav
        aria-label="Category Navigation"
        className="w-full bg-card border-b border-border/40"
      >
        <div className="hidden lg:flex items-center justify-between px-6 lg:px-20 h-[84px] gap-4">
          <ul className="flex items-center justify-between flex-1 pr-6 gap-4 xl:gap-8">
            {NAV_ITEMS.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                <Link
                  href={item.href}
                  className="text-[20px] font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1 py-0.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="shrink-0">
            <Button
              href="#order"
              variant="primary"
              size="md"
              className="h-[48px] px-7 text-[20px] font-bold rounded-pill"
            >
              ORDER NOW
            </Button>
          </div>
        </div>

        {/* Medium screen horizontal scroll nav (768px - 1023px) */}
        <div className="hidden md:flex lg:hidden items-center justify-between px-6 py-3 overflow-x-auto no-scrollbar gap-4">
          <ul className="flex items-center gap-6 shrink-0">
            {NAV_ITEMS.map((item, index) => (
              <li key={`md-${item.id}-${index}`}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href="#order"
            variant="primary"
            size="sm"
            className="shrink-0 text-sm font-bold h-10 px-4"
          >
            ORDER NOW
          </Button>
        </div>

        {/* Mobile dropdown drawer (<768px) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border px-6 py-6 transition-all duration-300">
            <ul className="flex flex-col gap-4 mb-6">
              {NAV_ITEMS.map((item, index) => (
                <li key={`mobile-${item.id}-${index}`}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-primary block py-1 border-b border-border/40 hover:text-primary-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary block py-1"
                >
                  Login / Signup
                </Link>
              </li>
            </ul>
            <Button
              href="#order"
              variant="primary"
              size="md"
              className="w-full text-lg h-12"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ORDER NOW
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};
