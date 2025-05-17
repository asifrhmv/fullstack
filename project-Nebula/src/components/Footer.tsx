import React from 'react';
import { Salad as Galaxy } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-slate-900 text-slate-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-emerald-400 mb-4 md:mb-0">
            <Galaxy size={24} />
            <span className="text-lg font-bold">Nebula</span>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#about" className="hover:text-emerald-400 transition-colors text-sm">About</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors text-sm">Features</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors text-sm">Contact</a>
            <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Terms</a>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Nebula. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;