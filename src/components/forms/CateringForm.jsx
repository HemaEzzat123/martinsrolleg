import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const CateringForm = () => {
  const { t, isAr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Format WhatsApp message
    const message = `*New Catering Request - Martin's Roll* 🥐\n\n` +
      `• *Name:* ${data.name || 'N/A'}\n` +
      `• *Company:* ${data.company || 'N/A'}\n` +
      `• *Phone:* ${data.phone || 'N/A'}\n` +
      `• *Date:* ${data.date || 'N/A'}\n` +
      `• *Number of Guests:* ${data.numberOfGuests || 'N/A'}\n` +
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
            {t('catering.form.successTitle')}
          </h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            {t('catering.form.successDesc')}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('catering.form.nameLabel')}
              </label>
              <input
                type="text"
                placeholder={t('catering.form.namePlaceholder')}
                {...register('name', { required: t('catering.form.nameRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('catering.form.companyLabel')}
              </label>
              <input
                type="text"
                placeholder={t('catering.form.companyPlaceholder')}
                {...register('company')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('catering.form.phoneLabel')}
              </label>
              <input
                type="tel"
                placeholder={t('catering.form.phonePlaceholder')}
                dir="ltr"
                {...register('phone', { required: t('catering.form.phoneRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('catering.form.dateLabel')}
              </label>
              <input
                type="date"
                {...register('date', { required: t('catering.form.dateRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.date ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
            </div>

            {/* Number of Guests */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('catering.form.guestsLabel')}
              </label>
              <input
                type="number"
                placeholder={t('catering.form.guestsPlaceholder')}
                min="1"
                {...register('numberOfGuests', { required: t('catering.form.guestsRequired') })}
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
              {t('catering.form.notesLabel')}
            </label>
            <textarea
              rows="4"
              placeholder={t('catering.form.notesPlaceholder')}
              {...register('notes')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FaWhatsapp}>
            {t('catering.form.submitBtn')}
          </Button>
        </form>
      )}
    </div>
  );
};

export default CateringForm;
