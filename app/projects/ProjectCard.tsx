"use client"

import React, { useState } from 'react';
import Icon from '../_components/AppIcon';
import Image from 'next/image';
import { Button } from '../_components/ui/button';
import { Project } from "../../lib/data"

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getSectorColor = (sector: string): string => {
    const colors: Record<string, string> = {
      'Construction': 'bg-blue-100 text-blue-800',
      'Agriculture': 'bg-green-100 text-green-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Education': 'bg-yellow-100 text-yellow-800',
      'Finance': 'bg-indigo-100 text-indigo-800',
      'Manufacturing': 'bg-gray-100 text-gray-800',
      'Energy': 'bg-orange-100 text-orange-800',
      'Transportation': 'bg-cyan-100 text-cyan-800'
    };
    return colors[sector] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="executive-card group cursor-pointer" onClick={() => onViewDetails(project)}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          width={300}
          height={200}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading='lazy'
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <Icon name="Image" size={32} className="text-muted-foreground" />
          </div>
        )}
        
        {/* Sector Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(project.sector)}`}>
            {project.sector}
          </span>
        </div>

        {/* Project Status */}
        <div className="absolute top-3 right-3">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === 'Completed' 
              ? 'bg-success text-white' 
              : project.status === 'Ongoing' 
                ? 'bg-warning text-white' 
                : 'bg-primary text-white'
          }`}>
            {project.status}
          </div>
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm" >
            View Details
          </Button>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="MapPin" size={14} className="mr-1" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Project Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs text-text-secondary mb-1">Project Value</div>
            <div className="font-semibold text-primary">
              {formatCurrency(project.value)}
            </div>
          </div>
          <div>
            <div className="text-xs text-text-secondary mb-1">Duration</div>
            <div className="font-semibold text-text-primary">
              {project.duration}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
            <span>Timeline</span>
            <span>{project.completionPercentage}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-success h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.completionPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Key Results */}
        <div className="mb-4">
          <div className="text-xs text-text-secondary mb-2">Key Results</div>
          <div className="flex flex-wrap gap-1">
            {project.keyResults.slice(0, 2).map((result, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
              >
                {result}
              </span>
            ))}
            {project.keyResults.length > 2 && (
              <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                +{project.keyResults.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Building2" size={14} className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-text-primary">{project.client}</div>
              <div className="text-xs text-text-secondary">{project.clientType}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={14} className="text-accent fill-current" />
            <span className="text-sm font-medium text-text-primary">{project.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;