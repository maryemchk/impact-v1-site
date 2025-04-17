
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  pulsing: boolean;
  pulseDirection: number;
  pulseSpeed: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      mousePosition.current = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    function initParticles() {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 15000), 150);
      
      for (let i = 0; i < particleCount; i++) {
        const colors = ['rgba(0, 255, 255, ', 'rgba(0, 255, 102, ', 'rgba(190, 15, 255, '];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const alpha = Math.random() * 0.5 + 0.2;
        
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: color,
          alpha: alpha,
          pulsing: Math.random() > 0.7, // 30% of particles will pulse
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle, i) => {
        // Update alpha if particle is pulsing
        if (particle.pulsing) {
          particle.alpha += particle.pulseSpeed * particle.pulseDirection;
          
          if (particle.alpha >= 0.7) {
            particle.alpha = 0.7;
            particle.pulseDirection = -1;
          } else if (particle.alpha <= 0.2) {
            particle.alpha = 0.2;
            particle.pulseDirection = 1;
          }
        }
        
        // Draw particle
        ctx.fillStyle = `${particle.color}${particle.alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // React to mouse proximity if mouse is on canvas
        if (mousePosition.current) {
          const dx = particle.x - mousePosition.current.x;
          const dy = particle.y - mousePosition.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const force = 0.3 * (120 - distance) / 120;
            const angle = Math.atan2(dy, dx);
            particle.speedX += Math.cos(angle) * force;
            particle.speedY += Math.sin(angle) * force;
            
            // Cap max speed
            const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
            if (speed > 2) {
              particle.speedX = (particle.speedX / speed) * 2;
              particle.speedY = (particle.speedY / speed) * 2;
            }
          }
        }
        
        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.5;
            ctx.strokeStyle = particle.color.replace(/\d\.\d+\)$/, `${opacity})`);
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    }

    function animate() {
      drawParticles();
      // Apply a very small amount of damping to gradually slow particles
      particles.current.forEach(particle => {
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;
      });
      animationFrameId.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-container fixed inset-0 w-full h-full -z-10"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />
  );
};

export default ParticleBackground;
