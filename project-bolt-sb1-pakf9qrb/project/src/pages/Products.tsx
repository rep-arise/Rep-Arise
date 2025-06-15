import React, { useState, useMemo } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { products, sortOptions } from '../data/products';
import { Product } from '../types';

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    brands: [],
    sizes: [],
    colors: [],
    qualities: [],
    priceRange: { min: 0, max: 300 }
  });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!product.name.toLowerCase().includes(query) && 
            !product.brand.toLowerCase().includes(query) &&
            !product.description.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0 && !filters.sizes.some(size => product.sizes.includes(size))) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.some(color => product.colors.includes(color))) {
        return false;
      }

      // Quality filter
      if (filters.qualities.length > 0 && !filters.qualities.includes(product.quality)) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [products, filters, searchQuery, sortBy]);

  const activeFiltersCount = useMemo(() => {
    return filters.brands.length + 
           filters.sizes.length + 
           filters.colors.length + 
           filters.qualities.length +
           (filters.priceRange.min > 0 || filters.priceRange.max < 300 ? 1 : 0);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max section-padding py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-gray-600">
            Discover premium sneakers from the world's leading brands
          </p>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search sneakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
                  aria-label="List view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden btn-outline flex items-center space-x-2"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          {/* Mobile Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFilterChange={setFilters}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredAndSortedProducts.length} of {products.length} products
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => setFilters({
                    brands: [],
                    sizes: [],
                    colors: [],
                    qualities: [],
                    priceRange: { min: 0, max: 300 }
                  })}
                  className="text-primary hover:text-accent transition-colors duration-200"
                >
                  Clear all filters ({activeFiltersCount})
                </button>
              )}
            </div>

            {/* Products */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      brands: [],
                      sizes: [],
                      colors: [],
                      qualities: [],
                      priceRange: { min: 0, max: 300 }
                    });
                  }}
                  className="btn-primary"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;