import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <PageTransition>
      <div className="relative pt-36 pb-20 bg-brand-cream text-brand-dark min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md mx-auto px-4 text-center relative z-10">
          <span className="text-8xl block mb-4">🌀</span>
          <h1 className="text-6xl font-extrabold font-heading text-[#16241F]">404</h1>
          <h2 className="text-2xl font-bold font-heading text-[#16241F] mt-2 mb-4">
            Page Not Found
          </h2>
          <p className="text-sm text-[#2D423A] font-medium mb-8 leading-relaxed">
            Oops! The cinnamon roll you were looking for seems to have been eaten. Let's get you back home!
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
