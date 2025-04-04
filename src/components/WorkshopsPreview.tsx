
import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, HardDrive, Shield, Cpu } from 'lucide-react';

interface WorkshopCard {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const workshops: WorkshopCard[] = [
  {
    id: 1,
    title: "AI & ML Workshop",
    icon: <Cpu className="h-12 w-12" />,
    color: "cyber-blue",
    description: "Dive into artificial intelligence and machine learning fundamentals. Build and train models for real-world applications."
  },
  {
    id: 2,
    title: "Blockchain Fundamentals",
    icon: <Database className="h-12 w-12" />,
    color: "cyber-green",
    description: "Explore decentralized technology and learn how to implement basic blockchain solutions."
  },
  {
    id: 3,
    title: "IoT Innovation Lab",
    icon: <HardDrive className="h-12 w-12" />,
    color: "cyber-purple",
    description: "Connect the physical world with digital solutions through Internet of Things technologies."
  },
  {
    id: 4,
    title: "Full-Stack Development",
    icon: <Code2 className="h-12 w-12" />,
    color: "cyber-blue",
    description: "Build complete web applications using modern frameworks and best practices."
  },
  {
    id: 5,
    title: "Cybersecurity Defense",
    icon: <Shield className="h-12 w-12" />,
    color: "cyber-green",
    description: "Learn defensive security techniques and protect systems from cyber threats."
  },
  {
    id: 6,
    title: "Cloud Infrastructure",
    icon: <Globe className="h-12 w-12" />,
    color: "cyber-purple",
    description: "Deploy and manage scalable applications using cloud technologies."
  }
];

const WorkshopsPreview = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      // April 20, 2025 - Hackathon day
      const targetDate = new Date(2025, 3, 20).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCardHover = (id: number) => {
    setActiveCard(id);
    
    // Play hover sound
    const audio = new Audio('/hover-sound.mp3');
    audio.volume = 0.1;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
  };

  return (
    <section id="workshops" className="section-padding relative bg-dark-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-6 text-cyber-blue glow-text-blue">
          Workshops Preview
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Enhance your skills with our expert-led sessions. Full details coming soon!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div 
              key={workshop.id}
              className={`cyber-card relative overflow-hidden ${workshop.color === 'cyber-blue' ? '' : workshop.color === 'cyber-green' ? 'cyber-card-green' : 'cyber-card-purple'}`}
              onMouseEnter={() => handleCardHover(workshop.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-8 glass-effect h-full">
                <div className={`mb-6 text-${workshop.color}`}>
                  {workshop.icon}
                </div>
                
                <h3 className={`text-xl font-orbitron font-bold mb-4 text-${workshop.color}`}>
                  {workshop.title}
                </h3>
                
                <div className="relative overflow-hidden h-24">
                  <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${activeCard === workshop.id ? 'translate-y-full' : 'translate-y-0'}`}>
                    <p className="text-center text-lg font-orbitron">To be revealed soon</p>
                  </div>
                  
                  <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${activeCard === workshop.id ? 'translate-y-0' : '-translate-y-full'}`}>
                    <p className="text-sm text-gray-300">{workshop.description}</p>
                  </div>
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-${workshop.color}`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Full Workshop Details & Challenges Will Be Revealed On:</p>
          <p className="text-cyber-purple mb-6">April 20, 2025 (Hackathon Day)</p>
          <div className="flex justify-center gap-4">
            <div className="cyber-card p-3 w-20">
              <div className="text-2xl font-orbitron text-cyber-blue">{timeLeft.days}</div>
              <div className="text-xs text-gray-400">DAYS</div>
            </div>
            <div className="cyber-card p-3 w-20">
              <div className="text-2xl font-orbitron text-cyber-green">{timeLeft.hours}</div>
              <div className="text-xs text-gray-400">HOURS</div>
            </div>
            <div className="cyber-card p-3 w-20">
              <div className="text-2xl font-orbitron text-cyber-purple">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-400">MINUTES</div>
            </div>
            <div className="cyber-card p-3 w-20">
              <div className="text-2xl font-orbitron text-cyber-blue">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-400">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsPreview;
