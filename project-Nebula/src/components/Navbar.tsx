import React, { useState, useEffect } from 'react';
import { Salad as Galaxy, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
          <Galaxy size={32} />
          <span className="text-xl font-bold">Nebula</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium px-5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-emerald-400 hover:text-emerald-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-lg hover:text-emerald-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-lg hover:text-emerald-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="text-lg hover:text-emerald-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium px-5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;