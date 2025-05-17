import React from 'react';
import { Sparkles, Target, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-emerald-400">Nebula</span></h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Nebula is the innovative platform that's transforming how teams work. 
            Experience the future of productivity today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Sparkles size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-slate-300">
              To create groundbreaking solutions that empower users to achieve more, 
              with less effort and greater satisfaction.
            </p>
          </div>
          
          <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-slate-300">
              To deliver user-centric products that solve real problems and create 
              meaningful impact in everyday lives.
            </p>
          </div>
          
          <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Rocket size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Approach</h3>
            <p className="text-slate-300">
              We combine cutting-edge technology with intuitive design to create 
              experiences that feel magical yet familiar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;