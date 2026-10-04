import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { NAV_LINKS } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

export const ORDER_NOW_URL = 'https://martins-roll.billqode.com/';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isScrolled } = useScrollPosition();
  const { t, isAr } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOrderClick = () => {
    window.open(ORDER_NOW_URL, '_blank');
  };

  // ScrollSpy: Track active visible section as user scrolls through the single-page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['home', 'menu', 'catering', 'franchise', 'b2b', 'feedback', 'careers', 'contact'];

    const handleScroll = () => {
      // If at top of page
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // If at bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Find the current section in view
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const targetId = link.id;

    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
        setActiveSection(targetId);
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === '/' ? activeSection === link.id : location.pathname === link.path;
              const displayName = isAr ? link.nameAr : link.nameEn;
              return (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold whitespace-nowrap rounded-full transition-colors relative cursor-pointer select-none ${
                    isAr ? 'font-arabic tracking-normal' : 'font-body'
                  } ${
                    isActive
                      ? 'text-[#2C463D] font-extrabold bg-[#2C463D]/10'
                      : 'text-[#16241F] hover:text-[#2C463D] hover:bg-[#2C463D]/5'
                  }`}
                >
                  {displayName}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-0.5 bg-[#2C463D] rounded-full"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Language Switcher & Order Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <LanguageSwitcher />
            <Button
              variant="primary"
              size="sm"
              icon={FiShoppingBag}
              onClick={handleOrderClick}
              className="whitespace-nowrap px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold shadow-md shrink-0"
            >
              {t('nav.orderNow', 'Order Now')}
            </Button>
          </div>

          {/* Mobile Menu & Switcher Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />

            <Button
              variant="primary"
              size="sm"
              icon={FiShoppingBag}
              onClick={handleOrderClick}
              className="whitespace-nowrap px-3 py-1.5 text-xs font-bold shrink-0"
            >
              {t('nav.order', 'Order')}
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#16241F] hover:bg-[#2C463D]/10 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F8EFE3] border-b border-[#2C463D]/20 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-brand-olive/10 mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {isAr ? 'اللغة / Language' : 'Language / اللغة'}
                </span>
                <LanguageSwitcher />
              </div>

              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === '/' ? activeSection === link.id : location.pathname === link.path;
                const displayName = isAr ? link.nameAr : link.nameEn;
                return (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, link);
                    }}
                    className={`block px-4 py-3 rounded-2xl text-base font-bold transition-colors cursor-pointer ${
                      isAr ? 'font-arabic text-start' : 'text-left'
                    } ${
                      isActive
                        ? 'bg-[#2C463D] text-white shadow-md'
                        : 'text-[#16241F] hover:bg-[#2C463D]/10'
                    }`}
                  >
                    {displayName}
                  </a>
                );
              })}
              <div className="pt-4">
                <Button
                  variant="primary"
                  fullWidth
                  icon={FiShoppingBag}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOrderClick();
                  }}
                >
                  {t('nav.orderOnlineNow', 'Order Online Now')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
