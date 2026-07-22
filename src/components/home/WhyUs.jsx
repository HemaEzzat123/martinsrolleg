import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiSun, FiHeart, FiTruck } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';

const FEATURES = [
  {
    icon: FiSun,
    title: 'Baked Fresh Hourly',
    description: 'We bake in micro-batches every single hour to ensure warm, ultra-soft, melt-in-your-mouth cinnamon perfection.',
  },
  {
    icon: FiAward,
    title: '100% Premium Ingredients',
    description: 'Imported Indonesian Korintje cinnamon, pure French butter, and organic vanilla beans for unforgettable taste.',
  },
  {
    icon: FiHeart,
    title: 'Artisanal Craftsmanship',
    description: 'Every dough roll is hand-knackered, swirled, proofed, and iced by master pastry artisans.',
  },
  {
    icon: FiTruck,
    title: 'Thermal Hot Delivery',
    description: 'Delivered in insulated eco-boxes right to your doorstep, warm and smelling like heaven.',
  },
];

export const WhyUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="The Martins Touch"
          title="Why Choose Us"
          subtitle="We combine traditional European baking heritage with modern luxury flavors to create an extraordinary dessert experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-brand-cream/30 dark:bg-gray-800/40 border border-amber-900/5 dark:border-white/5 hover:border-brand-olive/30 dark:hover:border-brand-gold/30 transition-all text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-olive/10 dark:bg-brand-gold/10 text-brand-olive dark:text-brand-gold flex items-center justify-center mx-auto text-2xl mb-6 group-hover:bg-brand-olive group-hover:text-white dark:group-hover:bg-brand-gold dark:group-hover:text-brand-dark transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-brand-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
