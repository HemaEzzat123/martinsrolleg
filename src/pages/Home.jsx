import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { Hero } from '../components/home/Hero';
import { BestSellers } from '../components/home/BestSellers';
import { WhyUs } from '../components/home/WhyUs';
import { GallerySection } from '../components/home/GallerySection';
import { Testimonials } from '../components/home/Testimonials';
import { InstagramFeed } from '../components/home/InstagramFeed';
import { FAQAccordion } from '../components/home/FAQAccordion';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <BestSellers />
      <WhyUs />
      <GallerySection />
      <Testimonials />
      <InstagramFeed />
      <FAQAccordion />
    </PageTransition>
  );
};
export default Home;
