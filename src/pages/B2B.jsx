import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiBox, FiCheck, FiArrowDown, FiLayers } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { B2BForm } from '../components/forms/B2BForm';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';

const SERVICE_ICONS = [FiShoppingBag, FiBox, FiLayers, FiCheck];

export const B2B = ({ isSection = false }) => {
  const { t } = useLanguage();
  const workWithList = t('b2b.workWith');
  const servicesList = t('b2b.services');

  const b2bContent = (
    <div className={`relative ${isSection ? 'py-14 md:py-20' : 'pt-32 pb-20 min-h-screen'} bg-brand-cream text-brand-dark overflow-hidden`}>
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero */}
          <div className="text-center mb-16">
            <SectionTitle
              badge={t('b2b.badge')}
              title={t('b2b.title')}
              subtitle={t('b2b.subtitle')}
            />

            {/* We Work With Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6 mb-12">
              {Array.isArray(workWithList) && workWithList.map((item, idx) => (
                <motion.div
                  key={item.name || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl shadow-md border border-brand-olive/15 text-center"
                >
                  <h4 className="text-lg font-bold font-heading text-[#16241F] mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#2D423A] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <a href="#b2b-form">
                <Button variant="primary" size="lg" icon={FiArrowDown}>
                  {t('b2b.contactBtn')}
                </Button>
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(servicesList) && servicesList.map((s, idx) => {
                const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
                return (
                  <motion.div
                    key={s.name || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-md border border-brand-olive/15 text-center group hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-olive/10 text-brand-olive flex items-center justify-center text-2xl mb-6 mx-auto group-hover:bg-brand-olive group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-[#16241F] mb-2">
                      {s.name}
                    </h3>
                    <p className="text-sm text-[#2D423A] font-medium leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Application Form */}
          <div id="b2b-form" className="max-w-3xl mx-auto">
            <SectionTitle
              badge={t('b2b.formBadge')}
              title={t('b2b.formTitle')}
              subtitle={t('b2b.formSubtitle')}
            />
            <B2BForm />
          </div>

        </div>
      </div>
  );

  if (isSection) {
    return b2bContent;
  }

  return <PageTransition>{b2bContent}</PageTransition>;
};

export default B2B;
