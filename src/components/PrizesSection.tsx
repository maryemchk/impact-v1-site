
import React, { useRef, useState } from 'react';
import { Trophy, Award, Medal, Gift, BadgeCheck, Sparkles } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PrizesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Update the custom property for the 3D effect
    containerRef.current.style.setProperty('--mouse-x', `${x}`);
    containerRef.current.style.setProperty('--mouse-y', `${y}`);
  };

  return (
    <section id="prizes" className="section-padding relative bg-dark-gray overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5 circuit-background"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyber-blue opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyber-green opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-cyber-purple opacity-5 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-cyber-blue opacity-5 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto relative z-10" 
        onMouseMove={handleMouseMove}
        style={{ perspective: '1000px' }}
      >
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <Sparkles className="absolute -top-8 -left-8 text-cyber-green opacity-70 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-cyber-green glow-text-green relative inline-block">
              Prizes & Rewards
              <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-70 animate-pulse"></div>
            </h2>
          </div>
          
          <p className="text-center text-xl mb-8 max-w-3xl mx-auto bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Build Impact. Win Glory. Take home amazing prizes!
          </p>

          <div className="hidden md:block w-24 h-1 bg-cyber-green mx-auto rounded-full glow-text-green"></div>
        </div>
        
        {/* Desktop View - Side by side cards with hover effects */}
        <div className="hidden md:block">
          <div className="relative mb-16">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* First Prize */}
              <div 
                className={`transform hover:scale-105 transition-all duration-500 ${hoveredCard === 1 ? 'z-20' : 'z-10'}`}
                style={{
                  transform: hoveredCard === 1 
                    ? 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg)) translateZ(20px)' 
                    : 'rotateX(calc(var(--mouse-y, 0.5) * 5deg - 2.5deg)) rotateY(calc(var(--mouse-x, 0.5) * 5deg - 2.5deg))',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease, scale 0.3s ease'
                }}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="cyber-card p-8 text-center w-72 h-96 flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue/30"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-cyber-blue/30"></div>
                    <div className="absolute left-0 top-0 w-1 h-full bg-cyber-blue/30"></div>
                    <div className="absolute right-0 bottom-0 w-1 h-full bg-cyber-blue/30"></div>
                  </div>
                  
                  {/* Position indicator */}
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-cyber-blue/20 rounded-bl-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyber-blue glow-text-blue mr-2 mb-2">1</span>
                    </div>
                  </div>
                  
                  {/* Icon and content */}
                  <div className="relative mb-4 animate-float z-10">
                    <div className="absolute inset-0 bg-cyber-blue opacity-10 blur-lg rounded-full transform scale-75"></div>
                    <Trophy className="h-24 w-24 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold mb-2 text-cyber-blue glow-text-blue z-10">First Place</h3>
                  <ul className="text-gray-300 mt-6 space-y-3 z-10">
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>1000 TND Cash Prize</span>
                    </li>
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>Premium Tech Goodies</span>
                    </li>
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>Industry Recognition</span>
                    </li>
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>Mentorship Opportunity</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Second Prize */}
              <div 
                className={`transform hover:scale-105 transition-all duration-500 ${hoveredCard === 2 ? 'z-20' : 'z-10'}`}
                style={{
                  transform: hoveredCard === 2 
                    ? 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg)) translateZ(20px)' 
                    : 'rotateX(calc(var(--mouse-y, 0.5) * 5deg - 2.5deg)) rotateY(calc(var(--mouse-x, 0.5) * 5deg - 2.5deg))',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease, scale 0.3s ease'
                }}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="cyber-card cyber-card-green p-8 text-center w-72 h-88 flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green/30"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-cyber-green/30"></div>
                    <div className="absolute left-0 top-0 w-1 h-full bg-cyber-green/30"></div>
                    <div className="absolute right-0 bottom-0 w-1 h-full bg-cyber-green/30"></div>
                  </div>
                  
                  {/* Position indicator */}
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-cyber-green/20 rounded-bl-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyber-green glow-text-green mr-2 mb-2">2</span>
                    </div>
                  </div>
                  
                  {/* Icon and content */}
                  <div className="relative mb-4 animate-float" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-cyber-green opacity-10 blur-lg rounded-full transform scale-75"></div>
                    <Award className="h-20 w-20 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2 text-cyber-green glow-text-green">Second Place</h3>
                  <ul className="text-gray-300 mt-5 space-y-2">
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-green" />
                      <span>500 TND Cash Prize</span>
                    </li>
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-green" />
                      <span>Tech Gadgets Bundle</span>
                    </li>
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-green" />
                      <span>Networking Opportunity</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third Prize */}
              <div 
                className={`transform hover:scale-105 transition-all duration-500 ${hoveredCard === 3 ? 'z-20' : 'z-10'}`}
                style={{
                  transform: hoveredCard === 3 
                    ? 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg)) translateZ(20px)' 
                    : 'rotateX(calc(var(--mouse-y, 0.5) * 5deg - 2.5deg)) rotateY(calc(var(--mouse-x, 0.5) * 5deg - 2.5deg))',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease, scale 0.3s ease'
                }}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="cyber-card cyber-card-purple p-8 text-center w-72 h-80 flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyber-purple/30"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-cyber-purple/30"></div>
                    <div className="absolute left-0 top-0 w-1 h-full bg-cyber-purple/30"></div>
                    <div className="absolute right-0 bottom-0 w-1 h-full bg-cyber-purple/30"></div>
                  </div>
                  
                  {/* Position indicator */}
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-cyber-purple/20 rounded-bl-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyber-purple glow-text-purple mr-2 mb-2">3</span>
                    </div>
                  </div>
                  
                  {/* Icon and content */}
                  <div className="relative mb-4 animate-float" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute inset-0 bg-cyber-purple opacity-10 blur-lg rounded-full transform scale-75"></div>
                    <Medal className="h-16 w-16 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-purple glow-text-purple">Third Place</h3>
                  <ul className="text-gray-300 mt-4 space-y-2">
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-purple" />
                      <span>250 TND Cash Prize</span>
                    </li>
                    <li className="flex items-center hover:text-white transition-colors">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-purple" />
                      <span>Digital Gift Cards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Carousel with improved indicators */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {/* First Prize */}
              <CarouselItem>
                <div className="p-1">
                  <div className="cyber-card relative p-6 text-center flex flex-col items-center justify-center overflow-hidden">
                    {/* Animated corner lines */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-blue/70"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-blue/70"></div>
                    
                    <div className="absolute top-0 right-0">
                      <div className="w-16 h-16 bg-cyber-blue/20 rounded-bl-full flex items-center justify-center">
                        <span className="text-xl font-bold text-cyber-blue glow-text-blue mr-2 mb-2">1</span>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-cyber-blue/10 blur-md rounded-full"></div>
                      <Trophy className="h-20 w-20 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-2 text-cyber-blue glow-text-blue">First Place</h3>
                    <ul className="text-gray-300 mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-blue animate-pulse" />
                        <span>1000 TND Cash Prize</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-blue" />
                        <span>Premium Tech Goodies</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-blue" />
                        <span>Industry Recognition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CarouselItem>

              {/* Second Prize */}
              <CarouselItem>
                <div className="p-1">
                  <div className="cyber-card cyber-card-green relative p-6 text-center flex flex-col items-center justify-center overflow-hidden">
                    {/* Animated corner lines */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-green/70"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-green/70"></div>
                    
                    <div className="absolute top-0 right-0">
                      <div className="w-16 h-16 bg-cyber-green/20 rounded-bl-full flex items-center justify-center">
                        <span className="text-xl font-bold text-cyber-green glow-text-green mr-2 mb-2">2</span>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-cyber-green/10 blur-md rounded-full"></div>
                      <Award className="h-16 w-16 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-green glow-text-green">Second Place</h3>
                    <ul className="text-gray-300 mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-green animate-pulse" />
                        <span>500 TND Cash Prize</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-green" />
                        <span>Tech Gadgets Bundle</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-green" />
                        <span>Networking Opportunity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CarouselItem>

              {/* Third Prize */}
              <CarouselItem>
                <div className="p-1">
                  <div className="cyber-card cyber-card-purple relative p-6 text-center flex flex-col items-center justify-center overflow-hidden">
                    {/* Animated corner lines */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-purple/70"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-purple/70"></div>
                    
                    <div className="absolute top-0 right-0">
                      <div className="w-16 h-16 bg-cyber-purple/20 rounded-bl-full flex items-center justify-center">
                        <span className="text-xl font-bold text-cyber-purple glow-text-purple mr-2 mb-2">3</span>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-cyber-purple/10 blur-md rounded-full"></div>
                      <Medal className="h-14 w-14 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-purple glow-text-purple">Third Place</h3>
                    <ul className="text-gray-300 mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-purple animate-pulse" />
                        <span>250 TND Cash Prize</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-purple" />
                        <span>Digital Gift Cards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center gap-1 mt-4 mb-6">
              {[0, 1, 2].map((index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === 0 
                      ? 'bg-cyber-blue w-4' 
                      : index === 1 
                        ? 'bg-cyber-green' 
                        : 'bg-cyber-purple'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselPrevious className="left-0 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black" />
            <CarouselNext className="right-0 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black" />
          </Carousel>
        </div>

        {/* Additional prizes section with improved layout */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8 text-white flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyber-green"></div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple">
              Additional Rewards
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-cyber-blue to-transparent"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card p-6 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <div className="bg-cyber-blue/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-6 w-6 text-cyber-blue" />
                </div>
                <h4 className="font-orbitron font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">Participation Certificates</h4>
              </div>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">All participants will receive official certificates recognizing their contributions.</p>
            </div>
            
            <div className="cyber-card cyber-card-green p-6 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <div className="bg-cyber-green/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-6 w-6 text-cyber-green" />
                </div>
                <h4 className="font-orbitron font-bold text-white group-hover:text-cyber-green transition-colors duration-300">Swag Packs</h4>
              </div>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Each team will receive exclusive IT Impact hackathon merchandise.</p>
            </div>
            
            <div className="cyber-card cyber-card-purple p-6 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <div className="bg-cyber-purple/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-6 w-6 text-cyber-purple" />
                </div>
                <h4 className="font-orbitron font-bold text-white group-hover:text-cyber-purple transition-colors duration-300">Special Categories</h4>
              </div>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Awards for Most Innovative, Best Technical Implementation and Best UI/UX.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
