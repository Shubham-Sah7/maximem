"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter, TypewriterHeadline, TypewriterSegment } from "@/components/ui/animated-text";
import SynapDashboardVisual from "./synap-dashboard-visual";

interface HeroSectionProps {
  isLight?: boolean;
}

export default function HeroSection({ isLight = true }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [layoutMode, setLayoutMode] = useState<"split" | "centered">("centered");
  const [heroVisual, setHeroVisual] = useState<"dashboard" | "code">("dashboard");
  const [revealPhase, setRevealPhase] = useState<"typing" | "buttons" | "product">("typing");
  const hasRevealedRef = useRef(false);

  const handleTypingComplete = useCallback(() => {
    if (hasRevealedRef.current) return;
    // Step 2: reveal buttons right after text animation finishes
    setTimeout(() => {
      setRevealPhase("buttons");
      // Step 3: reveal product after buttons have animated in
      setTimeout(() => {
        setRevealPhase("product");
        hasRevealedRef.current = true;
      }, 450);
    }, 120);
  }, []);

  const typewriterSegments: TypewriterSegment[] = useMemo(() => [
    { text: "Build AI that " },
    { text: "remembers,", className: "text-[#f26522]" },
    { text: " learns and gets better over time." },
  ], []);

  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const [hoveredFw, setHoveredFw] = useState<number | null>(null);
  const [centeredProductTab, setCenteredProductTab] = useState<"sdk" | "harness" | "plugin">("sdk");
  const [centeredLang, setCenteredLang] = useState<"python" | "typescript" | "langchain" | "llama">("python");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const heroParam = params.get("hero");
      if (heroParam === "code") {
        setHeroVisual("code");
      } else if (heroParam === "dashboard") {
        setHeroVisual("dashboard");
      }
    }
  }, []);

  const frameworks = [
    { name: "LangChain", tag: "Python & TS" },
    { name: "LangGraph", tag: "Agentic Loop" },
    { name: "LlamaIndex", tag: "Workflows" },
    { name: "CrewAI", tag: "Multi-Agent" },
    { name: "LiveKit & Vercel AI", tag: "+17 More" },
  ];

  const centeredSnippets: Record<string, string> = {
    python: `# 1. Install via pip
pip install maximem

# 2. Initialize Maximem Synap client
from maximem import Synap

synap = Synap(api_key="mx_live_token...")

# Turn ingestion is non-blocking & asynchronous
synap.ingest(
    agent_id="support_bot_01",
    user_id="user_8429",
    content="Customer prefers weekly digest via Slack, works on PostgreSQL migrations."
)

# Anticipatory recall across vector + knowledge graph in < 15ms
context = synap.retrieve(
    query="What are the user's communication preferences?",
    agent_id="support_bot_01",
    include_graph=True
)

print(context.summary)
# Output: User prefers weekly Slack updates. Focus: PostgreSQL HNSW schema.`,

    typescript: `// 1. Install via npm
npm install @maximem/synap

// 2. Initialize in your Node / Next.js backend
import { Synap } from "@maximem/synap";

const synap = new Synap({ apiKey: process.env.MAXIMEM_API_KEY });

// Async write turn returns immediately
await synap.ingest({
  agentId: "analyst_agent_04",
  userId: "user_8429",
  content: "Latency constraint for recommender service agreed at P75 < 15ms."
});

// Anticipatory retrieval nets across vector, graph, and file stores
const context = await synap.retrieve({
  query: "recommender latency target",
  agentId: "analyst_agent_04"
});`,

    langchain: `# Native memory layer for LangChain / LangGraph
from langchain_community.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from maximem.integrations.langchain import SynapMemory

# Drop-in SynapMemory replacing transient buffers
memory = SynapMemory(
    api_key="mx_live_...",
    agent_id="agent_planner",
    session_id="session_772"
)

chain = ConversationChain(llm=ChatOpenAI(), memory=memory)
response = chain.run("Continue from where we left off last Tuesday.")`,

    llama: `# Native context retriever for LlamaIndex
from llama_index.core import VectorStoreIndex
from maximem.integrations.llamaindex import SynapContextRetriever

retriever = SynapContextRetriever(
    api_key="mx_live_...",
    top_k=5,
    conscious_forgetting=True
)

query_engine = index.as_query_engine(retriever=retriever)
response = query_engine.query("Summarize all user architectural constraints.")`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(centeredSnippets[centeredLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      data-name="HeroSection"
      className={`relative w-full pt-[90px] sm:pt-[105px] lg:pt-[115px] pb-[48px] sm:pb-[64px] transition-colors duration-300 flex items-center justify-center overflow-hidden ${
        isLight ? "bg-[#ffffff] text-[#09090b]" : "bg-[#0e0e0d] text-white"
      }`}
    >
      {/* ── Background: Ultra-subtle static technical dotted grid ── */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight ? "opacity-20" : "opacity-25"
        }`}
        style={{
          backgroundImage: isLight
            ? "radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)"
            : "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Layout & Hero Variation Switcher Pill in Top Right of Hero ── */}
      <div className={`absolute top-[82px] right-6 sm:right-10 z-30 hidden sm:flex items-center gap-1 p-1 rounded-full backdrop-blur-md ${
        isLight
          ? "bg-white/90 border border-[#e4e4e7] shadow-sm"
          : "bg-black/40 border border-white/10"
      }`}>
        <button
          type="button"
          onClick={() => {
            setLayoutMode("centered");
            setHeroVisual("dashboard");
          }}
          className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-200 cursor-pointer ${
            layoutMode === "centered" && heroVisual === "dashboard"
              ? "bg-[#f26522] text-white font-semibold"
              : isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
          }`}
          title="New Hero Option: Actual Synap Dashboard"
        >
          Synap Dashboard
        </button>
        <button
          type="button"
          onClick={() => {
            setLayoutMode("centered");
            setHeroVisual("code");
          }}
          className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-200 cursor-pointer ${
            layoutMode === "centered" && heroVisual === "code"
              ? "bg-[#f26522] text-white font-semibold"
              : isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
          }`}
          title="Current Hero: Code Banner"
        >
          Code Banner
        </button>
        <button
          type="button"
          onClick={() => setLayoutMode("split")}
          className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-200 cursor-pointer ${
            layoutMode === "split"
              ? "bg-[#f26522] text-white font-semibold"
              : isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
          }`}
          title="Split copy + interactive framework mesh view"
        >
          Split View
        </button>
      </div>

      <AnimatePresence mode="wait">
        {layoutMode === "split" ? (
          /* ════════════════════════════════════════════════════════════════
             LAYOUT A: TWO-COLUMN SPLIT VIEW (Standard Maximem)
          ════════════════════════════════════════════════════════════════ */
          <motion.div
            key="split-layout"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-10"
          >
            {/* LEFT COLUMN: Hero Content */}
            <div className="w-full lg:w-[52%] xl:w-[50%] max-w-[580px] flex flex-col items-start pt-2 lg:pt-4">
              {/* Eyebrow: Pure clean text, no fill, no dot, no stroke */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-3 flex items-center"
              >
                <span className="font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] sm:text-[12.5px] font-mono tracking-[2.2px] uppercase font-semibold text-[#f26522]">
                  THE MEMORY LAYER FOR AI AGENTS
                </span>
              </motion.div>

              {/* Main Headline: Typewriter Text Animation */}
              <div className="mt-2 mb-2 w-full">
                <TypewriterHeadline
                  segments={typewriterSegments}
                  onComplete={handleTypingComplete}
                  className={`items-start text-left font-['Space_Grotesk',sans-serif] font-medium text-[34px] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[54px] tracking-[-0.035em] leading-[1.12] ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                  speed={20}
                  startDelay={140}
                />
              </div>

              {/* Supporting Copy */}
              <motion.p
                initial={hasRevealedRef.current ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                animate={
                  revealPhase === "buttons" || revealPhase === "product"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`mt-4 font-['Space_Grotesk',sans-serif] text-[15px] sm:text-[16px] md:text-[16.5px] leading-[26px] tracking-[-0.012em] max-w-[540px] ${
                  isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                }`}
              >
                Maximem gives AI agents persistent, structured memory and active context management; so every interaction makes them more personal, accurate and useful, while reducing token costs, and so that what your agents know becomes something a competitor cannot trivially copy.
              </motion.p>

              {/* CTA Row - Reveal Phase 2 (Then the button reveal) */}
              <motion.div
                initial={hasRevealedRef.current ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.94 }}
                animate={
                  revealPhase === "buttons" || revealPhase === "product"
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 22, scale: 0.94 }
                }
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4"
              >
                <a
                  href="/signup"
                  className="group h-[48px] pl-6 pr-3 bg-[#f26522] hover:bg-[#ff7533] text-white font-['Space_Grotesk',sans-serif] font-medium text-[15px] rounded-[10px] flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow cursor-pointer select-none"
                >
                  <span className="tracking-tight">Get Started</span>
                  <span className="size-7 rounded-[6px] bg-white text-[#f26522] flex items-center justify-center shadow-sm shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <a
                  href="/playground"
                  className={`h-[48px] px-6 rounded-[10px] border font-['Space_Grotesk',sans-serif] font-medium text-[15px] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer select-none ${
                    isLight
                      ? "bg-[#f4f4f6] hover:bg-[#eaebee] border-[#e4e4e7] text-[#18181b]"
                      : "bg-[#18181b] hover:bg-[#222226] border-white/10 text-white"
                  }`}
                >
                  <span>Setup for Agent</span>
                </a>
              </motion.div>

              {/* Metrics Row: 92% (Orange), 93.2%, <15ms - Reveal Phase 3 (With Product) */}
              <motion.div
                initial={hasRevealedRef.current ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={
                  revealPhase === "product"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 sm:mt-10 flex flex-wrap items-start gap-8 sm:gap-10"
              >
                <div className="flex flex-col items-start group cursor-default">
                  <AnimatedCounter
                    value={92}
                    suffix="%"
                    duration={1.8}
                    delay={0.1}
                    trigger={revealPhase === "product"}
                    className="font-['Space_Grotesk',sans-serif] text-[30px] sm:text-[34px] xl:text-[36px] font-semibold text-[#f26522] tracking-tight leading-none transition-transform duration-200 group-hover:scale-105"
                  />
                  <span className={`mt-2 font-['Space_Grotesk',sans-serif] text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}>
                    LongMemEval accuracy
                  </span>
                </div>

                <div className="flex flex-col items-start group cursor-default">
                  <AnimatedCounter
                    value={93.2}
                    suffix="%"
                    decimals={1}
                    duration={1.9}
                    delay={0.2}
                    trigger={revealPhase === "product"}
                    className={`font-['Space_Grotesk',sans-serif] text-[30px] sm:text-[34px] xl:text-[36px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}
                  />
                  <span className={`mt-2 font-['Space_Grotesk',sans-serif] text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}>
                    LoCoMo accuracy
                  </span>
                </div>

                <div className="flex flex-col items-start group cursor-default">
                  <AnimatedCounter
                    value={15}
                    prefix="< "
                    suffix="ms"
                    duration={1.6}
                    delay={0.3}
                    trigger={revealPhase === "product"}
                    className={`font-['Space_Grotesk',sans-serif] text-[30px] sm:text-[34px] xl:text-[36px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}
                  />
                  <span className={`mt-2 font-['Space_Grotesk',sans-serif] text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}>
                    P75 in-conversation retrieval
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Synap Technical Visualization - Reveal Phase 3 (Than the product) */}
            <motion.div
              initial={hasRevealedRef.current ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.96 }}
              animate={
                revealPhase === "product"
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 36, scale: 0.96 }
              }
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[48%] xl:w-[50%] max-w-[560px] flex justify-center lg:justify-end shrink-0"
            >
              <div className={`w-full rounded-[6px] p-5 sm:p-6 relative transition-colors duration-300 ${
                isLight
                  ? "bg-[#fafafa] border border-[#e4e4e7] shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                  : "bg-[#111110] border border-white/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              }`}>
                {/* Header Bar */}
                <div className={`flex items-center justify-between pb-4 border-b ${
                  isLight ? "border-[#e4e4e7]" : "border-white/[0.07]"
                }`}>
                  <div className={`flex items-center gap-2 px-2.5 py-1 rounded-[3px] border ${
                    isLight ? "bg-white border-[#e4e4e7]" : "bg-white/[0.03] border-white/[0.08]"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shadow-[0_0_6px_#f26522]" />
                    <span className={`text-[11px] font-mono tracking-wider uppercase font-medium ${
                      isLight ? "text-[#27272a]" : "text-[#d4d4d8]"
                    }`}>
                      NATIVE FRAMEWORK MESH
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#71717a] tracking-wider uppercase">
                    SYNAP ENGINE V2.4
                  </span>
                </div>

                {/* Network Mesh Canvas */}
                <div className="relative w-full h-[270px] my-3">
                  {/* SYNAP CORE BOX (Left) */}
                  <div
                    className={`absolute left-0 top-[72px] w-[112px] h-[126px] rounded-[4px] border border-[#f26522] p-2.5 flex flex-col items-center justify-center text-center z-10 cursor-pointer transition-all duration-300 hover:border-[#ff7a38] hover:shadow-[0_0_26px_rgba(242,101,34,0.45)] ${
                      isLight ? "bg-[#fff7f2]" : "bg-[#1a1714]"
                    }`}
                    style={{
                      boxShadow: "0 0 16px rgba(242, 101, 34, 0.25)",
                      animation: "synapCoreBreathe 3.5s ease-in-out infinite",
                    }}
                  >
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-[#f26522] uppercase">
                      CORE
                    </span>
                    <span className={`text-[20px] font-bold tracking-tight my-0.5 ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>
                      SYNAP
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a1aa] leading-tight mt-0.5">
                      Tri-Store
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a1aa] leading-tight">
                      Engine
                    </span>
                  </div>

                  {/* SVG Connecting Curves & Flowing Nodes */}
                  <svg
                    className="absolute inset-0 size-full pointer-events-none z-0"
                    viewBox="0 0 540 270"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#f26522" floodOpacity="0.8" />
                      </filter>
                    </defs>

                    {[44, 87, 130, 173, 216].map((y, idx) => (
                      <path
                        key={idx}
                        d={`M 112 135 C 200 135, 230 ${y}, 324 ${y}`}
                        stroke="#f26522"
                        strokeOpacity={hoveredFw === idx ? "0.9" : "0.4"}
                        strokeWidth={hoveredFw === idx ? "1.75" : "1.25"}
                        strokeDasharray="4 4"
                        className="transition-all duration-200"
                      />
                    ))}
                  </svg>

                  {/* Target Frameworks List (Right) */}
                  <div className="absolute right-0 top-[26px] w-[216px] flex flex-col gap-[7px] z-10">
                    {frameworks.map((fw, idx) => (
                      <div
                        key={fw.name}
                        onMouseEnter={() => setHoveredFw(idx)}
                        onMouseLeave={() => setHoveredFw(null)}
                        className={`h-[36px] px-3.5 rounded-[4px] border flex items-center justify-between transition-all duration-200 cursor-default select-none ${
                          hoveredFw === idx
                            ? isLight
                              ? "bg-white border-[#f26522]/50 shadow-[0_2px_8px_rgba(242,101,34,0.15)]"
                              : "bg-[#20201d] border-white/[0.22] shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                            : isLight
                            ? "bg-white border-[#e4e4e7]"
                            : "bg-[#161614] border-white/[0.08]"
                        }`}
                      >
                        <span className={`text-[13px] font-['Geist_Variable:Medium',sans-serif] font-medium transition-colors ${
                          hoveredFw === idx ? "text-[#f26522]" : isLight ? "text-[#09090b]" : "text-[#e4e4e7]"
                        }`}>
                          {fw.name}
                        </span>
                        <span className="text-[11px] font-['Geist_Mono_Variable:Regular',sans-serif] font-mono text-[#8e8e93]">
                          {fw.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className={`pt-3 border-t flex items-center gap-2.5 flex-wrap ${
                  isLight ? "border-[#e4e4e7]" : "border-white/[0.07]"
                }`}>
                  <button
                    type="button"
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[3px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                      activeTab === 0
                        ? "border-[#f26522]/60 bg-[#f26522]/[0.08] text-[#f26522]"
                        : isLight
                        ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                        : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#f26522]" />
                    <span>23 Frameworks</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab(1)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[3px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                      activeTab === 1
                        ? "border-[#f26522]/60 bg-[#f26522]/[0.08] text-[#f26522]"
                        : isLight
                        ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                        : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#71717a]" />
                    <span>Long-Term Accuracy</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[3px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                      activeTab === 2
                        ? "border-[#f26522]/60 bg-[#f26522]/[0.08] text-[#f26522]"
                        : isLight
                        ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                        : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#71717a]" />
                    <span>P75 Latency</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* ════════════════════════════════════════════════════════════════
             LAYOUT B: CENTERED PRODUCT IN MIDDLE LAYER
          ════════════════════════════════════════════════════════════════ */
          <motion.div
            key="centered-layout"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-4"
          >
            {/* Top Eyebrow: Pure clean text, no fill, no dot, no stroke */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center justify-center"
            >
              <span className="font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] sm:text-[12.5px] font-mono tracking-[2.2px] uppercase font-semibold text-[#f26522]">
                THE MEMORY LAYER FOR AI AGENTS
              </span>
            </motion.div>

            {/* Centered Headline: Typewriter Text Animation */}
            <div className="mb-6 flex justify-center w-full">
              <TypewriterHeadline
                segments={typewriterSegments}
                onComplete={handleTypingComplete}
                className={`font-['Space_Grotesk',sans-serif] font-medium text-[36px] sm:text-[50px] md:text-[58px] lg:text-[64px] tracking-[-0.035em] leading-[1.08] max-w-[980px] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}
                speed={20}
                startDelay={140}
              />
            </div>

            {/* Centered Subtext */}
            <motion.p
              initial={hasRevealedRef.current ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={
                revealPhase === "buttons" || revealPhase === "product"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12 }
              }
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`font-['Space_Grotesk',sans-serif] text-[16px] sm:text-[18px] max-w-[680px] leading-[1.6] mb-8 ${
                isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
              }`}
            >
              Maximem Synap gives AI agents persistent, structured memory and active context management. Sub-15ms P75 anticipatory retrieval built for production scale.
            </motion.p>

            {/* Centered CTA Row - Reveal Phase 2 (Then the button reveal) */}
            <motion.div
              initial={hasRevealedRef.current ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.94 }}
              animate={
                revealPhase === "buttons" || revealPhase === "product"
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 22, scale: 0.94 }
              }
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10"
            >
              <a
                href="/signup"
                className="group h-[48px] pl-6 pr-3 bg-[#f26522] hover:bg-[#ff7533] text-white font-['Space_Grotesk',sans-serif] font-medium text-[15px] rounded-[10px] flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow cursor-pointer select-none"
              >
                <span className="tracking-tight">Get Started</span>
                <span className="size-7 rounded-[6px] bg-white text-[#f26522] flex items-center justify-center shadow-sm shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              <a
                href="/playground"
                className={`h-[48px] px-6 rounded-[10px] border font-['Space_Grotesk',sans-serif] font-medium text-[15px] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer select-none ${
                  isLight
                    ? "bg-[#f4f4f6] hover:bg-[#eaebee] border-[#e4e4e7] text-[#18181b]"
                    : "bg-[#18181b] hover:bg-[#222226] border-white/10 text-white"
                }`}
              >
                <span>Setup for Agent</span>
              </a>
            </motion.div>

            {/* 3 Metrics Row: Animated Counters on Load - Reveal Phase 3 (With Product) */}
            <motion.div
              initial={hasRevealedRef.current ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={
                revealPhase === "product"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-12"
            >
              <div className="flex flex-col items-center group cursor-default">
                <AnimatedCounter
                  value={92}
                  suffix="%"
                  duration={1.8}
                  delay={0.1}
                  trigger={revealPhase === "product"}
                  className="font-semibold text-[28px] sm:text-[32px] text-[#f26522] leading-none"
                />
                <span className={`text-[12px] mt-1.5 transition-colors ${
                  isLight ? "text-[#71717a]" : "text-[#8e8e93]"
                }`}>
                  LongMemEval accuracy
                </span>
              </div>

              <div className="flex flex-col items-center group cursor-default">
                <AnimatedCounter
                  value={93.2}
                  suffix="%"
                  decimals={1}
                  duration={1.9}
                  delay={0.2}
                  trigger={revealPhase === "product"}
                  className={`font-semibold text-[28px] sm:text-[32px] leading-none ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                />
                <span className={`text-[12px] mt-1.5 transition-colors ${
                  isLight ? "text-[#71717a]" : "text-[#8e8e93]"
                }`}>
                  LoCoMo accuracy
                </span>
              </div>

              <div className="flex flex-col items-center group cursor-default">
                <AnimatedCounter
                  value={15}
                  prefix="< "
                  suffix="ms"
                  duration={1.6}
                  delay={0.3}
                  trigger={revealPhase === "product"}
                  className={`font-semibold text-[28px] sm:text-[32px] leading-none ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                />
                <span className={`text-[12px] mt-1.5 transition-colors ${
                  isLight ? "text-[#71717a]" : "text-[#8e8e93]"
                }`}>
                  P75 in-conversation retrieval
                </span>
              </div>
            </motion.div>

            {/* ── MIDDLE LAYER PRODUCT / CODE TERMINAL - Reveal Phase 3 (Than the product) ── */}
            <motion.div
              initial={hasRevealedRef.current ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.96 }}
              animate={
                revealPhase === "product"
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 36, scale: 0.96 }
              }
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[960px]"
            >
              {heroVisual === "dashboard" ? (
                <SynapDashboardVisual isLight={isLight} />
              ) : (
                <div
                  className={`w-full rounded-[10px] border overflow-hidden text-left transition-all duration-300 ${
                    isLight
                      ? "bg-[#fafafa] border-[#e4e4e7] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                      : "bg-[#0c0d12] border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                  }`}
                >
                  {/* Top Category & Language Bar */}
                  <div className={`px-4 py-3 border-b flex items-center justify-between flex-wrap gap-2 ${
                    isLight ? "bg-[#f4f4f5] border-[#e4e4e7]" : "bg-[#141417] border-white/[0.08]"
                  }`}>
                    {/* Category Tabs */}
                    <div className={`flex items-center gap-1.5 p-1 rounded-[6px] border ${
                      isLight ? "bg-white border-[#e4e4e7]" : "bg-[#0c0d12] border-white/[0.08]"
                    }`}>
                      <button
                        type="button"
                        onClick={() => setCenteredProductTab("sdk")}
                        className={`px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors flex items-center gap-1.5 ${
                          centeredProductTab === "sdk"
                            ? "bg-[#f26522] text-white"
                            : isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        <span className="size-1.5 rounded-full bg-white" />
                        <span>SDK Integration</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCenteredProductTab("harness")}
                        className={`px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors ${
                          centeredProductTab === "harness"
                            ? "bg-[#f26522] text-white"
                            : isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Agent Harness
                      </button>
                      <button
                        type="button"
                        onClick={() => setCenteredProductTab("plugin")}
                        className={`px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors ${
                          centeredProductTab === "plugin"
                            ? "bg-[#f26522] text-white"
                            : isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Plugin
                      </button>
                    </div>

                    {/* Language Selector + Copy Button */}
                    <div className="flex items-center gap-1">
                      {(["python", "typescript", "langchain", "llama"] as const).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setCenteredLang(lang)}
                          className={`px-2.5 py-1 text-[11px] font-mono rounded-[4px] capitalize transition-colors ${
                            centeredLang === lang
                              ? isLight
                                ? "bg-[#f26522]/15 text-[#f26522] font-semibold"
                                : "bg-white/15 text-white font-semibold"
                              : isLight
                              ? "text-[#71717a] hover:text-[#09090b]"
                              : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={handleCopy}
                        className={`ml-2 px-2.5 py-1 text-[11px] font-mono rounded-[4px] transition-colors flex items-center gap-1 ${
                          isLight
                            ? "bg-white text-[#27272a] border border-[#e4e4e7] hover:bg-[#f4f4f5]"
                            : "text-zinc-300 bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        {copied ? "✓ Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  {/* Code Snippet Window */}
                  <div className={`p-6 font-mono text-[13px] leading-[1.65] overflow-x-auto ${
                    isLight ? "bg-white text-[#18181b]" : "bg-[#0b0c10] text-zinc-200"
                  }`}>
                    <pre>
                      <code>{centeredSnippets[centeredLang]}</code>
                    </pre>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
