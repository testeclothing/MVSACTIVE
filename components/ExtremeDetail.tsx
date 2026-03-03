import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Scan, MousePointer2 } from 'lucide-react';

const ExtremeDetail: React.FC = () => {
  // Estados visuais
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Refs para manter valores atualizados dentro dos Event Listeners sem re-renderizar
  const scaleRef = useRef(1);
  const positionRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Estado para controlar se estamos a interagir (para desligar o CSS transition)
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startPanRef = useRef({ x: 0, y: 0 });

  // Constantes
  const MIN_SCALE = 1;
  const MAX_SCALE = 15;

  // Função auxiliar para atualizar estado e ref ao mesmo tempo
  const updateTransform = (newScale: number, newPos: { x: number; y: number }) => {
    // Limites de segurança (Clamping) para a imagem não fugir
    if (containerRef.current) {
        const container = containerRef.current;
        // Se a escala for 1, força o centro (0,0)
        if (newScale <= 1) {
            newScale = 1;
            newPos = { x: 0, y: 0 };
        } else {
            // Calcula limites para não arrastar além da borda
            // A imagem é assumida como 100% do container
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            
            // O quanto a imagem "cresceu" para os lados
            const overflowX = (width * newScale - width) / 2;
            const overflowY = (height * newScale - height) / 2;

            // Restringe X e Y dentro do overflow permitido
            newPos.x = Math.max(-overflowX, Math.min(overflowX, newPos.x));
            newPos.y = Math.max(-overflowY, Math.min(overflowY, newPos.y));
        }
    }

    scaleRef.current = newScale;
    positionRef.current = newPos;
    setScale(newScale);
    setPosition(newPos);
  };

  // 1. Lógica do Wheel (Zoom)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setIsInteracting(true); // Desliga transições CSS

      const delta = e.deltaY * -0.005; // Sensibilidade do zoom
      const newScale = Math.min(Math.max(MIN_SCALE, scaleRef.current + delta), MAX_SCALE);

      // Mantém a posição atual, mas a função updateTransform vai corrigir se sair dos limites
      updateTransform(newScale, positionRef.current);
      
      // Reset da interação após parar
      clearTimeout((window as any).interactionTimeout);
      (window as any).interactionTimeout = setTimeout(() => setIsInteracting(false), 100);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  // 2. Lógica do Arrastar (Pan)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scaleRef.current > 1) {
      setIsInteracting(true);
      setIsDragging(true);
      // Guarda onde começou o clique relativo à posição atual da imagem
      startPanRef.current = { 
        x: e.clientX - positionRef.current.x, 
        y: e.clientY - positionRef.current.y 
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const newX = e.clientX - startPanRef.current.x;
    const newY = e.clientY - startPanRef.current.y;
    
    updateTransform(scaleRef.current, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsInteracting(false);
  };

  // 3. Botões
  const handleZoomBtn = (direction: 'in' | 'out') => {
    setIsInteracting(false); // Aqui queremos animação CSS suave
    const factor = 2; // Pula de 2 em 2
    let newScale = direction === 'in' 
      ? Math.min(MAX_SCALE, scaleRef.current + factor)
      : Math.max(MIN_SCALE, scaleRef.current - factor);

    // Se for zoom out, tenta aproximar do centro
    updateTransform(newScale, positionRef.current);
  };

  const handleReset = () => {
    setIsInteracting(false); // Queremos animação suave no reset
    updateTransform(1, { x: 0, y: 0 });
  };

  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-white/5">
      
      {/* Background Grid */}
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
                   Raw sensor readout. Inspect texture integrity at 100MP resolution.
                </p>
            </div>
            
            <div className="hidden md:flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    <MousePointer2 className="w-3 h-3" />
                    Scroll to Zoom
                </div>
            </div>
        </div>

        {/* VIEWPORT */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto h-[500px] bg-black rounded-sm border border-white/10 overflow-hidden shadow-2xl group cursor-crosshair"
          style={{ touchAction: 'none' }} 
          onMouseLeave={handleMouseUp}
        >
            {/* HUD */}
            <div className="absolute top-6 left-6 z-30 pointer-events-none mix-blend-difference text-white/80">
                <div className="text-[10px] font-mono tracking-widest border-l-2 border-neon pl-3">
                    <p>ZOOM: {Math.round(scale * 100)}%</p>
                    <p>X: {Math.round(position.x)} / Y: {Math.round(position.y)}</p>
                    <p>SOURCE: RAW_SENSOR_DATA</p>
                </div>
            </div>

            {/* Imagem Transformável */}
            <div 
                className="w-full h-full flex items-center justify-center origin-center will-change-transform"
                style={{ 
                    // APLICAÇÃO DA MAGIA: Se estiver a interagir (rato), remove a transição para ser instantâneo.
                    // Se for botão ou reset, usa transição suave.
                    transition: isInteracting ? 'none' : 'transform 0.3s ease-out',
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'zoom-in'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                <img 
                    src="/images/img100.png" 
                    alt="High Resolution Analysis" 
                    draggable={false}
                    className="max-w-none w-full h-full object-cover select-none pointer-events-none"
                />
            </div>

            {/* Grid Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 border border-neon/20"
                style={{ opacity: scale > 1.5 ? 0.3 : 0 }}
            >
                <div className="w-full h-full bg-[linear-gradient(rgba(164,209,78,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(164,209,78,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                <div className="absolute center top-1/2 left-1/2 w-20 h-20 border border-neon/50 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Controlos */}
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
