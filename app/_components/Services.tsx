"use client"

import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import { 
  Shirt, 
  Utensils,
  Truck, 
  Building, 
  Factory, 
  Home, 
  Ship, 
  Fuel,
  FileText,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Generated professional images
const fashionImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755332862/front-view-man-working-repair-sale-service_50_dyfazc.jpg";
const foodImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755333276/top-view-bunch-fresh-food-donation-with-copy-space_xtse0l.jpg";
const importExportImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755333416/close-up-delivery-person-giving-parcel-client_pd6xmz.jpg";
const constructionImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755333871/african-american-worker-standing-uniform-wearing-safety-hat-factory_1_qvtypx.jpg";
const manufacturingImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755335705/woman-working-as-engineer_fsn3s0.jpg";
const realEstateImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755334255/man-working-environment-project-close-up_z5uola.jpg";
const marineLeasingImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755334438/big-ship-dry-dock_dhkhzy.jpg";
const petroleumImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755335407/field-with-oil-pump-jacks-surrounded-by-greenery-sunlight_50_fcn5sx.jpg";
const contractsImage = "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755334864/crop-businessman-signing-papers_50_jjw0zw.jpg";

const Services = () => {
  const services = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Fashion Distribution",
      description: "Comprehensive distribution networks for fashion apparel and accessories across Nigeria and West Africa.",
      image: fashionImage
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food Distribution",
      description: "Reliable supply chain solutions for food products, ensuring quality and timely delivery to markets.",
      image: foodImage
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Import & Export Services",
      description: "Global trade facilitation with expertise in customs, logistics, and international commerce.",
      image: importExportImage
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
      image: realEstateImage
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Equipment & Marine Leasing",
      description: "Heavy-duty equipment rental and marine vessel leasing for industrial operations.",
      image: marineLeasingImage
    },
  
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Petroleum Products",
      description: "Marketing and distribution of petroleum products across Nigeria.",
      image: petroleumImage
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "General Contracts",
      description: "General contracting and merchandise services for diverse business needs.",
      image: contractsImage
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjJnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC00djRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBIMzR2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0SDZ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NEg2VjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16 text-center">
          <motion.div 
            className="absolute -left-8 -top-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gold">Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive services across multiple sectors, delivering excellence and innovation.
          </motion.p>
          
          <motion.div 
            className="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-800/20 rounded-full blur-3xl -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ 
              clickable: true,
              el: '.services-pagination',
              type: 'bullets',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="h-full"
                >
                  <Card className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-0">
                    {/* Image with gradient overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-500 rounded-xl flex items-center justify-center mr-4 text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-navy group-hover:text-blue-800 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                        Learn more <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination - centered below the carousel */}
          <div className="services-pagination flex justify-center mt-6 !relative"></div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-blue-900"></div>
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1719876543/abstract-pattern_dqgx9o.png')] opacity-10"></div>
          
          <div className="relative z-10 p-12 md:p-16 lg:p-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h3>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We tailor our services to meet your specific business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gold"
                className="px-12 py-6 text-lg font-semibold group"
                onClick={() => window.location.href = '/contact'}
              >
                Get a Custom Quote
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="px-12 py-6 text-lg font-semibold group border-white text-black hover:bg-white/10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;