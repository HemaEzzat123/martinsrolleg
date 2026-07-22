import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUploadCloud, FiFileText, FiSend } from 'react-icons/fi';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const CareersForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setFileError('Please upload a PDF file only.');
        setResumeFile(null);
      } else if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be under 5MB.');
        setResumeFile(null);
      } else {
        setFileError('');
        setResumeFile(file);
      }
    }
  };

  const onSubmit = (data) => {
    if (!resumeFile) {
      setFileError('Please attach your CV in PDF format.');
      return;
    }

    const applicationData = { ...data, resumeFileName: resumeFile.name };
    console.log('Hiring application submitted:', applicationData);
    setSubmitted(true);
    reset();
    setResumeFile(null);
    setFileError('');
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10 max-w-3xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-olive mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark">
            Application Submitted Successfully!
          </h3>
          <p className="mt-3 text-gray-600 text-sm max-w-md mx-auto">
            Thank you for applying to Martin's Roll. Our HR team will review your application and reach out soon.
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
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
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

            {/* Position */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Position *
              </label>
              <select
                {...register('position', { required: 'Please select a position' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.position ? 'border-red-500' : 'border-gray-200'
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
              {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position.message}</p>}
            </div>

            {/* Branch */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Branch *
              </label>
              <select
                {...register('branch', { required: 'Please select target branch' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.branch ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select Branch</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
                <option value="Any Branch">Any Branch</option>
              </select>
              {errors.branch && <p className="mt-1 text-xs text-red-500">{errors.branch.message}</p>}
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Years of Experience *
              </label>
              <input
                type="text"
                placeholder="e.g. 2 Years"
                {...register('experience', { required: 'Years of experience is required' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.experience ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>}
            </div>

          </div>

          {/* Upload CV */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Upload CV *
            </label>
            <div className="relative border-2 border-dashed border-gray-300 hover:border-brand-olive rounded-2xl p-6 text-center transition-colors bg-gray-50/50">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <FiUploadCloud className="w-10 h-10 text-brand-olive" />
                {resumeFile ? (
                  <div className="flex items-center space-x-2 text-sm font-semibold text-green-600">
                    <FiFileText className="w-5 h-5" />
                    <span>{resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-medium text-gray-700">
                      Click to upload your CV (PDF format)
                    </p>
                    <p className="text-xs text-gray-400">
                      Max file size: 5MB
                    </p>
                  </>
                )}
              </div>
            </div>
            {fileError && <p className="mt-1.5 text-xs text-red-500 font-semibold">{fileError}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us a little about yourself..."
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
            Apply
          </Button>

        </form>
      )}
    </div>
  );
};
