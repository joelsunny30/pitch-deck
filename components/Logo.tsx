import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 40, showText = true }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <img 
        src="https://raw.githubusercontent.com/joelsunny30/pitch-deck/main/blue%20logo%20no%20BG.png" 
        alt="Aimbot AI Logo" 
        style={{ width: size, height: size }}
        className="object-contain"
      />
      
      {showText && (
        <span className="font-header font-bold tracking-[0.2em] text-white text-2xl leading-none relative top-[2px]">
            AIMBOT
        </span>
      )}
    </div>
  );
};