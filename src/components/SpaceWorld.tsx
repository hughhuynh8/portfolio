import React, { useState, useEffect } from 'react';
import { SpaceLogo as SpaceLogoType, SPACE_LOGOS } from '../config/navigation';
import { SpaceLogo } from './SpaceLogo';

interface SpaceWorldProps {
  sceneState: 'idle' | 'warping' | 'impact' | 'flash' | 'page';
  selectedLogo: SpaceLogoType | null;
  warpProgress: number;
  onLogoClick: (logo: SpaceLogoType) => void;
}

export const SpaceWorld: React.FC<SpaceWorldProps> = ({
  sceneState,
  selectedLogo,
  warpProgress,
  onLogoClick,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Mouse move parallax in idle mode
  useEffect(() => {
    if (sceneState !== 'idle') return;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sceneState]);

  // Background transformation during warp
  const bgTransform = React.useMemo(() => {
    if (sceneState === 'warping' || sceneState === 'impact') {
      const p = Math.min(1, warpProgress);
      const scale = 1 + Math.pow(p, 2.5) * 3.2;
      return `scale(${scale})`;
    }
    // Subtle breathing float in idle
    const mx = mouseOffset.x * 12;
    const my = mouseOffset.y * 12;
    return `translate(${mx}px, ${my}px) scale(1.05)`;
  }, [sceneState, warpProgress, mouseOffset]);

  if (sceneState === 'flash' || sceneState === 'page') {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden select-none bg-[#010817]">
      {/* Background SVG Starfield with zoom transform */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out origin-center pointer-events-none"
        style={{
          backgroundImage: `url('/assets/sparse_starry_sky.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: bgTransform,
        }}
      />

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 space-vignette pointer-events-none" />

      {/* Deep Space Subtle Floating Dust / Star Sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" />
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-blue-200 rounded-full animate-twinkle" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/5 right-1/4 w-1 h-1 bg-cyan-200 rounded-full animate-twinkle" style={{ animationDelay: '2.1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-amber-100 rounded-full animate-twinkle" style={{ animationDelay: '0.7s' }} />
      </div>

      {/* 8 Glowing Logos at Different 3D Distances */}
      <div
        className={`relative w-full h-full transition-opacity duration-200 ${
          sceneState === 'idle' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {SPACE_LOGOS.map((logo) => (
          <SpaceLogo
            key={logo.id}
            logo={logo}
            sceneState={sceneState}
            isSelected={selectedLogo?.id === logo.id}
            targetLogo={selectedLogo}
            warpProgress={warpProgress}
            mouseOffset={mouseOffset}
            onClick={onLogoClick}
          />
        ))}
      </div>
    </div>
  );
};
