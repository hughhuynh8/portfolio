import React, { useEffect, useState } from 'react';
import { SpaceLogo as SpaceLogoType, SPACE_LOGOS } from '../config/navigation';
import { SpaceLogo } from './SpaceLogo';
import spaceBackground from '../assets/space1.png';
import sunImage from '../assets/sun.png';

// Scale background star distances independently of the sun.
const STAR_DISTANCE_SCALE = 2;
const SUN_DISTANCE_SCALE = 1.5;
const SUN_DISTANCE = 3 * SUN_DISTANCE_SCALE;

interface BackgroundStar {
  id: number;
  x: number;
  y: number;
  distance: number;
  color: string;
  twinkleDelay: string;
}

const BACKGROUND_STARS: BackgroundStar[] = [
  { id: 1, x: 5, y: 11, distance: 18, color: '#dbeafe', twinkleDelay: '0s' },
  { id: 2, x: 13, y: 68, distance: 13, color: '#ffffff', twinkleDelay: '0.8s' },
  { id: 3, x: 18, y: 30, distance: 9, color: '#bae6fd', twinkleDelay: '1.6s' },
  { id: 4, x: 24, y: 84, distance: 16, color: '#fef3c7', twinkleDelay: '2.4s' },
  { id: 5, x: 29, y: 8, distance: 5, color: '#ffffff', twinkleDelay: '1.1s' },
  { id: 6, x: 34, y: 53, distance: 11, color: '#cffafe', twinkleDelay: '3.2s' },
  { id: 7, x: 40, y: 21, distance: 15, color: '#e0f2fe', twinkleDelay: '0.4s' },
  { id: 8, x: 46, y: 91, distance: 7, color: '#ffffff', twinkleDelay: '2s' },
  { id: 9, x: 51, y: 38, distance: 19, color: '#dbeafe', twinkleDelay: '2.8s' },
  { id: 10, x: 57, y: 15, distance: 10, color: '#fef9c3', twinkleDelay: '1.4s' },
  { id: 11, x: 44, y: 73, distance: 6, color: '#ffffff', twinkleDelay: '3.6s' },
  { id: 12, x: 68, y: 47, distance: 14, color: '#bae6fd', twinkleDelay: '0.2s' },
  { id: 13, x: 73, y: 6, distance: 17, color: '#e0f2fe', twinkleDelay: '2.2s' },
  { id: 14, x: 38, y: 64, distance: 8, color: '#ffffff', twinkleDelay: '3s' },
  { id: 15, x: 82, y: 27, distance: 12, color: '#fef3c7', twinkleDelay: '0.6s' },
  { id: 16, x: 47, y: 88, distance: 4, color: '#ffffff', twinkleDelay: '1.8s' },
  { id: 17, x: 91, y: 43, distance: 16, color: '#cffafe', twinkleDelay: '2.6s' },
  { id: 18, x: 95, y: 18, distance: 9, color: '#dbeafe', twinkleDelay: '3.4s' },
  { id: 19, x: 8, y: 47, distance: 3, color: '#ffffff', twinkleDelay: '1.3s' },
  { id: 20, x: 42, y: 43, distance: 20, color: '#bae6fd', twinkleDelay: '2.9s' },
  { id: 21, x: 3, y: 82, distance: 11, color: '#e0f2fe', twinkleDelay: '0.5s' },
  { id: 22, x: 11, y: 21, distance: 7, color: '#ffffff', twinkleDelay: '1.7s' },
  { id: 23, x: 16, y: 56, distance: 18, color: '#bae6fd', twinkleDelay: '2.5s' },
  { id: 24, x: 21, y: 96, distance: 10, color: '#fef3c7', twinkleDelay: '3.3s' },
  { id: 25, x: 26, y: 41, distance: 14, color: '#ffffff', twinkleDelay: '0.9s' },
  { id: 26, x: 31, y: 75, distance: 5, color: '#cffafe', twinkleDelay: '1.5s' },
  { id: 27, x: 36, y: 13, distance: 16, color: '#dbeafe', twinkleDelay: '2.7s' },
  { id: 28, x: 41, y: 36, distance: 8, color: '#ffffff', twinkleDelay: '3.5s' },
  { id: 29, x: 43, y: 58, distance: 19, color: '#e0f2fe', twinkleDelay: '0.3s' },
  { id: 30, x: 52, y: 31, distance: 6, color: '#ffffff', twinkleDelay: '1.9s' },
  { id: 31, x: 58, y: 42, distance: 13, color: '#bae6fd', twinkleDelay: '2.3s' },
  { id: 32, x: 63, y: 23, distance: 9, color: '#fef3c7', twinkleDelay: '3.1s' },
  { id: 33, x: 69, y: 35, distance: 15, color: '#ffffff', twinkleDelay: '0.7s' },
  { id: 34, x: 74, y: 13, distance: 4, color: '#cffafe', twinkleDelay: '1.2s' },
  { id: 35, x: 79, y: 46, distance: 20, color: '#dbeafe', twinkleDelay: '2.1s' },
  { id: 36, x: 84, y: 8, distance: 12, color: '#ffffff', twinkleDelay: '2.8s' },
  { id: 37, x: 88, y: 33, distance: 17, color: '#e0f2fe', twinkleDelay: '3.7s' },
  { id: 38, x: 93, y: 48, distance: 8, color: '#bae6fd', twinkleDelay: '0.1s' },
  { id: 39, x: 97, y: 25, distance: 14, color: '#ffffff', twinkleDelay: '1.4s' },
  { id: 40, x: 49, y: 17, distance: 3, color: '#fef3c7', twinkleDelay: '2.6s' },
];

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

  useEffect(() => {
    if (sceneState !== 'idle') return;

    const handleMouseMove = (event: MouseEvent) => {
      setMouseOffset({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sceneState]);

  if (sceneState === 'flash' || sceneState === 'page') {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden select-none bg-[#000000]">
      {/* Full-viewport space background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${spaceBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 space-vignette pointer-events-none" />

      {/* Centered sun with the same depth-based parallax as the nearest stars. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{
          width: `clamp(${300 / SUN_DISTANCE_SCALE}px, ${46 / SUN_DISTANCE_SCALE}vw, ${660 / SUN_DISTANCE_SCALE}px)`,
          transform: `translate(calc(-70% + ${mouseOffset.x * (120 / SUN_DISTANCE)}px), calc(-50% + ${mouseOffset.y * (120 / SUN_DISTANCE)}px))`,
          transition: 'transform 180ms cubic-bezier(0.16, 1, 0.3, 1)',
          mixBlendMode: 'screen',
        }}
      >
        <img
          src={sunImage}
          alt=""
          draggable={false}
          className="block w-full h-auto"
        />
      </div>

      {/* 40 stars at distinct depths; nearby stars travel farther with cursor parallax. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {BACKGROUND_STARS.map((star) => {
          const parallaxStrength = 120 / (star.distance * STAR_DISTANCE_SCALE);
          const offsetX = mouseOffset.x * parallaxStrength;
          const offsetY = mouseOffset.y * parallaxStrength;
          const size = (0.8 + (20 - star.distance) * 0.11) / STAR_DISTANCE_SCALE;
          const opacity = 0.35 + (20 - star.distance) * 0.028;

          return (
            <span
              key={star.id}
              className="absolute"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
                transition: 'transform 180ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                className="block rounded-full animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  backgroundColor: star.color,
                  boxShadow: `0 0 ${size * 3}px ${star.color}`,
                  animationDelay: star.twinkleDelay,
                }}
              />
            </span>
          );
        })}
      </div>

      {/* 8 Glowing Logos at Different 3D Distances */}
      <div
        className={`relative w-full h-full transition-opacity duration-200 ${sceneState === 'idle' ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
            onClick={onLogoClick}
          />
        ))}
      </div>
    </div>
  );
};
