 "use client"
 
 import { useEffect, useRef, useState } from "react";
 import { motion, useInView } from "framer-motion";
 const StatsSection = () => {

  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-14 text-center">
        <AnimatedStat value={5000} label="Happy Clients" suffix="+" />
        <AnimatedStat value={2000} label="Properties Listed" suffix="+" />
        <AnimatedStat value={98} label="Customer Satisfaction" suffix="%" />
      </div>
    </section>
  );
};

const AnimatedStat = ({ value, label, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <h3 className="text-5xl font-extrabold text-blue-600">
        {count}{suffix}
      </h3>
      <p className="mt-3 text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
};
export default StatsSection