import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GripVertical } from 'lucide-react';

interface ComparisonSliderProps {
  image: string;
  aspectRatio?: string;
  labelBefore?: string;
  labelAfter?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  image, 
  aspectRatio = 'aspect-[16/9]',
  labelBefore = "Warehouse (Raw)",
  labelAfter = "Ocean (Synthesized)",
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

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectRatio} overflow-hidden cursor-col-resize select-none bg-[#050505] rounded-lg group`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Placeholder / Loading State Background */}
      <div className="absolute inset-0 bg-[#050505] flex items-center justify-center">
         <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest animate-pulse">Loading Asset...</div>
      </div>

      {/* After Image (Background - Color) */}
      <img 
        src={image} 
        alt="After" 
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover bg-[#050505] select-none"
      />
      
      {/* Label After */}
      <div className="absolute top-6 right-6 z-10 pointer-events-none">
        <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-sm shadow-lg">
            {labelAfter}
        </span>
      </div>

      {/* Before Image (Clipped - Grayscale/Bad) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505]"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={image} 
          alt="Before" 
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover max-w-none grayscale brightness-75 contrast-125 bg-[#050505] select-none"
        />
        
        {/* Label Before */}
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
             <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-sm shadow-lg">
                {labelBefore}
            </span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-neon z-20 flex items-center justify-center shadow-[0_0_15px_rgba(204,243,129,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Shadow Line attached to handle (Left Side) */}
        <div className="absolute top-0 right-full h-full w-12 bg-gradient-to-r from-transparent to-black/80 pointer-events-none"></div>

        {/* The Handle Button - Milled Aluminum Look */}
        <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-gray-100 to-gray-300 border border-white flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transform transition-transform group-hover:scale-110 active:scale-95">
            <GripVertical className="w-5 h-5 text-dark" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;