import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const currentSize = sizeClasses[size];

  return (
    <div 
      className={`font-['Pixelify_Sans'] ${currentSize} tracking-tight animate-color-cycle ${className}`}
    >
      <span className="animate-pulse-dig">DIG</span>
      <span>nity</span>
    </div>
  );
};
