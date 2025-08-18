import React from 'react';
import Icon from '../_components/AppIcon';
import { Button } from '../_components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../_components/ui/select';
import { Filters } from '@/lib/data';

interface FilterOption {
  value: string;
  label: string;
}

interface ProjectCounts {
  total: number;
  filtered?: number;
}

interface ProjectFilterProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  onClearFilters: () => void;
  projectCounts: ProjectCounts;
  isLoading: boolean;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  projectCounts,
  isLoading 
}) => {
  // Filter options with consistent 'all' value for default option
  const sectorOptions: FilterOption[] = [
    { value: 'all', label: 'All Sectors' },
    { value: 'Construction', label: 'Construction & Infrastructure' },
    { value: 'Agriculture', label: 'Agriculture & Food Processing' },
    { value: 'Technology', label: 'Technology & Digital Solutions' },
    { value: 'Healthcare', label: 'Healthcare & Medical Services' },
    { value: 'Education', label: 'Education & Training' },
    { value: 'Finance', label: 'Financial Services' },
    { value: 'Manufacturing', label: 'Manufacturing & Production' },
    { value: 'Energy', label: 'Energy & Utilities' },
    { value: 'Transportation', label: 'Transportation & Logistics' }
  ];

  const statusOptions: FilterOption[] = [
    { value: 'all', label: 'All Status' },
    { value: 'Completed', label: 'Completed Projects' },
    { value: 'Ongoing', label: 'Ongoing Projects' },
    { value: 'Planning', label: 'In Planning Phase' }
  ];

  const locationOptions: FilterOption[] = [
    { value: 'all', label: 'All Locations' },
    { value: 'Lagos', label: 'Lagos State' },
    { value: 'Abuja', label: 'Federal Capital Territory' },
    { value: 'Port Harcourt', label: 'Rivers State' },
    { value: 'Kano', label: 'Kano State' },
    { value: 'Ibadan', label: 'Oyo State' },
    { value: 'Kaduna', label: 'Kaduna State' },
    { value: 'Benin City', label: 'Edo State' },
    { value: 'Enugu', label: 'Enugu State' },
    { value: 'Jos', label: 'Plateau State' },
    { value: 'Calabar', label: 'Cross River State' }
  ];

  const scaleOptions: FilterOption[] = [
    { value: 'all', label: 'All Scales' },
    { value: 'Small', label: 'Small Scale (₦1M - ₦50M)' },
    { value: 'Medium', label: 'Medium Scale (₦50M - ₦500M)' },
    { value: 'Large', label: 'Large Scale (₦500M+)' }
  ];

  const yearOptions: FilterOption[] = [
    { value: 'all', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' }
  ];

  const hasActiveFilters = Object.values(filters).some(value => value && value !== 'all');

  const getFilterLabel = (filterKey: string, filterValue: string): string => {
    const optionMap: Record<string, FilterOption[]> = {
      sector: sectorOptions,
      status: statusOptions,
      location: locationOptions,
      scale: scaleOptions,
      year: yearOptions
    };
    
    const option = optionMap[filterKey]?.find(opt => opt.value === filterValue);
    return option ? option.label : filterValue;
  };

  const handleSelectChange = (type: keyof Filters, value: string) => {
    onFilterChange(type, value === 'all' ? '' : value);
  };

  return (
    <div className="bg-white border border-border rounded-lg p-6 mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-text-primary">Filter Projects</h3>
            <p className="text-sm text-text-secondary">
              {isLoading ? 'Loading...' : `${projectCounts.total} projects found`}
              {hasActiveFilters && ` (${projectCounts.filtered} filtered)`}
            </p>
          </div>
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
          >
            Clear All
          </Button>
        )}
      </div>
      
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Sector Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Business Sector</label>
          <Select
            value={filters.sector || 'all'}
            onValueChange={(value) => handleSelectChange('sector', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Sectors" />
            </SelectTrigger>
            <SelectContent>
              {sectorOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Project Status</label>
          <Select
            value={filters.status || 'all'}
            onValueChange={(value) => handleSelectChange('status', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Location</label>
          <Select
            value={filters.location || 'all'}
            onValueChange={(value) => handleSelectChange('location', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Scale Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Project Scale</label>
          <Select
            value={filters.scale || 'all'}
            onValueChange={(value) => handleSelectChange('scale', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Scales" />
            </SelectTrigger>
            <SelectContent>
              {scaleOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Completion Year</label>
          <Select
            value={filters.year || 'all'}
            onValueChange={(value) => handleSelectChange('year', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Quick Filter Tags */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Zap" size={16} className="text-accent" />
          <span className="text-sm font-medium text-text-primary">Quick Filters</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange('status', filters.status === 'Completed' ? '' : 'Completed')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
              filters.status === 'Completed'
                ? 'bg-success text-white' : 'bg-muted text-text-secondary hover:bg-success/10 hover:text-success'
            }`}
          >
            Completed Projects
          </button>
          
          <button
            onClick={() => onFilterChange('scale', filters.scale === 'Large' ? '' : 'Large')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
              filters.scale === 'Large' ? 'bg-primary text-white' : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Large Scale Projects
          </button>
          
          <button
            onClick={() => onFilterChange('location', filters.location === 'Lagos' ? '' : 'Lagos')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
              filters.location === 'Lagos' ? 'bg-accent text-white' : 'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
            }`}
          >
            Lagos Projects
          </button>
          
          <button
            onClick={() => onFilterChange('year', filters.year === '2024' ? '' : '2024')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
              filters.year === '2024' ? 'bg-secondary text-white' : 'bg-muted text-text-secondary hover:bg-secondary/10 hover:text-secondary'
            }`}
          >
            Recent Projects (2024)
          </button>
        </div>
      </div>
      
      {/* Filter Summary */}
      {hasActiveFilters && (
        <div className="mt-4 p-3 bg-primary/5 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">Active Filters</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(filters) as [keyof Filters, string][]).map(([key, value]) => {
              if (!value || value === 'all') return null;
              
              return (
                <span
                  key={key}
                  className="inline-flex items-center space-x-1 px-2 py-1 bg-white border border-primary/20 rounded-full text-xs"
                >
                  <span className="text-primary font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span className="text-text-primary">{getFilterLabel(key, value)}</span>
                  <button
                    onClick={() => onFilterChange(key, '')}
                    className="ml-1 text-text-secondary hover:text-error transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;