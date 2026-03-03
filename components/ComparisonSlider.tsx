import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface ComparisonSliderProps {
  imageBefore: string;
  imageAfter: string;
  labelBefore: string;
  labelAfter: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  imageBefore, 
  imageAfter, 
  labelBefore, 
  labelAfter 
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50); // Começa a meio (50%)
  const containerRef = useRef<HTMLDivElement>(null);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const resize = useCallback(
    (clientX: number) => {
      if (containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        const newPosition = ((clientX - left) / width) * 100;
        // Limites entre 0% e 100%
        setPosition(Math.min(Math.max(newPosition, 0), 100));
      }
    },
    []
  );

  // Listeners globais para garantir que o arrasto não para se o rato sair do componente
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      resize(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isResizing) return;
      resize(e.touches[0].clientX);
    };

    const handleMouseUp = () => stopResizing();
    const handleTouchEnd = () => stopResizing();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isResizing, resize, stopResizing]);

  return (
    <div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden select-none group cursor-ew-resize"
        onMouseDown={startResizing}
        onTouchStart={startResizing}
    >
      {/* 1. IMAGEM AFTER (Fundo Completo - Lado Direito) */}
      <img
        src={imageAfter}
        alt="After"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      {/* Label After (Canto Inferior Direito) */}
      <div className="absolute bottom-6 right-6 z-10">
         <span className="bg-neon text-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
            {labelAfter}
         </span>
      </div>

      {/* 2. IMAGEM BEFORE (Topo - Recortada - Lado Esquerdo) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} // A Magia acontece aqui
      >
        <img
          src={imageBefore}
          alt="Before"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
         {/* Label Before (Canto Inferior Esquerdo) */}
        <div className="absolute bottom-6 left-6 z-10">
            <span className="bg-white/90 text-dark border border-gray-200 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
                {labelBefore}
            </span>
        </div>
      </div>

      {/* 3. A LINHA DIVISÓRIA (Slider) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-neon cursor-ew-resize z-20 shadow-[0_0_20px_rgba(164,209,78,0.5)]"
        style={{ left: `${position}%` }}
      >
        {/* O Puxador (Handle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neon rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <MoveHorizontal className="w-4 h-4 text-dark" />
        </div>
      </div>
      
    </div>
  );
};

export default ComparisonSlider;
