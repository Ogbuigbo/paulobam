import React from 'react';
import Icon, { LucideIconName } from '../_components/AppIcon';

interface Location {
  id: number;
  name: string;
}

interface Certification {
  id: number;
  name: string;
}

interface Sector {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
   icon: LucideIconName;
  category: string;
  projectCount: number;
  locations: string[] | string;
  rating: number;
  capabilities: string[];
  recentProject: {
    description: string;
    outcome: string;
    date: string;
  };
  testimonial: {
    content: string;
    author: string;
    company: string;
  };
  certifications: string[] | Certification[];
}

interface SectorStatsProps {
  sectors: Sector[];
}

interface StatItem {
   icon: LucideIconName;
  label: string;
  value: string;
  description: string;
  color: string;
}

const SectorStats: React.FC<SectorStatsProps> = ({ sectors }) => {
  const totalProjects = sectors?.reduce((sum, sector) => sum + (sector?.projectCount || 0), 0);
  
  // Handle both string array and string (comma-separated) locations
  const allLocations = sectors.flatMap(sector => 
    Array.isArray(sector.locations) 
      ? sector.locations 
      : sector.locations.split(',').map(loc => loc.trim())
  );
  const totalLocations = [...new Set(allLocations)]?.length;
  
  const averageRating = (sectors?.reduce((sum, sector) => sum + (sector?.rating || 0), 0) / (sectors?.length || 1))?.toFixed(1);
  
  // Handle both string array and Certification object array
  const allCertifications = sectors.flatMap(sector => 
    sector.certifications && typeof sector.certifications[0] === 'string'
      ? sector.certifications as string[]
      : (sector.certifications as Certification[]).map(c => c.name)
  );
  const totalCertifications = [...new Set(allCertifications)]?.length;

  const stats: StatItem[] = [
    {
      icon: 'Briefcase',
      label: 'Active Projects',
      value: `${totalProjects}+`,
      description: 'Across all sectors',
      color: 'text-primary'
    },
    {
      icon: 'MapPin',
      label: 'Service Locations',
      value: `${totalLocations}`,
      description: 'Cities in West Africa',
      color: 'text-accent'
    },
    {
      icon: 'Star',
      label: 'Average Rating',
      value: averageRating,
      description: 'Client satisfaction',
      color: 'text-warning'
    },
    {
      icon: 'Award',
      label: 'Certifications',
      value: `${totalCertifications}+`,
      description: 'Industry standards',
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-white border border-border rounded-lg p-6 mb-8 shadow-brand">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display font-semibold text-text-primary mb-2">
          Our Multi-Sector Excellence
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Comprehensive business solutions across nine specialized sectors, 
          delivering consistent quality and measurable results throughout West Africa.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-muted/50 rounded-xl flex items-center justify-center">
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">
              {stat?.value}
            </div>
            <div className="text-sm font-medium text-text-primary mb-1">
              {stat?.label}
            </div>
            <div className="text-xs text-text-secondary">
              {stat?.description}
            </div>
          </div>
        ))}
      </div>
      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span className="text-sm font-medium text-text-secondary">CAC Registered</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm font-medium text-text-secondary">ISO Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-secondary">500+ Satisfied Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-secondary">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorStats;