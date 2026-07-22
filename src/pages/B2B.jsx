import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiBox, FiCheck, FiArrowDown, FiLayers } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { B2BForm } from '../components/forms/B2BForm';
import { Button } from '../components/common/Button';

const WORK_WITH = [
  { name: 'Cafes', desc: 'Specialty coffee shops looking for daily fresh cinnamon roll deliveries.' },
  { name: 'Restaurants', desc: 'Fine dining and casual eateries adding gourmet desserts to their menu.' },
  { name: 'Supermarkets', desc: 'Retail grocery stores and bakery aisles.' },
  { name: 'Services', desc: 'Catering companies and hospitality service providers.' },
];

const SERVICES = [
  { icon: FiShoppingBag, name: 'Wholesale', desc: 'Daily or weekly fresh baked bulk deliveries.' },
  { icon: FiBox, name: 'Frozen Products', desc: 'Bake-off frozen rolls ready for hot baking in your store.' },
  { icon: FiLayers, name: 'Private Label', desc: 'Custom branded packaging tailored for your brand.' },
  { icon: FiCheck, name: 'Corporate Orders', desc: 'Custom recurring snacks and gift boxes for companies.' },
];

export const B2B = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30">
        
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge="B2B & Wholesale"
            title="Business Partnerships"
            subtitle="We work with:"
          />

          {/* We Work With Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6 mb-12">
            {WORK_WITH.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-amber-900/10 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 text-brand-olive flex items-center justify-center font-bold text-xl mb-3 mx-auto">
                  🌀
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#b2b-form">
              <Button variant="primary" size="lg" icon={FiArrowDown}>
                Become a Partner
              </Button>
            </a>
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionTitle
            badge="Our Services"
            title="Wholesale & Commercial Solutions"
            subtitle="Explore our flexible supply offerings designed for your business."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-amber-900/10 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-olive/10 text-brand-olive flex items-center justify-center text-2xl mb-4 mx-auto">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* B2B Form Section */}
        <div id="b2b-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Get Started"
            title="Become a Partner"
            subtitle="Fill out the form below to start our commercial partnership."
          />
          <B2BForm />
        </div>

      </div>
    </PageTransition>
  );
};
export default B2B;
