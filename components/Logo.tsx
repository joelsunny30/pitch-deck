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
      >
        {/* Top Chevron */}
        <path
          d="M30 20 L50 10 L70 20"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Right Chevron */}
        <path
          d="M80 30 L90 50 L80 70"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Bottom Chevron */}
        <path
          d="M70 80 L50 90 L30 80"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Left Chevron */}
        <path
          d="M20 70 L10 50 L20 30"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Corner Squares */}
        <rect x="22" y="22" width="8" height="8" fill="#0B4D6B" rx="1" />
        <rect x="70" y="22" width="8" height="8" fill="#0B4D6B" rx="1" />
        <rect x="22" y="70" width="8" height="8" fill="#0B4D6B" rx="1" />
        <rect x="70" y="70" width="8" height="8" fill="#0B4D6B" rx="1" />
        
        {/* Center Eye */}
        <circle cx="50" cy="50" r="18" fill="url(#eyeGrad)" />
        <circle cx="50" cy="50" r="12" fill="#0B1F2E" />
        <circle cx="50" cy="50" r="7" fill="url(#pupilGrad)" />
        <ellipse cx="53" cy="47" rx="3" ry="4" fill="#5FE3FF" opacity="0.8" />
        
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5FE3FF" />
            <stop offset="100%" stopColor="#0B4D6B" />
          </linearGradient>
          <radialGradient id="eyeGrad">
            <stop offset="0%" stopColor="#5FE3FF" />
            <stop offset="100%" stopColor="#0B4D6B" />
          </radialGradient>
          <radialGradient id="pupilGrad">
            <stop offset="0%" stopColor="#0B1F2E" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
        </defs>
      </svg>
      {showText && (
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          AIMBOT
        </span>
      )}
    </div>
  );
};

export default Logo;
