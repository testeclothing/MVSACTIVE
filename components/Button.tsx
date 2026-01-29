import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 font-display group overflow-hidden rounded-sm";
  
  const variants = {
    // Primary: Neon with white sheen
    primary: "bg-neon text-dark hover:text-dark shadow-[0_0_20px_rgba(204,243,129,0.3)] hover:shadow-[0_0_30px_rgba(204,243,129,0.6)]",
    // Outline: Transparent with Silver sheen
    outline: "bg-transparent border border-dark/20 text-dark hover:border-dark hover:bg-gray-50",
    // Ghost: Subtle
    ghost: "bg-transparent text-dark hover:text-neon px-0",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Sheen Effect Layer */}
      <div className={`absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:animate-shine ${variant === 'primary' ? 'bg-gradient-to-r from-transparent via-white/80 to-transparent' : 'bg-gradient-to-r from-transparent via-silver/50 to-transparent'}`} style={{ width: '200%', left: '-50%' }}></div>

      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {icon && (
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
      )}
    </button>
  );
};

export default Button;