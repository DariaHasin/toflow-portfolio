import React from 'react';
import { BrainCircuit, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <BrainCircuit className="w-6 h-6 text-primary-400" />
            <span className="text-lg font-bold gradient-text">TOFlow</span>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p className="font-semibold text-gray-300">Daria Hasin</p>
            <p className="mt-1">Master's Thesis Project</p>
            <p className="mt-1 text-xs">Supervised by Prof. Dafna Ben Bashat</p>
            <p className="mt-2 text-xs">© 2025</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/dariahasin/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div
              className="p-2 glass rounded-lg opacity-50 cursor-not-allowed relative group"
              aria-label="GitHub (Temporarily Unavailable)"
            >
              <Github className="w-5 h-5" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Temporarily unavailable
              </span>
            </div>
            <a
              href="mailto:dhasin1995@gmail.com"
              className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Built with React, Vite, and Tailwind CSS</p>
          <p className="mt-2">Last Updated: November 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

