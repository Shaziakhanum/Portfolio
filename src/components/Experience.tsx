import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Business Analyst',
      company: 'Accenture',
      location: 'Bangalore, India',
      period: 'Aug 2021 – Feb 2023',
      responsibilities: [
        'Collaborated with senior analysts to gather and document business requirements for IT and data initiatives.',
        'Executed data extraction and analysis using SQL and Python to validate solution performance.',
        'Developed Power BI dashboards to monitor KPIs and communicate insights visually.',
        'Prepared reports and presentations with actionable recommendations based on data analysis.',
        'Participated in UAT processes and defect resolution cycles.',
      ],
    },
    {
      title: 'Associate CS Internet',
      company: 'Sutherland',
      location: 'Chennai, India',
      period: 'Sep 2020 – Jan 2021',
      responsibilities: [
        'Assisted in documenting workflows and customer-service improvements.',
        'Conducted Excel-based analysis of call center metrics and CRM performance.',
        'Created presentations summarizing insights and operational opportunities.',
      ],
    },
    {
      title: 'Customer Operations Intern',
      company: 'Sutherland',
      location: 'Chennai, India',
      period: 'Sep 2019 – Nov 2019',
      responsibilities: [
        'Tracked service metrics and created documentation for process improvement.',
        'Coordinated with IT and QA teams to implement and measure efficiency gains.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-slate-50 formula-bg">
      <div className="relative z-10">
        <h2 className="section-title">Professional Experience</h2>
        
        <div
          ref={ref}
          className="relative"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-primary-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-3 bg-primary-500 rounded-full p-1.5 border-4 border-white">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              
              <div className="card border-l-4 border-primary-500">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                    <p className="text-lg text-primary-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{exp.location}</p>
                    <p className="text-sm font-medium text-slate-700">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5 mr-2" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;