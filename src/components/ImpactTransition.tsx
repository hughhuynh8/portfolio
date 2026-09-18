import React from 'react';

interface ImpactTransitionProps {
  sceneState: 'idle' | 'warping' | 'impact' | 'flash' | 'page';
}

export const ImpactTransition: React.FC<ImpactTransitionProps> = ({ sceneState }) => {
  if (sceneState === 'idle' || sceneState === 'warping') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Impact expansion glow & lens flare */}
      {sceneState === 'impact' && (
        <div className="absolute inset-0 bg-white/20 backdrop-brightness-150 animate-pulse transition-opacity duration-200" />
      )}

      {/* Fullscreen White Flash Transition */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          sceneState === 'flash' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Fade to Black Transition into Page */}
      <div
        className={`absolute inset-0 bg-[#010817] transition-opacity duration-500 ${
          sceneState === 'page' ? 'opacity-0 pointer-events-none' : 'opacity-0'
        }`}
      />
    </div>
  );
};
