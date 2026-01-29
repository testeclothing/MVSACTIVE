import React, { useState } from 'react';
import Button from './Button';
import { ContactStatus } from '../types';
import { ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SENDING);
    setTimeout(() => {
      setStatus(ContactStatus.SUCCESS);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="audit" className="py-32 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Narrative */}
            <div className="lg:w-1/2">
                <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
                    Partnership Application
                </span>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-dark dark:text-white mb-8 leading-[0.95]">
                    Apply for <br/> Access.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-md">
                    We cap our active roster to 20 agencies to ensure 24h turnaround times. Please verify your brokerage credentials below.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-sm">
                            <span className="font-display font-bold text-dark dark:text-white">1</span>
                        </div>
                        <div>
                             <span className="text-sm font-bold text-dark dark:text-white block">Submit Application</span>
                             <span className="text-xs text-gray-500">We verify your monthly volume capabilities.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-sm">
                            <span className="font-display font-bold text-dark dark:text-white">2</span>
                        </div>
                         <div>
                             <span className="text-sm font-bold text-dark dark:text-white block">Onboarding Call</span>
                             <span className="text-xs text-gray-500">Setup your dedicated Slack channel and upload portal.</span>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                         <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-sm">
                            <span className="font-display font-bold text-dark dark:text-white">3</span>
                        </div>
                         <div>
                             <span className="text-sm font-bold text-dark dark:text-white block">Production Live</span>
                             <span className="text-xs text-gray-500">First assets delivered within 48 hours.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2">
                <div className="bg-white dark:bg-[#111318] p-10 md:p-14 rounded-sm border border-gray-200 dark:border-white/10 relative overflow-hidden group hover:border-gray-300 dark:hover:border-white/20 transition-colors duration-500 shadow-2xl dark:shadow-none">
                    
                    {/* Platinum Decorative Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 dark:bg-white/5 rounded-full blur-[50px] pointer-events-none"></div>

                    {status === ContactStatus.SUCCESS ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-neon/20 text-neon flex items-center justify-center rounded-full mb-6 border border-neon/30">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">Application Received</h3>
                            <p className="text-gray-500 text-sm max-w-xs mx-auto">Our Onboarding Director will review your portfolio and contact you within 12 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-white/5 pb-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-dark dark:text-white">New Partner Intake</span>
                                <Lock className="w-3 h-3 text-neon" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Brokerage Firm</label>
                                    <input required className="w-full bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/10 p-3 text-dark dark:text-white focus:outline-none focus:border-neon transition-colors" placeholder="e.g. Burgess" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Est. Annual Listings</label>
                                    <select className="w-full bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/10 p-3 text-dark dark:text-white focus:outline-none focus:border-neon transition-colors appearance-none rounded-none">
                                        <option>1 - 10 (Boutique)</option>
                                        <option>10 - 50 (Agency)</option>
                                        <option>50+ (Enterprise)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/10 p-3 text-dark dark:text-white focus:outline-none focus:border-neon transition-colors" placeholder="director@firm.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Current Pain Point</label>
                                <textarea className="w-full bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/10 p-3 text-dark dark:text-white focus:outline-none focus:border-neon transition-colors min-h-[80px]" placeholder="High retouching costs, slow turnaround, etc." />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" className="w-full" disabled={status === ContactStatus.SENDING}>
                                    {status === ContactStatus.SENDING ? 'Transmitting...' : 'Submit Application'}
                                </Button>
                                <p className="text-center text-[9px] text-gray-500 mt-4 uppercase tracking-widest">
                                    Limited availability for Q3 2025.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;