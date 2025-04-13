import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navLinks = [{
  name: 'Home',
  href: '#hero'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Workshops',
  href: '#workshops'
}, {
  name: 'Hackathon',
  href: '#hackathon'
}, {
  name: 'Prizes',
  href: '#prizes'
}, {
  name: 'Contact',
  href: '#contact'
}];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Play click sound if enabled
    if (soundEnabled) {
      const audio = new Audio('/click-sound.mp3');
      audio.volume = 0.3;
      audio.play().catch(err => console.log('Audio playback prevented:', err));
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);

    // Play toggle sound
    const audio = new Audio('/toggle-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);

    // Play click sound if enabled
    if (soundEnabled) {
      const audio = new Audio('/click-sound.mp3');
      audio.volume = 0.3;
      audio.play().catch(err => console.log('Audio playback prevented:', err));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-darker-gray bg-opacity-80 backdrop-blur-lg' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-orbitron font-bold text-cyber-blue glitch-hover">
            <span className="glow-text-blue">IT Impact</span> <span className="text-cyber-green glow-text-green">V1.0</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => <a key={index} href={link.href} className="text-gray-300 hover:text-cyber-blue transition-colors glitch-hover" onClick={handleLinkClick}>
                {link.name}
              </a>)}
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://docs.google.com/forms/d/1DTEN7H4ZPSKW0BXuoXgYEP0iBi4wXoftA733AW26nZs/viewform?edit_requested=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex"
              onClick={handleLinkClick}
            >
              <Button className="cyber-btn flex items-center gap-2 bg-cyber-purple hover:bg-cyber-purple/80 border-cyber-purple text-white">
                Register Now
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            
            <button className="md:hidden p-2 text-gray-300 hover:text-cyber-blue transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-dark-gray backdrop-blur-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 border-b border-cyber-blue' : 'max-h-0'}`}>
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link, index) => <a key={index} href={link.href} className="block py-2 text-gray-300 hover:text-cyber-blue transition-colors" onClick={handleLinkClick}>
              {link.name}
            </a>)}
          <a 
            href="https://docs.google.com/forms/d/1DTEN7H4ZPSKW0BXuoXgYEP0iBi4wXoftA733AW26nZs/viewform?edit_requested=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block py-2 text-cyber-purple hover:text-cyber-purple/80 font-bold"
            onClick={handleLinkClick}
          >
            Register Now →
          </a>
        </div>
      </div>
    </nav>;
};

export default Navbar;
