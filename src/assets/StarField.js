import React, { useEffect, useRef } from 'react';
import './StarField.css';

// Animated deep-space background: layered parallax stars + occasional
// shooting stars, rendered on a single fixed canvas behind the whole app.
const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const STAR_COLORS = ['#ffffff', '#c9d6ff', '#a8e6ff', '#ffe9b3'];

    const layerCount = 3;
    const layers = [];

    const buildLayers = () => {
      const area = width * height;
      layers.length = 0;
      for (let l = 0; l < layerCount; l++) {
        const density = 0.00012 * (l + 1); // deeper layers = more, smaller stars
        const count = Math.max(30, Math.floor(area * density));
        const stars = [];
        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: (layerCount - l) * 0.35 + Math.random() * 0.6,
            baseAlpha: 0.35 + Math.random() * 0.65,
            twinkleSpeed: 0.3 + Math.random() * 1.2,
            twinklePhase: Math.random() * Math.PI * 2,
            color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
            speed: 0.015 * (l + 1),
          });
        }
        layers.push(stars);
      }
    };

    buildLayers();

    let shootingStar = null;
    const maybeSpawnShootingStar = () => {
      if (shootingStar || prefersReducedMotion) return;
      if (Math.random() < 0.0025) {
        const startX = Math.random() * width * 0.6;
        shootingStar = {
          x: startX,
          y: Math.random() * height * 0.35,
          len: 120 + Math.random() * 100,
          speed: 9 + Math.random() * 6,
          angle: Math.PI / 6,
          life: 1,
        };
      }
    };

    let t = 0;
    let animationId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      layers.forEach((stars) => {
        stars.forEach((star) => {
          const twinkle = prefersReducedMotion
            ? star.baseAlpha
            : star.baseAlpha *
              (0.6 + 0.4 * Math.sin(t * star.twinkleSpeed + star.twinklePhase));

          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fill();

          if (!prefersReducedMotion) {
            star.y += star.speed;
            star.x -= star.speed * 0.15;
            if (star.y > height) {
              star.y = -5;
              star.x = Math.random() * width;
            }
            if (star.x < -5) {
              star.x = width + 5;
            }
          }
        });
      });

      ctx.globalAlpha = 1;

      maybeSpawnShootingStar();
      if (shootingStar) {
        const s = shootingStar;
        const dx = Math.cos(s.angle) * s.speed;
        const dy = Math.sin(s.angle) * s.speed;
        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.len * Math.cos(s.angle),
          s.y - s.len * Math.sin(s.angle)
        );
        grad.addColorStop(0, 'rgba(255,255,255,0.95)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len * Math.cos(s.angle), s.y - s.len * Math.sin(s.angle));
        ctx.stroke();

        s.x += dx;
        s.y += dy;
        s.life -= 0.012;
        if (s.life <= 0 || s.x > width + 100 || s.y > height + 100) {
          shootingStar = null;
        }
      }

      t += 0.016;
      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      buildLayers();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="starfield-wrapper" aria-hidden="true">
      <div className="starfield-nebula" />
      <canvas ref={canvasRef} className="starfield-canvas" />
    </div>
  );
};

export default StarField;
