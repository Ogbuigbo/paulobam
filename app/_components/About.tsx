"use client"

import { Card, CardContent } from "../_components/ui/card";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar,
  MapPin,
  Building2,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const strengths = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Sector Expertise",
      description: "Proven experience across 9+ different industries and service sectors."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Committed to maintaining the highest standards in all our operations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Team",
      description: "Skilled professionals dedicated to delivering exceptional results."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Legal Compliance",
      description: "Fully registered and compliant with Nigerian corporate law."
    }
  ];

  const companyInfo = [
    { label: "Company Name", value: "PAULOTAM GLOBAL SERVICES LIMITED" },
    { label: "RC Number", value: "7268414" },
    { label: "Registration Date", value: "December 18, 2023" },
    { label: "Company Type", value: "Private Company Limited by Shares" },
    { label: "Status", value: "Active" },
    { label: "Authorized Capital", value: "₦1,000,000" },
    { label: "Share Structure", value: "1,000,000 ordinary shares of ₦1 each" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            About PAULOTAM Global Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dynamic multi-sector company committed to excellence, innovation, 
            and integrity in all our business endeavors.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Story */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                <Eye className="w-6 h-6 text-gold mr-3" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Nigeria's premier multi-sector service provider, recognized for our 
                commitment to quality, innovation, and sustainable business practices. We envision 
                a future where our diverse expertise drives economic growth and creates lasting 
                value for all stakeholders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                <Target className="w-6 h-6 text-gold mr-3" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional services across multiple sectors through innovative 
                solutions, professional expertise, and unwavering commitment to quality. We 
                strive to build lasting partnerships that drive mutual success and contribute 
                to sustainable development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                Our Values
              </h3>
              <ul className="space-y-2">
                {["Integrity & Transparency", "Quality Excellence", "Innovation & Growth", "Customer Satisfaction"].map((value, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-gold mr-3" />
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Company Information */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="bg-white border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Building2 className="w-6 h-6 text-gold mr-3" />
                  Company Information
                </h3>
                
                <div className="space-y-4">
                  {companyInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="flex justify-between items-start border-b border-gray-100 pb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="font-medium text-navy">{info.label}:</span>
                      <span className="text-muted-foreground text-right max-w-xs">{info.value}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-6 p-4 bg-gold/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Registered Address</h4>
                      <p className="text-sm text-muted-foreground">
                        No. 12, Sandfield Area, Road 1, Ogu Town, Rivers State, Nigeria
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-navy text-center mb-12"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Why Choose PAULOTAM Global Services?
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg mb-4 mx-auto text-navy"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {strength.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                      {strength.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join our network of satisfied clients and experience the PAULOTAM difference.
            </p>
            <motion.button 
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-gold text-navy rounded-lg font-semibold hover:bg-gold-light transition-all duration-300 shadow-gold"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;