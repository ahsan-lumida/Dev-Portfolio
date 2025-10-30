import { useState, lazy, Suspense, useCallback } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Rocket } from 'lucide-react';

// Lazy load modal for better initial performance
const ProjectModal = lazy(() => import('../components/ProjectModal'));

const projects = [
  {
    title: 'AI Investment Analysis Platform',
    description:
      'AI-powered investment analysis platform for the U.S. stock market, delivering data-driven insights through real-time financial news, AI-driven market sentiment, and portfolio analytics.',
    fullDescription:
      'The product is an AI-powered investment analysis platform for the U.S. stock market, delivering data-driven insights through real-time financial news, AI-driven market sentiment, and portfolio analytics. The platform integrates historical and predictive analysis with AI-powered research to provide actionable market insights. Built with React and Flask, it leverages Firestore and GCP for scalability. I develop end-to-end modules, integrating OpenAI LLMs to enhance analysis, automate workflows, and extract forward-looking insights, transforming complex financial data into intuitive, high-impact summaries.',
    stack: ['React', 'Flask', 'Firestore', 'Buckets', 'Google Cloud', 'OpenAI LLMs'],
    links: {},
    featured: true,
    metrics: [
      { label: 'Year', value: '2024', icon: 'calendar' },
    ],
  },
  {
    title: 'Qlu.ai',
    description:
      'AI-driven platform designed to automate prospect research and outreach for executive and tech recruiters, generating precise candidate lists from extensive databases within minutes.',
    fullDescription:
      'Qlu.ai offers an AI-driven platform designed to automate prospect research and outreach for executive and tech recruiters. By leveraging artificial intelligence and natural language processing, Qlu.ai interprets hiring requirements to generate precise candidate lists from extensive databases within minutes. Front end is developed on Next.js and Backend is on Node.js with PostgreSQL and ElasticSearch.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'ElasticSearch'],
    links: {},
    featured: false,
  },
  {
    title: 'National Savings Suite',
    description:
      'Robust web-based application that integrates front-end development and SQL database management to modernize national saving initiatives for 300+ branches nationwide.',
    fullDescription:
      'The National Saving Management System is a robust web-based application that integrates front-end development and SQL database management. Designed to modernize national saving initiatives, the system provides intuitive interfaces for branches to access information, conduct transactions, invest in products, and monitor savings efficiently. The front-end, developed using React, ensures user-friendly experiences, while the backend, powered by Spring Boot and SQL, handles data management effectively. Additionally, mobile apps for Android/iOS, built with React Native, ensure accessibility across platforms. I oversee the development and maintenance of the React-based front-end and Android app, develop Jasper reports for 300+ branches, and troubleshoot bugs within the core application.',
    stack: ['React', 'Java', 'Spring Boot', 'Redis', 'React Native', 'Oracle SQL', 'Jasper Reports'],
    links: {},
    featured: false,
  },
  {
    title: 'NBP - Digital Account Opening',
    description:
      'Facilitates digital account opening for National Bank of Pakistan, providing customers with convenient access to banking services through online channels.',
    fullDescription:
      'The aim of the National Bank of Pakistan is to facilitate digital account opening, providing customers with convenient access to banking services through online channels. My role encompasses managing the project and leading Front End Development from inception, utilizing technologies such as React, MUI5, and React Query for efficient caching. Additionally, I ensured the security of the application by employing Snyk to identify and address potential security issues, thereby enhancing its overall security posture and worked on backend service on Node.js. Moreover, I focused on ensuring the web portal\'s compatibility across multiple devices, ensuring a seamless user experience across various platforms and screen sizes.',
    stack: ['React', 'React Query', 'Node.js', 'Oracle SQL', 'Material UI', 'Snyk'],
    links: { live: 'https://newaccount.nbp.com.pk/landing-page' },
    featured: false,
  },
  {
    title: 'National Savings - Digital Account Opening',
    description:
      'Brings customers onboard through its web application digitally, streamlining the user experience for a seamless and secure digital onboarding process.',
    fullDescription:
      'NS-DAO aims to bring customers onboard through its web application digitally. I orchestrated the design and implementation of the backend infrastructure, utilizing NodeJS for robust and scalable functionality. Additionally, I streamlined the user experience to ensure a seamless and secure digital onboarding process. Collaborating with cross-functional teams, I integrated advanced features to enhance the overall efficiency of National Savings processes. Furthermore, I spearheaded front-end development using cutting-edge React technologies to craft an intuitive and user-friendly interface.',
    stack: ['React', 'Node.js', 'Express.js', 'SQL'],
    links: { live: 'https://account.nationalsavings.digital/' },
    featured: false,
  },
  {
    title: 'National Savings - BackOffice',
    description:
      'Web-based application aimed at managing customer requests for National Savings Digital Account Opening with robust user account management and security features.',
    fullDescription:
      'National Savings Backoffice is a web-based application aimed at managing customer requests for National Savings Digital Account Opening. I contributed significantly to enhancing user account management, designing & developing user interface and business logic, utilizing ReactJS for the frontend and building services on .NET with SQL for the backend. Additionally, I implemented robust device blocking capabilities to ensure security.',
    stack: ['React', '.NET', 'SQL'],
    links: {},
    featured: false,
  },
  {
    title: 'National Savings Call Center App',
    description:
      'Web portal for accessing the National Savings Mobile App, enabling viewing of customer KYC details and their status, including whether they are locked or unlocked.',
    fullDescription:
      'The goal of the National Savings Call Center App was to create a web portal for accessing the National Savings Mobile App, enabling viewing of customer KYC details and their status, including whether they are locked or unlocked. My responsibility was to lead the development of the frontend portal using React. I also spearheaded the project by collaborating closely with other teams to ensure its success.',
    stack: ['React', 'Node.js', 'SQL'],
    links: {},
    featured: false,
  },
  {
    title: 'Bank Al-Habib App',
    description:
      'Comprehensive core banking application handling various financial functions including customer accounts, transactions, loans, CRM, Teller and Cash Management, KYC, and Financial Analysis.',
    fullDescription:
      'I played a central role in the overhaul of Bank Al Habib\'s core banking application, leading to significant improvements in user experience and performance. This comprehensive application handles various financial functions including customer accounts, transactions, loans, as well as features like Customer Relationship Management, Teller and Cash Management, KYC, and Financial Analysis. The frontend is developed using Vue.js with integrated JWT token for security, and XState serves as middleware. Meanwhile, the backend is constructed with Quarkus and SQL, ensuring robust functionality and data management.',
    stack: ['Vue.js', 'Java', 'Quarkus', 'XState', 'JWT', 'SQL'],
    links: {},
    featured: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    // Clear project on close to free memory
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

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
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="text-primary" size={40} />
            <h1 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </h1>
          </div>
          <p className="text-xl text-adaptive-gray max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} onClick={() => handleProjectClick(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Modal - Only render when needed */}
        {isModalOpen && (
          <Suspense fallback={null}>
            <ProjectModal
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Projects;

