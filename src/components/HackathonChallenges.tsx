import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Lock, Unlock, Cpu, Cloud,
  Globe, ShieldAlert, Zap, Clock,
  ExternalLink, Award, Trophy
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
  details: string[];
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "AI for Social Good",
    description: "Design and implement an AI solution that addresses a significant social challenge in education, healthcare, or sustainability.",
    icon: <Cpu className="h-8 w-8" />,
    category: "AI/ML",
    difficulty: "Hard",
    color: "cyber-blue",
    details: [
      "Create a machine learning model that can be used to solve a real-world problem",
      "Implement a user-friendly interface for non-technical users",
      "Include data visualization to explain your AI's decision-making process",
      "Demonstrate how your solution scales to real-world applications"
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Innovation",
    description: "Develop a cybersecurity tool that helps identify vulnerabilities, educate users about security best practices, or protect sensitive data.",
    icon: <ShieldAlert className="h-8 w-8" />,
    category: "Cybersecurity",
    difficulty: "Medium",
    color: "cyber-purple",
    details: [
      "Create an innovative approach to a common security challenge",
      "Implement at least one core security feature (encryption, authentication, etc.)",
      "Design with user experience in mind - security should be accessible",
      "Include educational elements that teach users about cybersecurity"
    ]
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
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
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

  const toggleDetails = (id: number) => {
    setExpandedDetails(expandedDetails === id ? null : id);
    
    if (revealed) {
      const audio = new Audio('/click-sound.mp3');
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
        <div className="relative mb-6">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full">
            <div className="w-32 h-1 bg-cyber-blue mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-2 text-cyber-purple glow-text-purple flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-cyber-purple animate-pulse" />
            <span className="before:content-['<'] after:content-['>'] before:opacity-40 after:opacity-40 before:mr-2 after:ml-2">
              2025 Hackathon Challenges
            </span>
            <Trophy className="h-8 w-8 text-cyber-purple animate-pulse" />
          </h2>
        </div>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-dark-gray/20 p-4 rounded-lg border border-cyber-purple/20">
          Choose between two exciting challenges for this year's hackathon. Form teams of 2-4 people and build innovative solutions to compete for amazing prizes!
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {challenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  className={`cyber-card transform transition-all duration-500 ${
                    hoveredCard === challenge.id ? 'scale-105 -translate-y-2' : ''
                  } ${challenge.color === 'cyber-blue' ? '' : 'cyber-card-purple'} transition-all duration-500 ease-in-out opacity-0 animate-[fadeIn_0.5s_forwards]`}
                  style={{ animationDelay: `${challenge.id * 0.2}s` }}
                  onMouseEnter={() => handleCardHover(challenge.id)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  <div className="p-6 glass-effect">
                    <div className={`flex items-center mb-4 text-${challenge.color}`}>
                      {challenge.icon}
                      <div className="ml-3 text-sm font-semibold">{challenge.category}</div>
                      <div className={`ml-auto px-3 py-1 text-xs rounded-full ${
                        challenge.difficulty === 'Easy' 
                          ? 'bg-cyber-green bg-opacity-20 text-cyber-green' 
                          : challenge.difficulty === 'Medium'
                            ? 'bg-cyber-blue bg-opacity-20 text-cyber-blue'
                            : 'bg-cyber-purple bg-opacity-20 text-cyber-purple'
                      }`}>
                        {challenge.difficulty}
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-orbitron font-bold mb-4 text-${challenge.color}`}>
                      {challenge.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-base">
                      {challenge.description}
                    </p>
                    
                    <div 
                      className="cursor-pointer flex items-center justify-between border-t border-gray-700 pt-4 mt-4"
                      onClick={() => toggleDetails(challenge.id)}
                    >
                      <span className={`text-${challenge.color} font-semibold`}>
                        {expandedDetails === challenge.id ? "Hide Details" : "View Requirements"}
                      </span>
                      <span className={`transition-transform duration-300 ${expandedDetails === challenge.id ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                    
                    {expandedDetails === challenge.id && (
                      <div className="mt-4 pt-4 border-t border-gray-700 animate-fade-in">
                        <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {challenge.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className={`text-${challenge.color} mr-2`}>•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className={`w-full h-1 mt-6 bg-${challenge.color} bg-opacity-20 rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-${challenge.color} transition-all duration-1000 rounded-full`}
                        style={{ 
                          width: hoveredCard === challenge.id ? '100%' : '30%',
                          boxShadow: `0 0 10px ${challenge.color === 'cyber-blue' ? 'rgba(0, 255, 255, 0.7)' : 'rgba(190, 15, 255, 0.7)'}` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <div className="flex items-center justify-center mb-8 gap-3">
                <Award className="h-6 w-6 text-cyber-green" />
                <p className="text-cyber-green text-lg font-semibold">
                  Both challenges compete for the same prize pool!
                </p>
                <Award className="h-6 w-6 text-cyber-green" />
              </div>
              <p className="text-gray-400 text-sm backdrop-blur-sm bg-dark-gray/20 p-4 rounded-lg inline-block">
                <span className="text-cyber-purple font-bold">Note:</span> Additional resources and mentorship will be provided on the day of the hackathon.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rotate-45 border-8 border-cyber-blue/10 rounded-lg"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 -rotate-12 border-8 border-cyber-purple/10 rounded-lg"></div>
      
      <div className="mt-16 text-center flex flex-col items-center">
        <div className="relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-full">
            <div className="w-32 h-1 bg-cyber-purple mx-auto"></div>
          </div>
          <div className="mb-6 text-2xl font-orbitron text-cyber-purple">Join the Competition</div>
        </div>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSczL0WO_jTzx_tdVoN369pUrJoqKejYX5MK1QUPqVIWHFHLEA/viewform?usp=dialog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition-all duration-300"
        >
          <Button className="cyber-btn flex items-center gap-2 bg-cyber-purple hover:bg-cyber-purple/80 border-cyber-purple text-white text-lg px-10 py-8 shadow-lg shadow-cyber-purple/20 relative overflow-hidden group">
            <span className="relative z-10 flex items-center font-bold">
              REGISTER FOR HACKATHON
              <ExternalLink className="h-5 w-5 ml-2" />
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HackathonChallenges;
