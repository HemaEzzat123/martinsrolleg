import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiSend, FiMapPin, FiExternalLink } from 'react-icons/fi';
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
    <div className="space-y-10 max-w-2xl mx-auto">
      
      {/* Google Reviews Direct Action Buttons */}
      <div className="bg-gradient-to-r from-brand-olive/10 to-brand-gold/10 p-6 rounded-3xl border border-brand-olive/20 text-center">
        <h4 className="text-lg font-bold font-heading text-brand-dark mb-1">
          Leave a Google Review ⭐
        </h4>
        <p className="text-xs text-gray-600 mb-4">
          Love our cinnamon rolls? Support your favorite branch on Google Maps!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {BRANCHES.map((b) => (
            <a
              key={b.id}
              href={b.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-white text-brand-dark border border-gray-200 hover:border-brand-olive hover:text-brand-olive rounded-full text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition-all"
            >
              <FiMapPin className="w-4 h-4 text-brand-gold" />
              <span>{b.name} Review</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Main Feedback Form */}
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <FiCheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading text-brand-dark">
              Thank You for Your Feedback!
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              We appreciate your review and look forward to serving you again.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Star Rating Picker */}
            <div className="text-center pb-4 border-b border-gray-100">
              <label className="block text-sm font-bold text-brand-dark uppercase tracking-wider mb-2">
                قيم الخدمة
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
                          : 'text-gray-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs font-semibold text-brand-olive mt-2">
                {rating === 5 ? 'Excellent ⭐⭐⭐⭐⭐' : rating === 4 ? 'Very Good ⭐⭐⭐⭐' : rating === 3 ? 'Good ⭐⭐⭐' : 'Fair'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              {/* Phone (Optional / اختياري) */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Phone (اختياري / Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
                />
              </div>

              {/* Order Number */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. #MR-1082"
                  {...register('orderNumber')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                rows="4"
                placeholder="Share your experience with us..."
                {...register('message', { required: 'Message is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.message ? 'border-red-500' : 'border-gray-200'
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

    </div>
  );
};
