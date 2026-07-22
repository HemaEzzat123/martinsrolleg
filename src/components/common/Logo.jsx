import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ size = 'md', className = '', isLink = true }) => {
  const logoContent = (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left select-none">
      
      {/* Main Brand Title: MARTIN'S ROLL */}
      <div className="flex items-center text-[#2C463D] font-heading font-extrabold tracking-[0.14em] text-xl sm:text-2xl leading-none">
        <span>MARTIN'S R</span>
        
        {/* Custom Cinnamon Spiral 'O' Vector */}
        <span className="relative inline-flex items-center justify-center w-[0.95em] h-[0.95em] mx-[0.03em] -mt-[0.06em]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#2C463D] fill-none stroke-current">
            <circle cx="50" cy="50" r="44" strokeWidth="8" />
            <path
              d="M 50 16 C 28 16 16 34 18 52 C 20 70 38 82 58 78 C 76 74 82 52 76 36 C 70 22 50 22 38 32 C 28 40 32 58 46 62 C 58 64 64 50 58 42 C 54 36 44 38 44 46 C 44 50 48 52 50 50"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span>LL</span>
      </div>

      {/* Tagline: Your Daily Dose Of Delicious */}
      <span className="text-[10px] sm:text-[11px] font-heading text-[#2C463D] tracking-[0.16em] font-medium mt-1">
        Your Daily Dose Of Delicious
      </span>

    </div>
  );

  if (!isLink) {
    return (
      <div className={`inline-flex items-center group ${className}`}>
        {logoContent}
      </div>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center group focus:outline-none ${className}`}>
      {logoContent}
    </Link>
  );
};

export default Logo;
