"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../_components/ui/button";
import { Menu, X, Building2, Home, Briefcase, Users, FolderOpen, Handshake, Shield, MessageCircle } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: Home
    },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase
    },
    {
      name: "About",
      href: "/about",
      icon: Users
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderOpen
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Handshake
    }
  ];



  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348123456789?text=Hello%20Paulotam%20Global%20Services", "_blank");
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-elegant" 
        : "bg-white"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy">PAULOTAM</h1>
              <p className="text-sm text-muted-foreground -mt-1">GLOBAL SERVICES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-gold bg-gold/10"
                    : "text-navy hover:text-gold hover:bg-gold/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
         

            {/* WhatsApp CTA */}
            <div className="px-3 py-2">
                <Button variant="gold" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gold/5 transition-colors duration-200 text-navy hover:text-gold"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[...navigationItems].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-gold bg-gold/10"
                      : "text-navy hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Trust Signals */}
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span className="font-medium">RC: 1234567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="font-medium">500+ Clients</span>
                  </div>
                </div>
              </div>

              {/* Mobile WhatsApp CTA */}
              <div className="mt-4 px-3 py-2">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full flex items-center gap-2"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;