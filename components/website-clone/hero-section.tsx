"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter, TypewriterHeadline, TypewriterSegment } from "@/components/ui/animated-text";
import SynapDashboardVisual from "./synap-dashboard-visual";

import HeroOptionWave from "./hero-option-wave";
import HeroOptionDither from "./hero-option-dither";
import InteractiveWaveCanvas from "./interactive-wave-canvas";
import {
  HeroBackgroundManager,
  HeroBgOption,
  HERO_BG_OPTIONS,
} from "./hero-backgrounds";
import {
  HeroFontOption,
  HERO_FONT_OPTIONS,
} from "./hero-fonts";

export type HeroVariant = "wave" | "pipeline" | "vertical" | "code" | "dither";

interface HeroSectionProps {
  isLight?: boolean;
}

export default function HeroSection({ isLight = false }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("wave");
  const [heroBg, setHeroBg] = useState<HeroBgOption>("interactive-wave");
  const [heroFont, setHeroFont] = useState<HeroFontOption>("geist");
  const [layoutMode, setLayoutMode] = useState<"split" | "centered">("split");
  const [heroVisual, setHeroVisual] = useState<"dashboard" | "code">("dashboard");
  const [isSwitcherMinimized, setIsSwitcherMinimized] = useState(false);
  const [revealPhase, setRevealPhase] = useState<"typing" | "buttons" | "product">("typing");
  const hasRevealedRef = useRef(false);

  const handleTypingComplete = () => {
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
  };

  const typewriterSegments: TypewriterSegment[] = [
    { text: "Build AI that " },
    {
      text: "remembers,",
      className: isLight ? "text-[#f26522]" : "text-white",
    },
    { text: " learns and gets better" },
    { text: "over time.", lineBreakBefore: true },
  ];

  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const [hoveredFw, setHoveredFw] = useState<number | null>(null);
  const [centeredProductTab, setCenteredProductTab] = useState<"sdk" | "harness" | "plugin">("sdk");
  const [centeredLang, setCenteredLang] = useState<"python" | "typescript" | "langchain" | "llama">("python");
  const [copied, setCopied] = useState(false);



  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const modeParam = params.get("layout");
      if (modeParam === "centered") {
        setLayoutMode("centered");
      } else if (modeParam === "split") {
        setLayoutMode("split");
      }
      const heroParam = params.get("hero");
      if (heroParam === "code") {
        setHeroVisual("code");
      } else if (heroParam === "dashboard") {
        setHeroVisual("dashboard");
      }

      // Check hero variant option param
      const variantParam = params.get("variant") || params.get("option") || params.get("heroOption") || params.get("hero") || params.get("layout");
      if (variantParam === "pipeline" || variantParam === "split" || variantParam === "1") {
        handleSelectVariant("pipeline");
      } else if (variantParam === "vertical" || variantParam === "centered" || variantParam === "3") {
        handleSelectVariant("vertical");
      } else if (variantParam === "code" || variantParam === "4") {
        handleSelectVariant("code");
      } else if (variantParam === "dither" || variantParam === "5") {
        handleSelectVariant("dither");
      } else if (variantParam === "wave" || variantParam === "2") {
        handleSelectVariant("wave");
      } else {
        const saved = localStorage.getItem("maximem_hero_variant") as HeroVariant | null;
        if (saved && ["wave", "pipeline", "vertical", "code", "dither"].includes(saved)) {
          handleSelectVariant(saved);
        } else {
          handleSelectVariant("wave");
        }
      }

      // Check hero background param
      const bgParam = params.get("bg");
      if (bgParam && ["interactive-wave", "constellation", "cyber-aurora", "studio-spotlight"].includes(bgParam)) {
        setHeroBg(bgParam as HeroBgOption);
      } else {
        const savedBg = localStorage.getItem("maximem_hero_bg") as HeroBgOption | null;
        if (savedBg && ["interactive-wave", "constellation", "cyber-aurora", "studio-spotlight"].includes(savedBg)) {
          setHeroBg(savedBg);
        }
      }

      // Check hero font param
      const fontParam = params.get("font");
      if (fontParam && ["geist", "sora", "jakarta", "manrope"].includes(fontParam)) {
        setHeroFont(fontParam as HeroFontOption);
      } else {
        const savedFont = localStorage.getItem("maximem_hero_font") as HeroFontOption | null;
        if (savedFont && ["geist", "sora", "jakarta", "manrope"].includes(savedFont)) {
          setHeroFont(savedFont);
        }
      }
    }
  }, []);

  const handleSelectVariant = (variant: HeroVariant) => {
    setHeroVariant(variant);
    if (variant === "pipeline") {
      setLayoutMode("split");
      setHeroVisual("dashboard");
    } else if (variant === "vertical") {
      setLayoutMode("centered");
      setHeroVisual("dashboard");
    } else if (variant === "code") {
      setLayoutMode("centered");
      setHeroVisual("code");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("maximem_hero_variant", variant);
    }
  };

  const handleSelectBg = (bg: HeroBgOption) => {
    setHeroBg(bg);
    if (typeof window !== "undefined") {
      localStorage.setItem("maximem_hero_bg", bg);
    }
  };

  const handleSelectFont = (font: HeroFontOption) => {
    setHeroFont(font);
    if (typeof window !== "undefined") {
      localStorage.setItem("maximem_hero_font", font);
    }
  };

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
      data-hero-font={heroFont}
      className={`relative w-full transition-colors duration-500 flex flex-col items-center justify-start ${
        heroVariant === "dither"
          ? "text-white"
          : isLight ? "bg-[#fafaf9] text-[#09090b]" : "bg-[#0c0c0b] text-white"
      }`}
    >
      {/* ── Main Hero Content ── */}
      {heroVariant === "wave" ? (
        /* ════════════════════════════════════════════════════════════════
           VARIANT 1: AMBER HORIZON WAVE & ACCURACY GRAPH (User Screenshot)
        ════════════════════════════════════════════════════════════════ */
        <HeroOptionWave isLight={isLight} bgOption={heroBg} />
      ) : heroVariant === "dither" ? (
        /* ════════════════════════════════════════════════════════════════
           VARIANT 2: DITHER VEIL (Interactive 600px Floyd-Steinberg Canvas)
        ════════════════════════════════════════════════════════════════ */
        <HeroOptionDither isLight={isLight} />
      ) : (
        /* ════════════════════════════════════════════════════════════════
           VARIANT 3, 4, 5: PIPELINE, VERTICAL CENTER, & CODE TERMINAL (shared BG)
        ════════════════════════════════════════════════════════════════ */
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-12 pb-14">
          {/* Dynamic Hero Background Manager */}
          <HeroBackgroundManager activeOption={heroBg} isLight={isLight} />

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
            className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-8"
          >
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
              {/* LEFT COLUMN: Hero Content */}
              <div className="w-full lg:w-[50%] xl:w-[48%] max-w-[600px] flex flex-col items-start gap-7 lg:gap-8">
                <div className="w-full">
                <TypewriterHeadline
                  segments={typewriterSegments}
                  onComplete={handleTypingComplete}
                  className={`items-start text-left font-medium text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[48px] tracking-[-0.03em] leading-[1.13] ${
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
                className={`text-[14.5px] sm:text-[15px] leading-[26px] tracking-[-0.012em] max-w-[520px] ${
                  isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                }`}
              >
                Maximem gives AI agents persistent, structured memory and active context management; so every interaction makes them more personal, accurate and useful, while reducing token costs, and so that what your agents know becomes something a competitor cannot trivially copy.
              </motion.p>

              {/* Metrics Row: 92% (Orange), 93.2%, <15ms - Reveal Phase 2 (Positioned above CTA as in reference screenshot) */}
              <motion.div
                initial={hasRevealedRef.current ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={
                  revealPhase === "buttons" || revealPhase === "product"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-start gap-8 sm:gap-10"
              >
                <div className="flex flex-col items-start group cursor-default">
                  <AnimatedCounter
                    value={92}
                    suffix="%"
                    duration={1.8}
                    delay={0.1}
                    trigger={revealPhase === "buttons" || revealPhase === "product"}
                    className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}
                  />
                  <span className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
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
                    trigger={revealPhase === "buttons" || revealPhase === "product"}
                    className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}
                  />
                  <span className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
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
                    trigger={revealPhase === "buttons" || revealPhase === "product"}
                    className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}
                  />
                  <span className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}>
                    P75 in-conversation retrieval
                  </span>
                </div>
              </motion.div>

              {/* CTA Row - Reveal Phase 3 */}
              <motion.div
                initial={hasRevealedRef.current ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.94 }}
                animate={
                  revealPhase === "buttons" || revealPhase === "product"
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 22, scale: 0.94 }
                }
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start gap-3"
              >
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
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
              className="w-full lg:w-[46%] xl:w-[48%] max-w-[500px] flex justify-center lg:justify-end shrink-0"
            >
              <div className={`w-full rounded-[14px] p-5 sm:p-6 relative backdrop-blur-sm transition-colors duration-300 ${
                isLight
                  ? "bg-[#fafafa]/70 border border-[#e4e4e7] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.08)]"
                  : "bg-[#0c0c0b]/60 border border-white/[0.1] shadow-[0_2px_8px_rgba(0,0,0,0.3),0_20px_56px_rgba(0,0,0,0.6)]"
              }`}>


                {/* Main Tab Canvas (Height 310px) */}
                <div className="relative w-full h-[310px] my-3 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {/* TAB 0: Frameworks Mesh */}
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
                          <span className={`text-[26px] font-bold tracking-tight leading-none ${
                            isLight ? "text-[#09090b]" : "text-white"
                          }`}>
                            SYNAP
                          </span>
                          <span className="text-[11.5px] font-mono text-[#a1a1aa] leading-snug mt-2">
                            Tri-Store<br/>Engine
                          </span>
                        </div>

                        {/* SVG Connecting Curves & Flowing Nodes — tuned for 310px canvas */}
                        <svg
                          className="absolute inset-0 size-full pointer-events-none z-0"
                          viewBox="0 0 540 310"
                          preserveAspectRatio="none"
                          fill="none"
                        >
                          <defs>
                            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#f26522" floodOpacity="0.25" />
                            </filter>
                          </defs>
                          {/* 5 curves — each gets a unique id so animateMotion can reference them */}
                          {([38, 94, 150, 206, 262] as const).map((y, idx) => (
                            <path
                              key={idx}
                              id={`fw-path-${idx}`}
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
                            { pathId: "fw-path-0", dur: 2.2 },
                            { pathId: "fw-path-1", dur: 1.9 },
                            { pathId: "fw-path-2", dur: 2.5 },
                            { pathId: "fw-path-3", dur: 2.0 },
                            { pathId: "fw-path-4", dur: 2.8 },
                          ] as const).flatMap(({ pathId, dur }) =>
                            [0, dur * 0.5].map((offset, beadIdx) => (
                              <circle
                                key={`${pathId}-${beadIdx}`}
                                r={beadIdx === 0 ? "3.5" : "2.5"}
                                fill="#f26522"
                              >
                                <animateMotion
                                  dur={`${dur}s`}
                                  begin={`${offset}s`}
                                  repeatCount="indefinite"
                                  calcMode="spline"
                                  keyTimes="0;1"
                                  keySplines="0.4 0 0.2 1"
                                >
                                  <mpath href={`#${pathId}`} />
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

                        {/* Target Frameworks List (Right) — 5 rows at 46px with 10px gap, starts top-[15px] */}
                        <div className="absolute right-0 top-[15px] w-[240px] flex flex-col gap-[10px] z-10">
                          {frameworks.map((fw, idx) => (
                            <div
                              key={fw.name}
                              onMouseEnter={() => setHoveredFw(idx)}
                              onMouseLeave={() => setHoveredFw(null)}
                              className={`h-[46px] px-4 rounded-[8px] border flex items-center justify-between transition-all duration-200 cursor-default select-none ${
                                hoveredFw === idx
                                  ? isLight
                                    ? "bg-white border-[#f26522]/50 shadow-[0_2px_8px_rgba(242,101,34,0.15)]"
                                    : "bg-white/[0.06] border-white/[0.2] shadow-[0_2px_8px_rgba(0,0,0,0.4)] backdrop-blur-sm"
                                  : isLight
                                  ? "bg-white/60 border-[#e4e4e7]"
                                  : "bg-white/[0.03] border-white/[0.09]"
                              }`}
                            >
                              <span className={`text-[14px] font-semibold tracking-tight transition-colors ${
                                hoveredFw === idx ? "text-[#f26522]" : isLight ? "text-[#09090b]" : "text-white"
                              }`}>
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
                        {/* Chart top stats */}
                        <div className={`flex items-center justify-between border-b pb-2 ${
                          isLight ? "border-[#e4e4e7]" : "border-white/[0.07]"
                        }`}>
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

                        {/* Accuracy graph SVG */}
                        <div className="relative w-full h-[155px] mt-1">
                          <svg className="w-full h-full" viewBox="0 0 500 140" fill="none">
                            {/* Grid lines */}
                            <line x1="35" y1="20" x2="480" y2="20" stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"} strokeDasharray="3 3" />
                            <line x1="35" y1="55" x2="480" y2="55" stroke="rgba(4,184,76,0.2)" strokeDasharray="3 3" />
                            <line x1="35" y1="90" x2="480" y2="90" stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"} strokeDasharray="3 3" />
                            <line x1="35" y1="120" x2="480" y2="120" stroke={isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)"} />

                            {/* Y Axis labels */}
                            <text x="5" y="24" fill="#71717a" fontSize="9" fontFamily="monospace">100%</text>
                            <text x="5" y="59" fill="#04b84c" fontSize="9" fontFamily="monospace">90%</text>
                            <text x="5" y="94" fill="#71717a" fontSize="9" fontFamily="monospace">50%</text>
                            <text x="5" y="124" fill="#71717a" fontSize="9" fontFamily="monospace">25%</text>

                            {/* Area fill under Synap curve */}
                            <path
                              d="M 35 32 C 140 31, 240 30, 340 31 C 410 30, 450 32, 480 31 L 480 120 L 35 120 Z"
                              fill="url(#synapAccuracyGrad)"
                              opacity={isLight ? "0.1" : "0.15"}
                            />
                            <defs>
                              <linearGradient id="synapAccuracyGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f26522" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>

                            {/* Vanilla RAG curve (decaying) */}
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

                            {/* Synap sustained curve (solid 93.2%) */}
                            <motion.path
                              d="M 35 32 C 140 31, 240 30, 340 31 C 410 30, 450 32, 480 31"
                              stroke="#f26522"
                              strokeWidth="2.2"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />

                            {/* Active end beacon point */}
                            <circle cx="480" cy="31" r="3" fill="#f26522" />
                            <circle cx="480" cy="31" r="6" fill="#f26522" opacity="0.3" className="animate-ping" />
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
                        {/* Synap Bar */}
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

                        {/* Standard Vector DB */}
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
                              animate={{ width: "68%" }}
                              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                              className="h-full bg-[#52525b] rounded-[2px]"
                            />
                          </div>
                        </div>

                        {/* Graph DB */}
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

                {/* Bottom Controls */}
                <div className="pt-3 flex items-center gap-2.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                      isLight
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
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[11.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
                      isLight
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
                      isLight
                        ? "border-[#e4e4e7] bg-white text-[#71717a] hover:text-[#09090b]"
                        : "border-white/[0.08] bg-white/[0.02] text-[#8e8e93] hover:text-[#d4d4d8]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-[1px] ${activeTab === 2 ? "bg-[#f26522]" : "bg-[#71717a]"}`} />
                    <span>P75 Latency</span>
                  </button>
                </div>
              </div>
            </motion.div>
            </div>
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
            className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center text-center pt-4"
          >
            {/* Centered Headline: Typewriter Text Animation */}
            <div className="mb-6 flex justify-center w-full">
              <TypewriterHeadline
                segments={typewriterSegments}
                onComplete={handleTypingComplete}
                className={`font-medium text-[36px] sm:text-[50px] md:text-[58px] lg:text-[64px] tracking-[-0.03em] leading-[1.08] max-w-[980px] ${
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
              className={`text-[16px] sm:text-[18px] max-w-[680px] leading-[1.6] mb-8 ${
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
              className="flex flex-col items-center gap-3 mb-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
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
                  className={`w-full rounded-[14px] border overflow-hidden text-left transition-all duration-300 ${
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
        </div>
      )}

      {/* ── Floating Hero Style Switcher Dock ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-[96vw] select-none">
        <div
          className={`flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.55)] ${
            isLight
              ? "bg-white/95 border-[#e4e4e7] text-zinc-700"
              : "bg-[#141413]/95 border-white/[0.12] text-zinc-300"
          }`}
        >
          {isSwitcherMinimized ? (
            <button
              type="button"
              onClick={() => setIsSwitcherMinimized(false)}
              className="px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#f26522] flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Hero Style</span>
              <span>▲</span>
            </button>
          ) : (
            <>
              <div className="flex items-center pl-3 pr-1.5 hidden md:flex">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Hero Style:
                </span>
              </div>

              {/* 1. Amber Wave */}
              <button
                type="button"
                onClick={() => handleSelectVariant("wave")}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  heroVariant === "wave"
                    ? "bg-[#f26522] text-white shadow-sm font-semibold"
                    : isLight
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Amber Wave</span>
              </button>

              {/* 2. Dither Veil */}
              <button
                type="button"
                onClick={() => handleSelectVariant("dither")}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  heroVariant === "dither"
                    ? "bg-[#f26522] text-white shadow-sm font-semibold"
                    : isLight
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
                <span>Dither Veil</span>
              </button>

              {/* 3. Split Pipeline */}
              <button
                type="button"
                onClick={() => handleSelectVariant("pipeline")}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  heroVariant === "pipeline"
                    ? "bg-[#f26522] text-white shadow-sm font-semibold"
                    : isLight
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Split Pipeline</span>
              </button>

              {/* 4. Vertical Center */}
              <button
                type="button"
                onClick={() => handleSelectVariant("vertical")}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  heroVariant === "vertical"
                    ? "bg-[#f26522] text-white shadow-sm font-semibold"
                    : isLight
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Vertical Center</span>
              </button>

              {/* 5. Code Terminal */}
              <button
                type="button"
                onClick={() => handleSelectVariant("code")}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  heroVariant === "code"
                    ? "bg-[#f26522] text-white shadow-sm font-semibold"
                    : isLight
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Code Terminal</span>
              </button>

              <button
                type="button"
                onClick={() => setIsSwitcherMinimized(true)}
                title="Minimize switcher"
                aria-label="Minimize switcher"
                className="pl-1.5 pr-2 text-zinc-500 hover:text-zinc-300 text-[11px] cursor-pointer"
              >
                ▼
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
