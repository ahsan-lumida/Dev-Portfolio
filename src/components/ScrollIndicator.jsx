import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center space-y-2 text-adaptive-gray hover:text-primary transition-colors cursor-pointer group"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className="text-sm font-medium group-hover:text-primary transition-colors">
          Scroll to explore
        </span>
        <ChevronDown size={24} className="group-hover:text-primary transition-colors" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;

