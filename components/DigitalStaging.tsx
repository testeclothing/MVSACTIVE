import React, { useState } from 'react';
import { Layers, Droplets, Sun, Moon, Eraser, ScanLine, ArrowRight } from 'lucide-react';

const modules = [
  {
    id: 'hull',
    label: 'Oceanic Relocation', // Nome Premium
    icon: Droplets,
    beforeLabel: 'Dry Dock Data',
    afterLabel: 'Deployed Asset',
    imageBefore: '/images/img11.png',
    imageAfter: '/images/img1.jpeg',
    description: 'Proprietary isolation algorithm. We extract the vessel from shipyard cradles and composite it into a physics-accurate marine environment.',
  },
  {
    id: 'weather',
    label: 'Atmospheric Precision', // Nome Premium
    icon: Sun,
    beforeLabel: 'Overcast Source',
    afterLabel: 'Solar Calibrated',
    imageBefore: '/images/img22.png',
    imageAfter: '/images/img2.jpeg',
    description: 'Full environmental recalibration. We eliminate flat lighting and synthesize specific solar coordinates to maximize hull reflectivity.',
  },
  {
    id: 'interior',
    label: 'Interior Modernization', // Nome Premium
    icon: Layers,
    beforeLabel: 'Dated Interior',
    afterLabel: 'Refitted Space',
    imageBefore: '/images/33img.png',
    imageAfter: '/images/img3.jpeg',
    description: 'Digital refit capabilities. We neutralize signs of wear, declutter surfaces, and stage high-end lifestyle elements to align with modern design codes.',
  },
  {
    id: 'twilight',
    label: 'Nocturnal Activation', // Nome Premium
    icon: Moon,
    beforeLabel: 'Daylight Raw',
    afterLabel: 'Evening Mood',
    imageBefore: '/images/img44.png',
    imageAfter: '/images/img4.jpeg',
    description: 'Light system simulation. We digitally activate underwater and deck lighting to create the "Evening Entertainment" atmosphere from standard daylight data.',
  },
  {
    id: 'eraser',
    label: 'Visual Integrity', // Nome Premium
    icon: Eraser,
    beforeLabel: 'Visual Noise',
    afterLabel: 'Pristine Asset',
    imageBefore: '/images/img55.png',
    imageAfter: '/images/img5.jpeg',
    description: 'AI-driven removal of fenders, hoses, and neighboring vessels to isolate the asset in its purest architectural form.',
  },
];

const DigitalStaging: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50 dark:bg-[#0B0C10] relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
        
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-200 dark:from-[#15171e] to-transparent opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
        
            {/* Section Header - Institutional Style */}
            <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-8 bg-neon"></div>
                    <span className="text-gray-400 dark:text-gray-500 text-[9px] font-bold uppercase tracking-[0.3em] font-sans">
                        Proprietary Visual Protocol
                    </span>
                    <div className="h-[1px] w-8 bg-neon"></div>
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6 leading-[1.1] tracking-tight">
                    Engineering the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-dark to-neon dark:via-white dark:to-neon bg-[length:200%_auto] animate-shine">
                        Perfect Asset.
                    </span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base font-light leading-relaxed max-w-xl mx-auto">
                    A modular compositing pipeline designed to address the five critical factors of nautical presentation and valuation.
                </p>
            </div>

            {/* MAIN INTERFACE CONTAINER */}
            <div className="flex flex-col gap-8 lg:gap-12 max-w-6xl mx-auto">
                
                {/* 1. The Viewport (Cinema Screen) */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] bg-[#050505] rounded-sm border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden group">
                    
                    {/* Top HUD Bar - Technical */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/90 to-transparent z-30 flex justify-between items-center px-6 pointer-events-none">
                        <div className="flex items-center gap-3">
                             <ScanLine className="w-3 h-3 text-neon opacity-80" />
                             <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest border-l border-white/20 pl-3">
                                Module: {activeModule.label}
                             </span>
                        </div>
                        {/* Status Lights */}
                        <div className="flex gap-1.5">
                            <div className="w-1 h-1 bg-neon rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                        </div>
                    </div>

                    {/* IMAGES CONTAINER */}
                    <div className="absolute inset-0 flex w-full h-full">
                        
                        {/* LEFT SIDE: BEFORE (Raw Data) */}
                        <div className="w-1/2 h-full relative border-r border-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Darken raw image slightly */}
                            <img 
                                src={activeModule.imageBefore} 
                                alt={activeModule.beforeLabel} 
                                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md text-white/50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest rounded-sm border border-white/10 z-20">
                                {activeModule.beforeLabel}
                            </div>
                        </div>

                        {/* RIGHT SIDE: AFTER (Processed) */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                            <img 
                                src={activeModule.imageAfter} 
                                alt={activeModule.afterLabel} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[1.1]"
                            />
                            <div className="absolute bottom-6 right-6 bg-neon text-dark px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest rounded-sm z-20 shadow-lg">
                                {activeModule.afterLabel}
                            </div>
                        </div>

                    </div>

                    {/* Bottom HUD - Dynamic Description */}
                    <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none flex justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm p-6 max-w-lg mx-4 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="flex items-start gap-4">
                                <div className="w-0.5 h-8 bg-neon"></div>
                                <div>
                                    <h4 className="text-white font-display font-bold text-sm mb-1 uppercase tracking-wider">{activeModule.label}</h4>
                                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                                        {activeModule.description}
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>

                </div>

                {/* 2. The Lens Rack (Selector Strip) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {modules.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => setActiveModule(mod)}
                            className={`group relative flex flex-col p-4 rounded-sm border transition-all duration-300 text-left outline-none ${
                                activeModule.id === mod.id 
                                ? 'bg-white dark:bg-[#15171e] border-neon shadow-lg' 
                                : 'bg-transparent border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <mod.icon className={`w-4 h-4 transition-colors ${
                                    activeModule.id === mod.id ? 'text-neon' : 'text-gray-400 group-hover:text-dark dark:group-hover:text-white'
                                }`} />
                                {activeModule.id === mod.id && (
                                    <div className="w-1 h-1 bg-neon rounded-full animate-pulse"></div>
                                )}
                            </div>
                            
                            <span className={`text-[9px] font-bold uppercase tracking-widest mb-1 block transition-colors ${
                                activeModule.id === mod.id ? 'text-dark dark:text-white' : 'text-gray-500'
                            }`}>
                                {mod.label}
                            </span>
                        </button>
                    ))}
                </div>

            </div>

        </div>
    </section>
  );
};

export default DigitalStaging;
