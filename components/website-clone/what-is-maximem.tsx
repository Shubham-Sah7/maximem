"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedHeading, ScrollReveal } from "@/components/ui/animated-text";

// ══════════════════════════════════════════════════════════════════════
// 1. SYNAP VISUAL: Minimal Geometric Memory Structure (Cubes & Nodes)
// ══════════════════════════════════════════════════════════════════════

function SynapVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-[165px] sm:h-[175px] lg:h-[180px] flex items-center justify-center overflow-hidden rounded-[4px] bg-[#0c0c0b]/70 border border-white/[0.04]">
      {/* Background ambient orange core illumination */}
      <div
        className={`absolute w-36 h-36 rounded-full bg-[#f26522]/15 blur-2xl pointer-events-none transition-all duration-500 ${
          isHovered ? "opacity-100 scale-110" : "opacity-60 scale-100"
        }`}
      />

      <svg
        className={`w-[230px] sm:w-[250px] h-[150px] transition-transform duration-500 ease-out ${
          isHovered ? "translate-y-[-2px] scale-[1.02]" : "translate-y-0 scale-100"
        }`}
        viewBox="0 0 260 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top Face Gradients */}
          <linearGradient id="synapTopGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8a50" />
            <stop offset="100%" stopColor="#f26522" />
          </linearGradient>
          <linearGradient id="synapTopSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f26522" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b33c08" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="synapGlassTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d2a20" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1f1814" stopOpacity="0.55" />
          </linearGradient>

          {/* Right Face Gradients */}
          <linearGradient id="synapRightBright" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d94d10" />
            <stop offset="100%" stopColor="#8c2e05" />
          </linearGradient>
          <linearGradient id="synapRightGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b1a12" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#140d09" stopOpacity="0.6" />
          </linearGradient>

          {/* Left Face Gradients */}
          <linearGradient id="synapLeftBright" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ba3d07" />
            <stop offset="100%" stopColor="#591c02" />
          </linearGradient>
          <linearGradient id="synapLeftGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22150f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#100a07" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* ── Background Perspective Grid Lines ── */}
        <g stroke="rgba(242, 101, 34, 0.12)" strokeWidth="0.75" strokeDasharray="3 3">
          <line x1="30" y1="140" x2="130" y2="85" />
          <line x1="230" y1="140" x2="130" y2="85" />
          <line x1="130" y1="20" x2="130" y2="160" />
          <line x1="50" y1="60" x2="210" y2="150" />
          <line x1="210" y1="60" x2="50" y2="150" />
        </g>

        {/* ── Isometric Data Connection Lines & Nodes ── */}
        <g stroke="#f26522" strokeWidth="1" opacity={isHovered ? 0.85 : 0.6}>
          <line x1="130" y1="52" x2="175" y2="78" />
          <line x1="130" y1="52" x2="85" y2="78" />
          <line x1="85" y1="78" x2="130" y2="104" />
          <line x1="175" y1="78" x2="130" y2="104" />
          <line x1="130" y1="104" x2="130" y2="138" />
        </g>

        {/* Connection Node Dots */}
        <circle cx="130" cy="52" r="2.2" fill="#ff8a50" />
        <circle cx="175" cy="78" r="2.2" fill="#ff8a50" />
        <circle cx="85" cy="78" r="2.2" fill="#ff8a50" />
        <circle cx="130" cy="104" r="2.8" fill="#f26522" />

        {/* ══════════════════════════════════════════════════════════
            ISOMETRIC CUBES CLUSTER
        ══════════════════════════════════════════════════════════ */}

        {/* 1. LEFT LOWER CUBE (Center around x=92, y=85) */}
        <g className="transition-transform duration-500 ease-out" style={{ transform: isHovered ? "translate(-1.5px, 1px)" : "none" }}>
          {/* Top Face */}
          <polygon points="92,70 114,83 92,96 70,83" fill="url(#synapGlassTop)" stroke="#f26522" strokeWidth="0.8" strokeOpacity="0.45" />
          {/* Left Face */}
          <polygon points="70,83 92,96 92,120 70,107" fill="url(#synapLeftGlass)" stroke="#f26522" strokeWidth="0.8" strokeOpacity="0.45" />
          {/* Right Face */}
          <polygon points="92,96 114,83 114,107 92,120" fill="url(#synapRightGlass)" stroke="#f26522" strokeWidth="0.8" strokeOpacity="0.45" />
        </g>

        {/* 2. RIGHT LOWER CUBE (Center around x=168, y=85) */}
        <g className="transition-transform duration-500 ease-out" style={{ transform: isHovered ? "translate(1.5px, 1px)" : "none" }}>
          {/* Top Face */}
          <polygon points="168,70 190,83 168,96 146,83" fill="url(#synapGlassTop)" stroke="#f26522" strokeWidth="0.8" strokeOpacity="0.45" />
          {/* Left Face */}
          <polygon points="146,83 168,96 168,120 146,107" fill="url(#synapLeftGlass)" stroke="#f26522" strokeWidth="0.8" strokeOpacity="0.45" />
          {/* Right Face */}
          <polygon points="168,96 190,83 190,107 168,120" fill="url(#synapRightGlass)" stroke="#f26522" strokeWidth="0.8" strokeOpacity="0.45" />
        </g>

        {/* 3. TOP MAIN CUBE (Brightest, Focal memory apex at x=130, y=42) */}
        <g className="transition-transform duration-500 ease-out" style={{ transform: isHovered ? "translate(0, -2.5px)" : "none" }}>
          {/* Top Face */}
          <polygon points="130,22 156,37 130,52 104,37" fill="url(#synapTopGlow)" stroke="#ffaa7a" strokeWidth="1" />
          {/* Left Face */}
          <polygon points="104,37 130,52 130,82 104,67" fill="url(#synapLeftBright)" stroke="#f26522" strokeWidth="0.85" />
          {/* Right Face */}
          <polygon points="130,52 156,37 156,67 130,82" fill="url(#synapRightBright)" stroke="#f26522" strokeWidth="0.85" />
        </g>

        {/* 4. FOREGROUND FRONT-CENTER CUBE (Anchor at x=130, y=105) */}
        <g className="transition-transform duration-500 ease-out" style={{ transform: isHovered ? "translate(0, 2px)" : "none" }}>
          {/* Top Face */}
          <polygon points="130,85 154,99 130,113 106,99" fill="url(#synapTopSubtle)" stroke="#ff8a50" strokeWidth="0.9" />
          {/* Left Face */}
          <polygon points="106,99 130,113 130,141 106,127" fill="url(#synapLeftBright)" stroke="#f26522" strokeWidth="0.85" />
          {/* Right Face */}
          <polygon points="130,113 154,99 154,127 130,141" fill="url(#synapRightBright)" stroke="#f26522" strokeWidth="0.85" />
        </g>

        {/* Inner geometric accent ring */}
        <circle cx="130" cy="113" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// 2. VITY VISUAL: Layered Translucent Structure (Private Memory Vault)
