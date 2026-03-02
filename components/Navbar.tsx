import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture, Sun, Moon, Lock, ChevronRight } from 'lucide-react';
import Button from './Button';

const navItems = [
  { label: 'The Protocol', href: '#services' }, // Liga ao DigitalStaging
  { label: 'Case Study', href: '#demo' },       // Liga ao ListingDemo (verifica se tens id="demo" lá)
  { label: 'Valuation', href: '#audit' },       // Liga ao FreeAudit/Contact
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verifica preferência de tema
    if (document.documentElement.classList.contains('dark')) {
        setIsDark(true);
    } else {
        setIsDark(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
      if (isDark) {
          document.documentElement.classList.remove('dark');
          setIsDark(false);
      } else {
          document.documentElement.classList.add('dark');
          setIsDark(true);
      }
  };

  const handleNavClick = (id: string) => {
      setIsMobileMenuOpen(false);
      const element = document.querySelector(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  // Estilo dinâmico da Navbar (Glassmorphism)
  const navbarBg = isScrolled 
    ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-2' 
    : 'bg-transparent py-6';

  return (
    <>
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navbarBg}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* ESQUERDA: Branding Institucional */}
        <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-3 group">
                <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-500 border ${isScrolled ? 'bg-dark dark:bg-white text-white dark:text-dark border-transparent' : 'bg-white/10 text-dark dark:text-white border-dark/10 dark:border-white/20 backdrop-blur-sm'}`}>
                    <Aperture className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="font-display font-bold text-lg tracking-tight leading-none text-dark dark:text-white">
                        MVS
                    </span>
                    <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-[1px]">
                        Private Infrastructure
                    </span>
                </div>
            </a>
            
            {/* Divisória Vertical (Apenas Desktop) */}
            <div className="hidden lg:block h-4 w-[1px] bg-dark/10 dark:bg-white/10"></div>

            {/* Status do Sistema (Toque Cyberpunk/Luxo) */}
            <div className="hidden lg:flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                    System Online
                </span>
            </div>
        </div>

        {/* CENTRO: Navegação Principal */}
        <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-neon transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
        </div>

        {/* DIREITA: Ferramentas & Partner Access */}
        <div className="hidden md:flex items-center gap-4">
             {/* Theme Toggle */}
             <button 
                onClick={toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-dark dark:hover:text-white transition-colors"
             >
                {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
             </button>

             {/* O Segredo: Partner Portal */}
             <a 
                href="/partners" // Este link pode ir para a página de login futura
                className="flex items-center gap-2 px-4 py-2 rounded-sm border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all group"
             >
                <Lock className="w-3 h-3 text-gray-400 group-hover:text-neon transition-colors" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors">
                    Partner Access
                </span>
             </a>

             {/* Primary CTA - Minimalista */}
             <button 
                onClick={() => handleNavClick('#audit')}
                className="bg-dark dark:bg-white text-white dark:text-dark px-5 py-2.5 rounded-sm text-[9px] font-bold uppercase tracking-widest hover:bg-neon hover:text-dark dark:hover:bg-neon dark:hover:text-dark transition-all duration-300"
            >
                Inquire
             </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleTheme}
                className="text-dark dark:text-white"
             >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
             </button>
             <button 
                className="text-dark dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-white dark:bg-[#050505] z-40 flex flex-col pt-32 px-8 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-3xl font-display font-bold text-dark dark:text-white text-left flex items-center justify-between group"
              >
                {item.label}
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-neon" />
              </button>
            ))}
        </div>

        <div className="mt-auto mb-12 border-t border-gray-100 dark:border-white/5 pt-8">
             <button 
                className="flex items-center gap-3 text-gray-500 mb-6"
                // Aqui podes adicionar lógica para abrir o modal de login
             >
                <Lock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Partner Portal Login</span>
             </button>

             <button 
                onClick={() => handleNavClick('#audit')}
                className="w-full bg-neon text-dark py-4 text-xs font-bold uppercase tracking-widest"
            >
                Initialize Protocol
            </button>
        </div>
    </div>
    </>
  );
};

export default Navbar;
