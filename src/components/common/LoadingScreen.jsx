import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8EFE3] text-[#16241F] transition-colors duration-300">
      
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2C463D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Logo Card with Animated Pulse & Loading Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#2C463D]/20 z-10"
      >
        <Logo size="lg" isLink={false} />
        
        {/* Animated Loading Progress Bar */}
        <div className="w-48 h-1.5 bg-[#2C463D]/15 rounded-full overflow-hidden mt-6">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full bg-[#2C463D] rounded-full"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-xs text-[#2C463D] uppercase tracking-[0.2em] font-bold relative z-10"
      >
        Baking Fresh Perfection...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
