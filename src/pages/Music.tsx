import React from 'react';
import { Music as MusicIcon, Radio, Volume2 } from 'lucide-react';

export const Music: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-slate-200">
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
          <MusicIcon className="w-3.5 h-3.5" />
          <span>AUDIO EXPERIMENTS</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
          INTERACTIVE SOUND & SYNTHESIS
        </h1>
        <p className="text-lg text-slate-400 font-space leading-relaxed max-w-3xl">
          Synthesizing ambient drone soundscapes, frequency modulation, and Web Audio API spatial acoustic engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-orbitron">Sub-Bass Warp Resonator</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Custom oscillator bank mapping user acceleration into pitch envelopes with low-frequency rumble and tape saturation effects.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Volume2 className="w-4 h-4" />
            <span>Web Audio API // Subharmonic Synthesizer</span>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-orbitron">Cosmic Ambient Textures</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Generative granular synthesis streaming deep space radio frequency captures blended with warm analog pads.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Volume2 className="w-4 h-4" />
            <span>Granular Engine // Stereo Binaural Panning</span>
          </div>
        </div>
      </div>
    </div>
  );
};
