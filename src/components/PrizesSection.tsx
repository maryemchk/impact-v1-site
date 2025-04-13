
import React, { useRef } from 'react';
import { Trophy, Award, Medal, Gift, BadgeCheck } from 'lucide-react';
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
    <section id="prizes" className="section-padding relative bg-dark-gray">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 circuit-background"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyber-blue opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyber-green opacity-10 blur-3xl"></div>
      </div>
      
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto relative z-10" 
        onMouseMove={handleMouseMove}
        style={{ perspective: '1000px' }}
      >
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-cyber-green glow-text-green animate-float">
            Prizes & Rewards
          </h2>
          
          <p className="text-center text-xl mb-8 max-w-3xl mx-auto bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Build Impact. Win Glory. Take home amazing prizes!
          </p>

          <div className="hidden md:block w-24 h-1 bg-cyber-green mx-auto rounded-full glow-text-green"></div>
        </div>
        
        {/* Desktop View - Side by side cards */}
        <div className="hidden md:block">
          <div className="relative mb-16">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* First Prize */}
              <div className="transform hover:scale-105 transition-all duration-300"
                  style={{
                    transform: 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg))',
                    transformStyle: 'preserve-3d'
                  }}>
                <div className="cyber-card p-8 text-center w-72 h-96 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-cyber-blue/20 rounded-bl-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyber-blue glow-text-blue mr-2 mb-2">1</span>
                    </div>
                  </div>
                  <div className="relative mb-4 animate-float">
                    <div className="absolute inset-0 bg-cyber-blue opacity-10 blur-lg rounded-full transform scale-75"></div>
                    <Trophy className="h-24 w-24 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold mb-2 text-cyber-blue glow-text-blue">First Place</h3>
                  <ul className="text-gray-300 mt-6 space-y-3">
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>1000 TND Cash Prize</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>Premium Tech Goodies</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>Industry Recognition</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-blue" />
                      <span>Mentorship Opportunity</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Second Prize */}
              <div className="transform hover:scale-105 transition-all duration-300"
                  style={{
                    transform: 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg))',
                    transformStyle: 'preserve-3d'
                  }}>
                <div className="cyber-card cyber-card-green p-8 text-center w-72 h-88 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-cyber-green/20 rounded-bl-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyber-green glow-text-green mr-2 mb-2">2</span>
                    </div>
                  </div>
                  <div className="relative mb-4 animate-float">
                    <div className="absolute inset-0 bg-cyber-green opacity-10 blur-lg rounded-full transform scale-75"></div>
                    <Award className="h-20 w-20 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2 text-cyber-green glow-text-green">Second Place</h3>
                  <ul className="text-gray-300 mt-5 space-y-2">
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-green" />
                      <span>500 TND Cash Prize</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-green" />
                      <span>Tech Gadgets Bundle</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-green" />
                      <span>Networking Opportunity</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third Prize */}
              <div className="transform hover:scale-105 transition-all duration-300"
                  style={{
                    transform: 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg))',
                    transformStyle: 'preserve-3d'
                  }}>
                <div className="cyber-card cyber-card-purple p-8 text-center w-72 h-80 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-cyber-purple/20 rounded-bl-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyber-purple glow-text-purple mr-2 mb-2">3</span>
                    </div>
                  </div>
                  <div className="relative mb-4 animate-float">
                    <div className="absolute inset-0 bg-cyber-purple opacity-10 blur-lg rounded-full transform scale-75"></div>
                    <Medal className="h-16 w-16 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-purple glow-text-purple">Third Place</h3>
                  <ul className="text-gray-300 mt-4 space-y-2">
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-purple" />
                      <span>250 TND Cash Prize</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="mr-2 h-5 w-5 text-cyber-purple" />
                      <span>Digital Gift Cards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {/* First Prize */}
              <CarouselItem>
                <div className="p-1">
                  <div className="cyber-card p-6 text-center flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0">
                      <div className="w-16 h-16 bg-cyber-blue/20 rounded-bl-full flex items-center justify-center">
                        <span className="text-xl font-bold text-cyber-blue glow-text-blue mr-2 mb-2">1</span>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <Trophy className="h-20 w-20 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-2 text-cyber-blue glow-text-blue">First Place</h3>
                    <ul className="text-gray-300 mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-blue" />
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
                  <div className="cyber-card cyber-card-green p-6 text-center flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0">
                      <div className="w-16 h-16 bg-cyber-green/20 rounded-bl-full flex items-center justify-center">
                        <span className="text-xl font-bold text-cyber-green glow-text-green mr-2 mb-2">2</span>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <Award className="h-16 w-16 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-green glow-text-green">Second Place</h3>
                    <ul className="text-gray-300 mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-green" />
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
                  <div className="cyber-card cyber-card-purple p-6 text-center flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0">
                      <div className="w-16 h-16 bg-cyber-purple/20 rounded-bl-full flex items-center justify-center">
                        <span className="text-xl font-bold text-cyber-purple glow-text-purple mr-2 mb-2">3</span>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <Medal className="h-14 w-14 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-purple glow-text-purple">Third Place</h3>
                    <ul className="text-gray-300 mt-4 space-y-2">
                      <li className="flex items-center">
                        <BadgeCheck className="mr-2 h-4 w-4 text-cyber-purple" />
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
            <CarouselPrevious className="left-0 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black" />
            <CarouselNext className="right-0 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black" />
          </Carousel>
        </div>

        {/* Additional prizes section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple">
              Additional Rewards
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-cyber-blue/20 p-3 rounded-full mr-4">
                  <Gift className="h-6 w-6 text-cyber-blue" />
                </div>
                <h4 className="font-orbitron font-bold text-white">Participation Certificates</h4>
              </div>
              <p className="text-gray-300 text-sm">All participants will receive official certificates recognizing their contributions.</p>
            </div>
            
            <div className="cyber-card cyber-card-green p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-cyber-green/20 p-3 rounded-full mr-4">
                  <Gift className="h-6 w-6 text-cyber-green" />
                </div>
                <h4 className="font-orbitron font-bold text-white">Swag Packs</h4>
              </div>
              <p className="text-gray-300 text-sm">Each team will receive exclusive IT Impact hackathon merchandise.</p>
            </div>
            
            <div className="cyber-card cyber-card-purple p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-cyber-purple/20 p-3 rounded-full mr-4">
                  <Gift className="h-6 w-6 text-cyber-purple" />
                </div>
                <h4 className="font-orbitron font-bold text-white">Special Categories</h4>
              </div>
              <p className="text-gray-300 text-sm">Awards for Most Innovative, Best Technical Implementation and Best UI/UX.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
