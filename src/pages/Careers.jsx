import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiSmile, FiTrendingUp } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { CareersForm } from '../components/forms/CareersForm';

const PERKS = [
  { icon: FiTrendingUp, title: 'Career Growth', desc: 'Rapid promotion paths for high performing bakers & baristas.' },
  { icon: FiAward, title: 'Competitive Salary', desc: 'Attractive compensation package, performance bonuses, and medical insurance.' },
  { icon: FiSmile, title: 'Positive Environment', desc: 'Friendly, supportive team culture built around passion for baking.' },
  { icon: FiUsers, title: 'Master Training', desc: 'Continuous skills training by European pastry chefs & specialty coffee experts.' },
];

export const Careers = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold uppercase tracking-widest text-brand-olive bg-brand-olive/10 dark:text-brand-gold dark:bg-brand-gold/10 rounded-full">
              التقديم على الوظائف / Career Opportunities
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark dark:text-brand-cream">
              Join Our Team
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              We're always looking for talented, passionate people to create sweet memories with us.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-brand-charcoal p-6 rounded-3xl shadow-sm border border-amber-900/10 dark:border-white/10 text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 dark:bg-brand-gold/10 text-brand-olive dark:text-brand-gold flex items-center justify-center mx-auto text-xl mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-brand-dark dark:text-brand-cream mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {perk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <div className="mt-8">
            <CareersForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
export default Careers;
