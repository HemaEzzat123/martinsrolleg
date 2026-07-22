import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { Button } from '../common/Button';

export const FranchiseForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Franchise application submitted:', data);
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
          <FiCheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark dark:text-brand-cream">
            Franchise Application Received!
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm">
            Thank you for your interest in investing with Martins Rolleg. Our franchise development director will review your details and connect within 3 business days.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Mohammad Al-Rashid"
                {...register('fullName', { required: 'Full name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+966 50 123 4567"
                {...register('phone', { required: 'Phone number is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
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
                placeholder="investor@domain.com"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Target City *
              </label>
              <input
                type="text"
                placeholder="e.g. Riyadh, Kuwait City, Muscat"
                {...register('city', { required: 'City is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.city ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Country *
              </label>
              <input
                type="text"
                placeholder="Saudi Arabia, UAE, Qatar, Egypt..."
                {...register('country', { required: 'Country is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.country ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>}
            </div>

            {/* Investment Budget */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Investment Budget *
              </label>
              <select
                {...register('budget', { required: 'Investment budget selection is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.budget ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <option value="">Select Budget Range</option>
                <option value="500k-1m">$500,000 - $1,000,000 USD</option>
                <option value="1m-2.5m">$1,000,000 - $2,500,000 USD</option>
                <option value="2.5m+">$2,500,000+ USD (Area Development)</option>
              </select>
              {errors.budget && <p className="mt-1 text-xs text-red-500">{errors.budget.message}</p>}
            </div>

          </div>

          {/* Business Experience */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              F&B / Business Experience *
            </label>
            <input
              type="text"
              placeholder="Briefly describe your existing multi-unit retail or restaurant management background..."
              {...register('experience', { required: 'Experience summary is required' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                errors.experience ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            />
            {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>}
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Additional Notes / Franchise Plan
            </label>
            <textarea
              rows="4"
              placeholder="Tell us why you want to introduce Martins Rolleg to your market..."
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="gold" size="lg" fullWidth icon={FiSend}>
            Apply for Franchise Partnership
          </Button>
        </form>
      )}
    </div>
  );
};
