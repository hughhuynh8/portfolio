import React from 'react';
import { SpaceLogo, SPACE_LOGOS } from '../config/navigation';
import { Rocket, Sparkles, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onSelectLogo: (logo: SpaceLogo) => void;
  onReturnToSpace: () => void;
}

export const Home: React.FC<HomePageProps> = ({ onSelectLogo, onReturnToSpace }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-slate-200">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DEEP SPACE PORTFOLIO EXPLORER</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-orbitron">
          FLOATING IN DEEP SPACE
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 font-space leading-relaxed mb-8">
          Welcome to the cosmos. Eight corporate emblems float at varied distances across the stellar expanse. Select any constellation target to engage warp speed and explore its engineering case study.
        </p>
        <button
          onClick={onReturnToSpace}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-105"
        >
          <Rocket className="w-4 h-4" />
          <span>RETURN TO 3D ORBIT VIEW</span>
        </button>
      </div>

      {/* Grid of Available Destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPACE_LOGOS.map((logo) => (
          <div
            key={logo.id}
            onClick={() => onSelectLogo(logo)}
            className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] flex flex-col justify-between"
          >
            <div>
              <div className="h-16 flex items-center justify-center p-2 mb-4 bg-slate-950/40 rounded-xl border border-white/5 group-hover:border-cyan-400/30">
                <img src={logo.icon} alt={logo.label} className="max-h-12 max-w-[120px] object-contain" />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                <span>{logo.label}</span>
                <span>{logo.z} AU</span>
              </div>
              <h3 className="font-semibold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors">
                {logo.client}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {logo.summary}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
              <span>Warp to Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
