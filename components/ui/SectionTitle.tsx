import React from 'react';

interface SectionTitleProps {
  level?: 'h2' | 'h3';
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  level = 'h2',
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  id,
}) => {
  const isH2 = level === 'h2';

  return (
    <div className={`flex flex-col ${className}`}>
      {isH2 ? (
        <h2
          id={id}
          className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-primary leading-[1.1] tracking-tight ${titleClassName}`}
        >
          {title}
        </h2>
      ) : (
        <h3
          id={id}
          className={`text-2xl sm:text-[28px] lg:text-[30px] font-bold text-primary leading-[1.2] tracking-tight ${titleClassName}`}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p
          className={`text-base sm:text-lg lg:text-[20px] text-text-body font-normal leading-[1.4] mt-1.5 ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
