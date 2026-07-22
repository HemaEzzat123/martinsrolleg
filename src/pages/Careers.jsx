import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { CareersForm } from '../components/forms/CareersForm';

const POSITIONS = [
  'Barista',
  'Cashier',
  'Baker',
  'Kitchen Staff',
  'Delivery Rider',
  'Branch Manager',
];

export const Careers = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream text-brand-dark min-h-screen overflow-hidden">
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionTitle
            badge="👨‍🍳 Hiring"
            title="Join the Martins Roll Team"
            subtitle="Build a sweet career with Cairo's premier cinnamon roll & gourmet bakery."
          />

          {/* Open Positions Pills */}
          <div className="mb-12 text-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#16241F] mb-4">
              We Are Currently Hiring For:
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
              {POSITIONS.map((pos) => (
                <span
                  key={pos}
                  className="px-4 py-2 bg-white text-[#16241F] border border-brand-olive/20 font-bold rounded-full text-xs shadow-sm"
                >
                  ✓ {pos}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <CareersForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Careers;
