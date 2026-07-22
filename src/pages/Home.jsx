import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { Hero } from '../components/home/Hero';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
};
export default Home;
