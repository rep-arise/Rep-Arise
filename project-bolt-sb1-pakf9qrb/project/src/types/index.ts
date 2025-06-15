export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  category: string;
  quality: 'Premium' | 'Standard' | 'Limited Edition';
  isNew: boolean;
  isFeatured: boolean;
  rating: number;
  reviews: number;
  inStock: boolean;
  dateAdded: string;
}

export interface FilterOptions {
  brands: string[];
  sizes: string[];
  colors: string[];
  qualities: string[];
  priceRange: {
    min: number;
    max: number;
  };
}

export interface SortOption {
  value: string;
  label: string;
}