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
        <span className="inline-block px-4 py-1.5 mb-3 text-xs font-extrabold uppercase tracking-widest text-[#2C463D] bg-[#2C463D]/12 rounded-full border border-[#2C463D]/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#16241F] font-heading leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#2D423A] font-medium max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
