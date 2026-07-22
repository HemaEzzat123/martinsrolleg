import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`bg-white dark:bg-brand-charcoal border border-amber-900/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
