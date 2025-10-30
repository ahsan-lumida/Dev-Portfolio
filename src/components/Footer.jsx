import { Link } from 'react-router-dom';
import { Mail, MapPin, Github, Linkedin, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:ahsaniftikhar2016@gmail.com"
                className="flex items-center space-x-3 text-adaptive-gray-light hover:text-primary transition-colors group"
              >
                <Mail size={18} />
                <span>ahsaniftikhar2016@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-adaptive-gray-light">
                <MapPin size={18} />
                <span>Karachi, Pakistan</span>
              </div>
              <a
                href="https://portfoliobyahsan.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-adaptive-gray-light hover:text-primary transition-colors group"
              >
                <Globe size={18} />
                <span>portfoliobyahsan.netlify.app</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/resume"
                className="flex items-center space-x-2 text-adaptive-gray-light hover:text-primary transition-colors group"
              >
                <span>Resume</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/projects"
                className="flex items-center space-x-2 text-adaptive-gray-light hover:text-primary transition-colors group"
              >
                <span>Projects</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-2 text-adaptive-gray-light hover:text-primary transition-colors group"
              >
                <span>About</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Contact</h3>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-4 py-2 glass-light rounded-lg hover:bg-primary/20 transition-all group text-adaptive-gray-light"
            >
              <span>Contact Form</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-light hover:bg-primary/20 hover:text-primary transition-all rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-light hover:bg-primary/20 hover:text-primary transition-all rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-adaptive-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Ahsan Iftikhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

