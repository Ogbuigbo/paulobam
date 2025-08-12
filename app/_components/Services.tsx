"use client"

import { Card, CardContent } from "../_components/ui/card";
import { 
  Shirt, 
  Apple, 
  Truck, 
  Building, 
  Factory, 
  Home, 
  Ship, 
  Fuel,
  FileText
} from "lucide-react";
import constructionImage from "@/assets/construction.jpg";
import logisticsImage from "@/assets/logistics.jpg";
import manufacturingImage from "@/assets/manufacturing.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Fashion & Food Distribution",
      description: "Comprehensive distribution networks for fashion and food products across Nigeria and West Africa.",
      image: null
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Import & Export Services",
      description: "Global trade facilitation with expertise in customs, logistics, and international commerce.",
      image: logisticsImage
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Civil Engineering & Construction",
      description: "Professional construction, welding, fabrication, and civil engineering services.",
      image: constructionImage
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing & Representation",
      description: "Manufacturing solutions and manufacturer representation services for various industries.",
      image: manufacturingImage
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate & Property",
      description: "Property consultancy, real estate development, and investment advisory services.",
      image: null
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Equipment & Marine Leasing",
      description: "Heavy-duty equipment rental and marine vessel leasing for industrial operations.",
      image: null
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Road Construction",
      description: "Road construction and maintenance services with modern equipment and techniques.",
      image: null
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Petroleum Products",
      description: "Marketing and distribution of petroleum products across Nigeria.",
      image: null
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "General Contracts",
      description: "General contracting and merchandise services for diverse business needs.",
      image: null
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-background">
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
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services across multiple sectors, delivering excellence 
            and innovation in every project we undertake.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card 
                className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Service Image */}
                  {service.image && (
                    <motion.div 
                      className="h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </motion.div>
                  )}
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg mr-4 text-navy"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Need a customized solution for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-elegant transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;