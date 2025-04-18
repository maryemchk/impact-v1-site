import React, { useState } from 'react';
import { Code, PenTool, Brain, Globe, Server, ExternalLink, ChevronDown, ChevronUp, Calendar, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useIsMobile } from "@/hooks/use-mobile";
const workshops = [{
  title: "Unlocking the Future: Web3 & Blockchain Essentials",
  description: "Get started with the revolutionary world of Web3 and Blockchain! Understand the core principles and build your first decentralized mini-project. This workshop is your gateway to the next internet.",
  details: "Participants will explore the fundamentals of blockchain technology, including distributed ledgers, consensus mechanisms, and smart contracts. You'll build and deploy a simple dApp on a testnet and learn about Web3 integration.",
  prerequisites: "Basic programming knowledge. Familiarity with JavaScript is helpful but not required.",
  instructor: "Alex Merkova",
  capacity: "30 participants",
  icon: <Globe className="h-12 w-12 text-cyber-blue" />,
  time: "Session 1: 09:30 → 12:00",
  date: "Saturday, April 19",
  color: "cyber-blue"
}, {
  title: "Design That Speaks: UI/UX Fundamentals",
  description: "Learn the art of intuitive design and how to use tools like Figma to craft user-friendly interfaces. Whether you're a design newbie or curious techie, this workshop turns your ideas into interactive experiences.",
  details: "This hands-on workshop covers the principles of user-centered design, wireframing, prototyping, and usability testing. You'll create a complete design for a mobile app interface using Figma.",
  prerequisites: "No prior design experience needed. Bring a laptop with Figma installed.",
  instructor: "Diana Chen",
  capacity: "25 participants",
  icon: <PenTool className="h-12 w-12 text-cyber-green" />,
  time: "Session 1: 09:30 → 12:00",
  date: "Saturday, April 19",
  color: "cyber-green"
}, {
  title: "Smarter Systems: AI-Powered Industry Solutions",
  description: "Explore the power of Natural Language Processing (NLP) and predictive/generative AI. Build intelligent systems that understand, learn, and generate! The future of industry is AI—start building it today.",
  details: "You'll get practical experience working with modern AI tools and frameworks. Topics include prompt engineering, fine-tuning language models, and integrating AI capabilities into applications.",
  prerequisites: "Basic programming skills and understanding of data structures.",
  instructor: "Dr. Omar Patel",
  capacity: "35 participants",
  icon: <Brain className="h-12 w-12 text-cyber-purple" />,
  time: "Session 1: 09:30 → 12:00",
  date: "Saturday, April 19",
  color: "cyber-purple"
}, {
  title: "Next-Gen Tech: Diving into the Hedera Ecosystem",
  description: "Take a deep dive into the Hedera Hashgraph world—a powerful alternative to traditional blockchain. Learn how to build efficient and eco-friendly dApps with real-world impact. Speed. Security. Innovation.",
  details: "This workshop covers Hedera's unique consensus algorithm, token service, smart contracts, and file service. You'll implement a simple application using Hedera SDK and understand the ecosystem's advantages.",
  prerequisites: "Familiarity with blockchain concepts and JavaScript/TypeScript.",
  instructor: "Tara Nakamoto",
  capacity: "20 participants",
  icon: <Server className="h-12 w-12 text-cyber-blue" />,
  time: "Session 2: 13:30 → 15:30",
  date: "Saturday, April 19",
  color: "cyber-blue"
}, {
  title: "Deep Dive into Deep Learning",
  description: "From theory to practice, uncover the magic behind deep learning models. Train your own neural networks and understand how machines learn from data. No magic—just math, models, and mind-blowing results!",
  details: "You'll implement neural networks from scratch, then use modern frameworks to train and deploy models. Topics include CNNs, RNNs, transfer learning, and model optimization techniques.",
  prerequisites: "Python programming and basic linear algebra knowledge.",
  instructor: "Prof. Nina Rodriguez",
  capacity: "25 participants",
  icon: <Code className="h-12 w-12 text-cyber-green" />,
  time: "Session 2: 13:30 → 15:30",
  date: "Saturday, April 19",
  color: "cyber-green"
}];
const WorkshopsPreview = () => {
  const isMobile = useIsMobile();
  const [expandedWorkshop, setExpandedWorkshop] = useState<number | null>(null);
  const toggleExpand = (index: number) => {
    setExpandedWorkshop(expandedWorkshop === index ? null : index);
  };
  return <section id="workshops" className="section-padding relative bg-darker-gray overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated glow */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-cyber-blue/10 blur-3xl animate-pulse-glow"></div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-white relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple animate-text-glow">
              Event Workshops
            </span>
          </h2>
          
          <p className="text-center text-xl md:text-2xl mb-2 max-w-3xl mx-auto font-exo text-gray-300">
            Transform your skills with our expert-led workshops
          </p>
          <p className="text-cyber-green text-sm md:text-base mb-6">Choose from 5 cutting-edge technology tracks</p>
          
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <div className="flex items-center bg-dark-gray/50 px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4 mr-2 text-cyber-blue" />
              <span className="text-sm text-gray-300">Saturday, April 19</span>
            </div>
            <div className="flex items-center bg-dark-gray/50 px-3 py-1 rounded-full">
              <Users className="h-4 w-4 mr-2 text-cyber-green" />
              <span className="text-sm text-gray-300">Limited capacity</span>
            </div>
            <div className="flex items-center bg-dark-gray/50 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-2 text-cyber-purple" />
              <span className="text-sm text-gray-300">Two sessions available</span>
            </div>
          </div>
        </div>
        
        {/* Workshop cards with enhanced visual design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workshops.map((workshop, index) => <Card key={index} className={`cyber-card relative border-${workshop.color} overflow-visible group h-full`}>
              {/* Glowing corner accents */}
              <div className={`absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-${workshop.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-${workshop.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-${workshop.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-${workshop.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              
              <CardContent className="p-6 glass-effect h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-dark-gray border border-${workshop.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {workshop.icon}
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-bold text-${workshop.color} mb-1 line-clamp-2`}>
                      {workshop.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 text-xs mb-2">
                      <span className={`px-2 py-0.5 rounded-full bg-${workshop.color}/20 text-${workshop.color}`}>
                        {workshop.time}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">{workshop.description}</p>
                
                {/* Expandable details section */}
                <Collapsible open={expandedWorkshop === index} onOpenChange={() => toggleExpand(index)} className="w-full">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className={`w-full border border-${workshop.color}/30 flex items-center justify-between group-hover:bg-${workshop.color}/10 transition-colors`}>
                      <span>Workshop Details</span>
                      {expandedWorkshop === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="space-y-3 mt-3 text-sm">
                    <div className="bg-dark-gray/70 rounded-md p-3">
                      <p className="mb-2 text-gray-200">{workshop.details}</p>
                      
                      <div className="space-y-2 mt-3">
                        <div className="flex items-start">
                          <span className="font-bold text-gray-400 w-28">Prerequisites:</span>
                          <span className="text-gray-300">{workshop.prerequisites}</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="font-bold text-gray-400 w-28">Instructor:</span>
                          <span className="text-gray-300">{workshop.instructor}</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="font-bold text-gray-400 w-28">Capacity:</span>
                          <span className="text-gray-300">{workshop.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>)}
        </div>

        {/* Enhanced registration section */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-cyber-purple/10 to-cyber-green/10 blur-xl"></div>
          
          
        </div>
      </div>
    </section>;
};
export default WorkshopsPreview;