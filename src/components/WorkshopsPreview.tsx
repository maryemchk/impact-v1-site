
import React from 'react';
import { Code, PenTool, Brain, Globe, Server } from 'lucide-react';

const workshops = [
  {
    title: "Unlocking the Future: Web3 & Blockchain Essentials",
    description: "Get started with the revolutionary world of Web3 and Blockchain! Understand the core principles and build your first decentralized mini-project. This workshop is your gateway to the next internet.",
    icon: <Globe className="h-12 w-12 text-cyber-blue" />,
    time: "Session 1: 09:30 → 12:00",
    date: "Saturday, April 19"
  },
  {
    title: "Design That Speaks: UI/UX Fundamentals",
    description: "Learn the art of intuitive design and how to use tools like Figma to craft user-friendly interfaces. Whether you're a design newbie or curious techie, this workshop turns your ideas into interactive experiences.",
    icon: <PenTool className="h-12 w-12 text-cyber-green" />,
    time: "Session 1: 09:30 → 12:00",
    date: "Saturday, April 19"
  },
  {
    title: "Smarter Systems: AI-Powered Industry Solutions",
    description: "Explore the power of Natural Language Processing (NLP) and predictive/generative AI. Build intelligent systems that understand, learn, and generate! The future of industry is AI—start building it today.",
    icon: <Brain className="h-12 w-12 text-cyber-purple" />,
    time: "Session 1: 09:30 → 12:00",
    date: "Saturday, April 19"
  },
  {
    title: "Next-Gen Tech: Diving into the Hedera Ecosystem",
    description: "Take a deep dive into the Hedera Hashgraph world—a powerful alternative to traditional blockchain. Learn how to build efficient and eco-friendly dApps with real-world impact. Speed. Security. Innovation.",
    icon: <Server className="h-12 w-12 text-cyber-blue" />,
    time: "Session 2: 13:30 → 15:30",
    date: "Saturday, April 19"
  },
  {
    title: "Deep Dive into Deep Learning",
    description: "From theory to practice, uncover the magic behind deep learning models. Train your own neural networks and understand how machines learn from data. No magic—just math, models, and mind-blowing results!",
    icon: <Code className="h-12 w-12 text-cyber-green" />,
    time: "Session 2: 13:30 → 15:30",
    date: "Saturday, April 19"
  }
];

const WorkshopsPreview = () => {
  return (
    <section id="workshops" className="section-padding relative bg-darker-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-6 text-cyber-green glow-text-green">
          Event Workshops
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Transform your skills with our expert-led, cutting-edge technology workshops
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <div 
              key={index} 
              className="cyber-card glass-effect p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                {workshop.icon}
                <h3 className="ml-4 text-lg font-bold text-cyber-blue">{workshop.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{workshop.description}</p>
              <div className="text-sm text-cyber-green">
                <p>{workshop.time}</p>
                <p>{workshop.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsPreview;
