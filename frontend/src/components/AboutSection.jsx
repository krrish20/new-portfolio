import React from 'react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { User, Target, Lightbulb, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Transform complex business operations into elegant, scalable systems"
    },
    {
      icon: Lightbulb,
      title: "Solution-Focused",
      description: "Every challenge is an opportunity to build something better"
    },
    {
      icon: Zap,
      title: "Efficiency Expert",
      description: "Automate the mundane, amplify the meaningful"
    }
  ];

  return (
    <div className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            The journey from educator to workflow architect
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-story"
          >
            <Card className="story-card">
              <CardContent className="p-8">
                <div className="story-header">
                  <User className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-6">My Story</h3>
                </div>
                
                <div className="story-content">
                  <p className="story-paragraph">
                    I'm a former educator turned workflow builder who discovered the power of no-code solutions. 
                    My background in teaching computer science gave me a unique perspective on breaking down complex 
                    problems into manageable, logical steps.
                  </p>
                  
                  <p className="story-paragraph">
                    I specialize in designing no-code systems that help businesses scale with structure. 
                    My educational background helps me think clearly, document well, and solve problems logically. 
                    I believe that the best systems are those that feel intuitive to use while being robust enough 
                    to handle enterprise-level complexity.
                  </p>
                  
                  <p className="story-paragraph">
                    Today, I work with companies to transform their chaotic processes into streamlined, automated 
                    workflows that save time, reduce errors, and provide valuable insights. Whether it's compliance 
                    tracking, issue management, or process optimization, I build systems that scale with your business.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-highlights"
          >
            <div className="highlights-grid">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="highlight-card"
                  >
                    <div className="highlight-icon">
                      <IconComponent className="w-8 h-8 text-blue-500" />
                    </div>
                    <h4 className="highlight-title">{highlight.title}</h4>
                    <p className="highlight-description">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about-quote"
            >
              <blockquote className="quote-card">
                <p className="quote-text">
                  "The best workflows are invisible – they work so seamlessly that users focus on their goals, not the process."
                </p>
                <cite className="quote-author">— Amogh K</cite>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;