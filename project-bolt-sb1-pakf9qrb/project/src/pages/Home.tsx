import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  const newArrivals = products.filter(product => product.isNew).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-max section-padding py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Step Into
                <span className="block text-yellow-300">Excellence</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover our premium collection of authentic sneakers from the world's 
                most trusted brands. Quality, style, and comfort in every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-secondary inline-flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Watch Collection
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="animate-bounce-subtle">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium sneaker showcase"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Premium Brands</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: 'Free Shipping',
                description: 'Free shipping on orders over $100'
              },
              {
                icon: Shield,
                title: 'Authentic Products',
                description: '100% authentic sneakers guaranteed'
              },
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Curated selection of premium brands'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Round-the-clock customer support'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be the first to step into the latest trends with our newest sneaker arrivals
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites that combine style, comfort, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-dark text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Pair?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their sneaker needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Shop Collection
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;