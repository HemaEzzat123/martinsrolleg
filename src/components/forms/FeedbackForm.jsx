import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiSend } from 'react-icons/fi';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const FeedbackForm = () => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const feedbackPayload = { ...data, rating };
    console.log('Customer feedback submitted:', feedbackPayload);
    setSubmitted(true);
    reset();
    setRating(5);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white dark:bg-brand-charcoal p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10 dark:border-white/10 max-w-2xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark dark:text-brand-cream">
            Thank You for Your Feedback!
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
            We deeply appreciate your review. Your input helps Martins Rolleg maintain our world-class pastry standard.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Star Rating Picker */}
          <div className="text-center pb-4 border-b border-gray-100 dark:border-gray-800">
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
              How was your experience? *
            </label>
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-125 focus:outline-none"
                >
                  <FiStar
                    className={`w-8 h-8 ${
                      star <= (hoverRating || rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300 dark:text-gray-600'
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
            <p className="text-xs font-semibold text-brand-olive dark:text-brand-gold mt-2">
              {rating === 5 ? 'Extremely Satisfied ⭐⭐⭐⭐⭐' : rating === 4 ? 'Very Good ⭐⭐⭐⭐' : rating === 3 ? 'Average ⭐⭐⭐' : 'Needs Improvement'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="Sarah Ahmed"
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+966 50 123 4567"
                {...register('phone', { required: 'Phone is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Order Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Order Number (Optional)
              </label>
              <input
                type="text"
                placeholder="#MR-8921"
                {...register('orderNumber')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
              />
            </div>

            {/* Branch */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Visited Branch *
              </label>
              <select
                {...register('branch', { required: 'Please select visited branch' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.branch ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <option value="">Select Branch</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.city} - {b.name}
                  </option>
                ))}
                <option value="Delivery">Online Delivery / App</option>
              </select>
              {errors.branch && <p className="mt-1 text-xs text-red-500">{errors.branch.message}</p>}
            </div>

          </div>

          {/* Feedback Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Your Feedback & Comments *
            </label>
            <textarea
              rows="4"
              placeholder="Tell us what you loved about our cinnamon rolls, service, or store ambiance..."
              {...register('message', { required: 'Feedback message is required' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
          </div>

          <Button type="submit" variant="gold" size="lg" fullWidth icon={FiSend}>
            Submit Feedback
          </Button>
        </form>
      )}
    </div>
  );
};
