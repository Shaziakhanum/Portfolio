import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Skill = {
  category: string;
  skills: Array<{
    name: string;
    level: number; // 1-5 scale
  }>;
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: Skill[] = [
    {
      category: 'Analytics & Reporting',
      skills: [
        { name: 'Excel', level: 5 },
        { name: 'SQL', level: 4 },
        { name: 'Power BI', level: 4 },
        { name: 'Tableau', level: 3 },
      ],
    },
    {
      category: 'Marketing & Creative Tools',
      skills: [
        { name: 'Canva', level: 4 },
        { name: 'LinkedIn Campaign Management', level: 3 },
        { name: 'A/B Testing', level: 3 },
        { name: 'Content Strategy', level: 4 },
      ],
    },
    {
      category: 'Documentation & Testing',
      skills: [
        { name: 'Requirements gathering', level: 5 },
        { name: 'UAT', level: 4 },
        { name: 'Validation scripts', level: 3 },
      ],
    },
    {
      category: 'Technologies',
      skills: [
        { name: 'Python', level: 3 },
        { name: 'MySQL', level: 4 },
        { name: 'Azure DevOps', level: 3 },
        { name: 'Jira', level: 4 },
        { name: 'Git', level: 3 },
      ],
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="skills" className="section-container bg-white">
      <h2 className="section-title">Skills & Expertise</h2>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="card">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 border-b border-slate-200 pb-2">
              {category.category}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">
                      {skill.level === 5 ? 'Expert' :
                       skill.level === 4 ? 'Advanced' :
                       skill.level === 3 ? 'Intermediate' :
                       skill.level === 2 ? 'Basic' : 'Beginner'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level * 20}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;