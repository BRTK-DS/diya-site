import React, { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cząsteczki iskier („Iskierka”) w palecie: #f4cdd4 (jasny akcent), #ffc2c9 (baza), #850044 (ciemny glow)
    const particleCount = 48;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const type = Math.random();
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.45 + 0.18,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.65 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        colorType: type > 0.6 ? 'light' : type > 0.25 ? 'base' : 'dark',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.01;

        if (p.opacity < 0.15) p.opacity = 0.15;
        if (p.opacity > 0.85) p.opacity = 0.85;

        // Zapętlenie na ekranie
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.colorType === 'light') {
          // #f4cdd4 - jasne akcenty
          ctx.fillStyle = `rgba(244, 205, 212, ${p.opacity})`;
          ctx.shadowColor = 'rgba(244, 205, 212, 0.7)';
        } else if (p.colorType === 'base') {
          // #ffc2c9 - kolor bazowy
          ctx.fillStyle = `rgba(255, 194, 201, ${p.opacity})`;
          ctx.shadowColor = 'rgba(255, 194, 201, 0.6)';
        } else {
          // #850044 - kolor ciemny
          ctx.fillStyle = `rgba(133, 0, 68, ${p.opacity * 0.9})`;
          ctx.shadowColor = 'rgba(133, 0, 68, 0.8)';
        }

        ctx.shadowBlur = 9;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
