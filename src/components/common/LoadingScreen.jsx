import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-cream dark:bg-[#181715] transition-colors duration-300">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="w-20 h-20 border-4 border-brand-olive/20 border-t-brand-olive dark:border-brand-gold/20 dark:border-t-brand-gold rounded-full flex items-center justify-center text-3xl"
      >
        🌀
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-2xl font-bold font-heading text-brand-dark dark:text-brand-cream tracking-wide"
      >
        Martins Rolleg
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-sm text-brand-olive dark:text-brand-gold uppercase tracking-widest font-medium"
      >
        Baking Perfection...
      </motion.p>
    </div>
  );
};
