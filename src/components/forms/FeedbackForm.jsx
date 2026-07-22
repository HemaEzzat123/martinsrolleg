import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiSend, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const newFeedback = {
      id: Date.now(),
      name: data.name,
      orderNumber: data.orderNumber || '',
      rating,
      comment: data.message,
      date: 'Just now',
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage so it persists in the browser
    try {
      const existing = JSON.parse(localStorage.getItem('martins_customer_feedback') || '[]');
      const updated = [newFeedback, ...existing];
      localStorage.setItem('martins_customer_feedback', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving feedback:', e);
    }

    if (onFeedbackSubmit) {
      onFeedbackSubmit(newFeedback);
    }

    setSubmitted(true);
    reset();
    setRating(5);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      
      {/* Google Reviews Direct Action Buttons - Deep Brand Olive Card */}
      <div className="bg-[#2C463D] text-white p-6 md:p-8 rounded-3xl shadow-xl border border-[#2C463D]/30 text-center">
        <h4 className="text-xl font-extrabold font-heading text-[#F8EFE3] mb-1">
          Leave a Google Review ⭐
        </h4>
        <p className="text-sm text-[#F8EFE3]/90 mb-5 font-medium">
          Love our cinnamon rolls? Support your favorite Cairo branch on Google Maps!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {BRANCHES.map((b) => (
            <a
              key={b.id}
              href={b.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#F8EFE3] hover:bg-white text-[#2C463D] rounded-full text-xs font-extrabold flex items-center justify-center space-x-2 shadow-md transition-all transform hover:scale-105"
            >
              <FiMapPin className="w-4 h-4 text-[#B88236]" />
              <span>{b.name} Review</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Main Feedback Form Card */}
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-olive/20">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <FiCheckCircle className="w-16 h-16 text-[#2C463D] mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading text-[#16241F]">
              Thank You for Your Feedback!
            </h3>
            <p className="mt-2 text-[#2D423A] text-sm font-medium">
              Your feedback has been published below under <strong>Recent Customer Reviews</strong>!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Star Rating Picker */}
            <div className="text-center pb-5 border-b border-gray-100">
              <label className="block text-sm font-extrabold text-[#16241F] uppercase tracking-wider mb-2">
                Rating / التقييم *
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
                      className={`w-9 h-9 ${
                        star <= (hoverRating || rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm font-bold text-[#2C463D] mt-2">
                {rating === 5 ? 'Excellent ⭐⭐⭐⭐⭐' : rating === 4 ? 'Very Good ⭐⭐⭐⭐' : rating === 3 ? 'Good ⭐⭐⭐' : 'Fair'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                  Name / الاسم *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name.message}</p>}
              </div>

              {/* Phone (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="01118822595"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors"
                />
              </div>

              {/* Order Number */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                  Order Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. #MR-1082"
                  {...register('orderNumber')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Feedback Message / الملاحظات *
              </label>
              <textarea
                rows="4"
                placeholder="Share your experience with us..."
                {...register('message', { required: 'Message is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
              Submit Feedback
            </Button>
          </form>
        )}
      </div>

    </div>
  );
};

export default FeedbackForm;
