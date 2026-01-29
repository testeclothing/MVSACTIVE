import React from 'react';

const features = [
  {
    tag: "Simulation",
    title: "Liquid Dynamics",
    desc: "Proprietary fluid synthesis creating physically accurate wake patterns."
  },
  {
    tag: "Optics",
    title: "Solar Matching",
    desc: "Shadow analysis to reconstruct identical sun positions from dry-dock files."
  },
  {
    tag: "Safety",
    title: "Structure Lock™",
    desc: "A proprietary protocol ensuring zero alteration to the vessel's hull integrity."
  },
  {
    tag: "Output",
    title: "8K Pipeline",
    desc: "Extreme-scale resolution for high-gloss print and billboard publishing."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-40 bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-32">
            <div className="max-w-xl">
                <span className="text-dark dark:text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block">The MVS Engine</span>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-dark dark:text-white leading-[0.9]">
                    Proprietary <br/> <span className="text-gray-400 dark:text-gray-500 italic font-light font-serif">Visualization</span>
                </h2>
            </div>
            <div className="hidden md:block">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Build 2.4.0</span>
                    <div className="flex gap-1">
                        {[1,2,3,4].map(i => <div key={i} className="w-1 h-1 bg-neon rounded-full"></div>)}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {features.map((feat, index) => (
                <div key={index} className="group border-l border-gray-200 dark:border-white/10 pl-10 transition-colors duration-500 hover:border-neon">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-6 block group-hover:text-dark dark:group-hover:text-white transition-colors">{feat.tag}</span>
                    <h3 className="font-bold text-xl text-dark dark:text-white mb-5 transition-transform group-hover:translate-x-1 duration-500">
                        {feat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light font-sans max-w-[220px]">
                        {feat.desc}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Features;