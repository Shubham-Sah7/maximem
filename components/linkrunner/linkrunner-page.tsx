"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── Static Assets from Maximem ──────────────────────────────────────────────
const imgClaudeSkills = "/website-clone/6bf0a82de0f435acdf2709da1b099cd4c24bf460.png";
const imgMcpPaper = "/website-clone/d8ed252916b8f0dab62ac88c5a241e8a1f7ba05c.png";
const imgAgenticPaper = "/website-clone/d58a9ec38402123c051d047262f1de8219af0c4b.png";
const imgAws = "/website-clone/84e327ff56180cce3616c360143e2d92910f6296.png";
const imgNexus = "/website-clone/ea8e428bcf8309be5780d7de5255c64c76d1dcd3.png";
const imgNeo4j = "/website-clone/911b19730f3b929e0024b0dfa7c933bf0ec8447b.png";

// Real builder logos from Maximem
const imgBuilder1 = "/website-clone/a4f1d3c1f4f339c51188430eb8c65ec167cc6328.png";
const imgBuilder2 = "/website-clone/bde9e2000ea3d2e071140afe25ecd0a77821cf12.png";
const imgBuilder3 = "/website-clone/57658469841f9d4846bb556243c1ddc3bd3cc86b.png";
const imgBuilder4 = "/website-clone/3966c318087c34a87eab639481bcab8d2619c9a2.png";
const imgBuilder5 = "/website-clone/fd9e1e5c04b3fa7ffcf2e0956c3d9d406b68457b.png";
const imgBuilder6 = "/website-clone/5accd1373992738d0ddea3a5f06b409abe9879dc.png";
const imgBuilder7 = "/website-clone/33a14a1ee5ee5d513eea0b796e0410cbfb4d8478.png";
const imgBuilder8 = "/website-clone/ac91258f549b9924be02e9f8382d107c5ba8c279.png";
const imgBuilder9 = "/website-clone/0f3b3f8acae7bd1f4962f38f04a4e721bfa1df43.png";

