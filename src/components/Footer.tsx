
import React from 'react';
import { HeartPulse } from 'lucide-react';

const Footer = () => {
  // Current year
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 bg-dark-gray border-t border-cyber-blue-glow">
      <div className="absolute inset-0 z-0 circuit-background animate-circuit-flow opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="text-3xl font-orbitron font-bold">
              <span className="text-cyber-blue glow-text-blue">IT Impact</span> <span className="text-cyber-green glow-text-green">V1.0</span>
            </div>
            <p className="text-sm text-center text-gray-400 mt-2">April 19-20, 2024 | ISIMM, Monastir</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#hero" className="text-gray-300 hover:text-cyber-blue transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-cyber-blue transition-colors">About</a>
            <a href="#workshops" className="text-gray-300 hover:text-cyber-blue transition-colors">Workshops</a>
            <a href="#hackathon" className="text-gray-300 hover:text-cyber-blue transition-colors">Hackathon</a>
            <a href="#prizes" className="text-gray-300 hover:text-cyber-blue transition-colors">Prizes</a>
            <a href="#contact" className="text-gray-300 hover:text-cyber-blue transition-colors">Contact</a>
          </div>
          
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent mb-8"></div>
          
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 mb-2">Powered by</p>
            <div className="font-orbitron font-bold text-xl text-cyber-purple glow-text-purple">ARSII ISIMM</div>
            <p className="text-xs text-gray-500 mt-1">Association of Network and Information Systems Engineers</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-gray-500">
            <p>&copy; {year} IT Impact V1.0. All rights reserved.</p>
            
            <div className="flex items-center mt-4 md:mt-0">
              <span>Made with</span>
              <HeartPulse className="h-4 w-4 mx-1 text-cyber-purple" />
              <span>by ARSII Tech Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
