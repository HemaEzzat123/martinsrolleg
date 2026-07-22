import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FeedbackForm } from '../components/forms/FeedbackForm';

export const Feedback = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Your Opinion Matters"
            title="Customer Feedback"
            subtitle="We are committed to perfection in every bite. Share your thoughts, rate your recent order, and help us serve you better."
          />

          <div className="mt-8">
            <FeedbackForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
export default Feedback;
