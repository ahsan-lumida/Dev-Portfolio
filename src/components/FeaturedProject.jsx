import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProject = () => {
  const featuredProject = {
    title: 'AI Investment Analysis Platform',
    description: 'AI-powered platform leveraging OpenAI LLMs for intelligent financial insights.',
    stack: ['React', 'Flask', 'OpenAI', 'GCP'],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-16"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="text-primary" size={20} />
        <span className="text-sm text-adaptive-gray uppercase tracking-wider">Featured Project</span>
      </div>
      <Link to="/projects">
        <motion.div
          whileHover={{ y: -5 }}
          className="glass p-6 rounded-2xl cursor-pointer group"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-heading font-semibold text-adaptive-white group-hover:text-primary transition-colors">
              {featuredProject.title}
            </h3>
            <ExternalLink 
              size={20} 
              className="text-adaptive-gray group-hover:text-primary transition-colors" 
            />
          </div>
          <p className="text-adaptive-gray mb-4 text-sm">{featuredProject.description}</p>
          <div className="flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs glass-light rounded-full text-primary border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default FeaturedProject;

