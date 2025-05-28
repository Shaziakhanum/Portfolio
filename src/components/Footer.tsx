import React from 'react';
import { BarChart2, Linkedin, Mail, Phone, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <BarChart2 className="h-8 w-8 text-primary-400" />
            <span className="ml-2 text-xl font-semibold">Shazia Farheen</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/shazia-farheen-khanum-mohammed-633904188" aria-label="LinkedIn" className="text-slate-300 hover:text-primary-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:smohammed23@saintpeters.edu" aria-label="Email" className="text-slate-300 hover:text-primary-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="tel:+12674230985" aria-label="Phone" className="text-slate-300 hover:text-primary-400 transition-colors">
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Shazia Farheen Khanum Mohammed. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#about" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">About</a>
            <a href="#experience" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Experience</a>
            <a href="#education" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Education</a>
            <a href="#projects" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;