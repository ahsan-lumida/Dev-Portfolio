import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { memo } from 'react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col relative transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full">
            <Sparkles size={14} className="text-dark-100" />
            <span className="text-xs font-semibold text-dark-100">Featured</span>
          </div>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-heading font-semibold text-adaptive-white group-hover:text-primary transition-colors pr-2">
            {project.title}
          </h3>
          <div className="flex space-x-2 flex-shrink-0">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} className="text-adaptive-gray hover:text-primary" />
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} className="text-adaptive-gray hover:text-primary" />
              </a>
            )}
          </div>
        </div>

        <p className="text-adaptive-gray mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs glass-light rounded-full text-primary border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);

