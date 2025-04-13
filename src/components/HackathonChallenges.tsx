import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Lock, Unlock, Cpu, Cloud, HardDrive, 
  Globe, PieChart, ShieldAlert, Zap, Clock,
  ExternalLink
} from 'lucide-react';
import { Button } from "@/components/ui/button";

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
  const [canReveal, setCanReveal] = useState(false);
  const [countdown, setCountdown] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      const hackathonDate = new Date(2025, 3, 20); // April 20, 2025 (month is 0-indexed)
      
      const isHackathonDay = now.getFullYear() === hackathonDate.getFullYear() &&
                             now.getMonth() === hackathonDate.getMonth() &&
                             now.getDate() === hackathonDate.getDate();
      
      setCanReveal(isHackathonDay);

      if (!isHackathonDay && hackathonDate > now) {
        const diffTime = hackathonDate.getTime() - now.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
        
        setTimeRemaining({
          days: diffDays,
          hours: diffHours,
          minutes: diffMinutes,
          seconds: diffSeconds
        });
        
        setCountdown(`${diffDays}d ${diffHours}h ${diffMinutes}m until challenges are revealed`);
      } else if (hackathonDate < now) {
        setCountdown('Hackathon has ended');
      }
    };

    checkDate();
    const interval = setInterval(checkDate, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleReveal = () => {
    if (!canReveal) {
      toast({
        title: "Cannot Reveal Yet",
        description: "Challenges will be revealed on April 20, 2025 (Hackathon Day).",
        variant: "destructive",
      });
      return;
    }

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

  const handleCardHover = (id: number | null) => {
    setHoveredCard(id);
    
    if (id !== null && revealed) {
      const audio = new Audio('/hover-sound.mp3');
      audio.volume = 0.1;
      audio.play().catch(err => console.log('Audio playback prevented:', err));
    }
  };

  return (
    <section id="hackathon" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full circuit-background"></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-cyber-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-cyber-purple rounded-full blur-3xl animate-[pulse_4s_infinite]"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyber-green rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-6 text-cyber-purple glow-text-purple before:content-['<'] after:content-['>'] before:opacity-40 after:opacity-40 before:mr-2 after:ml-2">
          Hackathon Challenges
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-dark-gray/20 p-4 rounded-lg">
          Put your skills to the test with our industry-inspired challenges. Form teams of 2-4 people and build innovative solutions that could shape the future.
        </p>
        
        {!revealed ? (
          <div className="text-center py-20 backdrop-blur-sm bg-dark-gray/10 border border-cyber-purple/20 rounded-xl p-10 transition-all duration-500 hover:border-cyber-purple/40">
            <div className="relative mb-12 glitch-container">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-cyber-purple/20 rounded-full blur-xl animate-[pulse_3s_infinite]"></div>
              <Lock className="h-24 w-24 text-cyber-purple animate-pulse mx-auto relative z-10" />
              <p className="mt-6 text-2xl font-orbitron text-white">Challenges are currently locked</p>
              {!canReveal && countdown && (
                <div className="mt-8">
                  <div className="flex items-center justify-center gap-4 text-cyber-blue mb-4">
                    <Clock className="h-5 w-5" />
                    <span className="text-xl">{countdown}</span>
                  </div>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-mono bg-darker-gray p-3 w-20 rounded-md border border-cyber-blue text-cyber-blue">
                        {timeRemaining.days.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs mt-1 text-gray-400">DAYS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-mono bg-darker-gray p-3 w-20 rounded-md border border-cyber-blue text-cyber-blue">
                        {timeRemaining.hours.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs mt-1 text-gray-400">HOURS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-mono bg-darker-gray p-3 w-20 rounded-md border border-cyber-blue text-cyber-blue">
                        {timeRemaining.minutes.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs mt-1 text-gray-400">MINUTES</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-mono bg-darker-gray p-3 w-20 rounded-md border border-cyber-blue text-cyber-green animate-pulse">
                        {timeRemaining.seconds.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs mt-1 text-gray-400">SECONDS</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleReveal}
              className={`cyber-btn text-lg relative overflow-hidden group ${canReveal 
                ? 'bg-cyber-purple bg-opacity-10 border-cyber-purple text-cyber-purple' 
                : 'bg-gray-700 bg-opacity-10 border-gray-500 text-gray-500 cursor-not-allowed'}`}
              style={{
                boxShadow: canReveal 
                  ? "0 0 10px rgba(190, 15, 255, 0.5), inset 0 0 10px rgba(190, 15, 255, 0.5)"
                  : "none"
              }}
            >
              {canReveal ? (
                <>
                  <span className="relative z-10">Reveal Challenges</span>
                  <span className="absolute inset-0 bg-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </>
              ) : (
                "Locked Until Hackathon Day"
              )}
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-0 right-0">
              <Unlock className="h-8 w-8 text-cyber-purple animate-pulse" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out">
              {challenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  className={`cyber-card transform transition-all duration-500 ${
                    hoveredCard === challenge.id ? 'scale-105 -translate-y-2' : ''
                  } ${challenge.color === 'cyber-blue' ? '' : challenge.color === 'cyber-green' ? 'cyber-card-green' : 'cyber-card-purple'} transition-all duration-500 ease-in-out opacity-0 animate-[fadeIn_0.5s_forwards]`}
                  style={{ animationDelay: `${challenge.id * 0.1}s` }}
                  onMouseEnter={() => handleCardHover(challenge.id)}
                  onMouseLeave={() => handleCardHover(null)}
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
                    
                    <div className={`w-full h-1 mt-4 bg-${challenge.color} bg-opacity-20 rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-${challenge.color} transition-all duration-1000 rounded-full`}
                        style={{ 
                          width: hoveredCard === challenge.id ? '100%' : '30%',
                          boxShadow: `0 0 10px ${challenge.color === 'cyber-blue' ? 'rgba(0, 255, 255, 0.7)' : challenge.color === 'cyber-green' ? 'rgba(0, 255, 102, 0.7)' : 'rgba(190, 15, 255, 0.7)'}` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-sm backdrop-blur-sm bg-dark-gray/20 p-4 rounded-lg inline-block mb-8">
                <span className="text-cyber-purple font-bold">Note:</span> Additional details, resources, and specific requirements for each challenge will be provided on the day of the hackathon.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rotate-45 border-8 border-cyber-blue/10 rounded-lg"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 -rotate-12 border-8 border-cyber-purple/10 rounded-lg"></div>
      
      <div className="mt-10 text-center">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSczL0WO_jTzx_tdVoN369pUrJoqKejYX5MK1QUPqVIWHFHLEA/viewform?usp=dialog" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="cyber-btn flex items-center gap-2 bg-cyber-purple hover:bg-cyber-purple/80 border-cyber-purple text-white text-lg px-8 py-6">
            Register Now
            <ExternalLink className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HackathonChallenges;
