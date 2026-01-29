import React from 'react';
import { X, Check, AlertTriangle, ShieldCheck, Clock, DollarSign, CloudRain, Zap } from 'lucide-react';

const LogisticsComparison: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#0B0C10] relative border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      
      {/* Background Split */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-gray-100 dark:bg-[#0E1015]"></div>
        <div className="hidden lg:block w-1/2 bg-white dark:bg-[#111318] relative">
            <div className="absolute inset-0 bg-neon/5 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-12 lg:mb-16">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                Operational Delta
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6">
                The Logistics <span className="text-gray-400 dark:text-gray-500">Gap</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light">
                Why relying on physical factors is costing you time and margin.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden">
            
            {/* LEFT: Old Way */}
            <div className="bg-gray-100 dark:bg-[#0E1015] p-8 lg:p-16 relative transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                <div className="flex items-center gap-4 mb-8 lg:mb-10 opacity-70">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    <h3 className="font-display text-2xl font-bold text-gray-500 dark:text-gray-300">Physical Logistics</h3>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                            <Clock className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 dark:text-gray-300 font-bold text-sm uppercase tracking-widest mb-1">14+ Days to Market</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">Requires scheduling crew, cleaning, weather windows, and photographer availability.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                            <CloudRain className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 dark:text-gray-300 font-bold text-sm uppercase tracking-widest mb-1">Weather Risk: High</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">Overcast skies or rough seas can cancel shoots or result in flat, uninspiring imagery.</p>
                        </div>
                    </div>

                     <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                            <DollarSign className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 dark:text-gray-300 font-bold text-sm uppercase tracking-widest mb-1">Cost: €2,500 - €5,000+</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">Includes travel, day rates, helicopter/drone permits, and crew overtime.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 opacity-50">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-red-500 flex items-center gap-2">
                        <X className="w-3 h-3" /> Legacy Process
                     </span>
                </div>
            </div>

            {/* RIGHT: MVS Way */}
            <div className="bg-white dark:bg-[#0B0C10] p-8 lg:p-16 relative overflow-hidden group transition-colors duration-500">
                {/* Neon Glow */}
                <div className="absolute top-0 right-0 w-full h-1 bg-neon shadow-[0_0_20px_#CCF381]"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-8 lg:mb-10 relative z-10">
                    <ShieldCheck className="w-6 h-6 text-neon" />
                    <h3 className="font-display text-2xl font-bold text-dark dark:text-white">MVS Digital Pipeline</h3>
                </div>

                <div className="space-y-8 relative z-10">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-neon/10 dark:bg-neon/20 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(204,243,129,0.2)]">
                            <Zap className="w-4 h-4 text-neon" />
                        </div>
                        <div>
                            <h4 className="text-dark dark:text-white font-bold text-sm uppercase tracking-widest mb-1">48-Hour Delivery</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">From raw upload to market-ready assets. Zero logistics, zero wait time.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-neon/10 dark:bg-neon/20 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(204,243,129,0.2)]">
                            <Check className="w-4 h-4 text-neon" />
                        </div>
                        <div>
                            <h4 className="text-dark dark:text-white font-bold text-sm uppercase tracking-widest mb-1">Weather Independent</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">We synthesize 'Golden Hour' lighting conditions regardless of the actual forecast.</p>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-neon/10 dark:bg-neon/20 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(204,243,129,0.2)]">
                            <DollarSign className="w-4 h-4 text-neon" />
                        </div>
                        <div>
                            <h4 className="text-dark dark:text-white font-bold text-sm uppercase tracking-widest mb-1">Cost: Flat €349</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">Predictable, scalable pricing with volume retainers available.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 flex justify-between items-center relative z-10">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-neon flex items-center gap-2">
                        <Check className="w-3 h-3" /> Modern Standard
                     </span>
                     <button onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-bold uppercase tracking-widest text-dark dark:text-white hover:text-neon underline transition-colors">
                        Upgrade Pipeline &rarr;
                     </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default LogisticsComparison;