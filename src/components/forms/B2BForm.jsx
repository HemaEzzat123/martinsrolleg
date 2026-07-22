import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { Button } from '../common/Button';

export const B2BForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('B2B request submitted:', data);
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
            Wholesale Request Submitted!
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm">
            Thank you for partnering with Martins Rolleg. Our commercial supply team will send our wholesale product catalog & sample box details to your email.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Company */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Company / Business Name *
              </label>
              <input
                type="text"
                placeholder="Four Seasons Hotel / Craft Cafe"
                {...register('company', { required: 'Company name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
            </div>

            {/* Industry */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Industry Sector *
              </label>
              <select
                {...register('industry', { required: 'Industry sector is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.industry ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <option value="">Select Industry</option>
                <option value="Hotel">Hotels & Hospitality</option>
                <option value="Cafe">Specialty Cafes & Coffee Shops</option>
                <option value="Restaurant">Fine Dining & Restaurants</option>
                <option value="Corporate">Corporate Offices</option>
                <option value="Retail">Retail & Supermarket Chains</option>
              </select>
              {errors.industry && <p className="mt-1 text-xs text-red-500">{errors.industry.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+966 50 999 8888"
                {...register('phone', { required: 'Phone is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Work Email *
              </label>
              <input
                type="email"
                placeholder="purchasing@hotel.com"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

          </div>

          {/* Monthly Requirement */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Estimated Monthly Requirement *
            </label>
            <select
              {...register('monthlyRequirement', { required: 'Monthly requirement selection is required' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                errors.monthlyRequirement ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <option value="">Select Estimated Quantity</option>
              <option value="500-1000">500 - 1,000 units / month</option>
              <option value="1000-5000">1,000 - 5,000 units / month</option>
              <option value="5000+">5,000+ units / month (High volume)</option>
            </select>
            {errors.monthlyRequirement && <p className="mt-1 text-xs text-red-500">{errors.monthlyRequirement.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Partnership Inquiry Message
            </label>
            <textarea
              rows="4"
              placeholder="Provide information on your delivery locations, preferred packaging, or trial sample request..."
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
            Request Wholesale Partnership
          </Button>
        </form>
      )}
    </div>
  );
};
