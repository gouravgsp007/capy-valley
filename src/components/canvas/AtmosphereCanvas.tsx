'use client';

import React, { useEffect, useRef } from 'react';
import { AtmosphereMode } from '@/lib/types';

interface AtmosphereCanvasProps {
  mode: AtmosphereMode;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  type: 'steam' | 'yuzu' | 'sparkle';
  rotation: number;
  rotationSpeed: number;
}

export default function AtmosphereCanvas({ mode }: AtmosphereCanvasProps) {
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

    const isMobile = width < 768;
    const maxParticles = isMobile ? 24 : 45;
    const particles: Particle[] = [];

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (isMobile ? 12 : 20) + 8,
        speedY: -(Math.random() * 0.45 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        type: i % 3 === 0 ? 'yuzu' : i % 4 === 0 ? 'sparkle' : 'steam',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'steam') {
          // Soft pixelated steam puff
          ctx.fillStyle = mode === 'night' 
            ? `rgba(180, 215, 255, ${p.opacity * 0.25})`
            : mode === 'sunset'
            ? `rgba(255, 200, 160, ${p.opacity * 0.3})`
            : `rgba(255, 255, 255, ${p.opacity * 0.35})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'yuzu') {
          // Cute golden floating yuzu fruit
          ctx.fillStyle = '#FFA502';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
          // Green leaf
          ctx.fillStyle = '#2ED573';
          ctx.beginPath();
          ctx.ellipse(0, -p.size * 0.6, p.size * 0.25, p.size * 0.15, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Night firefly / sparkle
          ctx.fillStyle = mode === 'night' ? 'rgba(255, 234, 167, 0.7)' : 'rgba(255, 255, 255, 0.4)';
          ctx.fillRect(-2, -2, 4, 4);
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  );
}
