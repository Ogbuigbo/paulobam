"use client"

import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar,
  MapPin,
  Building2,
  CheckCircle,
  ChevronRight,
  Globe,
  Shield,
  Zap,
  Heart,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Placeholder for generated images - replace with your actual image paths
const officeImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755283578/african-video-editor-looking-camera-smiling-editing-video-project-post-production-software-wor_ate8sz.jpg";
const teamImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755283406/black-corporate-team-collaborates-global-investment-strategy_clbl84.jpg";
const visionImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755282988/team-leader-supervising-it-workers-server-room-maintaining-databases_kfyplw.jpg";
const missionImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755283063/4895162_tkd8i0.jpg";

const About = () => {
  const strengths = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Sector Expertise",
      description: "Proven experience across 9+ different industries and service sectors.",
      gradient: "from-navy to-blue-800"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Committed to maintaining the highest standards in all our operations.",
      gradient: "from-gold to-amber-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Team",
      description: "Skilled professionals dedicated to delivering exceptional results.",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Legal Compliance",
      description: "Fully registered and compliant with Nigerian corporate law.",
      gradient: "from-navy to-blue-800"
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

  const values = [
    { text: "Integrity & Transparency", icon: <Shield className="w-5 h-5" /> },
    { text: "Quality Excellence", icon: <Star className="w-5 h-5" /> },
    { text: "Innovation & Growth", icon: <Zap className="w-5 h-5" /> },
    { text: "Customer Satisfaction", icon: <Heart className="w-5 h-5" /> }
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
      y: 40,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC00djRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBIMzR2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0SDZ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NEg2VjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Header */}
        <motion.div 
          className="relative mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="absolute -left-8 -top-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl -z-10"
            variants={fadeIn}
          />
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
            variants={itemVariants}
          >
            About <span className="text-gold">PAULOTAM</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            A dynamic multi-sector company committed to excellence, innovation, and integrity in all our business endeavors.
          </motion.p>
          
          <motion.div 
            className="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-800/20 rounded-full blur-3xl -z-10"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        {/* Company Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Vision & Mission */}
          <motion.div 
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Vision Card */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-white shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-blue-900/5 -z-10"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-navy to-blue-800 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To become Nigeria's premier multi-sector service provider, recognized for our 
                  commitment to quality, innovation, and sustainable business practices.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image 
                    src={visionImage}
                    alt="Corporate vision"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-white shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-amber-500/5 -z-10"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-500 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To deliver exceptional services across multiple sectors through innovative 
                  solutions, professional expertise, and unwavering commitment to quality.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image 
                    src={missionImage}
                    alt="Business mission"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Company Image & Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="relative h-full rounded-2xl overflow-hidden shadow-xl mb-8"
              variants={itemVariants}
            >
              <Image 
                src={officeImage}
                alt="PAULOTAM office"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our Headquarters</h3>
                  <p className="text-white/90">Professional environment driving excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-navy mb-6">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                    whileHover={{ 
                      y: -4,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-navy to-blue-800 rounded-lg flex items-center justify-center mr-4">
                      {value.icon}
                    </div>
                    <span className="font-medium text-navy">{value.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Company Information Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Team Image */}
          <motion.div 
            className="relative h-full rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
          >
            <Image 
              src={teamImage}
              alt="PAULOTAM team"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Professional Team</h3>
                <p className="text-white/90">Dedicated experts delivering exceptional results</p>
              </div>
            </div>
          </motion.div>

          {/* Company Info Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-navy to-blue-800 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Company Information</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {companyInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-start py-3 border-b border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-medium text-navy">{info.label}</span>
                    <span className="text-gray-600 text-right max-w-xs">{info.value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="p-6 bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-xl border border-gold/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Registered Address</h4>
                    <p className="text-gray-600 text-sm">
                      No. 12, Sandfield Area, Road 1, Ogu Town, Rivers State, Nigeria
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Strengths Section */}
        <motion.div 
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-16"
            variants={itemVariants}
          >
            Why Choose <span className="text-gold">PAULOTAM</span>?
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                      <div className="text-white">
                        {strength.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-blue-800 transition-colors">
                      {strength.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {strength.description}
                    </p>

                    <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      Learn more <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-blue-900"></div>
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1719876543/abstract-pattern_dqgx9o.png')] opacity-10"></div>
          
          <div className="relative z-10 p-12 md:p-16 lg:p-20 text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Partner with Excellence?
            </motion.h3>
            
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join our network of satisfied clients and experience the PAULOTAM difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
              <Button 
                variant="gold"
                className="px-12 py-6 text-lg font-semibold group"
              >
                Contact Our Team
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;