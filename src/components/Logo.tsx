import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-7xl'
  };

  const currentSize = sizeClasses[size];

  return (
    <div 
      style={{ 
        fontFamily: "'Dedicool', sans-serif",
        WebkitTextStroke: '1.5px currentColor'
      }}
      className={`font-bold ${currentSize} tracking-wider animate-color-cycle ${className}`}
    >
      <span className="animate-pulse-dig">DIG</span>
      <span>nity</span>
    </div>
  );
};
