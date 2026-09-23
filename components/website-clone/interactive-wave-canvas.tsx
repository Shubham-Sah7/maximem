"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveWaveCanvasProps {
  isLight?: boolean;
  className?: string;
  dotSpacing?: number;
  glowColor?: string;
}

export default function InteractiveWaveCanvas({
  isLight = false,
  className = "",
  dotSpacing = 28,
  glowColor = "#f26522",
}: InteractiveWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Target mouse from pointer events
    const targetMouse = {
      x: -2000,
      y: -2000,
      active: false,
    };

    // Smooth interpolated mouse for silky-smooth wave tracking
    const smoothMouse = {
      x: -2000,
      y: -2000,
      prevX: -2000,
      prevY: -2000,
      vx: 0,
      vy: 0,
      speed: 0,
      activeWeight: 0, // lerps 0 -> 1 when mouse enters, 1 -> 0 when leaves
    };

    // Expanding ripples on click or energetic gestures
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      strength: number;
      decay: number;
    }
    const ripples: Ripple[] = [];

    const handleResize = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;

      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handlePointerMove = (e: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;

      // Only activate when pointer is within the canvas bounds
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        if (smoothMouse.activeWeight < 0.05) {
          smoothMouse.x = targetMouse.x;
          smoothMouse.y = targetMouse.y;
          smoothMouse.prevX = targetMouse.x;
          smoothMouse.prevY = targetMouse.y;
        }
        targetMouse.active = true;
      } else {
        targetMouse.active = false;
      }
    };

    const handlePointerEnter = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
      targetMouse.active = true;
    };

    const handlePointerLeave = () => {
      targetMouse.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // Only trigger ripple when click is within the canvas area
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        if (ripples.length < 8) {
          ripples.push({
            x: clickX,
            y: clickY,
            radius: 10,
            maxRadius: Math.max(width, height) * 0.75,
            speed: 5.5,
            strength: 4.2,
            decay: 0.97,
          });
        }
      }
    };

    // Listen on window so events fire even when mouse is over z-10 content layers
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("click", handleClick);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("pointerenter", handlePointerEnter, { passive: true });
      container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    let time = 0;

    const render = () => {
      time += 0.02;

      // ── 1. Smooth Interpolation of Mouse Cursor (Silky Inertia) ──
      if (targetMouse.active) {
        smoothMouse.activeWeight += (1 - smoothMouse.activeWeight) * 0.08;
      } else {
        smoothMouse.activeWeight += (0 - smoothMouse.activeWeight) * 0.04;
      }

      if (smoothMouse.activeWeight > 0.001) {
        smoothMouse.prevX = smoothMouse.x;
        smoothMouse.prevY = smoothMouse.y;

        // Exponential smoothing: 0.12 gives a butter-smooth fluid glide
        smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.12;
        smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.12;

        smoothMouse.vx = smoothMouse.x - smoothMouse.prevX;
        smoothMouse.vy = smoothMouse.y - smoothMouse.prevY;
        const currentSpeed = Math.hypot(smoothMouse.vx, smoothMouse.vy);
        smoothMouse.speed += (currentSpeed - smoothMouse.speed) * 0.15;
      }

      // Update active click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.strength *= r.decay;
        if (r.strength < 0.03 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      ctx.clearRect(0, 0, width, height);

      const spacing = dotSpacing;
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      const baseDotColor = isLight ? "rgba(24, 24, 27, 0.11)" : "rgba(255, 255, 255, 0.12)";
      const highlightColor = glowColor;

      // Hover influence settings
      const hoverRadius = 220;
      const hoverActive = smoothMouse.activeWeight;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = offsetX + c * spacing;
          const originY = offsetY + r * spacing;

          // ── A. Ambient Gentle Breathing S-Curve Wave ──
          const ambientWave =
            Math.sin(originX * 0.006 + time * 1.1) *
            Math.cos(originY * 0.008 + time * 0.8) *
            1.8;

          let dispX = 0;
          let dispY = ambientWave;
          let waveExcitement = 0;

          // ── B. Smooth Cursor Hover Wave Interaction ──
          if (hoverActive > 0.01) {
            const dx = originX - smoothMouse.x;
            const dy = originY - smoothMouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < hoverRadius) {
              const norm = dist / hoverRadius; // 0 (center) to 1 (outer edge)

              // Smooth cosine bell curve with zero derivative at edge (no sharp cutoff)
              const bell = Math.cos(norm * Math.PI * 0.5);
              const smoothWeight = bell * bell * hoverActive;

              // Harmonic ripple wave radiating smoothly from the cursor
              const rippleSine = Math.sin(norm * 8.5 - time * 3.6);

              // Direction angle away from cursor
              const angle = Math.atan2(dy, dx);

              // Fluid push + wave displacement modulated by cursor speed
              const dynamicPush = 4.0 + Math.min(smoothMouse.speed * 0.8, 8.0);
              const pushForce = smoothWeight * dynamicPush;
              const waveForce = smoothWeight * rippleSine * 3.2;

              dispX += Math.cos(angle) * (pushForce * 0.7 + waveForce);
              dispY += Math.sin(angle) * (pushForce * 0.7 + waveForce);
              waveExcitement += smoothWeight * 1.25;
            }
          }

          // ── C. Propagating Click Ripples ──
          for (let i = 0; i < ripples.length; i++) {
            const rip = ripples[i];
            const dx = originX - rip.x;
            const dy = originY - rip.y;
            const dist = Math.hypot(dx, dy);
            const distFromCrest = Math.abs(dist - rip.radius);

            const crestWidth = 42;
            if (distFromCrest < crestWidth) {
              const norm = 1 - distFromCrest / crestWidth;
              // Smooth half-cosine window
              const crestWeight = Math.cos((1 - norm) * Math.PI * 0.5);
              const angle = Math.atan2(dy, dx);
              const displacement = Math.sin(norm * Math.PI) * rip.strength * 3.5;

              dispX += Math.cos(angle) * displacement * crestWeight;
              dispY += Math.sin(angle) * displacement * crestWeight;
              waveExcitement += norm * (rip.strength / 2.8);
            }
          }

          const finalX = originX + dispX;
          const finalY = originY + dispY;

          // Subtle warm glow influence from bottom center
          const bottomGlowFactor = Math.max(0, (finalY - height * 0.45) / (height * 0.55));
          const totalExcitement = Math.min(Math.max(waveExcitement + bottomGlowFactor * 0.35, 0), 1);

          const dotRadius = Math.max(0.7, 1.15 + totalExcitement * 1.25);

          ctx.beginPath();
          ctx.arc(finalX, finalY, dotRadius, 0, Math.PI * 2);

          if (totalExcitement > 0.22) {
            const alpha = Math.min(0.25 + totalExcitement * 0.65, 0.95);
            ctx.fillStyle = totalExcitement > 0.52 ? highlightColor : isLight ? `rgba(242, 101, 34, ${alpha})` : `rgba(242, 120, 50, ${alpha})`;
          } else {
            ctx.fillStyle = baseDotColor;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
      if (container) {
        container.removeEventListener("pointerenter", handlePointerEnter);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [dotSpacing, glowColor, isLight]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
    >
      {/* 1. Base dark background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? "bg-[#fafaf9]" : "bg-[#0c0c0b]"
        }`}
      />

      {/* 2. Warm amber/orange horizon radial aura at bottom center */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 65% 50% at 50% 100%, rgba(242, 101, 34, 0.14) 0%, rgba(242, 101, 34, 0.04) 40%, rgba(250, 250, 249, 0) 75%)"
            : "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(242, 101, 34, 0.26) 0%, rgba(242, 101, 34, 0.09) 38%, rgba(12, 12, 11, 0) 75%)",
        }}
      />

      {/* 3. Secondary ambient floor wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 90% 25% at 50% 100%, rgba(242, 101, 34, 0.05) 0%, transparent 60%)"
            : "radial-gradient(ellipse 90% 28% at 50% 100%, rgba(242, 101, 34, 0.12) 0%, transparent 60%)",
        }}
      />

      {/* 4. Interactive Wave Dots Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full cursor-default"
      />

      {/* 5. Top subtle vignette for seamless header blending */}
      <div
        className={`absolute top-0 left-0 right-0 h-24 pointer-events-none ${
          isLight
            ? "bg-gradient-to-b from-[#fafaf9] to-transparent"
            : "bg-gradient-to-b from-[#0c0c0b] to-transparent"
        }`}
      />
    </div>
  );
}
