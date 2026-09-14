import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const TARGET_PHONE = '01118822595';
export const WHATSAPP_NUMBER = '201118822595';

export const ContactForm = () => {
  const { t, isAr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const textMessage = `*New Contact Inquiry from Martins Roll Website* 🌀%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(data.name)}%0A` +
      `📧 *Email:* ${encodeURIComponent(data.email)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(data.phone || 'N/A')}%0A` +
      `📍 *Branch:* ${encodeURIComponent(data.branch || 'General Inquiry')}%0A%0A` +
      `💬 *Message:*%0A${encodeURIComponent(data.message)}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${textMessage}`;
    
    // Open WhatsApp directly to send the message to 01118822595
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <div className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-xl border border-amber-900/10 dark:border-white/10">
      
      {/* Quick Direct WhatsApp Header */}
      <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
          <FaWhatsapp className="w-6 h-6 shrink-0" />
          <span className="text-xs font-bold">
            {t('contact.directSupport')}{' '}
            <strong className="text-sm font-extrabold" dir="ltr">{TARGET_PHONE}</strong>
          </span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold flex items-center gap-1 transition-colors shadow-sm cursor-pointer"
        >
          <span>{t('contact.chatNow')}</span>
        </a>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-brand-cream">
            {t('contact.form.successTitle')}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {t('contact.form.successDesc')}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
              {t('contact.form.nameLabel')}
            </label>
            <input
              type="text"
              placeholder={t('contact.form.namePlaceholder')}
              {...register('name', { required: t('contact.form.nameRequired') })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                {t('contact.form.emailLabel')}
              </label>
              <input
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                dir="ltr"
                {...register('email', { required: t('contact.form.emailRequired'), pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                {t('contact.form.phoneLabel')}
              </label>
              <input
                type="tel"
                placeholder={t('contact.form.phonePlaceholder')}
                dir="ltr"
                {...register('phone')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
              {t('contact.form.branchLabel')}
            </label>
            <select
              {...register('branch')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            >
              <option value="General Inquiry">{t('contact.form.generalInquiry')}</option>
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.name}>{b.city} - {b.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
              {t('contact.form.messageLabel')}
            </label>
            <textarea
              rows="4"
              placeholder={t('contact.form.messagePlaceholder')}
              {...register('message', { required: t('contact.form.messageRequired') })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FaWhatsapp} className="bg-emerald-600 hover:bg-emerald-700 border-none text-white font-bold">
            {t('contact.form.submitBtn')}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
