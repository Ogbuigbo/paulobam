"use client"

import { Button } from "../_components/ui/button";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to contact page if section doesn't exist
      window.location.href = "/contact";
    }
  };

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

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(27, 43, 71, 0.9), rgba(27, 43, 71, 0.7)), url("https://res.cloudinary.com/dpkn1ppzj/image/upload/v1754952739/hero-bg_zsrw90.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingBottom: "40px"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          {/* <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Shield className="w-4 h-4 text-gold mr-2" />
            <span className="text-white text-sm font-medium">RC: 7268414 | Registered December 2023</span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mt-24 lg:mt-10 text-white mb-6 leading-tight"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="block">PAULOTAM</span>
            <span className="block text-gold">GLOBAL SERVICES</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Your Reliable Partner in Distribution, Construction, and Global Services
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Multi-sector expertise spanning fashion, food distribution, construction, 
            import/export, petroleum, real estate, and manufacturing services across Nigeria and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button 
              variant="gold" 
              size="lg" 
              onClick={scrollToServices}
              className="group"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Key Stats */}
          <motion.div 
            className="flex flex-wrap items-center justify-center md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 mx-auto">
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">9+</h3>
              <p className="text-white/80">Service Sectors</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 mx-auto">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/80">Legal Compliance</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 mx-auto">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Active</h3>
              <p className="text-white/80">Business Status</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
     
    </section>
  );
};

export default Hero;