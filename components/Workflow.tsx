import React, { useRef, useEffect, useState } from 'react';
import { Upload, Cpu, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Project Briefing",
    desc: "Submit your raw yacht assets (iPhone or DSLR) along with structural blueprints via our secure gateway.",
    step: "01"
  },
  {
    icon: Cpu,
    title: "Engine Synthesis",
    desc: "Our senior visualists configure the MVS pipeline to reconstruct lighting and liquid physics for your specific hull.",
    step: "02"
  },
  {
    icon: Download,
    title: "Signature Delivery",
    desc: "Receive your complete 8K digital media kit within 48 hours of asset verification. Zero revision fatigue.",
    step: "03"
  }
];

const Workflow: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated && scrollRef.current) {
          // Only trigger on mobile where scroll is necessary
          if (window.innerWidth < 1024) {
            setHasAnimated(true);
            setTimeout(() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: 120, behavior: 'smooth' });
                    setTimeout(() => {
                        scrollRef.current?.scrollBy({ left: -120, behavior: 'smooth' });
                    }, 800);
                }
            }, 500);
          }
        }
      },
      { threshold: 0.4 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="workflow" className="py-20 lg:py-24 bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 lg:mb-20">
            <div>
                 <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                    The MVS Protocol
                </span>
                <h2 className="font-display text-4xl font-bold text-dark dark:text-white">
                    Efficiency at Scale
                </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-xs lg:text-sm mt-4 md:mt-0 italic border-l border-gray-300 dark:border-white/20 pl-4">
                48-Hour Signature Turnaround Guaranteed.
            </p>
        </div>

        {/* Desktop Line - Hidden on Mobile */}
        <div className="hidden lg:block absolute top-[280px] left-12 right-12 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-white/5 dark:via-white/20 dark:to-white/5 z-0"></div>

        {/* Steps Container: Horizontal Scroll on Mobile, Grid on Desktop */}
        <div 
            ref={scrollRef}
            className="flex flex-nowrap lg:grid lg:grid-cols-3 gap-6 lg:gap-12 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide"
        >
            
            {steps.map((step, index) => (
                <div key={index} className="min-w-[85vw] lg:min-w-0 snap-center relative z-10 group">
                    
                    {/* Step Number Background */}
                    <div className="absolute -top-6 -right-6 text-[120px] font-display font-bold text-gray-200 dark:text-white/5 pointer-events-none select-none group-hover:text-neon/10 transition-colors duration-500">
                        {step.step}
                    </div>

                    <div className="bg-white dark:bg-[#111318] border border-gray-200 dark:border-white/5 p-8 h-full rounded-sm group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors duration-500 relative overflow-hidden shadow-xl dark:shadow-none">
                        
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Icon */}
                        <div className="w-14 h-14 bg-gray-50 dark:bg-[#0B0C10] border border-gray-200 dark:border-white/10 text-dark dark:text-white flex items-center justify-center rounded-sm mb-8 text-2xl font-bold shadow-lg group-hover:bg-neon group-hover:text-dark group-hover:border-neon transition-all duration-500 relative z-10">
                            <step.icon className="w-6 h-6" />
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-display font-bold text-dark dark:text-white mb-4 transition-colors group-hover:text-neon relative z-10">
                            {step.title}
                        </h3>
                        
                        <p className="text-gray-500 leading-relaxed text-sm relative z-10">
                            {step.desc}
                        </p>

                        {/* Mobile Swipe Indicator */}
                        <div className="lg:hidden mt-6 flex items-center gap-2 text-neon text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Next Step <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;