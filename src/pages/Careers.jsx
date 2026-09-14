import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { CareersForm } from '../components/forms/CareersForm';
import { useLanguage } from '../context/LanguageContext';

export const Careers = ({ isSection = false }) => {
  const { t } = useLanguage();
  const positions = t('careers.positions');

  const careersContent = (
    <div className={`relative ${isSection ? 'py-14 md:py-20' : 'pt-32 pb-20 min-h-screen'} bg-brand-cream text-brand-dark overflow-hidden`}>
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionTitle
            badge={t('careers.badge')}
            title={t('careers.title')}
            subtitle={t('careers.subtitle')}
          />

          {/* Open Positions Pills */}
          <div className="mb-12 text-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#16241F] mb-4">
              {t('careers.hiringFor')}
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
              {Array.isArray(positions) && positions.map((pos) => (
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
  );

  if (isSection) {
    return careersContent;
  }

  return <PageTransition>{careersContent}</PageTransition>;
};

export default Careers;
