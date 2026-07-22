import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BRANCHES } from '../data/branches';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { ContactForm } from '../components/forms/ContactForm';

export const Contact = () => {
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0]);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Visit Our Bakeries"
            title="Branches & Contact"
            subtitle="Find a Martins Rolleg bakery near you or reach out to our guest relations team."
          />

          {/* Branch Picker Tabs */}
          <div className="flex justify-center space-x-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
            {BRANCHES.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeBranch.id === branch.id
                    ? 'bg-brand-olive text-white shadow-md dark:bg-brand-gold dark:text-brand-dark'
                    : 'bg-white dark:bg-brand-charcoal text-gray-700 dark:text-gray-300 hover:bg-brand-cream dark:hover:bg-gray-800'
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-lg border border-amber-900/10 dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase font-bold text-brand-olive dark:text-brand-gold tracking-widest">
                  {activeBranch.city} Branch
                </span>
                <h3 className="text-2xl font-bold font-heading text-brand-dark dark:text-brand-cream mt-1 mb-6">
                  {activeBranch.name}
                </h3>

                <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <FiMapPin className="w-5 h-5 text-brand-olive dark:text-brand-gold shrink-0 mt-0.5" />
                    <span>{activeBranch.address}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FiPhone className="w-5 h-5 text-brand-olive dark:text-brand-gold shrink-0" />
                    <a href={`tel:${activeBranch.phone}`} className="hover:underline">{activeBranch.phone}</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaWhatsapp className="w-5 h-5 text-emerald-500 shrink-0" />
                    <a href={`https://wa.me/${activeBranch.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:underline">{activeBranch.whatsapp}</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FiMail className="w-5 h-5 text-brand-olive dark:text-brand-gold shrink-0" />
                    <a href={`mailto:${activeBranch.email}`} className="hover:underline">{activeBranch.email}</a>
                  </li>
                  <li className="flex items-start space-x-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <FiClock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-xs uppercase text-gray-400 block mb-0.5">Working Hours</span>
                      <span>{activeBranch.hours}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={`https://maps.google.com/?q=${activeBranch.coordinates.lat},${activeBranch.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-brand-olive dark:text-brand-gold uppercase tracking-wider hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Google Map Placeholder Frame */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-amber-900/10 dark:border-white/10 h-[380px] lg:h-auto min-h-[350px]">
              <iframe
                title={`Google Map - ${activeBranch.name}`}
                src={activeBranch.googleMapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[30%] contrast-[105%]"
              ></iframe>
            </div>

          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              badge="Send a Message"
              title="Get in Touch"
              subtitle="Have questions about orders, special dietary requests, or branch feedback? Drop us a message below."
            />
            <ContactForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
export default Contact;
