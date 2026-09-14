import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { AboutBrandSection } from '../components/home/AboutBrandSection';
import { Menu } from './Menu';
import { Catering } from './Catering';
import { Franchise } from './Franchise';
import { B2B } from './B2B';
import { Feedback } from './Feedback';
import { Careers } from './Careers';
import { Contact } from './Contact';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const timer = setTimeout(scrollToHash, 180);
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [location.hash]);

  return (
    <div className="relative overflow-x-hidden">
      {/* 1. Home Section (Hero + Brand Story) */}
      <section id="home" className="scroll-mt-20 md:scroll-mt-24">
        <Hero />
        <AboutBrandSection />
      </section>

      {/* 2. Menu Section (Next in Header) */}
      <section id="menu" className="scroll-mt-20 md:scroll-mt-24">
        <Menu isSection />
      </section>

      {/* 3. Catering Section (Next in Header) */}
      <section id="catering" className="scroll-mt-20 md:scroll-mt-24">
        <Catering isSection />
      </section>

      {/* 4. Franchise Section (Next in Header) */}
      <section id="franchise" className="scroll-mt-20 md:scroll-mt-24">
        <Franchise isSection />
      </section>

      {/* 5. B2B Section (Next in Header) */}
      <section id="b2b" className="scroll-mt-20 md:scroll-mt-24">
        <B2B isSection />
      </section>

      {/* 6. Feedback Section (Next in Header) */}
      <section id="feedback" className="scroll-mt-20 md:scroll-mt-24">
        <Feedback isSection />
      </section>

      {/* 7. Careers Section (Next in Header) */}
      <section id="careers" className="scroll-mt-20 md:scroll-mt-24">
        <Careers isSection />
      </section>

      {/* 8. Contact Section (Next in Header) */}
      <section id="contact" className="scroll-mt-20 md:scroll-mt-24">
        <Contact isSection />
      </section>
    </div>
  );
};

export default Home;
