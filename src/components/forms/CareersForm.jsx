import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPaperclip } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const CareersForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

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
      
      {/* Option 1: CV Attachment Notice Banner */}
      <div className="mb-6 p-4.5 rounded-2xl bg-[#2C463D]/10 border border-[#2C463D]/25 flex items-start space-x-3 text-left">
        <FiPaperclip className="w-5 h-5 text-[#2C463D] shrink-0 mt-0.5" />
        <div className="text-xs text-[#16241F] font-medium leading-relaxed">
          <strong className="block font-bold text-sm text-[#2C463D] mb-0.5">📎 Note for Job Applicants:</strong>
          After clicking <strong className="text-[#2C463D]">"Apply via WhatsApp"</strong> below, please attach your CV file (PDF/Word) directly in the WhatsApp chat window so HR receives your complete resume.
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
            Application Sent!
          </h3>
          <p className="mt-3 text-[#2D423A] text-sm max-w-md mx-auto font-medium">
            Thank you for applying. Opening WhatsApp to submit your application details. Don't forget to attach your CV file in the chat!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                {...register('fullName', { required: 'Full name is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.fullName.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="01050611391"
                {...register('phone', { required: 'Phone number is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email.message}</p>}
            </div>

            {/* Position */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Position *
              </label>
              <select
                {...register('position', { required: 'Please select a position' })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.position ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Position</option>
                <option value="Barista">Barista</option>
                <option value="Cashier">Cashier</option>
                <option value="Baker">Baker</option>
                <option value="Kitchen Staff">Kitchen Staff</option>
                <option value="Delivery Rider">Delivery Rider</option>
                <option value="Branch Manager">Branch Manager</option>
              </select>
              {errors.position && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.position.message}</p>}
            </div>

            {/* Branch */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Branch *
              </label>
              <select
                {...register('branch', { required: 'Please select target branch' })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors ${
                  errors.branch ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Branch</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
                <option value="Any Branch">Any Branch</option>
              </select>
              {errors.branch && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.branch.message}</p>}
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-xs font-bold text-[#16241F] uppercase tracking-wider mb-2">
                Years of Experience *
              </label>
              <input
                type="text"
                placeholder="e.g. 2 Years"
                {...register('experience', { required: 'Years of experience is required' })}
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
              Cover Note / Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us a little about yourself..."
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#F8EFE3]/40 text-[#16241F] font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2C463D] transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FaWhatsapp}>
            Apply via WhatsApp (Attach CV in Chat)
          </Button>

        </form>
      )}
    </div>
  );
};
