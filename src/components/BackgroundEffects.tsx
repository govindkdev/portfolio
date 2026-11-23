import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle particles setup
    const particleCount = Math.min(35, Math.floor(width / 40));
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = ['#3B82F6', '#8B5CF6', '#22D3EE', '#94A3B8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Top Glow: Electric Blue & Royal Purple Blend */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, #1D4ED8 40%, transparent 70%)' }}
      />
      <div 
        className="absolute -top-[10%] right-[10%] w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full blur-[150px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, #6D28D9 40%, transparent 70%)' }}
      />

      {/* Mid-section subtle cyan ambient light */}
      <div 
        className="absolute top-[45%] left-[2%] w-[450px] h-[450px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)' }}
      />

      {/* Bottom purple glow for contact */}
      <div 
        className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />

      {/* Canvas for lightweight floating dust motes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
    </div>
  );
};
