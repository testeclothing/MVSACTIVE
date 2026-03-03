import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Move, Scan, MousePointer2 } from 'lucide-react';

const ExtremeDetail: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Limites de Zoom
  const MIN_SCALE = 1;
  const MAX_SCALE = 15; // Zoom extremo de 15x

  // Handler para Zoom com a Roda do Rato
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // Impede o scroll da página enquanto faz zoom
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(MIN_SCALE, scale + delta), MAX_SCALE);
    
    setScale(newScale);

    // Se fizer zoom out total, reseta a posição para o centro
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  // Handlers para Arrastar (Pan)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const newX = e.clientX - startPan.x;
    const newY = e.clientY - startPan.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Botões de Controlo
  const handleZoomBtn = (direction: 'in' | 'out') => {
    const factor = 0.5;
    const newScale = direction === 'in' 
      ? Math.min(MAX_SCALE, scale + factor)
      : Math.max(MIN_SCALE, scale - factor);
    
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-white/5">
      
      {/* Background Grid - Engineering Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Institucional */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Scan className="w-4 h-4 text-neon" />
                    <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em]">
                        Resolution Analysis
                    </span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">
                    Infinite Detail.
                </h2>
                <p className="text-gray-400 text-sm font-light">
                   Raw sensor readout. Inspect texture integrity at 100MP resolution.
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

        {/* AREA DE ZOOM (VIEWPORT) */}
        <div 
          className="relative w-full h-[600px] bg-black rounded-sm border border-white/10 overflow-hidden shadow-2xl group cursor-crosshair"
          onWheel={handleWheel}
          onMouseLeave={handleMouseUp}
        >
            {/* O HUD (Heads Up Display) Fixo */}
            <div className="absolute top-6 left-6 z-30 pointer-events-none mix-blend-difference text-white/80">
                <div className="text-[10px] font-mono tracking-widest border-l-2 border-neon pl-3">
                    <p>ZOOM: {Math.round(scale * 100)}%</p>
                    <p>X: {Math.round(position.x)} / Y: {Math.round(position.y)}</p>
                    <p>SOURCE: RAW_SENSOR_DATA</p>
                </div>
            </div>

            {/* A Imagem Transformável */}
            <div 
                ref={containerRef}
                className="w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
                style={{ 
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'zoom-in'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <img 
                    src="/images/img100.png" 
                    alt="High Resolution Analysis" 
                    draggable={false}
                    className="max-w-none w-full h-full object-cover select-none"
                />
            </div>

            {/* Overlay de Grelha Técnica (Aparece quando faz zoom) */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 border border-neon/20"
                style={{ opacity: scale > 2 ? 0.3 : 0 }}
            >
                <div className="w-full h-full bg-[linear-gradient(rgba(164,209,78,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(164,209,78,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                <div className="absolute center top-1/2 left-1/2 w-20 h-20 border border-neon/50 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Barra de Controlos Flutuante */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-40 shadow-xl">
                <button 
                    onClick={() => handleZoomBtn('out')}
                    className="p-2 hover:bg-white/10 rounded-full text-white transition-colors disabled:opacity-50"
                    disabled={scale <= 1}
                >
                    <ZoomOut className="w-4 h-4" />
                </button>
                
                <span className="text-[10px] font-mono text-neon w-12 text-center">
                    {scale.toFixed(1)}x
                </span>

                <button 
                    onClick={() => handleZoomBtn('in')}
                    className="p-2 hover:bg-white/10 rounded-full text-white transition-colors disabled:opacity-50"
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
