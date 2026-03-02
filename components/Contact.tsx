import React from 'react';
import { Mail, ShieldCheck, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="audit" className="py-24 lg:py-32 bg-white dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Decor - Grid Subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-100 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge de Exclusividade */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-dark/5 dark:border-white/10 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm">
             <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse shadow-[0_0_8px_#CCF381]"></div>
             <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Status: Invite Only
             </span>
          </div>

          {/* Headline Institucional */}
          <h2 className="font-display text-4xl md:text-6xl font-bold text-dark dark:text-white mb-8 tracking-tight leading-[0.95]">
            Initiate Protocol.
          </h2>

          {/* Copy de "Barreira de Entrada" */}
          <p className="text-gray-500 dark:text-gray-400 font-light text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            MVS operates as a private visual infrastructure for a select roster of international brokerages. We do not maintain a public upload portal.
            <br className="hidden md:block"/><br className="hidden md:block"/>
            To verify eligibility for your agency, please contact the intake division directly via encrypted mail.
          </p>

          {/* Área de Ação - Apenas E-mail */}
          <div className="flex flex-col items-center justify-center gap-8">
             
             {/* Botão de E-mail "Premium" */}
             <a 
                href="mailto:contact@mvs.com?subject=MVS%20Protocol%20Access%20Request&body=Agency%20Name:%0D%0AWebsite:%0D%0AEst.%20Annual%20Listings:"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-dark dark:bg-white text-white dark:text-dark rounded-sm overflow-hidden transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl"
             >
                <Mail className="w-5 h-5 relative z-10" />
                <span className="text-sm font-bold uppercase tracking-widest relative z-10">
                    Request Agency Access
                </span>
                
                {/* Efeito Hover Neon */}
                <div className="absolute inset-0 bg-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference"></div>
             </a>

             {/* Rodapé Técnico */}
             <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left opacity-60">
                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 justify-center">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                        Encrypted Channel
                    </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 justify-center">
                    <Terminal className="w-3 h-3" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                        Response: &lt; 4 Hours
                    </span>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
