import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: {
      text: 'text-xl',
      quote: 'text-[60px]',
      gap: 'gap-0',
      mt: 'mt-0',
      ml: '-10px'
    },
    md: {
      text: 'text-3xl',
      quote: 'text-[90px]',
      gap: 'gap-0',
      mt: 'mt-0',
      ml: '-6px'
    },
    lg: {
      text: 'text-5xl',
      quote: 'text-[150px]',
      gap: 'gap-0',
      mt: 'mt-0',
      ml: '-25px'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <span
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className={`font-bold ${currentSize.text} tracking-tighter text-white lowercase leading-none`}
      >
        di
      </span>
      <div className={`flex items-center mx-0 ${currentSize.mt} leading-none`}>
        <span
          style={{
            fontFamily: "'Brice-SemiExpandedSemiBold', sans-serif",
            display: 'inline-block',
            transform: 'rotate(0deg) translateY(0.25em)'
          }}
          className={`${currentSize.quote} text-[#FACC15] font-bold`}
        >
          ’
        </span>
        <span
          style={{
            fontFamily: "'Brice-SemiExpandedSemiBold', sans-serif",
            display: 'inline-block',
            transform: `rotate(0deg) translateY(0.25em)`,
            marginLeft: currentSize.ml
          }}
          className={`${currentSize.quote} text-[#FACC15] font-bold`}
        >
          ’
        </span>
      </div>
      <span
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className={`font-bold ${currentSize.text} tracking-tighter text-white lowercase leading-none`}
      >
        nity
      </span>
    </div>
  );
};
