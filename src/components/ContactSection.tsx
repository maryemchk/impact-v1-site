
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Instagram, Facebook, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Play send sound
    const audio = new Audio('/send-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-6 text-cyber-blue glow-text-blue">
          Contact Us
        </h2>
        
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Questions about IT Impact V1.0? Get in touch with the organizing team!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-card glass-effect p-6 md:p-8 glitch-hover">
            <h3 className="text-xl font-orbitron font-bold mb-6 text-cyber-blue">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-gray border border-cyber-blue-glow rounded-sm focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                  style={{ boxShadow: "inset 0 0 5px rgba(0, 255, 255, 0.2)" }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-gray border border-cyber-blue-glow rounded-sm focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                  style={{ boxShadow: "inset 0 0 5px rgba(0, 255, 255, 0.2)" }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-gray border border-cyber-blue-glow rounded-sm focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                  style={{ boxShadow: "inset 0 0 5px rgba(0, 255, 255, 0.2)" }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cyber-btn w-full rounded-sm flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin mr-2">◌</span>
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="cyber-card cyber-card-green glass-effect p-6 md:p-8">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-cyber-green">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-cyber-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:impact@arsii-isimm.org" className="text-gray-300 hover:text-cyber-green transition-colors">
                      impact@arsii-isimm.org
                    </a>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Address:</p>
                  <p className="text-gray-300">
                    ISIMM - Higher Institute of Computer Science and Mathematics of Monastir,<br />
                    Avenue de la Corniche,<br />
                    Monastir, Tunisia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cyber-card cyber-card-purple glass-effect p-6 md:p-8">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-cyber-purple">
                Follow ARSII ISIMM
              </h3>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="p-3 border border-cyber-purple-glow rounded-full hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                  <Facebook className="h-6 w-6 text-cyber-purple" />
                </a>
                <a href="#" className="p-3 border border-cyber-purple-glow rounded-full hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                  <Instagram className="h-6 w-6 text-cyber-purple" />
                </a>
                <a href="#" className="p-3 border border-cyber-purple-glow rounded-full hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                  <Twitter className="h-6 w-6 text-cyber-purple" />
                </a>
                <a href="#" className="p-3 border border-cyber-purple-glow rounded-full hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                  <Linkedin className="h-6 w-6 text-cyber-purple" />
                </a>
                <a href="#" className="p-3 border border-cyber-purple-glow rounded-full hover:bg-cyber-purple hover:bg-opacity-20 transition-colors">
                  <Github className="h-6 w-6 text-cyber-purple" />
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-cyber-purple-glow">
                <p className="text-center text-sm text-gray-400">
                  Organized by ARSII ISIMM - Association of Network and Information Systems Engineers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
