import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LoadingScreen } from '../components/common/LoadingScreen';

// Main single-page & legal page components
const Home = lazy(() => import('../pages/Home'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('../pages/RefundPolicy'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Automatically scroll to top of window on page navigation (only when no hash is present)
const ScrollToTopOnNavigate = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Main Continuous Single-Page */}
          <Route path="/" element={<Home />} />

          {/* Legacy & Direct Section Redirections */}
          <Route path="/menu" element={<Navigate to="/#menu" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/catering" element={<Navigate to="/#catering" replace />} />
          <Route path="/franchise" element={<Navigate to="/#franchise" replace />} />
          <Route path="/b2b" element={<Navigate to="/#b2b" replace />} />
          <Route path="/feedback" element={<Navigate to="/#feedback" replace />} />
          <Route path="/careers" element={<Navigate to="/#careers" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />

          {/* Standalone Legal & Fallback Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
