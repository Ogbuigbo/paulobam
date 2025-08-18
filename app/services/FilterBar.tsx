import React from 'react';
import Icon from '../_components/AppIcon';
import { Button } from '../_components/ui/button';

interface FilterOption {
  id: string;
  label: string;
  icon: string;
  count: number;
}

interface SortOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  activeFilter, 
  onFilterChange, 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  totalResults 
}) => {
  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Sectors', icon: 'Grid3x3', count: 9 },
    { id: 'construction', label: 'Construction & Engineering', icon: 'Building', count: 3 },
    { id: 'technology', label: 'Technology & Digital', icon: 'Laptop', count: 2 },
    { id: 'consulting', label: 'Business Consulting', icon: 'Users', count: 2 },
    { id: 'logistics', label: 'Logistics & Supply', icon: 'Truck', count: 2 }
  ];

  const sortOptions: SortOption[] = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'projects', label: 'Most Projects' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'recent', label: 'Recently Updated' }
  ];

  return (
    <div className="bg-white border border-border rounded-lg p-6 mb-8 shadow-brand">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Search Bar */}
        <div className="flex-1 lg:max-w-md">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              placeholder="Search sectors, capabilities, or services..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-text-secondary">
            {totalResults} {totalResults === 1 ? 'sector' : 'sectors'} found
          </span>
          
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-border rounded-lg px-4 py-2 pr-8 text-sm font-medium text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
            />
          </div>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.id)}
              className="flex-shrink-0"
            >
              {filter.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                activeFilter === filter.id 
                  ? 'bg-white/20 text-white' :'bg-muted text-text-secondary'
              }`}>
                {filter.count}
              </span>
            </Button>
          ))}
        </div>
      </div>
      {/* Active Filters Display */}
      {(activeFilter !== 'all' || searchTerm) && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-text-secondary">Active filters:</span>
            {activeFilter !== 'all' && (
              <div className="flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                <span className="text-sm font-medium">
                  {filterOptions.find(f => f.id === activeFilter)?.label}
                </span>
                <button
                  onClick={() => onFilterChange('all')}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <Icon name="X" size={12} />
                </button>
              </div>
            )}
            {searchTerm && (
              <div className="flex items-center space-x-1 px-3 py-1 bg-accent/10 text-accent rounded-full">
                <span className="text-sm font-medium">"{searchTerm}"</span>
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:bg-accent/20 rounded-full p-0.5"
                >
                  <Icon name="X" size={12} />
                </button>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onFilterChange('all');
                onSearchChange('');
              }}
              className="text-text-secondary hover:text-text-primary"
            >
              Clear all
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;