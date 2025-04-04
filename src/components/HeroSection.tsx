
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [titleText, setTitleText] = useState("");
  const fullTitle = "🚀 IT Impact V1.0 – Ignite Innovation! 🔥";
  const [index, setIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (index < fullTitle.length) {
      const timer = setTimeout(() => {
        setTitleText(titleText + fullTitle.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, titleText]);

  const handleRegisterClick = () => {
    toast({
      title: "Registration Coming Soon",
      description: "Registration will open soon! Stay tuned for updates.",
      variant: "default",
    });

    // Play click sound
    const audio = new Audio('/click-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden py-20">
      <div className="absolute inset-0 circuit-background animate-circuit-flow"></div>
      
      <div className="relative z-10 max-w-5xl px-6 py-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold tracking-wider mb-6 text-cyber-blue animate-text-glow">
          {titleText || " "}
          <span className="animate-blink">|</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 mt-4">
          <div className="flex items-center gap-2 text-cyber-green">
            <Calendar className="h-5 w-5" />
            <span className="text-lg font-semibold">19 & 20 April</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-cyber-blue"></div>
          
          <div className="flex items-center gap-2 text-cyber-purple">
            <MapPin className="h-5 w-5" />
            <span className="text-lg font-semibold">ISIMM, Monastir</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300">
          Join the ultimate tech event bringing together innovators, developers, and industry leaders.
        </p>
        
        <button 
          onClick={handleRegisterClick}
          className="cyber-btn rounded-sm text-lg animate-pulse-glow"
        >
          Register Now
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-14 border-2 border-cyber-blue rounded-full flex justify-center">
          <span className="block w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-float"></span>
        </div>
        <p className="text-center text-cyber-blue text-sm mt-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
