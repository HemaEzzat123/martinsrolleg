import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGift, FiBookOpen, FiAward, FiHeart, FiCheck } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { CateringForm } from '../components/forms/CateringForm';
import { Button } from '../components/common/Button';

const EVENT_TYPES = [
  {
    icon: FiBriefcase,
    title: 'Corporate Events',
    description: 'Elevate board meetings, quarterly conferences, and team breakfasts with warm artisan rolls and espresso bars.',
  },
  {
    icon: FiGift,
    title: 'Birthday Parties',
    description: 'Make celebrations unforgettable with custom cinnamon roll towers, mini donut boxes, and dessert live stations.',
  },
  {
    icon: FiBookOpen,
    title: 'Universities',
    description: 'Graduation ceremonies, faculty gatherings, and student events catered with fast single-serve warm rolls.',
  },
  {
    icon: FiAward,
    title: 'Schools & Academies',
    description: 'Teacher appreciation days and parent-teacher association events with nut-free and kid-friendly pastry options.',
  },
  {
    icon: FiHeart,
    title: 'Private Events & Weddings',
    description: 'Luxury dessert tables, custom glazed rolls, and barista bars tailored to your aesthetic theme.',
  },
];

export const Catering = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715]">
        
        {/* Catering Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle
            badge="Gourmet Events & Parties"
            title="Martins Catering Experience"
            subtitle="Bring the irresistible aroma and warm luxury of Martins Rolleg to your next event."
          />

          <div className="mt-8 flex justify-center">
            <a href="#catering-form">
              <Button variant="primary" size="lg">
                Request Catering Proposal
              </Button>
            </a>
          </div>
        </div>

        {/* Event Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_TYPES.map((event, idx) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-sm border border-amber-900/10 dark:border-white/10 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-olive/10 dark:bg-brand-gold/10 text-brand-olive dark:text-brand-gold flex items-center justify-center text-2xl mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-brand-cream mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What's Included Banner */}
        <div className="bg-brand-olive text-white py-16 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">
                  Full Service Guarantee
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mt-2">
                  What's Included in Our Catering?
                </h2>
                <p className="mt-4 text-white/90 text-base leading-relaxed">
                  We don't just drop off food—we deliver a complete luxury bakery experience for your guests.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Insulated Thermal Display Units',
                  'Fresh On-Site Warm Glaze Drizzle',
                  'Specialty Barista Station Option',
                  'Customized Branded Packaging',
                  'Dietary Friendly Selections',
                  'Dedicated Event Manager'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                    <FiCheck className="w-5 h-5 text-brand-gold shrink-0" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Catering Request Form Section */}
        <div id="catering-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Book Your Date"
            title="Request Catering Form"
            subtitle="Fill out your event details below and our catering coordinator will craft a custom quote for you."
          />
          <CateringForm />
        </div>

      </div>
    </PageTransition>
  );
};
export default Catering;
