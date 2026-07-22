import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/common/PageTransition';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-brand-cream/30 dark:bg-[#181715]">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-9xl mb-6 select-none"
        >
          🌀
        </motion.div>

        <h1 className="text-6xl font-extrabold font-heading text-brand-dark dark:text-brand-cream tracking-tight">
          404
        </h1>

        <h2 className="mt-2 text-2xl font-bold font-heading text-brand-olive dark:text-brand-gold">
          Oops! This Roll Got Misplaced.
        </h2>

        <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been eaten or moved to another bakery location.
        </p>

        <div className="mt-8">
          <Link to="/">
            <Button variant="primary" size="lg">
              Return to Fresh Home Page
            </Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
export default NotFound;
