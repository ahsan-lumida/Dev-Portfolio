import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { FileText, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import {
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiOpenai,
} from 'react-icons/si';
import ScrollIndicator from './ScrollIndicator';
import StatsCounter from './StatsCounter';
import FeaturedProject from './FeaturedProject';
import AnimatedSphere from './AnimatedSphere';

const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const techIcons = [
    { Icon: SiReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiFlask, name: 'Flask' },
    { Icon: SiNodedotjs, name: 'Node.js' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiOpenai, name: 'OpenAI' },
  ];

  const handleRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Animation - Only render when in view */}
      {inView && (
        <div className="absolute inset-0 opacity-20">
          <Suspense fallback={null}>
            <Canvas>
              <AnimatedSphere />
            </Canvas>
          </Suspense>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 glass-light rounded-full text-sm text-primary border border-primary/30">
                Senior Software Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ahsan Iftikhar
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-heading text-adaptive-gray-light"
            >
              Building Scalable, AI-Driven Software Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-adaptive-gray leading-relaxed"
            >
              Full-Stack Engineer specializing in React, Node.js, Flask, and AI integration.
            </motion.p>

            {/* Stats */}
            {inView && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-4"
              >
                <StatsCounter value="5+" label="Years Experience" />
                <StatsCounter value="20+" label="Projects" />
                <StatsCounter value="10+" label="Technologies" />
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/resume"
                onClick={handleRipple}
                className="relative overflow-hidden group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-dark-100 hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center space-x-2"
              >
                <FileText size={20} className="group-hover:animate-bounce" />
                <span>View Resume</span>
              </Link>
              <a
                href="mailto:ahsaniftikhar2016@gmail.com"
                onClick={handleRipple}
                className="relative overflow-hidden group px-6 py-3 glass-light border border-primary/30 rounded-lg font-medium text-primary hover:bg-primary/20 transition-all flex items-center space-x-2"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                <span>Get in Touch</span>
              </a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-8"
            >
              <p className="text-sm text-adaptive-gray mb-4">Tech Stack:</p>
              <div className="flex flex-wrap gap-4">
                {techIcons.map(({ Icon, name }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-3 glass-light rounded-lg group cursor-pointer"
                    title={name}
                  >
                    <Icon className="text-2xl text-adaptive-gray group-hover:text-primary transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Featured Project */}
            <FeaturedProject />
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center">
                <div className="text-6xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;

