import React from 'react';
import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 formula-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/5 to-secondary-900/5 z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-4">
          <span className="block">Shazia Farheen Khanum</span>
          <span className="block text-primary-600">Mohammed</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-medium text-slate-600 mb-6">
          Business Analyst & Data Enthusiast
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-slate-600">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-primary-500" />
            <span>Maple Shade, NJ, USA</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-primary-500" />
            <span>smohammed23@saintpeters.edu</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-5 h-5 mr-2 text-primary-500" />
            <a 
              href="https://linkedin.com/in/shazia-farheen-khanum-mohammed-633904188" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        
        <p className="text-lg max-w-2xl mx-auto text-slate-700 mb-10">
          Recent M.S. Business Analytics student and Certified Scrum Master with experience in data analysis 
          and stakeholder reporting. Passionate about digital marketing, content strategy, and using data 
          to inform engagement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Get In Touch
          </a>
          <a 
            href="#about" 
            className="px-6 py-3 bg-white text-primary-600 border border-primary-600 
            rounded-md font-medium hover:bg-primary-50 transition-colors duration-300 
            inline-flex items-center justify-center"
          >
            Learn More
          </a>
        </div>
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-primary-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;