export default function MaximemLightEdition() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"live" | "accuracy" | "frameworks">("live");
  const [activePlatformTab, setActivePlatformTab] = useState<number>(0);
  const [activeSdk, setActiveSdk] = useState<string>("python");
  const [consoleMode, setConsoleMode] = useState<"human" | "machine">("human");

  // All 14 builders requested by the user
  const builders = [
    { name: "IIT Delhi", logo: imgBuilder1 },
    { name: "Loopdesk", logo: imgBuilder2 },
    { name: "Aiden", logo: imgBuilder3 },
    { name: "Warrant", logo: imgBuilder4 },
    { name: "TruCommerce", logo: imgBuilder5 },
    { name: "Praxel", logo: imgBuilder6 },
    { name: "IIT Roorkee", logo: imgBuilder7 },
    { name: "Uncypher", logo: imgBuilder8 },
    { name: "BITS Pilani", logo: imgBuilder9 },
    { name: "Mindloop", logo: imgBuilder1 },
    { name: "HandaUncle", logo: imgBuilder2 },
    { name: "Supatest", logo: imgBuilder3 },
    { name: "helllo", logo: imgBuilder4 },
    { name: "Unpaved", logo: imgBuilder5 },
  ];

  const platformTabs = [
    { id: 0, title: "Synap Core", desc: "Asynchronous ingest and multi-modal vector/graph retrieval engine." },
    { id: 1, title: "Anticipatory Context", desc: "Pre-fetches memory before write operations complete to guarantee sub-15ms P75." },
    { id: 2, title: "Entity Resolution", desc: "Disambiguates people, projects, and facts across thousands of conversational sessions." },
    { id: 3, title: "Conscious Forgetting", desc: "Autonomous lifecycle consolidation and temporal decay to prevent context poisoning." },
    { id: 4, title: "Multi-Agent Sync", desc: "Shared memory mesh across agent fleets with fine-grained tenant isolation." },
  ];

  const sdkCode: Record<string, string> = {
    python: `from maximem import Synap

# 1. Initialize client
synap = Synap(api_key="mx_live_token...")

# 2. Asynchronously ingest agent turn
synap.ingest(
    agent_id="support_bot_01",
    user_id="user_8429",
    content="Customer asked about PostgreSQL HNSW schema migration in Q3."
)

# 3. Anticipatory retrieval in under 15ms
context = synap.retrieve(
    query="What were the database constraints discussed?",
    agent_id="support_bot_01",
    include_graph=True
)
print(f"Confidence: {context.confidence} | Latency: {context.latency_ms}ms")`,
    typescript: `import { Synap } from "@maximem/synap";

// 1. Initialize client
const synap = new Synap({ apiKey: process.env.MAXIMEM_API_KEY });

// 2. Write turn (returns immediately, processed asynchronously)
await synap.ingest({
  agentId: "agent_analyst_04",
  session: "sess_9124",
  content: "Agreed latency target for recommender service is P75 < 15ms."
});

// 3. Anticipatory context resolution across vector + graph
const context = await synap.retrieve({
  query: "recommender latency target",
  agentId: "agent_analyst_04",
  entityResolution: true
});`,
    langchain: `from langchain_community.chat_models import ChatOpenAI
from maximem.integrations.langchain import SynapMemory

# Seamless drop-in memory layer for LangChain / LangGraph
memory = SynapMemory(
    api_key="mx_live_...",
    agent_id="agent_planner",
    session_id="session_772"
)

# Context automatically injected and updated on each step
chain = ConversationChain(llm=ChatOpenAI(), memory=memory)`,
    llama: `from llama_index.core import VectorStoreIndex
from maximem.integrations.llamaindex import SynapContextRetriever

# Unified context retriever across vectors and 2-hop knowledge graph
retriever = SynapContextRetriever(
    api_key="mx_live_...",
    top_k=5,
    conscious_forgetting=True
)
query_engine = index.as_query_engine(retriever=retriever)`,
  };

  return (
    <div className="w-full bg-white text-[#1a1a24] font-['Geist',sans-serif] flex flex-col items-center select-text">
      {/* ── 1. Top Announcement Bar (Linkrunner Clean Style) ──────────────── */}
      <div className="w-full bg-[#f9fafb] border-b border-[#e8e8ed] py-[9px] px-4 flex items-center justify-center text-[13px] tracking-[-0.01em]">
        <div className="flex items-center gap-2 max-w-[1240px] text-center flex-wrap justify-center">
          <span className="bg-[#4d4bf7]/10 text-[#4d4bf7] font-medium text-[11px] px-[8px] py-[2px] rounded-[4px]">
            New research from Maximem
          </span>
          <span className="text-[#5d5d64]">
            Agentic Context Management: Solving Agent Memory and Cost by Treating Them as Lifecycle and Architecture Problems.
          </span>
          <a
            href="https://www.maximem.ai/blog/agentic-context-management-paper"
            target="_blank"
            rel="noreferrer"
            className="text-[#4d4bf7] hover:text-[#3d3be0] font-medium flex items-center gap-[3px] hover:underline"
          >
            Read the paper →
          </a>
        </div>
      </div>

      {/* ── 2. Linkrunner Style Navigation Header ─────────────────────────── */}
      <header className="w-full sticky top-[42px] z-40 bg-white/95 backdrop-blur-md border-b border-[#e8e8ed]">
        <div className="max-w-[1240px] mx-auto px-6 h-[64px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-[10px]">
            <div className="size-[28px] rounded-[6px] bg-[#4d4bf7] flex items-center justify-center text-white shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </div>
            <span className="font-['Geist:SemiBold',sans-serif] text-[18px] font-semibold tracking-[-0.03em] text-[#1a1a24]">
              Maximem
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-[24px] text-[13.5px] text-[#5d5d64] font-normal tracking-[-0.01em]">
            <a href="https://www.maximem.ai/synap" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Products</a>
            <a href="https://www.maximem.ai/synap/pricing" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Pricing</a>
            <a href="https://www.maximem.ai/playground" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Playground</a>
            <a href="https://www.maximem.ai/use-cases/synap" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Use Cases</a>
            <a href="https://www.maximem.ai/the-memory-problem" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Why Memory</a>
            <a href="https://www.maximem.ai/synap/integrations" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Integrations</a>
            <a href="https://docs.maximem.ai/" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Docs</a>
            <a href="https://www.maximem.ai/blog" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24] transition-colors">Blog &amp; Resources</a>
          </nav>

          {/* CTA Buttons in exact Linkrunner style */}
          <div className="flex items-center gap-[10px]">
            {/* Theme Toggle Button to switch to Dark Mode */}
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("toggle-theme", { detail: { target: "maximem" } }));
                }
              }}
              className="size-[34px] rounded-[4px] bg-white hover:bg-[#f9f9fb] border border-[#e8e8ed] text-[#5d5d64] hover:text-[#1a1a24] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              title="Switch to Dark Mode (Shortcut: D or T)"
              aria-label="Switch to Dark Mode"
            >
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>

            <a
              href="https://cal.com/gaurav-dadhich-maximem-ai/30min"
              target="_blank"
              rel="noreferrer"
              className="h-[34px] px-[14px] bg-white border border-[#e8e8ed] hover:bg-[#f9f9fb] text-[#303037] text-[13px] font-medium rounded-[4px] shadow-sm transition-colors flex items-center gap-[8px]"
            >
              <span>Book Demo</span>
              <kbd className="hidden sm:inline-block bg-[#f0f0f4] text-[#8f8f96] text-[10px] font-mono px-[5px] py-[1px] rounded-[3px] border border-[#e4e4e9]">C</kbd>
            </a>
            <a
              href="https://synap.maximem.ai/"
              target="_blank"
              rel="noreferrer"
              className="h-[34px] px-[14px] bg-[#4d4bf7] hover:bg-[#3d3be0] text-white text-[13px] font-medium rounded-[4px] shadow-[0_1px_2px_rgba(77,75,247,0.2)] transition-colors flex items-center gap-[8px]"
            >
              <span>Get Started Free</span>
              <kbd className="hidden sm:inline-block bg-white/20 text-white text-[10px] font-mono px-[5px] py-[1px] rounded-[3px]">S</kbd>
            </a>
          </div>
        </div>
      </header>

      {/* ── 3. Linkrunner Hero Section with Ambient Sky Mesh ─────────────── */}
      <section className="relative w-full pt-[68px] pb-[70px] flex flex-col items-center px-6 overflow-hidden">
        {/* Linkrunner ambient sky-blue aura mesh */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-gradient-to-b from-[#e3f0ff]/60 via-[#ecf3ff]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-[#e8e8ed] bg-white shadow-[0px_1px_2px_rgba(13,13,13,0.03)] text-[13px] text-[#41414b] mb-[24px]">
          <span className="size-[6px] rounded-full bg-[#04b84c]" />
          <span>Built for AI Engineers &amp; Autonomous Agents</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[44px] sm:text-[56px] md:text-[64px] font-normal leading-[1.08] tracking-[-0.035em] text-[#1a1a24] text-center max-w-[940px] mb-[20px]">
          Build AI that remembers, learns and gets better over time.
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] sm:text-[18px] text-[#5d5d64] leading-[1.6] text-center max-w-[780px] tracking-[-0.015em] mb-[28px]">
          Maximem gives AI agents persistent, structured memory and active context management; so every interaction makes them more personal, accurate and useful, while reducing token costs, and so that what your agents know becomes something a competitor cannot trivially copy.
        </p>

        {/* 3 Benchmark Stat Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-[32px]">
          <a
            href="https://www.maximem.ai/evals"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-[8px] border border-[#e8e8ed] shadow-sm hover:border-[#4d4bf7]/40 transition-colors"
          >
            <span className="font-['Geist:SemiBold',sans-serif] text-[#f26522] font-semibold text-[15px]">92%</span>
            <span className="text-[#5d5d64] text-[13px]">LongMemEval accuracy</span>
          </a>
          <a
            href="https://www.maximem.ai/evals"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-[8px] border border-[#e8e8ed] shadow-sm hover:border-[#4d4bf7]/40 transition-colors"
          >
            <span className="font-['Geist:SemiBold',sans-serif] text-[#1a1a24] font-semibold text-[15px]">93.2%</span>
            <span className="text-[#5d5d64] text-[13px]">LoCoMo accuracy</span>
          </a>
          <a
            href="https://www.maximem.ai/evals"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-[8px] border border-[#e8e8ed] shadow-sm hover:border-[#4d4bf7]/40 transition-colors"
          >
            <span className="font-['Geist:SemiBold',sans-serif] text-[#04b84c] font-semibold text-[15px]">&lt;15ms</span>
            <span className="text-[#5d5d64] text-[13px]">P75 in-conversation retrieval</span>
          </a>
        </div>

        {/* Hero CTAs */}
        <div className="flex items-center gap-[12px] mb-[16px]">
          <a
            href="https://synap.maximem.ai/"
            target="_blank"
            rel="noreferrer"
            className="h-[40px] px-[20px] bg-[#4d4bf7] hover:bg-[#3d3be0] text-white text-[14px] font-medium rounded-[4px] shadow-[0_1px_3px_rgba(77,75,247,0.3)] transition-colors flex items-center gap-[8px]"
          >
            <span>Get Started Free</span>
            <kbd className="bg-white/20 text-white text-[10px] font-mono px-[5px] py-[1px] rounded-[3px]">S</kbd>
          </a>
          <a
            href="https://synap.maximem.ai/playground"
            target="_blank"
            rel="noreferrer"
            className="h-[40px] px-[20px] bg-white hover:bg-[#f9f9fb] text-[#303037] border border-[#e8e8ed] text-[14px] font-medium rounded-[4px] shadow-sm transition-colors flex items-center gap-[8px]"
          >
            <span>Try in Playground</span>
            <kbd className="bg-[#f0f0f4] text-[#8f8f96] text-[10px] font-mono px-[5px] py-[1px] rounded-[3px] border border-[#e4e4e9]">P</kbd>
          </a>
        </div>

        <p className="text-[12px] text-[#8f8f96] tracking-[-0.01em] mb-[36px]">
          No credit card needed. First 100,000 memory operations are free.
        </p>

        {/* ── 4. Interactive Hero Console Preview (Linkrunner Browser Mock) ──── */}
        <div className="w-full max-w-[1188px] rounded-[12px] border border-[#e8e8ed] bg-[#0c0d12] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* Top Browser Bar */}
          <div className="h-[44px] bg-[#141620] border-b border-white/[0.08] px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-[10px] rounded-full bg-[#ef4444]/80" />
              <span className="size-[10px] rounded-full bg-[#eab308]/80" />
              <span className="size-[10px] rounded-full bg-[#22c55e]/80" />
            </div>

            {/* Showcase Tab Selector inside console */}
            <div className="hidden sm:flex items-center gap-1 bg-[#0c0d12] border border-white/[0.08] rounded-[6px] p-1">
              <button
                onClick={() => setActiveConsoleTab("live")}
                className={`px-3 py-1 rounded-[4px] text-[11px] font-mono transition-colors ${
                  activeConsoleTab === "live" ? "bg-white/[0.12] text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                • Live Context Mesh
              </button>
              <button
                onClick={() => setActiveConsoleTab("accuracy")}
                className={`px-3 py-1 rounded-[4px] text-[11px] font-mono transition-colors ${
                  activeConsoleTab === "accuracy" ? "bg-[#04b84c]/20 text-[#04b84c]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Accuracy vs Context Window (93.2%)
              </button>
              <button
                onClick={() => setActiveConsoleTab("frameworks")}
                className={`px-3 py-1 rounded-[4px] text-[11px] font-mono transition-colors ${
                  activeConsoleTab === "frameworks" ? "bg-[#818cf8]/20 text-[#818cf8]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                23 Frameworks
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setConsoleMode(consoleMode === "human" ? "machine" : "human")}
                className="text-[11px] font-mono text-zinc-300 bg-white/[0.08] px-2.5 py-1 rounded-[4px] border border-white/[0.1] hover:bg-white/[0.15] transition-colors"
              >
                Mode: {consoleMode.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Console Body with AnimatePresence */}
          <div className="p-6 md:p-8 font-mono text-white text-[13px] min-h-[380px]">
            <AnimatePresence mode="wait">
              {activeConsoleTab === "live" && (
                <motion.div
                  key="live"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                >
                  {/* Left Column: Live Ingest & Retrieval */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-zinc-400 text-[11px] border-b border-white/[0.08] pb-2">
                      <span className="tracking-wider uppercase font-semibold text-[#818cf8]">LIVE INGEST &amp; CONTEXT ASSEMBLY</span>
                      <span>SESSION #8429</span>
                    </div>

                    {/* User Query Card */}
                    <div className="bg-[#141620] border border-white/[0.08] rounded-[8px] p-4">
                      <div className="text-[11px] text-zinc-400 mb-1 flex items-center justify-between">
                        <span>USER_TURN</span>
                        <span className="text-[#04b84c]">Confidence: 99.4%</span>
                      </div>
                      <p className="text-zinc-200 font-sans text-[14px]">
                        &ldquo;What were our agreed latency constraints and database schemas for the recommendation service in Q3?&rdquo;
                      </p>
                    </div>

                    {/* Retrieval Mesh Split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#141620] border border-white/[0.08] rounded-[8px] p-3.5">
                        <span className="text-[10px] text-zinc-400 block mb-1">VECTOR STORE (0.942 COSINE)</span>
                        <p className="text-zinc-300 text-[12px] font-sans">
                          &ldquo;Q3 infra roadmap: p75 &lt; 15ms target for user-facing recommender.&rdquo;
                        </p>
                      </div>
                      <div className="bg-[#141620] border border-white/[0.08] rounded-[8px] p-3.5">
                        <span className="text-[10px] text-zinc-400 block mb-1">KNOWLEDGE GRAPH (2-HOP RESOLVED)</span>
                        <p className="text-zinc-300 text-[12px] font-sans">
                          RecommendationSvc ➔ Postgres+pgvector (Owner: InfraTeam)
                        </p>
                      </div>
                    </div>

                    {/* Injected Context Preview */}
                    <div className="bg-[#1a1d2e] border border-[#4d4bf7]/40 rounded-[8px] p-3.5">
                      <div className="flex items-center justify-between text-[11px] text-[#a5b4fc] mb-1">
                        <span>SYNTHESIZED CONTEXT INJECTED TO AGENT</span>
                        <span className="text-[#34d399]">84.2% Tokens Saved</span>
                      </div>
                      <p className="text-zinc-200 text-[12px]">
                        [Context Injection: Service=Recommendation, Schema=PostgreSQL_HNSW, P75_Target=15ms, Owner=InfraTeam]
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Gauges & Status */}
                  <div className="lg:col-span-5 bg-[#141620] border border-white/[0.08] rounded-[8px] p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-zinc-400 text-[11px] border-b border-white/[0.08] pb-2 mb-4">
                        <span className="tracking-wider uppercase font-semibold text-[#818cf8]">SYNAP PERFORMANCE ENGINE</span>
                        <span className="text-[#04b84c] flex items-center gap-1">
                          <span className="size-[6px] rounded-full bg-[#04b84c] animate-pulse" /> Online
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-[12px] mb-1">
                            <span className="text-zinc-300">Accuracy (LongMemEval)</span>
                            <span className="text-[#f26522] font-semibold">92.0%</span>
                          </div>
                          <div className="w-full h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
                            <div className="w-[92%] h-full bg-[#f26522] rounded-full" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[12px] mb-1">
                            <span className="text-zinc-300">Retrieval Speed (P75)</span>
                            <span className="text-[#04b84c] font-semibold">11.4 ms</span>
                          </div>
                          <div className="w-full h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
                            <div className="w-[88%] h-full bg-[#04b84c] rounded-full" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[12px] mb-1">
                            <span className="text-zinc-300">Token Cost Reduction</span>
                            <span className="text-[#818cf8] font-semibold">74.5%</span>
                          </div>
                          <div className="w-full h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
                            <div className="w-[74.5%] h-full bg-[#818cf8] rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/[0.08] pt-4 mt-6 text-[11px] text-zinc-400 space-y-1">
                      <div className="flex justify-between">
                        <span>Connected Framework:</span>
                        <span className="text-zinc-200">LangChain / LangGraph</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Memory Lifecycle:</span>
                        <span className="text-[#34d399]">Active Learning</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Namespace Isolation:</span>
                        <span className="text-zinc-200">Tenant Encrypted</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: ACCURACY OVER A LONG CONVERSATION (Exact User Prompt Quote) */}
              {activeConsoleTab === "accuracy" && (
                <motion.div
                  key="accuracy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider">BENCHMARK VISUALIZATION</div>
                      <h4 className="text-[16px] font-sans font-semibold text-white">
                        ACCURACY OVER A LONG CONVERSATION
                      </h4>
                    </div>
                    <div className="flex items-center gap-4 text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#04b84c]" />
                        <span className="text-white font-medium">Maximem Synap (93.2% LoCoMo)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#ef4444]" />
                        <span className="text-zinc-400">Context Window Only (Degrades)</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative w-full h-[220px] bg-[#141620] border border-white/[0.08] rounded-[8px] p-4">
                    {/* Production Zone Indicator */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#04b84c]/10 border border-[#04b84c]/30 px-3 py-1 rounded-[4px] text-[11px] text-[#04b84c]">
                      <span className="size-2 rounded-full bg-[#04b84c] animate-pulse" />
                      <span>PRODUCTION ZONE · ≥ 90%</span>
                    </div>

                    <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="60" y1="30" x2="780" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                      <line x1="60" y1="70" x2="780" y2="70" stroke="rgba(4,184,76,0.25)" strokeDasharray="4 4" />
                      <line x1="60" y1="120" x2="780" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                      <line x1="60" y1="170" x2="780" y2="170" stroke="rgba(255,255,255,0.12)" />

                      {/* Threshold 90% guide line */}
                      <text x="15" y="74" fill="#04b84c" fontSize="11" fontFamily="monospace">≥ 90%</text>
                      <text x="25" y="124" fill="#71717a" fontSize="11" fontFamily="monospace">60%</text>
                      <text x="25" y="174" fill="#71717a" fontSize="11" fontFamily="monospace">30%</text>

                      {/* Synap Sustained 93.2% Curve */}
                      <path
                        d="M 60 58 C 200 56, 350 54, 500 58 C 650 56, 720 57, 780 58"
                        stroke="#04b84c"
                        strokeWidth="3"
                        fill="none"
                      />
                      {/* Synap underfill */}
                      <path
                        d="M 60 58 C 200 56, 350 54, 500 58 C 650 56, 720 57, 780 58 L 780 170 L 60 170 Z"
                        fill="rgba(4,184,76,0.08)"
                      />

                      {/* Context Window Curve (Steep Degradation) */}
                      <path
                        d="M 60 62 C 160 68, 240 100, 360 128 C 480 152, 620 162, 780 166"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        fill="none"
                      />

                      {/* Points */}
                      <circle cx="780" cy="58" r="5" fill="#04b84c" />
                      <circle cx="780" cy="166" r="4" fill="#ef4444" />
                    </svg>

                    {/* Bottom Axis text */}
                    <div className="flex justify-between items-center text-[11px] text-zinc-400 pt-2 px-12">
                      <span className="font-semibold text-zinc-300">DEMO (Turns 1-10)</span>
                      <span className="text-[#818cf8] font-medium">as the conversation grows →</span>
                      <span className="font-semibold text-white">PRODUCTION (Turns 50-100+)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px] font-sans">
                    <div className="p-3 bg-[#141620] border border-[#04b84c]/30 rounded-[6px]">
                      <span className="text-[#04b84c] font-semibold block mb-0.5">Maximem Synap Memory Engine</span>
                      <p className="text-zinc-300">Maintains 93.2% LoCoMo across thousands of turns via asynchronous tri-store synthesis.</p>
                    </div>
                    <div className="p-3 bg-[#141620] border border-white/[0.08] rounded-[6px]">
                      <span className="text-zinc-400 font-semibold block mb-0.5">Context Window Only</span>
                      <p className="text-zinc-400">Rapidly degrades due to attention dilution, quadratic token costs, and loss of intermediate facts.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: 23 Frameworks */}
              {activeConsoleTab === "frameworks" && (
                <motion.div
                  key="frameworks"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <div className="border-b border-white/[0.08] pb-3">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-wider">ONE-LINE DROP-IN ADAPTERS</div>
                    <h4 className="text-[16px] font-sans font-semibold text-white">
                      Synap is a memory core that drops into 23 agent frameworks natively
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      { name: "LangChain", tag: "Python & TypeScript", badge: "Official" },
                      { name: "LangGraph", tag: "Cyclic Stateful Workflows", badge: "Live" },
                      { name: "LlamaIndex", tag: "Retrieval & Agents", badge: "Official" },
                      { name: "CrewAI", tag: "Multi-Agent Orchestration", badge: "Native" },
                      { name: "AutoGPT", tag: "Autonomous Loops", badge: "Adapter" },
                      { name: "Vercel AI SDK", tag: "Edge & Next.js", badge: "Plug & Play" },
                      { name: "LiveKit", tag: "Voice & Real-Time Agents", badge: "Sub-15ms" },
                      { name: "Semantic Kernel", tag: "Microsoft AI Core", badge: "Adapter" },
                      { name: "Haystack", tag: "Pipeline Retargeting", badge: "Native" },
                      { name: "OpenAI Assistants", tag: "Thread Memory Injection", badge: "Sync" },
                      { name: "Anthropic Claude", tag: "Tool & Session Context", badge: "Verified" },
                      { name: "+ 12 More", tag: "REST API & Custom Hooks", badge: "Any Agent" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#141620] border border-white/[0.08] hover:border-[#818cf8]/40 p-3 rounded-[8px] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[13px] font-medium text-white font-sans">{item.name}</span>
                          <span className="text-[9px] bg-white/[0.08] text-[#a5b4fc] px-1.5 py-0.5 rounded font-mono">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-400 block">{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 5. Trusted by Builders at (All 14 Builders from Prompt) ───────── */}
      <section className="w-full py-[50px] border-y border-[#e8e8ed] bg-[#fcfcfd] flex flex-col items-center overflow-hidden">
        <p className="text-[13px] text-[#8f8f96] font-normal tracking-[-0.01em] uppercase mb-[24px]">
          Trusted by builders at
        </p>

        {/* Builder Logo Pills */}
        <div className="w-full max-w-[1240px] px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            {builders.map((b, i) => (
              <div
                key={i}
                className="h-[38px] px-[16px] bg-white border border-[#e8e8ed] rounded-[6px] shadow-sm flex items-center gap-[8px] text-[13px] text-[#41414b] font-medium hover:border-[#4d4bf7]/40 transition-colors"
              >
                <img src={b.logo} alt={b.name} className="size-[18px] object-contain opacity-80" />
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* As Featured In & Press */}
        <div className="mt-8 flex items-center gap-3 text-[13px] text-[#5d5d64]">
          <span>As featured in</span>
          <a
            href="https://www.maximem.ai/press"
            target="_blank"
            rel="noreferrer"
            className="text-[#4d4bf7] hover:text-[#3d3be0] font-medium hover:underline"
          >
            See all press coverage →
          </a>
        </div>

        {/* Supported by / Ecosystem */}
        <div className="flex items-center gap-8 mt-[28px] text-[12px] text-[#8f8f96] flex-wrap justify-center px-6">
          <span className="uppercase tracking-wider">Supported by:</span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={imgAws} alt="AWS" className="h-[18px] object-contain opacity-75" />
              <span className="text-[11px] text-[#8f8f96]">AWS Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={imgNexus} alt="Nexus" className="h-[16px] object-contain opacity-75" />
              <span className="text-[11px] text-[#8f8f96]">Nexus Venture Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={imgNeo4j} alt="Neo4j" className="h-[16px] object-contain opacity-75" />
              <span className="text-[11px] text-[#8f8f96]">Neo4j Graph Stack</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-[#a1a1aa] mt-3">
          AWS is a trademark of Amazon.com, Inc. or its affiliates.
        </p>
      </section>

      {/* ── 6. "What is Maximem?" Dual Product Showcase ───────────────────── */}
      <section className="w-full max-w-[1240px] px-6 py-[90px] flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-[12px] py-[4px] rounded-full border border-[#e8e8ed] bg-white text-[12px] text-[#4d4bf7] font-medium mb-[14px]">
          What is Maximem?
        </div>
        <h2 className="text-[32px] sm:text-[40px] font-normal leading-[1.15] tracking-[-0.03em] text-[#1a1a24] text-center max-w-[720px] mb-[16px]">
          Memory infrastructure for agents you build and the AI you use.
        </h2>
        <p className="text-[16px] text-[#5d5d64] leading-[1.6] text-center max-w-[700px] mb-[48px]">
          Maximem builds memory infrastructure: Synap, so the agents you build can remember, and Vity, a personal memory that stays encrypted even from us, so the AI you use can too.
        </p>

        {/* Dual Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product 1: Maximem Synap */}
          <div className="bg-[#f9f9fb] border border-[#e8e8ed] rounded-[16px] p-8 flex flex-col justify-between hover:border-[#4d4bf7]/50 transition-colors shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#4d4bf7]/10 text-[#4d4bf7] text-[12px] font-semibold px-2.5 py-1 rounded-[4px]">
                  FOR DEVELOPERS &amp; ORGANIZATIONS
                </span>
                <span className="text-[12px] text-[#8f8f96] font-mono">SDK v2.4</span>
              </div>
              <h3 className="text-[26px] font-normal tracking-[-0.025em] text-[#1a1a24] mb-2">
                Maximem Synap
              </h3>
              <p className="text-[15px] text-[#5d5d64] leading-[1.5] mb-6">
                The context management stack for the AI agents you build. Full-lifecycle memory engine with anticipatory retrieval.
              </p>
              <ul className="space-y-2.5 mb-8 text-[14px] text-[#41414b]">
                <li className="flex items-center gap-2">
                  <span className="text-[#04b84c] font-bold">✓</span>
                  <span>Persistent memory + anticipatory retrieval</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#04b84c] font-bold">✓</span>
                  <span>Entity resolution + knowledge pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#04b84c] font-bold">✓</span>
                  <span>92% LongMemEval · 93.2% LoCoMo accuracy</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.maximem.ai/synap"
              target="_blank"
              rel="noreferrer"
              className="h-[36px] px-4 bg-[#4d4bf7] hover:bg-[#3d3be0] text-white text-[13px] font-medium rounded-[4px] self-start flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Explore Synap</span>
              <span>→</span>
            </a>
          </div>

          {/* Product 2: Maximem Vity */}
          <div className="bg-[#f9f9fb] border border-[#e8e8ed] rounded-[16px] p-8 flex flex-col justify-between hover:border-[#4d4bf7]/50 transition-colors shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#04b84c]/10 text-[#04b84c] text-[12px] font-semibold px-2.5 py-1 rounded-[4px]">
                  FOR POWER USERS &amp; ENTHUSIASTS
                </span>
                <span className="text-[12px] text-[#8f8f96] font-mono">End-to-End Encrypted</span>
              </div>
              <h3 className="text-[26px] font-normal tracking-[-0.025em] text-[#1a1a24] mb-2">
                Maximem Vity
              </h3>
              <p className="text-[15px] text-[#5d5d64] leading-[1.5] mb-6">
                A secure personal context layer that follows you everywhere. Carries your preferences across every AI tool.
              </p>
              <ul className="space-y-2.5 mb-8 text-[14px] text-[#41414b]">
                <li className="flex items-center gap-2">
                  <span className="text-[#04b84c] font-bold">✓</span>
                  <span>Private cloud vault, encrypted by default</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#04b84c] font-bold">✓</span>
                  <span>Remembers preferences, work history &amp; tasks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#04b84c] font-bold">✓</span>
                  <span>Carries context across Claude, ChatGPT, Cursor &amp; Hermes</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.maximem.ai/vity"
              target="_blank"
              rel="noreferrer"
              className="h-[36px] px-4 bg-white border border-[#e8e8ed] hover:bg-[#f2f2f5] text-[#303037] text-[13px] font-medium rounded-[4px] self-start flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Explore Vity</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. Pillar 01: The Problem (Linkrunner Editorial Card) ──────────── */}
      <section className="w-full max-w-[1240px] px-6 py-[70px]">
        <div className="bg-[#fcfcfd] border border-[#e8e8ed] rounded-[20px] p-8 md:p-12">
          <div className="text-[13px] font-mono font-medium text-[#4d4bf7] mb-2">01 / The problem</div>
          <h3 className="text-[30px] md:text-[38px] font-normal tracking-[-0.03em] text-[#1a1a24] mb-4">
            Why memory, and why the alternatives fall short.
          </h3>
          <p className="text-[16px] text-[#5d5d64] leading-[1.65] max-w-[850px] mb-8">
            Bigger context windows do not fix it. Vector search is not it. Files do not scale, and the platforms will not own it for you. We answer the nine loudest objections to agent memory, with proof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-[#e8e8ed] rounded-[10px] p-5 shadow-sm">
              <div className="text-[15px] font-medium text-[#1a1a24] mb-2">Bigger Context Windows</div>
              <p className="text-[13px] text-[#5d5d64] leading-[1.5]">
                Token costs scale quadratically ($100+/hr), latency degrades to seconds, and needle-in-haystack attention dilution causes hallucinations.
              </p>
            </div>
            <div className="bg-white border border-[#e8e8ed] rounded-[10px] p-5 shadow-sm">
              <div className="text-[15px] font-medium text-[#1a1a24] mb-2">Naive Vector Search</div>
              <p className="text-[13px] text-[#5d5d64] leading-[1.5]">
                Cannot resolve entities across sessions, lacks temporal decay, and returns semantic neighbors that are factually out of date.
              </p>
            </div>
            <div className="bg-white border border-[#e8e8ed] rounded-[10px] p-5 shadow-sm">
              <div className="text-[15px] font-medium text-[#1a1a24] mb-2">Markdown Files</div>
              <p className="text-[13px] text-[#5d5d64] leading-[1.5]">
                No indexing speed, zero multi-agent synchronization, and no automated fact extraction or conscious forgetting.
              </p>
            </div>
          </div>

          <a
            href="https://www.maximem.ai/the-memory-problem"
            target="_blank"
            rel="noreferrer"
            className="text-[#4d4bf7] hover:text-[#3d3be0] text-[14px] font-medium inline-flex items-center gap-1 hover:underline"
          >
            Read the case for memory →
          </a>
        </div>
      </section>

      {/* ── 8. Pillar 02: How Synap Actually Works (Linkrunner Vector Pipeline) */}
      <section className="w-full max-w-[1240px] px-6 py-[80px] flex flex-col items-center">
        <div className="text-[13px] font-mono font-medium text-[#4d4bf7] mb-2">02 / How it works</div>
        <h3 className="text-[32px] md:text-[40px] font-normal tracking-[-0.03em] text-[#1a1a24] text-center mb-4">
          How Synap actually works
        </h3>
        <p className="text-[16px] text-[#5d5d64] leading-[1.65] text-center max-w-[850px] mb-12">
          A turn does not land in a database. It is ingested, its meaning is extracted into structure rather than raw text, and it is stored across a vector, graph, and file store, asynchronously, so the write call returns before any of that happens and never blocks your agent. Retrieval then nets across all three stores at once, and most reads never leave your process, because context is pre-fetched while the conversation is still going.
        </p>

        {/* Linkrunner Tab Bar for Platform Features */}
        <div className="w-full border border-[#e8e8ed] rounded-[12px] bg-white overflow-hidden shadow-sm mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-[#e8e8ed] bg-[#fcfcfd]">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePlatformTab(tab.id)}
                className={`py-3.5 px-3 text-[13px] font-medium text-center transition-colors border-r border-[#e8e8ed] last:border-r-0 ${
                  activePlatformTab === tab.id
                    ? "bg-white text-[#4d4bf7] border-b-2 border-b-[#4d4bf7]"
                    : "text-[#5d5d64] hover:text-[#1a1a24]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Interactive Pipeline Schematic */}
          <div className="p-8 bg-gradient-to-b from-[#f9fafc] to-white flex flex-col items-center">
            <p className="text-[14px] text-[#5d5d64] max-w-[700px] text-center mb-8">
              {platformTabs[activePlatformTab].desc}
            </p>

            {/* Architecture Node Flow in Linkrunner Card Aesthetics */}
            <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Node 1 */}
              <div className="bg-white border border-[#e8e8ed] rounded-[8px] p-4 text-center shadow-sm">
                <span className="text-[10px] font-mono text-[#8f8f96] block uppercase mb-1">INPUT</span>
                <span className="text-[14px] font-medium text-[#1a1a24] block">Your Agent</span>
                <span className="text-[11px] text-[#5d5d64]">Synap SDK</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#8f8f96]">➔</div>

              {/* Node 2 */}
              <div className="bg-white border border-[#4d4bf7]/40 rounded-[8px] p-4 text-center shadow-sm bg-[#4d4bf7]/[0.02]">
                <span className="text-[10px] font-mono text-[#4d4bf7] block uppercase mb-1">PIPELINE</span>
                <span className="text-[14px] font-medium text-[#1a1a24] block">Ingest &amp; Extract</span>
                <span className="text-[11px] text-[#5d5d64]">Structure, not raw text</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#8f8f96]">➔</div>

              {/* Node 3 */}
              <div className="bg-white border border-[#04b84c]/40 rounded-[8px] p-4 text-center shadow-sm bg-[#04b84c]/[0.02]">
                <span className="text-[10px] font-mono text-[#04b84c] block uppercase mb-1">TRI-STORE</span>
                <span className="text-[14px] font-medium text-[#1a1a24] block">Vector · Graph · File</span>
                <span className="text-[11px] text-[#5d5d64]">Anticipatory recall &lt;15ms</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.maximem.ai/synap/how-it-works"
          target="_blank"
          rel="noreferrer"
          className="text-[#4d4bf7] hover:text-[#3d3be0] text-[14px] font-medium inline-flex items-center gap-1 hover:underline"
        >
          See the full architecture →
        </a>
      </section>

      {/* ── 9. Pillar 03: Benchmarks (Linkrunner Crisp Tabular Comparison) ──── */}
      <section className="w-full max-w-[1240px] px-6 py-[70px] flex flex-col items-center">
        <div className="text-[13px] font-mono font-medium text-[#4d4bf7] mb-2">03 / Benchmarks</div>
        <h3 className="text-[32px] md:text-[40px] font-normal tracking-[-0.03em] text-[#1a1a24] text-center mb-4">
          How Synap compares
        </h3>
        <p className="text-[16px] text-[#5d5d64] text-center max-w-[720px] mb-10">
          The quick snapshot, measured on the same open-source LongMemEval harness.
        </p>

        {/* Clean Linkrunner Table Card */}
        <div className="w-full border border-[#e8e8ed] rounded-[12px] bg-white overflow-x-auto shadow-sm mb-6">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-[#e8e8ed] bg-[#f9fafb] text-[13px] text-[#5d5d64] font-medium">
                <th className="py-3.5 px-6 font-medium">Metric</th>
                <th className="py-3.5 px-6 font-semibold text-[#4d4bf7] bg-[#4d4bf7]/[0.04]">Synap</th>
                <th className="py-3.5 px-6 font-medium">Mem0</th>
                <th className="py-3.5 px-6 font-medium">Zep</th>
                <th className="py-3.5 px-6 font-medium">Supermemory</th>
              </tr>
            </thead>
            <tbody className="text-[14px] divide-y divide-[#e8e8ed]">
              <tr className="hover:bg-[#fcfcfd] transition-colors">
                <td className="py-4 px-6 font-medium text-[#1a1a24]">LongMemEval</td>
                <td className="py-4 px-6 font-semibold text-[#04b84c] bg-[#4d4bf7]/[0.04]">92%</td>
                <td className="py-4 px-6 text-[#5d5d64]">73.8%</td>
                <td className="py-4 px-6 text-[#5d5d64]">71.2%*</td>
                <td className="py-4 px-6 text-[#5d5d64]">71.3%</td>
              </tr>
              <tr className="hover:bg-[#fcfcfd] transition-colors">
                <td className="py-4 px-6 font-medium text-[#1a1a24]">LoCoMo Accuracy</td>
                <td className="py-4 px-6 font-semibold text-[#04b84c] bg-[#4d4bf7]/[0.04]">93.2%</td>
                <td className="py-4 px-6 text-[#5d5d64]">68.4%</td>
                <td className="py-4 px-6 text-[#5d5d64]">65.0%</td>
                <td className="py-4 px-6 text-[#5d5d64]">62.1%</td>
              </tr>
              <tr className="hover:bg-[#fcfcfd] transition-colors">
                <td className="py-4 px-6 font-medium text-[#1a1a24]">Retrieval Speed (P75)</td>
                <td className="py-4 px-6 font-semibold text-[#04b84c] bg-[#4d4bf7]/[0.04]">&lt;15ms</td>
                <td className="py-4 px-6 text-[#5d5d64]">45ms+</td>
                <td className="py-4 px-6 text-[#5d5d64]">38ms+</td>
                <td className="py-4 px-6 text-[#5d5d64]">50ms+</td>
              </tr>
              <tr className="hover:bg-[#fcfcfd] transition-colors">
                <td className="py-4 px-6 font-medium text-[#1a1a24]">Entity Resolution</td>
                <td className="py-4 px-6 text-[#1a1a24] bg-[#4d4bf7]/[0.04]">Automatic, every tier</td>
                <td className="py-4 px-6 text-[#5d5d64]">Pro tier only</td>
                <td className="py-4 px-6 text-[#5d5d64]">Automatic</td>
                <td className="py-4 px-6 text-[#8f8f96]">-</td>
              </tr>
              <tr className="hover:bg-[#fcfcfd] transition-colors">
                <td className="py-4 px-6 font-medium text-[#1a1a24]">Fact Extraction</td>
                <td className="py-4 px-6 text-[#1a1a24] bg-[#4d4bf7]/[0.04]">Continuous semantic</td>
                <td className="py-4 px-6 text-[#5d5d64]">Basic key-value</td>
                <td className="py-4 px-6 text-[#5d5d64]">Custom pipeline</td>
                <td className="py-4 px-6 text-[#5d5d64]">Chunking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[12px] text-[#8f8f96] text-center max-w-[800px] mb-4">
          Measured on Maximem&apos;s open eval harness, same hardware, same prompts, same conversations, same scoring. Vendor self-reported figures differ and are shown separately. *Zep has not been run on our harness, so its own published figure is shown instead. Full configuration and sources at /evals.
        </p>

        <a
          href="https://www.maximem.ai/compare/maximem-synap-vs-mem0-vs-zep-vs-letta-vs-supermemory-vs-cognee-vs-evermind"
          target="_blank"
          rel="noreferrer"
          className="text-[#4d4bf7] hover:text-[#3d3be0] text-[14px] font-medium inline-flex items-center gap-1 hover:underline"
        >
          See the full comparison →
        </a>
      </section>

      {/* ── 10. Developer SDK Quickstart in Linkrunner Code Frame ─────────── */}
      <section className="w-full max-w-[1240px] px-6 py-[70px] flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-[12px] py-[4px] rounded-full border border-[#e8e8ed] bg-white text-[12px] text-[#4d4bf7] font-medium mb-[14px]">
          Developer Experience
        </div>
        <h3 className="text-[32px] md:text-[40px] font-normal tracking-[-0.03em] text-[#1a1a24] text-center mb-4">
          Integrate and go live by 2:36 PM this afternoon
        </h3>
        <p className="text-[16px] text-[#5d5d64] text-center max-w-[700px] mb-10">
          Developer experience is at the core of Maximem. Native SDKs for Python, TypeScript, LangChain, LangGraph, LlamaIndex, and CrewAI.
        </p>

        {/* Code Frame */}
        <div className="w-full max-w-[960px] border border-[#e8e8ed] rounded-[12px] bg-[#0d0e14] shadow-sm overflow-hidden text-[13px] font-mono">
          <div className="h-[44px] bg-[#141622] border-b border-white/[0.08] px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {["python", "typescript", "langchain", "llama"].map((sdk) => (
                <button
                  key={sdk}
                  onClick={() => setActiveSdk(sdk)}
                  className={`px-3 py-1 rounded-[4px] text-[12px] capitalize transition-colors ${
                    activeSdk === sdk
                      ? "bg-white/[0.12] text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {sdk}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-zinc-500">pip install maximem</span>
          </div>
          <pre className="p-6 text-zinc-200 overflow-x-auto leading-[1.6]">
            <code>{sdkCode[activeSdk]}</code>
          </pre>
        </div>
      </section>

      {/* ── 11. Learn About Context Engineering (3 Blog Article Cards) ────── */}
      <section className="w-full max-w-[1240px] px-6 py-[80px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-[13px] font-mono font-medium text-[#4d4bf7] mb-2">Context Engineering</div>
            <h3 className="text-[30px] md:text-[36px] font-normal tracking-[-0.03em] text-[#1a1a24]">
              Learn about Context Engineering
            </h3>
            <p className="text-[15px] text-[#5d5d64] mt-1">
              Discover how AI context and memory work. Check our latest research and engineering deep dives.
            </p>
          </div>
          <a
            href="https://www.maximem.ai/blog"
            target="_blank"
            rel="noreferrer"
            className="text-[#4d4bf7] hover:text-[#3d3be0] text-[14px] font-medium inline-flex items-center gap-1 hover:underline mt-4 md:mt-0"
          >
            See all articles →
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article 1 */}
          <a
            href="https://www.maximem.ai/blog/claude-skills-for-engineers-h2-2026"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#f9f9fb] border border-[#e8e8ed] rounded-[16px] overflow-hidden hover:border-[#4d4bf7]/40 transition-colors shadow-sm flex flex-col"
          >
            <div className="h-[200px] w-full overflow-hidden bg-[#e8e8ed]">
              <img
                src={imgClaudeSkills}
                alt="Claude Skills"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] font-mono text-[#8f8f96] block mb-2">AUGUST 10, 2026</span>
                <h4 className="text-[17px] font-medium tracking-[-0.015em] text-[#1a1a24] group-hover:text-[#4d4bf7] transition-colors leading-[1.4] mb-3">
                  Claude Skills for AI Engineers: 2026 Mid-Year Edition: 11 Skills That Fill Last Year&apos;s Gaps
                </h4>
              </div>
              <span className="text-[13px] text-[#4d4bf7] font-medium">Read More →</span>
            </div>
          </a>

          {/* Article 2 */}
          <a
            href="https://www.maximem.ai/blog/mcp-2026-07-28-migration-errors"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#f9f9fb] border border-[#e8e8ed] rounded-[16px] overflow-hidden hover:border-[#4d4bf7]/40 transition-colors shadow-sm flex flex-col"
          >
            <div className="h-[200px] w-full overflow-hidden bg-[#e8e8ed]">
              <img
                src={imgMcpPaper}
                alt="MCP Breaking Changes"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] font-mono text-[#8f8f96] block mb-2">JULY 29, 2026</span>
                <h4 className="text-[17px] font-medium tracking-[-0.015em] text-[#1a1a24] group-hover:text-[#4d4bf7] transition-colors leading-[1.4] mb-3">
                  MCP 2026-07-28: 20 Breaking Changes and the Errors They Cause
                </h4>
              </div>
              <span className="text-[13px] text-[#4d4bf7] font-medium">Read More →</span>
            </div>
          </a>

          {/* Article 3 */}
          <a
            href="https://www.maximem.ai/blog/agentic-context-management-paper"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#f9f9fb] border border-[#e8e8ed] rounded-[16px] overflow-hidden hover:border-[#4d4bf7]/40 transition-colors shadow-sm flex flex-col"
          >
            <div className="h-[200px] w-full overflow-hidden bg-[#e8e8ed]">
              <img
                src={imgAgenticPaper}
                alt="Agentic Context Management"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] font-mono text-[#8f8f96] block mb-2">JULY 25, 2026</span>
                <h4 className="text-[17px] font-medium tracking-[-0.015em] text-[#1a1a24] group-hover:text-[#4d4bf7] transition-colors leading-[1.4] mb-3">
                  Agentic Context Management: Solving Memory and Cost as Lifecycle and Architecture Problems
                </h4>
              </div>
              <span className="text-[13px] text-[#4d4bf7] font-medium">Read More →</span>
            </div>
          </a>
        </div>
      </section>

      {/* ── 12. Bottom CTA Banner (Linkrunner Signature Rounded Card) ─────── */}
      <section className="w-full max-w-[1240px] px-6 pb-[90px]">
        <div className="w-full bg-[#f9f9fb] border border-[#e8e8ed] rounded-[24px] p-10 md:p-16 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-[34px] sm:text-[44px] font-normal tracking-[-0.035em] text-[#1a1a24] max-w-[760px] leading-[1.15] mb-4">
            The difference between a demo and a product is memory.
          </h2>
          <p className="text-[16px] text-[#5d5d64] max-w-[620px] leading-[1.6] mb-8">
            Start building persistent, anticipatory memory into your LLMs and autonomous agents today.
          </p>

          <div className="flex items-center gap-[12px]">
            <a
              href="https://synap.maximem.ai/"
              target="_blank"
              rel="noreferrer"
              className="h-[40px] px-[20px] bg-[#4d4bf7] hover:bg-[#3d3be0] text-white text-[14px] font-medium rounded-[4px] shadow-[0_1px_3px_rgba(77,75,247,0.3)] transition-colors flex items-center gap-[8px]"
            >
              <span>Get Started Free</span>
              <kbd className="bg-white/20 text-white text-[10px] font-mono px-[5px] py-[1px] rounded-[3px]">S</kbd>
            </a>
            <a
              href="https://cal.com/gaurav-dadhich-maximem-ai/30min"
              target="_blank"
              rel="noreferrer"
              className="h-[40px] px-[20px] bg-white hover:bg-[#f9f9fb] text-[#303037] border border-[#e8e8ed] text-[14px] font-medium rounded-[4px] shadow-sm transition-colors flex items-center gap-[8px]"
            >
              <span>Talk to the founder</span>
              <kbd className="bg-[#f0f0f4] text-[#8f8f96] text-[10px] font-mono px-[5px] py-[1px] rounded-[3px] border border-[#e4e4e9]">C</kbd>
            </a>
          </div>
        </div>
      </section>

      {/* ── 13. Complete Maximem Footer (All 6 Columns from Prompt) ────────── */}
      <footer className="w-full bg-[#fcfcfd] pt-16 pb-12">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Main Footer Links Grid - 6 columns */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Column 1: Brand & Dashboards */}
            <div className="col-span-2 md:col-span-1 pr-2">
              <Link href="/" className="flex items-center gap-[8px] mb-3">
                <div className="size-[22px] rounded-[5px] bg-[#4d4bf7] flex items-center justify-center text-white">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  </svg>
                </div>
                <span className="font-['Geist:SemiBold',sans-serif] text-[16px] font-semibold text-[#1a1a24]">
                  Maximem
                </span>
              </Link>
              <p className="text-[12px] text-[#5d5d64] leading-[1.5] mb-4">
                AI memory infrastructure. Maximem Synap gives agents persistent context management. Maximem Vity gives individuals private, cross-app AI memory.
              </p>
              <div className="flex flex-col gap-1.5 text-[12px]">
                <a href="https://synap.maximem.ai/" target="_blank" rel="noreferrer" className="text-[#4d4bf7] hover:underline flex items-center gap-1">
                  <span>Synap Dashboard</span> ↗
                </a>
                <a href="https://app.maximem.ai/" target="_blank" rel="noreferrer" className="text-[#4d4bf7] hover:underline flex items-center gap-1">
                  <span>Vity Dashboard</span> ↗
                </a>
              </div>
            </div>

            {/* Column 2: Product */}
            <div>
              <div className="text-[12px] font-semibold text-[#1a1a24] uppercase tracking-wider mb-3">Product</div>
              <ul className="space-y-2 text-[12.5px] text-[#5d5d64]">
                <li><a href="https://www.maximem.ai/synap" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap</a></li>
                <li><a href="https://www.maximem.ai/synap/pricing" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap Pricing</a></li>
                <li><a href="https://www.maximem.ai/synap/security" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap Security</a></li>
                <li><a href="https://www.maximem.ai/vity" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Maximem Vity</a></li>
                <li><a href="https://www.maximem.ai/cross-app-memory" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Cross-App AI Memory</a></li>
                <li><a href="https://www.maximem.ai/download-extension" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Chrome Extension</a></li>
                <li><a href="https://www.maximem.ai/openclaw" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">OpenClaw Plugin</a></li>
                <li><a href="https://www.maximem.ai/hermes" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Hermes Plugin</a></li>
              </ul>
            </div>

            {/* Column 3: Developers */}
            <div>
              <div className="text-[12px] font-semibold text-[#1a1a24] uppercase tracking-wider mb-3">Developers</div>
              <ul className="space-y-2 text-[12.5px] text-[#5d5d64]">
                <li><a href="https://docs.maximem.ai/" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap Docs</a></li>
                <li><a href="https://docs.maximem.ai/getting-started/quickstart" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Quickstart</a></li>
                <li><a href="https://www.maximem.ai/synap/integrations" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Framework Integrations</a></li>
                <li><a href="https://github.com/maximem-ai/maximem_synap_sdk" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap on GitHub</a></li>
                <li><a href="https://github.com/maximem-ai" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">GitHub Org</a></li>
                <li><a href="https://cal.com/gaurav-dadhich-maximem-ai/30min" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Talk to the Founder</a></li>
                <li><a href="https://synap.maximem.ai/playground" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap Playground</a></li>
              </ul>
            </div>

            {/* Column 4: Compare */}
            <div>
              <div className="text-[12px] font-semibold text-[#1a1a24] uppercase tracking-wider mb-3">Compare</div>
              <ul className="space-y-2 text-[12.5px] text-[#5d5d64]">
                <li><a href="https://www.maximem.ai/blog/maximem-synap-updates-higher-benchmark-scores-and-more" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">#1 on LongMemEval</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-vity-vs-mem0-vs-supermemory" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Vity vs Mem0 vs Supermemory</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-mem0-vs-zep-vs-letta-vs-supermemory-vs-cognee-vs-evermind" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs alternatives</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-mem0" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs Mem0</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-zep" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs Zep</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-letta" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs Letta</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-supermemory" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs Supermemory</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-cognee" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs Cognee</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-evermind" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Synap vs Evermind</a></li>
                <li><a href="https://www.maximem.ai/tco" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Cost Calculator (TCO)</a></li>
              </ul>
            </div>

            {/* Column 5: Use Cases */}
            <div>
              <div className="text-[12px] font-semibold text-[#1a1a24] uppercase tracking-wider mb-3">Use Cases</div>
              <ul className="space-y-2 text-[12.5px] text-[#5d5d64]">
                <li><a href="https://www.maximem.ai/use-cases/synap/healthcare" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Healthcare</a></li>
                <li><a href="https://www.maximem.ai/use-cases/synap/support" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Customer Support</a></li>
                <li><a href="https://www.maximem.ai/use-cases/synap/sales" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Sales</a></li>
                <li><a href="https://www.maximem.ai/use-cases/synap/voice-ai" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Voice AI</a></li>
                <li><a href="https://www.maximem.ai/use-cases/synap/multi-agent" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Multi-Agent</a></li>
                <li><a href="https://www.maximem.ai/use-cases/vity/personalized-workflow" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Personalized Workflow</a></li>
                <li><a href="https://www.maximem.ai/use-cases/vity/professional-roles" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Professional Roles</a></li>
              </ul>
            </div>

            {/* Column 6: Company & Vity */}
            <div>
              <div className="text-[12px] font-semibold text-[#1a1a24] uppercase tracking-wider mb-3">Company &amp; Vity</div>
              <ul className="space-y-2 text-[12.5px] text-[#5d5d64]">
                <li><a href="https://www.maximem.ai/about" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">About</a></li>
                <li><a href="https://www.maximem.ai/blog" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Blog</a></li>
                <li><a href="https://www.maximem.ai/learn/ai-agent-memory-course" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Learn</a></li>
                <li><a href="https://www.maximem.ai/research/agent-skills" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Research</a></li>
                <li><a href="https://www.maximem.ai/product" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Products</a></li>
                <li><a href="https://www.maximem.ai/press" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Press</a></li>
                <li><a href="https://www.maximem.ai/press-kit" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Press Kit</a></li>
                <li><a href="https://www.maximem.ai/vity/apps" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Vity Apps</a></li>
                <li><a href="https://www.maximem.ai/vity/apps/echo" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Echo</a></li>
                <li><a href="https://www.maximem.ai/vity/apps/waitpro" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">WaitPro</a></li>
                <li><a href="https://www.maximem.ai/vity/apps/skills" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Skills</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#8f8f96] gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <span>© 2026 Maximem</span>
              <a href="https://www.maximem.ai/privacy" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Privacy Policy</a>
              <a href="https://www.maximem.ai/terms" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Terms of Service</a>
              <a href="https://www.maximem.ai/synap/security" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Security</a>
              <a href="https://www.maximem.ai/glossary" target="_blank" rel="noreferrer" className="hover:text-[#1a1a24]">Glossary</a>
            </div>
            <div>
              <a href="mailto:gaurav@maximem.ai" className="hover:text-[#4d4bf7] transition-colors">
                Contact: gaurav@maximem.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}