import React from 'react';
import { ShieldCheck, Scale, FileCheck } from 'lucide-react';

const AccuracyGuarantee: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0B0C10] relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Minimalist Shield Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] mb-12 backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-dark dark:text-white" strokeWidth={1} />
        </div>

        {/* Serif Heading */}
        <h2 className="font-serif text-6xl md:text-7xl text-gray-300 dark:text-gray-600 font-light italic mb-12 opacity-80">
            Luxury
        </h2>
        
        <div className="max-w-3xl mx-auto mb-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-sans font-light">
                We understand that in high-ticket brokerage, truth is paramount. Our process ensures that your vessel remains <span className="text-dark dark:text-white font-medium">100% structurally authentic</span>. We only refine what surrounds it: the light, the water, and the lifestyle context.
            </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-transparent">
                    <Scale className="w-5 h-5 text-gray-400 dark:text-gray-300" strokeWidth={1.5} />
                </div>
                <h4 className="text-dark dark:text-white font-display font-bold uppercase tracking-widest text-[10px] mb-4">True-to-Scale</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Furniture and hull dimensions verified against official deck plans.</p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-transparent">
                    <ShieldCheck className="w-5 h-5 text-gray-400 dark:text-gray-300" strokeWidth={1.5} />
                 </div>
                <h4 className="text-dark dark:text-white font-display font-bold uppercase tracking-widest text-[10px] mb-4">Hull Integrity</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Zero digital repair of structural elements. 1:1 photoreal fidelity.</p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-transparent">
                    <FileCheck className="w-5 h-5 text-gray-400 dark:text-gray-300" strokeWidth={1.5} />
                 </div>
                <h4 className="text-dark dark:text-white font-display font-bold uppercase tracking-widest text-[10px] mb-4">Broker Safe</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Fully compliant with international luxury brokerage listing standards.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AccuracyGuarantee;