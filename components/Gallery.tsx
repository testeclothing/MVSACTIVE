import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, ChevronRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  vessel: string;
  location: string;
  image: string;
  size: string;
  challenge: string;
  solution: string;
  stats: {
    label1: string; value1: string;
    label2: string; value2: string;
    label3: string; value3: string;
  };
}

const works: CaseStudy[] = [
  {
    id: 1,
    client: "Fraser Yachts",
    vessel: "Benetti 45M",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070",
    size: "col-span-1 md:col-span-2",
    challenge: "The vessel was dry-docked for winter maintenance during the prime spring listing window. Existing assets showed extensive scaffolding, grey skies, and industrial clutter, making the asset look 'distressed'.",
    solution: "We deployed the MVS Environmental Transfer protocol. The vessel was extracted from the dry dock plate and composited into a sunset anchorage off the coast of Sardinia. All scaffolding was digitally removed while maintaining 100% hull geometry integrity.",
    stats: {
        label1: "Time to Sale", value1: "14 Days",
        label2: "Final Price", value2: "€18.5M",
        label3: "Visual ROI", value3: "34x"
    }
  },
  {
    id: 2,
    client: "Burgess",
    vessel: "Sunseeker 88",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1621217651084-2975949d21e3?q=80&w=1000",
    size: "col-span-1",
    challenge: "Listing photos were taken by crew on an iPhone 12 during an overcast day. The interior lighting was flat, and the exterior water looked murky.",
    solution: "We utilized our Atmosphere Control engine to relight the scene with 'Golden Hour' solar matching. Water was synthesized to match the crystal clear Bahamian palette. Interior resolution was upscaled by 400%.",
    stats: {
        label1: "Inquiries", value1: "+240%",
        label2: "Sold In", value2: "3 Weeks",
        label3: "Cost Saved", value3: "$4,200"
    }
  },
  {
    id: 3,
    client: "Camper & Nicholsons",
    vessel: "Riva 110",
    location: "Croatia",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000",
    size: "col-span-1",
    challenge: "A brand new delivery with no lifestyle assets. The yacht felt empty and sterile, lacking the emotional hook needed for a €12M toy.",
    solution: "Virtual Lifestyle Refit. We digitally staged the aft deck with luxury furniture, champagne service, and generated a motion-blurred wake to simulate cruising speed.",
    stats: {
        label1: "Views", value1: "12k",
        label2: "Offer", value2: "Full Ask",
        label3: "Delivery", value3: "48 Hrs"
    }
  }
];

const Gallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCase]);

  return (
    <section id="work" className="py-32 bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/5 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <div>
                <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Deployment Log</span>
                <h2 className="font-display text-4xl font-bold text-dark dark:text-white">Case Studies</h2>
            </div>
            <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-dark dark:text-gray-400 dark:hover:text-white transition-colors group">
                View All Operations <ArrowUpRight className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {works.map((work) => (
                <div 
                    key={work.id} 
                    onClick={() => setSelectedCase(work)}
                    className={`${work.size} group relative aspect-[4/3] md:aspect-auto md:h-[500px] overflow-hidden rounded-sm cursor-pointer bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none`}
                >
                    <img 
                        src={work.image} 
                        alt={work.vessel} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105 saturate-[1.1]"
                    />
                    
                    {/* Overlay UI */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                            <span className="text-neon text-[10px] font-bold uppercase tracking-widest mb-3 block">
                                {work.client}
                            </span>
                            <h3 className="text-white font-display text-3xl font-bold mb-2">
                                {work.vessel}
                            </h3>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                                    Read Case Study
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Corner Tag */}
                    <div className="absolute top-6 right-6 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedCase && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            <div 
                className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedCase(null)}
            ></div>
            
            <div className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 shadow-2xl rounded-sm flex flex-col md:flex-row overflow-hidden animate-slide-up">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-6 right-6 z-50 w-10 h-10 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                    <X className="w-5 h-5 text-dark dark:text-white" />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 h-1/3 md:h-full relative bg-gray-100 dark:bg-[#050505]">
                    <img 
                        src={selectedCase.image} 
                        alt={selectedCase.vessel} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-neon text-[10px] font-bold uppercase tracking-widest mb-2 block">{selectedCase.client}</span>
                        <h2 className="text-4xl font-display font-bold text-white">{selectedCase.vessel}</h2>
                        <span className="text-white/60 text-xs font-bold uppercase tracking-widest mt-2 block">{selectedCase.location}</span>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 h-2/3 md:h-full overflow-y-auto p-8 md:p-16 flex flex-col">
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-12 border-b border-gray-100 dark:border-white/5 pb-12">
                        <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-sm">
                            <Clock className="w-5 h-5 text-neon mb-3" />
                            <span className="block text-2xl font-display font-bold text-dark dark:text-white mb-1">{selectedCase.stats.value1}</span>
                            <span className="text-[9px] text-gray-500 uppercase tracking-widest">{selectedCase.stats.label1}</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-sm">
                            <DollarSign className="w-5 h-5 text-neon mb-3" />
                            <span className="block text-2xl font-display font-bold text-dark dark:text-white mb-1">{selectedCase.stats.value2}</span>
                            <span className="text-[9px] text-gray-500 uppercase tracking-widest">{selectedCase.stats.label2}</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-sm">
                            <TrendingUp className="w-5 h-5 text-neon mb-3" />
                            <span className="block text-2xl font-display font-bold text-dark dark:text-white mb-1">{selectedCase.stats.value3}</span>
                            <span className="text-[9px] text-gray-500 uppercase tracking-widest">{selectedCase.stats.label3}</span>
                        </div>
                    </div>

                    <div className="space-y-10 flex-grow">
                        <div>
                            <h3 className="text-lg font-bold text-dark dark:text-white mb-4 uppercase tracking-wider flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-red-500"></span> The Challenge
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm md:text-base">
                                {selectedCase.challenge}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-dark dark:text-white mb-4 uppercase tracking-wider flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-neon"></span> The MVS Solution
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm md:text-base">
                                {selectedCase.solution}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5">
                        <button 
                             onClick={() => { setSelectedCase(null); document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' }); }}
                             className="w-full bg-dark dark:bg-white text-white dark:text-dark py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-neon hover:text-dark transition-all flex items-center justify-center gap-2"
                        >
                            Achieve Similar Results <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>

            </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;