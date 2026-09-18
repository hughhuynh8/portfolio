import React from 'react';
import { Palette, Sparkles, Eye } from 'lucide-react';

export const Art: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-slate-200">
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>CREATIVE TECHNOLOGY</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
          GENERATIVE ART & SHADERS
        </h1>
        <p className="text-lg text-slate-400 font-space leading-relaxed max-w-3xl">
          Exploring the boundaries between code, mathematics, and aesthetic beauty through GLSL shaders, procedural cosmos generation, and reactive particle fields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between">
          <div className="h-48 rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 flex items-center justify-center p-6 border border-white/10 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent animate-pulse" />
            <Sparkles className="w-12 h-12 text-cyan-300 relative z-10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-orbitron">Procedural Starfields</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Real-time multi-octave Perlin noise star generators, accretion disk simulations, and relativistic Doppler shift shaders.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between">
          <div className="h-48 rounded-xl bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 flex items-center justify-center p-6 border border-white/10 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse" />
            <Eye className="w-12 h-12 text-blue-300 relative z-10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-orbitron">Hyperdrive Streak Shaders</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Custom GPU projection matrices transforming static point coordinates into elongated kinetic velocity vectors.
          </p>
        </div>
      </div>
    </div>
  );
};
