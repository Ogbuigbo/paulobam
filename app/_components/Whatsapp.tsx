"use client"

import React, { useState, useEffect } from 'react';
import Icon from './AppIcon';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = (): void => {
    const message = encodeURIComponent(
      "Hello Paulotam Global Services! I'm interested in learning more about your business solutions across multiple sectors. Could we discuss potential partnership opportunities?"
    );
    window.open(`https://wa.me/2348118452043?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            showTooltip && !isHovered 
              ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
          }`}>
            <div className="bg-white rounded-lg shadow-lg border border-border p-3 max-w-xs">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">
                    Need Business Solutions?
                  </p>
                  <p className="text-text-secondary text-xs">
                    Chat with us on WhatsApp for instant support across all sectors!
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            aria-label="Contact us on WhatsApp"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
            
            {/* WhatsApp Icon */}
            <Icon 
              name="MessageCircle" 
              size={24} 
              className="text-white relative z-10" 
            />

            {/* Online Indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </button>

          {/* Hover Tooltip */}
          <div className={`absolute bottom-full right-0 mb-3 transition-all duration-200 ${
            isHovered 
              ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
          }`}>
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
              Start WhatsApp Chat
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact Bar (appears on smaller screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white border-t border-border p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-text-primary text-sm">
                  Need Immediate Assistance?
                </p>
                <p className="text-text-secondary text-xs">
                  Chat with our business experts
                </p>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Chat Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;