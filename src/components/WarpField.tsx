import React, { useEffect, useRef } from 'react';
import { SpaceLogo } from '../config/navigation';

interface WarpFieldProps {
  active: boolean;
  progress: number; // 0 to 1
  logo?: SpaceLogo | null;
}

export const WarpField: React.FC<WarpFieldProps> = ({ active, progress, logo }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars: Star[] = [];
    const starCount = 1200;
    let speed = 6;

    class Star {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      prevz: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = (Math.random() - 0.5) * canvas.width;
        this.y = (Math.random() - 0.5) * canvas.height;
        this.z = Math.random() * canvas.width;
        this.prevz = this.z;
      }

      update() {
        if (!canvas) return;
        this.prevz = this.z;
        this.z -= speed;
        if (this.z <= 0) {
          this.reset();
          this.z = canvas.width;
        }
      }

      draw() {
        if (!ctx || !canvas) return;
        const sx = (this.x / this.z) * canvas.width + canvas.width / 2;
        const sy = (this.y / this.z) * canvas.height + canvas.height / 2;
        const px = (this.x / this.prevz) * canvas.width + canvas.width / 2;
        const py = (this.y / this.prevz) * canvas.height + canvas.height / 2;
        const radius = Math.max(0.1, (1 - this.z / canvas.width) * 3);

        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = radius;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      if (activeRef.current) {
        // Accelerate speed based on warp progress: from 6 up to 55
        const p = progressRef.current;
        speed = 6 + Math.pow(Math.max(0.01, p), 2.2) * 48;

        ctx.fillStyle = 'rgba(0, 0, 20, 0.4)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < stars.length; i++) {
          stars[i].update();
          stars[i].draw();
        }
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.forEach((star) => star.reset());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Compute zoom-in animation values for the clicked logo
  const p = Math.max(0, Math.min(1, progress));
  const zoomScale = 0.25 + Math.pow(p, 2.6) * 22;
  const logoOpacity = Math.min(1, Math.max(0, p * 3));
  const logoBrightness = 1 + p * 2.2;
  const glowSize = 15 + p * 70;

  return (
    <div
      className={`fixed inset-0 pointer-events-none transition-opacity duration-300 z-20 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />

      {/* Animated Zooming Logo */}
      {active && logo && (
        <div
          className="fixed top-1/2 left-1/2 pointer-events-none z-30 flex flex-col items-center justify-center select-none"
          style={{
            transform: `translate3d(-50%, -50%, 0) scale(${zoomScale})`,
            opacity: logoOpacity,
            filter: `drop-shadow(0 0 ${glowSize}px ${logo.glowColor}) brightness(${logoBrightness})`,
            willChange: 'transform, filter, opacity',
          }}
        >
          <div className="p-4 md:p-6 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/25 shadow-2xl flex items-center justify-center">
            <img
              src={logo.icon}
              alt={logo.label}
              className="h-14 md:h-20 w-auto max-w-[200px] md:max-w-[280px] object-contain"
              draggable={false}
            />
          </div>
          <span className="mt-3 text-xs md:text-sm font-bold tracking-[0.25em] text-white/90 uppercase font-space text-glow-cyan">
            {logo.label}
          </span>
        </div>
      )}
    </div>
  );
};
