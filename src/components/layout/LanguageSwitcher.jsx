import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = ({ className = '', size = 'md' }) => {
  const { lang, setLanguage, isAr } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 sm:p-1 rounded-full bg-white/90 dark:bg-brand-charcoal/80 border border-brand-olive/20 shadow-xs backdrop-blur-sm select-none shrink-0 ${className}`}
      dir="ltr"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
          !isAr
            ? 'text-white'
            : 'text-brand-dark/70 hover:text-brand-olive'
        }`}
        aria-label="Switch to English"
      >
        {!isAr && (
          <motion.div
            layoutId="langPillActive"
            className="absolute inset-0 bg-[#2C463D] rounded-full shadow-xs"
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      <span className="text-gray-300 text-xs px-0.5">|</span>

      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`relative px-2.5 py-1 text-xs font-bold font-arabic rounded-full transition-all duration-200 cursor-pointer ${
          isAr
            ? 'text-white'
            : 'text-brand-dark/70 hover:text-brand-olive'
        }`}
        aria-label="التبديل إلى العربية"
      >
        {isAr && (
          <motion.div
            layoutId="langPillActive"
            className="absolute inset-0 bg-[#2C463D] rounded-full shadow-xs"
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          />
        )}
        <span className="relative z-10">عربي</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
