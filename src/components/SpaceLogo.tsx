import React, { useMemo } from 'react';
import { SpaceLogo as SpaceLogoType } from '../config/navigation';

interface SpaceLogoProps {
  logo: SpaceLogoType;
  sceneState: 'idle' | 'warping' | 'impact' | 'flash' | 'page';
  isSelected: boolean;
  targetLogo: SpaceLogoType | null;
  warpProgress: number;
  mouseOffset: { x: number; y: number };
  onClick: (logo: SpaceLogoType) => void;
}

export const SpaceLogo: React.FC<SpaceLogoProps> = ({
  logo,
  sceneState,
  mouseOffset,
  onClick,
}) => {
  // Base 3D Perspective Projection
  const focalLength = 12;
  const baseScale = focalLength / (focalLength + logo.z);

  // Perceived distance brightness & sizing
  const baseOpacity = useMemo(() => {
    return Math.max(0.5, Math.min(1.0, 1.15 - logo.z / 20));
  }, [logo.z]);

  const transformStyle = useMemo(() => {
    // Parallax effect from mouse position based on depth
    const parallaxFactor = 1 / (1 + logo.z * 0.15);
    const px = mouseOffset.x * parallaxFactor * 18;
    const py = mouseOffset.y * parallaxFactor * 14;

    const posX = 50 + logo.x * baseScale + px;
    const posY = 50 + logo.y * baseScale + py;

    if (sceneState === 'idle') {
      return {
        left: `${posX}%`,
        top: `${posY}%`,
        transform: `translate(-50%, -50%) scale(${baseScale * 1.35})`,
        opacity: baseOpacity,
        filter: `drop-shadow(0 0 ${Math.max(8, 28 - logo.z)}px ${logo.glowColor})`,
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
      };
    }

    // When warp animation starts, logos are completely removed/hidden from the animation
    return {
      left: `${posX}%`,
      top: `${posY}%`,
      transform: `translate(-50%, -50%) scale(${baseScale * 1.35})`,
      opacity: 0,
      pointerEvents: 'none' as const,
      transition: 'opacity 0.15s ease',
    };
  }, [sceneState, logo, baseScale, baseOpacity, mouseOffset]);

  if (sceneState === 'flash' || sceneState === 'page') {
    return null;
  }

  return (
    <div
      style={transformStyle}
      className="absolute cursor-pointer select-none transition-shadow group flex flex-col items-center justify-center z-10"
      onClick={() => {
        if (sceneState === 'idle') {
          onClick(logo);
        }
      }}
    >
      {/* Outer ambient glow nebula */}
      <div
        className="absolute -inset-6 rounded-full opacity-60 blur-xl pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-125"
        style={{
          background: `radial-gradient(circle, ${logo.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Futuristic Target Bracket on Hover */}
      {sceneState === 'idle' && (
        <div className="absolute -inset-3.5 border border-cyan-400/0 rounded-xl transition-all duration-300 pointer-events-none group-hover:border-cyan-400/50 group-hover:scale-105">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-300 opacity-0 group-hover:opacity-100" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-300 opacity-0 group-hover:opacity-100" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-300 opacity-0 group-hover:opacity-100" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-300 opacity-0 group-hover:opacity-100" />
        </div>
      )}

      {/* Emblem Container */}
      <div className="relative flex items-center justify-center p-3 rounded-xl bg-slate-950/40 backdrop-blur-sm border border-white/15 transition-all duration-300 group-hover:border-cyan-300/80 group-hover:bg-slate-900/60 shadow-lg">
        <img
          src={logo.icon}
          alt={logo.label}
          className="h-9 md:h-12 w-auto max-w-[130px] md:max-w-[160px] object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-110"
          draggable={false}
        />
      </div>

      {/* Label and Distance Indicator */}
      <div
        className={`mt-2 flex flex-col items-center pointer-events-none transition-all duration-300 ${
          sceneState === 'idle' ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[11px] md:text-xs font-semibold tracking-widest text-slate-200 uppercase font-space group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
          {logo.label}
        </span>
        <span className="text-[9px] text-slate-400/80 font-mono tracking-wider">
          {logo.z.toFixed(1)} AU
        </span>
      </div>
    </div>
  );
};
