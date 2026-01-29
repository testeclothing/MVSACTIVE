import React, { useState } from 'react';
import { Layers, Droplets, Sun, Moon, Eraser, ScanLine, ArrowRight } from 'lucide-react';

const modules = [
  {
    id: 'hull',
    label: 'Hull Extraction',
    icon: Droplets,
    beforeLabel: 'Dry Dock',
    afterLabel: 'Deep Ocean',
    // Swapped: img11 is Before (Warehouse), img1 is After (Ocean)
    imageBefore: '/images/img11.png',
    imageAfter: '/images/img1.jpeg',
    description: 'Proprietary algorithm that separates the vessel from concrete/cradles and composites it into a physics-accurate ocean plate.',
  },
  {
    id: 'weather',
    label: 'Atmosphere',
    icon: Sun,
    beforeLabel: 'Overcast',
    afterLabel: 'Golden Hour',
    // Swapped: img22 is Before, img2 is After
    imageBefore: '/images/img22.png',
    imageAfter: '/images/img2.jpeg',
    description: 'Full environmental replacement. We delete grey skies and flat lighting, synthesizing "Golden Hour" solar coordinates.',
  },
  {
    id: 'interior',
    label: 'Virtual Refit',
    icon: Layers,
    beforeLabel: 'Empty/Dated',
    afterLabel: 'Modern Luxury',
    // Swapped: 33img is Before, img3 is After
    imageBefore: '/images/33img.png',
    imageAfter: '/images/img3.jpeg',
    description: 'Digitally reupholster furniture, declutter surfaces, and stage lifestyle elements to modernize older inventory.',
  },
  {
    id: 'twilight',
    label: 'Twilight Activation',
    icon: Moon,
    beforeLabel: 'Daylight',
    afterLabel: 'Evening Party',
    // Swapped: img44 is Before, img4 is After
    imageBefore: '/images/img44.png',
    imageAfter: '/images/img4.jpeg',
    description: 'We turn lights on. Transforming standard day shots into "Evening Entertainment" setups with warm interior glows and underwater lights.',
  },
  {
    id: 'eraser',
    label: 'Smart Eraser',
    icon: Eraser,
    beforeLabel: 'Cluttered',
    afterLabel: 'Pristine',
    // Swapped: img55 is Before, img5 is After
    imageBefore: '/images/img55.png',
    imageAfter: '/images/img5.jpeg',
    description: 'AI-driven removal of fenders, hoses, crew members, and neighboring boats to isolate the asset in perfect condition.',
  },
];

const DigitalStaging: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <section id="engine" className="py-20 lg:py-32 bg-gray-50 dark:bg-[#0B0C10] relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
        
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-200 dark:from-[#15171e] to-transparent opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
        
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-neon/30 bg-neon/5">
                    <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#CCF381]"></div>
                    <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] font-sans">
                        MVS Engine V2.4
                    </span>
                </div>
                <h2 className="font-display text-4xl lg:text-6xl font-bold text-dark dark:text-white mb-6 leading-[1] tracking-tight">
                    Select Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-pulse">Transformation.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed max-w-xl mx-auto">
                    A modular compositing pipeline handling the five critical factors of nautical presentation.
                </p>
            </div>

            {/* MAIN INTERFACE CONTAINER */}
            <div className="flex flex-col gap-6 lg:gap-8 max-w-6xl mx-auto">
                
                {/* 1. The Viewport (Cinema Screen) - STATIC SPLIT VIEW */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] bg-black rounded-lg border border-gray-300 dark:border-white/10 shadow-2xl overflow-hidden group">
                    
                    {/* Top HUD Bar */}
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/80 to-transparent z-30 flex justify-between items-center px-6 pointer-events-none">
                        <div className="flex items-center gap-2">
                             <ScanLine className="w-3 h-3 text-neon opacity-70" />
                             <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">
                                Processing: {activeModule.label.toUpperCase()}
                             </span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                        </div>
                    </div>

                    {/* STATIC SIDE-BY-SIDE IMAGES */}
                    <div className="absolute inset-0 flex w-full h-full">
                        
                        {/* LEFT SIDE: BEFORE */}
                        <div className="w-1/2 h-full relative border-r border-white/20 overflow-hidden">
                            <img 
                                src={activeModule.imageBefore} 
                                alt={activeModule.beforeLabel} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-sm border border-white/10 z-20">
                                <span className="text-gray-400 text-[10px] mr-2">BEFORE</span>
                                {activeModule.beforeLabel}
                            </div>
                        </div>

                        {/* RIGHT SIDE: AFTER */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                            <img 
                                src={activeModule.imageAfter} 
                                alt={activeModule.afterLabel} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute bottom-4 right-4 bg-neon/90 text-dark px-3 py-1 text-xs font-bold rounded-sm border border-white/10 z-20 shadow-[0_0_10px_rgba(204,243,129,0.2)]">
                                <span className="text-dark/60 text-[10px] mr-2">AFTER</span>
                                {activeModule.afterLabel}
                            </div>
                        </div>

                    </div>

                    {/* Bottom HUD / Description Overlay - Centered on Hover */}
                    <div className="absolute bottom-6 left-0 right-0 z-30 pointer-events-none flex justify-center">
                        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-sm p-4 md:p-6 max-w-2xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mx-4">
                             <div className="flex items-start gap-4">
                                <div className="w-1 h-10 bg-neon shadow-[0_0_15px_#CCF381]"></div>
                                <div>
                                    <h4 className="text-white font-bold font-display text-lg mb-1">{activeModule.label}</h4>
                                    <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
                                        {activeModule.description}
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>

                </div>

                {/* 2. The Lens Rack (Selector Strip) */}
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
                    {modules.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => setActiveModule(mod)}
                            className="text-left outline-none focus:outline-none group"
                        >
                            <div className={`h-full flex flex-col p-3 md:p-4 rounded-sm border transition-all duration-300 relative overflow-hidden ${
                                activeModule.id === mod.id 
                                ? 'bg-white dark:bg-[#15171e] border-neon shadow-[0_0_20px_rgba(204,243,129,0.15)] transform -translate-y-1' 
                                : 'bg-gray-100 dark:bg-white/5 border-transparent hover:border-gray-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/10'
                            }`}>
                                {/* Active Indicator Dot */}
                                {activeModule.id === mod.id && (
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-neon rounded-full shadow-[0_0_5px_#CCF381]"></div>
                                )}

                                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-sm flex items-center justify-center mb-2 md:mb-3 transition-colors ${
                                    activeModule.id === mod.id ? 'text-neon bg-dark' : 'text-gray-400 bg-gray-200 dark:bg-white/5'
                                }`}>
                                    <mod.icon className="w-3 h-3 md:w-4 md:h-4" />
                                </div>
                                
                                <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1 block transition-colors leading-tight ${
                                    activeModule.id === mod.id ? 'text-dark dark:text-white' : 'text-gray-500'
                                }`}>
                                    {mod.label}
                                </span>
                                
                                <div className="hidden md:flex items-center gap-1.5 opacity-60 mt-auto pt-2">
                                    <span className="text-[9px] text-gray-400 truncate max-w-[60px]">{mod.beforeLabel}</span>
                                    <ArrowRight className="w-2.5 h-2.5 text-gray-400 shrink-0" />
                                    <span className={`text-[9px] truncate max-w-[60px] ${activeModule.id === mod.id ? 'text-neon' : 'text-gray-400'}`}>
                                        {mod.afterLabel}
                                    </span>
                                </div>

                            </div>
                        </button>
                    ))}
                </div>

            </div>

        </div>
    </section>
  );
};

export default DigitalStaging;
