import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWidgets } from './components/layout/FloatingWidgets';
import { AppRoutes } from './routes/AppRoutes';
import { LoadingScreen } from './components/common/LoadingScreen';

export function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Simulating initial bakery splash loader on first mount
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col justify-between selection:bg-brand-olive selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <FloatingWidgets />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
