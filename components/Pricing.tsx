import React, { useState } from 'react';
import { Lock, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulação de envio (API Call)
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0B0C10] transition-colors duration-500 relative overflow-hidden">
      
      {/* Container Principal */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* =========================================
             LEFT COLUMN: Context & Steps 
             ========================================= */}
          <div>
            <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Partnership Application
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-dark dark:text-white mb-6 leading-tight">
              Apply for <br /> Access.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-md">
              We cap our active roster to 20 agencies to ensure 24h turnaround times. Please verify your brokerage credentials below.
            </p>

            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-dark dark:text-white font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-dark dark:text-white font-bold text-sm mb-1 uppercase tracking-wide">Submit Application</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">We verify your monthly volume capabilities and market presence.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5">
                 <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-dark dark:text-white font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-dark dark:text-white font-bold text-sm mb-1 uppercase tracking-wide">Onboarding Call</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Setup your dedicated Slack channel and secure upload portal.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5">
                 <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-dark dark:text-white font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-dark dark:text-white font-bold text-sm mb-1 uppercase tracking-wide">Production Live</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">First assets delivered within 48 hours of intake.</p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
             RIGHT COLUMN: The Form 
             ========================================= */}
          <div className="bg-white dark:bg-[#15161A] p-8 lg:p-12 rounded-lg shadow-2xl border border-gray-100 dark:border-white/5 relative mt-8 lg:mt-0">
             
             {/* Form Header */}
             <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-6 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-dark dark:text-white">New Partner Intake</span>
                <Lock className="w-3 h-3 text-gray-400" />
             </div>

             {/* Lógica de Sucesso vs Formulário */}
             {formState === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Application Received</h3>
                   <p className="text-gray-500 text-sm mb-6">We will review your credentials and contact you shortly via email.</p>
                   <button 
                      onClick={() => setFormState('idle')}
                      className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark dark:hover:text-white"
                   >
                      Submit another
                   </button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Firm & Listings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Brokerage Firm</label>
                        <input 
                           required
                           type="text" 
                           placeholder="e.g. Burgess"
                           className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm text-dark dark:text-white focus:outline-none focus:border-neon transition-colors placeholder:text-gray-300"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Est. Annual Listings</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm text-dark dark:text-white focus:outline-none focus:border-neon transition-colors appearance-none cursor-pointer">
                                <option>1 - 10 (Boutique)</option>
                                <option>10 - 50 (Growth)</option>
                                <option>50+ (Enterprise)</option>
                            </select>
                            {/* Seta customizada para o select */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                     </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Work Email</label>
                      <input 
                          required
                          type="email" 
                          placeholder="director@firm.com"
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm text-dark dark:text-white focus:outline-none focus:border-neon transition-colors placeholder:text-gray-300"
                      />
                  </div>

                  {/* Row 3: Pain Points */}
                  <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Current Pain Point</label>
                      <textarea 
                          rows={3}
                          placeholder="High retouching costs, slow turnaround, inconsistent quality..."
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm text-dark dark:text-white focus:outline-none focus:border-neon transition-colors resize-none placeholder:text-gray-300"
                      ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full bg-neon text-dark font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-sm hover:bg-[#b8e060] transition-all shadow-lg hover:shadow-neon/20 flex items-center justify-center gap-2 mt-2"
                  >
                     {formState === 'submitting' ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing...
                        </>
                     ) : (
                        "Submit Application"
                     )}
                  </button>

                  <p className="text-center text-[9px] text-gray-400 uppercase tracking-widest mt-6">
                     Limited Availability for Q3 2026
                  </p>
                </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
