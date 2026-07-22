import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import { Button } from '../common/Button';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const ORDER_NOW_URL = 'https://martins-roll-eg.fodista.com/apps/online/18p0hie137?category=BREAKFAST';

export const Hero = () => {
  const handleOrder = () => {
    window.open(ORDER_NOW_URL, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-brand-cream via-brand-cream/60 to-transparent">
      
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-olive/10 text-brand-olive border border-brand-olive/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-olive animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Baked Fresh Every Hour
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading text-brand-dark tracking-tight leading-[1.1]">
              Crafted Fresh <br />
              <span className="text-brand-olive italic font-normal">
                Every Day.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-lg">
              Premium Cinnamon Rolls <br />
              <span className="text-brand-olive font-bold">Donuts • Waffles • Specialty Coffee</span>
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Immerse your senses in warm, hand-swirled cinnamon pastry perfection, coated in golden caramel & organic vanilla glaze.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={FiShoppingBag}
                onClick={handleOrder}
              >
                Order Now
              </Button>

              <a
                href="#best-sellers"
                className="inline-flex items-center font-medium text-brand-dark hover:text-brand-olive px-4 py-3 rounded-full hover:bg-black/5 transition-colors group"
              >
                <span>Explore Menu</span>
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats Counter Bar */}
            <div className="mt-12 pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-dark font-heading">
                  <AnimatedCounter target={50} suffix="K+" />
                </p>
                <p className="text-xs text-gray-500">Rolls Baked</p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-dark font-heading">
                  <AnimatedCounter target={15} suffix="+" />
                </p>
                <p className="text-xs text-gray-500">GCC Branches</p>
              </div>

              <div>
                <div className="flex items-center space-x-1 text-2xl sm:text-3xl font-extrabold text-brand-dark font-heading">
                  <AnimatedCounter target={49} suffix="/5" />
                  <FiStar className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs text-gray-500">Customer Rating</p>
              </div>
            </div>

          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative Circle Background */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brand-olive/20 to-brand-gold/30 blur-2xl transform rotate-12" />
              
              {/* Main Image Frame */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60 group">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                  alt="Crafted Fresh Cinnamon Roll"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glassmorphism Badge 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark">100% Organic</p>
                    <p className="text-[10px] text-gray-500">Korintje Cinnamon</p>
                  </div>
                </motion.div>

                {/* Floating Glassmorphism Badge 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-6 right-6 glass-card px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center font-bold">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark">Warm Fresh Glaze</p>
                    <p className="text-[10px] text-brand-olive font-semibold">Served Hot</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
