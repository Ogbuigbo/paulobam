"use client"

import { useState } from "react";
import { Button } from "../_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { Input } from "../_components/ui/input";
import { Textarea } from "../_components/ui/textarea";
import { Label } from "../_components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send,
  Building2,
  Globe,
  FileText,
  ChevronDown
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

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

  const services = [
    "Fashion & Food Distribution",
    "Import & Export Services",
    "Civil Engineering & Construction",
    "Manufacturing & Representation",
    "Real Estate & Property",
    "Equipment & Marine Leasing",
    "Road Construction",
    "Petroleum Products",
    "General Contracts",
    "Other Services"
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
        ease: "easeOut"
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
                <Card className="border border-gray-100 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-navy to-blue-900 p-6 text-white">
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-white/90">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-700">Company/Organization</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name (optional)"
                            className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-gray-700">Service of Interest</Label>
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
                            >
                              <option value="">Select a service</option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, requirements, or any questions you have..."
                          rows={6}
                          required
                          className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button 
                          type="submit" 
                          variant="default"
                          size="lg" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-gold to-amber-500 text-white hover:from-amber-500 hover:to-gold transition-all shadow-md"
                        >
                          {isSubmitting ? (
                            "Sending Message..."
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;