import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface ComparisonSliderProps {
  imageBefore: string; // Imagem da Esquerda (Armazém/Raw)
  imageAfter: string;  // Imagem da Direita (Oceano/Final)
  labelBefore?: string;
  labelAfter?: string;
  aspectRatio?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  imageBefore, 
  imageAfter,
  labelBefore = "Raw Data",
  labelAfter = "MVS Protocol",
  aspectRatio = "aspect-[16/9]" // Default para Widescreen
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50); // Começa no meio
  const containerRef = useRef<HTMLDivElement>(null);

  // Função que calcula a posição
  const resize = useCallback((clientX: number) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const newPosition = ((clientX - left) / width) * 100;
      // Mantém entre 0% e 100%
      setPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  }, []);

  // Listeners globais (para o arrasto não "partir" se saíres do componente)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      resize(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isResizing) return;
      resize(e.touches[0].clientX);
    };

    const stopResizing = () => setIsResizing(false);

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', stopResizing);
      window.addEventListener('touchend', stopResizing);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('touchend', stopResizing);
    };
  }, [isResizing, resize]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectRatio} overflow-hidden select-none group cursor-ew-resize bg-black rounded-sm`}
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
    >
      {/* 1. IMAGEM AFTER (Fundo - Lado Direito) */}
      <img
        src={imageAfter}
        alt="After"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      
      {/* Label After (Canto Inferior Direito) */}
      <div className="absolute bottom-4 right-4 z-10">
         <span className="bg-neon text-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
            {labelAfter}
         </span>
      </div>

      {/* 2. IMAGEM BEFORE (Topo - Recortada - Lado Esquerdo) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={imageBefore}
          alt="Before"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        
        {/* Filtro Escuro Opcional para realçar que é "RAW" (Raw costuma ser menos vibrante) */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>

         {/* Label Before (Canto Inferior Esquerdo) */}
        <div className="absolute bottom-4 left-4 z-10">
            <span className="bg-white/90 text-dark border border-gray-200 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
                {labelBefore}
            </span>
        </div>
      </div>

      {/* 3. A LINHA DO SLIDER */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-neon z-20 shadow-[0_0_20px_rgba(164,209,78,0.8)]"
        style={{ left: `${position}%` }}
      >
        {/* O Puxador (Handle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neon rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-ew-resize transform transition-transform active:scale-95">
          <MoveHorizontal className="w-4 h-4 text-dark" />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
