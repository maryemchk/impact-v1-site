import React, { useRef } from 'react';
import { Trophy, Award, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const PrizesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const {
      left,
      top,
      width,
      height
    } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Update the custom property for the 3D effect
    containerRef.current.style.setProperty('--mouse-x', `${x}`);
    containerRef.current.style.setProperty('--mouse-y', `${y}`);
  };
  const prizes = [{
    id: 1,
    icon: <Trophy className="h-20 w-20 text-yellow-400 animate-float" />,
    title: "First Place",
    color: "cyber-blue",
    glow: "glow-text-blue",
    rewards: ["🏆 1000 TND Cash Prize", "💻 Tech Goodies", "🚀 Special Recognition"]
  }, {
    id: 2,
    icon: <Award className="h-16 w-16 text-gray-300 animate-float" />,
    title: "Second Place",
    color: "cyber-green",
    glow: "glow-text-green",
    rewards: ["🥈 500 TND Cash Prize", "🎖️ Special Award", "🌐 Networking Opportunity"]
  }];
  return <section id="prizes" className="section-padding relative bg-dark-gray overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px]"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyber-blue opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-green opacity-10 rounded-full blur-[80px]"></div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10" onMouseMove={handleMouseMove}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 text-cyber-green glow-text-green inline-block">
            <span className="relative">
              Prizes & Rewards
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent"></span>
            </span>
          </h2>
          
          <p className="text-center text-xl max-w-3xl mx-auto">
            Build Impact. Win Glory. Take home amazing prizes!
          </p>
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {prizes.map(prize => <CarouselItem key={prize.id} className="pl-2 md:pl-4">
                  <Card className={`cyber-card border-${prize.color} shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-dark-gray to-darker-gray h-full`}>
                    <CardHeader className="pb-2 pt-6 text-center">
                      <div className="relative mx-auto mb-4">
                        {prize.icon}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">{prize.id}</span>
                        </div>
                      </div>
                      <CardTitle className={`text-2xl font-orbitron font-bold text-${prize.color} ${prize.glow}`}>{prize.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-gray-300 space-y-2">
                        {prize.rewards.map((reward, idx) => <li key={idx} className="flex items-start">
                            <span>{reward}</span>
                          </li>)}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-darker-gray" />
            <CarouselNext className="hidden sm:flex border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-darker-gray" />
          </Carousel>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {prizes.map(prize => <div key={prize.id} className="transform hover:scale-105 transition-all duration-300 group" style={{
            transform: 'rotateX(calc(var(--mouse-y, 0.5) * 5deg - 2.5deg)) rotateY(calc(var(--mouse-x, 0.5) * 5deg - 2.5deg))',
            transformStyle: 'preserve-3d'
          }}>
                <Card className={`cyber-card border-${prize.color} h-full relative bg-gradient-to-b from-dark-gray to-darker-gray overflow-hidden`}>
                  {/* Animated border effect */}
                  <span className={`absolute inset-0 border border-${prize.color} opacity-0 group-hover:opacity-100 [filter:drop-shadow(0_0_8px_var(--border-color))] transition-opacity duration-500`} style={{
                '--border-color': prize.color === 'cyber-blue' ? '#0ff' : '#0f6'
              } as React.CSSProperties}></span>
                  
                  <CardHeader className="pb-2 pt-6 text-center">
                    <div className="relative mx-auto mb-4">
                      {prize.icon}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">{prize.id}</span>
                      </div>
                    </div>
                    <CardTitle className={`text-2xl font-orbitron font-bold text-${prize.color} ${prize.glow} group-hover:animate-pulse-glow`}>{prize.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-300 space-y-2">
                      {prize.rewards.map((reward, idx) => <li key={idx} className="flex items-start transform transition-transform duration-300 hover:translate-x-1">
                          <span>{reward}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
        
        {/* Additional rewards section */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-orbitron text-cyber-blue glow-text-blue mb-6">Additional Rewards</h3>
          <div className="cyber-card p-6 backdrop-blur-sm bg-darker-gray/70">
            <div className="flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-cyber-purple mr-3" />
              <p className="text-lg">All participants will receive certificates and valuable networking opportunities!</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PrizesSection;