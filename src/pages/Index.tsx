
import React, { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventOverview from '@/components/EventOverview';
import WorkshopsPreview from '@/components/WorkshopsPreview';
import HackathonChallenges from '@/components/HackathonChallenges';
import PrizesSection from '@/components/PrizesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Easter egg - Konami code
const konamiCode = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

const Index = () => {
  useEffect(() => {
    let konamiIndex = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the key matches the next key in the Konami code
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        // If we've completed the Konami code sequence
        if (konamiIndex === konamiCode.length) {
          activateEasterEgg();
          konamiIndex = 0; // Reset for next time
        }
      } else {
        konamiIndex = 0; // Reset if wrong key
      }
    };
    
    const activateEasterEgg = () => {
      // Create a modal with a special message
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md';
      
      const content = document.createElement('div');
      content.className = 'cyber-card cyber-card-purple p-8 max-w-md text-center';
      content.innerHTML = `
        <h2 class="text-2xl font-orbitron font-bold mb-4 text-cyber-purple">🎮 Secret Challenge Unlocked!</h2>
        <p class="mb-6">You've discovered a hidden challenge for the IT Impact Hackathon!</p>
        <p class="text-lg font-semibold mb-4 text-cyber-green">Build a mini game related to tech history</p>
        <p class="text-sm text-gray-400 mb-6">Present this secret challenge to the organizers during the event for a special prize!</p>
        <button class="cyber-btn rounded-sm text-base w-full">Close</button>
      `;
      
      modal.appendChild(content);
      document.body.appendChild(modal);
      
      // Play a special sound
      const audio = new Audio('/unlock-sound.mp3');
      audio.volume = 0.5;
      audio.play().catch(err => console.log('Audio playback prevented:', err));
      
      // Close modal on button click or outside click
      modal.addEventListener('click', (e) => {
        if (e.target === modal || (e.target as HTMLElement).tagName === 'BUTTON') {
          document.body.removeChild(modal);
        }
      });
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-darker-gray">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <EventOverview />
      <WorkshopsPreview />
      <HackathonChallenges />
      <PrizesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
