"use client"

import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar,
  MapPin,
  Building2,
  CheckCircle,
  ArrowRight,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Star
} from "lucide-react";

interface StrengthItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface CompanyInfoItem {
  label: string;
  value: string;
}

interface ValueItem {
  text: string;
  icon: React.ReactNode;
}

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const About = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const strengths: StrengthItem[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Sector Expertise",
      description: "Proven experience across 9+ different industries and service sectors.",
      gradient: "from-navy to-blue-800"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Committed to maintaining the highest standards in all our operations.",
      gradient: "from-gold to-amber-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Team",
      description: "Skilled professionals dedicated to delivering exceptional results.",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Legal Compliance",
      description: "Fully registered and compliant with Nigerian corporate law.",
      gradient: "from-navy to-blue-800"
    }
  ];

  const companyInfo: CompanyInfoItem[] = [
    { label: "Company Name", value: "PAULOTAM GLOBAL SERVICES LIMITED" },
    { label: "RC Number", value: "7268414" },
    { label: "Registration Date", value: "December 18, 2023" },
    { label: "Company Type", value: "Private Company Limited by Shares" },
    { label: "Status", value: "Active" },
    { label: "Authorized Capital", value: "₦1,000,000" },
    { label: "Share Structure", value: "1,000,000 ordinary shares of ₦1 each" }
  ];

  const values: ValueItem[] = [
    { text: "Integrity & Transparency", icon: <Shield className="w-5 h-5" /> },
    { text: "Quality Excellence", icon: <Star className="w-5 h-5" /> },
    { text: "Innovation & Growth", icon: <Zap className="w-5 h-5" /> },
    { text: "Customer Satisfaction", icon: <Heart className="w-5 h-5" /> }
  ];

  const stats: StatItem[] = [
    { number: "9+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "100%", label: "Legal Compliance", icon: <Shield className="w-6 h-6" /> },
    { number: "2023", label: "Established", icon: <Calendar className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-navy to-blue-800 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-gold to-amber-500 rounded-full blur-3xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            id="hero"
            data-animate
          >
            {/* Company Logo/Avatar */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-navy via-blue-800 to-gold rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHZpZXdCb3g9JzAgMCA2MCA2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxnIGZpbGw9JyNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4xJz48cGF0aCBkPSdNMzYgMzR2LTRoLTR2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMEgzNHY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDZWNmg0VjRINnonLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
                <Building2 className="w-16 h-16 text-white relative z-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-navy to-blue-800">
              About Our Company
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Paulotam Global Services Limited is a multi-sector service provider delivering excellence across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section with Images */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Vision */}
            <div 
              className={`transition-all duration-1000 ${isVisible['vision'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              id="vision"
              data-animate
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -mr-20 -mt-20 opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-navy to-blue-800 rounded-2xl flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    To become Nigeria's premier multi-sector service provider, recognized for our 
                    commitment to quality, innovation, and sustainable business practices.
                  </p>
                  <div className="flex items-center text-navy font-semibold cursor-pointer group">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Image */}
            <div 
              className={`transition-all duration-1000 ${isVisible['vision'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-800 to-blue-900" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyYWluIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')] opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Future Growth</h3>
                    <p className="text-blue-200">Leading innovation across sectors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Image */}
            <div 
              className={`transition-all duration-1000 ${isVisible['mission'] ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}
              id="mission"
              data-animate
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gold via-amber-500 to-amber-600" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDgwdjgwSDBWMHptMjAgMjB2NDBoNDBWMjBIMjB6bTIwIDM1YTE1IDE1IDAgMSAxIDAtMzAgMTUgMTUgMCAwIDEgMCAzMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Target className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Excellence</h3>
                    <p className="text-amber-100">Delivering exceptional results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div 
              className={`transition-all duration-1000 ${isVisible['mission'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full -ml-20 -mt-20 opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-500 rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    To deliver exceptional services across multiple sectors through innovative 
                    solutions, professional expertise, and unwavering commitment to quality.
                  </p>
                  <div className="flex items-center text-amber-600 font-semibold cursor-pointer group">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC00djRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBIMzR2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0SDZ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NEg2VjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            id="values"
            data-animate
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group transition-all duration-1000 ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group-hover:scale-105 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {value.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['strengths'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            id="strengths"
            data-animate
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose PAULOTAM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart in delivering exceptional multi-sector services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className={`group transition-all duration-1000 ${isVisible['strengths'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-4 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {strength.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {strength.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {strength.description}
                    </p>

                    <div className={`w-8 h-1 bg-gradient-to-r ${strength.gradient} rounded-full group-hover:w-12 transition-all duration-300`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Company Info Card */}
            <div 
              className={`transition-all duration-1000 ${isVisible['info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              id="info"
              data-animate
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -mr-16 -mt-16 opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-navy to-blue-800 rounded-2xl flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Company Information</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {companyInfo.map((info, index) => (
                      <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0">
                        <span className="font-semibold text-gray-900 text-sm">{info.label}:</span>
                        <span className="text-gray-600 text-right max-w-xs text-sm font-medium">{info.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-navy mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Registered Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          No. 12, Sandfield Area, Road 1, Ogu Town, Rivers State, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Image */}
            <div 
              className={`transition-all duration-1000 ${isVisible['info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="space-y-8">
                {/* Main Corporate Building Image */}
                <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-blue-700 to-blue-900" />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIi8+PHJlY3QgeD0iODAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPjxyZWN0IHg9IjAiIHk9IjgwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiLz48cmVjdCB4PSI4MCIgeT0iODAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building2 className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold mb-2">Corporate Excellence</h3>
                      <p className="text-blue-200">Professional headquarters in Rivers State</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Info Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Fully Certified</h4>
                    <p className="text-gray-600 text-sm">CAC registered and compliant</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Growing Strong</h4>
                    <p className="text-gray-600 text-sm">Since December 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-blue-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InN0YXJzIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4yIi8+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div 
            className={`transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            id="cta"
            data-animate
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Excellence?
            </h2>
            <p className="text-xl text-blue-200 mb-10 leading-relaxed">
              Join our network of satisfied clients and experience the PAULOTAM difference. 
              Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-gold to-amber-500 text-gray-900 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                View Our Services
                <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;