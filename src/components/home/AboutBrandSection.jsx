import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export const AboutBrandSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 md:py-20 bg-brand-cream relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#2C463D] text-[#F8EFE3] p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-2xl border border-brand-gold/20 text-center relative overflow-hidden font-body"
        >
          {/* Subtle background glow effect */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-olive/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {t('about.title', "عن مارتنز رول (Martins Roll)")}
            </h2>

            {/* Paragraph Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#F8EFE3]/95 leading-relaxed font-medium pt-2">
              {t('about.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrandSection;
