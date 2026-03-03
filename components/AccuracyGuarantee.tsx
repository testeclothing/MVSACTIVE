import React, { useState, useRef } from 'react';
import { ScanFace, ShieldCheck, Lock, Crosshair, Hand } from 'lucide-react';

const AccuracyGuarantee: React.FC = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number, clientY: number) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((clientX - left) / width) * 100));
      const y = Math.max(0, Math.min(100, ((clientY - top) / height) * 100));
      setPosition({ x, y });
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX, e.clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  return (
    <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(164,209,78,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(164,209,78,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4 text-neon" />
                <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em]">
                    Forensic Verification
                </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                Digital Twin Precision.
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl mx-auto">
                We utilize a "Geometry-Lock" protocol. While the environment changes, every scratch, stitch, and texture of the asset remains bit-perfect.
            </p>
            
            <div className="md:hidden flex justify-center items-center gap-2 mt-4 text-gray-500 text-[10px] uppercase tracking-widest animate-pulse">
                <Hand className="w-3 h-3" />
                Touch & Drag to Inspect
            </div>
        </div>

        {/* CONTAINER */}
        <div 
            ref={containerRef}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onTouchStart={onTouchMove}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto cursor-crosshair group touch-none"
        >
            
            {/* LADO ESQUERDO: ORIGINAL */}
            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 bg-[#111]">
                <div className="absolute top-4 left-4 z-20 bg-white text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                    <ScanFace className="w-3 h-3" />
                    Original Photo (Zoom 10x)
                </div>
                
                {/* MUDANÇA: Usar IMG em vez de Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src="/images/200.jpg?v=2" 
                        alt="Original"
                        className="w-full h-full object-cover origin-center transition-all duration-100 ease-out will-change-transform"
                        style={{
                            transform: 'scale(3)', // Zoom 3x (300%)
                            objectPosition: `${position.x}% ${position.y}%`
                        }}
                        draggable={false}
                    />
                </div>
            </div>

            {/* LADO DIREITO: MVS RENDER */}
            <div className="relative aspect-video rounded-sm overflow-hidden border border-neon/30 bg-[#111] shadow-[0_0_30px_rgba(164,209,78,0.05)]">
                <div className="absolute top-4 left-4 z-20 bg-neon text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" />
                    MVS Render (Zoom 10x)
                </div>

                {/* MUDANÇA: Usar IMG em vez de Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src="/images/100.jpg?v=2" 
                        alt="MVS Render"
                        className="w-full h-full object-cover origin-center transition-all duration-100 ease-out will-change-transform"
                        style={{
                            transform: 'scale(3)', // Zoom 3x (300%)
                            objectPosition: `${position.x}% ${position.y}%`
                        }}
                        draggable={false}
                    />
                </div>

                {/* Overlay Técnico */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(164,209,78,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(164,209,78,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-neon/50 rounded-full flex items-center justify-center pointer-events-none">
                     <Crosshair className="w-4 h-4 text-neon opacity-50" />
                </div>
            </div>

        </div>

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="text-center">
                <h4 className="text-3xl font-display font-bold text-neon mb-1">100%</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Geometry Match</p>
            </div>
            <div className="text-center border-l border-white/10">
                <h4 className="text-3xl font-display font-bold text-white mb-1">A+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Forensic Accuracy</p>
            </div>
            <div className="text-center border-l border-white/10">
                <h4 className="text-3xl font-display font-bold text-neon mb-1">True</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Lighting Physics</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AccuracyGuarantee;