// ══════════════════════════════════════════════════════════════════════

function VityVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-[165px] sm:h-[175px] lg:h-[180px] flex items-center justify-center overflow-hidden rounded-[4px] bg-[#0c0c0b]/70 border border-white/[0.04]">
      {/* Subtle bottom orange ambient glow for private vault lock */}
      <div
        className={`absolute w-36 h-28 bottom-2 rounded-full bg-[#f26522]/12 blur-2xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-90" : "opacity-50"
        }`}
      />

      <svg
        className={`w-[230px] sm:w-[250px] h-[150px] transition-transform duration-500 ease-out ${
          isHovered ? "translate-y-[-2px] scale-[1.02]" : "translate-y-0 scale-100"
        }`}
        viewBox="0 0 260 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vityPlane1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="vityPlane2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="vityPlane3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f26522" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#331405" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* ── Background Vault Perspective Grid ── */}
        <g stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.75" strokeDasharray="3 3">
          <line x1="40" y1="145" x2="130" y2="90" />
          <line x1="220" y1="145" x2="130" y2="90" />
          <line x1="130" y1="15" x2="130" y2="155" />
        </g>

        {/* ══════════════════════════════════════════════════════════
            LAYERED TRANSLUCENT VAULT PLANES
        ══════════════════════════════════════════════════════════ */}

        {/* LAYER 3 (BOTTOM FOUNDATION PLANE - Orange Edge Highlight) */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? "translate(0, 3.5px)" : "none" }}
        >
          {/* Base Plane */}
          <polygon
            points="130,88 198,127 130,166 62,127"
            fill="url(#vityPlane3)"
            stroke="#f26522"
            strokeWidth="1.2"
            strokeOpacity={isHovered ? 0.95 : 0.75}
          />
          {/* Inner Geometric Key Lines */}
          <polygon
            points="130,102 176,128 130,154 84,128"
            fill="none"
            stroke="#f26522"
            strokeWidth="0.75"
            strokeOpacity="0.45"
            strokeDasharray="2 2"
          />
          <circle cx="130" cy="128" r="2" fill="#f26522" />
        </g>

        {/* LAYER 2 (MIDDLE TRANSLUCENT PLANE - Neutral Encryption) */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? "translate(0, 0px)" : "none" }}
        >
          {/* Translucent Sheet */}
          <polygon
            points="130,58 198,97 130,136 62,97"
            fill="url(#vityPlane2)"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
          />
          {/* Inner Coordinate Diamond */}
          <polygon
            points="130,72 176,98 130,124 84,98"
            fill="none"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="0.75"
          />
          {/* Center Vertex */}
          <circle cx="130" cy="98" r="1.5" fill="#d4d4d8" />
        </g>

        {/* LAYER 1 (TOP TRANSLUCENT PLANE - Polished Glass Shield) */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? "translate(0, -3.5px)" : "none" }}
        >
          {/* Top Glass Shield */}
          <polygon
            points="130,28 198,67 130,106 62,67"
            fill="url(#vityPlane1)"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="1.2"
          />
          {/* Inner Concentric Vault Framing */}
          <polygon
            points="130,42 176,68 130,94 84,68"
            fill="none"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="0.8"
          />
          <polygon
            points="130,52 156,67 130,82 104,67"
            fill="none"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="0.6"
          />
          {/* Top Apex Node */}
          <circle cx="130" cy="67" r="2" fill="#ffffff" />
        </g>

        {/* Vertical Axis Guide Line Through Vault Planes */}
        <line
          x1="130"
          y1="28"
          x2="130"
          y2="166"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="0.75"
          strokeDasharray="2 3"
        />
      </svg>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// MAIN "WHAT IS MAXIMEM?" COMPONENT (Expansive Full-Screen Architecture)
