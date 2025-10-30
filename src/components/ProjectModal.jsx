import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { memo } from 'react';

const ProjectModal = memo(({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} className="text-adaptive-gray hover:text-primary" />
              </button>

              <div className="pr-8">
                <h2 className="text-3xl font-heading font-bold text-adaptive-white mb-4">
                  {project.title}
                </h2>
                <p className="text-adaptive-gray-light text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.fullDescription && (
                  <div className="mb-6">
                    <h3 className="text-xl font-heading font-semibold text-adaptive-white mb-3">Details</h3>
                    <p className="text-adaptive-gray leading-relaxed">{project.fullDescription}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold text-adaptive-white mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm glass-light rounded-full text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="glass-light p-4 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          {metric.icon === 'users' && <Users size={20} className="text-primary" />}
                          {metric.icon === 'calendar' && (
                            <Calendar size={20} className="text-primary" />
                          )}
                          <span className="text-sm text-adaptive-gray">{metric.label}</span>
                        </div>
                        <p className="text-xl font-semibold text-adaptive-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 glass-light rounded-lg hover:bg-primary/20 transition-colors group"
                    >
                      <Github size={20} className="text-adaptive-gray group-hover:text-primary" />
                      <span className="text-adaptive-gray-light group-hover:text-primary">View Code</span>
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all group text-dark-100"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;

