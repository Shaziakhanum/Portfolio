import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Activity, Home } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "LinkedIn-Style Campaign Mock (Automotive Sales Analysis)",
      icon: <BarChart className="h-12 w-12 text-primary-500" />,
      description: "Created a visual dashboard and post-style content to present marketing insights from customer segment data. Identified high-performing buyer groups and proposed A/B testing ideas for campaign improvement.",
      tags: ["Data Analysis", "Marketing", "A/B Testing", "Visualization"],
      bgColor: "bg-primary-50",
      borderColor: "border-primary-500",
    },
    {
      title: "Medical Cost Trends in U.S. Health Insurance",
      icon: <Activity className="h-12 w-12 text-secondary-500" />,
      description: "Conducted T-tests and ANOVA to assess pricing impacts across insurance plans. Designed visuals to support premium-setting decisions based on demographic and health factors.",
      tags: ["Healthcare Analytics", "Statistical Analysis", "Data Visualization", "Cost Modeling"],
      bgColor: "bg-secondary-50",
      borderColor: "border-secondary-500",
    },
    {
      title: "IoT Home Security System",
      icon: <Home className="h-12 w-12 text-accent-500" />,
      description: "Developed a prototype smart-home security system with real-time alerts and a minimal web interface. Integrated hardware/software interaction and documented user workflows.",
      tags: ["IoT", "Security", "Hardware Integration", "UX Design"],
      bgColor: "bg-accent-50",
      borderColor: "border-accent-500",
    },
  ];

  return (
    <section id="projects" className="section-container bg-slate-50 formula-bg">
      <div className="relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="mb-8 flex justify-center flex-wrap gap-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeProject === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-primary-50'
              }`}
            >
              {project.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: activeProject === index ? 1 : 0,
                scale: activeProject === index ? 1 : 0.9,
                display: activeProject === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.4 }}
              className={`card ${project.bgColor} border-l-4 ${project.borderColor}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-white rounded-lg shadow-sm">
                  {project.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-lg text-slate-700 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;