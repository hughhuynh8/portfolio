import React from 'react';
import { Plane, Compass, MapPin } from 'lucide-react';

export const Travel: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-slate-200">
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4">
          <Plane className="w-3.5 h-3.5" />
          <span>EXPEDITIONS & LOGS</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
          GLOBAL FLIGHT PATHS
        </h1>
        <p className="text-lg text-slate-400 font-space leading-relaxed max-w-3xl">
          Journeys across international airspaces, high-altitude alpine terrain, and astronomical observatories worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { destination: 'Tokyo & Hokkaido, Japan', detail: 'Bullet trains, snow country, and neon metropolitan networks.', icon: MapPin },
          { destination: 'Queenstown & Fiordland, NZ', detail: 'Glacial valleys, southern lights, and mountain ranges.', icon: Compass },
          { destination: 'Reykjavik, Iceland', detail: 'Volcanic craters, geothermal fields, and aurora borealis.', icon: Plane },
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
            <div>
              <item.icon className="w-5 h-5 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2 font-orbitron">{item.destination}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 mt-4">EXPEDITION LOG VERIFIED</span>
          </div>
        ))}
      </div>
    </div>
  );
};
