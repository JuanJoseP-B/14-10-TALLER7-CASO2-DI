import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'pill-dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ariaLabel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase transition-all duration-200 cursor-pointer select-none rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-soft',
    outline: 'border-2 border-primary text-primary hover:bg-primary-soft',
    'pill-dark': 'bg-primary-dark text-white hover:bg-primary',
  };

  const sizeStyles = {
    sm: 'h-10 px-5 text-sm tracking-wide',
    md: 'h-12 px-7 text-base tracking-wider',
    lg: 'h-[50px] px-9 text-[18px] tracking-wider',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
};
