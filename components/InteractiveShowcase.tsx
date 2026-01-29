import React, { useRef, useState } from 'react';
import { Scan, Move, MousePointer2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project: Aeon",
    location: "Sardinia, IT",
    image: "https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=2070",
    desc: "Full hull replacement and water simulation."
  },
  {
    id: 2,
    title: "Vessel: Serenity",
    location: "Mykonos, GR",
    image: "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=2070",
    desc: "Golden hour lighting synthesis."
  },
  {
    id: 3,
    title: "M/Y Explorer",
    location: "Fjords, NO",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070",
    desc: "Drone footage stabilization and grading."
  }
];

const InteractiveShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 50, y: 50 });
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block flex items-center gap-2">
                    <Scan className="w-4 h-4" />
                    Visual Forensics
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">
                    The Detail <span className="text-gray-400 dark:text-gray-600">Room</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light max-w-lg text-sm leading-relaxed">
                    Inspect the fidelity of our output. Hover over the canvas to reveal the <span className="text-dark dark:text-white font-medium">processed simulation</span> underneath the raw data wireframe.
                </p>
            </div>

            {/* Project Switcher */}
            <div className="flex gap-2">
                {projects.map((p) => (
                    <button 
                        key={p.id}
                        onClick={() => setActiveProject(p)}
                        className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                            activeProject.id === p.id 
                            ? 'bg-dark dark:bg-white text-white dark:text-black border-dark dark:border-white' 
                            : 'bg-transparent text-gray-500 border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30 hover:text-dark dark:hover:text-white'
                        }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>
        </div>

        {/* Interactive Area */}
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-black border border-white/10 rounded-sm overflow-hidden cursor-crosshair group shadow-2xl"
        >
            {/* Layer 1: The "Raw" / "Blueprint" View (Bottom) */}
            <div className="absolute inset-0 pointer-events-none">
                <img 
                    src={activeProject.image} 
                    alt="Raw"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 opacity-60"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 mix-blend-overlay"></div>
                {/* Tech Overlays */}
                <div className="absolute top-8 left-8 text-xs font-mono text-white/30">
                    RAW_INPUT_BUFFER_0{activeProject.id} <br/>
                    RES: 4096x2160 <br/>
                    ISO: 800
                </div>
                <div className="absolute bottom-8 right-8 text-xs font-mono text-white/30 text-right">
                   AWAITING_PROCESSING...
                </div>
            </div>

            {/* Layer 2: The "Final" View (Revealed by Mask) */}
            <div 
                className="absolute inset-0 w-full h-full pointer-events-none will-change-[clip-path] transition-all duration-75 ease-linear"
                style={{
                    clipPath: `circle(${isHovering ? '250px' : '0px'} at ${position.x}% ${position.y}%)`,
                    background: 'black'
                }}
            >
                <img 
                    src={activeProject.image} 
                    alt="Final"
                    className="w-full h-full object-cover saturate-[1.2] brightness-110"
                />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-neon text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full opacity-80">
                    MVS Render Engine Active
                </div>
            </div>

            {/* Default State Hint (When not hovering) */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
                <div className="bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                        <Move className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Move Cursor to Inspect</span>
                </div>
            </div>

            {/* The Lens Border/Reticle (Follows mouse) */}
            {isHovering && (
                <div 
                    className="absolute pointer-events-none rounded-full border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20 flex items-center justify-center"
                    style={{
                        width: '500px',
                        height: '500px',
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className="w-full h-[1px] bg-white/20 absolute top-1/2 left-0"></div>
                    <div className="h-full w-[1px] bg-white/20 absolute left-1/2 top-0"></div>
                    <div className="w-2 h-2 bg-neon rounded-full shadow-[0_0_10px_#CCF381]"></div>
                </div>
            )}
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 border-t border-gray-200 dark:border-white/10 pt-8">
            <div>
                <span className="text-gray-500 text-[9px] uppercase tracking-widest block mb-1">Project Name</span>
                <span className="text-dark dark:text-white font-display font-bold">{activeProject.title}</span>
            </div>
            <div>
                <span className="text-gray-500 text-[9px] uppercase tracking-widest block mb-1">Location</span>
                <span className="text-dark dark:text-white font-display font-bold">{activeProject.location}</span>
            </div>
            <div className="col-span-2 md:col-span-2">
                <span className="text-gray-500 text-[9px] uppercase tracking-widest block mb-1">Synthesis Protocol</span>
                <span className="text-dark dark:text-white font-display font-bold">{activeProject.desc}</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveShowcase;