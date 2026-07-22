import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUploadCloud, FiFileText, FiSend } from 'react-icons/fi';
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
        setFileError('يرجى رفع ملف بصيغة PDF فقط (Only PDF files allowed)');
        setResumeFile(null);
      } else if (file.size > 5 * 1024 * 1024) {
        setFileError('حجم الملف يجب ألا يتجاوز 5 ميجابايت (Max file size 5MB)');
        setResumeFile(null);
      } else {
        setFileError('');
        setResumeFile(file);
      }
    }
  };

  const onSubmit = (data) => {
    if (!resumeFile) {
      setFileError('يرجى ارفاق السيرة الذاتية بصيغة PDF (Please attach your PDF resume)');
      return;
    }

    const applicationData = { ...data, resumeFileName: resumeFile.name };
    console.log('Career Application submitted:', applicationData);
    setSubmitted(true);
    reset();
    setResumeFile(null);
    setFileError('');
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white dark:bg-brand-charcoal p-8 md:p-10 rounded-3xl shadow-xl border border-amber-900/10 dark:border-white/10 max-w-3xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <FiCheckCircle className="w-16 h-16 text-brand-olive dark:text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-brand-dark dark:text-brand-cream">
            تم استلام طلب التوظيف بنجاح!
          </h3>
          <p className="text-base font-semibold text-brand-olive dark:text-brand-gold mt-1">
            Application Submitted Successfully
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto">
            شكرًا لاهتمامك بالانضمام إلى فريق مارتنز روليج. سيقوم فريق الموارد البشرية بمراجعة سيرتك الذاتية والتواصل معك في حال مطابقة المؤهلات.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* الاسم بالكامل */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                الاسم بالكامل / Full Name *
              </label>
              <input
                type="text"
                placeholder="أحمد محمد العتيبي"
                {...register('fullName', { required: 'الاسم بالكامل مطلوب' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                رقم الهاتف / Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+966 50 123 4567"
                {...register('phone', { required: 'رقم الهاتف مطلوب' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                البريد الإلكتروني / Email Address *
              </label>
              <input
                type="email"
                placeholder="applicant@email.com"
                {...register('email', { required: 'البريد الإلكتروني مطلوب', pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* المدينة */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                المدينة / City *
              </label>
              <input
                type="text"
                placeholder="الرياض / جدة / دبي..."
                {...register('city', { required: 'المدينة مطلوبة' })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                  errors.city ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
            </div>

          </div>

          {/* الوظيفة المطلوبة */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              الوظيفة المطلوبة / Desired Position *
            </label>
            <select
              {...register('jobTitle', { required: 'يرجى اختيار الوظيفة المطلوبة' })}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                errors.jobTitle ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <option value="">اختر الوظيفة / Select Position</option>
              <option value="Head Pastry Chef">شيف مخابز ومعجنات (Head Pastry Chef)</option>
              <option value="Specialty Barista">بارستا مختص (Specialty Barista)</option>
              <option value="Store Manager">مدير فرع (Store Manager)</option>
              <option value="Shift Supervisor">مشرف وردية (Shift Supervisor)</option>
              <option value="Marketing Specialist">أخصائي تسويق (Marketing Specialist)</option>
              <option value="Cashier & Customer Service">كاشير وخدمة عملاء (Customer Service)</option>
            </select>
            {errors.jobTitle && <p className="mt-1 text-xs text-red-500">{errors.jobTitle.message}</p>}
          </div>

          {/* رفع السيرة الذاتية (PDF) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              رفع السيرة الذاتية (PDF) / Upload Resume *
            </label>
            <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-brand-olive dark:hover:border-brand-gold rounded-2xl p-6 text-center transition-colors bg-gray-50/50 dark:bg-gray-800/50">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <FiUploadCloud className="w-10 h-10 text-brand-olive dark:text-brand-gold" />
                {resumeFile ? (
                  <div className="flex items-center space-x-2 text-sm font-semibold text-green-600 dark:text-green-400">
                    <FiFileText className="w-5 h-5" />
                    <span>{resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      اضغط هنا لرفع السيرة الذاتية صيغة PDF (أو اسحب الملف هنا)
                    </p>
                    <p className="text-xs text-gray-400">
                      Maximum file size: 5MB • PDF format only
                    </p>
                  </>
                )}
              </div>
            </div>
            {fileError && <p className="mt-1.5 text-xs text-red-500 font-semibold">{fileError}</p>}
          </div>

          {/* رسالة */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              رسالة تعريبية / Cover Message
            </label>
            <textarea
              rows="4"
              placeholder="اكتب نبذة مختصرة عن خبراتك وسبب رغبتك بالانضمام إلى فريقنا..."
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-brand-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth icon={FiSend}>
            تقديم الطلب / Submit Application
          </Button>

        </form>
      )}
    </div>
  );
};
