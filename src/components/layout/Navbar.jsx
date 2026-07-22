import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { NAV_LINKS } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

export const ORDER_NOW_URL = 'https://martins-roll-eg.fodista.com/apps/online/18p0hie137?category=BREAKFAST';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const handleOrderClick = () => {
    window.open(ORDER_NOW_URL, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors relative ${
                    isActive
                      ? 'text-[#2C463D] font-extrabold bg-[#2C463D]/10'
                      : 'text-[#16241F] hover:text-[#2C463D] hover:bg-[#2C463D]/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2C463D] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Order Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="primary"
              size="md"
              icon={FiShoppingBag}
              onClick={handleOrderClick}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Button
              variant="primary"
              size="sm"
              icon={FiShoppingBag}
              onClick={handleOrderClick}
            >
              Order
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#16241F] hover:bg-[#2C463D]/10 transition-colors"
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
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                      isActive
                        ? 'bg-[#2C463D] text-white shadow-md'
                        : 'text-[#16241F] hover:bg-[#2C463D]/10'
                    }`}
                  >
                    {link.name}
                  </Link>
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
                  Order Online Now
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
