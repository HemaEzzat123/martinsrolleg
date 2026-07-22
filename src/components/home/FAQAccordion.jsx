import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { FAQS } from '../../data/faqs';
import { SectionTitle } from '../common/SectionTitle';

export const FAQAccordion = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-brand-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our products, daily baking schedule, catering & franchise opportunities."
        />

        {/* Category Tabs */}
        <div className="flex justify-center space-x-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {FAQS.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => {
                setActiveCategory(idx);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === idx
                  ? 'bg-brand-olive text-white shadow-md dark:bg-brand-gold dark:text-brand-dark'
                  : 'bg-brand-cream/50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-brand-cream dark:hover:bg-gray-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS[activeCategory].questions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-brand-cream/20 dark:bg-gray-800/30"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark dark:text-brand-cream font-heading text-lg focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full text-brand-olive dark:text-brand-gold shrink-0 ml-4"
                  >
                    <FiChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800/50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
