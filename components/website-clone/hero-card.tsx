"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroInteractiveCard() {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const [mousePos, setMousePos] = useState({ x: 288, y: 180 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-[#141412] border border-[#3a352d] h-[360px] overflow-hidden relative rounded-[14px] shrink-0 w-[576px] shadow-[0_2px_8px_rgba(0,0,0,0.3),0_16px_44px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#f26522]/60 group"
    >


      {/* Dynamic Cursor Spotlight Tracking (Framer Motion Coordinates) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 70%)`,
        }}
      />

      {/* Top HUD status bar badge */}
      <div className="absolute top-3.5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none border-b border-white/[0.07] pb-2">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#f26522] opacity-60"></span>
            <span className="relative inline-flex rounded-full size-2 bg-[#f26522]"></span>
          </span>
          <span className="text-[11px] font-mono tracking-wider text-[#e4e4e7] uppercase font-medium">
            {activeTab === 0 && "Native Framework Mesh"}
            {activeTab === 1 && "LongMemEval Multi-Turn Benchmark"}
            {activeTab === 2 && "P75 In-Conversation Latency"}
          </span>
        </div>
      </div>

      {/* Main View Area with AnimatePresence */}
      <div className="relative w-full h-[300px] pt-11 z-10">
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="frameworks"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-0 pt-8 px-6 flex flex-col justify-center items-center"
            >
              {/* Frameworks constellation */}
              <div className="relative w-full max-w-[500px] h-[210px] flex items-center justify-between">
                {/* Synap Core (Left) */}
                <div className="relative z-20 flex flex-col items-center shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="w-[106px] h-[86px] rounded-[10px] bg-[#1c1a16] border border-[#f26522]/70 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-2 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f26522]" />
                    <span className="text-[10px] font-mono tracking-widest text-[#f26522] font-semibold">CORE</span>
                    <span className="text-white text-[15px] font-bold tracking-tight mt-0.5">SYNAP</span>
                    <span className="text-[9px] text-[#a1a1aa] font-mono mt-0.5">Tri-Store Engine</span>
                  </motion.div>
                </div>

                {/* Animated connecting pulses SVG - strictly bounded between left core and right cards */}
                <div className="relative flex-1 h-full mx-1 z-10 pointer-events-none">
                  <svg className="size-full" fill="none" viewBox="0 0 100 210" preserveAspectRatio="none">
                    <defs>
                      <filter id="heroCardGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#f26522" floodOpacity="0.3" />
                      </filter>
                    </defs>
                    <path id="card-fw-0" d="M 0 105 C 45 105, 55 24, 100 24" stroke="#f26522" strokeOpacity="0.45" strokeWidth="1.3" strokeDasharray="4 4" />
                    <path id="card-fw-1" d="M 0 105 C 45 105, 55 64, 100 64" stroke="#f26522" strokeOpacity="0.45" strokeWidth="1.3" />
                    <path id="card-fw-2" d="M 0 105 C 45 105, 55 105, 100 105" stroke="#f26522" strokeOpacity="0.45" strokeWidth="1.3" strokeDasharray="4 4" />
                    <path id="card-fw-3" d="M 0 105 C 45 105, 55 146, 100 146" stroke="#f26522" strokeOpacity="0.45" strokeWidth="1.3" />
                    <path id="card-fw-4" d="M 0 105 C 45 105, 55 186, 100 186" stroke="#f26522" strokeOpacity="0.45" strokeWidth="1.3" strokeDasharray="4 4" />

                    {/* Clean connection endpoints on outer border */}
                    <circle cx="100" cy="24" r="2" fill="#f26522" opacity="0.8" />
                    <circle cx="100" cy="64" r="2" fill="#f26522" opacity="0.8" />
                    <circle cx="100" cy="105" r="2" fill="#f26522" opacity="0.8" />
                    <circle cx="100" cy="146" r="2" fill="#f26522" opacity="0.8" />
                    <circle cx="100" cy="186" r="2" fill="#f26522" opacity="0.8" />

                    {/* Glowing signal beads travelling along the path without penetrating cards */}
                    {[
                      { pathId: "card-fw-0", dur: "1.9s", delay: "0s" },
                      { pathId: "card-fw-2", dur: "1.7s", delay: "0.3s" },
                      { pathId: "card-fw-4", dur: "2.1s", delay: "0.6s" },
                    ].map((item, idx) => (
                      <circle key={idx} r="2.5" fill="#f26522" filter="url(#heroCardGlow)">
                        <animateMotion
                          dur={item.dur}
                          begin={item.delay}
                          repeatCount="indefinite"
                          calcMode="spline"
                          keyTimes="0;1"
                          keySplines="0.4 0 0.2 1"
                        >
                          <mpath href={`#${item.pathId}`} />
                        </animateMotion>
                        <animate
                          attributeName="opacity"
                          values="0;0.9;0.9;0"
                          keyTimes="0;0.1;0.9;1"
                          dur={item.dur}
                          begin={item.delay}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                  </svg>
                </div>

                {/* Target Frameworks list (Right) */}
                <div className="flex flex-col gap-1.5 z-20 w-[200px] shrink-0">
                  {[
                    { name: "LangChain", tag: "Python & TS" },
                    { name: "LangGraph", tag: "Agentic Loop" },
                    { name: "LlamaIndex", tag: "Workflows" },
                    { name: "CrewAI", tag: "Multi-Agent" },
                    { name: "LiveKit & Vercel AI", tag: "+17 More" },
                  ].map((fw, idx) => (
                    <motion.div
                      key={fw.name}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 + 0.04 }}
                      whileHover={{ scale: 1.02, x: 2 }}
                      className="px-3 py-1.5 rounded-[7px] bg-[#181816] hover:bg-[#201f1c] border border-white/[0.09] hover:border-[#f26522]/50 transition-colors flex items-center justify-between cursor-default shadow-sm select-none relative overflow-hidden"
                    >
                      <span className="text-[12px] font-medium text-[#e4e4e7]">{fw.name}</span>
                      <span className="text-[10px] font-mono text-[#71717a]">{fw.tag}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="accuracy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-0 pt-8 px-7 flex flex-col justify-between pb-3"
            >
              {/* Chart top stats */}
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" />
                    <span className="text-[12px] font-medium text-white">
                      Synap: <strong className="text-[#f26522] font-mono">93.2%</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#52525b]" />
                    <span className="text-[12px] text-[#a1a1aa]">
                      Context Window Only: <strong className="text-[#a1a1aa] font-mono">38.2%</strong>
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#04b84c] bg-[#04b84c]/10 border border-[#04b84c]/30 px-2 py-0.5 rounded-[2px]">
                  PRODUCTION ZONE · ≥ 90%
                </span>
              </div>

              {/* Accuracy graph SVG */}
              <div className="relative w-full h-[140px] mt-1">
                <svg className="w-full h-full" viewBox="0 0 500 140" fill="none">
                  {/* Grid lines */}
                  <line x1="35" y1="20" x2="480" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="35" y1="55" x2="480" y2="55" stroke="rgba(4,184,76,0.2)" strokeDasharray="3 3" />
                  <line x1="35" y1="90" x2="480" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="35" y1="120" x2="480" y2="120" stroke="rgba(255,255,255,0.12)" />

                  {/* Y Axis labels */}
                  <text x="5" y="24" fill="#71717a" fontSize="9" fontFamily="monospace">100%</text>
                  <text x="5" y="59" fill="#04b84c" fontSize="9" fontFamily="monospace">90%</text>
                  <text x="5" y="94" fill="#71717a" fontSize="9" fontFamily="monospace">50%</text>
                  <text x="5" y="124" fill="#71717a" fontSize="9" fontFamily="monospace">25%</text>

                  {/* Vanilla RAG curve (decaying) */}
                  <motion.path
                    d="M 35 40 C 120 42, 180 80, 260 98 C 340 112, 420 118, 480 120"
                    stroke="#ef4444"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                  />

                  {/* Synap sustained curve (solid 93.2%) */}
                  <motion.path
                    d="M 35 32 C 140 31, 240 30, 340 31 C 410 30, 450 32, 480 31"
                    stroke="#f26522"
                    strokeWidth="2.2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                  />

                  {/* Area fill under Synap curve */}
                  <path
                    d="M 35 32 C 140 31, 240 30, 340 31 C 410 30, 450 32, 480 31 L 480 120 L 35 120 Z"
                    fill="url(#synapGradient)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="synapGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f26522" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>

                  {/* Active end beacon point */}
                  <circle cx="480" cy="31" r="3" fill="#f26522" />
                  <circle cx="480" cy="31" r="6" fill="#f26522" opacity="0.3" className="animate-pulse" />
                  <circle cx="480" cy="120" r="2.5" fill="#ef4444" />
                </svg>
              </div>

              {/* X Axis labels */}
              <div className="flex justify-between pl-9 pr-2 text-[9.5px] font-mono text-[#71717a]">
                <span>DEMO (Turn 1)</span>
                <span>Turn 25</span>
                <span className="text-[#a1a1aa]">as conversation grows →</span>
                <span>Turn 75</span>
                <span className="text-[#f26522] font-semibold">PRODUCTION (Turn 100+)</span>
              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="latency"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-0 pt-8 px-7 flex flex-col justify-center gap-3.5"
            >
              <div className="space-y-3">
                {/* Synap Bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#f26522]"></span>
                      Maximem Synap (Anticipatory Pre-fetch)
                    </span>
                    <span className="font-mono font-bold text-[#f26522] text-[12px]">&lt; 14.2ms P75</span>
                  </div>
                  <div className="h-3 bg-white/[0.04] rounded-[2px] overflow-hidden p-0.5 border border-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "12%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-[#f26522] rounded-[2px]"
                    />
                  </div>
                  <span className="text-[9.5px] font-mono text-[#a1a1aa] block pl-1">
                    98.4% in-process hits • zero external roundtrips during turn execution
                  </span>
                </div>

                {/* Standard Vector DB */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="text-[#a1a1aa] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#52525b]"></span>
                      Standard Cloud Vector DB (Pinecone / Qdrant)
                    </span>
                    <span className="font-mono text-[#a1a1aa] text-[11px]">245ms P75</span>
                  </div>
                  <div className="h-3 bg-white/[0.04] rounded-[2px] overflow-hidden p-0.5 border border-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                      className="h-full bg-[#52525b] rounded-[2px]"
                    />
                  </div>
                </div>

                {/* Graph DB */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="text-[#71717a] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3f3f46]"></span>
                      Direct Graph Traversals (Neo4j / Memgraph)
                    </span>
                    <span className="font-mono text-[#71717a] text-[11px]">480ms P75</span>
                  </div>
                  <div className="h-3 bg-white/[0.04] rounded-[2px] overflow-hidden p-0.5 border border-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-[#3f3f46] rounded-[2px]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Tab Selectors with Framer Motion LayoutId Glider */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-30">
        {[
          { id: 0, label: "23 Frameworks" },
          { id: 1, label: "Long-Turn Accuracy" },
          { id: 2, label: "P75 Latency" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 0 | 1 | 2)}
              className={`relative px-3 py-1 rounded-[4px] text-[11px] font-medium transition-colors duration-200 cursor-pointer ${
                isActive ? "text-white" : "text-[#a1a1aa] hover:text-[#e4e4e7]"
              }`}
              title={tab.label}
            >
              {isActive && (
                <motion.div
                  layoutId="heroActiveTabGlider"
                  className="absolute inset-0 rounded-[4px] bg-[#f26522]/20 border border-[#f26522]/60 shadow-sm z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span
                  className={`h-1.5 rounded-[1px] transition-all duration-300 ${
                    isActive ? "w-3 bg-[#f26522]" : "w-1.5 bg-white/30"
                  }`}
                />
                <span className="text-[11px] font-mono">{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
