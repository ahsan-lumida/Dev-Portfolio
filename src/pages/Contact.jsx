import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-xl text-adaptive-gray max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl text-center"
          >
            <div className="inline-flex p-3 rounded-full bg-primary/20 mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-adaptive-white mb-2">Email</h3>
            <a
              href="mailto:ahsaniftikhar2016@gmail.com"
              className="text-adaptive-gray hover:text-primary transition-colors break-all"
            >
              ahsaniftikhar2016@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl text-center"
          >
            <div className="inline-flex p-3 rounded-full bg-primary/20 mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-adaptive-white mb-2">Location</h3>
            <p className="text-adaptive-gray">Karachi, Pakistan</p>
          </motion.div>
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="glass p-6 rounded-xl inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Globe className="text-primary" size={20} />
              <span className="text-adaptive-gray-light">Portfolio:</span>
            </div>
            <a
              href="https://portfoliobyahsan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              portfoliobyahsan.netlify.app
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

