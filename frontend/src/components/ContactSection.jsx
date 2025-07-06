import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amoghkrish1067@gmail.com",
      href: "mailto:amoghkrish1067@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/amoghk"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null
    }
  ];

  return (
    <div className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Ready to transform your business processes? Let's discuss your project.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <Card className="contact-card">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
                <CardDescription>
                  I'm always excited to discuss new opportunities and challenging projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="contact-methods">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="contact-method"
                      >
                        {info.href ? (
                          <a href={info.href} className="contact-link">
                            <IconComponent className="w-5 h-5 text-blue-500" />
                            <div>
                              <span className="contact-label">{info.label}</span>
                              <span className="contact-value">{info.value}</span>
                            </div>
                          </a>
                        ) : (
                          <div className="contact-link">
                            <IconComponent className="w-5 h-5 text-blue-500" />
                            <div>
                              <span className="contact-label">{info.label}</span>
                              <span className="contact-value">{info.value}</span>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="contact-cta">
                  <h4 className="cta-title">Why Work With Me?</h4>
                  <ul className="cta-list">
                    <li>✓ Proven track record with 15+ successful projects</li>
                    <li>✓ Deep expertise in no-code platforms</li>
                    <li>✓ Focus on scalable, maintainable solutions</li>
                    <li>✓ Clear communication and documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form"
          >
            <Card className="form-card">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Tell me about your project and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form-content">
                  <div className="form-row">
                    <div className="form-group">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="form-textarea"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;