import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30;
    const steps = totalMiliseconds / incrementTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-heading font-bold">
      {count}
      {suffix}
    </span>
  );
};
