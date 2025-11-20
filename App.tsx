import React, { useState, useEffect, useCallback } from 'react';
import { SlideLayout } from './components/SlideLayout';
import { Logo } from './components/Logo';
import { CyberButton } from './components/CyberButton';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Zap, 
  ShieldAlert, 
  LineChart as ChartIcon, 
  Globe, 
  Cpu, 
  TrendingUp, 
  Award,
  Bot,
  Terminal,
  ArrowRight,
  ExternalLink,
  Twitter,
  Send,
  BarChart,
  Wallet,
  Activity,
  Database,
  Layers,
  Network,
  Banknote,
  Briefcase,
  MessageSquare,
  Code,
  Users,
  Gift,
  Share2
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// --- Types ---
interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  component: React.FC<any>;
}

// --- Components for specific slides ---

const CoverSlide = () => (
  <div className="flex flex-col items-center justify-center h-full relative z-10">
    
    <div className="flex flex-col items-center justify-center relative z-20 animate-fadeIn">
      
      {/* Logo Container */}
      <div className="relative mb-8">
          <Logo size={250} showText={false} />
      </div>
      
      {/* Main Title */}
      <div className="text-center mb-8">
        {/* Flex row ensures AIMBOT and AI are perfectly aligned relative to the center with an even gap */}
        <h1 className="font-header text-[5rem] md:text-[8rem] font-bold tracking-tighter text-white leading-none flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 uppercase drop-shadow-2xl">
          <span>AIMBOT</span>
          <span className="text-brand-glow drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">AI</span>
        </h1>
        
        {/* Cyan Divider Line */}
        <div className="h-[2px] w-32 mx-auto mt-8 bg-gradient-to-r from-transparent via-brand-cyan to-transparent shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
      </div>
      
      {/* Subtitle */}
      <div className="text-center space-y-3">
        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wider">
          The Intelligence & Execution Layer for
        </p>
        <h3 className="text-2xl md:text-3xl text-white font-bold tracking-widest uppercase drop-shadow-lg">
          All Prediction Markets
        </h3>
      </div>

    </div>
  </div>
);

