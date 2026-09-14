import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const B2BForm = () => {
  const { t, isAr } = useLanguage();
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
            {t('b2b.form.successTitle')}
          </h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            {t('b2b.form.successDesc')}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('b2b.form.nameLabel')}
              </label>
              <input
                type="text"
                placeholder={t('b2b.form.namePlaceholder')}
                {...register('name', { required: t('b2b.form.nameRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('b2b.form.emailLabel')}
              </label>
              <input
                type="email"
                placeholder={t('b2b.form.emailPlaceholder')}
                dir="ltr"
                {...register('email', { required: t('b2b.form.emailRequired'), pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('b2b.form.phoneLabel')}
              </label>
              <input
                type="tel"
                placeholder={t('b2b.form.phonePlaceholder')}
                dir="ltr"
                {...register('phone', { required: t('b2b.form.phoneRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Place */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                {t('b2b.form.placeLabel')}
              </label>
              <input
                type="text"
                placeholder={t('b2b.form.placePlaceholder')}
                {...register('place', { required: t('b2b.form.placeRequired') })}
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
              {t('b2b.form.notesLabel')}
            </label>
            <textarea
              rows="4"
              placeholder={t('b2b.form.notesPlaceholder')}
              {...register('notes')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FaWhatsapp}>
            {t('b2b.form.submitBtn')}
          </Button>
        </form>
      )}
    </div>
  );
};

export default B2BForm;
