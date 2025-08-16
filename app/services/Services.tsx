"use client";

import { Card, CardContent } from "../_components/ui/card";
import { 
  Shirt, 
  Truck, 
  Building, 
  Factory, 
  Home, 
  Ship, 
  Fuel,
  FileText,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Fashion & Food Distribution",
      description: "Comprehensive distribution networks for fashion and food products across Nigeria and West Africa.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755332862/front-view-man-working-repair-sale-service_50_dyfazc.jpg"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Import & Export Services",
      description: "Global trade facilitation with expertise in customs, logistics, and international commerce.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755333416/close-up-delivery-person-giving-parcel-client_pd6xmz.jpg"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Civil Engineering & Construction",
      description: "Professional construction, welding, fabrication, and civil engineering services.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1710000000/construction-site-with-workers_zjzq9k.jpg"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing & Representation",
      description: "Manufacturing solutions and manufacturer representation services for various industries.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755333871/african-american-worker-standing-uniform-wearing-safety-hat-factory_1_qvtypx.jpg"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Real Estate & Property",
      description: "Property consultancy, real estate development, and investment advisory services.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755334255/man-working-environment-project-close-up_z5uola.jpg"
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Equipment & Marine Leasing",
      description: "Heavy-duty equipment rental and marine vessel leasing for industrial operations.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755334438/big-ship-dry-dock_dhkhzy.jpg"
    },
    {
      icon: <Fuel className="w-6 h-6" />,
      title: "Petroleum Products",
      description: "Marketing and distribution of petroleum products across Nigeria.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755335407/field-with-oil-pump-jacks-surrounded-by-greenery-sunlight_50_fcn5sx.jpg"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "General Contracts",
      description: "General contracting and merchandise services for diverse business needs.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1710000000/business-meeting-signing-contracts_xqjv8f.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                Our <span className="text-gold">Services</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive services across multiple sectors, delivering excellence 
                and innovation in every project we undertake.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Service Image */}
                      {service.image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={service.image} 
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      )}
                      
                      {/* Service Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-start mb-4">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-gold rounded-lg mr-4 text-navy flex-shrink-0">
                            {service.icon}
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                              {service.title}
                            </h2>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="mt-auto">
                          <button className="flex items-center text-gold font-medium group-hover:text-navy transition-colors">
                            Learn more
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-navy/5 via-white to-navy/5 py-12 px-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-navy mb-4">
                  Need a customized solution for your business?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our team specializes in creating tailored solutions that fit your unique requirements and business objectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center"
                  >
                    Get Custom Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => window.location.href = '/about'}
                    className="px-8 py-3 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300 flex items-center"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;