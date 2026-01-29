import React from 'react';
import { Layers, CloudSun, Anchor, Video, Aperture, Moon, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Environmental Transfer",
    subtitle: "Dry Dock to Deep Ocean",
    desc: "We extract the vessel from shipyard cradles and composite it into proprietary, hyper-realistic ocean plates.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800"
  },
  {
    title: "Virtual Refit",
    subtitle: "Modernize The Interior",
    desc: "We digitally reupholster furniture, declutter surfaces, and stage lifestyle elements to modernize older inventory.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
  },
  {
    title: "Atmosphere Control",
    subtitle: "Perfect Weather, Always",
    desc: "Grey skies reduce click-through rates. We replace overcast lighting with 'Golden Hour' or 'High Noon' sun profiles.",
    icon: CloudSun,
    image: "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=800"
  },
  {
    title: "Motion Synthesis",
    subtitle: "Still to Cinema",
    desc: "Generate smooth, physics-based navigation footage from static images using generative video AI models.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800"
  },
  {
    title: "Aerial Intelligence",
    subtitle: "Drone Emulation",
    desc: "Synthesize high-altitude establishing shots without launching a drone. Perfect for illustrating scale and location.",
    icon: Aperture,
    image: "https://images.unsplash.com/photo-1599596565147-38029c7d425b?q=80&w=800"
  },
  {
    title: "Twilight Activation",
    subtitle: "Evening Ambience",
    desc: "Turn on the underwater lights and deck ambience. Create the 'Evening Entertainment' mood instantly from day shots.",
    icon: Moon,
    image: "https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=800"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
             Capability Matrix
           </span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6">
             Visual Engineering
           </h2>
           <p className="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base">
             A comprehensive suite of generative interventions designed to maximize asset liquidity.
           </p>
        </div>

        {/* 
            Grid Layout Update:
            Forcing 3 columns on all screens (including mobile) to achieve the "3 cards then 3 cards below" layout.
        */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 lg:gap-8">
           {services.map((service, index) => (
             <div key={index} className="group relative bg-white dark:bg-[#111318] border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 shadow-lg dark:shadow-none flex flex-col">
                {/* Image Area - Reduced height on mobile to fit */}
                <div className="h-24 md:h-56 overflow-hidden relative">
                   <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 saturate-[0.8] group-hover:saturate-[1.1] brightness-[0.9] group-hover:brightness-100" 
                   />
                   
                   {/* Icon Badge - Tiny on mobile */}
                   <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-1.5 md:p-2.5 rounded-sm text-white group-hover:bg-neon group-hover:text-dark group-hover:border-neon transition-all duration-300 shadow-lg">
                      <service.icon className="w-3 h-3 md:w-5 md:h-5" />
                   </div>
                </div>

                {/* Content Area - Minimal on mobile */}
                <div className="p-3 md:p-8 flex-1 flex flex-col">
                   <div className="mb-2 md:mb-4">
                      <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1 truncate">{service.subtitle}</span>
                      <h3 className="text-xs md:text-xl font-display font-bold text-dark dark:text-white group-hover:text-neon transition-colors duration-300 leading-tight">{service.title}</h3>
                   </div>
                   {/* Hide description on mobile to maintain clean 3-col grid visual hierarchy */}
                   <p className="hidden md:block text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 font-light">
                      {service.desc}
                   </p>
                   
                   <div className="mt-auto pt-2 md:pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                      <span className="hidden md:block text-[9px] font-bold uppercase tracking-widest text-dark dark:text-white opacity-50 group-hover:opacity-100 transition-opacity">Explore Capability</span>
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-neon group-hover:bg-neon group-hover:text-dark transition-all duration-300">
                        <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Services;