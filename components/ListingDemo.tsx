import React, { useState } from 'react';
import { MapPin, TrendingUp, TrendingDown, CheckCircle2, MousePointerClick, ShieldAlert } from 'lucide-react';

const ListingDemo: React.FC = () => {
  // Configuração das imagens do ANTES (Original) - 5 imagens
  const beforeImages = [
      "/images/img11.png",   // Principal
      "/images/img55.png",   // 1ª de baixo
      "/images/img66.png",   // 2ª de baixo
      "/images/img22.png",   // 3ª de baixo
      "/images/33img.png"    // 4ª de baixo
  ];

  // Configuração das imagens do AFTER (MVS Optimized) - 5 imagens
  const afterImages = [
      "/images/img1.jpeg",   // Principal
      "/images/img5.jpeg",   // 1ª de baixo
      "/images/img6.jpeg",   // 2ª de baixo
      "/images/img2.jpeg",   // 3ª de baixo
      "/images/img3.jpeg"    // 4ª de baixo
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderContent = (mode: 'standard' | 'enhanced') => {
    const currentImages = mode === 'standard' ? beforeImages : afterImages;
    const activeImage = currentImages[activeIndex];

    return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full bg-white p-6">
        
        {/* Visuals Column */}
        <div className="md:col-span-8 flex flex-col gap-3">
            <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden rounded-sm shadow-inner group">
                <img 
                    src={activeImage}
                    alt="Yacht"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                        mode === 'standard' 
                        ? 'grayscale-[0.5] brightness-[0.9] contrast-[0.9] blur-[0.5px]' 
                        : 'saturate-[1.1] brightness-[1.02] contrast-[1.05]'
                    }`}
                />
                <div className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-sm text-[8px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg ${
                    mode === 'standard' 
                    ? 'bg-white/90 text-gray-500 border border-gray-200' 
                    : 'bg-neon text-dark border border-white/20'
                }`}>
                    {mode === 'standard' ? (
                        <><ShieldAlert className="w-3 h-3" /> Broker Raw</>
                    ) : (
                        <><CheckCircle2 className="w-3 h-3" /> MVS Optimized</>
                    )}
                </div>
            </div>

            {/* Thumbnails - Grid de 5 colunas */}
            <div className="grid grid-cols-5 gap-2">
                {currentImages.map((img, i) => (
                     <div 
                        key={i} 
                        onClick={() => setActiveIndex(i)}
                        className={`aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                            activeIndex === i 
                            ? (mode === 'standard' ? 'border-gray-400' : 'border-dark') 
                            : 'border-transparent hover:border-gray-200'
                        }`}
                     >
                        <img 
                            src={img} 
                            className={`w-full h-full object-cover transition-opacity ${
                                mode === 'standard' ? 'grayscale opacity-60' : 'opacity-100'
                            }`}
                        />
                     </div>
                ))}
            </div>
        </div>

        {/* Info Column */}
        <div className="md:col-span-4 flex flex-col h-full">
            <div className="mb-4">
                <h1 className="text-xl font-bold text-dark leading-tight mb-1">
                    2026 Marex 310
                </h1>
                <div className="flex items-center text-[10px] text-gray-400 mb-3">
                    <MapPin className="w-3 h-3 mr-1" />
                    Côte d'Azur, France
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-dark">€385,000</span>
                </div>
            </div>

            {/* Dynamic Metrics Section */}
            <div className={`flex-1 rounded-sm border p-4 mb-4 transition-colors duration-500 flex flex-col justify-center ${
                mode === 'standard' 
                ? 'bg-gray-50 border-gray-100' 
                : 'bg-neon/5 border-neon/30'
            }`}>
                <div className="flex items-center justify-between mb-4">
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${
                        mode === 'standard' ? 'text-gray-400' : 'text-dark'
                    }`}>
                        {mode === 'standard' ? 'Current Performance' : 'Projected Velocity'}
                    </span>
                    {mode === 'enhanced' && <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>}
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-gray-500 font-medium">Listing Views (30d)</span>
                            {mode === 'enhanced' && <TrendingUp className="w-3 h-3 text-green-600" />}
                            {mode === 'standard' && <TrendingDown className="w-3 h-3 text-red-400" />}
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className={`text-2xl font-bold font-display ${
                                mode === 'standard' ? 'text-gray-400' : 'text-dark'
                            }`}>
                                {mode === 'standard' ? '142' : '5.8k'}
                            </span>
                             {mode === 'enhanced' && <span className="text-[9px] text-green-600 font-bold bg-green-100 px-1.5 rounded-sm">+4000%</span>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-gray-500 font-medium">Qualified Leads</span>
                            {mode === 'enhanced' && <MousePointerClick className="w-3 h-3 text-green-600" />}
                        </div>
                        <div className="flex items-baseline gap-2">
                             <span className={`text-2xl font-bold font-display ${
                                mode === 'standard' ? 'text-gray-400' : 'text-dark'
                            }`}>
                                {mode === 'standard' ? '0' : '24'}
                            </span>
                            {mode === 'standard' && <span className="text-[9px] text-red-400 font-bold uppercase tracking-wider">Stagnant</span>}
                            {mode === 'enhanced' && <span className="text-[9px] text-green-600 font-bold uppercase tracking-wider">High Intent</span>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <button className={`w-full py-3 font-bold text-[9px] uppercase tracking-[0.2em] transition-all rounded-sm ${
                    mode === 'standard' 
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed border border-gray-200' 
                    : 'bg-dark text-white hover:bg-neon hover:text-dark shadow-lg'
                }`}>
                    Request Information
                </button>
            </div>
        </div>
    </div>
  )};

  return (
    <section id="demo" className="py-16 bg-gray-50 dark:bg-[#0B0C10] border-y border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
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
        /* Mudei de 4s para 8s para o scanner ser mais lento */
        .animate-scanner-clip {
          animation: scan-clip 8s ease-in-out infinite;
        }
        .animate-scanner-line {
          animation: scan-line 8s ease-in-out infinite;
        }
      `}</style>
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Compact */}
        <div className="text-center max-w-3xl mx-auto mb-10">
           <div className="inline-block px-3 py-1 bg-neon text-dark text-[9px] font-bold uppercase tracking-widest mb-3 rounded-sm">
              Live Simulation
           </div>
           <h2 className="font-display text-3xl font-bold text-dark dark:text-white mb-2">
              The Platform Effect
           </h2>
           <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed">
              Compare the commercial performance of standard assets vs MVS optimization.
           </p>
        </div>

        {/* Browser Mockup Container - Compact Height */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-white/10 overflow-hidden relative min-h-[450px]">
            
            {/* Browser Header (Static) */}
            <div className="relative z-30 bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center">
                <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-sm h-5 mx-3 flex items-center px-2">
                    <span className="text-[8px] text-gray-400 font-sans truncate">yachtworld.com/listings/2026-marex-310-sun-cruiser</span>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative">
                
                {/* Layer 1: Enhanced (Background) */}
                <div className="relative z-0">
                    {renderContent('enhanced')}
                </div>

                {/* Layer 2: Standard (Foreground + Clip) */}
                <div className="absolute inset-0 z-10 animate-scanner-clip bg-white">
                    {renderContent('standard')}
                </div>

                {/* Scanner Line */}
                <div className="absolute inset-y-0 w-0.5 bg-neon shadow-[0_0_20px_rgba(204,243,129,0.8)] z-20 animate-scanner-line pointer-events-none">
                     <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white border-2 border-neon rounded-full flex items-center justify-center shadow-lg">
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
