import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiCheck } from "react-icons/fi";
import { Button } from "../common/Button";
import { useLanguage } from "../../context/LanguageContext";

export const ORDER_NOW_URL =
  "https://martins-roll-eg.fodista.com/apps/online/18p0hie137?category=BREAKFAST";

export const Hero = () => {
  const { t, isAr } = useLanguage();

  const handleOrder = () => {
    window.open(ORDER_NOW_URL, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-brand-cream via-brand-cream/60 to-transparent">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-start"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-olive/10 text-brand-olive border border-brand-olive/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-olive animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider">
                {t('hero.freshBadge')}
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading text-brand-dark tracking-tight leading-[1.15]">
              {t('hero.titleLine1')} <br />
              <span className="text-brand-olive italic font-normal">
                {t('hero.titleLine2')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-lg">
              {t('hero.subtitlePrefix')} <br />
              <span className="text-brand-olive font-bold">
                {t('hero.subtitleCategories')}
              </span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={FiShoppingBag}
                onClick={handleOrder}
              >
                {t('hero.orderBtn')}
              </Button>
            </div>

            {/* Handwritten Callout */}
            <div className="mt-8 mb-3 flex items-center gap-2">
              <svg
                className={`w-12 h-10 text-brand-olive stroke-current flex-shrink-0 ${isAr ? 'rotate-6 scale-x-[-1]' : '-rotate-6'}`}
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 12,18 C 8,10 18,4 20,12 C 22,20 10,24 16,28 C 22,32 38,20 54,26"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 44,22 L 55,27 L 47,33"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="font-script text-2xl sm:text-3xl text-brand-olive leading-tight select-none whitespace-pre-line">
                {t('hero.handwrittenNote')}
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-4 pt-6 border-t border-gray-300/60 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-2">
              {/* 1. Google Reviews */}
              <div className="flex items-center gap-3.5 pe-2 md:pe-5 lg:pe-6 border-e border-gray-300/70 flex-1 min-w-[180px] md:min-w-0">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#E5ECCF] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-[#4B5E27]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-brand-dark leading-tight">
                    4.5
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                    {t('hero.reviewsTitle')}
                  </span>
                  <div className="flex items-center gap-0.5 mt-1" dir="ltr">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 text-[#D89B46] fill-[#D89B46]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Fast Delivery */}
              <div className="flex items-center gap-3.5 px-0 md:px-3 lg:px-5 border-e border-gray-300/70 flex-1 min-w-[180px] md:min-w-0">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#E5ECCF] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-[#4B5E27]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 8h3M0 12h4M2 16h2" />
                    <rect x="5" y="6" width="10" height="9" rx="1" />
                    <path d="M15 9h4l3 3v3h-7V9z" />
                    <circle cx="8" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-base sm:text-lg font-bold text-brand-dark leading-tight">
                    {t('hero.deliveryTitle')}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 mt-1 leading-snug whitespace-pre-line">
                    {t('hero.deliveryDesc')}
                  </span>
                </div>
              </div>

              {/* 3. Fresh Daily */}
              <div className="flex items-center gap-3.5 ps-0 md:ps-3 lg:ps-5 flex-1 min-w-[180px] md:min-w-0">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#E5ECCF] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-[#4B5E27]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 13.8a6 6 0 0 1-1.66-11.4A6 6 0 0 1 15.66 4.8 6 6 0 0 1 18 13.8" />
                    <path d="M6 14h12v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6z" />
                    <path d="M10 14v7M14 14v7" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-base sm:text-lg font-bold text-brand-dark leading-tight">
                    {t('hero.freshTitle')}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 mt-1 leading-snug whitespace-pre-line">
                    {t('hero.freshDesc')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-xl lg:max-w-2xl aspect-square md:aspect-[5/4] lg:aspect-square">
              {/* Decorative Circle Background */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-brand-olive/20 to-brand-gold/30 blur-3xl transform rotate-12" />

              {/* Main Image Frame */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/70 group">
                <img
                  src="/images/hero-cinnamon-roll.jpg"
                  alt="Luxury Handmade Delights - Martin's Roll"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glassmorphism Badge 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 start-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg shrink-0">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark">
                      {t('hero.organicBadgeTitle')}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {t('hero.organicBadgeDesc')}
                    </p>
                  </div>
                </motion.div>

                {/* Floating Glassmorphism Badge 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-6 end-6 glass-card px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center font-bold shrink-0">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark">
                      {t('hero.glazeBadgeTitle')}
                    </p>
                    <p className="text-[10px] text-brand-olive font-semibold">
                      {t('hero.glazeBadgeDesc')}
                    </p>
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

export default Hero;
