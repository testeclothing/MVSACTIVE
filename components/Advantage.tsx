import React from 'react';
import { TrendingUp, Clock, Eye, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    icon: TrendingUp,
    title: "Market Velocity",
    description: "Listings with orchestrated visuals enter the market faster and capture qualified interest instantly."
  },
  {
    icon: Eye,
    title: "Emotional Capital",
    description: "Create the desire that drives high-net-worth decisions by presenting the dream, not just the boat."
  },
  {
    icon: Clock,
    title: "Zero Logistics",
    description: "Eliminate fuel costs, skipper fees, and weather delays. We operate entirely from the digital dry dock."
  },
  {
    icon: ShieldCheck,
    title: "Brand Authority",
    description: "Consistency across your fleet. Elevate your brokerage's reputation with a unified, world-class aesthetic."
  }
];

const Advantage: React.FC = () => {
  return (
    <section id="advantage" className="py-32 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Text Column */}
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="font-serif text-5xl md:text-6xl text-dark dark:text-white mb-10 leading-tight">
              The Broker's <br/> <span className="text-neon italic">Advantage</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 font-light leading-relaxed">
              In a crowded market, perception is reality. We provide the visual ammunition needed to command higher asking prices and attract qualified leads.
            </p>
            
            <div className="bg-white dark:bg-white/5 p-8 border-l-2 border-neon backdrop-blur-sm shadow-sm dark:shadow-none">
                <p className="font-serif text-xl text-dark dark:text-white italic leading-relaxed mb-6">
                "MVS transformed how we present our superyacht inventory. Absolutely essential for the modern market."
                </p>
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                    <div>
                        <p className="text-dark dark:text-white text-sm font-bold uppercase tracking-widest">James Sterling</p>
                        <p className="text-neon text-xs font-bold uppercase tracking-widest">CEO, Sterling Yachts</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Grid Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-white/5 backdrop-blur-sm p-10 border border-gray-200 dark:border-white/5 hover:border-neon/40 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 group rounded-sm shadow-sm dark:shadow-none"
              >
                <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-sm flex items-center justify-center mb-8 group-hover:bg-neon transition-colors duration-500">
                  <item.icon className="text-neon group-hover:text-dark w-7 h-7 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-dark dark:text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advantage;