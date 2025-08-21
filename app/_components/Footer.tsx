"use client"

import { Building2, Mail, MapPin, Phone, Calendar } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // WhatsApp number (you can customize this)
  const whatsappNumber = "2348055778829"; // Format: country code + number without +
  const whatsappMessage = "Hello! I'm interested in your services.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Fashion & Food Distribution",
    "Import & Export Services",
    "Civil Engineering",
    "Manufacturing",
    "Real Estate",
    "Equipment Leasing",
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg">
                  <Building2 className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PAULOTAM</h3>
                  <p className="text-sm text-gray-300">GLOBAL SERVICES LIMITED</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Your reliable partner in distribution, construction, and global services. 
                We deliver excellence across multiple sectors with integrity and innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold mr-3" />
                  <a href="mailto:paulotam@ymail.com" className="text-gray-300 hover:text-gold transition-colors">
                    paulotam@ymail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gold mr-3" />
                  <a href="tel:08055778829" className="text-gray-300 hover:text-gold transition-colors">
                   +234 08055778829, +234 08101154850
                  </a>
                </div>
                
                {/* WhatsApp Link */}
                <div className="flex items-center">
                  <div className="w-5 h-5 text-gold mr-3">
                    <WhatsAppIcon />
                  </div>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold transition-colors flex items-center"
                  >
                    +234 08118452043
                  </a>
                </div>
               
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                  <span className="text-gray-300 text-sm">
                    No. 12, Sandfield Area, Road 1<br />
                    Ogu Town, Rivers State, Nigeria
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gold mr-3" />
                  <span className="text-gray-300 text-sm">
                    Registered: December 18, 2023
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm hover:text-gold transition-colors cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>© {currentYear} PAULOTAM GLOBAL SERVICES LIMITED. All rights reserved.</p>
              <p className="text-xs mt-1">RC Number: 7268414 | Private Company Limited by Shares</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Active Status
              </span>
              <span>Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;