import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Download, Sun, EyeOff, Clock, DollarSign, Zap, Globe, Lock, ZoomIn, ZoomOut, RotateCcw, Hand } from 'lucide-react';
import { partners } from '../data/partners';
import ComparisonSlider from './ComparisonSlider';

const PartnerDeck: React.FC = () => {
  const { partnerId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Estados para o Zoom (Slide 4)
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const zoomContainerRef = useRef<HTMLDivElement>(null);
  const startPan = useRef({ x: 0, y: 0 });

  // @ts-ignore
  const partner = partners[partnerId];

  if (!partner) return <div className="bg-black h-[100dvh] text-white flex items-center justify-center">Partner Not Found</div>;

  const totalSlides = 7;
  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  // --- LÓGICA DE ZOOM ---
  const handleZoom = (direction: 'in' | 'out') => {
    const factor = 2;
    const newScale = direction === 'in' ? Math.min(15, zoomScale + factor) : Math.max(1, zoomScale - factor);
    setZoomScale(newScale);
    if (newScale === 1) setZoomPos({ x: 0, y: 0 });
  };

  const startDrag = (clientX: number, clientY: number) => {
    if (zoomScale > 1) {
        setIsDragging(true);
        startPan.current = { x: clientX - zoomPos.x, y: clientY - zoomPos.y };
    }
  };

  const onMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const newX = clientX - startPan.current.x;
    const newY = clientY - startPan.current.y;
    
    if (zoomContainerRef.current) {
        const { offsetWidth, offsetHeight } = zoomContainerRef.current;
        const limitX = (offsetWidth * zoomScale - offsetWidth) / 2;
        const limitY = (offsetHeight * zoomScale - offsetHeight) / 2;
        setZoomPos({
            x: Math.max(-limitX, Math.min(limitX, newX)),
            y: Math.max(-limitY, Math.min(limitY, newY))
        });
    }
  };

  // --- RENDERIZAÇÃO DOS SLIDES ---
  const renderSlide = () => {
    switch (currentSlide) {
      
      // SLIDE 0: CAPA
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 pb-20">
            <div className="mb-8 md:mb-10 h-16 md:h-20 w-auto flex items-center justify-center">
                 <img src={partner.logo} alt={partner.name} className="max-h-full max-w-[200px] md:max-w-[300px] object-contain" /> 
            </div>
            
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-6 border border-gray-800 px-4 py-2 rounded-full">
              Asset Valuation Strategy
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Commanding the <br/> Market.
            </h1>
            <p className="text-gray-400 text-sm md:text-lg font-light max-w-xl mx-auto">
              {partner.slides.cover.subtitle}
            </p>
          </div>
        );

      // SLIDE 1: O PROBLEMA
      case 1:
        return (
          <div className="flex flex-col h-full justify-center px-6 max-w-5xl mx-auto w-full pb-20">
             <div className="mb-8 text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl text-white mb-2">The Valuation Gap</h2>
                <p className="text-gray-400 text-sm md:text-base">Current visuals are creating friction in the acquisition process.</p>
             </div>
             <div className="grid gap-4 overflow-y-auto max-h-[65vh] pr-2">
                {[
                    { icon: EyeOff, title: "Perception Mismatch", text: "The vessel's intrinsic value is high, but the visual presentation signals a 'distressed asset' to international buyers." },
                    { icon: Clock, title: "Market Stagnation", text: "Listings with grey skies or cluttered interiors sit on the market 3x longer, inviting aggressive price negotiations." },
                    { icon: DollarSign, title: "Negotiation Leverage", text: "Buyers use visual imperfections (bad lighting, empty spaces) as psychological leverage to lower their offers." }
                ].map((item, i) => (
                    <div key={i} className="bg-[#111] p-5 rounded-lg border border-white/5 flex flex-col md:flex-row items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-md text-gray-400 shrink-0"><item.icon size={20} /></div>
                        <div>
                            <h3 className="text-white font-bold mb-1 text-sm md:text-base">{item.title}</h3>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.text}</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        );

      // SLIDE 2: EXTERIOR (FIXED HEIGHT)
      case 2:
        return (
          <div className="flex flex-col h-full px-4 md:px-6 max-w-7xl mx-auto w-full pb-24 pt-8 md:pt-12">
             <div className="text-center mb-4 shrink-0">
                <h2 className="font-display text-2xl md:text-3xl text-white">Oceanic Deployment</h2>
                <p className="text-gray-500 text-xs md:text-sm">Relocating the asset from static storage to its natural environment.</p>
             </div>
             
             {/* AQUI ESTÁ A CORREÇÃO: flex-1 e min-h-0 obrigam a imagem a caber no ecrã sem scroll */}
             <div className="flex-1 min-h-0 relative rounded-lg overflow-hidden border border-white/10 bg-[#050505]">
                <ComparisonSlider 
                    imageBefore={partner.slides.exterior.before}
                    imageAfter={partner.slides.exterior.after}
                    labelBefore="Raw Dock Data"
                    labelAfter="Global Market Ready"
                />
             </div>
          </div>
        );

      // SLIDE 3: INTERIOR (FIXED HEIGHT)
      case 3:
        return (
          <div className="flex flex-col h-full px-4 md:px-6 max-w-7xl mx-auto w-full pb-24 pt-8 md:pt-12">
             <div className="text-center mb-4 shrink-0">
                <h2 className="font-display text-2xl md:text-3xl text-white">Atmospheric Curation</h2>
                <p className="text-gray-500 text-xs md:text-sm">Staging the onboard experience to align with contemporary luxury codes.</p>
             </div>
             
             {/* AQUI ESTÁ A CORREÇÃO: flex-1 e min-h-0 */}
             <div className="flex-1 min-h-0 relative rounded-lg overflow-hidden border border-white/10 bg-[#050505]">
                <ComparisonSlider 
                    imageBefore={partner.slides.interior.before}
                    imageAfter={partner.slides.interior.after}
                    labelBefore="Uninhabited Space"
                    labelAfter="Lifestyle Activation"
                />
             </div>
          </div>
        );

      // SLIDE 4: DETALHE (FIXED HEIGHT)
      case 4:
        return (
            <div className="flex flex-col h-full px-4 md:px-6 max-w-6xl mx-auto w-full pb-24 pt-8 md:pt-12">
                <div className="mb-4 text-center shrink-0">
                    <h2 className="font-display text-2xl md:text-3xl text-white mb-2">Resolution Authority</h2>
                    <p className="text-gray-400 text-xs md:text-sm">100MP Sensor Fidelity. Inviting the buyer to inspect craftsmanship.</p>
                </div>
                
                <div 
                    ref={zoomContainerRef}
                    className="flex-1 min-h-0 w-full bg-black rounded-lg border border-white/10 overflow-hidden cursor-move touch-none relative"
                    onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
                    onMouseMove={(e) => onMove(e.clientX, e.clientY)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
                    onTouchMove={(e) => onMove(e.touches[0].clientX, e.touches[0].clientY)}
                    onTouchEnd={() => setIsDragging(false)}
                >
                    <img 
                        src={partner.slides.exterior.after} 
                        className="w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform select-none pointer-events-none"
                        style={{ transform: `translate(${zoomPos.x}px, ${zoomPos.y}px) scale(${zoomScale})` }}
                        draggable={false}
                    />
                    
                    {/* Controlos */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl z-20 whitespace-nowrap">
                        <button onClick={() => handleZoom('out')} disabled={zoomScale <= 1} className="disabled:opacity-30"><ZoomOut size={18} /></button>
                        <span className="font-mono text-neon text-xs w-12 text-center">{Math.round(zoomScale * 100)}%</span>
                        <button onClick={() => handleZoom('in')} disabled={zoomScale >= 15} className="disabled:opacity-30"><ZoomIn size={18} /></button>
                        <button onClick={() => {setZoomScale(1); setZoomPos({x:0, y:0})}} className="border-l border-white/20 pl-4 ml-2"><RotateCcw size={16} /></button>
                    </div>

                    {/* Aviso Mobile */}
                    {zoomScale > 1 && (
                        <div className="absolute top-4 right-4 md:hidden text-[9px] text-white/70 bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                            <Hand className="w-3 h-3 inline mr-1"/> Drag to Pan
                        </div>
                    )}
                </div>
            </div>
        );

      // SLIDE 5: AUTENTICIDADE
      case 5:
        return (
            <div className="flex flex-col h-full justify-center px-4 md:px-6 max-w-6xl mx-auto w-full pb-20">
                <div className="text-center mb-8 shrink-0">
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-neon mb-2 block">Forensic Verification</span>
                    <h2 className="font-display text-2xl md:text-3xl text-white">The Authenticity Protocol</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 overflow-y-auto md:overflow-visible">
                    <div className="relative rounded border border-white/10 overflow-hidden bg-[#111] min-h-[200px]">
                        <img src={partner.slides.exterior.before} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-white text-black text-[9px] font-bold px-2 py-1 uppercase rounded-sm">Original</div>
                    </div>
                    <div className="relative rounded border border-white/10 overflow-hidden bg-[#111] min-h-[200px]">
                        <img src={partner.slides.exterior.after} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-neon text-black text-[9px] font-bold px-2 py-1 uppercase rounded-sm">MVS Render</div>
                    </div>
                </div>
                
                <div className="flex justify-center gap-8 md:gap-12 mt-6 text-center shrink-0">
                    <div><h4 className="text-xl md:text-2xl font-bold text-neon">100%</h4><span className="text-[8px] md:text-[9px] uppercase text-gray-500">Structural Match</span></div>
                    <div><h4 className="text-xl md:text-2xl font-bold text-white">Zero</h4><span className="text-[8px] md:text-[9px] uppercase text-gray-500">Digital Smoothing</span></div>
                </div>
            </div>
        );

      // SLIDE 6: BENEFÍCIOS
      case 6:
        return (
            <div className="flex flex-col h-full justify-center px-6 max-w-5xl mx-auto w-full pb-24">
                <div className="text-center mb-8 md:mb-12 shrink-0">
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-2">Strategic Advantage</h2>
                    <p className="text-gray-500 text-sm md:text-base">Why elite brokerages utilize the MVS Protocol.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2 flex-1 min-h-0">
                    {[
                        { icon: Zap, title: "Accelerated Liquidity", text: "Create an emotional connection instantly, reducing time-to-offer." },
                        { icon: Globe, title: "Global Appeal", text: "Tailored atmosphere to target specific international buyer demographics." },
                        { icon: DollarSign, title: "Zero Logistical Friction", text: "No crew requirements, no fuel costs, no weather delays." },
                        { icon: Lock, title: "Absolute Discretion", text: "No photographers on board. Complete privacy for the owner." }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#111] p-6 rounded-lg border border-white/5 hover:border-neon/30 transition-colors group h-fit">
                            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-neon mb-3 transition-colors" />
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-xs md:text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center shrink-0">
                    <a href="mailto:contact@mvs.com" className="inline-block bg-neon text-black px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-colors w-full md:w-auto">
                        Initiate Partnership
                    </a>
                </div>
            </div>
        );

      default:
        return null;
    }
  };

  return (
    // h-[100dvh] garante que ocupa o ecrã exato do telemóvel
    <div className="bg-black h-[100dvh] text-white overflow-hidden relative font-sans flex flex-col">
        
        {/* Main Content Area */}
        <div className="flex-1 w-full relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full absolute inset-0"
                >
                    {renderSlide()}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="h-20 bg-[#050505] border-t border-white/10 px-6 flex items-center justify-between z-50 shrink-0">
            <div className="flex gap-4">
                <button className="text-gray-500 hover:text-white transition-colors"><Download size={20} /></button>
            </div>

            <div className="font-mono text-xs text-gray-500 tracking-widest">
                0{currentSlide + 1} <span className="mx-2">/</span> 0{totalSlides}
            </div>

            <div className="flex gap-2">
                <button onClick={prevSlide} disabled={currentSlide === 0} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-colors"><ChevronLeft size={20} /></button>
                <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className="w-10 h-10 rounded-full bg-neon/10 border border-neon/50 text-neon flex items-center justify-center hover:bg-neon hover:text-black disabled:opacity-30 transition-colors"><ChevronRight size={20} /></button>
            </div>
        </div>
    </div>
  );
};

export default PartnerDeck;
