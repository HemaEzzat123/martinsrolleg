import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
  disabled = false,
  icon: Icon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  const variantStyles = {
    primary: 'bg-brand-olive hover:bg-brand-olive-dark text-white shadow-brand-olive/20 hover:shadow-lg hover:shadow-brand-olive/30',
    gold: 'bg-brand-gold hover:bg-brand-gold-hover text-white shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30',
    secondary: 'bg-brand-dark hover:bg-brand-charcoal text-white dark:bg-brand-cream dark:text-brand-dark dark:hover:bg-white',
    outline: 'border-2 border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white dark:border-brand-gold dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-dark',
    ghost: 'text-brand-dark dark:text-brand-cream hover:bg-black/5 dark:hover:bg-white/10 shadow-none',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && <Icon className="mr-2 text-lg" />}
      {children}
    </motion.button>
  );
};