// ══════════════════════════════════════════════════════════════════════

interface WhatIsMaximemProps {
  isLight?: boolean;
}

export default function WhatIsMaximem({ isLight = true }: WhatIsMaximemProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<"synap" | "vity" | null>(null);

  // Viewport scroll reveal observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-name="WhatIsMaximemSection"
      aria-label="What is Maximem Products"
      className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 lg:py-24 select-none"
    >
      {/* ── Single Large Bordered Container ── */}
      <div
        className={`relative w-full rounded-[6px] overflow-hidden transition-all duration-700 ease-out border ${
          isLight
            ? "bg-white border-[#e4e4e7] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            : "bg-[#111110] border-white/[0.09]"
        } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Subtle architectural dot grid texture behind content */}
        <div
          className={`absolute inset-0 pointer-events-none ${isLight ? "opacity-20" : "opacity-30"}`}
          style={{
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)"
              : "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ── TOP EYEBROW BAR ────────────────────────────────────────── */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-10 py-3.5 flex items-center justify-between gap-4">
          {/* Left Eyebrow: OUR PRODUCTS */}
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
            <span className={`font-['Geist_Mono_Variable:Regular',sans-serif] font-medium text-[12px] tracking-[1.4px] uppercase ${
              isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
            }`}>
              OUR PRODUCTS
            </span>
          </div>

          {/* Right Tagline: BUILT FOR A MORE CAPABLE TOMORROW */}
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
            <span className="font-['Geist_Mono_Variable:Regular',sans-serif] font-medium text-[11.5px] text-[#71717a] tracking-[1.4px] uppercase">
              BUILT FOR A MORE CAPABLE TOMORROW
            </span>
          </div>
        </div>

        {/* ── TWO-COLUMN MAIN CONTENT (Spacious & Compact Vertical Rhythm) ── */}
        <div className="relative z-10 p-6 sm:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-[34%_66%] xl:grid-cols-[32%_68%] gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: Editorial Heading & 3 Supporting Statements
          ══════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between gap-6 sm:gap-8">
            <div>
              {/* Main Heading: "What is" + "Maximem?" (Orange) */}
              <AnimatedHeading
                text="What is Maximem?"
                className={`font-['Geist_Variable:Medium',sans-serif] text-[34px] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-medium leading-[1.08] tracking-[-0.035em] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}
                highlightWords={{ "Maximem?": "text-[#f26522]" }}
                delay={0.1}
              />

              {/* Exact Product Storytelling Description */}
              <ScrollReveal delay={0.2}>
                <p className={`mt-3.5 font-['Geist_Variable:Regular',sans-serif] text-[14.5px] sm:text-[15px] lg:text-[15.5px] leading-[24px] tracking-[-0.012em] max-w-[500px] ${
                  isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                }`}>
                  Maximem builds memory infrastructure: Synap, so the agents you build can remember, and Vity, a personal memory that stays encrypted even from us, so the AI you use can too.
                </p>
              </ScrollReveal>
            </div>

            {/* 3 Compact Supporting Statements */}
            <div className="flex flex-col gap-4 pt-1">
              <div>
                <p className={`font-['Geist_Variable:Medium',sans-serif] text-[15px] sm:text-[15.5px] font-medium tracking-[-0.01em] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}>
                  One memory layer
                </p>
                <p className="font-['Geist_Variable:Regular',sans-serif] text-[13px] sm:text-[13.5px] text-[#71717a] mt-0.5 tracking-tight">
                  For every AI interaction.
                </p>
              </div>

              <div>
                <p className={`font-['Geist_Variable:Medium',sans-serif] text-[15px] sm:text-[15.5px] font-medium tracking-[-0.01em] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}>
                  Privacy by default
                </p>
                <p className="font-['Geist_Variable:Regular',sans-serif] text-[13px] sm:text-[13.5px] text-[#71717a] mt-0.5 tracking-tight">
                  Encrypted, always.
                </p>
              </div>

              <div>
                <p className={`font-['Geist_Variable:Medium',sans-serif] text-[15px] sm:text-[15.5px] font-medium tracking-[-0.01em] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}>
                  A more capable tomorrow
                </p>
                <p className="font-['Geist_Variable:Regular',sans-serif] text-[13px] sm:text-[13.5px] text-[#71717a] mt-0.5 tracking-tight">
                  Memory that empowers.
                </p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: Two Side-by-Side Product Cards (Synap & Vity)
          ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* ── PRODUCT CARD 1: SYNAP ────────────────────────────── */}
            <div
              onMouseEnter={() => setHoveredCard("synap")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-[6px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group/card border ${
                isLight
                  ? "bg-[#fafafa] border-[#e4e4e7] hover:border-[#f26522]/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  : "bg-[#141413]/90 border-white/[0.08] hover:border-[#f26522]/45 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
              }`}
            >
              <div>
                {/* Tag Header */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-['Geist_Mono_Variable:Regular',sans-serif] text-[11px] font-semibold text-[#f26522] tracking-[1.4px] uppercase">
                    SYNAP CORE
                  </span>
                </div>

                {/* Abstract Geometric Memory Cubes Visual */}
                <SynapVisual isHovered={hoveredCard === "synap"} />

                {/* Product Titles */}
                <div className="mt-4">
                  <h3 className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[21px] sm:text-[22px] font-semibold tracking-tight ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}>
                    Maximem Synap
                  </h3>
                  <p className="font-['Geist_Variable:Regular',sans-serif] text-[13px] sm:text-[13.5px] text-[#71717a] mt-1 tracking-tight">
                    For organizations and development teams
                  </p>
                </div>

                {/* Clean Feature List */}
                <div className="mt-3.5 flex flex-col gap-2.5">
                  <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] leading-[20px] tracking-tight ${
                    isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  }`}>
                    Persistent memory + anticipatory retrieval
                  </p>
                  <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] leading-[20px] tracking-tight ${
                    isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  }`}>
                    Entity resolution + knowledge pipelines
                  </p>
                  <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] leading-[20px] tracking-tight ${
                    isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  }`}>
                    <span className="text-[#f26522] font-medium">92%</span> LongMemEval · <span className={`font-medium ${isLight ? "text-[#09090b]" : "text-white"}`}>93.2%</span> LoCoMo accuracy
                  </p>
                </div>
              </div>

              {/* CTA Button: Explore Synap → */}
              <div className="mt-5">
                <a
                  href="#synap"
                  className={`w-full h-[40px] rounded-[4px] border font-['Geist_Variable:Medium',sans-serif] text-[13.5px] flex items-center justify-center gap-2 transition-all duration-200 group/btn ${
                    isLight
                      ? "border-[#f26522] bg-[#fff7f2] hover:bg-[#f26522] hover:text-white text-[#f26522]"
                      : "border-[#f26522]/80 bg-[#171412] hover:bg-[#f26522]/15 text-white"
                  }`}
                >
                  <span>Explore Synap</span>
                  <span className="text-[#f26522] group-hover/btn:text-inherit transition-transform duration-200 group-hover/btn:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* ── PRODUCT CARD 2: VITY ─────────────────────────────── */}
            <div
              onMouseEnter={() => setHoveredCard("vity")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-[6px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group/card border ${
                isLight
                  ? "bg-[#fafafa] border-[#e4e4e7] hover:border-zinc-400 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  : "bg-[#141413]/90 border-white/[0.08] hover:border-white/25 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
              }`}
            >
              <div>
                {/* Tag Header */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`font-['Geist_Mono_Variable:Regular',sans-serif] text-[11px] font-semibold tracking-[1.4px] uppercase ${
                    isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                  }`}>
                    VITY VAULT
                  </span>
                </div>

                {/* Abstract Layered Memory Vault Visual */}
                <VityVisual isHovered={hoveredCard === "vity"} />

                {/* Product Titles */}
                <div className="mt-4">
                  <h3 className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[21px] sm:text-[22px] font-semibold tracking-tight ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}>
                    Maximem Vity
                  </h3>
                  <p className="font-['Geist_Variable:Regular',sans-serif] text-[13px] sm:text-[13.5px] text-[#71717a] mt-1 tracking-tight">
                    For power users and AI enthusiasts
                  </p>
                </div>

                {/* Clean Feature List */}
                <div className="mt-3.5 flex flex-col gap-2.5">
                  <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] leading-[20px] tracking-tight ${
                    isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  }`}>
                    Private cloud vault, encrypted by default
                  </p>
                  <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] leading-[20px] tracking-tight ${
                    isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  }`}>
                    Remembers preferences, work history & tasks
                  </p>
                  <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] leading-[20px] tracking-tight ${
                    isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  }`}>
                    Carries context across every AI you use
                  </p>
                </div>
              </div>

              {/* CTA Button: Explore Vity → */}
              <div className="mt-5">
                <a
                  href="#vity"
                  className={`w-full h-[40px] rounded-[4px] border font-['Geist_Variable:Medium',sans-serif] text-[13.5px] flex items-center justify-center gap-2 transition-all duration-200 group/btn ${
                    isLight
                      ? "border-[#e4e4e7] bg-white hover:bg-[#f4f4f5] text-[#09090b]"
                      : "border-white/20 bg-[#161615] hover:bg-white/[0.06] text-white"
                  }`}
                >
                  <span>Explore Vity</span>
                  <span className={`transition-transform duration-200 group-hover/btn:translate-x-1 ${
                    isLight ? "text-[#71717a] group-hover/btn:text-[#09090b]" : "text-[#a1a1aa] group-hover/btn:text-white"
                  }`}>
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BLOG CTA ────────────────────────────────────────── */}
        <div className="relative z-10 pb-5 pt-1 flex flex-col items-center justify-center">
          <a
            href="https://blog.maximem.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-['Geist_Mono_Variable:Regular',sans-serif] text-[12.5px] transition-colors duration-200 inline-flex items-center gap-2 group/blog tracking-tight cursor-pointer ${
              isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
            }`}
          >
            <span>Learn more on our blog</span>
            <span className="text-[#f26522] transition-transform duration-200 group-hover/blog:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
