import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, ArrowLeft, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max section-padding py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors duration-200">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-primary shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand and Rating */}
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold text-lg">{product.brand}</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Save {discountPercentage}%
                  </span>
                </>
              )}
            </div>

            {/* Badges */}
            <div className="flex items-center space-x-2">
              {product.isNew && (
                <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                  NEW ARRIVAL
                </span>
              )}
              {product.quality === 'Limited Edition' && (
                <span className="bg-gradient-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                  LIMITED EDITION
                </span>
              )}
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Color</h3>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-4 transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-primary scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${
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
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-600">Selected: {selectedColor}</p>
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  Total: ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn-primary flex-1 flex items-center justify-center space-x-2"
                disabled={!product.inStock || !selectedSize}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="btn-outline flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-gray-900">Authentic</p>
                  <p className="text-sm text-gray-600">100% genuine products</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-gray-900">Easy Returns</p>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="card group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 font-medium">{relatedProduct.brand}</p>
                    <Link to={`/product/${relatedProduct.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary transition-colors duration-200">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-lg font-bold text-primary">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;