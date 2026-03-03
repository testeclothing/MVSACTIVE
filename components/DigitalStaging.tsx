import React, { useState } from 'react';
import { Layers, Droplets, Sun, Moon, Eraser, ScanLine } from 'lucide-react';
import ComparisonSlider from './ComparisonSlider';

const modules = [
  {
    id: 'hull',
    label: 'Oceanic Relocation',
    icon: Droplets,
    beforeLabel: 'Dry Dock / Warehouse',
    afterLabel: 'Pacific Cruising',
    // Antes: Imagem antiga de armazém (mantém ou substitui pela tua "raw")
    imageBefore: '/images/img11.png', 
    // Depois: A tua nova foto exterior do Aquila
    imageAfter: '/images/img100.jpg',
    description: 'Proprietary isolation algorithm. We extract the vessel from shipyard cradles and composite it into a physics-accurate marine environment.',
  },
  {
    id: 'weather',
    label: 'Bridge Perspective', // Mudado para combinar com a foto do comando
    icon: Sun,
    beforeLabel: 'Obstructed View',
    afterLabel: 'Clear Horizon',
    // Antes: Imagem antiga nublada
    imageBefore: '/images/img22.png',
    // Depois: A tua nova foto do posto de comando
    imageAfter: '/images/img102.jpg',
    description: 'Horizon calibration. We replace marina obstructions visible through the helm windows with a seamless, infinite ocean view.',
  },
  {
    id: 'interior',
    label: 'Interior Modernization',
    icon: Layers,
    beforeLabel: 'Factory Lighting',
    afterLabel: 'Lifestyle Ambience',
    // Antes: Imagem antiga interior
    imageBefore: '/images/104.png',
    // Depois: A tua nova foto da sala/mesa
    imageAfter: '/images/aquila_salon.jpg',
    description: 'Ambiance correction. We adjust color temperature and lighting to showcase the warmth and volume of the living spaces.',
  },
  {
    id: 'systems',
    label: 'Systems Activation', // Mudado para combinar com a foto dos ecrãs
    icon: Moon,
    beforeLabel: 'Powered Off',
    afterLabel: 'Active Navigation',
    // Antes: Imagem antiga escura
    imageBefore: '/images/img44.png',
    // Depois: A tua nova foto dos ecrãs Garmin
    imageAfter: '/images/105.jpg',
    description: 'Digital system activation. We illuminate navigation screens and control panels to demonstrate operational readiness without powering up the vessel.',
  },
  {
    id: 'flow',
    label: 'Indoor-Outdoor Flow', // Mudado para combinar com a foto da popa
    icon: Eraser,
    beforeLabel: 'Marina Clutter',
    afterLabel: 'Open Water',
    // Antes: Imagem antiga com vizinhos
    imageBefore: '/images/img103.png',
    // Depois: A tua nova foto a olhar para trás
    imageAfter: '/images/aquila_aft.jpg',
    description: 'Visual continuity. We erase neighboring boats and concrete docks to create a seamless connection between the aft-deck and the ocean.',
  },
];

const DigitalStaging: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50 dark:bg-[#0B0C10] relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
        
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-200 dark:from-[#15171e] to-transparent opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
        
            {/* Section Header */}
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
                
                {/* 1. The Viewport (SLIDER INTERATIVO) */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] bg-[#050505] rounded-sm border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden group">
                    
                    {/* Top HUD Bar */}
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

                    {/* SLIDER COMPONENT */}
                    <div className="absolute inset-0 w-full h-full">
                        <ComparisonSlider 
                            key={activeModule.id}
                            imageBefore={activeModule.imageBefore}
                            imageAfter={activeModule.imageAfter}
                            labelBefore={activeModule.beforeLabel}
                            labelAfter={activeModule.afterLabel}
                        />
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
