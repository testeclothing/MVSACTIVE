import React from 'react';

const Logos: React.FC = () => {
  const brands = [
    "FRASER", "BURGESS", "CAMPER & NICHOLSONS", "NORTHROP & JOHNSON", "IYC", "OCEAN INDEPENDENCE"
  ];

  return (
    <section className="py-12 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0B0C10] transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-8">
            Trusted by the Global Elite
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {brands.map((brand, i) => (
                <span key={i} className="font-display font-bold text-xl md:text-2xl text-dark dark:text-white tracking-tighter">
                    {brand}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;