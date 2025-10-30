import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiOpenai,
  SiRedis,
} from 'react-icons/si';
import { GraduationCap, Code } from 'lucide-react';

const skills = [
  { skill: 'React', icon: SiReact },
  { skill: 'Next.js', icon: SiNextdotjs },
  { skill: 'Node.js', icon: SiNodedotjs },
  { skill: 'Flask', icon: SiFlask },
  { skill: 'PostgreSQL', icon: SiPostgresql },
  { skill: 'Docker', icon: SiDocker },
  { skill: 'Python', icon: SiPython },
  { skill: 'OpenAI', icon: SiOpenai },
  { skill: 'Redis', icon: SiRedis },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and expertise
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl mb-12"
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <Code size={28} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-semibold text-adaptive-white mb-3">
                Professional Bio
              </h2>
              <p className="text-adaptive-gray-light leading-relaxed text-lg">
                I'm a Senior Software Engineer with experience building scalable, AI-powered
                applications using modern web technologies. I focus on creating high-performance
                interfaces, secure APIs, and data-driven solutions that solve real-world problems
                and deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl mb-12"
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-secondary/20">
              <GraduationCap size={28} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-heading font-semibold text-adaptive-white mb-4">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-adaptive-white">BS Computer Science</h3>
                  <p className="text-primary font-medium">Nuces - FAST, Karachi</p>
                  <p className="text-adaptive-gray">Aug 2018 - June 2022</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-2xl font-heading font-semibold text-adaptive-white mb-8 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill.skill}
                skill={skill.skill}
                icon={skill.icon}
                delay={index * 0.05}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

