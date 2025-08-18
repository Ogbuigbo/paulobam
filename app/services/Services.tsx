"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Grid3x3, ArrowDown, MessageCircle, ArrowRight,
  Shirt, Truck, Building, Factory, Home, Ship, Fuel, FileText
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../_components/ui/button";
import { Card, CardContent } from "../_components/ui/card";
import SectorStats from "./SectorStats";
import CrossSectorCapabilities from "./CrossSectorCapabilities";
import SectorCard from "./SectorCard";
import FilterBar from "./FilterBar";
import { Sector, sectors } from "../../lib/data"
import InquiryModal from "./InquiryModal";

  
const ServicesPage = () => {
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Filter and sort logic
  const filteredAndSortedSectors = sectors
    .filter(sector => {
      const matchesFilter = activeFilter === 'all' || sector.category === activeFilter;
      const matchesSearch = searchTerm === '' || 
        sector.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        sector.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sector.capabilities.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'projects': return b.projectCount - a.projectCount;
        case 'rating': return b.rating - a.rating;
        case 'recent': return new Date(b.recentProject.date).getTime() - new Date(a.recentProject.date).getTime();
        default: return 0;
      }
    });

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/2348123456789?text=Hello%20Paulotam%20Global%20Services%2C%20I%20would%20like%20to%20discuss%20a%20business%20partnership",
      "_blank"
    );
  };

   const handleInquire = (sector: any) => {
    setSelectedSector(sector);
    setIsInquiryModalOpen(true);
  };

 

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
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary text-white py-16 lg:py-24">
          <div className="pt-[2rem] mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Grid3x3 className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium">Nine Specialized Sectors</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
                Comprehensive Business Solutions
                <span className="block text-accent">Across Every Sector</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                From construction to technology, consulting to logistics - discover how our 
                multi-sector expertise delivers integrated solutions for your business needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById('sectors-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gap-2"
                >
                  Explore All Sectors
                  <ArrowDown className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppContact}
                  className="border-white text-black hover:bg-white hover:text-primary gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuss Your Needs
                </Button>
              </div>
            </div>
          </div>
        </section>

           <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectorStats sectors={sectors} />
          </div>
        </section>

           {/* Cross-Sector Capabilities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <CrossSectorCapabilities onInquire={handleInquire} />
          </div>
        </section>

        {/* Services Grid Section */}
      <section id="sectors-grid" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-text-primary mb-4">
                Our Service Sectors
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Explore our specialized capabilities across nine distinct business verticals, 
                each delivering world-class solutions with local expertise and global standards.
              </p>
            </div>

            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={filteredAndSortedSectors.length}
            />

            {/* Sectors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedSectors.map((sector) => (
                <SectorCard
                  key={sector.id}
                  sector={sector}
                  onInquire={handleInquire}
                />
              ))}
            </div>

            {/* No Results State */}
            {filteredAndSortedSectors.length === 0 && (
              <div className="text-center py-16">
                <div className="text-text-secondary mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No sectors found
                </h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchTerm('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

         {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedSector={selectedSector}
      />
    </div>
  );
};

export default ServicesPage;