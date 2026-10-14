import React from 'react';
import Link from 'next/link';
import { CircleHelp } from 'lucide-react';
import { FOOTER_PRIMARY_LINKS, FOOTER_COLUMNS } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card pt-10 px-6 sm:px-10 lg:px-20 pb-12 mt-6 relative border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-12 xl:gap-16">
        {/* Left Column: Brand + Primary Links */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-primary leading-none tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            Dakingo
          </Link>
          <ul className="flex flex-col gap-2 mt-5 text-[15px] text-text-muted leading-[1.6]">
            {FOOTER_PRIMARY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: 4 Links Columns + Newsletter + Help Widget */}
        <div className="flex flex-col justify-between">
          {/* 4 Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 xl:gap-14">
            {FOOTER_COLUMNS.map((col, index) => (
              <div key={`${col.title}-${index}`} className="flex flex-col">
                <h5 className="text-[14px] font-bold uppercase tracking-wider text-primary mb-3">
                  {col.title}
                </h5>
                <ul className="flex flex-col gap-2 text-[15px] text-text-muted leading-[1.6]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Row + Help Widget */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-10 pt-6 border-t border-border/30">
            {/* Newsletter Subscription */}
            <form
              action="#"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <div className="relative w-full sm:w-[340px] xl:w-[360px] h-[50px] rounded-pill bg-white border border-border px-5 flex items-center shadow-2xs">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full bg-transparent text-[16px] text-text-body placeholder:text-text-muted font-normal focus:outline-none"
                  aria-label="Email address for newsletter"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="h-[50px] px-8 text-[18px] font-bold rounded-pill"
              >
                SUBSCRIBE
              </Button>
            </form>

            {/* Help Widget in the Bottom Right */}
            <div className="flex flex-col items-center self-end sm:self-auto group cursor-pointer">
              <div
                className="w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xs"
                title="Customer Support"
                tabIndex={0}
                role="button"
                aria-label="Need any help?"
              >
                <CircleHelp className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[14px] font-medium text-primary mt-1 select-none">
                Hey, need any help?
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
