import React from 'react';
import { Smartphone, Globe, Shield, Zap, Cloud, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <Smartphone size={24} className="text-emerald-400" />,
      title: "Mobile First",
      description: "Perfectly optimized experience across all your devices, with special attention to mobile."
    },
    {
      icon: <Globe size={24} className="text-emerald-400" />,
      title: "Global Access",
      description: "Access your data from anywhere in the world with our distributed cloud infrastructure."
    },
    {
      icon: <Shield size={24} className="text-emerald-400" />,
      title: "Enterprise Security",
      description: "Industry-leading security protocols to keep your information safe and secure."
    },
    {
      icon: <Zap size={24} className="text-emerald-400" />,
      title: "Lightning Fast",
      description: "Optimized performance ensures everything loads quickly, saving you valuable time."
    },
    {
      icon: <Cloud size={24} className="text-emerald-400" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with your favorite cloud services for enhanced productivity."
    },
    {
      icon: <Heart size={24} className="text-emerald-400" />,
      title: "User-Centered",
      description: "Designed with you in mind, creating an intuitive and enjoyable experience."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 relative">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful <span className="text-emerald-400">Features</span></h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover how our innovative features enhance your workflow and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="bg-slate-600/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;