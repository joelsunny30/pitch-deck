import React from 'react';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const CyberButton: React.FC<CyberButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-2 rounded font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-glow text-black hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]",
    secondary: "border border-brand-glow text-brand-glow hover:bg-brand-glow/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};