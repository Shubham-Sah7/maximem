"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  ChatGPTIcon,
  ClaudeIcon,
  GrokIcon,
  GeminiIcon,
  PerplexityIcon,
  TechArrowRightIcon,
} from "./app-icons";
import {
  AnimatedEyebrow,
  AnimatedHeading,
  usePrefersReducedMotion,
  cardHoverMotion,
} from "./vity-motion";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({ number, title, description, delay = 0 }: FeatureCardProps) {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={prefersReduced ? {} : cardHoverMotion.whileHover}
      className="relative rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-colors duration-200 group flex flex-col justify-between min-h-[140px] flex-1 cursor-default"
    >
      {/* Top Row: Number on left, Arrow button on right */}
      <div className="flex items-center justify-between w-full mb-3">
        <span className="font-mono text-[12px] text-[#71717a] font-medium select-none">
          {number}
        </span>
        <motion.div
          whileHover={prefersReduced ? {} : { x: 2 }}
          transition={{ duration: 0.15 }}
          className="size-7 sm:size-7.5 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/25 transition-all"
        >
          <TechArrowRightIcon className="size-3.5" />
        </motion.div>
      </div>

      {/* Content: Title & description */}
      <div className="flex-1 min-w-0">
        <h3 className="font-['Geist',sans-serif] text-[16px] sm:text-[17px] font-semibold text-white tracking-tight leading-snug">
          {title}
        </h3>
        <p className="font-['Geist',sans-serif] text-[13px] sm:text-[13.5px] leading-[20px] text-[#a1a1aa] mt-1.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function UniversalMemorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerVisualRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // GSAP ScrollTrigger Sequence for central vault, SVG lines drawing, and subtle parallax
  useEffect(() => {
    if (prefersReduced || !sectionRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Prepare SVG path strokes
      const traceLines = svgRef.current?.querySelectorAll<SVGGeometryElement>(".circuit-trace");
      const endpointNodes = svgRef.current?.querySelectorAll(".circuit-node");
      const chips = centerVisualRef.current?.querySelectorAll(".model-chip");

      if (traceLines && traceLines.length > 0) {
        traceLines.forEach((line) => {
          const len = line.getTotalLength ? line.getTotalLength() : 250;
          gsap.set(line, {
            strokeDasharray: len,
            strokeDashoffset: len,
          });
        });
      }

      if (endpointNodes && endpointNodes.length > 0) {
        gsap.set(endpointNodes, { scale: 0, opacity: 0, transformOrigin: "center center" });
      }

      if (chips && chips.length > 0) {
        gsap.set(chips, { scale: 0.9, opacity: 0 });
      }

      // Master entrance timeline triggered when section enters 75% of viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // Step A: Central vault scales and fades in
      tl.fromTo(
        ".vault-center-core",
        { scale: 0.92, opacity: 0, transformOrigin: "center center" },
        { scale: 1, opacity: 1, duration: 0.75, ease: "power3.out" },
        0.1
      );

      // Step B: Draw connection lines (stroke-dashoffset -> 0)
      if (traceLines && traceLines.length > 0) {
        tl.to(
          traceLines,
          {
            strokeDashoffset: 0,
            duration: 0.9,
            stagger: 0.05,
            ease: "power2.out",
          },
          0.35
        );
      }

      // Step C: Endpoint nodes pop in
      if (endpointNodes && endpointNodes.length > 0) {
        tl.to(
          endpointNodes,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: "back.out(1.5)",
          },
          0.8
        );
      }

      // Step D: 5 floating model chips reveal
      if (chips && chips.length > 0) {
        tl.to(
          chips,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
          },
          0.5
        );
      }

      // 2. Subtle Parallax on Center Visual (max 8px, controlled)
      if (centerVisualRef.current) {
        gsap.to(centerVisualRef.current, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0B0C] py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] select-none overflow-hidden scroll-mt-24"
    >
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="mb-4">
            <AnimatedEyebrow number="04" category="UNIVERSAL AI MEMORY" />
          </div>

          <AnimatedHeading
            primaryText="Universal"
            highlightText="AI Memory"
            subtitle="Stop repeating yourself. One secure memory vault across all your AI models and workflows."
            align="center"
          />
        </div>

      {/* ── 3-COLUMN ARCHITECTURE LAYOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch relative">
        
        {/* ── LEFT COLUMN (01, 03, 05) ── */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5 z-20">
          <FeatureCard
            number="01"
            title="Universal Memory"
            description="One memory bank across ChatGPT, Claude, Gemini, etc. Never repeat context again."
            delay={0.25}
          />
          <FeatureCard
            number="03"
            title="Instant Context"
            description="AI models instantly understand your projects, preferences, and conversation history."
            delay={0.35}
          />
          <FeatureCard
            number="05"
            title="Cross-Platform"
            description="Works with web, mobile, and API interfaces of all major AI platforms."
            delay={0.45}
          />
        </div>

        {/* ── CENTER VISUAL: CLEAN & SYMMETRICAL 3D MEMORY VAULT & MODEL CONSTELLATION ── */}
        <div
          ref={centerVisualRef}
          className="lg:col-span-4 relative flex items-center justify-center min-h-[480px] w-full max-w-[460px] mx-auto my-6 lg:my-0 select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,101,34,0.14)_0%,rgba(242,101,34,0.03)_50%,transparent_70%)] pointer-events-none" />

          {/* Clean Self-Contained SVG Architecture Canvas */}
          <svg
            ref={svgRef}
            className="w-full h-[480px] pointer-events-none z-10 block"
            viewBox="0 0 460 480"
            fill="none"
          >
            <defs>
              {/* Core Orange Linear Gradient */}
              <linearGradient id="coreOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8533" />
                <stop offset="60%" stopColor="#f26522" />
                <stop offset="100%" stopColor="#cf4a10" />
              </linearGradient>

              <linearGradient id="coreOrangeGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d95415" />
                <stop offset="100%" stopColor="#963305" />
              </linearGradient>

              {/* Top Slab Gradient */}
              <linearGradient id="topSlabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c2c28" />
                <stop offset="50%" stopColor="#20201d" />
                <stop offset="100%" stopColor="#141412" />
              </linearGradient>

              {/* Soft Ambient Core Glow Filter */}
              <filter id="coreOrangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── SUBTLE ORBITAL RINGS (Unifies models & memory into one system) ── */}
            <ellipse
              cx="230"
              cy="240"
              rx="160"
              ry="140"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <ellipse
              cx="230"
              cy="240"
              rx="105"
              ry="90"
              fill="none"
              stroke="rgba(242,101,34,0.12)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />

            {/* ── 5 DIRECT CONSTELLATION CONNECTION LINES ── */}
            {/* 1. Vault to Claude (Top) */}
            <line className="circuit-trace" x1="230" y1="170" x2="230" y2="85" stroke="#f26522" strokeWidth="1.4" strokeOpacity="0.4" />
            <line x1="230" y1="170" x2="230" y2="85" stroke="#f26522" strokeWidth="1.6" strokeDasharray="4 8" className="animate-synap-connector-flow" />
            <circle className="circuit-node" cx="230" cy="85" r="3" fill="#f26522" />
            <circle cx="230" cy="170" r="2.5" fill="#f26522" />

            {/* 2. Vault to ChatGPT (Upper-Left) */}
            <line className="circuit-trace" x1="180" y1="195" x2="98" y2="158" stroke="#f26522" strokeWidth="1.4" strokeOpacity="0.4" />
            <line x1="180" y1="195" x2="98" y2="158" stroke="#f26522" strokeWidth="1.6" strokeDasharray="4 8" className="animate-synap-connector-flow" />
            <circle className="circuit-node" cx="98" cy="158" r="3" fill="#f26522" />
            <circle cx="180" cy="195" r="2.5" fill="#f26522" />

            {/* 3. Vault to Gemini (Upper-Right) */}
            <line className="circuit-trace" x1="280" y1="195" x2="362" y2="158" stroke="#f26522" strokeWidth="1.4" strokeOpacity="0.4" />
            <line x1="280" y1="195" x2="362" y2="158" stroke="#f26522" strokeWidth="1.6" strokeDasharray="4 8" className="animate-synap-connector-flow" />
            <circle className="circuit-node" cx="362" cy="158" r="3" fill="#f26522" />
            <circle cx="280" cy="195" r="2.5" fill="#f26522" />

            {/* 4. Vault to Perplexity (Lower-Left) */}
            <line className="circuit-trace" x1="180" y1="255" x2="98" y2="322" stroke="#f26522" strokeWidth="1.4" strokeOpacity="0.4" />
            <line x1="180" y1="255" x2="98" y2="322" stroke="#f26522" strokeWidth="1.6" strokeDasharray="4 8" className="animate-synap-connector-flow" />
            <circle className="circuit-node" cx="98" cy="322" r="3" fill="#f26522" />
            <circle cx="180" cy="255" r="2.5" fill="#f26522" />

            {/* 5. Vault to Grok (Lower-Right) */}
            <line className="circuit-trace" x1="280" y1="255" x2="362" y2="322" stroke="#f26522" strokeWidth="1.4" strokeOpacity="0.4" />
            <line x1="280" y1="255" x2="362" y2="322" stroke="#f26522" strokeWidth="1.6" strokeDasharray="4 8" className="animate-synap-connector-flow" />
            <circle className="circuit-node" cx="362" cy="322" r="3" fill="#f26522" />
            <circle cx="280" cy="255" r="2.5" fill="#f26522" />

            {/* ── 3D ISOMETRIC MEMORY VAULT STACK (CENTER) ── */}
            <g className="vault-center-core">
              {/* Foundation ground drop shadow */}
              <ellipse cx="230" cy="285" rx="72" ry="24" fill="#000000" opacity="0.6" />

              {/* 1. BOTTOM SLAB (Encrypted Storage Layer) */}
              <polygon points="162,245 230,280 230,292 162,257" fill="#0e0e0c" />
              <polygon points="230,280 298,245 298,257 230,292" fill="#080807" />
              <polyline points="162,245 230,280 298,245" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

              {/* 2. MIDDLE GLOWING ORANGE CORE (Synap Memory Engine) */}
              <ellipse cx="230" cy="242" rx="55" ry="26" fill="#f26522" opacity="0.4" filter="url(#coreOrangeGlow)" />
              <polygon points="167,225 230,257 230,268 167,236" fill="url(#coreOrangeGrad)" />
              <polygon points="230,257 293,225 293,236 230,268" fill="url(#coreOrangeGradDark)" />
              <line x1="230" y1="257" x2="230" y2="268" stroke="#ffb380" strokeWidth="1" />

              {/* 3. TOP SLAB (Active AI Context Engine) */}
              <polygon points="162,205 230,240 230,250 162,215" fill="#151513" />
              <polygon points="230,240 298,205 298,215 230,250" fill="#0f0f0d" />
              <polygon points="230,170 298,205 230,240 162,205" fill="url(#topSlabGrad)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeLinejoin="round" />
              <polygon points="230,180 286,205 230,230 174,205" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" strokeLinejoin="round" />
              <line x1="230" y1="240" x2="230" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

              {/* Central Emitter / Glowing Diode on top slab */}
              <circle cx="230" cy="205" r="9" fill="rgba(242,101,34,0.15)" />
              <circle cx="230" cy="205" r="3.5" fill="#f26522" className="animate-pulse" />
              <circle cx="230" cy="205" r="1.5" fill="#ffffff" />
            </g>
          </svg>

          {/* ── 5 FLOATING MODEL CHIPS (SYMMETRICAL, CLEAN & INTERACTIVE) ── */}

          {/* 1. TOP: Claude */}
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.08 }}
            className="model-chip group absolute top-[6%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
          >
            <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[15px] bg-[#161614] border border-white/[0.12] group-hover:border-[#f26522]/70 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center justify-center p-3 transition-all duration-200">
              <ClaudeIcon className="size-full" />
            </div>
            <span className="mt-1 text-[10px] font-mono text-[#71717a] group-hover:text-white transition-colors tracking-tight">
              Claude
            </span>
          </motion.div>

          {/* 2. UPPER-LEFT: ChatGPT */}
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.08 }}
            className="model-chip group absolute top-[22%] left-[10%] -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
          >
            <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[15px] bg-[#161614] border border-white/[0.12] group-hover:border-[#f26522]/70 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center justify-center p-3 transition-all duration-200">
              <ChatGPTIcon className="size-full" />
            </div>
            <span className="mt-1 text-[10px] font-mono text-[#71717a] group-hover:text-white transition-colors tracking-tight">
              ChatGPT
            </span>
          </motion.div>

          {/* 3. UPPER-RIGHT: Gemini */}
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.08 }}
            className="model-chip group absolute top-[22%] right-[10%] translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
          >
            <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[15px] bg-[#161614] border border-white/[0.12] group-hover:border-[#f26522]/70 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center justify-center p-2.5 transition-all duration-200">
              <GeminiIcon className="size-full" />
            </div>
            <span className="mt-1 text-[10px] font-mono text-[#71717a] group-hover:text-white transition-colors tracking-tight">
              Gemini
            </span>
          </motion.div>

          {/* 4. LOWER-LEFT: Perplexity */}
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.08 }}
            className="model-chip group absolute bottom-[22%] left-[10%] -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
          >
            <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[15px] bg-[#161614] border border-white/[0.12] group-hover:border-[#f26522]/70 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center justify-center p-3 transition-all duration-200">
              <PerplexityIcon className="size-full" />
            </div>
            <span className="mt-1 text-[10px] font-mono text-[#71717a] group-hover:text-white transition-colors tracking-tight">
              Perplexity
            </span>
          </motion.div>

          {/* 5. LOWER-RIGHT: Grok */}
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.08 }}
            className="model-chip group absolute bottom-[22%] right-[10%] translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
          >
            <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[15px] bg-[#161614] border border-white/[0.12] group-hover:border-[#f26522]/70 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center justify-center p-3 transition-all duration-200">
              <GrokIcon className="size-full" />
            </div>
            <span className="mt-1 text-[10px] font-mono text-[#71717a] group-hover:text-white transition-colors tracking-tight">
              Grok
            </span>
          </motion.div>

          {/* ── STATUS PILL (Reinforces Purpose cleanly) ── */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-[#141412]/90 border border-white/[0.08] backdrop-blur-md shadow-sm pointer-events-none whitespace-nowrap">
            <span className="size-1.5 rounded-full bg-[#f26522] animate-pulse" />
            <span className="text-[11px] font-mono text-[#a1a1aa] tracking-tight uppercase">
              Universal Memory Bus
            </span>
          </div>
        </div>

        {/* ── RIGHT COLUMN (02, 04, 06) ── */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5 z-20">
          <FeatureCard
            number="02"
            title="Private & Secure"
            description="Your data stays encrypted and private. We never read your conversations or train on your data."
            delay={0.3}
          />
          <FeatureCard
            number="04"
            title="Real-time Sync"
            description="Instant synchronization across all platforms. Start a conversation on ChatGPT, continue on Claude."
            delay={0.4}
          />
          <FeatureCard
            number="06"
            title="Zero-Knowledge"
            description="End-to-end encryption ensures only you can access your AI memory. Not even we can see it."
            delay={0.5}
          />
        </div>

      </div>

    </div>
  </section>
  );
}
