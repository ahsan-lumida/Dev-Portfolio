import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-dark-100 html:light:border-light-200 z-10" />

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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="flex items-start space-x-2 text-adaptive-gray-light"
                  >
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

