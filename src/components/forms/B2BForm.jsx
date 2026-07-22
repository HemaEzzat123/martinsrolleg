import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../common/Button';

export const B2BForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Format WhatsApp message
    const message = `*New B2B Partner Inquiry - Martin's Roll* 🤝\n\n` +
      `• *Name:* ${data.name || 'N/A'}\n` +
      `• *Email:* ${data.email || 'N/A'}\n` +
      `• *Phone:* ${data.phone || 'N/A'}\n` +
      `• *Place/Business:* ${data.place || 'N/A'}\n` +
      `• *Notes:* ${data.notes || 'None'}`;

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
          <FiCheckCircle className="w-16 h-16 text-brand-olive mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark">
            Partner Request Sent!
          </h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto text-sm">
            Opening WhatsApp to complete your partnership inquiry.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="01118822595"
                {...register('phone', { required: 'Phone number is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Place */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Place / Business Location *
              </label>
              <input
                type="text"
                placeholder="e.g. Cafe Name / Location"
                {...register('place', { required: 'Place is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.place ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.place && <p className="mt-1 text-xs text-red-500">{errors.place.message}</p>}
            </div>

          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Notes
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your business requirement..."
              {...register('notes')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FaWhatsapp}>
            Become a Partner via WhatsApp
          </Button>
        </form>
      )}
    </div>
  );
};
