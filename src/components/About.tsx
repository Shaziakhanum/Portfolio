import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Database, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const strengths = [
    {
      icon: <LineChart className="h-10 w-10 text-primary-500" />,
      title: 'Data Analysis',
      description:
        'Skilled in extracting insights from complex datasets using SQL and Python to drive informed business decisions.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Stakeholder Communication',
      description:
        'Experience in translating technical findings into clear presentations and recommendations for diverse audiences.',
    },
    {
      icon: <Database className="h-10 w-10 text-primary-500" />,
      title: 'Business Intelligence',
      description:
        'Proficient in creating interactive dashboards with Power BI to monitor KPIs and visualize data effectively.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary-500" />,
      title: 'Problem Solving',
      description:
        'Passionate about identifying opportunities and developing creative solutions to complex business challenges.',
    },
  ];

  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-slate-700">
            As a recent M.S. Business Analytics graduate from Saint Peter's University and a Certified Scrum Master, 
            I bring 1.5 years of hands-on experience in data analysis and stakeholder reporting to the table.
          </p>
          <p className="text-lg text-slate-700">
            My passion lies at the intersection of digital marketing, content strategy, and data-driven decision 
            making. I excel at leveraging analytical tools like Power BI and SQL to derive meaningful insights 
            and present them in compelling ways.
          </p>
          <p className="text-lg text-slate-700">
            I'm particularly interested in opportunities that allow me to combine my technical skills with creative 
            thinking to develop effective strategies. My background in both business analytics and computer science 
            provides me with a unique perspective on solving complex problems.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:border-l-4 hover:border-primary-500 transition-all duration-300"
            >
              <div className="mb-4">{strength.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{strength.title}</h3>
              <p className="text-slate-600">{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;