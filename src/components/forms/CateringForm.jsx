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
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-olive mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark">
            Catering Request Received!
          </h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto text-sm">
            Thank you for contacting Martin's Roll Catering. Our team will get back to you shortly.
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

            {/* Company */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                placeholder="Company Name"
                {...register('company')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="+20 100 000 0000"
                {...register('phone', { required: 'Phone number is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Date *
              </label>
              <input
                type="date"
                {...register('date', { required: 'Event date is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.date ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
            </div>

            {/* Number of Guests */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                placeholder="e.g. 50"
                min="1"
                {...register('numberOfGuests', { required: 'Number of guests is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.numberOfGuests ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.numberOfGuests && <p className="mt-1 text-xs text-red-500">{errors.numberOfGuests.message}</p>}
            </div>

          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Notes
            </label>
            <textarea
              rows="4"
              placeholder="Any special notes or requirements..."
              {...register('notes')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
            Request Catering
          </Button>
        </form>
      )}
    </div>
  );
};
