import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is digital staging legal for brokerage listings?",
    answer: "Yes. Our 'Structure Lock' protocol ensures the vessel's physical condition remains 100% authentic. We only alter the environment (water, sky, background) and soft staging (pillows, tables). We recommend labeling images as 'Digitally Enhanced' for full transparency."
  },
  {
    question: "What resolution are the final files?",
    answer: "We deliver 8K resolution (7680 × 4320) files by default, suitable for large-format print marketing and billboard usage, as well as optimized web versions for YachtWorld/Boats.com."
  },
  {
    question: "How long does the process take?",
    answer: "Standard turnaround is 24 hours for up to 10 images. Rush delivery (6 hours) is available for enterprise clients."
  },
  {
    question: "Do you need raw camera files?",
    answer: "No. While RAW files yield the best results, our AI upscaling engine can work with standard JPEGs from an iPhone or older DSLR."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            <div className="lg:col-span-4">
                <h2 className="font-display text-4xl font-bold text-dark dark:text-white mb-6">
                    Operational <br/> Protocol
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                    Common questions regarding our digital supply chain and delivery standards.
                </p>
                <div className="p-6 bg-white dark:bg-[#0E1015] rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
                    <h4 className="font-bold text-dark dark:text-white text-sm mb-2">Need immediate support?</h4>
                    <p className="text-gray-500 text-xs mb-4">Our studio team is online.</p>
                    <a href="#audit" className="text-neon font-bold text-xs uppercase tracking-widest underline hover:text-dark dark:hover:text-white transition-colors">Contact Support</a>
                </div>
            </div>

            <div className="lg:col-span-8">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-[#0E1015] rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 shadow-sm dark:shadow-none"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold transition-colors ${openIndex === index ? 'text-dark dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-4 h-4 text-neon" />
                                ) : (
                                    <Plus className="w-4 h-4 text-gray-400" />
                                )}
                            </button>
                            
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;