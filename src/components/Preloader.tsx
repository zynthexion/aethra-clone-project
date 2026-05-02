import React, { useEffect, useState } from 'react';
import './Preloader.css';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Only run if not already shown in this session
    const hasBeenShown = sessionStorage.getItem('preloader-shown');
    if (hasBeenShown) {
      setIsVisible(false);
      return;
    }

    // Force scroll to top on first load
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('preloader-shown', 'true');
      }, 1200);
    }, 9500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`preloader-overlay ${isExiting ? 'exit' : ''}`}>
      <div className="preloader-content movie-style">
        <div className="quote-container">
          <p className="quote-line line-1">
            Your brand deserves more than ordinary.
          </p>
          <p className="quote-line line-2">
            It deserves
          </p>
          <div className="logo-line">
            <div className="logo-transformation-container">
              <span className="brand-dig">DIG</span>
              <span className="brand-nity">nity.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
