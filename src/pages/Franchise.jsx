import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiShield, FiPieChart, FiArrowDown } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FranchiseForm } from '../components/forms/FranchiseForm';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';

const BENEFIT_ICONS = [FiTrendingUp, FiShield, FiPieChart, FiCheckCircle];

export const Franchise = ({ isSection = false }) => {
  const { t } = useLanguage();
  const benefits = t('franchise.benefits');

  const franchiseContent = (
    <div className={`relative ${isSection ? 'py-14 md:py-20' : 'pt-32 pb-20 min-h-screen'} bg-[#F8EFE3]/60`}>
        
        {/* Franchise Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge={t('franchise.badge')}
            title={t('franchise.title')}
            subtitle={t('franchise.subtitle')}
          />

          <div className="mt-6 flex justify-center">
            <a href="#franchise-form">
              <Button variant="primary" size="lg" icon={FiArrowDown}>
                {t('franchise.applyBtn')}
              </Button>
            </a>
          </div>
        </div>

        {/* Why Martin's Roll Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(benefits) && benefits.map((b, idx) => {
              const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
              return (
                <motion.div
                  key={b.title || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-md border border-[#2C463D]/15 hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2C463D]/10 text-[#2C463D] flex items-center justify-center text-2xl mb-6 mx-auto group-hover:bg-[#2C463D] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#16241F] dark:text-brand-cream mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#2D423A] dark:text-gray-300 leading-relaxed font-medium">
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
            badge={t('franchise.formBadge')}
            title={t('franchise.formTitle')}
            subtitle={t('franchise.formSubtitle')}
          />
          <FranchiseForm />
        </div>

      </div>
  );

  if (isSection) {
    return franchiseContent;
  }

  return <PageTransition>{franchiseContent}</PageTransition>;
};

export default Franchise;
