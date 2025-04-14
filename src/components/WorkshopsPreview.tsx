
import React, { useState } from 'react';
import { Code, PenTool, Brain, Globe, Server, ExternalLink, Clock, Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const workshops = [
  {
    title: "Unlocking the Future: Web3 & Blockchain Essentials",
    description: "Get started with the revolutionary world of Web3 and Blockchain! Understand the core principles and build your first decentralized mini-project. This workshop is your gateway to the next internet.",
    icon: <Globe className="h-12 w-12 text-cyber-blue" />,
    time: "Session 1: 09:30 → 12:00",
    date: "Saturday, April 19",
    attendees: "30 spots available",
    level: "Beginner-Friendly",
    color: "cyber-blue",
    details: "This hands-on workshop covers blockchain fundamentals, smart contracts, and decentralized applications. Participants will create their first Web3 project and understand the potential of this revolutionary technology."
  },
  {
    title: "Design That Speaks: UI/UX Fundamentals",
    description: "Learn the art of intuitive design and how to use tools like Figma to craft user-friendly interfaces. Whether you're a design newbie or curious techie, this workshop turns your ideas into interactive experiences.",
    icon: <PenTool className="h-12 w-12 text-cyber-green" />,
    time: "Session 1: 09:30 → 12:00",
    date: "Saturday, April 19",
    attendees: "25 spots available",
    level: "All Levels",
    color: "cyber-green",
    details: "Discover the principles of user-centered design, information architecture, and visual hierarchy. Practice with Figma to create wireframes and interactive prototypes that communicate your ideas effectively."
  },
  {
    title: "Smarter Systems: AI-Powered Industry Solutions",
    description: "Explore the power of Natural Language Processing (NLP) and predictive/generative AI. Build intelligent systems that understand, learn, and generate! The future of industry is AI—start building it today.",
    icon: <Brain className="h-12 w-12 text-cyber-purple" />,
    time: "Session 1: 09:30 → 12:00",
    date: "Saturday, April 19",
    attendees: "20 spots available",
    level: "Intermediate",
    color: "cyber-purple",
    details: "Learn how AI is transforming industries and how to leverage NLP, machine learning, and generative AI. You'll work with practical examples and tools to build systems that can analyze text, make predictions, and generate content."
  },
  {
    title: "Next-Gen Tech: Diving into the Hedera Ecosystem",
    description: "Take a deep dive into the Hedera Hashgraph world—a powerful alternative to traditional blockchain. Learn how to build efficient and eco-friendly dApps with real-world impact. Speed. Security. Innovation.",
    icon: <Server className="h-12 w-12 text-cyber-blue" />,
    time: "Session 2: 13:30 → 15:30",
    date: "Saturday, April 19",
    attendees: "25 spots available",
    level: "Intermediate",
    color: "cyber-blue",
    details: "Explore the Hedera Hashgraph and its consensus algorithm, understand its advantages over traditional blockchains, and build applications using the Hedera SDK. Learn about tokenization, smart contracts, and decentralized storage."
  },
  {
    title: "Deep Dive into Deep Learning",
    description: "From theory to practice, uncover the magic behind deep learning models. Train your own neural networks and understand how machines learn from data. No magic—just math, models, and mind-blowing results!",
    icon: <Code className="h-12 w-12 text-cyber-green" />,
    time: "Session 2: 13:30 → 15:30",
    date: "Saturday, April 19",
    attendees: "20 spots available",
    level: "Advanced",
    color: "cyber-green",
    details: "This workshop covers neural network architectures, training techniques, and practical implementations. You'll build and train models for image recognition, natural language processing, and other applications using modern frameworks."
  }
];

const WorkshopsPreview = () => {
  const [expandedWorkshop, setExpandedWorkshop] = useState<number | null>(null);

  return (
    <section id="workshops" className="section-padding relative bg-darker-gray overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px]"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyber-blue opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-green opacity-10 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3 text-cyber-green animate-pulse">
              <div className="h-[1px] w-8 bg-cyber-green"></div>
              <span className="uppercase text-sm font-semibold tracking-widest">Master New Skills</span>
              <div className="h-[1px] w-8 bg-cyber-green"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 text-cyber-green glow-text-green relative inline-block">
            Event Workshops
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent"></span>
          </h2>
          
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Transform your skills with our expert-led, cutting-edge technology workshops
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div 
              key={index} 
              className={`cyber-card border-${workshop.color} glass-effect overflow-hidden group transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]`}
              onMouseEnter={() => setExpandedWorkshop(index)}
              onMouseLeave={() => setExpandedWorkshop(null)}
            >
              <div className="p-6 relative">
                {/* Glowing corner effect */}
                <div className={`absolute -top-1 -right-1 w-16 h-16 bg-${workshop.color} opacity-20 blur-md rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
                
                <div className={`flex items-center mb-6 relative z-10`}>
                  <div className={`relative p-3 rounded-lg bg-dark-gray border border-${workshop.color} mr-4 overflow-hidden`}>
                    {workshop.icon}
                    <div className={`absolute inset-0 bg-${workshop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </div>
                  <h3 className={`text-xl font-orbitron font-bold text-${workshop.color}`}>{workshop.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{workshop.description}</p>
                
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-2 text-cyber-blue" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-2 text-cyber-green" />
                      <span>{workshop.date}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="h-4 w-4 mr-2 text-cyber-purple" />
                      <span>{workshop.attendees}</span>
                    </div>
                    <div className={`text-sm rounded-full px-2 py-1 text-center text-${workshop.color} border border-${workshop.color} bg-opacity-10`}>
                      {workshop.level}
                    </div>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="mt-6 border-t border-gray-700 pt-4">
                  <AccordionItem value="details" className="border-b-0">
                    <AccordionTrigger className={`text-${workshop.color} hover:no-underline text-sm`}>
                      View Details
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-sm">
                      {workshop.details}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center flex flex-col items-center relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>
          </div>
          
          <div className="cyber-card p-8 border-cyber-green w-full max-w-2xl mx-auto relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10 animate-circuit-flow"></div>
            
            <h3 className="text-2xl md:text-3xl font-orbitron text-cyber-green glow-text-green mb-6">Ready to Join?</h3>
            <p className="text-lg mb-8 max-w-md mx-auto">
              Secure your spot now for these exclusive workshops and level up your tech skills!
            </p>
            
            <a 
              href="https://docs.google.com/forms/d/1DTEN7H4ZPSKW0BXuoXgYEP0iBi4wXoftA733AW26nZs/viewform?edit_requested=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-all duration-300"
            >
              <Button className="cyber-btn flex items-center gap-2 bg-cyber-green hover:bg-cyber-green/80 border-cyber-green text-white text-lg px-10 py-6 shadow-lg shadow-cyber-green/20 relative overflow-hidden group">
                <span className="relative z-10 flex items-center font-bold tracking-wider">
                  REGISTER FOR WORKSHOPS
                  <ExternalLink className="h-5 w-5 ml-2" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                {/* Animated border effect */}
                <span className="absolute inset-0 border border-cyber-green opacity-0 group-hover:opacity-100 [filter:drop-shadow(0_0_8px_#0f6)] transition-opacity duration-300"></span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsPreview;
