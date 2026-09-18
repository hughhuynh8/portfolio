import React, { useState, useEffect, useRef } from 'react';
import { SpaceLogo as SpaceLogoType } from '../config/navigation';
import { SpaceWorld } from './SpaceWorld';
import { WarpField } from './WarpField';
import { ImpactTransition } from './ImpactTransition';
import { Compass, Sparkles, Navigation, Globe } from 'lucide-react';

export type SceneState = 'idle' | 'warping' | 'impact' | 'flash' | 'page';

interface SpaceSceneProps {
  sceneState: SceneState;
  selectedLogo: SpaceLogoType | null;
  onSelectLogo: (logo: SpaceLogoType) => void;
  onTransitionComplete: () => void;
}

export const SpaceScene: React.FC<SpaceSceneProps> = ({
  sceneState,
  selectedLogo,
  onSelectLogo,
  onTransitionComplete,
}) => {
  const [warpProgress, setWarpProgress] = useState(0);
  const animFrameRef = useRef<number | null>(null);

  // Handle Warp Animation Sequence
  useEffect(() => {
    if (sceneState !== 'warping') {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      setWarpProgress(0);
      return;
    }

    const duration = 1450; // ms
    const startTime = performance.now();

    const updateWarp = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      setWarpProgress(progress);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(updateWarp);
      } else {
        // Warp complete -> trigger impact and flash
        onTransitionComplete();
      }
    };

    animFrameRef.current = requestAnimationFrame(updateWarp);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [sceneState, onTransitionComplete]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#010817]">
      {/* 3D Space World with 8 Glowing Logos */}
      <SpaceWorld
        sceneState={sceneState}
        selectedLogo={selectedLogo}
        warpProgress={warpProgress}
        onLogoClick={onSelectLogo}
      />

      {/* Warp Speed Streaks Canvas Layer */}
      <WarpField
        active={sceneState === 'warping' || sceneState === 'impact'}
        progress={warpProgress}
        logo={selectedLogo}
      />

      {/* Impact and Fullscreen Flash Overlay */}
      <ImpactTransition sceneState={sceneState} />

      {/* Idle State Minimalist Space HUD Overlay */}
      {sceneState === 'idle' && (
        <>
          {/* Top HUD Bar */}
          <header className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center pointer-events-none z-30">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div className="flex flex-col">
                <span className="font-orbitron text-xs font-bold tracking-widest text-slate-200">
                  HUGH // PORTFOLIO
                </span>
                <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider">
                  VIEWPORT: DEEP SPACE // ORBIT IDLE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 bg-slate-900/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                8 TARGETS ACQUIRED
              </span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:flex items-center gap-1 text-slate-300">
                VELOCITY: 0.00c
              </span>
            </div>
          </header>

          {/* Bottom Interaction Guide */}
          <footer className="fixed bottom-6 left-0 right-0 flex flex-col items-center justify-center pointer-events-none z-30 text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/60 backdrop-blur-md border border-cyan-500/20 text-slate-300 text-xs tracking-wide shadow-2xl">
              <Navigation className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Click any destination in deep space to engage warp drive</span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono mt-2 tracking-widest">
              CAMERA = VIEWER // 3D SPACE PROJECTION
            </p>
          </footer>
        </>
      )}

      {/* Warping State HUD Warning */}
      {sceneState === 'warping' && selectedLogo && (
        <div className="fixed top-12 left-0 right-0 flex justify-center items-center pointer-events-none z-40">
          <div className="px-5 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-cyan-400/60 text-cyan-300 font-orbitron text-xs tracking-widest animate-pulse flex items-center gap-2.5 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
            <span>WARPING TO {selectedLogo.label} // VELOCITY {Math.round(warpProgress * 99)}c</span>
          </div>
        </div>
      )}
    </div>
  );
};
