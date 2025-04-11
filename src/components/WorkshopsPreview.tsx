
import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Brain, Cpu, Palette } from 'lucide-react';

interface WorkshopCard {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  session: string;
  time: string;
}

const workshops: WorkshopCard[] = [
  {
    id: 1,
    title: "Unlocking the Future: Web3 & Blockchain Essentials",
    icon: <Database className="h-12 w-12" />,
    color: "cyber-blue",
    description: "Get started with the revolutionary world of Web3 and Blockchain! Understand the core principles and build your first decentralized mini-project. This workshop is your gateway to the next internet.",
    session: "Session 1",
    time: "09:30 → 12:00 (Saturday, April 19)"
  },
  {
    id: 2,
    title: "Design That Speaks: UI/UX Fundamentals",
    icon: <Palette className="h-12 w-12" />,
    color: "cyber-green",
    description: "Learn the art of intuitive design and how to use tools like Figma to craft user-friendly interfaces. Whether you're a design newbie or curious techie, this workshop turns your ideas into interactive experiences.",
    session: "Session 1",
    time: "09:30 → 12:00 (Saturday, April 19)"
  },
  {
    id: 3,
    title: "Smarter Systems: AI-Powered Industry Solutions",
    icon: <Cpu className="h-12 w-12" />,
    color: "cyber-purple",
    description: "Explore the power of Natural Language Processing (NLP) and predictive/generative AI. Build intelligent systems that understand, learn, and generate! The future of industry is AI—start building it today.",
    session: "Session 1",
    time: "09:30 → 12:00 (Saturday, April 19)"
  },
  {
    id: 4,
    title: "Next-Gen Tech: Diving into the Hedera Ecosystem",
    icon: <Globe className="h-12 w-12" />,
    color: "cyber-blue",
    description: "Take a deep dive into the Hedera Hashgraph world—a powerful alternative to traditional blockchain. Learn how to build efficient and eco-friendly dApps with real-world impact. Speed. Security. Innovation.",
    session: "Session 2",
    time: "13:30 → 15:30 (Saturday, April 19)"
  },
  {
    id: 5,
    title: "Deep Dive into Deep Learning",
    icon: <Brain className="h-12 w-12" />,
    color: "cyber-green",
    description: "From theory to practice, uncover the magic behind deep learning models. Train your own neural networks and understand how machines learn from data. No magic—just math, models, and mind-blowing results!",
    session: "Session 2",
    time: "13:30 → 15:30 (Saturday, April 19)"
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
          Workshop Preview
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Enhance your skills with our expert-led sessions across two main time slots!
        </p>
        
        {/* Session headers */}
        <div className="mb-10 space-y-6">
          <div className="cyber-card p-4 max-w-md mx-auto text-center">
            <h3 className="text-xl font-orbitron text-cyber-blue">🕘 Session 1: 09:30 → 12:00</h3>
            <p className="text-gray-300">Saturday, April 19</p>
          </div>
        </div>
        
        {/* First session workshops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workshops.filter(w => w.session === "Session 1").map((workshop) => (
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
                
                <p className="text-sm text-gray-300 min-h-[100px]">{workshop.description}</p>
              </div>
              
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-${workshop.color}`}></div>
            </div>
          ))}
        </div>
        
        {/* Session 2 header */}
        <div className="mb-10 space-y-6">
          <div className="cyber-card cyber-card-purple p-4 max-w-md mx-auto text-center">
            <h3 className="text-xl font-orbitron text-cyber-purple">🕜 Session 2: 13:30 → 15:30</h3>
            <p className="text-gray-300">Saturday, April 19</p>
          </div>
        </div>
        
        {/* Second session workshops */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {workshops.filter(w => w.session === "Session 2").map((workshop) => (
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
                
                <p className="text-sm text-gray-300 min-h-[100px]">{workshop.description}</p>
              </div>
              
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-${workshop.color}`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Full Workshop Materials Will Be Available On:</p>
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
