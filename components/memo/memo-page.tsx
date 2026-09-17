"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ── Builder & Asset Logos ───────────────────────────────────────────────────
const imgBuilder1 = "/website-clone/a4f1d3c1f4f339c51188430eb8c65ec167cc6328.png";
const imgBuilder2 = "/website-clone/bde9e2000ea3d2e071140afe25ecd0a77821cf12.png";
const imgBuilder3 = "/website-clone/57658469841f9d4846bb556243c1ddc3bd3cc86b.png";
const imgBuilder4 = "/website-clone/3966c318087c34a87eab639481bcab8d2619c9a2.png";
const imgBuilder5 = "/website-clone/fd9e1e5c04b3fa7ffcf2e0956c3d9d406b68457b.png";
const imgBuilder6 = "/website-clone/5accd1373992738d0ddea3a5f06b409abe9879dc.png";
const imgBuilder7 = "/website-clone/33a14a1ee5ee5d513eea0b796e0410cbfb4d8478.png";
const imgBuilder8 = "/website-clone/ac91258f549b9924be02e9f8382d107c5ba8c279.png";
const imgBuilder9 = "/website-clone/0f3b3f8acae7bd1f4962f38f04a4e721bfa1df43.png";

export default function MaximemCenteredLightEdition() {
  const [activeTab, setActiveTab] = useState<"sdk" | "harness" | "plugin">("sdk");
  const [activeLang, setActiveLang] = useState<"python" | "typescript" | "langchain" | "llama">("python");
  const [copied, setCopied] = useState(false);

  const builders = [
    { name: "IIT Delhi", logo: imgBuilder1 },
    { name: "Loopdesk", logo: imgBuilder2 },
    { name: "Aiden", logo: imgBuilder3 },
    { name: "Warrant", logo: imgBuilder4 },
    { name: "TruCommerce", logo: imgBuilder5 },
    { name: "Praxel", logo: imgBuilder6 },
    { name: "BITS Pilani", logo: imgBuilder9 },
    { name: "Mindloop", logo: imgBuilder1 },
  ];

  const codeSnippets: Record<string, string> = {
    python: `# 1. Install via pip
pip install maximem

# 2. Drop-in persistent memory for any AI agent
from maximem import Synap

synap = Synap(api_key="mx_live_token...")

# Asynchronous turn ingestion (never blocks conversation)
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
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white text-[#020202] font-sans flex flex-col items-center select-text">
      {/* ── 1. Top Announcement Banner in Mem0 Lavender/Purple Style ──────── */}
      <div className="w-full bg-[#f3e8ff] border-b border-[#e9d5ff] py-2.5 px-4 flex items-center justify-center text-[13px]">
        <div className="flex items-center gap-2 max-w-[1200px] text-center flex-wrap justify-center text-[#581c87]">
          <span className="font-semibold">New research from Maximem:</span>
          <span>Agentic Context Management: Solving Agent Memory and Cost by Treating Them as Lifecycle and Architecture Problems.</span>
          <a
            href="https://www.maximem.ai/blog/agentic-context-management-paper"
            target="_blank"
            rel="noreferrer"
            className="bg-[#cbb2ff] hover:bg-[#be9eff] text-[#1e1b4b] px-2.5 py-0.5 rounded-[4px] font-medium text-[12px] transition-colors ml-1"
          >
            Read the paper →
          </a>
        </div>
      </div>

      {/* ── 2. Mem0 Header Navigation ─────────────────────────────────────── */}
      <header className="w-full sticky top-[42px] z-40 bg-white/95 backdrop-blur-md border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-6 h-[64px] flex items-center justify-between">
          {/* Mem0-styled Maximem Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-[22px] font-black tracking-tighter text-[#020202] font-sans flex items-center gap-0.5">
              maxi
              <span className="bg-[#ebf212] text-[#020202] px-1.5 py-0.2 rounded text-[18px] leading-tight font-mono font-black">
                mem
              </span>
            </span>
          </Link>

          {/* Navigation Links in Mem0 Fustat/Sans Style */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] text-[#27272a] font-semibold tracking-[-0.01em] uppercase">
            <a href="https://www.maximem.ai/synap" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Products</a>
            <a href="https://www.maximem.ai/the-memory-problem" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Why Memory</a>
            <a href="https://www.maximem.ai/synap/pricing" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Pricing</a>
            <a href="https://www.maximem.ai/use-cases/synap" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Usecases</a>
            <a href="https://www.maximem.ai/about" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Company</a>
            <a href="https://docs.maximem.ai/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Docs</a>
          </nav>

          {/* Right Action Buttons in exact Mem0 Style */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button to switch to Dark Mode */}
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("toggle-theme", { detail: { target: "maximem" } }));
                }
              }}
              className="size-[38px] rounded-[4px] bg-[#f4f4f5] hover:bg-[#e4e4e7] border border-[#e4e4e7] text-[#52525b] hover:text-[#09090b] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              title="Switch to Dark Mode (Shortcut: D or T)"
              aria-label="Switch to Dark Mode"
            >
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>

            <a
              href="https://github.com/maximem-ai/maximem_synap_sdk"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] border border-[#e4e4e7] rounded-[4px] text-[13px] font-medium text-[#09090b] transition-colors"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Star</span>
              <span className="bg-white px-1.5 py-0.5 rounded text-[11px] font-mono font-semibold text-[#52525b]">65,256</span>
            </a>

            {/* Signature Mem0 Purple Button */}
            <a
              href="https://synap.maximem.ai/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#cbb2ff] hover:bg-[#be9eff] text-[#020202] h-[38px] px-3.5 rounded-[4px] font-medium text-[13px] flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Get Started</span>
              <div className="size-[20px] bg-[#121212] rounded-[3px] flex items-center justify-center text-white">
                <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* ── 3. Mem0-Styled Hero Section with Maximem Content ───────────────── */}
      <section className="w-full max-w-[1240px] px-6 pt-16 pb-14 flex flex-col items-center text-center">
        {/* Backed by badge */}
        <div className="flex items-center gap-2 text-[13px] text-[#71717a] mb-6">
          <span>Backed by</span>
          <span className="font-semibold text-[#09090b]">Top AI Builders &amp; Engineering Teams</span>
        </div>

        {/* Hero Title in Mem0 bold typographic scale */}
        <h1 className="text-[44px] sm:text-[60px] md:text-[66px] font-bold text-[#020202] tracking-[-0.04em] leading-[1.08] max-w-[1020px] mb-6">
          AI memory that persists across sessions and agents
        </h1>

        {/* Hero Subtitle */}
        <p className="text-[18px] sm:text-[19px] text-[#52525b] max-w-[620px] leading-[1.5] mb-8">
          Maximem Synap gives AI agents persistent, structured memory and active context management. Built for production.
        </p>

        {/* Action Buttons in exact Mem0 layout */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <a
            href="https://synap.maximem.ai/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#cbb2ff] hover:bg-[#be9eff] text-[#020202] h-[42px] px-5 rounded-[4px] font-medium text-[14px] flex items-center gap-2.5 transition-colors shadow-sm"
          >
            <span>Get Started</span>
            <div className="size-[22px] bg-[#121212] rounded-[3px] flex items-center justify-center text-white">
              <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          <a
            href="https://synap.maximem.ai/playground"
            target="_blank"
            rel="noreferrer"
            className="bg-[#f4f4f5] hover:bg-[#e4e4e7] border border-[#e4e4e7] text-[#27272a] h-[42px] px-5 rounded-[4px] font-medium text-[14px] flex items-center gap-2 transition-colors"
          >
            <span>Setup for Agent</span>
          </a>
        </div>

        {/* ── 4. Mem0's Signature Interactive Code Terminal ───────────────── */}
        <div className="w-full max-w-[960px] bg-[#0c0d12] border border-[#27272a] rounded-[10px] overflow-hidden shadow-2xl text-left">
          {/* Top Category Tabs (Mem0 signature) */}
          <div className="bg-[#18181b] border-b border-[#27272a] px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 bg-[#0c0d12] p-1 rounded-[6px] border border-[#27272a]">
              <button
                onClick={() => setActiveTab("sdk")}
                className={`px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "sdk" ? "bg-[#cbb2ff] text-[#020202]" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="size-2 rounded-full bg-[#121212]" />
                <span>SDK Integration</span>
              </button>
              <button
                onClick={() => setActiveTab("harness")}
                className={`px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors ${
                  activeTab === "harness" ? "bg-[#cbb2ff] text-[#020202]" : "text-zinc-400 hover:text-white"
                }`}
              >
                Agent Harness
              </button>
              <button
                onClick={() => setActiveTab("plugin")}
                className={`px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors ${
                  activeTab === "plugin" ? "bg-[#cbb2ff] text-[#020202]" : "text-zinc-400 hover:text-white"
                }`}
              >
                Plugin
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1">
              {(["python", "typescript", "langchain", "llama"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-[4px] capitalize transition-colors ${
                    activeLang === lang ? "bg-white/15 text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {lang}
                </button>
              ))}
              <button
                onClick={handleCopy}
                className="ml-2 px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-white/10 hover:bg-white/20 rounded-[4px] transition-colors flex items-center gap-1"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Code Window */}
          <div className="p-6 font-mono text-[13px] leading-[1.65] text-zinc-200 overflow-x-auto">
            <pre>
              <code>{codeSnippets[activeLang]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── 5. Builders Strip (Mem0 "Trusted by" Ribbon) ───────────────────── */}
      <section className="w-full py-12 border-y border-[#f4f4f5] bg-[#fafafa] flex flex-col items-center">
        <p className="text-[12px] font-semibold tracking-wider uppercase text-[#71717a] mb-6">
          TRUSTED BY BUILDERS AT LEADING AI ORGANIZATIONS
        </p>
        <div className="max-w-[1240px] px-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {builders.map((b, idx) => (
            <div
              key={idx}
              className="h-[36px] px-4 bg-white border border-[#e4e4e7] rounded-[6px] shadow-sm flex items-center gap-2 text-[13px] font-medium text-[#27272a]"
            >
              <img src={b.logo} alt={b.name} className="size-[16px] object-contain opacity-75" />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Mem0 4-Card Grid Feature Layout (Maximem Value Props) ────────── */}
      <section className="w-full max-w-[1240px] px-6 py-20 flex flex-col items-center">
        <div className="text-center max-w-[700px] mb-14">
          <span className="text-[12px] font-bold text-[#9333ea] uppercase tracking-wider block mb-2">
            INTELLIGENT MEMORY STACK
          </span>
          <h2 className="text-[34px] sm:text-[42px] font-bold text-[#020202] tracking-[-0.03em] leading-tight mb-4">
            Memory infrastructure designed for autonomous agents
          </h2>
          <p className="text-[16px] text-[#52525b]">
            Every interaction makes your agents more personal, accurate, and useful while slashing token costs by up to 84%.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: User Memory (Vity) */}
          <div className="bg-white border border-[#e4e4e7] rounded-[12px] p-8 shadow-sm hover:border-[#f26522]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="size-[40px] rounded-[8px] bg-[#fff7f2] border border-[#f26522]/20 flex items-center justify-center text-[#f26522] mb-5">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#09090b] tracking-[-0.02em] mb-2">
                User Memory (Maximem Vity)
              </h3>
              <p className="text-[14px] text-[#52525b] leading-[1.6] mb-6">
                Private cloud vault, encrypted by default. Automatically learns and persists user preferences, work history, workflows, and task constraints across Claude, ChatGPT, Cursor, and Hermes.
              </p>
            </div>
            <div className="bg-[#fafafa] border border-[#f4f4f5] rounded-[6px] p-3 text-[12px] font-mono text-[#52525b]">
              ✓ End-to-end encrypted • Cross-tool context mesh
            </div>
          </div>

          {/* Card 2: Session Memory (Synap SDK) */}
          <div className="bg-white border border-[#e4e4e7] rounded-[12px] p-8 shadow-sm hover:border-[#f26522]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="size-[40px] rounded-[8px] bg-[#fef9c3] border border-[#fde047]/40 flex items-center justify-center text-[#854d0e] mb-5">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#09090b] tracking-[-0.02em] mb-2">
                Session Memory (Maximem Synap)
              </h3>
              <p className="text-[14px] text-[#52525b] leading-[1.6] mb-6">
                Under 15ms P75 anticipatory in-conversation retrieval. Ingestion runs asynchronously so write operations never block your agent loop. Context is pre-fetched while the user is still typing.
              </p>
            </div>
            <div className="bg-[#fafafa] border border-[#f4f4f5] rounded-[6px] p-3 text-[12px] font-mono text-[#52525b]">
              ✓ &lt;15ms P75 retrieval • 92% LongMemEval accuracy
            </div>
          </div>

          {/* Card 3: Tri-Store Knowledge Memory */}
          <div className="bg-white border border-[#e4e4e7] rounded-[12px] p-8 shadow-sm hover:border-[#f26522]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="size-[40px] rounded-[8px] bg-[#ecfdf5] border border-[#a7f3d0]/50 flex items-center justify-center text-[#065f46] mb-5">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#09090b] tracking-[-0.02em] mb-2">
                Tri-Store Knowledge Memory
              </h3>
              <p className="text-[14px] text-[#52525b] leading-[1.6] mb-6">
                Data is extracted into structure rather than raw text and partitioned across a vector store, knowledge graph (2-hop entity resolution), and raw file store. Retrieval nets across all three in parallel.
              </p>
            </div>
            <div className="bg-[#fafafa] border border-[#f4f4f5] rounded-[6px] p-3 text-[12px] font-mono text-[#52525b]">
              ✓ Vector + Graph + File • Automatic entity resolution
            </div>
          </div>

          {/* Card 4: Adaptive Consolidation & Forgetting */}
          <div className="bg-white border border-[#e4e4e7] rounded-[12px] p-8 shadow-sm hover:border-[#f26522]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="size-[40px] rounded-[8px] bg-[#eff6ff] border border-[#bfdbfe]/50 flex items-center justify-center text-[#1e40af] mb-5">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#09090b] tracking-[-0.02em] mb-2">
                Conscious Forgetting &amp; Decay
              </h3>
              <p className="text-[14px] text-[#52525b] leading-[1.6] mb-6">
                Autonomous background cycles perform fact deduplication, temporal decay, and conflict resolution. Prevents hallucination and stops outdated conversational facts from poisoning agent decisions.
              </p>
            </div>
            <div className="bg-[#fafafa] border border-[#f4f4f5] rounded-[6px] p-3 text-[12px] font-mono text-[#52525b]">
              ✓ Lifecycle management • Eliminates context poisoning
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Mem0-Styled Benchmark Comparison Section ───────────────────── */}
      <section className="w-full max-w-[1240px] px-6 py-14 flex flex-col items-center">
        <div className="w-full bg-[#fafafa] border border-[#e4e4e7] rounded-[16px] p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[12px] font-bold text-[#9333ea] uppercase tracking-wider block mb-1">
                COMPETITIVE BENCHMARKS
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-[#09090b] tracking-[-0.03em]">
                How Maximem compares against alternatives
              </h3>
            </div>
            <a
              href="https://www.maximem.ai/evals"
              target="_blank"
              rel="noreferrer"
              className="text-[#9333ea] hover:underline text-[13px] font-semibold"
            >
              See full benchmark harness →
            </a>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#e4e4e7] text-[13px] text-[#71717a] font-semibold">
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4 bg-[#f3e8ff] text-[#581c87] rounded-t-[6px]">Maximem Synap</th>
                  <th className="py-3 px-4">Mem0</th>
                  <th className="py-3 px-4">Zep</th>
                  <th className="py-3 px-4">Supermemory</th>
                </tr>
              </thead>
              <tbody className="text-[13.5px] divide-y divide-[#e4e4e7]">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#09090b]">LongMemEval Score</td>
                  <td className="py-3.5 px-4 font-bold text-[#15803d] bg-[#f3e8ff]/50">92.0%</td>
                  <td className="py-3.5 px-4 text-[#52525b]">73.8%</td>
                  <td className="py-3.5 px-4 text-[#52525b]">71.2%</td>
                  <td className="py-3.5 px-4 text-[#52525b]">71.3%</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#09090b]">LoCoMo Accuracy</td>
                  <td className="py-3.5 px-4 font-bold text-[#15803d] bg-[#f3e8ff]/50">93.2%</td>
                  <td className="py-3.5 px-4 text-[#52525b]">68.4%</td>
                  <td className="py-3.5 px-4 text-[#52525b]">65.0%</td>
                  <td className="py-3.5 px-4 text-[#52525b]">62.1%</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#09090b]">Retrieval Latency (P75)</td>
                  <td className="py-3.5 px-4 font-bold text-[#15803d] bg-[#f3e8ff]/50">&lt; 15ms</td>
                  <td className="py-3.5 px-4 text-[#52525b]">45ms+</td>
                  <td className="py-3.5 px-4 text-[#52525b]">38ms+</td>
                  <td className="py-3.5 px-4 text-[#52525b]">50ms+</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#09090b]">Entity Resolution</td>
                  <td className="py-3.5 px-4 text-[#09090b] font-medium bg-[#f3e8ff]/50">Automatic, all tiers</td>
                  <td className="py-3.5 px-4 text-[#52525b]">Pro tier only</td>
                  <td className="py-3.5 px-4 text-[#52525b]">Automatic</td>
                  <td className="py-3.5 px-4 text-[#71717a]">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 8. Bottom CTA Banner (Mem0 Purple Signature Style) ─────────────── */}
      <section className="w-full max-w-[1240px] px-6 py-16">
        <div className="w-full bg-[#f3e8ff] border border-[#e9d5ff] rounded-[16px] p-10 sm:p-14 text-center flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#020202] tracking-[-0.03em] max-w-[650px] mb-4">
            The difference between a demo and a product is memory.
          </h2>
          <p className="text-[16px] text-[#581c87] max-w-[520px] mb-8">
            Start building persistent, anticipatory memory into your AI agents and LLM applications today.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://synap.maximem.ai/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#cbb2ff] hover:bg-[#be9eff] text-[#020202] h-[42px] px-6 rounded-[4px] font-medium text-[14px] flex items-center gap-2.5 transition-colors shadow-sm"
            >
              <span>Get Started Free</span>
              <div className="size-[20px] bg-[#121212] rounded-[3px] flex items-center justify-center text-white">
                <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
            <a
              href="https://cal.com/gaurav-dadhich-maximem-ai/30min"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-[#fafafa] border border-[#e4e4e7] text-[#27272a] h-[42px] px-5 rounded-[4px] font-medium text-[14px] transition-colors"
            >
              Talk to Founder
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. Mem0 Minimalist Footer with Maximem Links ──────────────────── */}
      <footer className="w-full bg-white pt-16 pb-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="text-[20px] font-black tracking-tighter text-[#020202] font-sans flex items-center gap-0.5 mb-3">
                maxi
                <span className="bg-[#ebf212] text-[#020202] px-1 py-0.2 rounded text-[16px] leading-tight font-mono font-black">
                  mem
                </span>
              </span>
              <p className="text-[12px] text-[#71717a] leading-[1.5] mb-3">
                AI memory infrastructure. Synap for persistent agent context, Vity for encrypted individual memory.
              </p>
              <div className="flex flex-col gap-1 text-[12px]">
                <a href="https://synap.maximem.ai/" target="_blank" rel="noreferrer" className="text-[#9333ea] hover:underline">
                  Synap Dashboard ↗
                </a>
                <a href="https://app.maximem.ai/" target="_blank" rel="noreferrer" className="text-[#9333ea] hover:underline">
                  Vity Dashboard ↗
                </a>
              </div>
            </div>

            {/* Column 2: Product */}
            <div>
              <div className="text-[12px] font-bold text-[#09090b] uppercase tracking-wider mb-3">Product</div>
              <ul className="space-y-2 text-[12.5px] text-[#52525b]">
                <li><a href="https://www.maximem.ai/synap" target="_blank" rel="noreferrer" className="hover:text-black">Synap Core</a></li>
                <li><a href="https://www.maximem.ai/synap/pricing" target="_blank" rel="noreferrer" className="hover:text-black">Pricing</a></li>
                <li><a href="https://www.maximem.ai/synap/security" target="_blank" rel="noreferrer" className="hover:text-black">Security</a></li>
                <li><a href="https://www.maximem.ai/vity" target="_blank" rel="noreferrer" className="hover:text-black">Maximem Vity</a></li>
                <li><a href="https://www.maximem.ai/cross-app-memory" target="_blank" rel="noreferrer" className="hover:text-black">Cross-App Context</a></li>
              </ul>
            </div>

            {/* Column 3: Developers */}
            <div>
              <div className="text-[12px] font-bold text-[#09090b] uppercase tracking-wider mb-3">Developers</div>
              <ul className="space-y-2 text-[12.5px] text-[#52525b]">
                <li><a href="https://docs.maximem.ai/" target="_blank" rel="noreferrer" className="hover:text-black">Documentation</a></li>
                <li><a href="https://docs.maximem.ai/getting-started/quickstart" target="_blank" rel="noreferrer" className="hover:text-black">Quickstart</a></li>
                <li><a href="https://www.maximem.ai/synap/integrations" target="_blank" rel="noreferrer" className="hover:text-black">Integrations</a></li>
                <li><a href="https://github.com/maximem-ai/maximem_synap_sdk" target="_blank" rel="noreferrer" className="hover:text-black">GitHub SDK</a></li>
                <li><a href="https://synap.maximem.ai/playground" target="_blank" rel="noreferrer" className="hover:text-black">Playground</a></li>
              </ul>
            </div>

            {/* Column 4: Compare */}
            <div>
              <div className="text-[12px] font-bold text-[#09090b] uppercase tracking-wider mb-3">Compare</div>
              <ul className="space-y-2 text-[12.5px] text-[#52525b]">
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-mem0" target="_blank" rel="noreferrer" className="hover:text-black">Synap vs Mem0</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-zep" target="_blank" rel="noreferrer" className="hover:text-black">Synap vs Zep</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-letta" target="_blank" rel="noreferrer" className="hover:text-black">Synap vs Letta</a></li>
                <li><a href="https://www.maximem.ai/compare/maximem-synap-vs-supermemory" target="_blank" rel="noreferrer" className="hover:text-black">Synap vs Supermemory</a></li>
                <li><a href="https://www.maximem.ai/tco" target="_blank" rel="noreferrer" className="hover:text-black">TCO Cost Calculator</a></li>
              </ul>
            </div>

            {/* Column 5: Company */}
            <div>
              <div className="text-[12px] font-bold text-[#09090b] uppercase tracking-wider mb-3">Company</div>
              <ul className="space-y-2 text-[12.5px] text-[#52525b]">
                <li><a href="https://www.maximem.ai/about" target="_blank" rel="noreferrer" className="hover:text-black">About</a></li>
                <li><a href="https://www.maximem.ai/blog" target="_blank" rel="noreferrer" className="hover:text-black">Blog &amp; Research</a></li>
                <li><a href="https://www.maximem.ai/press" target="_blank" rel="noreferrer" className="hover:text-black">Press Coverage</a></li>
                <li><a href="mailto:gaurav@maximem.ai" className="hover:text-black">Contact Founder</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#71717a] gap-4">
            <div>© 2026 Maximem. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="https://www.maximem.ai/privacy" target="_blank" rel="noreferrer" className="hover:text-black">Privacy Policy</a>
              <a href="https://www.maximem.ai/terms" target="_blank" rel="noreferrer" className="hover:text-black">Terms of Service</a>
              <a href="https://www.maximem.ai/synap/security" target="_blank" rel="noreferrer" className="hover:text-black">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}