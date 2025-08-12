"use client"

import { Building2, Mail, MapPin, Phone, Calendar } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
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