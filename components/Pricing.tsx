import React, { useRef, useEffect, useState } from 'react';
import { Check, ShieldCheck, Image as ImageIcon, Clock, Crown, Briefcase, Globe } from 'lucide-react';

const tiers = [
  {
    name: "Studio Retainer",
    price: "$2,500",
    unit: "/ month",
    icon: Briefcase,
    description: "The essential visual department for boutique brokerages.",
    includes: [
      "5 Full Listing Transformations",
      "Exterior, Interior & Drone",
      "Virtual Staging",
      "48-Hour Standard Delivery"
    ],
    features: [
      "Roll-over unused credits",
      "Dedicated Creative Director",
      "Print-Ready 8K Exports"
    ],
    cta: "Apply for Access",
    highlight: false
  },
  {
    name: "Agency Partner",
    price: "$4,950",
    unit: "/ month",
    icon: Crown,
    description: "High-volume throughput for aggressive firms. Operates 24/7.",
    includes: [
      "15 Full Listing Transformations",
      "Priority 'Rush' Queue (24h)",
      "Custom Brokerage Branding",
      "Unlimited Revisions"
    ],
    features: [
      "Private Slack/WhatsApp",
      "Video Synthesis (Beta)",
      "Monthly Strategy Call"
    ],
    cta: "Secure Agency Slot",
    highlight: true
  },
  {
    name: "Global Fleet",
    price: "Custom",
    unit: "Annual",
    icon: Globe,
    description: "Enterprise integration for international firms with 50+ listings.",
    includes: [
      "Unlimited Listing Volume",
      "API / Headless Integration",
      "Multi-Office Billing",
      "White-Label Portal"
    ],
    features: [
      "Dedicated Production Team",
      "SLA Guarantees",
      "On-Site Training"
    ],
    cta: "Contact Enterprise",
    highlight: false
  }
];

const Pricing: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated && scrollRef.current) {
          if (window.innerWidth < 1024) {
            setHasAnimated(true);
            setTimeout(() => {
                if (scrollRef.current) {
                    // Find the highlighted card index (Most Popular)
                    const highlightIndex = tiers.findIndex(t => t.highlight);
                    
                    if (highlightIndex !== -1 && scrollRef.current.children[highlightIndex]) {
                        const card = scrollRef.current.children[highlightIndex] as HTMLElement;
                        const container = scrollRef.current;
                        
                        // Calculate scroll position to center the card
                        // Center = (Card Offset Left) - (Container Width / 2) + (Card Width / 2)
                        const scrollLeft = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
                        
                        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                    }
                }
            }, 500);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="investment" className="py-20 lg:py-32 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
       {/* Ambient Background */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                Partnership Models
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-dark dark:text-white mb-6">
                Your Visual Department. <br/>
                <span className="text-gray-400 dark:text-gray-500">Fixed Cost.</span>
            </h2>
            <div className="inline-flex items-center gap-2 text-dark dark:text-white text-xs lg:text-sm font-bold uppercase tracking-widest bg-white dark:bg-white/5 px-4 lg:px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
                <Clock className="w-4 h-4 text-neon" /> Capacity Limited to 20 Agencies
            </div>
        </div>

        {/* Pricing Grid - Scrollable on Mobile, Grid on Desktop */}
        <div 
            ref={scrollRef}
            className="flex flex-nowrap lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide items-stretch"
        >
            {tiers.map((tier, index) => (
                <div 
                    key={index} 
                    className={`min-w-[85vw] md:min-w-[50vw] lg:min-w-0 snap-center relative flex flex-col rounded-xl transition-all duration-500 group ${
                        tier.highlight 
                        ? 'bg-white dark:bg-[#0E1015] border border-neon shadow-2xl dark:shadow-[0_0_40px_rgba(204,243,129,0.1)] lg:scale-105 z-10' 
                        : 'bg-white/50 dark:bg-[#0E1015] border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 opacity-100 lg:opacity-100' // Ensure opacity is full on mobile
                    }`}
                >
                    {/* Best Value Badge */}
                    {tier.highlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-2 border border-white/20 whitespace-nowrap">
                            Most Popular
                        </div>
                    )}

                    <div className="p-6 md:p-8 lg:p-10 flex-grow">
                        {/* Icon */}
                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-sm flex items-center justify-center mb-6 lg:mb-8 border ${tier.highlight ? 'bg-neon text-dark border-neon' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10'}`}>
                            <tier.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>

                        {/* Title & Price */}
                        <div className="mb-6">
                            <h3 className="text-lg lg:text-xl font-bold text-dark dark:text-white mb-2 font-display">{tier.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className={`text-4xl lg:text-5xl font-display font-bold tracking-tight ${tier.highlight ? 'text-dark dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>{tier.price}</span>
                                <span className="text-xs lg:text-sm text-gray-500 font-medium">{tier.unit}</span>
                            </div>
                        </div>

                        <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 lg:mb-8 min-h-[40px] lg:min-h-[60px] font-light">
                            {tier.description}
                        </p>

                        {/* Includes List */}
                        <div className="mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4 block">Includes:</span>
                            <ul className="space-y-3">
                                {tier.includes.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs lg:text-sm text-dark dark:text-white font-medium">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${tier.highlight ? 'bg-neon shadow-[0_0_5px_#CCF381]' : 'bg-gray-400 dark:bg-gray-500'}`}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer Box (Features) */}
                    <div className={`p-6 border-t rounded-b-xl flex flex-col justify-between h-40 lg:h-48 ${tier.highlight ? 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10' : 'bg-gray-50/50 dark:bg-white/5 border-gray-100 dark:border-white/5'}`}>
                        <ul className="space-y-2 mb-6">
                            {tier.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-[10px] lg:text-[11px] text-gray-500 font-medium">
                                    <Check className="w-3 h-3 text-gray-400 dark:text-gray-600" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button 
                            className={`w-full py-3 lg:py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                                tier.highlight 
                                ? 'bg-neon text-dark hover:bg-neonHover shadow-[0_0_20px_rgba(204,243,129,0.3)] hover:shadow-[0_0_30px_rgba(204,243,129,0.5)]' 
                                : 'bg-white dark:bg-white/5 text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30'
                            }`}
                            onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {tier.cta}
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-12 lg:mt-20 pt-10 border-t border-gray-200 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-neon" />
                </div>
                <div>
                    <h4 className="text-dark dark:text-white font-bold text-sm">Visual SLA Guarantee</h4>
                    <p className="text-gray-500 text-xs">If we miss a 48h deadline, your next month is 50% off.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-neon" />
                </div>
                <div>
                    <h4 className="text-dark dark:text-white font-bold text-sm">Cancel Anytime</h4>
                    <p className="text-gray-500 text-xs">No long-term contracts. Pause or cancel with 30 days notice.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;