import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-xl border border-amber-900/10 dark:border-white/10">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-14 h-14 text-brand-olive dark:text-brand-gold mx-auto mb-3" />
          <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-brand-cream">
            Message Sent!
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
            Thank you for writing to Martins Rolleg. We will reply to your email within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+966 50 000 0000"
                {...register('phone')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
              Select Branch
            </label>
            <select
              {...register('branch')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            >
              <option value="General">General Inquiry</option>
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.name}>{b.city} - {b.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
              Message *
            </label>
            <textarea
              rows="4"
              placeholder="How can we assist you?"
              {...register('message', { required: 'Message is required' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
};
