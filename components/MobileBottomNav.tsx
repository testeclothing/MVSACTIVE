import React from 'react';
import { Home, Layers, BarChart3, Lock } from 'lucide-react';

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
      { 
        icon: Home, 
        label: 'HQ', 
        target: 'top',
        activeColor: 'text-white'
      },
      { 
        icon: Layers, 
        label: 'Engine', 
        target: '#services', // Vai para o Slider Antes/Depois
        activeColor: 'text-white'
      }, 
      { 
        icon: BarChart3, 
        label: 'Data', 
        target: '#demo', // Vai para o Case Study (Métricas)
        activeColor: 'text-white'
      },      
      { 
        icon: Lock, 
        label: 'Access', 
        target: '#audit', // Vai para o Contacto (Acesso Reservado)
        activeColor: 'text-neon' // Destaque em verde
      }, 
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 transition-all duration-500 pb-safe">
        
      {/* Grid de 4 Colunas (Mais espaçado que o antigo de 5) */}
      <div className="grid grid-cols-4 h-[70px] items-center px-2 pb-2">
        {navItems.map((item, index) => (
            <button 
                key={index}
                onClick={() => scrollTo(item.target)} 
                className="group flex flex-col items-center justify-center gap-1.5 text-gray-500 hover:text-white transition-colors h-full w-full active:scale-95"
            >
                <div className={`relative ${item.label === 'Access' ? 'text-neon' : ''}`}>
                    <item.icon className="w-5 h-5 transition-colors" strokeWidth={1.5} />
                    
                    {/* Brilho subtil apenas no botão de acesso */}
                    {item.label === 'Access' && (
                        <div className="absolute inset-0 bg-neon blur-[12px] opacity-20"></div>
                    )}
                </div>
                <span className={`text-[8px] font-bold uppercase tracking-widest transition-colors ${item.label === 'Access' ? 'text-neon' : 'group-hover:text-white'}`}>
                    {item.label}
                </span>
            </button>
        ))}
      </div>
      
      {/* Espaçador para a barra preta do iPhone (Home Indicator) */}
      <div className="h-6 w-full bg-transparent"></div>
    </div>
  );
};

export default MobileBottomNav;
