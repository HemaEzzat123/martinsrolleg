import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiStar, 
  FiCheckCircle, 
  FiSend, 
  FiMapPin, 
  FiExternalLink,
  FiShoppingBag,
  FiTruck,
  FiCoffee,
  FiArrowRight,
  FiArrowLeft
} from 'react-icons/fi';
import { FaCarSide, FaUtensils } from 'react-icons/fa';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

const SERVICE_TYPES = [
  { id: 'dine-in', nameAr: 'صالة الفرع (Dine-in)', nameEn: 'Dine-in / In Branch', icon: FaUtensils, desc: 'تناول الطعام داخل الفرع' },
  { id: 'takeaway', nameAr: 'تيك أواي / سفري (Takeaway)', nameEn: 'Takeaway', icon: FiShoppingBag, desc: 'استلام الطلب من الفرع' },
  { id: 'delivery', nameAr: 'ديلفري / توصيل (Delivery)', nameEn: 'Delivery', icon: FiTruck, desc: 'توصيل الطلب حتى باب المنزل' },
  { id: 'car-pickup', nameAr: 'توصيل للسيارة (Car Pick-up)', nameEn: 'Car Pick-up', icon: FaCarSide, desc: 'استلام الطلب في السيارة' },
];

export const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [step, setStep] = useState(1); // Step 1: Service Type, Step 2: Branch, Step 3: Ratings & Comments
  const [serviceType, setServiceType] = useState('dine-in');
  const [selectedBranch, setSelectedBranch] = useState('sheraton');
  const [overallRating, setOverallRating] = useState(5);
  const [foodRating, setFoodRating] = useState(5);
  const [speedRating, setSpeedRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleNextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data) => {
    const branchInfo = BRANCHES.find(b => b.id === selectedBranch) || BRANCHES[0];
    const serviceInfo = SERVICE_TYPES.find(s => s.id === serviceType) || SERVICE_TYPES[0];

    const newFeedback = {
      id: Date.now(),
      name: data.name,
      phone: data.phone || '',
      orderNumber: data.orderNumber || '',
      serviceType: serviceInfo.nameAr,
      branch: branchInfo.name,
      rating: overallRating,
      foodRating,
      speedRating,
      comment: data.message,
      date: 'الآن (Just now)',
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('martins_customer_feedback') || '[]');
      const updated = [newFeedback, ...existing];
      localStorage.setItem('martins_customer_feedback', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving feedback:', e);
    }

    if (onFeedbackSubmit) {
      onFeedbackSubmit(newFeedback);
    }

    setSubmitted(true);
    reset();
    setStep(1);
    setOverallRating(5);
    setFoodRating(5);
    setSpeedRating(5);
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto font-body">
      
      {/* Google Reviews Direct Action Buttons - Deep Brand Olive Card */}
      <div className="bg-[#2C463D] text-white p-6 md:p-8 rounded-3xl shadow-xl border border-[#2C463D]/30 text-center">
        <h4 className="text-xl font-extrabold font-heading text-[#F8EFE3] mb-1">
          Leave a Google Review ⭐
        </h4>
        <p className="text-sm text-[#F8EFE3]/90 mb-5 font-medium">
          أحببت تجربتك معنا؟ اترك تقييمك لفرعك المفضل على خرائط جوجل!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {BRANCHES.map((b) => (
            <a
              key={b.id}
              href={b.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#F8EFE3] hover:bg-white text-[#2C463D] rounded-full text-xs font-extrabold flex items-center justify-center space-x-2 shadow-md transition-all transform hover:scale-105 cursor-pointer"
            >
              <FiMapPin className="w-4 h-4 text-[#B88236]" />
              <span>تقييم {b.name} على Google</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Main Survey Form Container */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-brand-olive/20">
        
        {/* Step Indicator Progress Bar */}
        {!submitted && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
              <span className={step >= 1 ? 'text-brand-olive font-extrabold' : ''}>1. مكان الخدمة</span>
              <span className={step >= 2 ? 'text-brand-olive font-extrabold' : ''}>2. اختيار الفرع</span>
              <span className={step >= 3 ? 'text-brand-olive font-extrabold' : ''}>3. تقييم التجربة والملاحظات</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-olive transition-all duration-500 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <FiCheckCircle className="w-16 h-16 text-[#2C463D] mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading text-[#16241F]">
              شكراً لك على تقييمك القيم!
            </h3>
            <p className="mt-2 text-[#2D423A] text-sm font-medium">
              تم تسجيل ملاحظاتك وتقييمك بنجاح ونقدر جداً وقتك في مشاركة تجربتك معنا.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* STEP 1: Service Type Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full">
                    الخطوة الأولى
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-brand-dark mt-2">
                    أين تم تقديم الخدمة لك؟
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    اختر كيفية تلقيك للطلب من مارتنز رول
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICE_TYPES.map((st) => {
                    const Icon = st.icon;
                    const isSelected = serviceType === st.id;
                    return (
                      <div
                        key={st.id}
                        onClick={() => setServiceType(st.id)}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center space-x-4 ${
                          isSelected
                            ? 'border-brand-olive bg-brand-cream/60 shadow-md'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                          isSelected ? 'bg-brand-olive text-white' : 'bg-white text-gray-600 border border-gray-200'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <h4 className="text-base font-bold text-brand-dark">{st.nameAr}</h4>
                          <p className="text-xs text-gray-500 mt-0.5">{st.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleNextStep}
                    icon={FiArrowRight}
                  >
                    التالي: اختيار الفرع
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Branch Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full">
                    الخطوة الثانية
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-brand-dark mt-2">
                    في أي فرع كانت تجربتك؟
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    حدد الفرع الخاص بطلبك
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BRANCHES.map((b) => {
                    const isSelected = selectedBranch === b.id;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setSelectedBranch(b.id)}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'border-brand-olive bg-brand-cream/60 shadow-md'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        <FiMapPin className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-brand-olive' : 'text-gray-400'}`} />
                        <h4 className="text-lg font-bold text-brand-dark">{b.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{b.address}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-gray-600 hover:text-brand-dark cursor-pointer"
                  >
                    <FiArrowLeft className="w-4 h-4" />
                    <span>السابق</span>
                  </button>

                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleNextStep}
                    icon={FiArrowRight}
                  >
                    التالي: تقييم التجربة
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Ratings, Guest Info & Comments */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center border-b border-gray-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full">
                    الخطوة الأخيرة
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-brand-dark mt-2">
                    كيف كانت تجربتك معنا؟
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    يرجى تقديم تقييمك وإبداء ملاحظاتك
                  </p>
                </div>

                {/* Rating Questions Grid */}
                <div className="space-y-5 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  
                  {/* 1. Overall Experience */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 border-b border-gray-200">
                    <span className="text-sm font-bold text-brand-dark">1. التقييم العام للتجربة:</span>
                    <div className="flex items-center space-x-1" dir="ltr">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setOverallRating(star)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                        >
                          <FiStar
                            className={`w-7 h-7 ${
                              star <= overallRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Food & Pastry Quality */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 border-b border-gray-200">
                    <span className="text-sm font-bold text-brand-dark">2. جودة المأكولات والمشروبات:</span>
                    <div className="flex items-center space-x-1" dir="ltr">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFoodRating(star)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                        >
                          <FiStar
                            className={`w-7 h-7 ${
                              star <= foodRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Speed & Service Quality */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="text-sm font-bold text-brand-dark">3. سرعة الخدمة وتوفير الطلب:</span>
                    <div className="flex items-center space-x-1" dir="ltr">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setSpeedRating(star)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                        >
                          <FiStar
                            className={`w-7 h-7 ${
                              star <= speedRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      placeholder="اسمك الكريم"
                      {...register('name', { required: 'يرجى إدخال الاسم' })}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                      رقم الهاتف (اختياري)
                    </label>
                    <input
                      type="tel"
                      placeholder="01118822595"
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-brand-dark font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
                    />
                  </div>

                  {/* Order Number */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                      رقم الطلب / الفاتورة (اختياري)
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: #MR-1082"
                      {...register('orderNumber')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-brand-dark font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                    تفاصيل التجربة والملاحظات *
                  </label>
                  <textarea
                    rows="4"
                    placeholder="اكتب انطباعك أو أي ملاحظات ترغب في مشاركتها معنا لتطوير الخدمة..."
                    {...register('message', { required: 'يرجى كتابة الملاحظات' })}
                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-brand-dark font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.message.message}</p>}
                </div>

                {/* Navigation & Submit Buttons */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-gray-600 hover:text-brand-dark cursor-pointer"
                  >
                    <FiArrowLeft className="w-4 h-4" />
                    <span>السابق</span>
                  </button>

                  <Button type="submit" variant="primary" size="lg" icon={FiSend}>
                    إرسال التقييم
                  </Button>
                </div>
              </motion.div>
            )}

          </form>
        )}
      </div>

    </div>
  );
};

export default FeedbackForm;
