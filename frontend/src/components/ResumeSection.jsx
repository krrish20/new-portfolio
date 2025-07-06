import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      title: "Platform Workflow Specialist",
      company: "Freelance",
      period: "2023 - Present",
      location: "Bangalore, India",
      description: "Designing advanced no-code systems using Airtable, Notion, and automation logic for various clients.",
      achievements: [
        "Built 15+ custom workflow systems",
        "Reduced client operational overhead by 40%",
        "Specialized in compliance and SLA management"
      ]
    },
    {
      title: "Computer Science Educator",
      company: "Educational Institution",
      period: "2020 - 2023",
      location: "India",
      description: "Taught computer science fundamentals and developed curriculum for programming courses.",
      achievements: [
        "Educated 200+ students in programming",
        "Developed interactive learning materials",
        "Introduced no-code concepts to curriculum"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "University Name",
      year: "2020",
      grade: "First Class"
    }
  ];

  const certifications = [
    "Airtable Advanced Certification",
    "Notion Workspace Administrator",
    "Zapier Automation Specialist",
    "Process Optimization Expert"
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="resume-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">
            From education to enterprise workflow solutions
          </p>
          <Button className="download-resume-btn">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-content"
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants} className="resume-category">
            <div className="category-header">
              <Briefcase className="w-6 h-6 text-blue-500" />
              <h3 className="category-title">Experience</h3>
            </div>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="timeline-item"
                >
                  <div className="timeline-marker" />
                  <Card className="timeline-card">
                    <CardHeader>
                      <div className="timeline-header">
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-blue-600">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="timeline-meta">
                          <Badge variant="secondary" className="mb-1">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="w-3 h-3 mr-1" />
                            {exp.location}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      <div className="achievements">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="achievement-item">
                            <div className="achievement-dot" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="resume-category">
            <div className="category-header">
              <GraduationCap className="w-6 h-6 text-green-500" />
              <h3 className="category-title">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index} className="education-card">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">
                    {edu.field} • {edu.institution} • {edu.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{edu.grade}</Badge>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="resume-category">
            <div className="category-header">
              <Award className="w-6 h-6 text-purple-500" />
              <h3 className="category-title">Certifications</h3>
            </div>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="certification-item"
                >
                  <Award className="w-5 h-5 text-purple-500" />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeSection;