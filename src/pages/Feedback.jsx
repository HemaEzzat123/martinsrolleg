import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FeedbackForm } from '../components/forms/FeedbackForm';

export const Feedback = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Guest Review"
            title="We'd Love to Hear From You"
            subtitle="Your feedback helps us continuously deliver warm, fresh bakery perfection."
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
