import React from 'react';
import { Mouse, ArrowDown, ShieldCheck, Globe, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full bg-gray-50 dark:bg-[#0B0C10] overflow-hidden flex flex-col pt-24 lg:pt-0 transition-colors duration-500">
      
      {/* Background Grids & Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50"></div>
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
          animation: scan-clip 5s ease-in-out infinite;
        }
        .animate-scanner-line {
          animation: scan-line 5s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 h-full relative z-10 flex flex-col lg:justify-center">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 h-full lg:h-auto gap-6 lg:gap-16 pb-6 lg:pb-0">
            
            {/* TEXT SECTION - Institutional Tone */}
            <div className="lg:col-span-5 flex flex-col justify-end lg:justify-center items-start lg:h-full z-20 shrink-0">
                
                {/* Brand Tag - Minimalist */}
                <div className="flex items-center gap-3 mb-6 opacity-0 animate-slide-up">
                    <div className="w-8 h-[1px] bg-neon"></div>
                    <span className="text-gray-400 dark:text-gray-500 text-[9px] font-bold uppercase tracking-[0.3em]">
                        Private Visual Infrastructure
                    </span>
                </div>
                
                {/* Headline - Focus on Valuation */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark dark:text-white leading-[1.05] mb-6 tracking-tight opacity-0 animate-slide-up-delay-1">
                    The Global Standard in <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-dark to-neon dark:via-white dark:to-neon bg-[length:200%_auto] animate-shine">
                        Yacht Asset Valuation.
                    </span>
                </h1>

                {/* Subheader - Technical & Exclusive */}
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg max-w-md mb-8 font-light leading-relaxed opacity-0 animate-slide-up-delay-2">
                    We apply advanced optical engineering to maximize the market command of extraordinary vessels. Exclusively for elite brokerages.
                </p>

                {/* NO AGGRESSIVE CTA - Just a subtle scroll indicator */}
                <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-dark dark:text-white opacity-0 animate-slide-up-delay-2 hover:text-neon transition-colors"
                >
                    <span className="border-b border-dark/20 dark:border-white/20 pb-0.5 group-hover:border-neon transition-all">
                        Explore the Protocol
                    </span>
                    <ArrowDown className="w-3 h-3 animate-bounce" />
                </button>
            </div>

            {/* VISUAL SECTION - The "Evidence" */}
            <div className="lg:col-span-7 w-full flex-grow lg:flex-grow-0 lg:h-full flex items-center justify-center relative min-h-0 opacity-0 animate-fade-in delay-500">
                <div className="relative w-full h-full lg:aspect-[16/9] rounded-sm overflow-hidden border border-dark/5 dark:border-white/10 shadow-2xl bg-[#0a0a0a]">
                    
                    {/* Background (Valuated State) */}
                    <img 
                        src="/images/img12.jpeg" 
                        alt="MVS Standard"
                        className="absolute inset-0 w-full h-full object-cover saturate-[1.1]" 
                    />
                     
                    {/* Badge: AFTER */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-neon/90 text-dark text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm z-10 shadow-lg backdrop-blur-md">
                        <ShieldCheck className="w-3 h-3" />
                        Market Ready
                    </div>

                    {/* Foreground (Raw State) - Clipped */}
                    <div className="absolute inset-0 animate-scanner-clip bg-gray-100 dark:bg-[#050505]">
                        <img 
                            src="/images/img77.png" 
                            alt="Raw Asset"
                            className="w-full h-full object-cover grayscale opacity-80" 
                        />
                         {/* Badge: BEFORE */}
                         <div className="absolute top-6 left-6 border border-dark/10 dark:border-white/10 bg-white/80 dark:bg-black/80 text-dark/50 dark:text-white/50 text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm backdrop-blur-md">
                            Raw Asset Data
                        </div>
                    </div>

                    {/* Scanner Line */}
                    <div className="absolute inset-y-0 w-[1px] bg-neon shadow-[0_0_20px_rgba(204,243,129,0.8)] z-30 animate-scanner-line"></div>

                    {/* Metrics Overlay - Institutional Data */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-[#050505]/90 border-t border-dark/5 dark:border-white/5 p-4 lg:p-6 flex justify-between items-end backdrop-blur-sm">
                         <div className="flex gap-6 sm:gap-12 w-full justify-start">
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <Globe className="w-3 h-3 text-neon" />
                                    <span className="text-dark dark:text-white font-display font-bold text-lg">Global</span>
                                 </div>
                                 <span className="text-[7px] font-bold uppercase tracking-widest text-gray-400">Buyer Reach</span>
                             </div>
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <Lock className="w-3 h-3 text-neon" />
                                    <span className="text-dark dark:text-white font-display font-bold text-lg">Private</span>
                                 </div>
                                 <span className="text-[7px] font-bold uppercase tracking-widest text-gray-400">Infrastructure</span>
                             </div>
                         </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50 animate-pulse">
        <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <Mouse className="w-4 h-4 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
