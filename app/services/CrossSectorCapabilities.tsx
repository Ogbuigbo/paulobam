import React from 'react';
import Icon from '../_components/AppIcon';
import { LucideIconName } from '../_components/AppIcon';
import { Button } from '../_components/ui/button';

interface Service {
  title: string;
  description: string;
   icon: LucideIconName;
  sectors: string[];
  benefits: string[];
}

interface InquiryData {
  name: string;
  icon: string;
  type: 'cross-sector' | 'custom';
}

interface CrossSectorCapabilitiesProps {
  onInquire: (data: InquiryData) => void;
}

const CrossSectorCapabilities: React.FC<CrossSectorCapabilitiesProps> = ({ onInquire }) => {
  const crossSectorServices: Service[] = [
    {
      title: "Integrated Project Management",
      description: "Seamlessly coordinate multi-sector projects with unified oversight and quality control across all business verticals.",
      icon: "Network",
      sectors: ["Construction", "Technology", "Logistics"],
      benefits: [
        "Single point of contact",
        "Unified project timeline",
        "Cross-sector synergies",
        "Cost optimization"
      ]
    },
    {
      title: "Regulatory Compliance Suite",
      description: "Navigate Nigerian business regulations across all sectors with our comprehensive compliance management system.",
      icon: "FileCheck",
      sectors: ["Legal", "Finance", "Operations"],
      benefits: [
        "CAC registration support",
        "Tax compliance management",
        "Industry-specific permits",
        "Ongoing regulatory updates"
      ]
    },
    {
      title: "Digital Transformation Package",
      description: "Modernize operations across all business areas with integrated technology solutions and digital workflows.",
      icon: "Zap",
      sectors: ["Technology", "Consulting", "Training"],
      benefits: [
        "Process automation",
        "Digital infrastructure",
        "Staff training programs",
        "Performance analytics"
      ]
    }
  ];

  const handleInquire = (service: Service) => {
    onInquire({
      name: service.title,
      icon: service.icon,
      type: 'cross-sector'
    });
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-display font-semibold text-text-primary mb-3">
          Cross-Sector Capabilities
        </h2>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Leverage our unique position as a multi-sector operator to access integrated solutions 
          that span across business verticals, delivering comprehensive value and operational efficiency.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {crossSectorServices.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-brand hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {service.title}
              </h3>
            </div>

            <p className="text-text-secondary mb-4 text-sm leading-relaxed">
              {service.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Involved Sectors:</h4>
              <div className="flex flex-wrap gap-2">
                {service.sectors.map((sector, sectorIndex) => (
                  <span
                    key={sectorIndex}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-text-primary mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleInquire(service)}
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-white rounded-lg p-6 shadow-brand">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Need a Custom Multi-Sector Solution?
          </h3>
          <p className="text-text-secondary mb-4">
            Our experts can design integrated solutions that leverage capabilities 
            across multiple business verticals to meet your specific requirements.
          </p>
          <Button
            variant="default"
            onClick={() => onInquire({
              name: 'Custom Multi-Sector Solution',
              icon: 'Settings',
              type: 'custom'
            })}
          >
            Discuss Custom Solution
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CrossSectorCapabilities;