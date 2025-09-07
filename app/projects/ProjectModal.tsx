import { useState, useEffect } from 'react';
import Icon, { LucideIconName } from '../_components/AppIcon';
import Image from 'next/image';
import  { Button } from '../_components/ui/button';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  location: string;
  client: string;
  status: 'Completed' | 'Ongoing' | string;
  image: string;
  sector: string;
  value: number;
  duration: string;
  completionPercentage: number;
  rating: number;
  teamSize: number;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  timeline: {
    title: string;
    date: string;
    description: string;
    completed: boolean;
  }[];
  metrics: {
    value: string;
    label: string;
    improvement: string;
  }[];
  keyResults: string[];
  impact: string;
  gallery: string[];
  testimonial: {
    content: string;
    author: string;
    position: string;
  };
  lastUpdated: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

interface Tab {
  id: string;
  label: string;
  icon: LucideIconName;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'timeline', label: 'Timeline', icon: 'Calendar' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'gallery', label: 'Gallery', icon: 'Image' },
    { id: 'testimonial', label: 'Client Feedback', icon: 'MessageSquare' }
  ];

  const nextImage = (): void => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FolderOpen" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">{project?.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <span className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{project?.location}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Building2" size={14} />
                  <span>{project?.client}</span>
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project?.status === 'Completed' 
                    ? 'bg-success text-white' 
                    : project?.status === 'Ongoing' ?'bg-warning text-white' :'bg-primary text-white'
                }`}>
                  {project?.status}
                </span>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Hero Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                width={1000}
                height={1000}
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">{project?.sector}</div>
                  <div className="text-lg font-semibold">{formatCurrency(project?.value)}</div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{project?.duration}</div>
                  <div className="text-sm text-text-secondary">Duration</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-success">{project?.completionPercentage}%</div>
                  <div className="text-sm text-text-secondary">Complete</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{project?.rating}</div>
                  <div className="text-sm text-text-secondary">Client Rating</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-text-primary">{project?.teamSize}</div>
                  <div className="text-sm text-text-secondary">Team Members</div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
                <p className="text-text-secondary leading-relaxed">{project?.fullDescription}</p>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={20} className="text-warning" />
                    <span>Challenges</span>
                  </h3>
                  <ul className="space-y-2">
                    {project?.challenges?.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Minus" size={16} className="text-warning mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span>Solutions</span>
                  </h3>
                  <ul className="space-y-2">
                    {project?.solutions?.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-text-primary">Project Timeline</h3>
              <div className="relative">
                {project?.timeline?.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${
                        milestone?.completed ? 'bg-success' : 'bg-muted border-2 border-primary'
                      }`}></div>
                      {index < project?.timeline?.length - 1 && (
                        <div className="w-px h-12 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-text-primary">{milestone?.title}</h4>
                        <span className="text-sm text-text-secondary">{milestone?.date}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{milestone?.description}</p>
                      {milestone?.completed && (
                        <div className="flex items-center space-x-1 mt-2">
                          <Icon name="CheckCircle" size={14} className="text-success" />
                          <span className="text-xs text-success">Completed</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-text-primary">Project Results & Impact</h3>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project?.metrics?.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">{metric?.value}</div>
                    <div className="text-sm text-text-secondary">{metric?.label}</div>
                    <div className="text-xs text-accent mt-1">{metric?.improvement}</div>
                  </div>
                ))}
              </div>

              {/* Key Results */}
              <div>
                <h4 className="font-medium text-text-primary mb-3">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project?.keyResults?.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg">
                      <Icon name="Trophy" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-text-primary">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r-lg">
                <h4 className="font-medium text-text-primary mb-2">Project Impact</h4>
                <p className="text-sm text-text-secondary">{project?.impact}</p>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-text-primary">Project Gallery</h3>
              
              {/* Main Image Display */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                width={1000}
                height={1000}
                  src={project?.gallery?.[currentImageIndex]}
                  alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {project?.gallery?.length}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {project?.gallery?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-16 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <Image
                    width={1000}
                    height={1000}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                      loading='lazy'
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial Tab */}
          {activeTab === 'testimonial' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-text-primary">Client Feedback</h3>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={20} 
                      className={`${i < project?.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-text-secondary">({project?.rating}/5)</span>
                </div>
                
                <blockquote className="text-lg text-text-primary mb-4 italic">
                  "{project?.testimonial?.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{project?.testimonial?.author}</div>
                    <div className="text-sm text-text-secondary">{project?.testimonial?.position}</div>
                    <div className="text-sm text-text-secondary">{project?.client}</div>
                  </div>
                </div>
              </div>

              {/* Additional Feedback Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white border border-border rounded-lg">
                  <div className="text-xl font-bold text-success">98%</div>
                  <div className="text-xs text-text-secondary">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white border border-border rounded-lg">
                  <div className="text-xl font-bold text-primary">On Time</div>
                  <div className="text-xs text-text-secondary">Delivery</div>
                </div>
                <div className="text-center p-4 bg-white border border-border rounded-lg">
                  <div className="text-xl font-bold text-accent">5/5</div>
                  <div className="text-xs text-text-secondary">Quality Rating</div>
                </div>
                <div className="text-center p-4 bg-white border border-border rounded-lg">
                  <div className="text-xl font-bold text-text-primary">Yes</div>
                  <div className="text-xs text-text-secondary">Would Recommend</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span>Project ID: {project?.id}</span>
            <span>•</span>
            <span>Last Updated: {project?.lastUpdated}</span>
          </div>
          
          <div className="flex items-center space-x-3">
           <Link href='/contact'>
            <Button
              variant="default"
              size="sm"
            >
              Contact Team
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;