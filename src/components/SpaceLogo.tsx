import React, { useMemo } from 'react';
import { SpaceLogo as SpaceLogoType } from '../config/navigation';

interface SpaceLogoProps {
  logo: SpaceLogoType;
  sceneState: 'idle' | 'warping' | 'impact' | 'flash' | 'page';
  isSelected: boolean;
  targetLogo: SpaceLogoType | null;
  warpProgress: number;
  onClick: (logo: SpaceLogoType) => void;
}

export const SpaceLogo: React.FC<SpaceLogoProps> = ({
  logo,
  sceneState,
  onClick,
}) => {
  // Base 3D Perspective Projection
  const focalLength = 12;
  const baseScale = focalLength / (focalLength + logo.z);

  const transformStyle = useMemo(() => {
    const posX = 50 + logo.x * baseScale;
    const posY = 50 + logo.y * baseScale;

    if (sceneState === 'idle') {
      return {
        left: `${posX}%`,
        top: `${posY}%`,
        transform: `translate(-50%, -50%) scale(${baseScale * 1.35})`,
        filter: `drop-shadow(0 0 ${Math.max(8, 28 - logo.z)}px color-mix(in srgb, ${logo.glowColor} 30%, transparent))`,
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
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
  }, [sceneState, logo, baseScale]);

  if (sceneState === 'flash' || sceneState === 'page') {
    return null;
  }

  return (
    <a
      href={`/${logo.id}`}
      style={transformStyle}
      className="absolute cursor-pointer select-none border-0 bg-transparent p-0 transition-shadow group flex flex-col items-center justify-center z-10"
      aria-label={`View ${logo.client} case study`}
      aria-disabled={sceneState !== 'idle'}
      tabIndex={sceneState === 'idle' ? 0 : -1}
      onClick={(event) => {
        if (sceneState !== 'idle') {
          event.preventDefault();
          return;
        }
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        onClick(logo);
      }}
      onKeyDown={(event) => {
        if (event.key === ' ' && sceneState === 'idle') {
          event.preventDefault();
          onClick(logo);
        }
      }}
    >
      {/* Outer ambient glow nebula */}
      <div
        className="absolute -inset-6 rounded-full opacity-[0.18] blur-xl pointer-events-none transition-all duration-300 group-hover:opacity-30 group-hover:scale-125"
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
      <div
        className="relative flex items-center justify-center p-3 rounded-xl backdrop-blur-sm border border-white/15 transition-all duration-300 group-hover:border-cyan-300/80 shadow-lg"
        style={{ backgroundColor: logo.backgroundColor }}
      >
        <img
          src={logo.icon}
          alt=""
          className="h-9 md:h-12 w-auto max-w-[130px] md:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-110"
          draggable={false}
        />
      </div>
    </a>
  );
};
