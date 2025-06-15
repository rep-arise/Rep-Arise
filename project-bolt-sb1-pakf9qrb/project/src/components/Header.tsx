import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max section-padding" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
              aria-label="SneakerHub Home"
            >
              SneakerHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/10"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/10"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/10 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button 
                  className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/10"
                  aria-label="Search products"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/10"
                  aria-label="User account"
                >
                  <User className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/10 relative"
                  aria-label="Shopping bag"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;