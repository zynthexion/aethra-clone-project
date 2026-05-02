import React, { useEffect, useState } from 'react';
import './Preloader.css';

let hasBeenShownInAppLifeCycle = false;

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Disable browser scroll restoration and force top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Only run animation if not already shown in this app lifecycle
    if (hasBeenShownInAppLifeCycle) {
      setIsVisible(false);
      return;
    }

    // Disable scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        hasBeenShownInAppLifeCycle = true;
      }, 1200);
    }, 9500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
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
              <span className="brand-nity">nity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
