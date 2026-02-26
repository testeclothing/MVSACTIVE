import React from 'react';
import Button from './Button';
import { Clock, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full bg-gray-50 dark:bg-[#0B0C10] overflow-hidden flex flex-col pt-24 lg:pt-0 transition-colors duration-500">
      
      {/* Background Grids & Ambience - Silver Mode vs Dark Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50"></div>
      
      {/* Platinum Gradient for Light Mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-transparent dark:via-transparent dark:to-transparent opacity-100 dark:opacity-0 pointer-events-none transition-opacity duration-500"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scan-clip {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0 0% 0 0); }
          100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes scan-line {
          0% { left: 0%; }
          50% { left: 100%; }
          100% { left: 0%; }
        }
        .animate-scanner-clip {
          animation: scan-clip 4s ease-in-out infinite;
        }
        .animate-scanner-line {
          animation: scan-line 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 h-full relative z-10 flex flex-col lg:justify-center">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 h-full lg:h-auto gap-6 lg:gap-12 pb-6 lg:pb-0">
            
            {/* TEXT SECTION - Top on Mobile */}
            <div className="lg:col-span-5 flex flex-col justify-end lg:justify-center items-start lg:h-full z-20 shrink-0">
                
                {/* Brand Tag */}
                <div className="flex items-center gap-3 mb-4 lg:mb-6 opacity-0 animate-slide-up">
                    <div className="flex gap-1">
                        <div className="w-1 h-3 lg:w-1 lg:h-4 bg-neon"></div>
                        <div className="w-1 h-3 lg:w-1 lg:h-4 bg-dark/20 dark:bg-white/20"></div>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em]">
                        The Visual Engine
                    </span>
                </div>
                
                {/* Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-dark dark:text-white leading-[0.95] mb-4 lg:mb-6 tracking-tight opacity-0 animate-slide-up-delay-1">
                    World-Class <br/>
                    Marine Visuals. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-dark to-neon dark:via-white dark:to-neon bg-[length:200%_auto] animate-shine">Zero Logistics.</span>
                </h1>

                {/* Subheader */}
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg max-w-lg mb-6 lg:mb-8 font-light leading-relaxed border-l-2 border-dark/10 dark:border-white/10 pl-6 opacity-0 animate-slide-up-delay-2">
                    MVS partners with elite brokerages to transform static inventory into cinematic assets. Replace your entire post-production department.
                </p>

                <div className="flex items-center gap-4 w-full sm:w-auto opacity-0 animate-slide-up-delay-2">
                     <Button variant="primary" className="flex-1 sm:flex-none w-full sm:w-auto text-xs sm:text-sm" onClick={() => document.getElementById('pilot')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get Your Free Test Photo
                    </Button>
                    <button onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 px-6 py-4 border border-dark/10 dark:border-white/10 rounded-sm bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-colors flex-1 sm:flex-none shadow-sm dark:shadow-none">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-dark dark:text-white">Partnership Models</span>
                    </button>
                </div>
            </div>

            {/* VISUAL SECTION - Fill Remaining Space on Mobile */}
            <div className="lg:col-span-7 w-full flex-grow lg:flex-grow-0 lg:h-full flex items-center justify-center relative min-h-0 opacity-0 animate-fade-in delay-500">
                <div className="relative w-full h-full lg:aspect-[16/9] rounded-lg overflow-hidden border border-dark/10 dark:border-white/10 shadow-2xl bg-[#0a0a0a]">
                    
                    {/* Background (After - Synthesized) */}
                    <img 
                        src="/images/img12.jpeg" 
                        alt="MVS Output"
                        className="absolute inset-0 w-full h-full object-cover saturate-[1.2]" 
                    />
                     
                    {/* Floating Badge (After) */}
                    <div className="absolute top-4 right-4 bg-neon text-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm z-10 shadow-lg">
                        MVS Synthesized
                    </div>

                    {/* Foreground (Before - Raw Dock) - Clipped */}
                    <div className="absolute inset-0 animate-scanner-clip bg-gray-100 dark:bg-[#050505]">
                        <img 
                            src="/images/img77.png" 
                            alt="Dock State"
                            className="w-full h-full object-cover brightness-75 opacity-90" 
                        />
                         {/* Floating Badge (Before) */}
                         <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/80 text-dark dark:text-white/50 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm border border-dark/10 dark:border-white/10">
                            Raw Dock
                        </div>
                    </div>

                    {/* Scanner Line */}
                    <div className="absolute inset-y-0 w-1 bg-neon shadow-[0_0_40px_rgba(204,243,129,1)] z-30 animate-scanner-line"></div>

                    {/* Metrics Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 dark:from-black/90 to-transparent p-4 lg:p-6 flex justify-between items-end">
                         <div className="flex gap-4 sm:gap-8">
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <Clock className="w-3 h-3 text-neon" />
                                    <span className="text-neon font-display font-bold text-xl">24h</span>
                                 </div>
                                 <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Fast-Track Delivery</span>
                             </div>
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="w-3 h-3 text-dark dark:text-white" />
                                    <span className="text-dark dark:text-white font-display font-bold text-xl">+420%</span>
                                 </div>
                                 <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Impression Velocity</span>
                             </div>
                             <div className="hidden sm:block">
                                 <div className="flex items-center gap-2 mb-1">
                                    <Zap className="w-3 h-3 text-dark dark:text-white" />
                                    <span className="text-dark dark:text-white font-display font-bold text-xl">Flat</span>
                                 </div>
                                 <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Monthly Rate</span>
                             </div>
                         </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
