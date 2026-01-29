import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
  { id: '01', name: 'Obsidian Refit', type: 'Staging', date: 'Mar 2024', img: 'https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=800' },
  { id: '02', name: 'Azure Horizon', type: 'Synthesis', date: 'Mar 2024', img: 'https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=800' },
  { id: '03', name: 'Project Zephyr', type: 'Drone', date: 'Mar 2024', img: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800' },
  { id: '04', name: 'Valkyrie Deck', type: 'Virtual', date: 'Mar 2024', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800' },
];

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      
      <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <h2 className="text-4xl md:text-5xl font-serif text-dark dark:text-white">Recent Works</h2>
        <div className="flex gap-4">
             <button onClick={() => scroll('left')} className="p-3 border border-gray-200 dark:border-white/10 hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all rounded-full text-dark dark:text-white">
                <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 border border-gray-200 dark:border-white/10 hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all rounded-full text-dark dark:text-white">
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Scrolling Container - Edge to Edge */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-1 px-6 md:px-12 pb-10 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
            <div 
                key={project.id} 
                className="min-w-[85vw] md:min-w-[40vw] snap-center group relative cursor-pointer"
            >
                {/* Image Card */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-slate-900">
                    <img 
                        src={project.img} 
                        alt={project.name} 
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity"></div>
                    
                    {/* Text */}
                    <div className="absolute bottom-8 left-8">
                        <span className="text-neon text-[10px] font-sans font-bold uppercase tracking-widest mb-2 block">{project.type}</span>
                        <span className="text-white font-serif text-3xl">{project.name}</span>
                    </div>
                </div>
            </div>
        ))}
        <div className="min-w-[50px]"></div>
      </div>
    </section>
  );
};

export default Portfolio;