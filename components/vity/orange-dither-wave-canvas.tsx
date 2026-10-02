"use client";

import React, { useEffect, useRef } from "react";

interface OrangeDitherWaveCanvasProps {
  className?: string;
  dotSize?: number;
  gap?: number;
}

export default function OrangeDitherWaveCanvas({
  className = "",
  dotSize = 7,
  gap = 3,
}: OrangeDitherWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId = 0;
    let W = 0;
    let H = 0;
    let dpr = 1;
    let scaled = false;

    // ── Mouse state ───────────────────────────────────────
    const mouse = {
      x: -9999,
      y: -9999,
      tx: -9999,
      ty: -9999,
      active: false,
      activeWeight: 0,
    };

    // ── Interactive click ripples ──────────────────────────
    interface Ripple {
      x: number;
      y: number;
      r: number;
      maxR: number;
      life: number;
    }
    const ripples: Ripple[] = [];

    // ── Resize handler (fixes double-scale bug) ───────────
    const resize = () => {
      const rect = container.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Reset transform before re-scaling
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.scale(dpr, dpr);
      scaled = true;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // ── Pointer handlers ──────────────────────────────────
    const onMove = (e: PointerEvent) => {
      const r = container.getBoundingClientRect();
      const inBounds =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;

      if (inBounds) {
        mouse.tx = e.clientX - r.left;
        mouse.ty = e.clientY - r.top;
        if (!mouse.active) {
          mouse.x = mouse.tx;
          mouse.y = mouse.ty;
        }
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const onLeave = () => {
      mouse.active = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      const r = container.getBoundingClientRect();
      if (
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom
      ) {
        ripples.push({
          x: e.clientX - r.left,
          y: e.clientY - r.top,
          r: 0,
          maxR: Math.max(W, H) * 0.45,
          life: 1.0,
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    // ── Fast value-noise hash (consistent per cell, smooth via lerp) ──
    const hash = (xi: number, yi: number): number => {
      let h = (xi * 374761393 + yi * 668265263) ^ 0x5bf03635;
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
    };

    // Smooth bilinear value-noise for per-cell time-drift offsets
    const valueNoise = (cx: number, cy: number): number => {
      const ix = Math.floor(cx);
      const iy = Math.floor(cy);
      const fx = cx - ix;
      const fy = cy - iy;
      const ux = fx * fx * (3 - 2 * fx); // smoothstep
      const uy = fy * fy * (3 - 2 * fy);
      return (
        hash(ix,     iy    ) * (1 - ux) * (1 - uy) +
        hash(ix + 1, iy    ) * ux       * (1 - uy) +
        hash(ix,     iy + 1) * (1 - ux) * uy +
        hash(ix + 1, iy + 1) * ux       * uy
      );
    };

    const cellSize = dotSize + gap;
    const startTime = performance.now();

    // Spark particles that drift upward
    interface Spark {
      c: number; // column
      r: number; // row (float)
      life: number;
      maxLife: number;
      speed: number;
    }
    const sparks: Spark[] = [];
    const MAX_SPARKS = 28;

    const spawnSpark = (cols: number) => {
      if (sparks.length >= MAX_SPARKS) return;
      sparks.push({
        c: Math.floor(Math.random() * cols),
        r: 0,
        life: 0,
        maxLife: 60 + Math.random() * 90,
        speed: 0.25 + Math.random() * 0.55,
      });
    };

    let frameCount = 0;

    const render = (now: number) => {
      if (!scaled) { animId = requestAnimationFrame(render); return; }

      const t = (now - startTime) * 0.001; // seconds

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.activeWeight += (1 - mouse.activeWeight) * 0.14;
        mouse.x += (mouse.tx - mouse.x) * 0.14;
        mouse.y += (mouse.ty - mouse.y) * 0.14;
      } else {
        mouse.activeWeight += (0 - mouse.activeWeight) * 0.08;
      }

      // Update click shockwave ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 7.5;
        rp.life -= 0.022;
        if (rp.life <= 0 || rp.r >= rp.maxR) {
          ripples.splice(i, 1);
        }
      }

      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / cellSize) + 1;
      const rows = Math.ceil(H / cellSize) + 1;

      // Spawn sparks periodically
      frameCount++;
      if (frameCount % 8 === 0) spawnSpark(cols);

      // Update spark positions
      for (let i = sparks.length - 1; i >= 0; i--) {
        sparks[i].r -= sparks[i].speed;
        sparks[i].life++;
        if (sparks[i].life > sparks[i].maxLife || sparks[i].r < -4) {
          sparks.splice(i, 1);
        }
      }

      // Build a sparse spark lookup for fast pixel-level check
      const sparkSet = new Set<string>();
      for (const s of sparks) {
        const lifeRatio = s.life / s.maxLife;
        if (lifeRatio < 0.1 || lifeRatio > 0.9) continue; // fade in/out
        const sc = s.c;
        const sr = Math.round(s.r);
        sparkSet.add(`${sc},${sr}`);
        // slight horizontal spread
        if (Math.random() > 0.6) sparkSet.add(`${sc + (Math.random() > 0.5 ? 1 : -1)},${sr}`);
      }

      const hoverRadius = 150;
      const hoverRadiusSq = hoverRadius * hoverRadius;

      for (let c = 0; c < cols; c++) {
        const x = c * cellSize;
        const nx = x / W; // 0..1

        // Concave saddle curve: crests high at edges, dips at center
        const dx = (nx - 0.5) * 2;                    // -1..+1
        const uCurve = Math.pow(Math.abs(dx), 1.7);   // 0 center, 1 edge

        // Multi-layer smooth harmonic motion — different frequencies & speeds
        const w1 = Math.sin(nx * 4.8  + t * 0.55)  * 22;
        const w2 = Math.cos(nx * 7.6  - t * 0.38)  * 14;
        const w3 = Math.sin(nx * 13.1 + t * 0.72)  * 7;
        const w4 = Math.cos(nx * 22.0 - t * 1.05)  * 3.5;
        const w5 = Math.sin(nx * 2.3  + t * 0.22)  * 11; // very slow large swell

      // Base crest: valley at center (0.83h), crests high at sides (0.44h)
      const baseCrestY = H * 0.83 - uCurve * (H * 0.39) + w1 + w2 + w3 + w4 + w5;
      const crestY = baseCrestY;

      for (let r = 0; r < rows; r++) {
        const y = r * cellSize;
        const distFromCrest = y - crestY;
        const cellMidX = x + dotSize * 0.5;
        const cellMidY = y + dotSize * 0.5;

        // Per-cell smooth noise offset for temporal shimmer
        const cellNoise = valueNoise(c * 0.18, r * 0.18 + t * 0.45); // slow drift
        const shimmer = cellNoise; // 0..1

        // Depth below crest: 0 at crest, 1 far below
        const depth = Math.max(0, Math.min(1, distFromCrest / (H * 0.42)));

        let alpha = 0;
        let draw = false;
        let isBright = false;
        let isSpark = false;

        // Check spark lookup
        if (sparkSet.has(`${c},${r}`)) {
          draw = true;
          isSpark = true;
          alpha = 0.85 + shimmer * 0.15;
        } else if (distFromCrest > 0) {
          // Below the wave crest — densifying fill
          const fillProb = Math.min(1, 0.32 + depth * 0.98 + (shimmer - 0.5) * 0.18);
          const rnd = hash(c + 7, r + 13);
          if (rnd < fillProb) {
            draw = true;
            alpha = 0.38 + depth * 0.62 + (shimmer - 0.5) * 0.12;
            isBright = rnd > 0.76 + (shimmer - 0.5) * 0.06;
          }
        } else {
          // Above the wave crest — exponential scatter with per-cell noise drift
          const distAbove = -distFromCrest;
          const reach = 90 + uCurve * 85; // reaches higher at edges, stays clear of center
          if (distAbove < reach) {
            const decay = Math.exp(-distAbove / 26);
            const prob = decay * (0.36 + shimmer * 0.16);
            const rnd = hash(c, r + 31);
            if (rnd < prob) {
              draw = true;
              alpha = Math.max(0.12, (1 - distAbove / reach) * (0.50 + shimmer * 0.22));
              isBright = rnd > 0.55;
            }
          }
        }

        // Only draw cells that naturally exist — NEVER spawn new dots on hover
        if (draw) {
          let drawX = x;
          let drawY = y;

          // ── Smooth Cursor Movement: Only Existing Dots Move ──
          if (mouse.activeWeight > 0.005) {
            const mdx = cellMidX - mouse.x;
            const mdy = cellMidY - mouse.y;
            const distSq = mdx * mdx + mdy * mdy;
            const hoverRadius = 140;

            if (distSq < hoverRadius * hoverRadius && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const norm = dist / hoverRadius; // 0 (center) -> 1 (edge)
              // Smooth cosine bell curve with 0 derivative at edge
              const bell = Math.cos(norm * Math.PI * 0.5);
              const force = bell * bell * mouse.activeWeight;

              // Gentle fluid push away from cursor: max 14px displacement
              const maxShift = 14;
              drawX += (mdx / dist) * force * maxShift;
              drawY += (mdy / dist) * force * maxShift;
            }
          }

          // Click shockwave displacement on existing dots
          if (ripples.length > 0) {
            for (const rp of ripples) {
              const rdx = cellMidX - rp.x;
              const rdy = cellMidY - rp.y;
              const rd = Math.hypot(rdx, rdy);
              const ringDist = Math.abs(rd - rp.r);
              const crestWidth = 32;
              if (ringDist < crestWidth && rd > 0.01) {
                const norm = 1 - ringDist / crestWidth;
                const bell = Math.cos((1 - norm) * Math.PI * 0.5);
                const shift = bell * rp.life * 8;
                drawX += (rdx / rd) * shift;
                drawY += (rdy / rd) * shift;
              }
            }
          }

          // Maintain authentic brand orange palette — no jarring white/cream blobs
          if (isSpark) {
            ctx.fillStyle = `rgba(255, 185, 95, ${alpha})`;
          } else if (isBright) {
            ctx.fillStyle = `rgba(255, 148, 68, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(242, 101, 34, ${alpha})`;
          }

          ctx.fillRect(drawX, drawY, dotSize, dotSize);
        }
      }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      ro.disconnect();
    };
  }, [dotSize, gap]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      {/* 1. Rich dark base */}
      <div className="absolute inset-0 bg-[#0c0c0b]" />

      {/* 2. Subtle engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Coordinate crosshair markers */}
      <div className="absolute top-24 left-[14%] text-white/[0.06] font-mono text-[11px] select-none pointer-events-none">+</div>
      <div className="absolute top-24 right-[14%] text-white/[0.06] font-mono text-[11px] select-none pointer-events-none">+</div>
      <div className="absolute top-1/2 left-[7%] text-white/[0.06] font-mono text-[11px] select-none pointer-events-none">+</div>
      <div className="absolute top-1/2 right-[7%] text-white/[0.06] font-mono text-[11px] select-none pointer-events-none">+</div>

      {/* 3. The animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block size-full z-0" />

      {/* 4. Cinematic radial vignette — lets hero copy read clearly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 78% 55% at 50% 28%, rgba(12,12,11,0.88) 0%, rgba(12,12,11,0.52) 55%, rgba(12,12,11,0.15) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}
