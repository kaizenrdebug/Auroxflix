import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#090a0a] border-t border-white/10 py-8 px-6 mt-12 transition-all duration-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 animate-fade-in-delayed">
        <div>
          <h2 className="text-2xl font-semibold text-white">Auroxflix</h2>
          <p className="text-gray-400 mt-1 text-sm">
            All your entertainment. One platform. Free forever.
          </p>
          <a 
            href="mailto:aivanleigh25@gmail.com" 
            className="block mt-2 text-gray-400 hover:text-white transition"
          >
            aivanleigh25@gmail.com
          </a>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://github.com/kaizenrdebug" 
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a 
            href="https://instagram.com/sandipeyy_" 
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;