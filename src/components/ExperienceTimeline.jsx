import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ exp, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-200px', amount: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    // Check if element is in viewport on mount
    const checkInView = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = rect.top < windowHeight + 200 && rect.bottom > -200;
      
      if (isVisible && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    // Check immediately and after a short delay
    checkInView();
    const timeout = setTimeout(checkInView, 100);
    
    return () => clearTimeout(timeout);
  }, [hasAnimated]);

  const shouldAnimate = inView || hasAnimated;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-16"
    >
            {/* Timeline Dot */}
            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-dark-100 z-10" />

            <div className="glass p-6 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-adaptive-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  {exp.location && <p className="text-sm text-adaptive-gray">{exp.location}</p>}
                  <p className="text-sm text-adaptive-gray mt-1">{exp.duration}</p>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
                    className="flex items-start space-x-2 text-adaptive-gray-light"
                  >
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      };

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

