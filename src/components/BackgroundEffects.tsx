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

    // Subtle particles setup (restrained, minimal)
    const particleCount = Math.min(25, Math.floor(width / 50));
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = ['#6485FF', '#9475F5', '#36C5E8', '#9AA8BC'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.08,
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080B12]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Top Glow: Primary & Secondary Accent Blend */}
      <div 
        className="absolute -top-[12%] left-[15%] w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6485FF 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -top-[8%] right-[15%] w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9475F5 0%, transparent 70%)' }}
      />

      {/* Mid-section subtle cyan ambient light */}
      <div 
        className="absolute top-[45%] left-[5%] w-[400px] h-[400px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #36C5E8 0%, transparent 70%)' }}
      />

      {/* Canvas for lightweight floating dust motes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
      />
    </div>
  );
};
