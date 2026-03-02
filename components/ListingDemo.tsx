import React from 'react';
import { MapPin, TrendingUp, TrendingDown, CheckCircle2, MousePointerClick, ShieldAlert, BarChart3 } from 'lucide-react';

const ListingDemo: React.FC = () => {
  // Configuração das imagens
  const beforeImages = [
      "/images/img11.png",
      "/images/img55.png",
      "/images/img66.png",
      "/images/img22.png",
      "/images/33img.png"
  ];

  const afterImages = [
      "/images/img1.jpeg",
      "/images/img5.jpeg",
      "/images/img6.jpeg",
      "/images/img2.jpeg",
      "/images/img3.jpeg"
  ];

  // Mantemos o estado apenas para compatibilidade, mas o scanner é automático
  const activeIndex = 0; 

  // Função auxiliar para renderizar o conteúdo (Standard vs Enhanced)
  const renderContent = (mode: 'standard' | 'enhanced') => {
    const currentImages = mode === 'standard' ? beforeImages : afterImages;
    const activeImage = currentImages[activeIndex];

    return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full bg-white dark:bg-[#111] overflow-hidden">
          
          {/* Visuals Column (8 cols) */}
          <div className="md:col-span-8 p-6 flex flex-col gap-4 border-r border-gray-100 dark:border-white/5">
              
              {/* Main Image Container */}
              <div className="relative aspect-[16/9] bg-gray-100 dark:bg-[#050505] overflow-hidden rounded-sm shadow-inner group">
                  <img 
                      src={activeImage}
                      alt="Asset Visual"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                          mode === 'standard' 
                          ? 'grayscale-[0.8] brightness-[0.9] contrast-[0.9]' 
                          : 'saturate-[1.1] brightness-[1.05] contrast-[1.1]'
                      }`}
                  />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-sm text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md ${
                      mode === 'standard' 
                      ? 'bg-white/90 text-gray-500 border border-gray-200' 
                      : 'bg-neon/90 text-dark border border-white/20'
                  }`}>
                      {mode === 'standard' ? (
                          <><ShieldAlert className="w-3 h-3" /> Raw Data</>
                      ) : (
                          <><CheckCircle2 className="w-3 h-3" /> Protocol Active</>
                      )}
                  </div>
              </div>

              {/* Thumbnails Grid */}
              <div className="grid grid-cols-5 gap-2 opacity-80">
                  {currentImages.map((img, i) => (
                       <div 
                          key={i} 
                          className={`aspect-[4/3] bg-gray-100 dark:bg-white/5 overflow-hidden border transition-all duration-300 ${
                              activeIndex === i 
                              ? (mode === 'standard' ? 'border-gray-400' : 'border-neon') 
                              : 'border-transparent'
                          }`}
                       >
                          <img 
                              src={img} 
                              className={`w-full h-full object-cover ${
                                  mode === 'standard' ? 'grayscale opacity-70' : 'opacity-100'
                              }`}
                          />
                       </div>
                  ))}
              </div>
          </div>

          {/* Data Column (4 cols) */}
          <div className="md:col-span-4 p-6 flex flex-col h-full bg-gray-50/50 dark:bg-[#151515]">
              
              {/* Asset Header */}
              <div className="mb-6 pb-4 border-b border-gray-200 dark:border-white/5">
                  <h1 className="text-lg font-bold text-dark dark:text-white leading-tight mb-1">
                      Marex 310 Sun Cruiser
                  </h1>
                  <div className="flex items-center text-[10px] text-gray-400 mb-2 uppercase tracking-wide">
                      <MapPin className="w-3 h-3 mr-1" />
                      Monaco, MC
                  </div>
                  <div className="flex items-baseline gap-2">
                      <span className="text-xl font-display font-bold text-dark dark:text-white">€385,000</span>
                      <span className="text-[9px] text-gray-400 line-through">€410,000</span>
                  </div>
              </div>

              {/* Performance Card */}
              <div className={`flex-1 rounded-sm border p-5 mb-4 transition-all duration-500 flex flex-col justify-center relative overflow-hidden ${
                  mode === 'standard' 
                  ? 'bg-white border-gray-200' 
                  : 'bg-white dark:bg-[#0a0a0a] border-neon/50 shadow-[0_0_15px_rgba(204,243,129,0.1)]'
              }`}>
                  {/* Active Indicator */}
                  {mode === 'enhanced' && (
                      <div className="absolute top-0 right-0 p-2">
                          <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
                      </div>
                  )}

                  <div className="mb-6">
                      <span className={`text-[8px] font-bold uppercase tracking-[0.2em] block mb-4 ${
                          mode === 'standard' ? 'text-gray-400' : 'text-neon'
                      }`}>
                          {mode === 'standard' ? 'Legacy Metrics (30d)' : 'MVS Velocity (48h)'}
                      </span>

                      {/* Metric 1: Views */}
                      <div className="mb-6">
                          <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] text-gray-500 font-bold uppercase">Impression Volume</span>
                              {mode === 'enhanced' ? <TrendingUp className="w-3 h-3 text-green-500" /> : <TrendingDown className="w-3 h-3 text-red-400" />}
                          </div>
                          <div className="flex items-end gap-2">
                              <span className={`text-3xl font-bold font-display leading-none ${
                                  mode === 'standard' ? 'text-gray-400' : 'text-dark dark:text-white'
                              }`}>
                                  {mode === 'standard' ? '142' : '5,840'}
                              </span>
                               {mode === 'enhanced' && <span className="text-[9px] text-green-600 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded-sm font-bold">+4000%</span>}
                          </div>
                      </div>

                      {/* Metric 2: Leads */}
                      <div>
                          <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] text-gray-500 font-bold uppercase">Qualified Inquiries</span>
                              {mode === 'enhanced' && <MousePointerClick className="w-3 h-3 text-neon" />}
                          </div>
                          <div className="flex items-end gap-2">
                               <span className={`text-3xl font-bold font-display leading-none ${
                                  mode === 'standard' ? 'text-gray-400' : 'text-dark dark:text-white'
                              }`}>
                                  {mode === 'standard' ? '0' : '24'}
                              </span>
                              {mode === 'standard' 
                                  ? <span className="text-[9px] text-red-400 font-bold uppercase tracking-wider">Stagnant</span> 
                                  : <span className="text-[9px] text-neon font-bold uppercase tracking-wider">High Intent</span>
                              }
                          </div>
                      </div>
                  </div>
              </div>

              {/* Action Button (Simulated) */}
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  <button className={`w-full py-3 font-bold text-[9px] uppercase tracking-[0.2em] transition-all rounded-sm flex items-center justify-center gap-2 ${
                      mode === 'standard' 
                      ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                      : 'bg-dark dark:bg-white text-white dark:text-dark hover:bg-neon dark:hover:bg-neon hover:text-dark dark:hover:text-dark'
                  }`}>
                      <BarChart3 className="w-3 h-3" />
                      View Full Report
                  </button>
              </div>
          </div>
      </div>
    );
  };

  return (
    <section id="demo" className="py-24 bg-white dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
       <style>{`
        @keyframes scan-clip-slow {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0 0% 0 0); }
          100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes scan-line-slow {
          0% { left: 0%; }
          50% { left: 100%; }
          100% { left: 0%; }
        }
        .animate-scanner-clip {
          animation: scan-clip-slow 8s ease-in-out infinite;
        }
        .animate-scanner-line {
          animation: scan-line-slow 8s ease-in-out infinite;
        }
      `}</style>
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Institucional */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon/30 bg-neon/5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
              <span className="text-neon text-[9px] font-bold uppercase tracking-[0.3em]">
                  Live Market Simulation
              </span>
           </div>
           <h2 className="font-display text-3xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              Visual Liquidity.
           </h2>
           <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
              Real-time comparison of asset performance metrics. Standard brokerage photography vs. MVS Protocol application.
           </p>
        </div>

        {/* Browser Mockup Window */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#111] rounded-sm shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-white/10 overflow-hidden relative min-h-[500px]">
            
            {/* Browser Header (Chrome/Safari Style) */}
            <div className="relative z-30 bg-gray-50 dark:bg-[#151515] border-b border-gray-200 dark:border-white/5 px-4 py-3 flex items-center gap-4">
                <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/50"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-sm h-6 flex items-center justify-center px-4">
                    <span className="text-[9px] text-gray-400 font-mono tracking-wide flex items-center gap-2">
                        <span className="text-green-500">🔒</span> 
                        yachtworld.com/listings/2026-marex-310-sun-cruiser
                    </span>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative">
                
                {/* Layer 1: Enhanced (Background - MVS) */}
                <div className="relative z-0">
                    {renderContent('enhanced')}
                </div>

                {/* Layer 2: Standard (Foreground - RAW) */}
                <div className="absolute inset-0 z-10 animate-scanner-clip bg-white dark:bg-[#111]">
                    {renderContent('standard')}
                </div>

                {/* Scanner Line */}
                <div className="absolute inset-y-0 w-0.5 bg-neon shadow-[0_0_30px_rgba(204,243,129,0.6)] z-20 animate-scanner-line pointer-events-none">
                     <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white dark:bg-black border border-neon rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full"></div>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDemo;
