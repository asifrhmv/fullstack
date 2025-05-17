import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight">
          <span className="text-white">Transform Your Work with</span> <br />
          <span className="text-emerald-400">Nebula Platform</span>
        </h1>
        
        <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-slate-200">
          Experience the power of our next-generation platform. Streamline your workflow, boost productivity, and achieve more with less effort.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Get Started Now
            <ArrowRight size={18} className="ml-2" />
          </button>
          <button className="border-2 border-slate-300 hover:border-emerald-400 text-slate-200 hover:text-emerald-400 font-medium px-8 py-4 rounded-lg transition-all duration-300">
            Schedule Demo
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">10k+</div>
            <div className="text-slate-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-slate-300">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-slate-300">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-slate-300">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;