import React from 'react';
import { Camera, Image, Compass } from 'lucide-react';

export const Photography: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-slate-200">
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>OPTICAL ARCHIVES</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
          NIGHT SKY & ARCHITECTURE
        </h1>
        <p className="text-lg text-slate-400 font-space leading-relaxed max-w-3xl">
          Capturing long-exposure deep space astrophotography, the Milky Way core, and high-contrast brutalist architectural geometry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <div className="h-56 rounded-xl bg-slate-950 border border-white/10 overflow-hidden relative flex items-center justify-center mb-4">
            <img src="/assets/sparse_starry_sky.svg" alt="Starry Sky" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-cyan-300">Southern Hemisphere Milky Way Arch</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1 font-orbitron">Deep Space Long Exposures</h3>
          <p className="text-xs text-slate-400">Tracked equatorial mount captures of nebulae and stellar clusters.</p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <div className="h-56 rounded-xl bg-slate-950 border border-white/10 overflow-hidden relative flex items-center justify-center mb-4">
            <img src="/assets/fighter_jet.jpg" alt="Aviation & Flight" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-cyan-300">Aero Dynamics & High Velocity</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1 font-orbitron">Aviation & Aerospace</h3>
          <p className="text-xs text-slate-400">High-speed shutter study of aerodynamic surfaces and flight contours.</p>
        </div>
      </div>
    </div>
  );
};
