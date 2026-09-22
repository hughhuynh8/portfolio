import React from 'react';
import { SpaceLogo, SPACE_LOGOS } from '../config/navigation';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectsPageProps {
  onSelectLogo: (logo: SpaceLogo) => void;
}

export const Projects: React.FC<ProjectsPageProps> = ({ onSelectLogo }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-slate-200">
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>PORTFOLIO DIRECTORY</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
          FEATURED PROJECTS & CLIENTS
        </h1>
        <p className="text-base md:text-lg text-slate-400 font-space leading-relaxed max-w-3xl">
          Detailed case studies across airline booking platforms, high-throughput enterprise retail systems, and creative digital companion tools.
        </p>
      </div>

      <div className="space-y-6">
        {SPACE_LOGOS.map((logo) => (
          <button
            type="button"
            key={logo.id}
            onClick={() => onSelectLogo(logo)}
            className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 p-6 md:p-8 text-left transition-all duration-300 hover:bg-slate-900/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            aria-label={`View ${logo.client} case study`}
          >
            <div className="flex items-center gap-6">
              <div className="w-24 h-16 shrink-0 flex items-center justify-center p-3 rounded-xl bg-slate-950/60 border border-white/10 group-hover:border-cyan-400/40">
                <img src={logo.icon} alt="" className="max-h-10 max-w-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-1">
                  <span>{logo.label}</span>
                  <span className="text-slate-400">•</span>
                  <span>{logo.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {logo.headline}
                </h3>
                <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                  {logo.summary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shrink-0">
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
