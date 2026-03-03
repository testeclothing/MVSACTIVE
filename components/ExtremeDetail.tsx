import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Scan, MousePointer2, Move } from 'lucide-react';

const ExtremeDetail: React.FC = () => {
  // Estados
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false); // Para controlar animações CSS
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const startPanRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1); // Para acesso síncrono nos eventos
  const positionRef = useRef({ x: 0, y: 0 });

  // Constantes
  const MIN_SCALE = 1;
  const MAX_SCALE = 15;

  // Atualizador centralizado com limites (Clamping)
  const updateTransform = (newScale: number, newPos: { x: number; y: number }) => {
    if (newScale <= 1) {
        // Se zoom for 1 ou menos, reseta tudo
        newScale = 1;
        newPos = { x: 0, y: 0 };
    } else if (containerRef.current) {
        // Calcula limites para não deixar imagem sair do ecrã
        const container = containerRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        // Espaço extra gerado pelo zoom
        const overflowX = (width * newScale - width) / 2;
        const overflowY = (height * newScale - height) / 2;

        // Prende a posição dentro desse espaço
        newPos.x = Math.max(-overflowX, Math.min(overflowX, newPos.x));
        newPos.y = Math.max(-overflowY, Math.min(overflowY, newPos.y));
    }

    // Atualiza Refs e State
    scaleRef.current = newScale;
    positionRef.current = newPos;
    setScale(newScale);
    setPosition(newPos);
  };

  // 1. Wheel Zoom (Desktop)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setIsInteracting(true);

      const delta = e.deltaY * -0.005;
      const newScale = Math.min(Math.max(MIN_SCALE, scaleRef.current + delta), MAX_SCALE);

      updateTransform(newScale, positionRef.current);
      
      // Debounce para reativar animação suave
      clearTimeout((window as any).interactionTimeout);
      (window as any).interactionTimeout = setTimeout(() => setIsInteracting(false), 100);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  // 2. Drag Logic (Desktop Mouse + Mobile Touch)
  const handleStart = (clientX: number, clientY: number) => {
    if (scaleRef.current > 1) {
      setIsInteracting(true);
      setIsDragging(true);
      startPanRef.current = { 
        x: clientX - positionRef.current.x, 
        y: clientY - positionRef.current.y 
      };
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const newX = clientX - startPanRef.current.x;
    const newY = clientY - startPanRef.current.y;
    updateTransform(scaleRef.current, { x: newX, y: newY });
  };

  const handleEnd = () => {
    setIsDragging(false);
    setIsInteracting(false);
  };

  // Event Wrappers para Mouse
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX, e.clientY);
  const onMouseMove = (e: React.MouseEvent) => {
    if(isDragging) { e.preventDefault(); handleMove(e.clientX, e.clientY); }
  };
  
  // Event Wrappers para Touch (Mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    // Apenas inicia arrasto se tiver zoom. Se não tiver zoom, permite scroll da página (exceto se touch-action bloquear)
    if (scale > 1) handleStart(e.touches[0].clientX, e.touches[0].clientY);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > 1) {
        // Bloqueia scroll da página se estivermos a arrastar a imagem
        e.preventDefault(); 
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // 3. Botões
  const handleZoomBtn = (direction: 'in' | 'out') => {
    setIsInteracting(false); // Usa transição suave
    const factor = 2; 
    let newScale = direction === 'in' 
      ? Math.min(MAX_SCALE, scaleRef.current + factor)
      : Math.max(MIN_SCALE, scaleRef.current - factor);
    
    updateTransform(newScale, positionRef.current);
  };

  const handleReset = () => {
    setIsInteracting(false);
    updateTransform(1, { x: 0, y: 0 });
  };

  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-white/5">
      
      {/* Background Grid - Mantém no fundo para ambiente, mas fora da imagem */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Scan className="w-4 h-4 text-neon" />
                    <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em]">
                        Resolution Analysis
                    </span>
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-2">
                    Infinite Detail.
                </h2>
                <p className="text-gray-400 text-sm font-light">
                   100MP Sensor Readout. Inspect texture integrity.
                </p>
            </div>
            
            <div className="hidden md:flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    <MousePointer2 className="w-3 h-3" />
                    Scroll to Zoom
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    <Move className="w-3 h-3" />
                    Drag to Pan
                </div>
            </div>
        </div>

        {/* 
            VIEWPORT 
            - aspect-video: Força 16:9 em todos os dispositivos (incluindo telemóvel)
            - touch-action: none: Impede o telemóvel de fazer scroll na página ao tocar aqui
        */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-video bg-black rounded-sm border border-white/10 overflow-hidden shadow-2xl group cursor-crosshair touch-none"
          onMouseLeave={handleEnd}
        >
            {/* HUD Minimalista (Sem quadrados no meio) */}
            <div className="absolute top-4 left-4 z-30 pointer-events-none mix-blend-difference text-white/80">
                <div className="text-[10px] font-mono tracking-widest border-l-2 border-neon pl-3">
                    <p>ZOOM: {Math.round(scale * 100)}%</p>
                </div>
            </div>

            {/* Imagem Transformável */}
            <div 
                className="w-full h-full flex items-center justify-center will-change-transform"
                style={{ 
                    transition: isInteracting ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'zoom-in'
                }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={handleEnd}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={handleEnd}
            >
                <img 
                    src="/images/img100.png" 
                    alt="High Resolution Analysis" 
                    draggable={false}
                    className="w-full h-full object-cover select-none pointer-events-none"
                />
            </div>

            {/* Barra de Controlos */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-40 shadow-xl">
                <button 
                    onClick={() => handleZoomBtn('out')}
                    className="p-2 hover:bg-white/10 rounded-full text-white transition-colors disabled:opacity-30"
                    disabled={scale <= 1}
                >
                    <ZoomOut className="w-4 h-4" />
                </button>
                
                <span className="text-[10px] font-mono text-neon w-12 text-center select-none">
                    {scale.toFixed(1)}x
                </span>

                <button 
                    onClick={() => handleZoomBtn('in')}
                    className="p-2 hover:bg-white/10 rounded-full text-white transition-colors disabled:opacity-30"
                    disabled={scale >= MAX_SCALE}
                >
                    <ZoomIn className="w-4 h-4" />
                </button>

                <div className="w-[1px] h-4 bg-white/20 mx-2"></div>

                <button 
                    onClick={handleReset}
                    className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
                    title="Reset View"
                >
                    <RotateCcw className="w-4 h-4" />
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ExtremeDetail;
