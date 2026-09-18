import React, { useEffect, useRef } from 'react';

interface WarpFieldProps {
  active: boolean;
  progress: number; // 0 to 1
}

interface StarParticle {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  size: number;
  color: string;
}

export const WarpField: React.FC<WarpFieldProps> = ({ active, progress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate 600 stars distributed in 3D volume
    const STAR_COUNT = 600;
    const colors = ['#ffffff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#fef08a'];
    const stars: StarParticle[] = [];

    const initStar = (star?: Partial<StarParticle>): StarParticle => {
      return {
        x: (Math.random() - 0.5) * width * 2.5,
        y: (Math.random() - 0.5) * height * 2.5,
        z: Math.random() * 1000 + 100,
        prevZ: 1000,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        ...star,
      };
    };

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(initStar());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!active) {
        animId = requestAnimationFrame(render);
        return;
      }

      const cx = width / 2;
      const cy = height / 2;

      // Speed increases exponentially with warp progress
      // Progress 0..1: speed goes from 8 to 90
      const easeSpeed = Math.pow(Math.max(0.01, progress), 2.5);
      const speed = 8 + easeSpeed * 85;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.prevZ = star.z;
        star.z -= speed;

        // Reset star if it passes the camera viewpoint
        if (star.z <= 1) {
          star.x = (Math.random() - 0.5) * width * 2.5;
          star.y = (Math.random() - 0.5) * height * 2.5;
          star.z = 1000;
          star.prevZ = 1000;
        }

        const k = 400 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        const prevK = 400 / star.prevZ;
        const prevPx = star.x * prevK + cx;
        const prevPy = star.y * prevK + cy;

        // Skip if outside viewport bounds
        if (px < -100 || px > width + 100 || py < -100 || py > height + 100) {
          continue;
        }

        // Draw radial streak line from previous projected point to current projected point
        const streakAlpha = Math.min(1, Math.max(0.2, (1000 - star.z) / 400));
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = star.color;
        ctx.globalAlpha = streakAlpha;
        ctx.lineWidth = Math.min(4, star.size * (1 + easeSpeed * 2.2));
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active, progress]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none transition-opacity duration-300 z-20 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};
