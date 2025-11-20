import React from 'react';
import { Logo } from './Logo';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  slideNumber: number;
  totalSlides: number;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, subtitle, slideNumber, totalSlides }) => {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-brand-black">
      {/* Ambient Background - Very subtle */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[size:100px_100px] bg-cyber-grid opacity-5 pointer-events-none" />

      {/* --- HUD LAYER --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_51%)] bg-[length:100%_4px] opacity-20"></div>
        
        {/* Top Left Bracket */}
        <div className="absolute top-24 left-8 w-8 h-8 border-l border-t border-brand-dim/20"></div>
        
        {/* Top Right Bracket */}
        <div className="absolute top-24 right-8 w-8 h-8 border-r border-t border-brand-dim/20"></div>
        
        {/* Bottom Left Bracket */}
        <div className="absolute bottom-20 left-8 w-8 h-8 border-l border-b border-brand-dim/20"></div>
        
        {/* Bottom Right Bracket */}
        <div className="absolute bottom-20 right-8 w-8 h-8 border-r border-b border-brand-dim/20"></div>

        {/* Vertical Data Line Left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-dim/10 to-transparent"></div>
        
        {/* Vertical Data Line Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-dim/10 to-transparent"></div>
        
        {/* Crosshairs */}
        <div className="absolute top-1/3 left-12 text-brand-dim/10 font-mono text-[8px]">+</div>
        <div className="absolute top-2/3 left-12 text-brand-dim/10 font-mono text-[8px]">+</div>
        <div className="absolute top-1/3 right-12 text-brand-dim/10 font-mono text-[8px]">+</div>
        <div className="absolute top-2/3 right-12 text-brand-dim/10 font-mono text-[8px]">+</div>
        
        {/* Deco Numbers */}
        <div className="absolute bottom-24 right-12 text-[8px] font-mono text-brand-dim/10 flex flex-col items-end gap-1">
           <span>COORD_X: 492.33</span>
           <span>COORD_Y: 110.02</span>
        </div>
      </div>

      {/* Header */}
      <header className="w-full h-20 px-12 flex justify-between items-center z-20 border-b border-white/5 bg-brand-black/50 backdrop-blur-sm relative">
        {/* Decorative Tick Marks under header */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-12 opacity-20 pointer-events-none">
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
        </div>

        <Logo size={36} />
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-brand-dim text-[10px] font-mono uppercase tracking-widest">Presentation</span>
            <span className="text-white text-xs font-bold tracking-wider">SERIES A // 2025</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <div className="w-8 h-8 rounded bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
             <div className="w-2 h-2 bg-brand-glow rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full max-w-[1600px] mx-auto flex flex-col px-12 pt-8 pb-4">
        {title && (
          <div className="mb-8 flex items-end justify-between border-b border-white/5 pb-4">
            <div>
              <h2 className="font-header text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-none">
                <span className="text-brand-glow mr-2">/</span>
                {title}
              </h2>
              {subtitle && (
                <p className="text-brand-dim mt-2 text-lg font-light tracking-wide">{subtitle}</p>
              )}
            </div>
            {/* Decorative graphic for header */}
            <div className="hidden md:flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-1 w-8 ${i === 4 ? 'bg-brand-glow' : 'bg-brand-border'}`}></div>
                ))}
            </div>
          </div>
        )}
        
        <div className="flex-1 h-full overflow-hidden">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full h-16 px-12 flex justify-between items-center z-20 border-t border-white/5 bg-brand-black/50 backdrop-blur-sm relative">
        {/* Decorative Tick Marks above footer */}
        <div className="absolute top-0 left-0 w-full flex justify-between px-12 opacity-20 pointer-events-none">
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
             <div className="h-1 w-px bg-white"></div>
        </div>

        <div className="text-[10px] text-brand-dim font-mono tracking-widest uppercase flex items-center gap-4">
            <span>Confidential</span>
            <span className="text-white/10">|</span>
            <span>Aimbot AI &copy; 2025</span>
        </div>
        
        <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-brand-dim">
                {String(slideNumber).padStart(2, '0')} <span className="text-white/20 mx-1">/</span> {totalSlides}
            </span>
            {/* Progress Bar */}
            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-brand-glow transition-all duration-500 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{ width: `${(slideNumber / totalSlides) * 100}%` }}
                />
            </div>
        </div>
      </footer>
    </div>
  );
};