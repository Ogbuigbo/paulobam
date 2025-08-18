"use client"

import React, { useMemo, useState } from 'react'
import Hero from './Hero'
import Icon from '../_components/AppIcon'
import { Button } from '../_components/ui/button'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import {Project, mockProjects, ProjectCounts, Filters } from '@/lib/data'
import ProjectModal from './ProjectModal'


function Projects() {
     const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    sector: '',
    status: '',
    location: '',
    scale: '',
    year: ''
  });
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('date'); // date, value, rating
  const [isLoading, setIsLoading] = useState(false);



   const filteredProjects = useMemo<Project[]>(() => {
    let filtered = [...mockProjects];
    
    if (filters.sector) {
      filtered = filtered.filter(project => project.sector === filters.sector);
    }
    
    if (filters.status) {
      filtered = filtered.filter(project => project.status === filters.status);
    }
    
    if (filters.location) {
      filtered = filtered.filter(project => project.location === filters.location);
    }
    
    if (filters.scale) {
      filtered = filtered.filter(project => {
        if (filters.scale === 'Small') return project.value <= 50000000;
        if (filters.scale === 'Medium') return project.value > 50000000 && project.value <= 500000000;
        if (filters.scale === 'Large') return project.value > 500000000;
        return true;
      });
    }
    
    if (filters.year) {
      filtered = filtered.filter(project => {
        const projectYear = project.lastUpdated.split('/')[2];
        return projectYear === filters.year;
      });
    }
    
    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'value':
          return b.value - a.value;
        case 'rating':
          return b.rating - a.rating;
        case 'date':
        default:
          return new Date(b.lastUpdated.split('/').reverse().join('-')).getTime() - 
                 new Date(a.lastUpdated.split('/').reverse().join('-')).getTime();
      }
    });
    
    return filtered;
  }, [mockProjects, filters, sortBy]);

  const projectCounts: ProjectCounts = {
    total: mockProjects.length,
    filtered: filteredProjects.length
  };

 const handleFilterChange = (filterType: keyof Filters, value: string) => {
  setIsLoading(true);
  setFilters(prev => ({
    ...prev,
    [filterType]: value
  }));
  
  setTimeout(() => {
    setIsLoading(false);
  }, 300);
};

  const handleClearFilters = () => {
    setFilters({
      sector: '',
      status: '',
      location: '',
      scale: '',
      year: ''
    });
  };

   const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSectorClick = (sectorId: string) => {
    setFilters(prev => ({
      ...prev,
      sector: sectorId
    }));
    
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
     <Hero/> 

      {/* Projects Section */}
          <section id="projects-section" className='px-20 mt-8 pb-16'>
            {/* Project Filters */}
            <ProjectFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              projectCounts={projectCounts}
              isLoading={isLoading}
            />

            {/* View Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-text-primary">
                  Project Gallery
                </h2>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {filteredProjects?.length} projects
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e?.target?.value)}
                  className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="date">Sort by Date</option>
                  <option value="value">Sort by Value</option>
                  <option value="rating">Sort by Rating</option>
                </select>
                
                {/* View Mode Toggle */}
                <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'grid' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <Icon name="Grid3X3" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'list' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <Icon name="List" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Projects Grid/List */}
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-text-secondary">Loading projects...</span>
                </div>
              </div>
            ) : filteredProjects?.length > 0 ? (
              <div className={`${
                viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'space-y-6'
              }`}>
                {filteredProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters to see more projects.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </section>

             {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
          
    </div>
  )
}

export default Projects
