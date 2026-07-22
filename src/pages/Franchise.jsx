import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiShield, FiBook, FiPieChart, FiArrowRight } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FranchiseForm } from '../components/forms/FranchiseForm';
import { Button } from '../components/common/Button';

const BENEFITS = [
  {
    icon: FiTrendingUp,
    title: 'High Profit Margin Model',
    description: 'Proven unit economics with average gross margins exceeding 72% across company-owned and franchised locations.',
  },
  {
    icon: FiPieChart,
    title: 'Rapid Return on Capital',
    description: 'Streamlined kitchen footprint (40 - 120 sqm) minimizing initial capital expenditure and payback period.',
  },
  {
    icon: FiShield,
    title: 'Protected Territorial Rights',
    description: 'Exclusive city or regional development rights to capture high-value commercial real estate locations.',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Application', desc: 'Submit franchise inquiry form.' },
  { step: '02', title: 'Discovery', desc: 'Initial qualification call & financial review.' },
  { step: '03', title: 'Approval', desc: 'Franchise agreement signing & site selection.' },
  { step: '04', title: 'Buildout & Training', desc: 'Store construction & 4-week staff academy.' },
  { step: '05', title: 'Grand Opening', desc: 'On-site launching support & marketing drive.' },
];

export const Franchise = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715]">
        
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge="Global Franchise Opportunity"
            title="Invest with Martins Rolleg"
            subtitle="Partner with the Middle East's fastest-growing premium cinnamon roll and gourmet coffee brand."
          />

          <div className="mt-8 flex justify-center">
            <a href="#franchise-form">
              <Button variant="gold" size="lg" icon={FiArrowRight}>
                Apply for Franchise
              </Button>
            </a>
          </div>
        </div>

        {/* Why Franchise & Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-sm border border-amber-900/10 dark:border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-2xl mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-brand-cream mb-3">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Support & Training Grid */}
        <div className="bg-white dark:bg-brand-charcoal py-16 mb-20 border-y border-amber-900/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              badge="Full Turnkey Operations"
              title="Support & Training Package"
              subtitle="We empower every franchisee with comprehensive operational tools and central supply chain security."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Site Selection & Design', text: 'Architectural layouts & location analytics.' },
                { title: 'Central Supply Chain', text: 'Proprietary premix dry dough & glaze supply.' },
                { title: 'Martins Academy Training', text: '30-day intensive barista & baker certification.' },
                { title: 'Marketing & PR Launch', text: 'Influencer campaigns & social media strategy.' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-brand-cream/30 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700">
                  <FiCheckCircle className="w-8 h-8 text-brand-olive dark:text-brand-gold mb-4" />
                  <h4 className="text-lg font-bold font-heading text-brand-dark dark:text-brand-cream">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Franchise Process Step Timeline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionTitle
            badge="Roadmap to Ownership"
            title="The Franchise Process"
            subtitle="Five straightforward steps from your initial application to grand opening day."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="bg-white dark:bg-brand-charcoal p-6 rounded-2xl shadow-sm border border-amber-900/10 dark:border-white/10 relative">
                <span className="text-3xl font-extrabold font-heading text-brand-gold block mb-2">{s.step}</span>
                <h4 className="text-base font-bold text-brand-dark dark:text-brand-cream">{s.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="franchise-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Partner With Us"
            title="Apply for Franchise"
            subtitle="Complete the investment profile below to start your partnership journey."
          />
          <FranchiseForm />
        </div>

      </div>
    </PageTransition>
  );
};
export default Franchise;
