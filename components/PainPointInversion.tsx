import React, { useState } from 'react';
import { AlertTriangle, XCircle, Ban, ArrowRight, Check, TrendingDown } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: "The 'Yard Trap'",
    pain: "Listing a yacht on hardstanding.",
    agitation: "Buyers subconsciously associate dry-dock photos with 'Maintenance Projects' or 'Broken Assets'. You lose 60% of the retail click-through rate instantly.",
    solution: "We digitally launch the vessel.",
    fix: "We remove the scaffolding, the crane, and the concrete. The boat is placed at anchor in the Mediterranean. Same hull, completely different buyer psychology.",
    icon: Ban,
    imageBefore: "https://images.unsplash.com/photo-1621217651084-2975949d21e3?q=80&w=1000",
    imageAfter: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070"
  },
  {
    id: 2,
    title: "The Weather Tax",
    pain: "Waiting for 'Perfect Light'.",
    agitation: "You have a viewing deadline, but it's raining. Delaying the listing for weather adds 14+ days to your time-to-market. Posting grey photos kills the emotional hook.",
    solution: "We control the sun.",
    fix: "Our lighting engine synthesizes 'Golden Hour' conditions regardless of the actual forecast. We turn a rainy Tuesday in Southampton into a sunset in Monaco.",
    icon: CloudRainIcon,
    imageBefore: "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=1000",
    imageAfter: "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=2070"
  },
  {
    id: 3,
    title: "The iPhone Liability",
    pain: "Crew-generated photography.",
    agitation: "You are selling a €5M asset with €0 effort. Sending low-res, cluttered crew photos signals to the buyer that the brokerage is cutting corners.",
    solution: "8K Commercial Upscaling.",
    fix: "We clean the decks, remove personal items, straighten the horizon, and grade the color to match high-end architectural digest standards.",
    icon: XCircle,
    imageBefore: "https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=1000",
    imageAfter: "https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=2070"
  }
];

function CloudRainIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M16 14v6" />
        <path d="M8 14v6" />
        <path d="M12 16v6" />
        </svg>
    )
}

const PainPointInversion: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
        {/* Gritty Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            {/* Headline */}
            <div className="mb-20 max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3" />
                        Diagnostic Report
                    </div>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-dark dark:text-white mb-6 leading-tight">
                    Why Your Listings <br/> <span className="text-gray-400 dark:text-gray-600">Are Stagnating.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                    The market isn't slow. Your presentation is. <br/>
                    Here are the three "Commission Killers" that are costing you inquiries right now.
                </p>
            </div>

            {/* The Cards of Shame */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {scenarios.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative bg-white dark:bg-[#0E1015] border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 shadow-lg dark:shadow-none"
                        onMouseEnter={() => setActiveTab(index)}
                    >
                        {/* Header: The Pain */}
                        <div className="p-8 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-[#0F0F0F]">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-red-100 dark:bg-red-900/10 rounded-sm border border-red-200 dark:border-red-900/20 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Error #0{item.id}</span>
                            </div>
                            <h3 className="text-xl font-bold text-dark dark:text-white mb-2 font-display">{item.title}</h3>
                            <p className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-widest mb-4">{item.pain}</p>
                            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6">
                                {item.agitation}
                            </p>
                        </div>

                        {/* Footer: The Fix */}
                        <div className="p-8 bg-white dark:bg-[#0B0C10] relative overflow-hidden">
                            {/* Hidden by default, reveals on hover */}
                            <div className="absolute inset-0 bg-white dark:bg-[#0B0C10] z-10 flex flex-col justify-center px-8 transition-transform duration-500 group-hover:translate-y-full">
                                <div className="flex items-center gap-2 text-gray-400 mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Hover to Resolve</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>

                            {/* The Solution Content */}
                            <div className="relative z-0">
                                <div className="flex items-center gap-2 mb-4">
                                    <Check className="w-4 h-4 text-neon" />
                                    <span className="text-dark dark:text-white font-bold text-sm uppercase tracking-widest">{item.solution}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {item.fix}
                                </p>
                            </div>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 border-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>
                    </div>
                ))}
            </div>

            {/* The "Cost of Inaction" Logic */}
            <div className="mt-20 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-xl dark:shadow-none">
                <div className="md:w-1/2">
                    <h3 className="font-display text-3xl font-bold text-dark dark:text-white mb-4">The Mathematics of Stagnation.</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Every month a vessel sits on the market, the owner burns ~1% of its value in carrying costs (crew, mooring, maintenance).
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                            <span className="text-sm text-gray-500">Avg. 30M Yacht Value</span>
                            <span className="text-dark dark:text-white font-bold font-display">€5,000,000</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                            <span className="text-sm text-red-500 dark:text-red-400">Monthly Carrying Cost (Burn)</span>
                            <span className="text-red-500 dark:text-red-400 font-bold font-display">- €50,000 / mo</span>
                        </div>
                         <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-neon font-bold">MVS Full Visual Overhaul</span>
                            <span className="text-neon font-bold font-display">€349 (One Time)</span>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2 bg-gray-100 dark:bg-black/50 p-8 rounded-sm text-center border border-gray-200 dark:border-white/5">
                    <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <p className="text-dark dark:text-white font-bold text-lg mb-2">Can you afford not to?</p>
                    <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                        The cost of our service is 0.007% of the monthly loss you incur by waiting.
                    </p>
                    <button 
                        onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-dark dark:bg-white text-white dark:text-dark font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-neon dark:hover:bg-neon hover:text-dark transition-colors w-full"
                    >
                        Eliminate The Friction
                    </button>
                </div>
            </div>

        </div>
    </section>
  );
};

export default PainPointInversion;