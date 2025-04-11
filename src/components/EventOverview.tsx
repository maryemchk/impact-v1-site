
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface TimelineEvent {
  time: string;
  date: string;
  activity: string;
  place: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "09h00 - 09h30",
    date: "Samedi 19 avril",
    activity: "Mot d'ouverture",
    place: "Amphi"
  },
  {
    time: "09h30 - 12h00",
    date: "Samedi 19 avril",
    activity: "Workshops Session 1 (3 Parallel)",
    place: "les salles"
  },
  {
    time: "12h00 - 13h30",
    date: "Samedi 19 avril",
    activity: "Pause Café + Pause Musicale",
    place: "Cour ISIMM"
  },
  {
    time: "13h30 - 15h30",
    date: "Samedi 19 avril",
    activity: "Workshops Session 2 (3 Parallel)",
    place: "les salles"
  },
  {
    time: "17h00",
    date: "Samedi 19 avril",
    activity: "Start of Competition (Hackathon)",
    place: "bibliothèque de l'ISIMM"
  },
  {
    time: "08h00",
    date: "Dimanche 20 avril",
    activity: "End of Competition",
    place: ""
  }
];

const EventOverview = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 text-cyber-green glow-text-green">
          Event Timeline
        </h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-purple"></div>
          
          <div className="space-y-16">
            {/* Intro Card */}
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="cyber-card p-6 md:p-8 max-w-2xl glass-effect">
                  <p className="text-xl text-center">
                    IT Impact V1.0 – Your detailed schedule for an epic two-day tech experience!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative z-10">
                <div className={`w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-12 rounded-full ${
                  index % 3 === 0 ? 'bg-cyber-blue' : index % 3 === 1 ? 'bg-cyber-green' : 'bg-cyber-purple'
                } animate-pulse-glow`}></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} mb-6 md:mb-0`}>
                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center text-gray-100 mb-2`}>
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="text-lg font-semibold">{event.time}</span>
                    </div>
                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center text-gray-300 mb-3`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    {event.place && (
                      <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center text-gray-400`}>
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.place}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className={`cyber-card ${
                    index % 3 === 0 ? '' : index % 3 === 1 ? 'cyber-card-green' : 'cyber-card-purple'
                  } flex-1 p-6 ${index % 2 === 0 ? 'md:ml-10' : 'md:mr-10'} glass-effect`}>
                    <p className="text-lg font-semibold">
                      {event.activity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
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
