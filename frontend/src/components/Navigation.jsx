import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Briefcase, Code, FileText, User, Mail } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">Amogh K</span>
          <span className="brand-tagline">Workflow Specialist</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-mobile-toggle"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="nav-mobile"
      >
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-mobile-item ${activeSection === item.id ? 'active' : ''}`}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;