
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Unlock, Cpu, Cloud, HardDrive, Globe, PieChart, ShieldAlert, Zap, Clock, ExternalLink, Trophy, Award, Code, Brain, Database, BadgeCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  color: string;
  details?: string[];
  requirements?: string[];
}

const challenges: Challenge[] = [{
  id: 1,
  title: "AI for Social Good",
  description: "Develop an AI solution that addresses a pressing social issue or improves public services.",
  icon: <Brain className="h-8 w-8" />,
  category: "AI/ML",
  difficulty: "Hard",
  color: "cyber-purple",
  details: ["Create an AI application that can help solve problems in healthcare, education, environment, or public safety", "Implement at least one machine learning or deep learning model", "Provide an intuitive user interface for interacting with your AI solution", "Consider accessibility and inclusivity in your design"],
  requirements: ["Must use a modern AI/ML framework (TensorFlow, PyTorch, Hugging Face, etc.)", "Should include a front-end interface built with React", "Data privacy considerations must be addressed", "Deployment strategy should be included"]
}, {
  id: 2,
  title: "Cybersecurity Innovation",
  description: "Build a solution that improves digital security for individuals, businesses, or services.",
  icon: <ShieldAlert className="h-8 w-8" />,
  category: "Cybersecurity",
  difficulty: "Medium",
  color: "cyber-blue",
  details: ["Develop a tool for threat detection, vulnerability assessment, or security education", "Focus on addressing a specific security challenge (e.g., phishing detection, secure authentication)", "Create an accessible interface for technical and non-technical users", "Include comprehensive reporting or visualization of security insights"],
  requirements: ["Must implement secure coding practices and follow security best practices", "Should include both frontend and backend components", "Real-time monitoring or notification features are encouraged", "Documentation on security architecture must be provided"]
}];

const HackathonChallenges = () => {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCardHover = (id: number | null) => {
    setHoveredCard(id);
    if (id !== null) {
      const audio = new Audio('/hover-sound.mp3');
      audio.volume = 0.1;
      audio.play().catch(err => console.log('Audio playback prevented:', err));
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedChallenge(expandedChallenge === id ? null : id);
    const audio = new Audio('/click-sound.mp3');
    audio.volume = 0.2;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
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
          Choose one of our innovative challenges and build solutions that could shape the future. Form teams of 2-4 people and showcase your technical expertise.
        </p>
        
        <div className="relative">
          <div className="absolute top-0 right-0">
            <Trophy className="h-10 w-10 text-cyber-gold animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 ease-in-out">
            {challenges.map(challenge => (
              <Collapsible 
                key={challenge.id} 
                className={`cyber-card transform transition-all duration-500 ${
                  hoveredCard === challenge.id ? 'scale-105 -translate-y-2' : ''
                } ${challenge.color === 'cyber-blue' ? '' : 'cyber-card-purple'}`}
                onMouseEnter={() => handleCardHover(challenge.id)}
                onMouseLeave={() => handleCardHover(null)}
                open={expandedChallenge === challenge.id}
                onOpenChange={() => toggleExpand(challenge.id)}
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
                  
                  <CollapsibleTrigger className="w-full text-left">
                    <h3 className={`text-2xl font-orbitron font-bold mb-3 text-${challenge.color} flex items-center`}>
                      {challenge.title}
                      <Award className={`ml-2 h-5 w-5 text-${challenge.color} ${
                        expandedChallenge === challenge.id ? 'rotate-180' : ''
                      } transition-transform duration-300`} />
                    </h3>
                  </CollapsibleTrigger>
                  
                  <p className="text-sm text-gray-300 mb-4">
                    {challenge.description}
                  </p>
                  
                  <CollapsibleContent>
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="mb-4">
                        <h4 className={`font-orbitron text-${challenge.color} text-lg mb-2 flex items-center`}>
                          <Code className="h-5 w-5 mr-2" /> Challenge Details
                        </h4>
                        <ul className="space-y-2 pl-6 text-sm">
                          {challenge.details?.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className={`text-${challenge.color} mr-2`}>•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className={`font-orbitron text-${challenge.color} text-lg mb-2 flex items-center`}>
                          <BadgeCheck className="h-5 w-5 mr-2" /> Requirements
                        </h4>
                        <ul className="space-y-2 pl-6 text-sm">
                          {challenge.requirements?.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className={`text-${challenge.color} mr-2`}>✓</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                  
                  <div className={`w-full h-1 mt-4 bg-${challenge.color} bg-opacity-20 rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-${challenge.color} transition-all duration-1000 rounded-full`}
                      style={{
                        width: hoveredCard === challenge.id || expandedChallenge === challenge.id ? '100%' : '30%',
                        boxShadow: `0 0 10px ${challenge.color === 'cyber-blue' ? 'rgba(0, 255, 255, 0.7)' : 'rgba(190, 15, 255, 0.7)'}`
                      }}
                    ></div>
                  </div>
                </div>
              </Collapsible>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Card className="border-cyber-purple/30 bg-dark-gray/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-cyber-gold" />
                <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-purple">Prize Pool</h3>
                <p className="text-gray-300">Compete for exciting prizes and recognition in the tech community!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rotate-45 border-8 border-cyber-blue/10 rounded-lg"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 -rotate-12 border-8 border-cyber-purple/10 rounded-lg"></div>
    </section>
  );
};

export default HackathonChallenges;
