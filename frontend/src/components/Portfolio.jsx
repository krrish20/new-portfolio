import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ResumeSection from './ResumeSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio-container">
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        darkMode={darkMode}
      />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <section id="home">
        <HeroSection scrollToSection={scrollToSection} />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="resume">
        <ResumeSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Portfolio;