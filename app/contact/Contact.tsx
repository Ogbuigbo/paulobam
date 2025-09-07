"use client"

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Building2,
  FileText
} from "lucide-react";
import ContactUsForm from "../_components/form/Index";
import { Card, CardContent } from "../_components/ui/card";

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Address",
      details: "paulotam@ymail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Registered Office",
      details: "No. 12, Sandfield Area, Road 1, Ogu Town, Rivers State, Nigeria",
      description: "Our official business address"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Nigerian local time (WAT)"
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Company Registration",
      details: "RC Number: 7268414",
      description: "Registered December 18, 2023"
    }
  ];


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              variants={itemVariants}
            >
              Ready to discuss your project or partnership opportunities? 
              We're here to help you achieve your business goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.h2 
                  className="text-2xl font-bold text-navy mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Contact Information
                </motion.h2>
                
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gold to-amber-500 rounded-lg text-white">
                              {info.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{info.details}</p>
                              <p className="text-xs text-muted-foreground/80">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quick Facts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <Card className="border border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-navy mb-4 flex items-center">
                        <FileText className="w-5 h-5 text-gold mr-2" />
                        Quick Facts
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span>Multi-sector service provider</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span>Legally registered and compliant</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span>Active business status</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span>Nigerian and international operations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactUsForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;