import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, memo } from 'react';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsCounter = ({ value, label, suffix = '' }) => {
  const numValue = parseInt(value.match(/\d+/)?.[0] || '0');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
        <Counter end={numValue} suffix={value.replace(/\d+/, '') || suffix} />
      </div>
      <p className="text-adaptive-gray text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

export default memo(StatsCounter);

