import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Database, Settings, Target, BarChart3 } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Advanced CAPA Workflow",
      description: "Simulates pharma/manufacturing-level compliance with SLA logic, escalation flows, and comprehensive dashboards.",
      tools: ["Airtable", "Automations", "Role-Based Views", "SLA Logic"],
      features: [
        "Compliance tracking system",
        "Automated escalation flows",
        "Role-based dashboard views",
        "SLA deadline management"
      ],
      icon: Target,
      color: "from-blue-500 to-purple-600",
      loomLink: "https://loom.com/example-capa",
      airtableLink: "https://airtable.com/example-capa"
    },
    {
      id: 2,
      title: "Smart Issue Tracker",
      description: "Inspired by SaaS support systems with role-based dashboards, SLA deadlines, and intelligent escalation tracking.",
      tools: ["Airtable", "Formula Fields", "Linked Records", "Automations"],
      features: [
        "Issue priority automation",
        "SLA deadline tracking",
        "Role-based access control",
        "Performance analytics"
      ],
      icon: BarChart3,
      color: "from-green-500 to-teal-600",
      loomLink: "https://loom.com/example-tracker",
      airtableLink: "https://airtable.com/example-tracker"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  return (
    <div className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Scalable no-code systems that transform business operations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card-wrapper"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="project-card">
                  <div className={`project-card-header bg-gradient-to-r ${project.color}`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="project-title">{project.title}</CardTitle>
                    <CardDescription className="project-description">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="project-tools">
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="tool-badge">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="project-features">
                      {project.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-dot" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="project-actions">
                      <Button variant="outline" className="action-btn">
                        <Play className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                      <Button variant="outline" className="action-btn">
                        <Database className="w-4 h-4 mr-2" />
                        Airtable Base
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;