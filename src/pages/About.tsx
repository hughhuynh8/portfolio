import React from 'react';
import { Terminal, Code, Cpu, Award, Rocket, CheckCircle2 } from 'lucide-react';
import hughPortrait from '../assets/hugh_portrait.png';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-slate-200">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-[260px] shrink-0">
            <img
              src={hughPortrait}
              alt="Hugh Huynh"
              className="w-[260px] h-auto object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>BIOGRAPHY & BACKGROUND</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
              HUGH HUYNH
            </h1>
            <p className="text-lg text-slate-400 font-space leading-relaxed">
              Software Engineer & Tech Lead specialized in designing resilient, high-performance web systems, design systems, and interactive digital experiences for global enterprises.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Core Principles */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Systems Architecture</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Building scalable frontend foundations, micro-frontends, design systems and component ecosystems that empower multi-squad development.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
            <Code className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">High-Velocity UI</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Obsessive focus on Core Web Vitals, predictive search, and frictionless booking & checkout flows for millions of concurrent users.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
            <Rocket className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Creative Technology</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Bridging engineering and creative artistry with Figma, Photoshop, Illustrator and sensory motion design that captivates audiences.
          </p>
        </div>
      </div>

      {/* Experience Highlights */}
      <div className="rounded-2xl bg-slate-900/40 border border-white/10 p-8">
        <h2 className="text-xl font-bold text-white font-orbitron mb-6 flex items-center gap-2.5">
          <Award className="w-5 h-5 text-cyan-400" />
          <span>CAREER HIGHLIGHTS & CAPABILITIES</span>
        </h2>
        <div className="space-y-4">
          {[
            'Over 19+ years engineering enterprise web applications for Qantas, Jetstar, Officeworks, Repco, Autobarn and more.',
            'Specialist in React, TypeScript, Next.js, CI/CD, GIT, Tailwind, AWS, state management and performance optimization.',
            'Proven track record scaling mission-critical platforms handling billions of dollars in gross merchandise value.',
            'Deep expertise in design systems, AA web accessibility (WCAG) and automated end-to-end testing pipelines.'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
