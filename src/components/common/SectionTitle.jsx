import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  center = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold uppercase tracking-widest text-brand-olive bg-brand-olive/10 dark:text-brand-gold dark:bg-brand-gold/10 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-brand-cream font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
