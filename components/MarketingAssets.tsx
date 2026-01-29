import React from 'react';
import { Globe, Smartphone, FileText } from 'lucide-react';

const MarketingAssets: React.FC = () => {
  return (
    <section id="distribution" className="py-32 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/3">
                <span className="text-neon text-[10px] font-bold tracking-[0.4em] uppercase mb-10 block">
                    Distribution
                </span>
                <h2 className="font-serif text-5xl text-dark dark:text-white mb-8 font-light italic">
                    Platform Ready
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-sans font-light text-base leading-relaxed mb-12 max-w-sm">
                    We deliver assets formatted specifically for the world's leading brokerage platforms and luxury publications.
                </p>
                <ul className="space-y-0">
                    {[
                        { icon: Globe, text: "YachtWorld Formats" },
                        { icon: Smartphone, text: "Social Vertical (9:16)" },
                        { icon: FileText, text: "High-Res Print PDF" }
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-500 dark:text-white/70 font-sans uppercase tracking-[0.2em] text-[10px] font-bold border-b border-gray-200 dark:border-white/5 py-6 group cursor-pointer hover:text-dark dark:hover:text-white transition-colors">
                            <item.icon className="w-4 h-4 mr-6 text-gray-400 dark:text-white/30 group-hover:text-neon transition-colors" strokeWidth={1} />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Visuals - Matching Screenshot Mockups */}
            <div className="lg:w-2/3 flex flex-col md:flex-row items-center gap-8 relative">
                {/* Horizontal Tablet Mockup */}
                <div className="w-full md:w-[70%] bg-white p-2 rounded-sm shadow-2xl transform hover:-translate-y-2 transition-transform duration-700 border border-gray-200 dark:border-none">
                    <div className="bg-gray-50 border border-gray-100 rounded-sm overflow-hidden">
                         <div className="aspect-[16/9] relative">
                            <img src="https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=1200" className="w-full h-full object-cover" alt="Platform UI" />
                            {/* Fake UI Skeleton */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
                                <div className="h-2 w-48 bg-gray-200 mb-2"></div>
                                <div className="h-2 w-32 bg-gray-100"></div>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Vertical Phone Mockup */}
                <div className="w-48 bg-[#0a0f1a] border border-white/10 p-2 rounded-sm shadow-2xl transform md:translate-y-12 hover:-translate-y-2 transition-transform duration-700">
                    <div className="relative aspect-[9/16] bg-[#0d1424] overflow-hidden flex flex-col justify-end pb-8">
                        <img src="https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Mobile UI" />
                        <div className="relative z-10 text-center">
                            <span className="text-white text-[9px] font-bold uppercase tracking-[0.3em]">Swipe Up</span>
                        </div>
                        {/* Thin white border to simulate phone edge */}
                        <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                    </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAssets;