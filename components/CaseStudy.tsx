import React from 'react';
import { ArrowUpRight, Clock, DollarSign, Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Narrative Side */}
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-500/20 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-600 dark:text-red-400 text-[9px] font-bold uppercase tracking-widest">Case File: M/Y Horizon</span>
                </div>
                
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight">
                    From "Stagnant" to <br/> 
                    <span className="text-neon">Sold in 19 Days.</span>
                </h2>
                
                <div className="prose prose-sm dark:prose-invert text-gray-500 mb-8 leading-relaxed">
                    <p className="mb-4">
                        <strong>The Problem:</strong> Listed for 6 months with standard marina photography. The vessel received only 3 inquiries, all low-ball offers citing "maintenance concerns" due to the background clutter in the photos.
                    </p>
                    <p>
                        <strong>The MVS Intervention:</strong> We processed the entire exterior suite. The vessel was digitally relocated to a calm anchorage in the Balearics. Grey skies were shifted to a soft dawn palette.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 border-t border-gray-100 dark:border-white/10 pt-8">
                    <div>
                        <span className="block text-3xl font-display font-bold text-dark dark:text-white mb-1">180</span>
                        <span className="text-[9px] uppercase tracking-widest text-gray-400">Days Stagnant</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <ArrowUpRight className="w-6 h-6 text-neon mb-1" />
                        <span className="text-[9px] uppercase tracking-widest text-gray-400">MVS Deployed</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-display font-bold text-dark dark:text-white mb-1">19</span>
                        <span className="text-[9px] uppercase tracking-widest text-gray-400">Days to Sale</span>
                    </div>
                </div>
            </div>

            {/* Visual Side */}
            <div className="lg:w-1/2 w-full">
                <div className="relative bg-white dark:bg-[#0E1015] rounded-sm p-2 border border-gray-200 dark:border-white/10 shadow-2xl">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                        <img 
                            src="https://files.fm/f/s93kqutyny" 
                            alt="MVS Result" 
                            className="w-full h-full object-cover saturate-100 transition-all duration-700 group-hover:scale-105"
                        />
                        
                        {/* Sold Stamp */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100">
                             <div className="border-4 border-neon text-neon font-display font-bold text-5xl uppercase tracking-widest px-8 py-4 rotate-[-12deg] bg-black/50 backdrop-blur-sm">
                                SOLD
                             </div>
                        </div>

                        {/* UI Overlay */}
                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-dark dark:text-white px-4 py-2 rounded-sm text-xs font-bold border border-gray-200 dark:border-white/10 shadow-lg flex items-center gap-2">
                             <CheckCircle2 className="w-3 h-3 text-neon" /> Verified Sale: €4.2M
                        </div>
                    </div>

                    {/* Stats overlay card */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-6 rounded-sm shadow-xl hidden md:block max-w-[240px]">
                         <div className="flex items-center gap-3 mb-3">
                             <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center">
                                 <TrendingUp className="w-4 h-4 text-neon" />
                             </div>
                             <span className="text-xs font-bold text-dark dark:text-white uppercase tracking-wider">Performance</span>
                         </div>
                         <p className="text-[10px] text-gray-500 leading-relaxed">
                             "The new visuals instantly repositioned the asset from a 'project boat' to a 'turn-key' opportunity."
                         </p>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;