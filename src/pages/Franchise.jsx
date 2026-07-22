import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiShield, FiBook, FiPieChart, FiArrowDown } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FranchiseForm } from '../components/forms/FranchiseForm';
import { Button } from '../components/common/Button';

const WHY_FRANCHISE = [
  { icon: FiTrendingUp, title: 'Proven Business Model', desc: 'A battle-tested bakery model optimized for high volume and repeat customers.' },
  { icon: FiShield, title: 'Marketing Support', desc: 'Comprehensive digital marketing, brand campaigns, and local store promotion.' },
  { icon: FiBook, title: 'Staff Training', desc: 'Complete training academy for kitchen staff, bakers, and branch managers.' },
  { icon: FiPieChart, title: 'Supply Chain', desc: 'Reliable ingredient supply chain ensuring product consistency across all branches.' },
  { icon: FiCheckCircle, title: 'High Profit Potential', desc: 'Strong unit economics designed for fast ROI and long-term business growth.' },
];

export const Franchise = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30">
        
        {/* Franchise Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge="Franchise Opportunity"
            title="Own a Martin's Roll Franchise"
            subtitle="Why Martin's Roll?"
          />

          <div className="mt-6 flex justify-center">
            <a href="#franchise-form">
              <Button variant="gold" size="lg" icon={FiArrowDown}>
                Apply Now
              </Button>
            </a>
          </div>
        </div>

        {/* Why Martin's Roll Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_FRANCHISE.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-amber-900/10 hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-2xl mb-6 mx-auto group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="franchise-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Partner With Us"
            title="Apply Now"
            subtitle="Complete the franchise application form below to get started."
          />
          <FranchiseForm />
        </div>

      </div>
    </PageTransition>
  );
};
export default Franchise;
