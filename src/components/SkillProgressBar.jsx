import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillProgressBar = ({ skill, proficiency, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-adaptive-gray-light">{skill}</span>
        <span className="text-xs text-adaptive-gray">{proficiency}%</span>
      </div>
      <div className="h-2 bg-dark-300 html:light:bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ delay, duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;

