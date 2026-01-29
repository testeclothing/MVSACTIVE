import React from 'react';
import { Play } from 'lucide-react';

const VideoShowcase: React.FC = () => {
  return (
    <section id="motion" className="py-32 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
            <span className="text-neon text-[10px] font-sans font-bold tracking-[0.3em] uppercase mb-6 block">
                Motion
            </span>
            <h2 className="font-serif text-5xl text-dark dark:text-white mb-6 font-light">
                Cinematic Synthesis
            </h2>
            <p className="text-gray-600 dark:text-slate-400 font-sans font-light max-w-2xl mx-auto">
                We generate hyper-realistic navigation footage from still images.
            </p>
        </div>

        <div className="relative aspect-video w-full max-w-6xl mx-auto overflow-hidden shadow-2xl group cursor-pointer rounded-sm bg-black">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
            </div>

            <img 
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070"
                alt="AI Video Demo"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-in-out opacity-90"
            />
        </div>
        
        <div className="mt-12 flex justify-center space-x-12">
            {['Fluid Dynamics', 'Ray-Traced Reflections', 'Micro-Contrast'].map((feat, i) => (
                <span key={i} className="text-gray-500 text-[10px] font-sans font-bold uppercase tracking-widest">
                    {feat}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;