const ProblemSlide = () => (
  <div className="flex flex-col h-full items-center justify-center space-y-12">
    {/* Title Section Top */}
    <div className="text-center space-y-6 max-w-4xl z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-red-500/40 bg-red-500/10 text-red-400 text-sm font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <ShieldAlert size={14} />
            Critical Market Failure
        </div>
        <h3 className="font-header text-5xl md:text-6xl font-bold text-white leading-tight">
            Prediction Markets are <br/>
            <span className="text-red-500 text-glow">Structurally Broken</span> for Traders.
        </h3>
        <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
            While volume on Polymarket & Kalshi explodes, you are flying blind against whales and bots.
        </p>
    </div>

    {/* Boxes Underneath - Side by Side - Perfectly Aligned */}
    <div className="grid grid-cols-3 gap-6 w-full max-w-[1400px] z-10">
        {[
            { title: "Information Asymmetry", desc: "Whales access on-chain flows instantly. You see data 5 minutes late.", icon: Activity },
            { title: "Fragmentation", desc: "Data is scattered across Discords, X, and block explorers. No unified view.", icon: Globe },
            { title: "Zero Automation", desc: "Manual trading means missing the 24/7 moves that define these markets.", icon: Zap },
        ].map((item, i) => (
            <div key={i} className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="glass-panel p-8 rounded-xl flex flex-col items-start gap-6 h-full border border-white/10 group-hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 bg-brand-black/60">
                    <div className="w-14 h-14 bg-brand-black border border-white/10 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-red-400 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all shrink-0">
                        <item.icon size={28} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">{item.title}</h4>
                        <p className="text-gray-400 text-lg leading-snug">{item.desc}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  </div>
);

const SolutionSlide = () => (
  <div className="flex flex-col h-full justify-center">
    {/* 2x2 Grid Filling the Page - Completely Clean */}
    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[85%] w-full max-w-[1400px] mx-auto">
        {[
            { title: "Real-time Insights", icon: Target, desc: "Aggregated data flow from Polymarket, Kalshi, & Chainlink sources into one terminal." },
            { title: "Strategy Modeling", icon: ChartIcon, desc: "Backtest outcomes based on historical event data to find positive EV setups." },
            { title: "Wallet Analytics", icon: Wallet, desc: "Track top profit-makers, analyze their win-rates, and copy-trade their alpha." },
            { title: "Auto Execution", icon: Bot, desc: "Autonomous agents executing logic 24/7 on-chain. Sleep while you earn." },
        ].map((card, i) => (
            <div key={i} className="glass-panel glass-panel-hover p-10 rounded-2xl flex flex-col justify-center group transition-all duration-300 relative overflow-hidden border-brand-border hover:border-brand-cyan/30 h-full">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors"></div>
                
                <div className="relative z-10 flex items-start gap-8">
                    <div className="w-20 h-20 bg-brand-cyan/10 rounded-xl flex items-center justify-center border border-brand-cyan/20 text-brand-glow group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.1)] shrink-0">
                        <card.icon size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-header text-3xl md:text-4xl font-bold text-white mb-3">{card.title}</h3>
                        <p className="text-gray-400 text-xl leading-relaxed">{card.desc}</p>
                    </div>
                </div>
                
                {/* Bottom Edge Highlight */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-border group-hover:bg-brand-glow transition-all duration-500"></div>
            </div>
        ))}
    </div>
  </div>
);

const ProductSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="grid grid-cols-3 gap-8 h-[600px] items-center">
        
        {/* Card 1: Esports Execution Alerts (Live) - Green - FIRST */}
        <div className="relative group overflow-hidden rounded-2xl border border-green-500/20 bg-brand-black/60 hover:bg-green-500/5 transition-all duration-500 flex flex-col h-full">
             {/* Background Glyphs - Large and Abstract */}
             <Zap className="absolute -bottom-12 -right-12 text-green-500/5 w-72 h-72 group-hover:text-green-500/10 transition-colors duration-500 transform -rotate-12 pointer-events-none" strokeWidth={0.5} />
             
            <div className="p-10 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                        <Zap size={40} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-500/20 text-green-400 border border-green-500/20 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                        LIVE
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Esports Execution Alerts</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    The fastest settlement layer data. Get notified of match outcomes and mispriced odds milliseconds before the market reacts.
                </p>
                
                {/* Visual Element: Mock Notifications */}
                <div className="mt-auto space-y-3">
                    <div className="p-3 rounded bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="text-xs text-green-200 font-mono">MATCH_END: T1 vs GEN.G (2-0)</div>
                    </div>
                    <div className="p-3 rounded bg-green-500/5 border border-green-500/10 flex items-center gap-3 opacity-60">
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        <div className="text-xs text-green-200 font-mono">ODDS_DRIFT: 1.45 -> 1.82</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 2: Autonomous Agent (Beta) - SECOND */}
        <div className="relative group overflow-hidden rounded-2xl border border-brand-cyan/20 bg-brand-black/60 hover:bg-brand-cyan/5 transition-all duration-500 flex flex-col h-full">
            {/* Background Glyphs */}
            <Bot className="absolute -bottom-12 -right-12 text-brand-cyan/5 w-72 h-72 group-hover:text-brand-cyan/10 transition-colors duration-500 transform rotate-6 pointer-events-none" strokeWidth={0.5} />

            {/* Content */}
            <div className="p-10 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-lg bg-brand-cyan/10 text-brand-glow border border-brand-cyan/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        <Bot size={40} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/20">
                        BETA
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Autonomous Agent</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Set your parameters and sleep. Our non-custodial agent executes complex on-chain strategies 24/7 based on real-time probability drifts.
                </p>

                {/* Visual Element: Logic Flow */}
                <div className="mt-auto">
                    <div className="p-4 rounded bg-brand-cyan/5 border border-brand-cyan/10 font-mono text-xs text-brand-cyan space-y-2">
                        <div className="flex justify-between"><span>IF (prob > 65%)</span><span className="text-gray-500">// Condition</span></div>
                        <div className="pl-4 text-brand-glow">EXECUTE_BUY(1000 USDC)</div>
                        <div className="flex justify-between"><span>ELSE</span><span className="text-gray-500">// Hedge</span></div>
                        <div className="pl-4 text-brand-dim">HOLD_POSITION()</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 3: Precision Analytics Dashboard (Preview) - Professional Blue/White - THIRD */}
        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-brand-black/60 hover:border-white/30 transition-all duration-500 flex flex-col h-full">
             {/* Background Glyphs */}
            <Activity className="absolute -bottom-12 -right-12 text-white/5 w-72 h-72 group-hover:text-white/10 transition-colors duration-500 transform -rotate-12 pointer-events-none" strokeWidth={0.5} />
            
            <div className="p-10 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-lg bg-white/5 text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <Activity size={40} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-white/10 text-white border border-white/10">
                        PREVIEW
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Precision Analytics Dashboard</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Institutional-grade data visualization. Deep dive into market sentiment, volume profiles, and wallet clustering to spot whale movements.
                </p>

                {/* Visual Element: Mini Chart */}
                <div className="mt-auto flex items-end gap-1 h-16 pb-2 border-b border-white/10">
                    {[30, 50, 40, 70, 55, 80, 60, 90, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/20 hover:bg-white/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  </div>
);

const HowItWorksSlide = () => (
  <div className="flex flex-col h-full relative">
    <div className="flex-1 flex items-center justify-center">
        {/* Background Circuitry */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-brand-dim to-transparent dashed-line"></div>
        </div>

        <div className="grid grid-cols-5 gap-6 w-full max-w-[1400px] relative z-10">
            {[
                { 
                    step: "01", 
                    title: "Ingest", 
                    subtitle: "Raw Data",
                    icon: Database,
                    details: "Polymarket, Kalshi, Chainlink Oracles" 
                },
                { 
                    step: "02", 
                    title: "Detect", 
                    subtitle: "Signal Processing",
                    icon: Layers,
                    details: "Inefficiencies, Arb spreads, Whale moves" 
                },
                { 
                    step: "03", 
                    title: "Analyze", 
                    subtitle: "AI Logic",
                    icon: Cpu,
                    details: "Historical backtesting & Probability models" 
                },
                { 
                    step: "04", 
                    title: "Execute", 
                    subtitle: "On-Chain Action",
                    icon: Zap,
                    details: "Flashbot-protected auto-execution" 
                },
                { 
                    step: "05", 
                    title: "Profit", 
                    subtitle: "Alpha Capture",
                    icon: TrendingUp,
                    details: "Real-time PnL realization" 
                }
            ].map((item, i) => (
                <div key={i} className="relative group cursor-pointer perspective-1000">
                    {/* Connector Line (except last) */}
                    {i < 4 && (
                        <div className="absolute top-12 left-[60%] w-full h-[2px] bg-brand-border overflow-hidden z-0">
                            <div className="w-full h-full bg-brand-cyan/50 -translate-x-full group-hover:animate-[slideRight_1s_ease-in-out_infinite]"></div>
                        </div>
                    )}
                    
                    <div className="flex flex-col items-center text-center relative z-10 transition-all duration-500 group-hover:transform group-hover:-translate-y-4 group-hover:scale-105">
                        {/* Icon Container */}
                        <div className="w-24 h-24 mb-6 relative">
                            <div className="absolute inset-0 bg-brand-black rounded-xl border border-white/10 transform rotate-45 group-hover:rotate-90 group-hover:border-brand-glow group-hover:bg-brand-cyan/5 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500 ease-out"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-brand-glow transition-colors duration-300">
                                <item.icon size={32} strokeWidth={1.5} className="transform group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            {/* Step Number Badge */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-cyan text-black font-bold font-mono text-xs flex items-center justify-center rounded-full shadow-lg group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-all duration-300">
                                {item.step}
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1 font-header tracking-wide group-hover:text-brand-glow transition-colors duration-300">{item.title}</h3>
                        <div className="text-xs font-mono text-brand-cyan mb-3 uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity duration-300">{item.subtitle}</div>
                        <p className="text-sm text-gray-500 leading-tight px-2 group-hover:text-gray-200 transition-colors duration-300">
                            {item.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    {/* Bottom Label */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-gray-500 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Latency: &lt;50ms
        </div>
    </div>
  </div>
);

const TractionSlide = () => (
  <div className="grid grid-cols-12 gap-12 h-full items-center">
    <div className="col-span-5 space-y-6">
        <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl">
                <div className="text-4xl font-bold text-white mb-1">25</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Active Beta Users</div>
            </div>
            <div className="glass-panel p-6 rounded-xl bg-green-500/5 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                <div className="text-4xl font-bold text-white mb-1">6</div>
                <div className="text-xs text-green-400 font-bold uppercase tracking-wider">Paying Customers</div>
            </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-transparent border border-brand-cyan/30 rounded-2xl">
            <div className="text-brand-dim font-mono text-sm uppercase tracking-widest mb-2">Total Grant Value</div>
            <div className="text-6xl font-header font-bold text-white mb-2">$10,000</div>
            <div className="flex items-center gap-2 text-brand-glow">
                <Award size={18} />
                <span className="font-bold">OpenServ Grant Awarded</span>
            </div>
        </div>
    </div>

    <div className="col-span-7">
        <h3 className="text-2xl font-bold text-white mb-6">Operational Highlights</h3>
        <div className="space-y-4">
            {[
                { icon: Zap, text: "Esports alert engine running with 99.9% uptime", color: "text-yellow-400" },
                { icon: TrendingUp, text: "Strong retention in closed beta cohort", color: "text-green-400" },
                { icon: Globe, text: "Growing organic community without marketing spend", color: "text-blue-400" },
                { icon: Cpu, text: "MVP deployed & processing live transactions", color: "text-brand-glow" },
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-brand-black border border-white/5 rounded-lg hover:border-white/10 transition-colors">
                    <item.icon className={item.color} size={24} />
                    <span className="text-lg text-gray-300">{item.text}</span>
                </div>
            ))}
        </div>
    </div>
  </div>
);

const CompetitiveEdgeSlide = () => (
  <div className="flex flex-col items-center justify-center h-full">
     <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Competitors */}
        <div className="col-span-1 flex flex-col justify-center space-y-4 opacity-50 blur-[1px] hover:blur-0 hover:opacity-100 transition-all duration-500">
            <div className="text-center mb-4">
                <h4 className="text-gray-400 font-mono uppercase tracking-widest">Standard Tools</h4>
                <p className="text-xs text-gray-500">Dune, Traditional Explorers</p>
            </div>
            <div className="p-4 bg-white/5 rounded border border-white/10 text-center text-sm text-gray-400">
                Passive Data Viewing
            </div>
            <div className="p-4 bg-white/5 rounded border border-white/10 text-center text-sm text-gray-400">
                Manual Execution
            </div>
            <div className="p-4 bg-white/5 rounded border border-white/10 text-center text-sm text-gray-400">
                No Predictive Models
            </div>
        </div>

        {/* US */}
        <div className="col-span-1 relative transform scale-110 z-10">
            <div className="absolute -inset-4 bg-brand-cyan/10 blur-xl rounded-xl"></div>
            <div className="bg-brand-black border border-brand-cyan rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-brand-cyan/10 p-4 text-center border-b border-brand-cyan/20">
                    <Logo size={24} className="justify-center mb-2" />
                    <h4 className="text-white font-bold uppercase tracking-wider">The Edge</h4>
                </div>
                <div className="divide-y divide-brand-cyan/10">
                    <div className="p-5 flex items-center gap-3">
                        <Zap size={20} className="text-brand-glow" />
                        <span className="font-bold text-white">Instant Auto-Execution</span>
                    </div>
                    <div className="p-5 flex items-center gap-3">
                        <Terminal size={20} className="text-brand-glow" />
                        <span className="font-bold text-white">Wallet Behavioral Analysis</span>
                    </div>
                    <div className="p-5 flex items-center gap-3">
                        <Bot size={20} className="text-brand-glow" />
                        <span className="font-bold text-white">24/7 Active Agent</span>
                    </div>
                </div>
            </div>
        </div>

         {/* Feature List Right */}
         <div className="col-span-1 flex flex-col justify-center space-y-4 pl-8 border-l border-white/5">
             <h3 className="text-2xl font-bold text-white mb-2">Why We Win</h3>
             <ul className="space-y-4 text-gray-400">
                 <li className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2"></div>
                     <span>Speed: Milliseconds matter in arb. We automate it.</span>
                 </li>
                 <li className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2"></div>
                     <span>Intel: We don't just show data, we show <i>intent</i>.</span>
                 </li>
             </ul>
         </div>
     </div>
  </div>
);

const GrantSlide = () => (
    <div className="flex flex-col items-center h-full py-6 justify-center">
        {/* Center Hub - Top Center */}
        <div className="relative w-64 h-64 mb-12">
            <div className="absolute inset-0 border border-brand-dim/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-brand-dim/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/90 backdrop-blur-xl rounded-full border border-brand-cyan/30 shadow-[0_0_40px_rgba(6,182,212,0.2)] z-10 p-2">
                
                <span className="text-brand-dim text-[10px] font-mono uppercase tracking-widest absolute top-6 opacity-60">Powered By</span>
                
                <div className="flex items-center justify-center w-full h-full pt-4 pb-8">
                    <img 
                        src="https://raw.githubusercontent.com/joelsunny30/pitch-deck/main/tg_image_4093112379.png" 
                        alt="OpenServ" 
                        className="w-44 h-44 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    />
                </div>
                
                <div className="flex flex-col items-center absolute bottom-6">
                    <span className="text-white font-header font-bold tracking-[0.2em] text-xl leading-none drop-shadow-md">OPENSERV</span>
                </div>

            </div>
            
            {/* Connecting Lines downwards */}
            <div className="absolute left-1/2 bottom-0 w-[1px] h-16 bg-gradient-to-b from-brand-cyan/50 to-transparent translate-y-full"></div>
        </div>
        
        {/* Grid of Perks Underneath - Perfectly Aligned */}
        <div className="grid grid-cols-3 gap-5 w-full max-w-5xl px-8">
             {[
                { text: "$10k Grant", icon: Banknote, highlight: true },
                { text: "GTM Expert Consultations", icon: Briefcase, highlight: true },
                { text: "Wispr Subscription (Day 1)", icon: MessageSquare, highlight: true },
                { text: "Custom Agent Dev Support", icon: Code, highlight: true },
                { text: "Influencer Network (800k+)", icon: Share2, highlight: true },
                { text: "$1k Community Incentive", icon: Gift, highlight: true }
             ].map((perk, i) => (
                 <div key={i} className={`
                    group relative p-5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center gap-2 overflow-hidden
                    ${perk.highlight 
                        ? 'bg-brand-cyan/5 border-brand-cyan/30 hover:bg-brand-cyan/10 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
                    }
                 `}>
                     <div className={`
                        p-3 rounded-full mb-1 transition-colors
                        ${perk.highlight ? 'bg-brand-glow/10 text-brand-glow shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'bg-gray-800 text-gray-400 group-hover:text-white'}
                     `}>
                        <perk.icon size={24} strokeWidth={1.5} />
                     </div>
                     
                     <span className={`text-base font-medium leading-tight ${perk.highlight ? 'text-gray-100' : 'text-gray-300 group-hover:text-white'}`}>
                        {perk.text}
                     </span>
                 </div>
             ))}
        </div>
    </div>
);

const RoadmapSlide = () => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(40);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="h-full flex flex-col justify-center">
        {/* Connector Line Container */}
        <div className="relative w-full max-w-[1400px] mx-auto">
            
            {/* Main Line Background */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 rounded-full"></div>
            
            {/* Active Line (Foundation Green -> Agent Blue) */}
             <div 
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 via-green-500 to-brand-cyan rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-[1500ms] ease-out"
                style={{ width: `${width}%` }}
             ></div>

            <div className="grid grid-cols-5 gap-4 pt-8">
                {[
                    { phase: "2025", title: "Foundation", status: "completed", items: ["MVP Live", "Esports Alerts", "Closed Beta"] },
                    { phase: "2026 Q1", title: "Agent Rollout", status: "active", items: ["On-chain Bot Beta", "Wallet Alerts", "250 Users"] },
                    { phase: "2026 Q2", title: "Public Launch", status: "pending", items: ["Analytics Dashboard", "Paste-a-wallet", "Sub Model"] },
                    { phase: "2026 Q3", title: "Expansion", status: "pending", items: ["Multi-Exchange", "Crypto Markets", "Liquidity Detection"] },
                    { phase: "2026 Q4", title: "Scale", status: "pending", items: ["Developer API", "Institutional Rails", "DAO Governance"] },
                ].map((item, i) => {
                    // Status Styling Logic
                    let colorClass = "text-gray-600 border-white/5 bg-white/0";
                    let glowClass = "";
                    let dotClass = "bg-gray-800 border-gray-600";
                    let titleClass = "text-gray-500";

                    if (item.status === "completed") { // Foundation -> Green
                        colorClass = "text-green-400 border-green-500/50 bg-green-500/5";
                        dotClass = "bg-green-500 border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.8)]";
                        titleClass = "text-white";
                        glowClass = "shadow-[0_0_20px_rgba(34,197,94,0.1)]";
                    } else if (item.status === "active") { // Agent -> Blue
                        colorClass = "text-brand-cyan border-brand-cyan/50 bg-brand-cyan/5";
                        dotClass = "bg-brand-black border-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.8)]";
                        titleClass = "text-white";
                        glowClass = "shadow-[0_0_20px_rgba(6,182,212,0.1)]";
                    }

                    return (
                        <div key={i} className="relative group">
                            {/* Node on Line */}
                            <div className={`absolute -top-[34px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${dotClass}`}>
                                {item.status === 'active' && <div className="absolute inset-0.5 bg-brand-cyan rounded-full animate-pulse"></div>}
                            </div>

                            {/* Card */}
                            <div className={`mt-4 p-6 rounded-xl border ${colorClass} ${glowClass} hover:border-opacity-100 transition-all duration-300 h-full flex flex-col`}>
                                <div className="font-mono text-sm font-bold mb-2 opacity-80">{item.phase}</div>
                                <div className={`text-xl font-bold uppercase mb-4 ${titleClass}`}>{item.title}</div>
                                <ul className="space-y-2 mt-auto">
                                    {item.items.map((sub, k) => (
                                        <li key={k} className="flex items-start gap-2 text-xs text-gray-400">
                                            <div className={`w-1 h-1 rounded-full mt-1.5 ${item.status === 'pending' ? 'bg-gray-700' : (item.status === 'completed' ? 'bg-green-500' : 'bg-brand-cyan')}`}></div>
                                            <span>{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};

const VisionSlide = () => (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto">
        <div className="mb-12 relative">
             <div className="absolute -inset-10 bg-brand-glow/20 blur-3xl rounded-full"></div>
             <Globe size={80} className="text-white relative z-10" strokeWidth={1} />
        </div>
        
        <h2 className="font-header text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            The Intelligence Layer for <br/>
            <span className="text-brand-glow">Global Prediction Markets</span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We are building the definitive operating system for event-driven trading. 
            From signal, to strategy, to execution.
        </p>
    </div>
);

const ClosingSlide = () => (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center">
        
        <div className="mb-12 transform hover:scale-105 transition-transform duration-500">
            <Logo size={120} />
        </div>

        <div className="space-y-6 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight">
                Building the future of <br/>
                prediction trading.
            </h2>
            <p className="text-2xl md:text-3xl text-brand-cyan font-mono tracking-widest uppercase opacity-90">
                Your unfair edge.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-8">
            <a href="https://x.com/Aimbot_AI" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 p-8 border border-white/10 rounded-2xl hover:bg-brand-cyan/5 hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all group bg-brand-black/40 backdrop-blur-sm">
                <Twitter className="text-gray-400 group-hover:text-brand-cyan transition-colors" size={32} />
                <span className="text-xl text-gray-300 group-hover:text-white font-bold tracking-wide">@Aimbot_AI</span>
                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-dim absolute right-6" />
            </a>
            <a href="https://t.me/AimBot_AI" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 p-8 border border-white/10 rounded-2xl hover:bg-brand-cyan/5 hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all group bg-brand-black/40 backdrop-blur-sm">
                <Send className="text-gray-400 group-hover:text-brand-cyan transition-colors" size={32} />
                <span className="text-xl text-gray-300 group-hover:text-white font-bold tracking-wide">t.me/AimBot_AI</span>
                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-dim absolute right-6" />
            </a>
        </div>

        <div className="mt-16 text-brand-dim/40 text-sm font-mono">
            // END OF TRANSMISSION
        </div>
    </div>
);

// --- Main App Component ---

const slides: SlideData[] = [
  { id: 1, title: "", component: CoverSlide },
  { id: 2, title: "The Problem", subtitle: "Market Structure", component: ProblemSlide },
  { id: 3, title: "The Solution", subtitle: "Professional Tooling", component: SolutionSlide },
  { id: 4, title: "Product Overview", subtitle: "Intelligence & Execution", component: ProductSlide },
  { id: 5, title: "How It Works", subtitle: "System Architecture", component: HowItWorksSlide },
  { id: 6, title: "Traction", subtitle: "Early Signals", component: TractionSlide },
  { id: 7, title: "Competitive Edge", subtitle: "The Alpha", component: CompetitiveEdgeSlide },
  { id: 8, title: "Strategic Backing", subtitle: "Partnerships", component: GrantSlide },
  { id: 9, title: "Roadmap", subtitle: "2025 - 2026", component: RoadmapSlide },
  { id: 10, title: "Vision", subtitle: "The Endgame", component: VisionSlide },
  { id: 11, title: "Contact", subtitle: "Join Us", component: ClosingSlide },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-brand-black text-white overflow-hidden font-sans antialiased selection:bg-brand-cyan selection:text-black">
      <SlideLayout 
        title={slides[currentSlide].title}
        subtitle={slides[currentSlide].subtitle}
        slideNumber={currentSlide + 1}
        totalSlides={slides.length}
      >
        <div className="h-full w-full animate-fadeIn">
            <CurrentComponent />
        </div>
      </SlideLayout>

      {/* Invisible Navigation Zones */}
      <div className="fixed inset-y-0 left-0 w-32 z-50 flex items-center justify-start cursor-pointer group" onClick={prevSlide}>
         <div className="ml-8 p-4 rounded-full bg-white/5 backdrop-blur opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0">
            <ChevronLeft size={24} className="text-white" />
         </div>
      </div>

      <div className="fixed inset-y-0 right-0 w-32 z-50 flex items-center justify-end cursor-pointer group" onClick={nextSlide}>
         <div className="mr-8 p-4 rounded-full bg-white/5 backdrop-blur opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
            <ChevronRight size={24} className="text-white" />
         </div>
      </div>
    </div>
  );
}

export default App;