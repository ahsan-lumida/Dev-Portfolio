import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Send, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, you'd send this to your backend/email service
      console.log('Form data:', data);
      
      toast.success('Thank you! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass p-8 rounded-2xl"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/20">
          <Mail className="text-primary" size={24} />
        </div>
        <div>
              <h2 className="text-2xl font-heading font-semibold text-adaptive-white">Get in Touch</h2>
              <p className="text-adaptive-gray text-sm">Send me a message and I'll respond as soon as possible</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-adaptive-gray-light mb-2">
              Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              className="w-full px-4 py-3 glass-light rounded-lg text-adaptive-white placeholder-gray-400 html:light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-adaptive-gray-light mb-2">
              Email *
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 glass-light rounded-lg text-adaptive-white placeholder-gray-400 html:light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-adaptive-gray-light mb-2">
            Subject *
          </label>
          <input
            {...register('subject', { required: 'Subject is required' })}
            type="text"
            id="subject"
            className="w-full px-4 py-3 glass-light rounded-lg text-adaptive-white placeholder-gray-400 html:light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-adaptive-gray-light mb-2">
            Message *
          </label>
          <textarea
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
            id="message"
            rows={5}
            className="w-full px-4 py-3 glass-light rounded-lg text-adaptive-white placeholder-gray-400 html:light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-dark-100 hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin" size={20} />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

