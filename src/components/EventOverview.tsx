
import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const EventOverview = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 text-cyber-green glow-text-green">
          Event Overview
        </h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-purple"></div>
          
          <div className="space-y-24">
            {/* Intro Card */}
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="cyber-card p-6 md:p-8 max-w-2xl glass-effect">
                  <p className="text-xl text-center">
                    Get ready for IT Impact V1.0 – a two-day experience of pure innovation!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Day 1 Card */}
            <div className="relative z-10">
              <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-12 rounded-full bg-cyber-blue animate-pulse-glow"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right mb-6 md:mb-0 md:pr-10">
                  <h3 className="text-2xl font-orbitron font-bold text-cyber-blue mb-3 glow-text-blue">Day 1 - April 19</h3>
                  <div className="flex justify-end items-center text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-end items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Limited to 150 participants</span>
                  </div>
                </div>
                
                <div className="cyber-card flex-1 p-6 md:ml-10 glass-effect">
                  <p className="text-lg">
                    Dive into 6 expert-led workshops on emerging technologies. Learn, build, and connect with industry leaders.
                  </p>
                  <div className="mt-4 p-3 border border-cyber-blue-glow rounded-md bg-darker-gray bg-opacity-60">
                    <p className="text-cyber-blue">
                      🔹 AI & ML Workshop<br />
                      🔹 Blockchain Fundamentals<br />
                      🔹 IoT Innovation Lab<br />
                      🔹 Full-Stack Development<br />
                      🔹 Cybersecurity Defense<br />
                      🔹 Cloud Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Day 2 Card */}
            <div className="relative z-10">
              <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-12 rounded-full bg-cyber-green animate-pulse-glow"></div>
              
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="flex-1 md:text-left mb-6 md:mb-0 md:pl-10">
                  <h3 className="text-2xl font-orbitron font-bold text-cyber-green mb-3 glow-text-green">Day 2 - April 20</h3>
                  <div className="flex justify-start items-center text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-start items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Teams of 2-4 people</span>
                  </div>
                </div>
                
                <div className="cyber-card cyber-card-green flex-1 p-6 md:mr-10 glass-effect">
                  <p className="text-lg">
                    Join the ultimate Hackathon challenge. Put your skills to the test, collaborate with fellow innovators, and build solutions that matter.
                  </p>
                  <div className="mt-4 p-3 border border-cyber-green-glow rounded-md bg-darker-gray bg-opacity-60">
                    <p className="text-cyber-green">
                      🔹 12-hour coding marathon<br />
                      🔹 Industry-relevant challenges<br />
                      🔹 Mentorship from experts<br />
                      🔹 Valuable prizes<br />
                      🔹 Networking opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conclusion Card */}
            <div className="relative z-10">
              <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-12 rounded-full bg-cyber-purple animate-pulse-glow"></div>
              
              <div className="flex justify-center">
                <div className="cyber-card cyber-card-purple p-6 md:p-8 max-w-2xl glass-effect">
                  <p className="text-xl text-center">
                    Whether you're a coder, designer, or innovator – it's your time to shine!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
