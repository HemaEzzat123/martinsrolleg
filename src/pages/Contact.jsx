import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BRANCHES } from '../data/branches';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { ContactForm } from '../components/forms/ContactForm';
import { useLanguage } from '../context/LanguageContext';

export const Contact = ({ isSection = false }) => {
  const { t, isAr } = useLanguage();
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0]);

  const contactContent = (
    <div className={`relative ${isSection ? 'py-14 md:py-20' : 'pt-32 pb-20 min-h-screen'} bg-brand-cream text-brand-dark overflow-hidden`}>
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionTitle
            badge={t('contact.badge')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          {/* Branch Picker Tabs */}
          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
            {BRANCHES.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeBranch.id === branch.id
                    ? 'bg-[#2C463D] text-white shadow-md'
                    : 'bg-white text-[#16241F] border border-brand-olive/15 hover:bg-brand-cream'
                }`}
              >
                {branch.city} - {branch.name}
              </button>
            ))}
          </div>

          {/* Active Branch Details & Google Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Branch Info Card */}
            <motion.div
              key={activeBranch.id}
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-lg border border-brand-olive/15 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase font-bold text-brand-olive tracking-widest">
                  {activeBranch.city} {isAr ? 'فرع' : 'Branch'}
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#16241F] mt-1 mb-6">
                  {activeBranch.name}
                </h3>

                <ul className="space-y-4 text-sm text-[#2D423A]">
                  <li className="flex items-start gap-3">
                    <FiMapPin className="w-5 h-5 text-brand-olive shrink-0 mt-0.5" />
                    <span className="font-medium">{activeBranch.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiPhone className="w-5 h-5 text-brand-olive shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="flex items-center gap-1.5 flex-wrap">
                        <strong className="font-bold text-[#16241F]">{isAr ? 'فرع شيراتون:' : 'Sheraton:'}</strong>
                        <a href="tel:01118822595" className="hover:underline font-bold" dir="ltr">01118822595</a>
                      </p>
                   
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaWhatsapp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="flex items-center gap-1.5 flex-wrap">
                        <strong className="font-bold text-[#16241F]">{isAr ? 'واتساب شيراتون:' : 'Sheraton WhatsApp:'}</strong>
                        <a href="https://wa.me/201118822595" target="_blank" rel="noreferrer" className="hover:underline font-bold text-emerald-700" dir="ltr">01118822595</a>
                      </p>
                  
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiMail className="w-5 h-5 text-brand-olive shrink-0" />
                    <a href={`mailto:${activeBranch.email}`} className="hover:underline font-medium" dir="ltr">{activeBranch.email}</a>
                  </li>
                  <li className="flex items-start gap-3 pt-2 border-t border-gray-100">
                    <FiClock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-xs uppercase text-gray-500 block mb-0.5">
                        {t('contact.hoursLabel')}
                      </span>
                      <span className="font-semibold text-[#16241F]">{activeBranch.hours}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={activeBranch.googleReviewUrl || `https://maps.google.com/?q=${activeBranch.coordinates.lat},${activeBranch.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-olive uppercase tracking-wider hover:underline"
                >
                  <span>{t('contact.openInMaps')}</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Google Map Frame */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-brand-olive/15 h-[380px] lg:h-auto min-h-[350px] bg-white">
              <iframe
                title={`Google Map - ${activeBranch.name}`}
                src={activeBranch.googleMapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[20%] contrast-[105%]"
              ></iframe>
            </div>

          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              badge={t('contact.formBadge')}
              title={t('contact.formTitle')}
              subtitle={t('contact.formSubtitle')}
            />
            <ContactForm />
          </div>

        </div>
      </div>
  );

  if (isSection) {
    return contactContent;
  }

  return <PageTransition>{contactContent}</PageTransition>;
};

export default Contact;
