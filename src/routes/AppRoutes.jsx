import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoadingScreen } from '../components/common/LoadingScreen';

// Lazy loaded page components
const Home = lazy(() => import('../pages/Home'));
const Menu = lazy(() => import('../pages/Menu'));
const Catering = lazy(() => import('../pages/Catering'));
const Franchise = lazy(() => import('../pages/Franchise'));
const B2B = lazy(() => import('../pages/B2B'));
const Feedback = lazy(() => import('../pages/Feedback'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Automatically scroll to top of window on page navigation
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
