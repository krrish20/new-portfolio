import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Zap, Code, Brain, Smartphone, Cloud, Settings } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Platforms",
      items: [
        { name: "Airtable", icon: Database, level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Notion", icon: FileText, level: 90, color: "from-gray-500 to-gray-600" },
        { name: "Zapier", icon: Zap, level: 85, color: "from-orange-500 to-orange-600" }
      ]
    },
    {
      category: "Logic & Automation",
      items: [
        { name: "SLA Calculations", icon: Brain, level: 92, color: "from-purple-500 to-purple-600" },
        { name: "Workflow Design", icon: Settings, level: 88, color: "from-green-500 to-green-600" },
        { name: "Process Automation", icon: Zap, level: 85, color: "from-yellow-500 to-yellow-600" }
      ]
    },
    {
      category: "Technical",
      items: [
        { name: "HTML/CSS", icon: Code, level: 80, color: "from-red-500 to-red-600" },
        { name: "OpenAI API", icon: Brain, level: 75, color: "from-teal-500 to-teal-600" },
        { name: "REST APIs", icon: Cloud, level: 70, color: "from-indigo-500 to-indigo-600" },
        { name: "Slack Integration", icon: Smartphone, level: 78, color: "from-pink-500 to-pink-600" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            Tools and technologies I use to build scalable solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="skill-info">
                        <div className="skill-icon">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="skill-details">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className={`skill-progress bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="skills-highlight"
        >
          <div className="highlight-card">
            <h4 className="highlight-title">Specialized in No-Code Solutions</h4>
            <p className="highlight-description">
              I bridge the gap between technical complexity and business needs, creating systems that scale with your organization.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;