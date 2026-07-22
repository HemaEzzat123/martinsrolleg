import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../common/Button';

export const FranchiseForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Format WhatsApp message
    const message = `*New Franchise Application - Martin's Roll* 🏢\n\n` +
      `• *Full Name:* ${data.fullName || 'N/A'}\n` +
      `• *Country:* ${data.country || 'N/A'}\n` +
      `• *City:* ${data.city || 'N/A'}\n` +
      `• *Phone:* ${data.phone || 'N/A'}\n` +
      `• *Email:* ${data.email || 'N/A'}\n` +
      `• *Investment Budget:* ${data.investmentBudget || 'N/A'}\n` +
      `• *Experience:* ${data.experience || 'N/A'}`;

    const whatsappUrl = `https://wa.me/201118822595?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark">
            Application Sent!
          </h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto text-sm">
            Opening WhatsApp to complete your franchise application.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                {...register('fullName', { required: 'Full name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Country *
              </label>
              <input
                type="text"
                placeholder="Country"
                {...register('country', { required: 'Country is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.country ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                City *
              </label>
              <input
                type="text"
                placeholder="City"
                {...register('city', { required: 'City is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.city ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="01118822595"
                {...register('phone', { required: 'Phone is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="Email Address"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Investment Budget */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Investment Budget *
              </label>
              <input
                type="text"
                placeholder="Target Budget (e.g. $100k - $250k)"
                {...register('investmentBudget', { required: 'Investment budget is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                  errors.investmentBudget ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.investmentBudget && <p className="mt-1 text-xs text-red-500">{errors.investmentBudget.message}</p>}
            </div>

          </div>

          {/* Experience */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Experience *
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your business or food & beverage experience..."
              {...register('experience', { required: 'Experience information is required' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                errors.experience ? 'border-red-500' : 'border-gray-200'
              }`}
            ></textarea>
            {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>}
          </div>

          <Button type="submit" variant="gold" size="lg" fullWidth icon={FaWhatsapp}>
            Apply Now via WhatsApp
          </Button>
        </form>
      )}
    </div>
  );
};
