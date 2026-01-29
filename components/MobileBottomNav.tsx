import React from 'react';
import { Home, ScanLine, Image, DollarSign, Zap } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const scrollTo = (id: string) => {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const navItems = [
      { icon: Home, label: 'Home', target: 'top' },
      { icon: ScanLine, label: 'Demo', target: '#engine' }, 
      { icon: Image, label: 'Work', target: '#work' },      
      { icon: DollarSign, label: 'Price', target: '#investment' }, 
      { icon: Zap, label: 'Trial', target: '#pilot' },      
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/10 shadow-[0_-5px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-5px_30px_rgba(0,0,0,0.5)] transition-all duration-500 pb-safe">
        {/* Neon Accent Line for Visibility */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-50"></div>
        
      <div className="grid grid-cols-5 h-[68px] items-center px-1">
        {navItems.map((item, index) => (
            <button 
                key={index}
                onClick={() => scrollTo(item.target)} 
                className="group flex flex-col items-center justify-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors h-full w-full active:bg-gray-50 dark:active:bg-white/5 active:scale-95 rounded-sm"
            >
                <div className="relative">
                    <item.icon className="w-5 h-5 group-hover:text-neon transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest group-hover:text-dark dark:group-hover:text-white transition-colors">{item.label}</span>
            </button>
        ))}
      </div>
      
      {/* Safe Area Spacer - Solid to prevent bleed */}
      <div className="h-5 w-full bg-white dark:bg-[#050505]"></div>
    </div>
  );
};

export default MobileBottomNav;