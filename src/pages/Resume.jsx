import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillProgressBar from '../components/SkillProgressBar';
import { Award, Code2, Database, Wrench, Download, Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Lumida Wealth',
    location: 'New Jersey, USA',
    duration: 'Dec 2024 - Present',
    achievements: [
      'Spearheaded the development of new React modules and components, improving performance and user engagement by 25%',
      'Managed UI/UX design and development for key components, enhancing usability and visual consistency',
      'Refactored legacy code, increasing maintainability and reducing technical debt by 15%',
      'Managed frontend codebase architecture, improving readability and development efficiency',
      'Developed and optimized backend APIs using Flask and Firestore, streamlining data flow and system integration',
      'Integrated OpenAI\'s LLMs into workflows, automating processes and enhancing decision-making',
      'Conducted code reviews, ensuring high-quality, scalable, and efficient code standards',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Qlu.ai',
    location: 'Remote',
    duration: 'Oct 2024 - Dec 2024',
    achievements: [
      'Collaborated on the development of Qlu.ai, an AI-driven platform for automating prospect research and outreach',
      'Developed front-end using Next.js with React Query and middleware, reducing load times by 30%',
      'Designed and implemented back-end services using Node.js and PostgreSQL with JWT authentication, improving API response times by 20%',
      'Integrated real-time communication features using Socket.IO, boosting user engagement through instant messaging',
      'Collaborated with cross-functional teams, maintaining a 95% project success rate and ensuring timely delivery',
      'Conducted code reviews and debugging, maintaining high code quality and minimizing production issues',
      'Executed rigorous testing, leading to a 40% reduction in reported bugs post-launch',
    ],
  },
  {
    role: 'Software Engineer I',
    company: 'Paysys Labs',
    location: 'Karachi, Pakistan',
    duration: 'Nov 2022 - Oct 2024',
    achievements: [
      'Developed and maintained user interfaces using React, improving web app efficiency by up to 25%',
      'Collaborated with development, product, and UX/UI teams to implement features, achieving faster page reloading by up to 30%',
      'Designed reports on Jasper Soft Studio with complex queries and PL/SQL procedures for 300+ NS Branches nationwide',
      'Developed ETL Jobs for bulk data migration, enhancing database performance by up to 40%',
      'Performed stress testing on JMeter, optimizing resource allocation and ensuring consistent service response times up to 30%',
      'Resolved crucial bugs in core business applications and modified ETL Jobs',
      'Developed backend services using Node.js, Express.js, NestJS, .NET and mobile applications using React Native',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Teresol',
    location: 'Karachi, Pakistan',
    duration: 'Apr 2022 - Oct 2022',
    achievements: [
      'Contributed to front-end development using Vue.js, improving interface responsiveness and usability by 15%',
      'Integrated JWT (JSON Web Tokens) for secure user authentication and authorization',
      'Implemented XState middleware for efficient management of complex application states',
      'Collaborated closely with back-end developers to ensure seamless communication and integration',
      'Participated in code reviews, offering constructive feedback to maintain code quality',
    ],
  },
];

const skills = {
  languages: ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C#'],
  frameworks: [
    'React',
    'React Native',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Express.js',
    'NestJS',
    'Flask',
    'Spring Boot',
    'Quarkus',
    '.NET',
  ],
  databases: ['Oracle SQL', 'PostgreSQL', 'Firestore', 'Redis'],
  tools: [
    'Docker',
    'Socket.io',
    'XState',
    'Material UI',
    'Jasper Reports',
    'JMeter',
    'ETL Jobs',
    'JWT',
    'RESTful Services',
    'Agentic AI',
    'OpenAI LLMs',
    'Git',
    'Google Cloud Platform',
    'React Query',
  ],
};

const skillProficiencies = {
  'JavaScript': 70,
  'TypeScript': 50,
  'Python': 70,
  'React': 80,
  'Next.js': 60,
  'Node.js': 65,
  'PostgreSQL': 70,
  'Docker': 70,
  'Git': 80,
};

const calculateExperience = () => {
  const startDate = new Date('2022-04-01'); // Started in April 2022
  const now = new Date();
  const years = Math.floor((now - startDate) / (365.25 * 24 * 60 * 60 * 1000));
  return years;
};

const certificates = [
  { name: 'SQL (Intermediate)', issuer: 'HackerRank', date: 'June 2023', description: 'Complex joins, unions, and sub-queries' },
  { name: 'JavaScript', issuer: 'HackerRank', date: 'June 2023', description: 'Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling' },
  { name: 'Python', issuer: 'HackerRank', date: 'Feb 2023', description: 'Scalar Types, Operators, Control Flow, Strings, Collections, Modularity, Objects, Types and Classes' },
  { name: 'Front-End Web Development with React', issuer: 'Coursera', date: 'Feb 2022', description: 'React, ReactDOM, Class components, Functional Components, Hooks, Component Life cycle and Conditional Rendering' },
];

const Resume = () => {
  const handleDownloadPDF = () => {
    toast.success('PDF download coming soon! In the meantime, you can use your browser\'s print function.');
    // Future: Add actual PDF generation/download
    window.print();
  };

  const experienceYears = calculateExperience();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-0 right-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 px-4 py-2 glass rounded-lg hover:bg-primary/20 transition-all group"
            >
              <Download size={18} className="text-adaptive-gray-light group-hover:text-primary" />
              <span className="text-sm text-adaptive-gray-light group-hover:text-primary">Download PDF</span>
            </motion.button>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-adaptive-gray mb-4">
            My professional journey and expertise
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-light rounded-full">
            <Calendar size={18} className="text-primary" />
            <span className="text-sm text-adaptive-gray-light">
              {experienceYears}+ Years of Experience
            </span>
          </div>
        </motion.div>

        {/* Experience Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading font-semibold text-adaptive-white mb-8"
          >
            Experience
          </motion.h2>
          <ExperienceTimeline experiences={experiences} />
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading font-semibold text-adaptive-white mb-8"
          >
            Skills
          </motion.h2>
          
          {/* Skill Progress Bars */}
          <div className="glass p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-heading font-semibold text-adaptive-white mb-6 flex items-center space-x-3">
              <Code2 className="text-primary" size={24} />
              <span>Core Proficiencies</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillProficiencies).map(([skill, proficiency], index) => (
                <SkillProgressBar
                  key={skill}
                  skill={skill}
                  proficiency={proficiency}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Code2 className="text-primary" size={24} />
                <h3 className="text-xl font-heading font-semibold text-adaptive-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 glass-light rounded-full text-sm text-adaptive-gray-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Wrench className="text-secondary" size={24} />
                <h3 className="text-xl font-heading font-semibold text-adaptive-white">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 glass-light rounded-full text-sm text-adaptive-gray-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="text-primary" size={24} />
                <h3 className="text-xl font-heading font-semibold text-adaptive-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 glass-light rounded-full text-sm text-adaptive-gray-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Wrench className="text-secondary" size={24} />
                <h3 className="text-xl font-heading font-semibold text-adaptive-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 glass-light rounded-full text-sm text-adaptive-gray-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-8"
          >
            <Award className="text-primary" size={32} />
            <h2 className="text-3xl font-heading font-semibold text-adaptive-white">Certificates</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px', amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-adaptive-white mb-1">{cert.name}</h3>
                <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                <p className="text-adaptive-gray text-xs mt-1">{cert.date}</p>
                <p className="text-adaptive-gray-light text-sm mt-2">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;

