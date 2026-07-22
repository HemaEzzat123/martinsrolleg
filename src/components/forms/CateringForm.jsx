import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { Button } from '../common/Button';

export const CateringForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Catering request submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white dark:bg-brand-charcoal p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10 dark:border-white/10">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-olive dark:text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark dark:text-brand-cream">
            Catering Request Received!
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm">
            Thank you for contacting Martins Rolleg Catering. Our events team will reach out to you within 24 hours to customize your menu.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Company Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Company / Event Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Aramco Annual Gala / Sarah's Birthday"
                {...register('companyName', { required: 'Company/Event Name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.companyName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
            </div>

            {/* Contact Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Contact Person Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                {...register('contactName', { required: 'Contact Name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.contactName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.contactName && <p className="mt-1 text-xs text-red-500">{errors.contactName.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+966 50 000 0000"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9+-- ]{8,18}$/, message: 'Please enter a valid phone number' }
                })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="event@company.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Event Date *
              </label>
              <input
                type="date"
                {...register('eventDate', { required: 'Event date is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.eventDate ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.eventDate && <p className="mt-1 text-xs text-red-500">{errors.eventDate.message}</p>}
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                placeholder="50"
                min="10"
                {...register('numberOfGuests', { required: 'Number of guests is required', min: { value: 10, message: 'Minimum 10 guests' } })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.numberOfGuests ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.numberOfGuests && <p className="mt-1 text-xs text-red-500">{errors.numberOfGuests.message}</p>}
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Event Details & Special Requests
            </label>
            <textarea
              rows="4"
              placeholder="Tell us more about your event theme, dietary requirements, or live coffee setup preference..."
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
            Request Catering Package
          </Button>
        </form>
      )}
    </div>
  );
};
