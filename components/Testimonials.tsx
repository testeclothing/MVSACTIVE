import React, { useRef, useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    quote: "The listing went live on Monday. By Wednesday, we had three viewings scheduled solely based on the MVS visuals. It's not just editing; it's sales velocity.",
    author: "James Sterling",
    role: "Senior Broker",
    company: "Fraser Yachts Monaco"
  },
  {
    quote: "We used to spend €15k flying photographers to the Caribbean. MVS delivered better results from our crew's iPhone photos for a fraction of the cost.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Burgess"
  },
  {
    quote: "The ability to change the sky from grey to 'Golden Hour' completely changes the emotional response of the buyer. Essential tech.",
    author: "Marcello V.",
    role: "Fleet Manager",
    company: "Benetti"
  }
];

const Testimonials: React.FC = () => {
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
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#0B0C10] relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
            Broker Consensus
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white">
            Industry Validation
          </h2>
        </div>

        <div 
            ref={scrollRef}
            className="flex flex-nowrap lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide"
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-[85vw] lg:min-w-0 snap-center bg-white dark:bg-[#111318] border border-gray-200 dark:border-white/10 p-8 rounded-sm hover:border-gray-300 dark:hover:bg-white/10 transition-colors duration-500 group flex flex-col justify-between shadow-xl dark:shadow-none">
              <div>
                  <div className="mb-6 text-neon opacity-50 group-hover:opacity-100 transition-opacity">
                    <Quote className="w-8 h-8 fill-neon/20" />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-serif text-lg leading-relaxed mb-8 italic">
                    "{review.quote}"
                  </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6">
                <div>
                  <h4 className="text-dark dark:text-white font-display font-bold uppercase tracking-wide text-xs mb-1">
                    {review.author}
                  </h4>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block">
                    {review.role}, {review.company}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3 h-3 text-neon fill-neon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;