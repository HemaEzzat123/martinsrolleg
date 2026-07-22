import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
      setIsScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return { scrollPosition, isScrolled };
};
