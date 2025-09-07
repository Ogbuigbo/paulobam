import React, { useState } from 'react';
import Icon, { LucideIconName } from '../_components/AppIcon';
import { Button } from '../_components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface RecentProject {
  description: string;
  outcome: string;
  date: string;
}

interface Testimonial {
  content: string;
  author: string;
  company: string;
}

interface Sector {
  id: string;
  name: string;
  image: string;
  icon: LucideIconName;
  shortDescription: string;
  projectCount: number;
  locations: string | string[];
  rating: number;
  capabilities: string[];
  recentProject?: RecentProject;
  testimonial?: Testimonial;
  certifications?: string[];
}

interface SectorCardProps {
  sector: Sector;
  onInquire: (sector: Sector) => void;
}

const SectorCard: React.FC<SectorCardProps> = ({ sector, onInquire }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleInquire = () => {
    onInquire(sector);
  };

  const handleLearnMore = () => {
    // Special routing for Food Distribution and Fashion sectors
    if (sector.id === "10") {
      // Food Distribution sector
      router.push('/services/food-supplies');
    } else if (sector.id === "11") {
      // Fashion & Apparel sector
      router.push('/services/fashion-apparel');
    } else {
      // Default behavior for other sectors
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="executive-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={sector.image}
          alt={sector.name}
          width={400}
          height={192}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading='lazy'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Icon name={sector.icon} size={24} className="text-primary" />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="trust-signal">
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={14} className="text-success" />
              <span className="text-xs font-medium text-text-primary">Certified</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-display font-semibold text-white mb-1">
            {sector.name}
          </h3>
          <p className="text-sm text-white/90 line-clamp-2">
            {sector.shortDescription}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Briefcase" size={16} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">
                {sector.projectCount}+ Projects
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={16} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">
                {typeof sector.locations === 'string' ? sector.locations : sector.locations.join(', ')}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} className="text-warning fill-current" />
            <span className="text-sm font-semibold text-text-primary">
              {sector.rating}
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">Key Capabilities</h4>
            <div className="flex flex-wrap gap-2">
              {sector.capabilities.slice(0, 3).map((capability, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-xs font-medium text-text-secondary rounded-full"
                >
                  {capability}
                </span>
              ))}
              {sector.capabilities.length > 3 && (
                <span className="px-3 py-1 bg-accent/10 text-xs font-medium text-accent rounded-full">
                  +{sector.capabilities.length - 3} more
                </span>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-3 animate-fade-in">
              {sector.recentProject && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Recent Success</h4>
                  <div className="p-3 bg-success/5 border border-success/20 rounded-lg">
                    <p className="text-sm text-text-secondary mb-2">
                      {sector.recentProject.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-success">
                        {sector.recentProject.outcome}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {sector.recentProject.date}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {sector.testimonial && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Client Testimonial</h4>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-text-secondary italic mb-2">
                      "{sector.testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-white">
                          {sector.testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-text-primary">
                          {sector.testimonial.author}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {sector.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {sector.certifications && sector.certifications.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Compliance & Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-1 px-2 py-1 bg-success/10 rounded">
                        <Icon name="CheckCircle" size={12} className="text-success" />
                        <span className="text-xs font-medium text-success">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLearnMore}
            className="flex-1"
          >
            {sector.id === "10" || sector.id === "11" ? "Explore" : isExpanded ? "Show Less" : "Learn More"}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleInquire}
          >
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectorCard;