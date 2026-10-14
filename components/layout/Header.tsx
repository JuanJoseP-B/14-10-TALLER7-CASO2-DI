import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onMobileMenuToggle,
  isMobileMenuOpen = false,
}) => {
  return (
    <header className="w-full bg-card border-b border-border">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-3 md:py-0 md:h-[88px] gap-3 md:gap-6">
        {/* Top bar on mobile: Logo + Cart + Hamburger */}
        <div className="w-full md:w-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-primary tracking-tight leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            Dakingo
          </Link>

          {/* Mobile Right Icons (Cart + Hamburger) */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="#cart"
              className="flex items-center text-primary p-2 hover:opacity-80 transition-opacity"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="w-6 h-6 stroke-primary" strokeWidth={2} />
            </Link>

            {onMobileMenuToggle && (
              <button
                type="button"
                onClick={onMobileMenuToggle}
                className="p-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-primary rounded transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-primary rounded transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-primary rounded transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Search Bar: full-width on mobile, 340px on desktop */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-[340px] flex items-center">
          <div className="relative w-full h-[46px] rounded-pill bg-white border-[1.5px] border-primary flex items-center pl-4 pr-1 shadow-xs">
            <Search
              className="w-[18px] h-[18px] text-text-muted shrink-0 mr-2.5"
              strokeWidth={2}
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-[18px] text-text-body placeholder:text-text-muted font-normal focus:outline-none"
              aria-label="Search cakes, desserts and treats"
            />
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Filter search options"
            >
              <ChevronDown className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop Cart + Login/Signup */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <Link
            href="#login"
            className="flex items-center gap-2.5 text-primary hover:opacity-85 transition-opacity group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
          >
            <ShoppingCart
              className="w-6 h-6 stroke-primary group-hover:scale-105 transition-transform"
              strokeWidth={2}
            />
            <span className="text-[18px] font-medium leading-none">Login/Signup</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
