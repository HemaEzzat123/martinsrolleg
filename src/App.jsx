import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWidgets } from './components/layout/FloatingWidgets';
import { AppRoutes } from './routes/AppRoutes';
import { LoadingScreen } from './components/common/LoadingScreen';

export function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initial splash loader
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-brand-cream text-brand-dark selection:bg-brand-olive selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <FloatingWidgets />
      </div>
    </BrowserRouter>
  );
}

export default App;
