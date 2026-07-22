import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiUser, FiClock } from 'react-icons/fi';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FeedbackForm } from '../components/forms/FeedbackForm';
import { TESTIMONIALS } from '../data/testimonials';

export const Feedback = () => {
  const [reviewsList, setReviewsList] = useState([]);

  // Load reviews from localStorage and combine with sample testimonials
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('martins_customer_feedback') || '[]');
      // Combine stored customer reviews with default testimonials
      const defaultReviews = TESTIMONIALS.map((item) => ({
        id: `default-${item.id}`,
        name: item.name,
        orderNumber: item.role,
        rating: item.rating,
        comment: item.comment,
        date: item.date,
      }));
      setReviewsList([...stored, ...defaultReviews]);
    } catch (e) {
      console.error('Failed to load reviews:', e);
    }
  }, []);

  const handleNewFeedback = (newReview) => {
    setReviewsList((prev) => [newReview, ...prev]);
  };

  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream text-brand-dark min-h-screen overflow-hidden">
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionTitle
            badge="Guest Reviews & Feedback"
            title="We'd Love to Hear From You"
            subtitle="Your feedback helps us continuously deliver warm, hand-crafted bakery perfection."
          />

          <div className="mt-8">
            <FeedbackForm onFeedbackSubmit={handleNewFeedback} />
          </div>

          {/* Published Feedback & Reviews Showcase Section */}
          <div className="mt-20 pt-12 border-t border-brand-olive/15">
            <SectionTitle
              badge="Live Guest Feedbacks"
              title="Recent Customer Reviews"
              subtitle="See what our guests are saying after visiting Martins Rolleg."
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {reviewsList.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-3xl shadow-md border border-brand-olive/15 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Rating & Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1 text-amber-400">
                          {[...Array(review.rating || 5)].map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 flex items-center space-x-1 font-medium">
                          <FiClock className="w-3 h-3" />
                          <span>{review.date || 'Recently'}</span>
                        </span>
                      </div>

                      {/* Comment Message */}
                      <p className="text-sm text-[#2D423A] leading-relaxed italic font-medium">
                        "{review.comment}"
                      </p>
                    </div>

                    {/* Author & Order Ref */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-full bg-brand-olive/10 text-brand-olive flex items-center justify-center font-bold text-sm">
                          <FiUser className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold font-heading text-[#16241F] leading-tight">
                            {review.name}
                          </h4>
                          {review.orderNumber && (
                            <span className="text-[11px] text-gray-500 font-mono block">
                              {review.orderNumber}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Feedback;
