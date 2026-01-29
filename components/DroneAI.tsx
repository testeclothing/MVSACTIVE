import React from 'react';
import { Play, Aperture, Activity, Wifi } from 'lucide-react';
import Button from './Button';

const DroneAI: React.FC = () => {
  return (
    <section id="drone" className="bg-gray-50 dark:bg-[#0B0C10] border-y border-gray-200 dark:border-white/5 overflow-hidden relative group transition-colors duration-500">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(#CCF381 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        
        {/* Visual Side */}
        <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 overflow-hidden cursor-pointer border-l border-white/10">
            {/* Tech Overlays */}
            <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20 flex space-x-1">
                <div className="w-1.5 h-1.5 bg-red-500 animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-red-500 animate-pulse delay-75"></div>
                <div className="w-1.5 h-1.5 bg-red-500 animate-pulse delay-150"></div>
            </div>
            
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 z-20 font-mono text-neon text-[10px] tracking-widest bg-black/80 backdrop-blur-md px-3 py-1.5 border border-neon/30 rounded-sm">
                REC [ 00:12:45:09 ]
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-neon/30 blur-xl rounded-full animate-pulse"></div>
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 relative z-10">
                        <Play className="w-8 h-8 lg:w-10 lg:h-10 text-neon ml-1 fill-neon/20" />
                    </div>
                </div>
            </div>
            
            <img 
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop" 
                alt="Drone view of yacht" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] filter sepia-[.2] contrast-125 saturate-[.8]"
            />
        </div>

        {/* Content Side */}
        <div className="p-8 lg:p-24 flex flex-col justify-center order-2 lg:order-1 relative bg-white dark:bg-[#0B0C10] z-10">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
            
            <div className="flex items-center space-x-4 mb-6 lg:mb-8">
                <Aperture className="w-5 h-5 lg:w-6 lg:h-6 text-neon animate-spin-slow" />
                <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Motion Intelligence
                </span>
            </div>
            
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-dark dark:text-white mb-6 lg:mb-8 leading-[0.95]">
                Cinematic <br/> <span className="text-gray-400 dark:text-gray-600">Synthesis.</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed mb-8 lg:mb-12 max-w-md font-light border-l-2 border-neon pl-6">
                Stabilize. Grade. Upscale. <br/>
                We turn standard flight logs into <span className="text-dark dark:text-white font-medium">cinematic gold</span> using advanced motion-vector analysis.
            </p>

            {/* Data Grid Spec Sheet */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-12">
                {[
                    { label: 'Stabilization', val: '6-Axis Gyro', icon: Activity },
                    { label: 'Uplink', val: '5G Low Latency', icon: Wifi },
                    { label: 'Resolution', val: '8K Upscaling', icon: Aperture },
                    { label: 'Frame Rate', val: '120 FPS RAW', icon: Play },
                ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 dark:bg-white/5 p-3 lg:p-4 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-neon/30 transition-colors group/item">
                        <div className="flex items-center">
                            <spec.icon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500 mr-3 group-hover/item:text-neon transition-colors" />
                            <span className="text-[9px] lg:text-[10px] font-bold text-gray-500 uppercase tracking-wider">{spec.label}</span>
                        </div>
                        <span className="text-[10px] lg:text-xs font-mono font-bold text-dark dark:text-white">{spec.val}</span>
                    </div>
                ))}
            </div>

            <div>
                <Button variant="outline" className="w-full lg:w-auto text-xs border-dark/20 dark:border-white/20 text-dark dark:text-white">
                    View Motion Reel
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DroneAI;