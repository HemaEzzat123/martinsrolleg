import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { Hero } from '../components/home/Hero';
import { AboutBrandSection } from '../components/home/AboutBrandSection';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutBrandSection />
    </PageTransition>
  );
};

export default Home;
