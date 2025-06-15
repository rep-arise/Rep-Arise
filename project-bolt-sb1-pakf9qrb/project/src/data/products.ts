import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max Revolution',
    brand: 'Nike',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience ultimate comfort and style with the Air Max Revolution. Featuring advanced cushioning technology and a sleek design.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Red'],
    category: 'Running',
    quality: 'Premium',
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    dateAdded: '2024-01-15'
  },
  {
    id: '2',
    name: 'Ultra Boost Elite',
    brand: 'Adidas',
    price: 189.99,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Revolutionary energy return technology meets premium materials in this elite running shoe.',
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black', 'White', 'Blue'],
    category: 'Running',
    quality: 'Limited Edition',
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    dateAdded: '2024-01-10'
  },
  {
    id: '3',
    name: 'Classic Court Pro',
    brand: 'Puma',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Timeless design meets modern comfort in this versatile court shoe perfect for everyday wear.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Navy'],
    category: 'Lifestyle',
    quality: 'Standard',
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    reviews: 67,
    inStock: true,
    dateAdded: '2023-12-20'
  },
  {
    id: '4',
    name: 'Street Runner X',
    brand: 'New Balance',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Urban-inspired design with superior comfort technology for the modern street runner.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Gray', 'Black', 'Green'],
    category: 'Running',
    quality: 'Premium',
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    reviews: 156,
    inStock: true,
    dateAdded: '2023-11-30'
  },
  {
    id: '5',
    name: 'Retro Classic 85',
    brand: 'Reebok',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Vintage-inspired sneaker with authentic 80s styling and modern comfort features.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Red', 'Blue'],
    category: 'Lifestyle',
    quality: 'Standard',
    isNew: false,
    isFeatured: false,
    rating: 4.3,
    reviews: 43,
    inStock: true,
    dateAdded: '2023-10-15'
  },
  {
    id: '6',
    name: 'Performance Elite',
    brand: 'Under Armour',
    price: 199.99,
    image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional-grade athletic shoe designed for peak performance and durability.',
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black', 'White', 'Orange'],
    category: 'Training',
    quality: 'Limited Edition',
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 78,
    inStock: true,
    dateAdded: '2024-01-20'
  }
];

export const filterOptions = {
  brands: ['Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok', 'Under Armour'],
  sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
  colors: ['Black', 'White', 'Red', 'Blue', 'Gray', 'Green', 'Navy', 'Orange'],
  qualities: ['Premium', 'Standard', 'Limited Edition'],
  priceRange: {
    min: 0,
    max: 300
  }
};

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
];