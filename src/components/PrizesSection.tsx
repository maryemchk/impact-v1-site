
import React, { useRef } from 'react';
import { Trophy, Award } from 'lucide-react';

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
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto" 
        onMouseMove={handleMouseMove}
        style={{ perspective: '1000px' }}
      >
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-6 text-cyber-green glow-text-green">
          Prizes & Rewards
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Build Impact. Win Glory. Take home amazing prizes!
        </p>
        
        <div className="relative mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* First Prize */}
            <div className="transform hover:scale-105 transition-all duration-300"
                 style={{
                   transform: 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg))',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="cyber-card p-8 text-center w-64 h-80 flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <Trophy className="h-20 w-20 text-yellow-400 animate-float" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-cyber-blue glow-text-blue">First Place</h3>
                <ul className="text-gray-300 mt-3">
                  <li className="mb-1">🏆 1000 TND Cash Prize</li>
                  <li className="mb-1">💻 Tech Goodies</li>
                  <li className="mb-1">🚀 Special Recognition</li>
                </ul>
              </div>
            </div>
            
            {/* Second Prize */}
            <div className="transform hover:scale-105 transition-all duration-300"
                 style={{
                   transform: 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg))',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="cyber-card cyber-card-green p-8 text-center w-64 h-72 flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <Award className="h-16 w-16 text-gray-300 animate-float" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-green glow-text-green">Second Place</h3>
                <ul className="text-gray-300 mt-3">
                  <li className="mb-1">🥈 500 TND Cash Prize</li>
                  <li className="mb-1">🎖️ Special Award</li>
                  <li>🌐 Networking Opportunity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
