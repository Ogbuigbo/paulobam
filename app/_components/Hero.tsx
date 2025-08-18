"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, Users, CheckCircle, Building, Shield, Award, Globe, Clock,
  ArrowRight, MessageCircle, Truck, ChevronDown 
} from "lucide-react";
import { Button } from "../_components/ui/button";

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    sectors: 0,
  });

  type StatItem = {
    label: string;
    value: number;
    suffix: string;
    icon: React.ComponentType<{ className?: string }>;
  };

  type TrustIndicator = {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    color: string;
  };

  const stats: StatItem[] = [
    { label: "Years of Excellence", value: 15, suffix: "+", icon: Calendar },
    { label: "Satisfied Clients", value: 500, suffix: "+", icon: Users },
    { label: "Completed Projects", value: 1200, suffix: "+", icon: CheckCircle },
    { label: "Business Sectors", value: 9, suffix: "", icon: Building },
  ];

  const trustIndicators: TrustIndicator[] = [
    { icon: Shield, text: "RC: 1234567", color: "text-success" },
    { icon: Award, text: "ISO Certified", color: "text-accent" },
    { icon: Globe, text: "West Africa", color: "text-primary" },
    { icon: Clock, text: "24/7 Support", color: "text-secondary" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentValue = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(timer);
          }

          setAnimatedNumbers((prev) => ({
            ...prev,
            [index === 0
              ? "years"
              : index === 1
                ? "clients"
                : index === 2
                  ? "projects"
                  : "sectors"]: Math.floor(currentValue),
          }));
        }, stepDuration);
      });
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/2348118452043?text=Hello%20Paulotam%20Global%20Services%2C%20I%20would%20like%20to%20discuss%20a%20business%20partnership",
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-6">
              {trustIndicators.map((indicator, index) => {
                const IconComponent = indicator.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                  >
                    <IconComponent className={`w-4 h-4 ${indicator.color}`} />
                    <span className="text-sm font-medium text-white/90">
                      {indicator.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Reliable Partner
                <span className="block text-accent font-display">
                  Across Every Sector
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                Paulotam Global Services LTD delivers excellence across 9 business
                verticals, combining Nigerian market expertise with
                international standards to drive your success forward.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 gap-2"
                >
                  Explore Our Sectors
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="border-white/30 text-black hover:bg-white/10 font-semibold px-8 py-4 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3 mx-auto">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {index === 0
                        ? animatedNumbers.years
                        : index === 1
                          ? animatedNumbers.clients
                          : index === 2
                            ? animatedNumbers.projects
                            : animatedNumbers.sectors}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-white/70 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">
                  Business Command Center
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">Live Activity</span>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      Construction project completed in Lagos
                    </p>
                    <p className="text-white/50 text-xs">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Truck className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      Logistics delivery to Abuja completed
                    </p>
                    <p className="text-white/50 text-xs">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      New client onboarded - Tech sector
                    </p>
                    <p className="text-white/50 text-xs">6 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 text-sm">Current Focus</span>
                  {(() => {
                    const IconComponent = stats[currentStat]?.icon;
                    return <IconComponent className="w-4 h-4 text-accent" />;
                  })()}
                </div>
                <div className="text-white font-semibold text-lg">
                  {stats[currentStat]?.label}
                </div>
                <div className="text-accent text-2xl font-bold">
                  {currentStat === 0
                    ? animatedNumbers.years
                    : currentStat === 1
                      ? animatedNumbers.clients
                      : currentStat === 2
                        ? animatedNumbers.projects
                        : animatedNumbers.sectors}
                  {stats[currentStat]?.suffix}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-success/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Explore Sectors</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;