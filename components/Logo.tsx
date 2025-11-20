import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 40, showText = true }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Top Chevron */}
        <path d="M50 12 L78 40 L68 50 L50 32 L32 50 L22 40 Z" fill="url(#logoGrad)" />
        
        {/* Bottom Chevron */}
        <path d="M50 88 L78 60 L68 50 L50 68 L32 50 L22 60 Z" fill="url(#logoGrad)" />
        
        {/* Left Diamond */}
        <rect x="8" y="42" width="16" height="16" rx="1" transform="rotate(45 16 50)" fill="url(#logoGrad)" />
        
        {/* Right Diamond */}
        <rect x="76" y="42" width="16" height="16" rx="1" transform="rotate(45 84 50)" fill="url(#logoGrad)" />
        
        {/* Center Eye */}
        <circle cx="50" cy="50" r="12" fill="url(#logoGrad)" />
        <circle cx="50" cy="50" r="6" fill="#0a0a0a" />
        <circle cx="53" cy="47" r="2.5" fill="white" opacity="0.9" />
      </svg>
      
      {showText && (
        <span className="font-header font-bold tracking-[0.2em] text-white text-2xl leading-none relative top-[2px]">
            AIMBOT
        </span>
      )}
    </div>
  );
};