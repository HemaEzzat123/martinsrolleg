import React from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiTruck, FiBox, FiCheck, FiArrowRight } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { B2BForm } from '../components/forms/B2BForm';
import { Button } from '../components/common/Button';

const TARGET_INDUSTRIES = [
  { name: 'Luxury Hotels & Resorts', desc: 'Pre-baked or frozen bake-off rolls for 5-star breakfast buffets and room service.' },
  { name: 'Specialty Coffee Shops', desc: 'Fresh daily morning delivery of gourmet cinnamon rolls and brioche donuts.' },
  { name: 'Restaurants & Bistros', desc: 'Signature dessert menu additions without added kitchen labor.' },
  { name: 'Corporate Head Offices', desc: 'Daily employee pantry supply, executive snacks, and client hospitality.' },
  { name: 'Retail & Supermarkets', desc: 'Branded multi-pack cinnamon roll boxes for bakery shelf displays.' },
];

export const B2B = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715]">
        
        {/* B2B Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge="Wholesale & Commercial Supply"
            title="B2B Bakery Partnerships"
            subtitle="Supply your hotel, cafe, restaurant, corporate office, or retail chain with premium artisanal cinnamon rolls."
          />

          <div className="mt-8 flex justify-center">
            <a href="#b2b-form">
              <Button variant="primary" size="lg" icon={FiArrowRight}>
                Request B2B Sample & Pricing
              </Button>
            </a>
          </div>
        </div>

        {/* Target Sectors */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionTitle
            badge="Who We Serve"
            title="Tailored Solutions for Your Business"
            subtitle="Whether you need daily hot deliveries or flash-frozen bake-off inventory, we adapt to your operational model."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TARGET_INDUSTRIES.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-sm border border-amber-900/10 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 dark:bg-brand-gold/10 text-brand-olive dark:text-brand-gold flex items-center justify-center font-bold text-xl mb-4">
                  🌀
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-brand-cream mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why B2B Partner */}
        <div className="bg-white dark:bg-brand-charcoal py-16 mb-20 border-y border-amber-900/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <FiTruck className="w-10 h-10 text-brand-olive dark:text-brand-gold mx-auto mb-4" />
                <h4 className="text-lg font-bold font-heading text-brand-dark dark:text-brand-cream">Guaranteed Daily Delivery</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Temperature-controlled morning drop-offs before 7:00 AM.</p>
              </div>

              <div className="p-6">
                <FiBox className="w-10 h-10 text-brand-olive dark:text-brand-gold mx-auto mb-4" />
                <h4 className="text-lg font-bold font-heading text-brand-dark dark:text-brand-cream">Custom Co-Branded Packaging</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">White-label or co-branded boxes suited to your brand identity.</p>
              </div>

              <div className="p-6">
                <FiGrid className="w-10 h-10 text-brand-olive dark:text-brand-gold mx-auto mb-4" />
                <h4 className="text-lg font-bold font-heading text-brand-dark dark:text-brand-cream">Flexible Minimum Orders</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Trial box samples & scale-as-you-grow volume pricing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* B2B Form Section */}
        <div id="b2b-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Commercial Inquiry"
            title="Request Partnership Form"
            subtitle="Submit your monthly requirement and our B2B commercial manager will contact you within 24 hours."
          />
          <B2BForm />
        </div>

      </div>
    </PageTransition>
  );
};
export default B2B;
