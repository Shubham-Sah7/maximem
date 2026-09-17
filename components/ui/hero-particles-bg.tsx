"use client";

import React, { useEffect, useRef } from "react";

interface HeroParticlesBgProps {
  isLight?: boolean;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  currentAlpha: number;
  strokeWidth: number;
}

export default function HeroParticlesBg({ isLight = false }: HeroParticlesBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 700);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Calculate count based on screen area to ensure consistent density
    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      // Approximate 1 particle per ~4200 sq pixels for an organic, uncrowded scattered ring distribution
      const count = Math.max(50, Math.min(180, Math.floor((width * height) / 4200)));

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          // Ring radius: 2.2px to 4px matching the reference image's hollow circular rings
          radius: 2.2 + Math.random() * 1.8,
          baseAlpha: isLight ? 0.16 + Math.random() * 0.18 : 0.22 + Math.random() * 0.22,
          currentAlpha: 0.2,
          strokeWidth: 1.0,
        });
      }
    };

    resize();

    // Mouse tracking on hero container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const parent = canvas.parentElement || window;
    parent.addEventListener("mousemove", handleMouseMove as EventListener, { passive: true });
    parent.addEventListener("mouseleave", handleMouseLeave as EventListener, { passive: true });
    window.addEventListener("resize", resize);

    const HOVER_RADIUS = 135;
    const HOVER_RADIUS_SQ = HOVER_RADIUS * HOVER_RADIUS;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Soft ambient cursor spotlight in hover area
      if (mouse.active && mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
        const glowGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          HOVER_RADIUS * 1.2
        );
        if (isLight) {
          glowGrad.addColorStop(0, "rgba(242, 101, 34, 0.09)");
          glowGrad.addColorStop(0.6, "rgba(242, 101, 34, 0.03)");
          glowGrad.addColorStop(1, "rgba(242, 101, 34, 0.0)");
        } else {
          glowGrad.addColorStop(0, "rgba(242, 101, 34, 0.13)");
          glowGrad.addColorStop(0.6, "rgba(242, 101, 34, 0.04)");
          glowGrad.addColorStop(1, "rgba(242, 101, 34, 0.0)");
        }
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, HOVER_RADIUS * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Ambient gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // Soft rebound when moving too far from origin
        const dxOrigin = p.x - p.originX;
        const dyOrigin = p.y - p.originY;
        if (Math.abs(dxOrigin) > 35) p.vx *= -1;
        if (Math.abs(dyOrigin) > 35) p.vy *= -1;

        // Wrap edges smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Calculate proximity to mouse
        let proximity = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < HOVER_RADIUS_SQ) {
            const dist = Math.sqrt(distSq);
            proximity = 1 - dist / HOVER_RADIUS;

            // Subtle gentle repulsion away from cursor (magnetic hover feel)
            const force = (1 - dist / HOVER_RADIUS) * 2.2;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        }

        // Smoothly interpolate alpha and size based on proximity
        const targetAlpha = mouse.active && proximity > 0
          ? Math.min(1.0, p.baseAlpha + proximity * 0.75)
          : p.baseAlpha;
        p.currentAlpha += (targetAlpha - p.currentAlpha) * 0.15;

        const effectiveRadius = p.radius + proximity * 1.2;
        const effectiveStroke = 1.0 + proximity * 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, effectiveRadius, 0, Math.PI * 2);

        // Color styling: transition from subtle base ring to luminous warm orange (#f26522) on hover
        if (proximity > 0.05) {
          const orangeFactor = Math.min(1, proximity * 1.3);
          if (isLight) {
            // Light mode: transition from soft gray to crisp Synap orange
            ctx.strokeStyle = `rgba(242, 101, 34, ${p.currentAlpha * 0.95})`;
            ctx.fillStyle = `rgba(242, 101, 34, ${orangeFactor * 0.12})`;
          } else {
            // Dark mode: transition from subtle white ring to bright glowing orange
            ctx.strokeStyle = `rgba(242, 101, 34, ${p.currentAlpha})`;
            ctx.fillStyle = `rgba(242, 101, 34, ${orangeFactor * 0.18})`;
          }
          ctx.lineWidth = effectiveStroke;
          ctx.fill();
          ctx.stroke();

          // Delicate connecting synaptic threads between nearby hovered particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const p2dx = p2.x - mouse.x;
            const p2dy = p2.y - mouse.y;
            if (p2dx * p2dx + p2dy * p2dy < HOVER_RADIUS_SQ) {
              const pairDx = p.x - p2.x;
              const pairDy = p.y - p2.y;
              const pairDistSq = pairDx * pairDx + pairDy * pairDy;
              if (pairDistSq < 6400) {
                // < 80px distance between particles
                const lineAlpha = (1 - Math.sqrt(pairDistSq) / 80) * proximity * 0.28;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = isLight
                  ? `rgba(242, 101, 34, ${lineAlpha})`
                  : `rgba(242, 101, 34, ${lineAlpha * 1.2})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }
          }
        } else {
          // Default unhovered ring: crisp hollow circular ring matching user's image
          ctx.strokeStyle = isLight
            ? `rgba(0, 0, 0, ${p.currentAlpha})`
            : `rgba(255, 255, 255, ${p.currentAlpha})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener("mousemove", handleMouseMove as EventListener);
      parent.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      window.removeEventListener("resize", resize);
    };
  }, [isLight]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block size-full"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
