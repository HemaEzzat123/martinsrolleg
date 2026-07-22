import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGift, FiBookOpen, FiAward, FiHeart, FiUsers, FiArrowDown } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { CateringForm } from '../components/forms/CateringForm';
import { Button } from '../components/common/Button';

const CATERING_SERVICES = [
  { icon: FiBriefcase, title: 'Corporate Meetings', desc: 'Fresh warm rolls and gourmet coffee stations for your corporate meetings.' },
  { icon: FiGift, title: 'Birthdays', desc: 'Custom cinnamon roll towers and sweet dessert setups for birthday parties.' },
  { icon: FiAward, title: 'Schools', desc: 'Special packages for school celebrations and teacher appreciation events.' },
  { icon: FiBookOpen, title: 'Universities', desc: 'Catering for campus events, graduation ceremonies, and student gatherings.' },
  { icon: FiHeart, title: 'Weddings', desc: 'Luxury dessert stations designed to make your special day memorable.' },
  { icon: FiUsers, title: 'Private Events', desc: 'Exclusive catering setups tailored to your private gatherings and parties.' },
];

export const Catering = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30">
        
        {/* Catering Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge="Gourmet Events"
            title="Martin's Roll Catering"
            subtitle="We provide catering for:"
          />

          <div className="mt-6 flex justify-center">
            <a href="#catering-form">
              <Button variant="primary" size="lg" icon={FiArrowDown}>
                Request Catering
              </Button>
            </a>
          </div>
        </div>

        {/* Catering Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATERING_SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-amber-900/10 hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-olive/10 text-brand-olive flex items-center justify-center text-2xl mb-6 mx-auto group-hover:bg-brand-olive group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Catering Form */}
        <div id="catering-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Get Started"
            title="Request Catering"
            subtitle="Fill out the form below and we will contact you to confirm your catering details."
          />
          <CateringForm />
        </div>

      </div>
    </PageTransition>
  );
};
export default Catering;
