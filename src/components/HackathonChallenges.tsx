
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Lock, Unlock, Cpu, Cloud, HardDrive, 
  Globe, PieChart, ShieldAlert, Zap
} from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  color: string;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Smart City Solutions",
    description: "Build IoT solutions for urban challenges like traffic, waste management, or public safety.",
    icon: <HardDrive className="h-8 w-8" />,
    category: "IoT",
    difficulty: "Medium",
    color: "cyber-blue"
  },
  {
    id: 2,
    title: "HealthTech Innovation",
    description: "Create digital health applications that improve patient care or medical processes.",
    icon: <PieChart className="h-8 w-8" />,
    category: "AI/ML",
    difficulty: "Hard",
    color: "cyber-green"
  },
  {
    id: 3,
    title: "FinTech Platform",
    description: "Develop secure financial technology solutions for transactions, savings, or investments.",
    icon: <ShieldAlert className="h-8 w-8" />,
    category: "Blockchain",
    difficulty: "Hard",
    color: "cyber-purple"
  },
  {
    id: 4,
    title: "Climate Tech",
    description: "Build solutions that address climate change, sustainability, or environmental monitoring.",
    icon: <Globe className="h-8 w-8" />,
    category: "Full-Stack",
    difficulty: "Medium",
    color: "cyber-blue"
  },
  {
    id: 5,
    title: "EdTech Platform",
    description: "Create innovative educational technology to enhance learning experiences.",
    icon: <Cloud className="h-8 w-8" />,
    category: "Cloud",
    difficulty: "Medium",
    color: "cyber-green"
  },
  {
    id: 6,
    title: "Cybersecurity Tool",
    description: "Develop tools for threat detection, vulnerability assessment, or security education.",
    icon: <ShieldAlert className="h-8 w-8" />,
    category: "Cybersecurity",
    difficulty: "Hard",
    color: "cyber-purple"
  },
  {
    id: 7,
    title: "AI Assistant",
    description: "Build an AI-powered assistant for specific industry or accessibility needs.",
    icon: <Cpu className="h-8 w-8" />,
    category: "AI/ML",
    difficulty: "Hard",
    color: "cyber-blue"
  },
  {
    id: 8,
    title: "Open Innovation",
    description: "Bring your own idea to solve a real-world problem using any technology stack.",
    icon: <Zap className="h-8 w-8" />,
    category: "Any",
    difficulty: "Easy",
    color: "cyber-green"
  }
];

const HackathonChallenges = () => {
  const [revealed, setRevealed] = useState(false);
  const { toast } = useToast();

  const handleReveal = () => {
    // Play unlock sound
    const audio = new Audio('/unlock-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
    
    setRevealed(true);
    toast({
      title: "Challenges Revealed!",
      description: "Check out the hackathon challenges for IT Impact V1.0.",
      variant: "default",
    });
  };

  return (
    <section id="hackathon" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-6 text-cyber-purple glow-text-purple">
          Hackathon Challenges
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Put your skills to the test with our industry-inspired challenges. Form teams of 2-4 people and build innovative solutions.
        </p>
        
        {!revealed ? (
          <div className="text-center py-20">
            <div className="inline-block mb-8">
              <Lock className="h-20 w-20 text-cyber-purple animate-pulse mx-auto" />
              <p className="mt-4 text-xl">Challenges are currently locked</p>
            </div>
            
            <button 
              onClick={handleReveal}
              className="cyber-btn rounded-sm text-lg bg-cyber-purple bg-opacity-10 border-cyber-purple text-cyber-purple"
              style={{
                boxShadow: "0 0 10px rgba(190, 15, 255, 0.5), inset 0 0 10px rgba(190, 15, 255, 0.5)"
              }}
            >
              Reveal Challenges
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-0 right-0">
              <Unlock className="h-8 w-8 text-cyber-purple" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out">
              {challenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  className={`cyber-card ${challenge.color === 'cyber-blue' ? '' : challenge.color === 'cyber-green' ? 'cyber-card-green' : 'cyber-card-purple'} transition-all duration-500 ease-in-out opacity-0 animate-[fadeIn_0.5s_forwards]`}
                  style={{ animationDelay: `${challenge.id * 0.1}s` }}
                >
                  <div className="p-6 glass-effect">
                    <div className={`flex items-center mb-4 text-${challenge.color}`}>
                      {challenge.icon}
                      <div className="ml-3 text-sm font-semibold">{challenge.category}</div>
                      <div className={`ml-auto px-2 py-1 text-xs rounded-full ${
                        challenge.difficulty === 'Easy' 
                          ? 'bg-cyber-green bg-opacity-20 text-cyber-green' 
                          : challenge.difficulty === 'Medium'
                            ? 'bg-cyber-blue bg-opacity-20 text-cyber-blue'
                            : 'bg-cyber-purple bg-opacity-20 text-cyber-purple'
                      }`}>
                        {challenge.difficulty}
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-orbitron font-bold mb-3 text-${challenge.color}`}>
                      {challenge.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-sm">
                Note: Additional details, resources, and specific requirements for each challenge will be provided on the day of the hackathon.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HackathonChallenges;
