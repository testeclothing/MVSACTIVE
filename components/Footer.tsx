import React from 'react';
import { Aperture, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/10 pt-24 pb-12 text-dark dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            
            <div className="mb-12 md:mb-0 max-w-sm">
                <a href="#" className="flex items-center gap-2 mb-6 group">
                    <div className="w-8 h-8 bg-white dark:bg-white/10 text-dark dark:text-white border border-gray-200 dark:border-white/20 flex items-center justify-center rounded-sm group-hover:bg-neon group-hover:text-dark transition-all duration-500">
                         <Aperture className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-xl text-dark dark:text-white">
                        MVS
                    </span>
                </a>
                <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6">
                    A boutique marine visualization studio. 
                    Converting inventory into desire with 48-hour signature delivery.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-white dark:bg-white/5 flex items-center justify-center rounded-full text-dark dark:text-white hover:bg-neon hover:text-dark transition-colors border border-gray-100 dark:border-transparent"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="w-10 h-10 bg-white dark:bg-white/5 flex items-center justify-center rounded-full text-dark dark:text-white hover:bg-neon hover:text-dark transition-colors border border-gray-100 dark:border-transparent"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="w-10 h-10 bg-white dark:bg-white/5 flex items-center justify-center rounded-full text-dark dark:text-white hover:bg-neon hover:text-dark transition-colors border border-gray-100 dark:border-transparent"><Linkedin className="w-4 h-4" /></a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-16">
                <div>
                    <h4 className="font-bold text-dark dark:text-white mb-6 uppercase tracking-widest text-[10px]">Studio</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-dark dark:hover:text-white transition-colors">Portfolio</a></li>
                        <li><a href="#" className="hover:text-dark dark:hover:text-white transition-colors">Protocol</a></li>
                        <li><a href="#audit" className="hover:text-dark dark:hover:text-white transition-colors">Commission</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-dark dark:text-white mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-dark dark:hover:text-white transition-colors">Privacy</a></li>
                        <li><a href="#" className="hover:text-dark dark:hover:text-white transition-colors">Structural Integrity Guarantee</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600">
            <p>&copy; {new Date().getFullYear()} Marine Visual Studio.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                 <span className="uppercase tracking-widest font-bold text-[9px]">Monaco</span>
                 <span className="uppercase tracking-widest font-bold text-[9px]">London</span>
                 <span className="uppercase tracking-widest font-bold text-[9px]">Dubai</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;