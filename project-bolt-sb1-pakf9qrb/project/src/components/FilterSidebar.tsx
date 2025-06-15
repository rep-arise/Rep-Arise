import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { filterOptions } from '../data/products';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  onFilterChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange
}) => {
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    sizes: true,
    colors: true,
    qualities: true,
    price: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleFilterChange = (category: string, value: string) => {
    const currentValues = filters[category] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    
    onFilterChange({
      ...filters,
      [category]: newValues
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({
      ...filters,
      priceRange: { min, max }
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      brands: [],
      sizes: [],
      colors: [],
      qualities: [],
      priceRange: { min: 0, max: 300 }
    });
  };

  const FilterSection = ({ 
    title, 
    items, 
    category, 
    expanded 
  }: { 
    title: string; 
    items: string[]; 
    category: string; 
    expanded: boolean; 
  }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => toggleSection(category)}
        className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900 hover:text-primary transition-colors duration-200"
        aria-expanded={expanded}
      >
        {title}
        {expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {expanded && (
        <div className="mt-2 space-y-2 animate-slide-up">
          {items.map((item) => (
            <label key={item} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[category]?.includes(item) || false}
                onChange={() => handleFilterChange(category, item)}
                className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-gray-700 hover:text-gray-900">
                {item}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl lg:shadow-none
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearAllFilters}
                className="text-sm text-primary hover:text-accent transition-colors duration-200"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="lg:hidden p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            <FilterSection
              title="Brands"
              items={filterOptions.brands}
              category="brands"
              expanded={expandedSections.brands}
            />

            <FilterSection
              title="Sizes"
              items={filterOptions.sizes}
              category="sizes"
              expanded={expandedSections.sizes}
            />

            <FilterSection
              title="Colors"
              items={filterOptions.colors}
              category="colors"
              expanded={expandedSections.colors}
            />

            <FilterSection
              title="Quality"
              items={filterOptions.qualities}
              category="qualities"
              expanded={expandedSections.qualities}
            />

            {/* Price Range */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900 hover:text-primary transition-colors duration-200"
                aria-expanded={expandedSections.price}
              >
                Price Range
                {expandedSections.price ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {expandedSections.price && (
                <div className="mt-4 space-y-4 animate-slide-up">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Min</label>
                      <input
                        type="number"
                        min="0"
                        max="300"
                        value={filters.priceRange?.min || 0}
                        onChange={(e) => handlePriceChange(
                          parseInt(e.target.value) || 0,
                          filters.priceRange?.max || 300
                        )}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Max</label>
                      <input
                        type="number"
                        min="0"
                        max="300"
                        value={filters.priceRange?.max || 300}
                        onChange={(e) => handlePriceChange(
                          filters.priceRange?.min || 0,
                          parseInt(e.target.value) || 300
                        )}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    ${filters.priceRange?.min || 0} - ${filters.priceRange?.max || 300}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;