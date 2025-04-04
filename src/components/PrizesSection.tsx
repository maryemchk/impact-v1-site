
import React, { useRef } from 'react';
import { Trophy, Award, Gift } from 'lucide-react';

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
                  <li className="mb-1">🏆 5000 TND Cash Prize</li>
                  <li className="mb-1">💻 Latest Tech Gadgets</li>
                  <li className="mb-1">🚀 Startup Mentorship</li>
                  <li>🌟 Industry Recognition</li>
                </ul>
              </div>
            </div>
            
            {/* Second Prize */}
            <div className="transform hover:scale-105 transition-all duration-300 lg:-mt-10"
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
                  <li className="mb-1">🥈 3000 TND Cash Prize</li>
                  <li className="mb-1">💻 Tech Equipment</li>
                  <li>🌐 Networking Opportunities</li>
                </ul>
              </div>
            </div>
            
            {/* Third Prize */}
            <div className="transform hover:scale-105 transition-all duration-300 lg:-mt-16"
                 style={{
                   transform: 'rotateX(calc(var(--mouse-y, 0.5) * 10deg - 5deg)) rotateY(calc(var(--mouse-x, 0.5) * 10deg - 5deg))',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="cyber-card cyber-card-purple p-8 text-center w-64 h-64 flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <Gift className="h-14 w-14 text-amber-700 animate-float" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber-purple glow-text-purple">Third Place</h3>
                <ul className="text-gray-300 mt-3">
                  <li className="mb-1">🥉 1500 TND Cash Prize</li>
                  <li className="mb-1">🎮 Tech Accessories</li>
                  <li>💼 Job Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cyber-card p-6 md:p-8 max-w-3xl mx-auto glass-effect">
          <h3 className="text-xl font-orbitron font-bold mb-4 text-center text-cyber-blue">
            Special Awards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-cyber-green-glow rounded-md p-4 bg-dark-gray bg-opacity-50">
              <h4 className="text-cyber-green font-semibold mb-2">🧠 Most Innovative Solution</h4>
              <p className="text-sm text-gray-300">Special recognition and tech gadgets for the most creative approach.</p>
            </div>
            
            <div className="border border-cyber-purple-glow rounded-md p-4 bg-dark-gray bg-opacity-50">
              <h4 className="text-cyber-purple font-semibold mb-2">⚡ Best Technical Implementation</h4>
              <p className="text-sm text-gray-300">Prize for outstanding technical excellence and code quality.</p>
            </div>
            
            <div className="border border-cyber-blue-glow rounded-md p-4 bg-dark-gray bg-opacity-50">
              <h4 className="text-cyber-blue font-semibold mb-2">🎯 Best Business Potential</h4>
              <p className="text-sm text-gray-300">Mentorship and resources for the solution with highest market viability.</p>
            </div>
            
            <div className="border border-cyber-green-glow rounded-md p-4 bg-dark-gray bg-opacity-50">
              <h4 className="text-cyber-green font-semibold mb-2">🚀 Audience Favorite</h4>
              <p className="text-sm text-gray-300">Community-voted award for the most impactful presentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
