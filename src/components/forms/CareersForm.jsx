import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPaperclip } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const CareersForm = () => {
  const { t, isAr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const positions = t('careers.positions');

  const onSubmit = (data) => {
    // Format WhatsApp message for HR
    const message = `*New Job Application - Martin's Roll* 👨‍🍳%0A%0A` +
      `👤 *Full Name:* ${encodeURIComponent(data.fullName || 'N/A')}%0A` +
      `📞 *Phone:* ${encodeURIComponent(data.phone || 'N/A')}%0A` +
      `📧 *Email:* ${encodeURIComponent(data.email || 'N/A')}%0A` +
      `💼 *Position Applied For:* ${encodeURIComponent(data.position || 'N/A')}%0A` +
      `📍 *Target Branch:* ${encodeURIComponent(data.branch || 'N/A')}%0A` +
      `⏳ *Years of Experience:* ${encodeURIComponent(data.experience || 'N/A')}%0A` +
      `💬 *Cover Message:* ${encodeURIComponent(data.message || 'None')}%0A%0A` +
      `📎 *Note:* Applicant will attach CV file in this WhatsApp chat.`;

    const whatsappUrl = `https://wa.me/201050611391?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-olive/20 max-w-3xl mx-auto">
      
      {/* CV Attachment Notice Banner */}
      <div className="mb-6 p-4.5 rounded-2xl bg-[#2C463D]/10 border border-[#2C463D]/25 flex items-start gap-3 text-start">
        <FiPaperclip className="w-5 h-5 text-[#2C463D] shrink-0 mt-0.5" />
        <div className="text-xs text-[#16241F] font-medium leading-relaxed">
          <strong className="block font-bold text-sm text-[#2C463D] mb-0.5">{t('careers.cvNoteTitle')}</strong>
          {t('careers.cvNoteDesc')}
        </div>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-olive mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-[#16241F]">
            {t('careers.form.successTitle')}
          </h3>
          <p className="mt-3 text-[#2D423A] text-sm max-w-md mx-auto font-medium leading-relaxed">
            {t('careers.form.successDesc')}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                {t('careers.form.fullNameLabel')}
              </label>
              <input
                type="text"
                placeholder={t('careers.form.fullNamePlaceholder')}
                {...register('fullName', { required: t('careers.form.fullNameRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.fullName.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                {t('careers.form.phoneLabel')}
              </label>
              <input
                type="tel"
                placeholder={t('careers.form.phonePlaceholder')}
                dir="ltr"
                {...register('phone', { required: t('careers.form.phoneRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                {t('careers.form.emailLabel')}
              </label>
              <input
                type="email"
                placeholder={t('careers.form.emailPlaceholder')}
                dir="ltr"
                {...register('email', { required: t('careers.form.emailRequired'), pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email.message}</p>}
            </div>

            {/* Position */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                {t('careers.form.positionLabel')}
              </label>
              <select
                {...register('position', { required: t('careers.form.positionRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.position ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t('careers.form.selectPosition')}</option>
                {Array.isArray(positions) && positions.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
              {errors.position && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.position.message}</p>}
            </div>

            {/* Branch */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                {t('careers.form.branchLabel')}
              </label>
              <select
                {...register('branch', { required: t('careers.form.branchRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.branch ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t('careers.form.selectBranch')}</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
                <option value="Any Branch">{t('careers.form.allBranches')}</option>
              </select>
              {errors.branch && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.branch.message}</p>}
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                {t('careers.form.experienceLabel')}
              </label>
              <input
                type="text"
                placeholder={t('careers.form.experiencePlaceholder')}
                {...register('experience', { required: t('careers.form.experienceRequired') })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.experience ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.experience && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.experience.message}</p>}
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
              {t('careers.form.messageLabel')}
            </label>
            <textarea
              rows="4"
              placeholder={t('careers.form.messagePlaceholder')}
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FaWhatsapp}>
            {t('careers.form.submitBtn')}
          </Button>

        </form>
      )}
    </div>
  );
};

export default CareersForm;
