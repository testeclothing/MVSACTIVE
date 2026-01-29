import React, { useState } from 'react';
import { TrendingUp, Clock, DollarSign, ArrowRight, Briefcase } from 'lucide-react';
import Button from './Button';

const ROICalculator: React.FC = () => {
  const [monthlyListings, setMonthlyListings] = useState(5);
  const [photosPerListing, setPhotosPerListing] = useState(15);
  const [photographerRate, setPhotographerRate] = useState(1200); // Day rate + travel

  const traditionalMonthlyCost = monthlyListings * photographerRate;
  
  let mvsMonthlyCost = 2500;
  if (monthlyListings > 5) mvsMonthlyCost = 4950;
  if (monthlyListings > 15) mvsMonthlyCost = 4950 + ((monthlyListings - 15) * 400); 

  const monthlySavings = traditionalMonthlyCost - mvsMonthlyCost;
  const annualSavings = monthlySavings * 12;
  
  const costPerListingTraditional = traditionalMonthlyCost / monthlyListings;
  const costPerListingMVS = mvsMonthlyCost / monthlyListings;

  const maxCost = Math.max(traditionalMonthlyCost, mvsMonthlyCost) * 1.2;
  const traditionalPercent = (traditionalMonthlyCost / maxCost) * 100;
  const mvsPercent = (mvsMonthlyCost / maxCost) * 100;

  return (
    <section id="roi" className="py-24 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
                <div>
                    <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                        Capital Efficiency
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                        P&L Simulation
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 font-light max-w-xl">
                        Compare the cost of your current visual logistics against the MVS subscription model.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                
                {/* CONTROL PANEL (Inputs) */}
                <div className="lg:col-span-5 space-y-10">
                    
                    {/* Input Group 1 */}
                    <div className="group">
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Monthly New Listings</label>
                            <span className="font-display font-bold text-2xl text-dark dark:text-white">{monthlyListings}</span>
                        </div>
                        <input 
                            type="range" min="1" max="25" step="1"
                            value={monthlyListings}
                            onChange={(e) => setMonthlyListings(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-neon hover:accent-neonHover outline-none"
                        />
                         <div className="flex justify-between text-[9px] text-gray-500 mt-2 font-bold uppercase tracking-widest">
                            <span>Boutique</span>
                            <span>Enterprise</span>
                        </div>
                    </div>

                    {/* Input Group 2 */}
                    <div className="group">
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Traditional Photo Cost (Per Shoot)</label>
                            <span className="font-display font-bold text-2xl text-dark dark:text-white">${photographerRate}</span>
                        </div>
                        <input 
                            type="range" min="500" max="3000" step="100"
                            value={photographerRate}
                            onChange={(e) => setPhotographerRate(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-neon hover:accent-neonHover outline-none"
                        />
                         <div className="flex justify-between text-[9px] text-gray-500 mt-2 font-bold uppercase tracking-widest">
                            <span>Local Hire</span>
                            <span>Specialist + Travel</span>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-2">Includes day rate, travel, hotels, and basic retouching.</p>
                    </div>

                    <div className="pt-8 border-t border-gray-200 dark:border-white/5">
                        <Button variant="outline" className="w-full md:w-auto">
                             Download CFO Report
                        </Button>
                    </div>

                </div>

                {/* DASHBOARD (Outputs) */}
                <div className="lg:col-span-7">
                    <div className="bg-white dark:bg-[#111318] border border-gray-200 dark:border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden shadow-xl dark:shadow-none transition-colors duration-500">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px] pointer-events-none"></div>

                        {/* Big Metric */}
                        <div className="mb-12 relative z-10">
                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Projected Annual Savings</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl md:text-8xl font-display font-bold text-neon tracking-tighter">
                                    ${annualSavings.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-neon" />
                                <span className="text-dark dark:text-white font-bold">Reduction in Overhead</span> by switching to subscription
                            </p>
                        </div>

                        {/* Visualization Bars */}
                        <div className="space-y-8 relative z-10">
                            
                            {/* Traditional Bar */}
                            <div>
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">
                                    <span>Traditional Monthly Spend</span>
                                    <span>${traditionalMonthlyCost.toLocaleString()} / mo</span>
                                </div>
                                <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gray-400 dark:bg-gray-600 rounded-full transition-all duration-1000 ease-out" 
                                        style={{ width: `${traditionalPercent}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* MVS Bar */}
                            <div>
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-dark dark:text-white">
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div> MVS Subscription</span>
                                    <span>${mvsMonthlyCost.toLocaleString()} / mo</span>
                                </div>
                                <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-neon rounded-full shadow-[0_0_15px_rgba(204,243,129,0.5)] transition-all duration-1000 ease-out relative" 
                                        style={{ width: `${mvsPercent}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-100 dark:border-white/5">
                            <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-sm border border-gray-100 dark:border-white/5">
                                <Briefcase className="w-5 h-5 text-gray-400 mb-3" />
                                <span className="block text-xl font-display font-bold text-dark dark:text-white mb-1">${costPerListingTraditional.toFixed(0)}</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Old Cost Per Listing</span>
                            </div>
                            <div className="p-4 bg-neon/10 rounded-sm border border-neon/20">
                                <DollarSign className="w-5 h-5 text-neon mb-3" />
                                <span className="block text-xl font-display font-bold text-neon mb-1">${costPerListingMVS.toFixed(0)}</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-neon/70">MVS Cost Per Listing</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default ROICalculator;