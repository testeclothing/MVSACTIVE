import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Layers, Droplets, Sun, Moon, Eraser, ScanLine, ArrowRight, MoveHorizontal } from 'lucide-react';

// --- EMBEDDED COMPARISON SLIDER COMPONENT ---
// This replaces the external import to ensure it works with the new image pairs.
interface ComparisonSliderProps {
  imageBefore: string;
  imageAfter: string;
  labelBefore: string;
  labelAfter: string;
  aspectRatio: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  imageBefore, 
  imageAfter, 
  labelBefore, 
  labelAfter,
  aspectRatio 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };
    const onTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  // Handle click to jump
  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectRatio} select-none cursor-ew-resize group overflow-hidden`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={handleClick}
    >
      {/* AFTER IMAGE (Background) */}
      <img 
        src={imageAfter} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* BEFORE IMAGE (Foreground - Clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={imageBefore} 
          alt="Before" 
          className="absolute top-0 left-0 max-w-none h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          draggable={false}
        />
      </div>

      {/* SLIDER HANDLE */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
          <MoveHorizontal className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      {/* LABELS */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-sm border border-white/20 pointer-events-none z-10">
        {labelBefore}
      </div>
      <div className="absolute bottom-4 right-4 bg-neon/80 text-dark px-3 py-1 text-xs font-bold rounded-sm border border-white/20 pointer-events-none z-10">
        {labelAfter}
      </div>
    </div>
  );
};
// --- END COMPARISON SLIDER COMPONENT ---


const modules = [
  {
    id: 'hull',
    label: 'Hull Extraction',
    icon: Droplets,
    beforeLabel: 'Dry Dock',
    afterLabel: 'Deep Ocean',
    // Pair 1: img1 (before) -> img11 (after)
    imageBefore: '/images/img1.jpeg',
    imageAfter: '/images/img11.png',
    description: 'Proprietary algorithm that separates the vessel from concrete/cradles and composites it into a physics-accurate ocean plate.',
  },
  {
    id: 'weather',
    label: 'Atmosphere',
    icon: Sun,
    beforeLabel: 'Overcast',
    afterLabel: 'Golden Hour',
    // Pair 2: img2 (before) -> img22 (after)
    imageBefore: '/images/img2.jpeg',
    imageAfter: '/images/img22.png',
    description: 'Full environmental replacement. We delete grey skies and flat lighting, synthesizing "Golden Hour" solar coordinates.',
  },
  {
    id: 'interior',
    label: 'Virtual Refit',
    icon: Layers,
    beforeLabel: 'Empty/Dated',
    afterLabel: 'Modern Luxury',
    // Pair 3: img3 (before) -> 33img (after) - Note the name 33img.png
    imageBefore: '/images/img3.jpeg',
    imageAfter: '/images/33img.png',
    description: 'Digitally reupholster furniture, declutter surfaces, and stage lifestyle elements to modernize older inventory.',
  },
  {
    id: 'twilight',
    label: 'Twilight Activation',
    icon: Moon,
    beforeLabel: 'Daylight',
    afterLabel: 'Evening Party',
    // Pair 4: img4 (before) -> img44 (after)
    imageBefore: '/images/img4.jpeg',
    imageAfter: '/images/img44.png',
    description: 'We turn lights on. Transforming standard day shots into "Evening Entertainment" setups with warm interior glows and underwater lights.',
  },
  {
    id: 'eraser',
    label: 'Smart Eraser',
    icon: Eraser,
    beforeLabel: 'Cluttered',
    afterLabel: 'Pristine',
    // Pair 5: img5 (before) -> img55 (after)
    imageBefore: '/images/img5.jpeg',
    imageAfter: '/images/img55.png',
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
                
                {/* 1. The Viewport (Cinema Screen) */}
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

                    {/* The Comparison Component */}
                    <ComparisonSlider 
                        key={activeModule.id}
                        imageBefore={activeModule.imageBefore}
                        imageAfter={activeModule.imageAfter}
                        labelBefore={activeModule.beforeLabel}
                        labelAfter={activeModule.afterLabel}
                        aspectRatio="aspect-[4/3] lg:aspect-[21/9]"
                    />

                    {/* Bottom HUD / Description Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-30 pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-sm p-4 md:p-6 max-w-2xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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

                {/* 2. The Lens Rack (Selector Strip) - Updated to Grid */}
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
