import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  pulseSpeed: number;
}

export default function CosmicCanvas(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particles: Particle[] = [];
    const count = reducedMotion ? 0 : Math.min(Math.floor(width / 48), 28);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.4,
        color: i % 3 === 0 ? '#00ffc8' : (i % 3 === 1 ? '#e8c36a' : '#b026ff'),
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        alpha: Math.random() * 0.35 + 0.15,
        pulseSpeed: 0
      });
    }

    let animId = 0;
    let running = true;
    const render = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.radius, p.radius);
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animId);
      } else if (!running && particles.length) {
        running = true;
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    if (particles.length) animId = requestAnimationFrame(render);

    return () => {
      running = false;
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="sky-wash pointer-events-none" aria-hidden="true" />
      <div className="aurora-veil pointer-events-none" id="aurora-layer" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        id="cosmic-canvas"
        className="pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
