
import React, { useState } from 'react';
import { Brain, ShieldAlert, Award, Code, BadgeCheck, Trophy, Clock, Users, Target } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
  details: [
    "Create an AI application that can help solve problems in healthcare, education, environment, or public safety",
    "Implement at least one machine learning or deep learning model",
    "Provide an intuitive user interface for interacting with your AI solution",
    "Consider accessibility and inclusivity in your design"
  ],
  requirements: [
    "Must use a modern AI/ML framework (TensorFlow, PyTorch, Hugging Face, etc.)",
    "Should include a front-end interface built with React",
    "Data privacy considerations must be addressed",
    "Deployment strategy should be included"
  ]
}, {
  id: 2,
  title: "Cybersecurity Innovation",
  description: "Build a solution that improves digital security for individuals, businesses, or services.",
  icon: <ShieldAlert className="h-8 w-8" />,
  category: "Cybersecurity",
  difficulty: "Medium",
  color: "cyber-blue",
  details: [
    "Develop a tool for threat detection, vulnerability assessment, or security education",
    "Focus on addressing a specific security challenge (e.g., phishing detection, secure authentication)",
    "Create an accessible interface for technical and non-technical users",
    "Include comprehensive reporting or visualization of security insights"
  ],
  requirements: [
    "Must implement secure coding practices and follow security best practices",
    "Should include both frontend and backend components",
    "Real-time monitoring or notification features are encouraged",
    "Documentation on security architecture must be provided"
  ]
}];

const HackathonChallenges = () => {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHover = (id: number | null) => {
    setHoveredCard(id);
  };

  const toggleExpand = (id: number) => {
    setExpandedChallenge(expandedChallenge === id ? null : id);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full circuit-background"></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-cyber-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-cyber-purple rounded-full blur-3xl animate-[pulse_4s_infinite]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-cyber-purple glow-text-purple">
          Hackathon Challenges
        </h2>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-cyber-blue mr-2" />
            <span className="text-gray-300">48 Hours</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-cyber-purple mr-2" />
            <span className="text-gray-300">2-4 Team Members</span>
          </div>
          <div className="flex items-center">
            <Target className="h-5 w-5 text-cyber-green mr-2" />
            <span className="text-gray-300">Win Amazing Prizes</span>
          </div>
        </div>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
          Choose your challenge and showcase your innovation. Each challenge offers unique opportunities to demonstrate your technical expertise and creativity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map(challenge => (
            <Collapsible 
              key={challenge.id} 
              className={`cyber-card transform transition-all duration-500 ${
                hoveredCard === challenge.id ? 'scale-105' : ''
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
                  <Tooltip>
                    <TooltipTrigger>
                      <div className={`ml-auto px-3 py-1 text-xs rounded-full ${
                        challenge.difficulty === 'Easy' 
                          ? 'bg-cyber-green/20 text-cyber-green' 
                          : challenge.difficulty === 'Medium' 
                          ? 'bg-cyber-blue/20 text-cyber-blue' 
                          : 'bg-cyber-purple/20 text-cyber-purple'
                      }`}>
                        {challenge.difficulty}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Challenge Difficulty Level</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                <CollapsibleTrigger className="w-full text-left">
                  <h3 className={`text-2xl font-orbitron font-bold mb-3 text-${challenge.color} flex items-center group`}>
                    {challenge.title}
                    <Award className={`ml-2 h-5 w-5 text-${challenge.color} transition-transform duration-300 group-hover:rotate-12`} />
                  </h3>
                </CollapsibleTrigger>
                
                <p className="text-gray-300 mb-4 text-lg">
                  {challenge.description}
                </p>
                
                <CollapsibleContent>
                  <div className="mt-6 space-y-6 border-t border-gray-700/50 pt-6">
                    <div className="bg-darker-gray/50 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className={`font-orbitron text-${challenge.color} text-lg mb-4 flex items-center`}>
                        <Code className="h-5 w-5 mr-2" /> Challenge Details
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        {challenge.details?.map((detail, index) => (
                          <li key={index} className="flex items-start bg-dark-gray/30 p-3 rounded">
                            <span className={`text-${challenge.color} mr-2 shrink-0`}>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-darker-gray/50 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className={`font-orbitron text-${challenge.color} text-lg mb-4 flex items-center`}>
                        <BadgeCheck className="h-5 w-5 mr-2" /> Technical Requirements
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        {challenge.requirements?.map((req, index) => (
                          <li key={index} className="flex items-start bg-dark-gray/30 p-3 rounded">
                            <span className={`text-${challenge.color} mr-2 shrink-0`}>✓</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-cyber-purple/30 bg-dark-gray/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-cyber-gold animate-bounce" />
              <h3 className="text-2xl font-orbitron font-bold mb-3 text-cyber-purple">Prize Pool</h3>
              <p className="text-gray-300 text-lg">
                Compete for exciting prizes and recognition in the tech community!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HackathonChallenges;

