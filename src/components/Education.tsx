import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'M.S., Business Analytics',
      institution: 'Saint Peter\'s University',
      period: 'Feb 2023 - Mar 2025',
      location: 'Jersey City, NJ',
    },
    {
      degree: 'B.Tech, Computer Science & Engineering',
      institution: 'Bharath University',
      period: 'Aug 2017 - May 2021',
      location: 'Chennai, India',
    },
  ];

  const certifications = [
    {
      name: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
    },
    {
      name: 'Certified Business Analyst Professional',
      issuer: 'IIBA',
    },
  ];

  return (
    <section id="education" className="section-container bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">Education</h2>
          <motion.div
            ref={ref}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card border-l-4 border-secondary-500 flex"
              >
                <div className="mr-4 text-secondary-500">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                  <p className="text-secondary-600 font-medium">{edu.institution}</p>
                  <div className="flex justify-between mt-2 text-sm text-slate-500">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h2 className="section-title">Certifications</h2>
          <motion.div
            ref={ref}
            className="space-y-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card border-l-4 border-accent-500 flex"
              >
                <div className="mr-4 text-accent-500">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{cert.name}</h3>
                  <p className="text-accent-600 font-medium">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;