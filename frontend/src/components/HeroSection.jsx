import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Code, Database, Zap } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating elements animation
    const floatingElements = [];
    const numElements = 20;
    
    for (let i = 0; i < numElements; i++) {
      floatingElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      floatingElements.forEach(element => {
        element.x += element.speedX;
        element.y += element.speedY;
        
        // Bounce off walls
        if (element.x <= 0 || element.x >= canvas.width) element.speedX *= -1;
        if (element.y <= 0 || element.y >= canvas.height) element.speedY *= -1;
        
        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${element.opacity})`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="hero-badge">
            <Badge variant="secondary" className="mb-6">
              Platform Workflow Specialist
            </Badge>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Amogh K</span>
          </h1>
          
          <p className="hero-subtitle">
            I design scalable, logic-driven systems that reduce chaos and increase clarity.
          </p>
          
          <div className="hero-location">
            📍 Bangalore, India
          </div>
          
          <div className="hero-buttons">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="hero-btn-primary"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="hero-btn-secondary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="floating-cards">
            <div className="floating-card card-1">
              <Database className="w-8 h-8 text-blue-500" />
              <span>Airtable</span>
            </div>
            <div className="floating-card card-2">
              <Code className="w-8 h-8 text-purple-500" />
              <span>Automation</span>
            </div>
            <div className="floating-card card-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              <span>Workflows</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('projects')}
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default HeroSection;