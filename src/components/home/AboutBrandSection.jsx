import React from "react";
import { motion } from "framer-motion";
import { Logo } from "../common/Logo";

export const AboutBrandSection = () => {
  return (
    <section className="py-12 bg-brand-cream relative overflow-hidden">
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

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto" dir="rtl">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              عن مارتنز رول (Martins Roll)
            </h2>

            {/* Paragraph Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#F8EFE3]/95 leading-relaxed font-medium pt-2">
              وجهتك الأولى لكل ما هو مميز وطازج! في مارتنز رول، بنقدملك تجربة
              فريدة تجمع بين أشهى المخبوزات والحلويات المحضرة بعناية، إلى جانب
              تشكيلة واسعة ومنعشة من ألذ المشروبات والقهوة المصنوعة بجودة عالية
              تناسب كل الأذواق. هدفنا دايمًا إننا نقدم لك طعم مميز يظبط يومك في
              أجواء مريحة ومميزة. 🥐☕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrandSection;
