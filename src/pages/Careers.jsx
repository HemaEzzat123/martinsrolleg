import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiSmile, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
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
      <div className="pt-32 pb-20 bg-brand-cream/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold uppercase tracking-widest text-brand-olive bg-brand-olive/10 rounded-full">
              👨‍🍳 Hiring
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark">
              Join Our Team
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              We're always looking for energetic, passionate people to grow with us.
            </p>
          </div>

          {/* Available Positions */}
          <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-3xl shadow-sm border border-amber-900/10 text-center">
            <h3 className="text-xl font-bold font-heading text-brand-dark mb-6">
              Available Positions
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {POSITIONS.map((pos) => (
                <div
                  key={pos}
                  className="p-4 rounded-2xl bg-brand-cream/50 border border-brand-olive/20 flex items-center justify-center space-x-2 text-brand-dark font-bold text-sm shadow-sm"
                >
                  <FiCheckCircle className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>{pos}</span>
                </div>
              ))}
            </div>
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
