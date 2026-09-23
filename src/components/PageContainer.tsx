import React, { useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { SPACE_LOGOS } from '../config/navigation';
import { About } from '../pages/About';
import {
  ArrowLeft,
  Compass,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface PageContainerProps {
  onReturnToSpace: () => void;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  onReturnToSpace,
}) => {
  const { logoId } = useParams<{ logoId: string }>();
  const selectedLogo = SPACE_LOGOS.find((logo) => logo.id === logoId) ?? null;
  const mainRef = useRef<HTMLElement>(null);

  // focus on main content when page container is rendered
  // useEffect(() => {
  //   mainRef.current?.focus();
  // }, [selectedLogo]);

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-[#000000] text-slate-200 animate-fade-in select-text">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      {/* Top Navigation HUD */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#000000]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Back to 3D Space Button */}
          <button
            onClick={onReturnToSpace}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold tracking-wider transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO DEEP SPACE</span>
          </button>

          <NavLink
            to="/about"
            className="ml-auto px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
          >
            ABOUT HUGH
          </NavLink>
        </div>

        {/* 8 Logo Quick Jumper Bar */}
        <nav aria-label="Case studies" className="max-w-7xl mx-auto pt-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-mono text-cyan-300 whitespace-nowrap mr-1 flex items-center gap-1">
            <Compass className="w-3 h-3 text-cyan-400" />
            SECTORS:
          </span>
          {SPACE_LOGOS.map((logo) => (
            <NavLink
              key={logo.id}
              aria-label={`View ${logo.client} case study`}
              to={`/${logo.id}`}
              className={({ isActive }) => `px-2.5 py-1 rounded-md text-[11px] font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${isActive
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/15'
                }`}
            >
              <img src={logo.icon} alt="" className="w-3.5 h-3.5 object-contain" />
              <span>{logo.label}</span>
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main id="main-content" ref={mainRef} tabIndex={-1} className="min-h-[calc(100vh-120px)] py-8">
        {selectedLogo ? (
          /* Render Selected Client Case Study */
          <div className="max-w-7xl mx-auto py-6">
            {/* Case Study Header Banner */}
            <div className="relative rounded-3xl bg-slate-900/60 border border-white/10 p-8 md:p-12 overflow-hidden mb-12 shadow-2xl">
              {/* Background ambient glow */}
              <div
                className="absolute -right-24 -top-24 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: selectedLogo.glowColor }}
              />

              {/* <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div className="flex items-center gap-6">
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl p-4 flex items-center justify-center border border-white/15 shadow-inner"
                    style={{ backgroundColor: selectedLogo.backgroundColor }}
                  >
                    <img
                      src={selectedLogo.icon}
                      alt={selectedLogo.client}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    {selectedLogo.websiteUrl && (
                      <a
                        href={selectedLogo.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-100"
                      >
                        Visit project website <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div> */}

              {/* Live website capture and case-study summary */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="min-h-64 rounded-2xl border border-cyan-400/25 bg-slate-950 shadow-inner overflow-hidden">
                  {selectedLogo.heroImage ? (
                    <a href={selectedLogo.websiteUrl} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <img
                        src={selectedLogo.heroImage}
                        alt={`${selectedLogo.client} website screenshot`}
                        className="w-full h-full min-h-64 object-cover object-top"
                      /></a>
                  ) : (
                    <div className="h-full min-h-64 flex items-center justify-center text-sm font-mono text-slate-300">
                      Project screenshot unavailable
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                      {selectedLogo.role}
                    </span>
                    <span>{selectedLogo.period}</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white font-orbitron mb-4 tracking-tight">
                    {selectedLogo.client}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-100 font-space mb-4 leading-snug">
                    {selectedLogo.headline}
                  </h2>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    {selectedLogo.summary}
                  </p>
                </div>
              </div>

            </div>

            {/* Quantified Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {selectedLogo.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-lg"
                >
                  <TrendingUp className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-3xl md:text-4xl font-extrabold text-white font-orbitron tracking-tight mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Achievements */}
            <div className="rounded-3xl bg-slate-900/40 border border-white/10 p-8 md:p-10 mb-12">
              <h3 className="text-xl font-bold text-white font-orbitron mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>KEY ENGINEERING DELIVERABLES</span>
              </h3>
              <div className="space-y-4">
                {selectedLogo.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="rounded-3xl bg-slate-900/40 border border-white/10 p-8 mb-12">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">
                TECHNOLOGY ECOSYSTEM
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {selectedLogo.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Return to Space CTA */}
            <div className="flex justify-center pb-12">
              <button
                onClick={onReturnToSpace}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-orbitron tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>RETURN TO DEEP SPACE</span>
              </button>
            </div>
          </div>
        ) : (
          <About />
        )}
      </main>
    </div>
  );
};
