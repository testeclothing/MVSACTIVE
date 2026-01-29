import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture, Sun, Moon } from 'lucide-react';
import Button from './Button';

const navItems = [
  { label: 'Technology', href: '#engine' },
  { label: 'Savings', href: '#roi' },
  { label: 'Gallery', href: '#work' },
  { label: 'Partnership', href: '#investment' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to Light

  useEffect(() => {
    // Check if user manually set dark mode previously or OS preference, otherwise default to light
    if (document.documentElement.classList.contains('dark')) {
        setIsDark(true);
    } else {
        setIsDark(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  // Ultra-Compact Dynamic Styles
  const navbarBg = isScrolled 
    ? 'bg-white/90 dark:bg-[#050505]/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-1.5 shadow-sm' 
    : 'bg-transparent py-4';

  const textColor = 'text-dark dark:text-white';

  return (
    <>
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navbarBg}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-4 z-50">
            <a href="#" className="flex items-center gap-2 group">
                <div className={`w-7 h-7 flex items-center justify-center rounded-sm transition-all duration-500 border ${isScrolled ? 'bg-neon dark:bg-white/5 border-neon dark:border-white/20 text-white dark:text-neon' : 'bg-dark/5 dark:bg-white/10 text-neon border-dark/10 dark:border-white/10 backdrop-blur-md'}`}>
                    <Aperture className="w-3.5 h-3.5 relative z-10" />
                </div>
                <span className={`font-display font-bold text-lg tracking-tighter leading-none transition-colors ${textColor} group-hover:text-neon`}>
                    MVS
                </span>
            </a>

            {/* Scarcity Indicator - Ultra Small */}
            <div className={`hidden xl:flex items-center gap-1.5 px-2 py-0.5 rounded-full border transition-all duration-500 ${isScrolled ? 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10' : 'bg-white/40 dark:bg-white/5 border-white/50 dark:border-white/10'}`}>
                <div className="w-1 h-1 bg-neon rounded-full animate-pulse"></div>
                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                    <span className="text-dark dark:text-white">3 Open Slots</span>
                </span>
            </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[8px] font-bold uppercase tracking-[0.25em] transition-all bg-transparent border-none cursor-pointer relative group text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-neon"></span>
              </button>
            ))}
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5">
             <button 
                onClick={toggleTheme}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
             >
                {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
             </button>

             <button 
                onClick={() => document.getElementById('pilot')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[8px] font-bold uppercase tracking-widest hover:text-neon transition-colors text-gray-500 dark:text-gray-400 mr-1"
             >
                Get Free Test Photo
             </button>
            <Button 
                variant="outline" 
                className="border-gray-300 dark:border-white/20 text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 py-2.5 px-5 text-[8px]"
                onClick={() => handleNavClick('#audit')}
            >
                Apply for Access
            </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3 z-50">
             <button 
                onClick={toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-dark dark:text-white"
             >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
             </button>
             <button 
                className="p-2 text-dark dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-white dark:bg-[#050505] z-40 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-3xl font-display font-bold text-dark dark:text-white"
              >
                {item.label}
              </button>
            ))}
             <button 
                onClick={() => handleNavClick('#audit')}
                className="text-[9px] font-bold uppercase tracking-widest bg-dark dark:bg-white text-white dark:text-dark px-10 py-4 mt-8"
            >
                Apply for Access
            </button>
        </div>
    </div>
    </>
  );
};

export default Navbar;