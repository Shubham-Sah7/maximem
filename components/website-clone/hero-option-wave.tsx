"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter, TypewriterHeadline, TypewriterSegment } from "@/components/ui/animated-text";
import InteractiveWaveCanvas from "./interactive-wave-canvas";

interface HeroOptionWaveProps {
  isLight?: boolean;
}

export default function HeroOptionWave({ isLight = false }: HeroOptionWaveProps) {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const [hoveredFw, setHoveredFw] = useState<number | null>(null);

  const typewriterSegments: TypewriterSegment[] = [
    { text: "Build AI that " },
    {
      text: "remembers,",
      className: isLight ? "text-[#f26522]" : "text-white",
    },
    { text: " learns and gets better" },
    { text: "over time.", lineBreakBefore: true },
  ];

  const frameworks = [
    { name: "LangChain", tag: "Python & TS" },
    { name: "LangGraph", tag: "Agentic Loop" },
    { name: "LlamaIndex", tag: "Workflows" },
    { name: "CrewAI", tag: "Multi-Agent" },
    { name: "LiveKit & Vercel AI", tag: "+17 More" },
  ];

  return (
    <div className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-12 pb-16">
      {/* ── Interactive Silky-Smooth Wave Background Canvas ── */}
      <InteractiveWaveCanvas isLight={isLight} glowColor="#f26522" dotSpacing={26} />

      {/* ── Hero Content Container ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN: Same Font Size, Style & Matching CTAs (Image 1)
          ══════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[50%] xl:w-[48%] max-w-[600px] flex flex-col items-start gap-7 lg:gap-8">
            {/* Headline with exact Option 1 font size & style */}
            <div className="w-full">
              <TypewriterHeadline
                segments={typewriterSegments}
                className={`items-start text-left font-medium text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[48px] tracking-[-0.03em] leading-[1.13] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}
                speed={20}
                startDelay={100}
              />
            </div>

            {/* Supporting Copy with exact Option 1 styling */}
            <p
              className={`text-[14.5px] sm:text-[15px] leading-[26px] tracking-[-0.012em] max-w-[520px] ${
                isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
              }`}
            >
              Maximem gives AI agents persistent, structured memory and active context
              management; so every interaction makes them more personal, accurate and
              useful, while reducing token costs, and so that what your agents know becomes
              something a competitor cannot trivially copy.
            </p>

            {/* Metrics Row: 92%, 93.2%, <15ms with Option 1 sizing */}
            <div className="flex flex-wrap items-start gap-8 sm:gap-10">
              <div className="flex flex-col items-start group cursor-default">
                <AnimatedCounter
                  value={92}
                  suffix="%"
                  duration={1.6}
                  delay={0.1}
                  trigger={true}
                  className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                    isLight ? "text-[#09090b]" : "text-[#f26522]"
                  }`}
                />
                <span
                  className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}
                >
                  LongMemEval accuracy
                </span>
              </div>

              <div className="flex flex-col items-start group cursor-default">
                <AnimatedCounter
                  value={93.2}
                  suffix="%"
                  decimals={1}
                  duration={1.8}
                  delay={0.2}
                  trigger={true}
                  className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                />
                <span
                  className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}
                >
                  LoCoMo accuracy
                </span>
              </div>

              <div className="flex flex-col items-start group cursor-default">
                <span
                  className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                >
                  &lt;15ms
                </span>
                <span
                  className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}
                >
                  P75 in-conversation retrieval
                </span>
              </div>
            </div>

            {/* ── Exact Matching CTA Buttons (Image 1) ── */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
              {/* Primary: Get Started with rounded white chevron badge */}
              <a
                href="/signup"
                className={`group h-[46px] pl-5 pr-2.5 font-medium text-[15px] rounded-[10px] flex items-center gap-3 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow cursor-pointer select-none ${
                  isLight
                    ? "bg-[#09090b] text-white hover:bg-zinc-800"
                    : "bg-[#f26522] hover:bg-[#f26522]/90 text-white shadow-[0_2px_12px_rgba(242,101,34,0.3)]"
                }`}
              >
                <span className="tracking-tight">Get Started</span>
                <span
                  className={`w-[26px] h-[26px] rounded-[7px] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5 ${
                    isLight ? "bg-[#f26522] text-white" : "bg-white text-[#f26522]"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </a>

              {/* Secondary: Try in Playground */}
              <a
                href="https://synap.maximem.ai/playground"
                target="_blank"
                rel="noopener noreferrer"
                className={`group h-[46px] rounded-[10px] font-medium text-[14.5px] flex items-center justify-center px-6 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer select-none ${
                  isLight
                    ? "bg-[#f4f4f6] hover:bg-[#eaebee] border border-[#e4e4e7] text-[#18181b] shadow-sm"
                    : "bg-[#18181b] hover:bg-[#222226] border border-white/10 text-white shadow-sm"
                }`}
              >
                <span>Try in Playground</span>
              </a>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN: Exact Matching Card & Tabs (Image 2)
          ══════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[46%] xl:w-[48%] max-w-[500px] flex justify-center lg:justify-end shrink-0">
            <div
              className={`w-full rounded-[14px] p-5 sm:p-6 relative backdrop-blur-sm transition-colors duration-300 ${
                isLight
                  ? "bg-[#fafafa]/70 border border-[#e4e4e7] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.08)]"
                  : "bg-[#0c0c0b]/60 border border-white/[0.1] shadow-[0_2px_8px_rgba(0,0,0,0.3),0_20px_56px_rgba(0,0,0,0.6)]"
              }`}
            >
              {/* Main Tab Canvas (Height 310px) */}
              <div className="relative w-full h-[310px] my-3 overflow-hidden">
                <AnimatePresence mode="wait">
                  {/* TAB 0: Frameworks Mesh (Exact Image 2) */}
                  {activeTab === 0 && (
                    <motion.div
                      key="tab-frameworks"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* SYNAP CORE BOX (Left) */}
                      <div
                        className={`absolute left-0 top-[65px] w-[138px] h-[162px] rounded-[10px] border border-[#f26522] p-3 flex flex-col items-center justify-center text-center z-10 cursor-pointer transition-all duration-200 ${
                          isLight ? "bg-[#fff7f2]/80" : "bg-[#1a1714]/60 backdrop-blur-sm"
                        }`}
                        style={{ boxShadow: "0 0 0 1px rgba(242,101,34,0.15), 0 4px 16px rgba(0,0,0,0.35)" }}
                      >
                        <span className="text-[10px] font-mono font-semibold tracking-widest text-[#f26522] uppercase mb-1">
                          CORE
                        </span>
                        <span
                          className={`text-[26px] font-bold tracking-tight leading-none ${
                            isLight ? "text-[#09090b]" : "text-white"
                          }`}
                        >
                          SYNAP
                        </span>
                        <span className="text-[11.5px] font-mono text-[#a1a1aa] leading-snug mt-2">
                          Tri-Store<br />Engine
                        </span>
                      </div>

                      {/* SVG Connecting Curves & Flowing Nodes */}
                      <svg
                        className="absolute inset-0 size-full pointer-events-none z-0"
                        viewBox="0 0 540 310"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <defs>
                          <filter id="nodeGlowWave" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#f26522" floodOpacity="0.25" />
                          </filter>
                        </defs>
                        {([38, 94, 150, 206, 262] as const).map((y, idx) => (
                          <path
                            key={idx}
                            id={`fw-wave-path-${idx}`}
                            d={`M 138 146 C 220 146, 250 ${y}, 310 ${y}`}
                            stroke="#f26522"
                            strokeOpacity={hoveredFw === idx ? "0.9" : "0.45"}
                            strokeWidth={hoveredFw === idx ? "1.8" : "1.3"}
                            strokeDasharray="5 4"
                            className="transition-all duration-200"
                          />
                        ))}

                        {/* 2 staggered beads per wire — smooth ease-in-out spline */}
                        {([
                          { pathIdx: 0, dur: 2.2 },
                          { pathIdx: 1, dur: 1.9 },
                          { pathIdx: 2, dur: 2.5 },
                          { pathIdx: 3, dur: 2.0 },
                          { pathIdx: 4, dur: 2.8 },
                        ] as const).flatMap(({ pathIdx, dur }) =>
                          [0, dur * 0.5].map((offset, beadIdx) => (
                            <circle
                              key={`${pathIdx}-${beadIdx}`}
                              r={beadIdx === 0 ? "3.5" : "2.5"}
                              fill="#f26522"
                              filter="url(#nodeGlowWave)"
                            >
                              <animateMotion
                                dur={`${dur}s`}
                                begin={`${offset}s`}
                                repeatCount="indefinite"
                                calcMode="spline"
                                keyTimes="0;1"
                                keySplines="0.4 0 0.2 1"
                              >
                                <mpath href={`#fw-wave-path-${pathIdx}`} />
                              </animateMotion>
                              <animate
                                attributeName="opacity"
                                values="0;0;1;0.85;0"
                                keyTimes="0;0.05;0.3;0.75;1"
                                dur={`${dur}s`}
                                begin={`${offset}s`}
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
                              />
                            </circle>
                          ))
                        )}
                      </svg>

                      {/* Target Frameworks List (Right) */}
                      <div className="absolute right-0 top-[15px] w-[240px] flex flex-col gap-[10px] z-10">
                        {frameworks.map((fw, idx) => (
                          <div
                            key={fw.name}
                            onMouseEnter={() => setHoveredFw(idx)}
                            onMouseLeave={() => setHoveredFw(null)}
                            className={`h-[46px] px-4 rounded-[8px] border flex items-center justify-between transition-all duration-200 cursor-default select-none ${
                              hoveredFw === idx
                                ? isLight
                                  ? "bg-white/80 border-[#f26522]/50 shadow-[0_2px_8px_rgba(242,101,34,0.15)] backdrop-blur-sm"
                                  : "bg-white/[0.06] border-white/[0.2] shadow-[0_2px_8px_rgba(0,0,0,0.4)] backdrop-blur-sm"
                                : isLight
                                ? "bg-white/60 border-[#e4e4e7]"
                                : "bg-white/[0.03] border-white/[0.09]"
                            }`}
                          >
                            <span
                              className={`text-[14px] font-semibold tracking-tight transition-colors ${
                                hoveredFw === idx ? "text-[#f26522]" : isLight ? "text-[#09090b]" : "text-white"
                              }`}
                            >
                              {fw.name}
                            </span>
                            <span className="text-[11.5px] font-mono text-[#71717a]">
                              {fw.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 1: Long-Term Accuracy Curve */}
                  {activeTab === 1 && (
                    <motion.div
                      key="tab-accuracy"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-between py-1"
                    >
                      <div
                        className={`flex items-center justify-between border-b pb-2 ${
                          isLight ? "border-[#e4e4e7]" : "border-white/[0.07]"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-[2px] bg-[#f26522]" />
                            <span className={`text-[12px] font-medium ${isLight ? "text-[#09090b]" : "text-white"}`}>
                              Synap: <strong className="text-[#f26522] font-mono">93.2%</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-[2px] bg-[#52525b]" />
                            <span className="text-[12px] text-[#a1a1aa]">
                              Context Window: <strong className="text-[#a1a1aa] font-mono">38.2%</strong>
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-[#04b84c] bg-[#04b84c]/10 border border-[#04b84c]/30 px-2 py-0.5 rounded-[4px]">
                          PRODUCTION ZONE · ≥ 90%
                        </span>
                      </div>

                      <div className="relative w-full h-[155px] mt-1">
                        <svg className="w-full h-full" viewBox="0 0 500 140" fill="none">
                          <line x1="35" y1="20" x2="480" y2="20" stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"} strokeDasharray="3 3" />
                          <line x1="35" y1="55" x2="480" y2="55" stroke="rgba(4,184,76,0.2)" strokeDasharray="3 3" />
                          <line x1="35" y1="90" x2="480" y2="90" stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"} strokeDasharray="3 3" />
                          <line x1="35" y1="120" x2="480" y2="120" stroke={isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)"} />

                          <text x="5" y="24" fill="#71717a" fontSize="9" fontFamily="monospace">100%</text>
                          <text x="5" y="59" fill="#04b84c" fontSize="9" fontFamily="monospace">90%</text>
                          <text x="5" y="94" fill="#71717a" fontSize="9" fontFamily="monospace">50%</text>
                          <text x="5" y="124" fill="#71717a" fontSize="9" fontFamily="monospace">25%</text>

                          <path
                            d="M 35 32 C 140 31, 240 30, 340 31 C 410 30, 450 32, 480 31 L 480 120 L 35 120 Z"
                            fill="url(#synapAccuracyWaveGrad)"
                            opacity={isLight ? "0.1" : "0.15"}
                          />
                          <defs>
                            <linearGradient id="synapAccuracyWaveGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f26522" />
                              <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                          </defs>

                          <motion.path
                            d="M 35 40 C 120 42, 180 80, 260 98 C 340 112, 420 118, 480 120"
                            stroke="#ef4444"
                            strokeWidth="1.8"
                            strokeDasharray="4 3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />

                          <motion.path
                            d="M 35 32 C 140 31, 240 30, 340 31 C 410 30, 450 32, 480 31"
                            stroke="#f26522"
                            strokeWidth="2.2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />

                          <circle cx="480" cy="31" r="3" fill="#f26522" />
                          <circle cx="480" cy="31" r="6" fill="#f26522" opacity="0.3" className="animate-ping" />
                          <circle cx="480" cy="120" r="2.5" fill="#ef4444" />
                        </svg>
                      </div>

                      <div className="flex justify-between pl-9 pr-2 text-[9.5px] font-mono text-[#71717a]">
                        <span>DEMO (Turn 1)</span>
                        <span>Turn 25</span>
                        <span className="text-[#a1a1aa]">as conversation grows →</span>
                        <span>Turn 75</span>
                        <span className="text-[#f26522] font-semibold">PRODUCTION (Turn 100+)</span>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: P75 Latency */}
                  {activeTab === 2 && (
                    <motion.div
                      key="tab-latency"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-center gap-3 px-2"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11.5px]">
                          <span className={`font-semibold flex items-center gap-2 ${isLight ? "text-[#09090b]" : "text-white"}`}>
                            <span className="w-2 h-2 rounded-[2px] bg-[#f26522]" />
                            Maximem Synap (Anticipatory Recall)
                          </span>
                          <span className="font-mono font-bold text-[#f26522] text-[12px]">&lt; 14.2ms P75</span>
                        </div>
                        <div className={`h-3 rounded-[4px] overflow-hidden p-0.5 border ${
                          isLight ? "bg-black/[0.03] border-black/[0.06]" : "bg-white/[0.04] border-white/[0.06]"
                        }`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "12%" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="h-full bg-[#f26522] rounded-[2px]"
                          />
                        </div>
                        <span className="text-[9.5px] font-mono text-[#8e8e93] block pl-1">
                          98.4% in-process hits · zero external network overhead during execution
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11.5px]">
                          <span className={`flex items-center gap-2 ${isLight ? "text-[#52525b]" : "text-[#a1a1aa]"}`}>
                            <span className="w-2 h-2 rounded-[2px] bg-[#52525b]" />
                            Standard Cloud Vector DB (Pinecone / Qdrant)
                          </span>
                          <span className="font-mono text-[#a1a1aa] text-[11px]">245ms P75</span>
                        </div>
                        <div className={`h-3 rounded-[4px] overflow-hidden p-0.5 border ${
                          isLight ? "bg-black/[0.03] border-black/[0.06]" : "bg-white/[0.04] border-white/[0.06]"
                        }`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                            className="h-full bg-[#52525b] rounded-[2px]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11.5px]">
                          <span className={`flex items-center gap-2 ${isLight ? "text-[#71717a]" : "text-[#71717a]"}`}>
                            <span className="w-2 h-2 rounded-[2px] bg-[#3f3f46]" />
                            Direct Graph Traversals (Neo4j / Memgraph)
                          </span>
                          <span className="font-mono text-[#71717a] text-[11px]">480ms P75</span>
                        </div>
                        <div className={`h-3 rounded-[4px] overflow-hidden p-0.5 border ${
                          isLight ? "bg-black/[0.03] border-black/[0.06]" : "bg-white/[0.04] border-white/[0.06]"
                        }`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="h-full bg-[#3f3f46] rounded-[2px]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Exact Matching Bottom Tabs (Image 2) ── */}
              <div className="pt-3 flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab(0)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === 0
                      ? isLight
                        ? "border-[#f26522]/40 bg-[#fff7f2] text-[#f26522]"
                        : "border-[#f26522]/50 bg-[#f26522]/10 text-white"
                      : isLight
                      ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                      : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-[1px] ${activeTab === 0 ? "bg-[#f26522]" : "bg-[#71717a]"}`} />
                  <span>23 Frameworks</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab(1)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === 1
                      ? isLight
                        ? "border-[#f26522]/40 bg-[#fff7f2] text-[#f26522]"
                        : "border-[#f26522]/50 bg-[#f26522]/10 text-white"
                      : isLight
                      ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                      : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 1 ? "bg-[#f26522]" : "bg-[#71717a]"}`} />
                  <span>Long-Term Accuracy</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab(2)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === 2
                      ? isLight
                        ? "border-[#f26522]/40 bg-[#fff7f2] text-[#f26522]"
                        : "border-[#f26522]/50 bg-[#f26522]/10 text-white"
                      : isLight
                      ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                      : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-[1px] ${activeTab === 2 ? "bg-[#f26522]" : "bg-[#71717a]"}`} />
                  <span>P75 Latency</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
