import { motion } from 'framer-motion';

const SkillBadge = ({ skill, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-light p-4 rounded-xl flex flex-col items-center space-y-2 group cursor-pointer"
    >
      {Icon && (
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
          <Icon />
        </div>
      )}
      <span className="text-sm font-medium text-adaptive-gray-light group-hover:text-primary transition-colors">
        {skill}
      </span>
    </motion.div>
  );
};

export default SkillBadge;
