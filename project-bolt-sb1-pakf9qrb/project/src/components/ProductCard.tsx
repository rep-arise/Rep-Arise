import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="card group overflow-hidden">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              -{discountPercentage}%
            </span>
          )}
          {product.quality === 'Limited Edition' && (
            <span className="bg-gradient-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
              LIMITED
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-200"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button 
            className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-200"
            aria-label="Quick add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link 
            to={`/product/${product.id}`}
            className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Quick View
          </Link>
        </div>
      </div>

      <div className="p-4">
        {/* Brand and Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Colors */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-600">Colors:</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                  color.toLowerCase() === 'black' ? 'bg-black' :
                  color.toLowerCase() === 'white' ? 'bg-white' :
                  color.toLowerCase() === 'red' ? 'bg-red-500' :
                  color.toLowerCase() === 'blue' ? 'bg-blue-500' :
                  color.toLowerCase() === 'green' ? 'bg-green-500' :
                  color.toLowerCase() === 'gray' ? 'bg-gray-500' :
                  color.toLowerCase() === 'navy' ? 'bg-blue-900' :
                  color.toLowerCase() === 'orange' ? 'bg-orange-500' :
                  'bg-gray-400'
                }`}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        {/* Sizes */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sizes:</span>
            <span className="text-sm text-gray-800">
              {product.sizes[0]} - {product.sizes[product.sizes.length - 1]}
            </span>
          </div>
          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;