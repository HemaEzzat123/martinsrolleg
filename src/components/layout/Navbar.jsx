import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { NAV_LINKS } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../common/Button';

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
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center text-xl font-bold shadow-md transform group-hover:rotate-45 transition-transform duration-500">
              🌀
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-extrabold tracking-tight text-brand-dark leading-none">
                MARTINS<span className="text-brand-olive">ROLLEG</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-olive font-medium">
                Gourmet Cinnamon Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors relative ${
                    isActive
                      ? 'text-brand-olive font-bold'
                      : 'text-gray-700 hover:text-brand-olive'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-olive rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="primary"
              size="sm"
              icon={FiShoppingBag}
              onClick={handleOrderClick}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark focus:outline-none"
            >
              {mobileMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-cream border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-olive/10 text-brand-olive font-bold'
                          : 'text-gray-700 hover:bg-black/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button
                  variant="primary"
                  fullWidth
                  icon={FiShoppingBag}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOrderClick();
                  }}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
