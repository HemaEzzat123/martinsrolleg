import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiShoppingBag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/966501234567?text=Hello%20Martins%20Rolleg!%20I%20would%20like%20to%20inquire%20about%20your%20cinnamon%20rolls.', '_blank');
  };

  const handleOrder = () => {
    window.open('https://order.martinsrolleg.com', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Floating Order Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOrder}
        className="pointer-events-auto flex items-center space-x-2 bg-brand-gold text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-brand-gold/30 hover:bg-brand-gold-hover transition-all"
      >
        <FiShoppingBag className="w-5 h-5" />
        <span className="text-sm">Order Online</span>
      </motion.button>

      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleWhatsapp}
        aria-label="Contact on WhatsApp"
        className="pointer-events-auto w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-all"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto w-10 h-10 bg-brand-dark dark:bg-brand-cream text-white dark:text-brand-dark rounded-full flex items-center justify-center shadow-md hover:bg-brand-olive transition-colors"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
