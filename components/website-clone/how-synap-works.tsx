"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/animated-text";

interface HowSynapWorksProps {
  isLight?: boolean;
}

export default function HowSynapWorks({ isLight = true }: HowSynapWorksProps) {
  const [isInView, setIsInView] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Automatic gentle stage cycle (Write Ingest -> Structure Extract -> Tri-Store Storage -> Anticipatory Retrieval)
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      data-name="HowSynapWorksSection"
      aria-label="How Synap actually works"
      className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 lg:py-16 select-none"
    >
      {/* ── Section Header ── */}
      <div className="max-w-[1100px] mx-auto mb-8 sm:mb-12">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-2.5 transition-all duration-500 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
          }`}
        >
          <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
          <span className="font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] font-mono text-[#a1a1aa] tracking-[1.4px] uppercase font-medium">
            HOW IT WORKS
          </span>
        </div>

        {/* Animated Heading */}
        <div className="mt-3">
          <AnimatedHeading
            text="How Synap actually works"
            className={`font-['Geist_Variable:Medium',sans-serif] text-[34px] sm:text-[42px] md:text-[48px] tracking-[-0.03em] leading-[1.12] ${
              isLight ? "text-[#09090b]" : "text-white"
            }`}
            delay={0.1}
          />
        </div>

        {/* Editorial Description */}
        <p
          className={`mt-4 font-['Geist_Variable:Regular',sans-serif] text-[16px] sm:text-[17.5px] leading-[28px] tracking-[-0.015em] max-w-[840px] transition-all duration-500 ease-out delay-200 ${
            isLight ? "text-[#52525b]" : "text-[#d4d4d8]"
          } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          A turn does not land in a database. It is ingested, its meaning is extracted into structure rather than raw text, and it is stored across a vector, graph, and file store, asynchronously, so the write call returns before any of that happens and never blocks your agent. Retrieval then nets across all three stores at once, and most reads never leave your process, because context is pre-fetched while the conversation is still going. The context management pipeline below is where the accuracy and latency numbers come from.
        </p>
      </div>

      {/* ── Interactive Architecture Pipeline Canvas ── */}
      <div
        className={`w-full max-w-[1100px] mx-auto rounded-[12px] p-5 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-700 ease-out delay-300 ${
          isLight
            ? "bg-[#fafafa] border border-[#e4e4e7] shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            : "bg-[#111110] border border-white/[0.09] shadow-[0_25px_65px_rgba(0,0,0,0.65)]"
        }`}
      >
        {/* Subtle background technical grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)"
              : "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Status Mode Indicator in Canvas Top Right */}
        <div className="absolute top-4 right-5 sm:top-6 sm:right-8 z-20 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26522] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f26522]"></span>
          </span>
          <span className={`text-[11px] font-mono uppercase tracking-wider hidden sm:inline ${
            isLight ? "text-[#71717a]" : "text-[#8e8e93]"
          }`}>
            {activeStage === 0 && "Step 1: Async Ingest"}
            {activeStage === 1 && "Step 2: Structure Extract"}
            {activeStage === 2 && "Step 3: Tri-Store Storage"}
            {activeStage === 3 && "Step 4: Anticipatory Recall (<15ms)"}
          </span>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            ARCHITECTURE DIAGRAM CONTAINER
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="relative w-full overflow-x-auto pb-4 pt-2">
          <div className="min-w-[980px] relative h-[540px]">
            {/* ── 1. OUTER DOTTED BOUNDING BOX: 'SYNAP' ──────────────────── */}
            <div
              className={`absolute left-[240px] right-2 top-[20px] bottom-4 rounded-[10px] border border-dashed p-4 transition-colors duration-300 ${
                isLight ? "border-zinc-300 bg-white/70" : "border-white/[0.12] bg-[#0c0c0b]/40"
              }`}
            >
              {/* Box Label: 'SYNAP' */}
              <span className={`absolute -top-3 left-4 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold tracking-widest text-[#f26522] border border-[#f26522]/40 uppercase shadow-sm ${
                isLight ? "bg-white" : "bg-[#111110]"
              }`}>
                SYNAP
              </span>

              {/* Top Banner: 'CUSTOM CONTEXT ARCHITECTURE' */}
              <div
                onMouseEnter={() => setHoveredNode("custom_arch")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`w-full rounded-[6px] border border-dashed py-2.5 px-4 text-center transition-all duration-300 cursor-default ${
                  hoveredNode === "custom_arch"
                    ? "border-[#f26522] bg-[#f26522]/10 shadow-[0_0_20px_rgba(242,101,34,0.18)]"
                    : isLight
                    ? "border-[#f26522]/40 bg-[#fff7f2]"
                    : "border-[#f26522]/45 bg-[#f26522]/[0.03]"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
                  <span className="text-[12px] font-mono font-bold tracking-wider text-[#f26522] uppercase">
                    CUSTOM CONTEXT ARCHITECTURE
                  </span>
                </div>
                <p className={`text-[11px] font-mono mt-0.5 tracking-tight ${
                  isLight ? "text-[#71717a]" : "text-[#8e8e93]"
                }`}>
                  generated per agent · governs extraction, scoping, retention and more...
                </p>
              </div>

              {/* Vertical connector lines from Top Banner to Ingest / Extract / Store */}
              <svg className="absolute left-0 right-0 top-[62px] h-[40px] w-full pointer-events-none" fill="none">
                <line x1="60" y1="0" x2="60" y2="40" stroke="#f26522" strokeOpacity="0.25" strokeDasharray="3 3" />
                <line x1="200" y1="0" x2="200" y2="40" stroke="#f26522" strokeOpacity="0.25" strokeDasharray="3 3" />
                <line x1="340" y1="0" x2="340" y2="40" stroke="#f26522" strokeOpacity="0.25" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* ── 2. LEFT NODE: 'YOUR AGENT' ──────────────────────────────── */}
            <div
              onMouseEnter={() => setHoveredNode("agent")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute left-0 top-[70px] w-[86px] h-[390px] rounded-[10px] bg-gradient-to-b from-[#f26522] to-[#d94d10] p-3 flex flex-col items-center justify-center text-center cursor-pointer shadow-[0_8px_32px_rgba(242,101,34,0.35)] transition-transform duration-200 hover:scale-[1.02] z-20"
            >
              {/* Subtle top indicator dot */}
              <div className="size-2 rounded-full bg-white/80 mb-auto shadow-sm" />
              
              <span className="font-['Geist_Variable:Semi_Bold',sans-serif] text-[20px] font-semibold text-white tracking-tight [writing-mode:vertical-rl] rotate-180 select-none">
                Your Agent
              </span>

              {/* Subtle bottom indicator dot */}
              <div className="size-2 rounded-full bg-white/80 mt-auto shadow-sm" />
            </div>

            {/* ── 3. NODE: 'SYNAP SDK' ─────────────────────────────────────── */}
            <div
              onMouseEnter={() => setHoveredNode("sdk")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[130px] top-[215px] w-[110px] h-[80px] rounded-[8px] border p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "sdk" || activeStage === 0 || activeStage === 3
                  ? "bg-[#1f1d1a] border-[#f26522] shadow-[0_0_24px_rgba(242,101,34,0.35)] scale-105"
                  : isLight
                  ? "bg-white border-[#e4e4e7] shadow-sm"
                  : "bg-[#181816] border-white/[0.12]"
              }`}
            >
              <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[15px] font-semibold leading-tight ${
                hoveredNode === "sdk" || activeStage === 0 || activeStage === 3 || !isLight
                  ? "text-white"
                  : "text-[#09090b]"
              }`}>
                Synap SDK
              </span>
              <span className="font-mono text-[9.5px] text-[#8e8e93] mt-1">
                Client Layer
              </span>
            </div>

            {/* ── 4. PIPELINE ROW: INGEST -> EXTRACT -> STORE ──────────────── */}
            {/* Ingest Node */}
            <div
              onMouseEnter={() => setHoveredNode("ingest")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[270px] top-[125px] w-[112px] h-[64px] rounded-[6px] border p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "ingest" || activeStage === 0
                  ? "bg-[#1f1d1a] border-[#f26522] shadow-[0_0_20px_rgba(242,101,34,0.3)] scale-105"
                  : isLight
                  ? "bg-white border-[#e4e4e7] shadow-sm"
                  : "bg-[#181816] border-white/[0.12]"
              }`}
            >
              <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[14px] font-semibold ${
                hoveredNode === "ingest" || activeStage === 0 || !isLight
                  ? "text-white"
                  : "text-[#09090b]"
              }`}>
                Ingest
              </span>
              <span className="font-mono text-[10px] text-[#8e8e93] mt-0.5">
                async write
              </span>
            </div>

            {/* Extract Node (Signature Highlighted Box) */}
            <div
              onMouseEnter={() => setHoveredNode("extract")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[410px] top-[125px] w-[130px] h-[64px] rounded-[6px] border border-[#f26522] p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "extract" || activeStage === 1
                  ? isLight
                    ? "bg-[#fff2ea] shadow-[0_0_24px_rgba(242,101,34,0.3)] scale-105"
                    : "bg-[#251b14] shadow-[0_0_28px_rgba(242,101,34,0.45)] scale-105"
                  : isLight
                  ? "bg-[#fff7f2] shadow-sm"
                  : "bg-[#1c1612] shadow-[0_0_14px_rgba(242,101,34,0.18)]"
              }`}
            >
              <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[14px] font-semibold ${
                isLight ? "text-[#09090b]" : "text-white"
              }`}>
                Extract
              </span>
              <span className="font-mono text-[10px] text-[#f26522] mt-0.5 font-medium">
                structure, not raw text
              </span>
            </div>

            {/* Store Node */}
            <div
              onMouseEnter={() => setHoveredNode("store")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[570px] top-[125px] w-[112px] h-[64px] rounded-[6px] border p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "store" || activeStage === 2
                  ? "bg-[#1f1d1a] border-[#f26522] shadow-[0_0_20px_rgba(242,101,34,0.3)] scale-105"
                  : isLight
                  ? "bg-white border-[#e4e4e7] shadow-sm"
                  : "bg-[#181816] border-white/[0.12]"
              }`}
            >
              <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[14px] font-semibold ${
                hoveredNode === "store" || activeStage === 2 || !isLight
                  ? "text-white"
                  : "text-[#09090b]"
              }`}>
                Store
              </span>
              <span className="font-mono text-[10px] text-[#8e8e93] mt-0.5">
                vector · graph · file
              </span>
            </div>

            {/* ── 5. TRI-STORE STORAGE LAYER (Branched below Store) ────────── */}
            {/* Vector Store */}
            <div
              onMouseEnter={() => setHoveredNode("vector")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[410px] top-[230px] w-[130px] h-[62px] rounded-[6px] border p-2 flex items-center gap-2.5 cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "vector" || activeStage === 2
                  ? "bg-[#1f1d1a] border-[#f26522] shadow-[0_0_18px_rgba(242,101,34,0.25)] scale-105"
                  : isLight
                  ? "bg-white border-[#e4e4e7] shadow-sm"
                  : "bg-[#151514] border-white/[0.1]"
              }`}
            >
              {/* Vector Icon */}
              <div className="size-7 rounded-[4px] bg-[#f26522]/15 flex items-center justify-center shrink-0 text-[#f26522]">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="8" r="2.5" />
                  <circle cx="12" cy="18" r="3" />
                  <circle cx="19" cy="17" r="2" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className={`font-['Geist_Variable:Medium',sans-serif] text-[13px] font-medium leading-tight ${
                  hoveredNode === "vector" || activeStage === 2 || !isLight
                    ? "text-white"
                    : "text-[#09090b]"
                }`}>
                  Vector
                </span>
                <span className="font-mono text-[9px] text-[#8e8e93] mt-0.5">
                  semantic similarity
                </span>
              </div>
            </div>

            {/* Graph Store */}
            <div
              onMouseEnter={() => setHoveredNode("graph")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[555px] top-[230px] w-[130px] h-[62px] rounded-[6px] border p-2 flex items-center gap-2.5 cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "graph" || activeStage === 2
                  ? "bg-[#1f1d1a] border-[#f26522] shadow-[0_0_18px_rgba(242,101,34,0.25)] scale-105"
                  : isLight
                  ? "bg-white border-[#e4e4e7] shadow-sm"
                  : "bg-[#151514] border-white/[0.1]"
              }`}
            >
              {/* Graph Icon */}
              <div className="size-7 rounded-[4px] bg-[#f26522]/15 flex items-center justify-center shrink-0 text-[#f26522]">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="12" cy="18" r="2.5" />
                  <line x1="8" y1="8" x2="16" y2="8" />
                  <line x1="7.5" y1="8" x2="10.5" y2="16" />
                  <line x1="16.5" y1="8" x2="13.5" y2="16" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className={`font-['Geist_Variable:Medium',sans-serif] text-[13px] font-medium leading-tight ${
                  hoveredNode === "graph" || activeStage === 2 || !isLight
                    ? "text-white"
                    : "text-[#09090b]"
                }`}>
                  Graph
                </span>
                <span className="font-mono text-[9px] text-[#8e8e93] mt-0.5">
                  entity relations
                </span>
              </div>
            </div>

            {/* File Store */}
            <div
              onMouseEnter={() => setHoveredNode("file")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[700px] top-[230px] w-[130px] h-[62px] rounded-[6px] border p-2 flex items-center gap-2.5 cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "file" || activeStage === 2
                  ? "bg-[#1f1d1a] border-[#f26522] shadow-[0_0_18px_rgba(242,101,34,0.25)] scale-105"
                  : isLight
                  ? "bg-white border-[#e4e4e7] shadow-sm"
                  : "bg-[#151514] border-white/[0.1]"
              }`}
            >
              {/* File Icon */}
              <div className="size-7 rounded-[4px] bg-[#f26522]/15 flex items-center justify-center shrink-0 text-[#f26522]">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className={`font-['Geist_Variable:Medium',sans-serif] text-[13px] font-medium leading-tight ${
                  hoveredNode === "file" || activeStage === 2 || !isLight
                    ? "text-white"
                    : "text-[#09090b]"
                }`}>
                  File
                </span>
                <span className="font-mono text-[9px] text-[#8e8e93] mt-0.5">
                  documents, raw
                </span>
              </div>
            </div>

            {/* ── 6. RIGHT SIDE BACKGROUND CYCLES (Consolidation & Conscious Forgetting) ─ */}
            <div className="absolute right-4 top-[230px] flex flex-col gap-2.5 z-10">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-full border border-[#f26522] border-t-transparent animate-spin flex items-center justify-center" style={{ animationDuration: "5s" }} />
                <span className={`text-[11.5px] font-mono ${isLight ? "text-[#27272a]" : "text-[#d4d4d8]"}`}>Consolidation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-full border border-[#ff8a50] border-b-transparent animate-spin flex items-center justify-center" style={{ animationDuration: "6.5s" }} />
                <span className={`text-[11.5px] font-mono ${isLight ? "text-[#27272a]" : "text-[#d4d4d8]"}`}>Conscious forgetting</span>
              </div>
              <span className="text-[10px] font-mono text-[#71717a] pl-7">
                background cycles on the stores
              </span>
            </div>

            {/* ── 7. BOTTOM NODE: 'AGENTIC RETRIEVAL' ──────────────────────── */}
            <div
              onMouseEnter={() => setHoveredNode("retrieval")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute left-[510px] top-[390px] w-[210px] h-[74px] rounded-[8px] border border-[#f26522] p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-20 ${
                hoveredNode === "retrieval" || activeStage === 3
                  ? isLight
                    ? "bg-[#fff2ea] shadow-[0_0_32px_rgba(242,101,34,0.35)] scale-105"
                    : "bg-[#251b14] shadow-[0_0_32px_rgba(242,101,34,0.5)] scale-105"
                  : isLight
                  ? "bg-[#fff7f2] shadow-sm"
                  : "bg-[#191512] shadow-[0_0_16px_rgba(242,101,34,0.2)]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f26522] animate-ping" />
                <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[15px] font-semibold ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}>
                  Agentic Retrieval
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#f26522] mt-1 font-medium">
                anticipatory · &lt;15ms P75 · nets all stores
              </span>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                FLOWING DATA PATHS (SVG WITH ANIMATED PARTICLES)
            ═══════════════════════════════════════════════════════════════ */}
            <svg
              className="absolute inset-0 size-full pointer-events-none z-10"
              viewBox="0 0 980 540"
              fill="none"
            >
              <defs>
                <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f26522" floodOpacity="0.85" />
                </filter>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f26522" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#f26522" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff8a50" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* 1. Agent -> Synap SDK Connection */}
              <path
                d="M 86 255 L 130 255"
                stroke="#f26522"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <circle r="3.5" fill="#f26522" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 86 255 L 130 255"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 2. Synap SDK -> Ingest (Write Path) */}
              <path
                d="M 185 215 L 185 157 L 270 157"
                stroke="#f26522"
                strokeWidth="1.75"
                strokeDasharray="4 3"
              />
              {/* 'write' label */}
              <text x="210" y="149" fill={isLight ? "#71717a" : "#a1a1aa"} fontSize="10.5" fontFamily="monospace">
                write
              </text>
              <circle r="3" fill="#f26522" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 185 215 L 185 157 L 270 157"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 3. Ingest -> Extract Path */}
              <path
                d="M 382 157 L 410 157"
                stroke="#f26522"
                strokeWidth="2"
              />
              <circle r="3" fill={isLight ? "#f26522" : "#ffffff"} filter="url(#orangeGlow)">
                <animateMotion
                  path="M 382 157 L 410 157"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 4. Extract -> Store Path */}
              <path
                d="M 540 157 L 570 157"
                stroke="#f26522"
                strokeWidth="2"
              />
              <circle r="3" fill={isLight ? "#f26522" : "#ffffff"} filter="url(#orangeGlow)">
                <animateMotion
                  path="M 540 157 L 570 157"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 5. Store -> Tri-Store Fanout Bus */}
              {/* Vertical trunk line from Store bottom */}
              <path
                d="M 626 189 L 626 210"
                stroke="#f26522"
                strokeWidth="1.75"
              />
              {/* Horizontal Distribution Bus Bar */}
              <path
                d="M 475 210 L 765 210"
                stroke="#f26522"
                strokeWidth="1.75"
              />
              {/* Branches down into Vector (475), Graph (620), File (765) */}
              <path d="M 475 210 L 475 230" stroke="#f26522" strokeWidth="1.75" />
              <path d="M 620 210 L 620 230" stroke="#f26522" strokeWidth="1.75" />
              <path d="M 765 210 L 765 230" stroke="#f26522" strokeWidth="1.75" />

              {/* Flowing particles down into all 3 stores */}
              <circle r="2.5" fill="#f26522" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 626 189 L 626 210 L 475 210 L 475 230"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2.5" fill="#f26522" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 626 189 L 626 210 L 620 210 L 620 230"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2.5" fill="#f26522" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 626 189 L 626 210 L 765 210 L 765 230"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 6. Converging Bracket from Tri-Store -> Agentic Retrieval */}
              {/* Smooth convergent funnel paths */}
              <path
                d="M 475 292 C 475 340, 580 355, 615 390"
                stroke="#f26522"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <path
                d="M 620 292 L 615 390"
                stroke="#f26522"
                strokeWidth="1.75"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <path
                d="M 765 292 C 765 340, 650 355, 615 390"
                stroke="#f26522"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.8"
              />

              {/* Particles converging into Agentic Retrieval */}
              <circle r="2.5" fill="#ff8a50" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 475 292 C 475 340, 580 355, 615 390"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2.5" fill="#ff8a50" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 620 292 L 615 390"
                  dur="1.7s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2.5" fill="#ff8a50" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 765 292 C 765 340, 650 355, 615 390"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 7. Synap SDK -> Agentic Retrieval (Read Path) */}
              <path
                d="M 185 295 L 185 427 L 510 427"
                stroke="#f26522"
                strokeWidth="1.75"
                strokeDasharray="4 3"
              />
              {/* 'read' label */}
              <text x="210" y="419" fill={isLight ? "#71717a" : "#a1a1aa"} fontSize="10.5" fontFamily="monospace">
                read
              </text>
              <circle r="3" fill="#f26522" filter="url(#orangeGlow)">
                <animateMotion
                  path="M 185 295 L 185 427 L 510 427"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* ── Bottom Link: Architecture Paper ── */}
        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-[12px] font-mono text-[#71717a]">
            Non-blocking async writes · Multi-hop entity graph resolution
          </span>
          <a
            href="https://www.maximem.ai/blog/agentic-context-management-paper"
            target="_blank"
            rel="noreferrer"
            className={`font-['Geist_Mono_Variable:Regular',sans-serif] text-[13px] transition-colors duration-200 inline-flex items-center gap-2 group tracking-tight ${
              isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
            }`}
          >
            <span>Read the architecture paper</span>
            <span className="text-[#f26522] transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
