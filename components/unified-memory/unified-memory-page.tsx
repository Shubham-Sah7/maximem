"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FooterSection from "@/components/website-clone/footer-section";

// ═════════════════════════════════════════════════════════════════════════════
// 1. BRAND ASSETS & CONSTANTS
// ═════════════════════════════════════════════════════════════════════════════

interface AppTool {
  id: string;
  name: string;
  category: string;
  protocol: string;
  latency: string;
  tag: string;
  sampleMemory: string;
  withoutMemory: string;
  withMemory: string;
  icon: (props: { className?: string; active?: boolean }) => React.JSX.Element;
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. SVG ICON COMPONENT SUITE
// ═════════════════════════════════════════════════════════════════════════════

function MaximemHexMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <polygon
        points="12,6.5 17,9.5 17,14.5 12,17.5 7,14.5 7,9.5"
        fill="#f26522"
        fillOpacity="0.85"
      />
      <circle cx="12" cy="12" r="1.8" fill="#ffffff" />
    </svg>
  );
}

function ChatGPTIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.28 9.37a5.98 5.98 0 0 0-.52-4.95 6.08 6.08 0 0 0-6.42-2.73A6.08 6.08 0 0 0 4.96 4.3 6.08 6.08 0 0 0 2.2 10.4a6.08 6.08 0 0 0 2.47 5.09 6.08 6.08 0 0 0 1.05 4.87 6.08 6.08 0 0 0 6.42 2.73 6.08 6.08 0 0 0 4.38-2.61 6.08 6.08 0 0 0 5.76-3.7 6.08 6.08 0 0 0 0-7.41zm-8.86 11.23a4.58 4.58 0 0 1-2.92-1.05l.14-.08 4.84-2.79a.78.78 0 0 0 .39-.68v-6.84l2.06 1.19a.06.06 0 0 1 .03.04v5.62a4.59 4.59 0 0 1-4.54 4.59zm-8.2-3.83a4.56 4.56 0 0 1-.58-3.04l.15.09 4.84 2.8a.77.77 0 0 0 .78 0l5.92-3.42v2.38a.07.07 0 0 1-.03.06l-4.87 2.81a4.59 4.59 0 0 1-6.21-1.68zm-1.74-8.91a4.57 4.57 0 0 1 2.33-2 6.07 6.07 0 0 0-.15 1.58v5.6a.79.79 0 0 0 .39.68l5.93 3.42-2.06 1.19a.06.06 0 0 1-.06 0L4.99 10.5a4.59 4.59 0 0 1-1.51-2.64zm14.88 2.05l-5.92-3.42 2.06-1.19a.06.06 0 0 1 .06 0l4.87 2.81a4.59 4.59 0 0 1 .94 6.78l-.15-.09-4.84-2.8a.78.78 0 0 0-.78 0zm2.34-3.4a4.58 4.58 0 0 1 .58 3.03l-.15-.08-4.84-2.8a.78.78 0 0 0-.78 0l-5.92 3.42V8.21a.06.06 0 0 1 .03-.05l4.87-2.81a4.59 4.59 0 0 1 6.21 1.67zM8.36 12.87l2.64-1.52 2.64 1.52v3.05l-2.64 1.52-2.64-1.52v-3.05z" />
    </svg>
  );
}

function ClaudeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 5.14c-.66-.46-1.46-.74-2.34-.74-1.35 0-2.54.66-3.27 1.67-.73-1.01-1.92-1.67-3.27-1.67-.88 0-1.68.28-2.34.74C4.85 6.13 4 7.82 4 9.75c0 3.25 2.5 6.08 5.75 6.55V19h4.5v-2.7c3.25-.47 5.75-3.3 5.75-6.55 0-1.93-.85-3.62-2.25-4.61zM12 14.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 5.5 12 5.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" />
    </svg>
  );
}

function GeminiIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12 7.52 7.52 12 2 12c5.48 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" />
    </svg>
  );
}

function PerplexityIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
      <polygon points="12,7 16,12 12,17 8,12" fill="#f26522" fillOpacity="0.7" />
    </svg>
  );
}

function NotionIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.207l11.45-2.12c1.378-.255 2.09.288 2.09 1.624v14.475c0 1.25-.572 1.833-1.848 2.07l-11.77 2.18c-1.378.256-2.09-.288-2.09-1.624V6.347c0-1.25.572-1.834 1.848-2.07zm11.233 1.157l-9.083 1.683v12.22l9.083-1.683V5.364zm-5.74 3.125h2.128v5.972h-1.064l-2.128-3.417v3.417H6.76V8.489h1.064l2.128 3.417V8.489z" />
    </svg>
  );
}

function SlackIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zm-3.793 10.124a2.528 2.528 0 0 1 2.52 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zm0-1.271a2.527 2.527 0 0 1-2.52-2.521 2.528 2.528 0 0 1 2.52-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.52 2.522h-6.313z" />
    </svg>
  );
}

function VSCodeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 1.5l4.5 2.2v16.6l-4.5 2.2-11-9.5 5-4.2-5-4.3 11-3zm-1.5 5.5l-6.2 4.5 6.2 4.5V7zm3 11.2V5.8l-1.5-.7v13.8l1.5-.7zM3.8 8.6L2 10v4l1.8 1.4 3.7-3.4-3.7-3.4z" />
    </svg>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 3. APPS DATA STORE
// ═════════════════════════════════════════════════════════════════════════════

const APPS_DATA: AppTool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Conversational AI",
    protocol: "Native Web Extension / GPT-4o",
    latency: "9.2ms",
    tag: "SYNC ACTIVE",
    sampleMemory: "Architecture directive: Use Next.js 16 App Router + Tailwind v4 + PostgreSQL with strict type contracts.",
    withoutMemory: '"Could you remind me what frontend framework and styling conventions your team prefers for this project?"',
    withMemory: '"Using your saved Maximem preferences (Next.js 16 + Tailwind v4 + PostgreSQL schema), here is the component boilerplate..."',
    icon: ChatGPTIcon,
  },
  {
    id: "claude",
    name: "Claude",
    category: "Reasoning & Writing",
    protocol: "Desktop Daemon & Webhook",
    latency: "8.4ms",
    tag: "SYNC ACTIVE",
    sampleMemory: "Product specification: Maximem Vity encryption boundary requires client-side AES-GCM-256 before transit.",
    withoutMemory: '"I do not have access to your previous conversation from yesterday about your security specifications."',
    withMemory: '"Continuing from your security review: applying client-side AES-GCM-256 encryption before payload dispatch..."',
    icon: ClaudeIcon,
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Multimodal Research",
    protocol: "Workspace Context Connector",
    latency: "11.1ms",
    tag: "SYNC ACTIVE",
    sampleMemory: "Team Roadmap: Q3 memory engine milestone requires LongMemEval benchmark > 90%.",
    withoutMemory: '"Could you provide the baseline metrics and deadlines for your roadmap again?"',
    withMemory: '"Recalling your Q3 target (LongMemEval > 90%): here is the evaluation analysis comparing current 92% performance..."',
    icon: GeminiIcon,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "Search & Verification",
    protocol: "Search Query Interceptor",
    latency: "12.0ms",
    tag: "SYNC ACTIVE",
    sampleMemory: "Domain filter: Prioritize arXiv papers on agentic context management published after 2025.",
    withoutMemory: 'Searches generic web articles without knowing your research constraints or prior citations.',
    withMemory: 'Tailors search queries using your active context: filters for post-2025 agent memory papers automatically.',
    icon: PerplexityIcon,
  },
  {
    id: "notion",
    name: "Notion",
    category: "Workspace Knowledge",
    protocol: "Bidirectional Sync API",
    latency: "14.3ms",
    tag: "SYNC ACTIVE",
    sampleMemory: "Project status: Maximem third-page redesign adhering strictly to canonical homepage design tokens.",
    withoutMemory: 'Requires manual search and page-by-page copy-pasting into AI chat interfaces.',
    withMemory: 'Instantly reads and updates PRD notes, keeping all AI assistants synchronized with workspace documents.',
    icon: NotionIcon,
  },
  {
    id: "slack",
    name: "Slack",
    category: "Team Coordination",
    protocol: "Channel Thread Parser",
    latency: "13.6ms",
    tag: "SYNC ACTIVE",
    sampleMemory: "Team consensus: Port allocation decided — Maximem on 3001, local portfolio stopped.",
    withoutMemory: 'Conversations in Slack vanish from your AI assistants; decisions must be re-explained repeatedly.',
    withMemory: 'Captures decisions made in engineering threads so your assistant never proposes rejected solutions.',
    icon: SlackIcon,
  },
  {
    id: "vscode",
    name: "VS Code & Cursor",
    category: "Developer Environment",
    protocol: "Native Model Context Protocol (MCP)",
    latency: "6.8ms",
    tag: "MCP SERVER CONNECTED",
    sampleMemory: "Code convention: Functional TypeScript, no any, enforce line length < 100, use lucide-react icons.",
    withoutMemory: 'Generates code with random third-party libraries you do not use, missing team lint rules.',
    withMemory: 'Injects your exact ESLint rules, dependencies from package.json, and preferred libraries into every generation.',
    icon: VSCodeIcon,
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// 4. MAIN UNIFIED MEMORY PAGE COMPONENT
// ═════════════════════════════════════════════════════════════════════════════

export default function UnifiedMemoryPage() {
  const [selectedApp, setSelectedApp] = useState<AppTool>(APPS_DATA[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"projects" | "preferences" | "conversations" | "files">("projects");
  const [hoveredHubNode, setHoveredHubNode] = useState<string | null>(null);

  // Synchronize Maximem dark mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("maximem_theme", "dark");
    }
  }, []);

  const faqItems = [
    {
      q: "What is Maximem and how does it work?",
      a: "Maximem is a unified memory layer for all your AI applications. It operates silently in the background across your browser, desktop, and IDE. When you work with ChatGPT, Claude, Gemini, Cursor, or Slack, Maximem automatically extracts important facts, directives, project goals, and coding preferences, compiling them into an encrypted personal knowledge graph. When you start a prompt in any supported app, relevant context is injected in under 15ms so you never repeat yourself.",
    },
    {
      q: "How much does it cost?",
      a: "Maximem offers a generous Free Tier for individual builders and developers that includes up to 2,500 active memory vectors and cross-app sync across 3 devices. Our Pro Tier ($18/month) provides unlimited memory storage, sub-10ms priority latency, team workspace sharing, and local zero-knowledge encryption key backups.",
    },
    {
      q: "Which AI tools are supported?",
      a: "Out of the box, Maximem natively supports ChatGPT (web & desktop), Claude (Anthropic web & Claude Code), Google Gemini, Perplexity, Notion, Slack, and developer environments like VS Code, Cursor, Windsurf, and Claude Code via our certified Model Context Protocol (MCP) server.",
    },
    {
      q: "Do I need to install anything?",
      a: "You can start in under 60 seconds with our lightweight Chrome Extension. For deep developer workflows and IDE context injection, you can optionally install the Maximem CLI daemon (`npm install -g @maximem/daemon` or `pip install maximem`), which runs as a quiet background service on macOS, Linux, and Windows.",
    },
    {
      q: "Is my data secure?",
      a: "Security and data ownership are core to the Maximem architecture. All memory items are encrypted client-side using authenticated AES-GCM-256 before leaving your machine. We cannot read your raw conversations or personal context. Furthermore, your data is never used to train frontier foundation models.",
    },
    {
      q: "Can I delete or edit my data?",
      a: "Yes. You have complete deterministic control over your memory graph. You can inspect every extracted memory in the Maximem Context Dashboard, delete individual memories, purge an entire project's context, or export your complete memory state as an open JSON-L archive at any time.",
    },
    {
      q: "Is there a free plan?",
      a: "Yes. The free tier gives you lifetime access with no credit card required. You get real-time cross-app synchronization, full MCP server support, and instant access to our core retrieval engine.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#f26522]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* ── Subtlest Ambient Warmth at Top-Right (Restrained, matching Homepage) ── */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[550px] h-[450px] rounded-full opacity-[0.14] blur-[140px]"
        style={{
          background: "radial-gradient(circle, #f26522 0%, rgba(242,101,34,0.15) 50%, transparent 80%)",
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          1. NAVIGATION BAR (Canonical Maximem Header)
      ══════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 w-full h-[60px] bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.08] px-5 sm:px-8 lg:px-12 flex items-center justify-between transition-colors">
        
        {/* Left: Maximem Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="size-8 rounded-[8px] bg-[#141413] border border-white/[0.1] flex items-center justify-center text-white group-hover:border-[#f26522]/60 transition-colors shadow-sm">
            <MaximemHexMark className="size-4 text-white" />
          </div>
          <span className="font-semibold text-[17px] tracking-tight text-white font-sans">
            Maximem
          </span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#f26522]/15 text-[#f26522] border border-[#f26522]/30">
            MEMORY
          </span>
        </a>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/synap" className="hover:text-white transition-colors">
            Synap (Dev)
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#integrations" className="hover:text-white transition-colors">
            Integrations
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[12px] font-mono text-zinc-300 transition-all"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>v2.4 Live</span>
          </a>

          <a
            href="#cta"
            className="h-[36px] px-4 rounded-[8px] bg-[#f26522] hover:bg-[#ff7733] text-white text-[13px] font-medium tracking-tight flex items-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
          >
            <span>Get Started Free</span>
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          2. HERO SECTION (Split Layout matching Maximem Brand System)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Brand Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181b] border border-white/[0.09] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f26522] inline-block shrink-0" />
              <span className="font-mono text-[11px] uppercase tracking-[1.4px] font-medium text-[#f26522]">
                AI MEMORY LAYER
              </span>
            </div>

            {/* Headline: Clean, tight, authoritative sans-serif */}
            <h1 className="text-[38px] sm:text-[46px] lg:text-[52px] font-medium tracking-[-0.035em] leading-[1.08] text-white">
              Different AI Apps Know You Partially.{" "}
              <span className="text-[#f26522]">
                Maximem makes it whole.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[15px] sm:text-[16.5px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] max-w-[540px]">
              Maximem unifies your memories, context, and preferences across all AI apps — so you get consistent, personalized responses everywhere you work.
            </p>

            {/* Metrics Row (Identical to Homepage Token Hierarchy) */}
            <div className="mt-8 pt-7 border-t border-white/[0.08] w-full grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col">
                <span className="text-[26px] sm:text-[30px] font-semibold text-white tracking-tight leading-none">
                  92<span className="text-[#f26522]">%</span>
                </span>
                <span className="mt-2 text-[11.5px] font-mono text-[#71717a] uppercase tracking-wider">
                  Higher recall
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[26px] sm:text-[30px] font-semibold text-white tracking-tight leading-none">
                  93.2<span className="text-white">%</span>
                </span>
                <span className="mt-2 text-[11.5px] font-mono text-[#71717a] uppercase tracking-wider">
                  Consistent replies
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[26px] sm:text-[30px] font-semibold text-white tracking-tight leading-none">
                  &lt;15<span className="text-zinc-400">ms</span>
                </span>
                <span className="mt-2 text-[11.5px] font-mono text-[#71717a] uppercase tracking-wider">
                  Retrieval speed
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#cta"
                className="h-[44px] px-6 rounded-[8px] bg-[#f26522] hover:bg-[#ff7733] text-white text-[14px] font-medium tracking-tight flex items-center gap-2 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Get Started Free</span>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="#how-it-works"
                className="h-[44px] px-5 rounded-[8px] bg-[#141413] hover:bg-[#1a1a19] text-zinc-300 hover:text-white border border-white/[0.09] text-[14px] font-medium tracking-tight flex items-center gap-2 transition-all active:scale-[0.98]"
              >
                <svg className="size-4 text-[#f26522]" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                <span>Watch Interactive Demo</span>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[12px] text-zinc-500 font-mono">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>Zero-knowledge client-side encryption · No prompt stuffing</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Technical Context Hub Schematic Card */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-[16px] border border-white/[0.09] bg-[#141413]/95 p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.55)] overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <MaximemHexMark className="size-4 text-[#f26522]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 font-medium">
                    MAXIMEM CONTEXT HUB · BUS V2.4
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] text-zinc-400">
                    7 APPS SYNCED
                  </span>
                </div>
              </div>

              {/* Schematic Canvas */}
              <div className="relative w-full h-[330px] sm:h-[360px] flex items-center justify-center my-3">
                
                {/* Background Architectural Grid Lines */}
                <svg className="absolute inset-0 size-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="hubCenterGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f26522" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#f26522" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Concentric Coordinate Rings */}
                  <circle cx="50%" cy="50%" r="140" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="50%" cy="50%" r="48" fill="url(#hubCenterGlow)" />
                </svg>

                {/* Central Maximem Core */}
                <div className="relative z-20 flex flex-col items-center justify-center size-[96px] sm:size-[104px] rounded-full bg-[#18181b] border-2 border-[#f26522]/80 shadow-[0_0_24px_rgba(242,101,34,0.25)]">
                  <MaximemHexMark className="size-7 text-[#f26522]" />
                  <span className="font-mono text-[10px] font-semibold text-white mt-1 tracking-wider uppercase">
                    MAXIMEM
                  </span>
                  <span className="font-mono text-[8.5px] text-[#f26522]">
                    CORE VAULT
                  </span>
                </div>

                {/* Orbiting App Nodes */}
                <div className="absolute inset-0 pointer-events-none">
                  {APPS_DATA.map((app, idx) => {
                    const total = APPS_DATA.length;
                    const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
                    // Radius adjusted for card width
                    const rx = 145;
                    const ry = 120;
                    const x = `calc(50% + ${Math.cos(angle) * rx}px)`;
                    const y = `calc(50% + ${Math.sin(angle) * ry}px)`;
                    const isSelected = selectedApp.id === app.id;
                    const isHovered = hoveredHubNode === app.id;

                    return (
                      <div
                        key={app.id}
                        style={{ left: x, top: y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                        onMouseEnter={() => {
                          setHoveredHubNode(app.id);
                          setSelectedApp(app);
                        }}
                        onMouseLeave={() => setHoveredHubNode(null)}
                      >
                        <div
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] border transition-all duration-200 select-none ${
                            isSelected || isHovered
                              ? "bg-[#1f1d1b] border-[#f26522] text-white shadow-[0_0_12px_rgba(242,101,34,0.3)] scale-105"
                              : "bg-[#0f0f10] border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.2]"
                          }`}
                        >
                          <app.icon className={`size-3.5 ${isSelected ? "text-[#f26522]" : "text-zinc-400"}`} />
                          <span className="text-[11.5px] font-medium tracking-tight">
                            {app.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Real-Time Context Stream Inspector */}
              <div className="mt-2 p-3.5 rounded-[10px] bg-[#0c0c0b] border border-white/[0.06] text-left">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#f26522]" />
                    <span className="text-zinc-300 font-medium">Active Node:</span>
                    <span className="text-white font-semibold">{selectedApp.name}</span>
                  </div>
                  <span className="text-[#f26522]">{selectedApp.protocol} · {selectedApp.latency}</span>
                </div>
                <p className="text-[12px] font-mono text-zinc-400 leading-relaxed truncate">
                  <span className="text-[#71717a] mr-2">&gt; Sync payload:</span>
                  <span className="text-zinc-200">{selectedApp.sampleMemory}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. SECTION: "WHAT IS MAXIMEM?" (The 5 Product Pillars)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="about"
        className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 select-none"
      >
        <div className="relative w-full rounded-[16px] border border-white/[0.08] bg-[#141413]/90 p-7 sm:p-10 lg:p-12 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          
          {/* Subtle Architectural Dot Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top Eyebrow Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] pb-4 mb-7">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f26522]" />
              <span className="font-mono text-[11px] font-medium tracking-[1.4px] uppercase text-[#e4e4e7]">
                ABOUT MAXIMEM
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#71717a] tracking-[1.4px] uppercase">
              THE UNIFIED AI MEMORY LAYER
            </span>
          </div>

          {/* Section Header Content */}
          <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-white">
              What is Maximem?
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] text-center max-w-[700px]">
              Maximem is your AI memory layer — it captures what matters, organizes it, and makes it instantly available across all your AI tools. No more repeating context. No more lost information.
            </p>
          </div>

          {/* 5 Feature Pillar Cards (Geometric & Technical) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            
            {/* Pillar 1: Unified Memory */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/80 p-5 flex flex-col justify-between hover:border-[#f26522]/50 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-9 rounded-[8px] bg-[#161615] border border-white/[0.08] flex items-center justify-center text-[#f26522] group-hover:border-[#f26522]/40 transition-colors">
                    {/* Database / Cylinder Vault Vector */}
                    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#f26522] transition-colors">
                    01
                  </span>
                </div>
                <h3 className="font-semibold text-[16px] text-white tracking-tight">
                  Unified Memory
                </h3>
                <p className="mt-2 text-[13px] leading-[20px] text-[#a1a1aa]">
                  One place for everything you care about. Seamlessly unifies codebases, personal directives, and ongoing goals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>HNSW Graph</span>
                <span className="text-[#f26522]">1536-dim</span>
              </div>
            </div>

            {/* Pillar 2: Cross-App Sync */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/80 p-5 flex flex-col justify-between hover:border-[#f26522]/50 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-9 rounded-[8px] bg-[#161615] border border-white/[0.08] flex items-center justify-center text-[#f26522] group-hover:border-[#f26522]/40 transition-colors">
                    {/* Synchronize Loop Vector */}
                    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12" />
                      <polyline points="19.5,8 19.5,12 15.5,12" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5" />
                      <polyline points="4.5,16 4.5,12 8.5,12" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#f26522] transition-colors">
                    02
                  </span>
                </div>
                <h3 className="font-semibold text-[16px] text-white tracking-tight">
                  Cross-App Sync
                </h3>
                <p className="mt-2 text-[13px] leading-[20px] text-[#a1a1aa]">
                  Works across all AI platforms. Update your context in Claude and VS Code knows it before your next command.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Latency</span>
                <span className="text-[#f26522]">&lt; 15ms</span>
              </div>
            </div>

            {/* Pillar 3: Smart Context */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/80 p-5 flex flex-col justify-between hover:border-[#f26522]/50 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-9 rounded-[8px] bg-[#161615] border border-white/[0.08] flex items-center justify-center text-[#f26522] group-hover:border-[#f26522]/40 transition-colors">
                    {/* Neural / Cognitive Node Vector */}
                    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="4" cy="7" r="2" />
                      <circle cx="20" cy="7" r="2" />
                      <circle cx="4" cy="17" r="2" />
                      <circle cx="20" cy="17" r="2" />
                      <path d="M6 8l4 3M18 8l-4 3M6 16l4-3M18 16l-4-3" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#f26522] transition-colors">
                    03
                  </span>
                </div>
                <h3 className="font-semibold text-[16px] text-white tracking-tight">
                  Smart Context
                </h3>
                <p className="mt-2 text-[13px] leading-[20px] text-[#a1a1aa]">
                  Understands what matters most. Automatically extracts key entities, temporal references, and rules without noise.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Filter</span>
                <span className="text-[#f26522]">Anti-Noise</span>
              </div>
            </div>

            {/* Pillar 4: Privacy First */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/80 p-5 flex flex-col justify-between hover:border-[#f26522]/50 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-9 rounded-[8px] bg-[#161615] border border-white/[0.08] flex items-center justify-center text-[#f26522] group-hover:border-[#f26522]/40 transition-colors">
                    {/* Cryptographic Shield Vector */}
                    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="11" r="2" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#f26522] transition-colors">
                    04
                  </span>
                </div>
                <h3 className="font-semibold text-[16px] text-white tracking-tight">
                  Privacy First
                </h3>
                <p className="mt-2 text-[13px] leading-[20px] text-[#a1a1aa]">
                  Your data, your control. Client-side zero-knowledge encryption ensures your private context stays private even from us.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Cipher</span>
                <span className="text-[#f26522]">AES-GCM-256</span>
              </div>
            </div>

            {/* Pillar 5: Always On */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/80 p-5 flex flex-col justify-between hover:border-[#f26522]/50 hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-9 rounded-[8px] bg-[#161615] border border-white/[0.08] flex items-center justify-center text-[#f26522] group-hover:border-[#f26522]/40 transition-colors">
                    {/* Infinity Pulse Vector */}
                    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M18.178 8c5.096 0 5.096 8 0 8-3.048 0-4.63-2.667-6.178-5.333C10.452 8 8.87 5.333 5.822 5.333 0.726 5.333 0.726 13.333 5.822 13.333c3.048 0 4.63-2.666 6.178-5.333" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#f26522] transition-colors">
                    05
                  </span>
                </div>
                <h3 className="font-semibold text-[16px] text-white tracking-tight">
                  Always On
                </h3>
                <p className="mt-2 text-[13px] leading-[20px] text-[#a1a1aa]">
                  Ready when you are. Native browser extension, MCP server, and desktop daemon work silently in the background.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Daemon</span>
                <span className="text-[#f26522]">99.99% Core</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. SECTION: "MEMORY, IN CONTEXT." (Why Maximem & Context Dimensions)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Rationale */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f26522]" />
              <span className="font-mono text-[11.5px] uppercase tracking-[1.4px] text-[#f26522] font-medium">
                WHY MAXIMEM
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] font-medium tracking-[-0.03em] leading-[1.12] text-white">
              Memory, in context.
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] text-[#a1a1aa] tracking-[-0.012em]">
              Maximem doesn&apos;t just store raw text — it understands relationships. It continuously links your active projects, technical directives, and cross-tool conversations so every assistant acts as an experienced colleague.
            </p>

            {/* 3 Technical Checkpoints */}
            <div className="mt-6 flex flex-col gap-3.5 w-full">
              <div className="flex items-start gap-3 p-3 rounded-[8px] bg-[#141413] border border-white/[0.07]">
                <div className="size-5 rounded-full bg-[#f26522]/15 text-[#f26522] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="text-[13px] font-medium text-white block">
                    Zero context window saturation
                  </span>
                  <span className="text-[12px] text-zinc-400">
                    Retrieves only the exact 3-5 pertinent vectors, saving 80% on token overhead.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-[8px] bg-[#141413] border border-white/[0.07]">
                <div className="size-5 rounded-full bg-[#f26522]/15 text-[#f26522] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="text-[13px] font-medium text-white block">
                    Conflict resolution & decay
                  </span>
                  <span className="text-[12px] text-zinc-400">
                    Outdated decisions are automatically superseded by new consensus without manual pruning.
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#how-it-works"
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-[#f26522] hover:text-[#ff7733] transition-colors group"
            >
              <span>Explore Architecture & Features</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column: Interactive 4-Dimension Context Schematic */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-[16px] border border-white/[0.09] bg-[#141413] p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              
              {/* Header Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { id: "projects", label: "Projects", desc: "Work & Goals" },
                  { id: "preferences", label: "Preferences", desc: "How you work" },
                  { id: "conversations", label: "Conversations", desc: "Thread insights" },
                  { id: "files", label: "Files", desc: "Docs & specs" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`p-2.5 rounded-[8px] border text-left transition-all ${
                      activeTab === tab.id
                        ? "bg-[#1f1d1b] border-[#f26522]/80 text-white"
                        : "bg-[#0c0c0b] border-white/[0.06] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span className="block text-[12.5px] font-semibold">{tab.label}</span>
                    <span className="block text-[10.5px] font-mono text-[#71717a] mt-0.5">{tab.desc}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Dimension Preview Frame */}
              <div className="rounded-[10px] bg-[#0c0c0b] border border-white/[0.07] p-5 text-left font-mono">
                {activeTab === "projects" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/[0.06] pb-2">
                      <span className="text-[#f26522] uppercase">CONTEXT DIMENSION: ACTIVE PROJECTS</span>
                      <span>3 ENTITIES INDEXED</span>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-white text-[12.5px] font-medium block">
                        Project &quot;Maximem Redesign&quot;
                      </span>
                      <p className="text-zinc-400 text-[11.5px] mt-1">
                        Constraint: Replicate exact Maximem homepage brand tokens (Geist sans, restrained orange #f26522, no italic serif, minimal cards).
                      </p>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-white text-[12.5px] font-medium block">
                        Project &quot;Authentication Service&quot;
                      </span>
                      <p className="text-zinc-400 text-[11.5px] mt-1">
                        Decided with Claude & VS Code: Implement Next.js 16 Proxy + Clerk session verification.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "preferences" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/[0.06] pb-2">
                      <span className="text-[#f26522] uppercase">CONTEXT DIMENSION: USER DIRECTIVES</span>
                      <span>GLOBAL HEURISTICS</span>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-white text-[12.5px] font-medium block">
                        Styling: Tailwind CSS v4
                      </span>
                      <p className="text-zinc-400 text-[11.5px] mt-1">
                        Always use modern @theme directives, avoid legacy tailwind.config.js plugins.
                      </p>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-white text-[12.5px] font-medium block">
                        Response Tone
                      </span>
                      <p className="text-zinc-400 text-[11.5px] mt-1">
                        Technical, concise, production-ready, no conversational filler or apologies.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "conversations" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/[0.06] pb-2">
                      <span className="text-[#f26522] uppercase">CONTEXT DIMENSION: CROSS-TOOL SESSIONS</span>
                      <span>SYNCED 2 HOURS AGO</span>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-emerald-400 text-[11px] uppercase block">
                        Source: Slack #dev-channel
                      </span>
                      <p className="text-zinc-300 text-[12px] mt-1">
                        &quot;Agreed to keep Port 3001 reserved for Maximem dev server.&quot;
                      </p>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-[#f26522] text-[11px] uppercase block">
                        Source: Claude 3.7 Chat
                      </span>
                      <p className="text-zinc-300 text-[12px] mt-1">
                        &quot;Refactored three-layer memory visualization to use clean SVG polygons.&quot;
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "files" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/[0.06] pb-2">
                      <span className="text-[#f26522] uppercase">CONTEXT DIMENSION: INDEXED ARTIFACTS</span>
                      <span>LOCAL REPOSITORY</span>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-white text-[12.5px] font-medium block">
                        package.json (Dependencies)
                      </span>
                      <p className="text-zinc-400 text-[11.5px] mt-1">
                        Next 16.2.6, React 19.2.4, Prisma 7.8, Lucide React, Framer Motion.
                      </p>
                    </div>
                    <div className="p-3 rounded-[6px] bg-[#141413] border border-white/[0.04]">
                      <span className="text-white text-[12.5px] font-medium block">
                        Design Tokens
                      </span>
                      <p className="text-zinc-400 text-[11.5px] mt-1">
                        Accent: #f26522, Background: #09090b, Cards: #141413.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Auto-updated on conversation turns
                </span>
                <span className="text-zinc-400">Zero duplicate entries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. SECTION: "HOW MAXIMEM ACTUALLY WORKS" (4-Step Pipeline)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20 select-none"
      >
        <div className="relative w-full rounded-[16px] border border-white/[0.08] bg-[#141413]/90 p-7 sm:p-10 lg:p-12 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          
          {/* Eyebrow Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 mb-7">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f26522]" />
              <span className="font-mono text-[11.5px] uppercase tracking-[1.4px] text-[#f26522] font-medium">
                HOW IT WORKS
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#71717a] tracking-[1.4px] uppercase">
              THE 4-STAGE RUNTIME PIPELINE
            </span>
          </div>

          {/* Section Header */}
          <div className="max-w-[760px] mx-auto text-center flex flex-col items-center mb-10 sm:mb-14">
            <h2 className="text-[32px] sm:text-[40px] font-medium tracking-[-0.03em] leading-[1.12] text-white">
              How Maximem actually works
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] text-[#a1a1aa] tracking-[-0.012em]">
              Set it up once. Then forget it. Maximem quietly captures your context and keeps it in sync across all your AI apps.
            </p>
          </div>

          {/* 4 Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-stretch">
            
            {/* Step 01: Connect */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/90 p-6 flex flex-col justify-between hover:border-[#f26522]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#f26522] font-semibold tracking-wider">
                    01
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-400">
                    ONE-CLICK
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-white tracking-tight">
                  Connect
                </h3>
                <p className="mt-2 text-[13.5px] leading-[22px] text-[#a1a1aa]">
                  Link your favorite AI apps via our browser extension, desktop daemon, or local MCP server in under 60 seconds.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                Extension · MCP · CLI
              </div>
            </div>

            {/* Step 02: Capture */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/90 p-6 flex flex-col justify-between hover:border-[#f26522]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#f26522] font-semibold tracking-wider">
                    02
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-400">
                    PASSIVE
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-white tracking-tight">
                  Capture
                </h3>
                <p className="mt-2 text-[13.5px] leading-[22px] text-[#a1a1aa]">
                  Maximem stores your context without interrupting you. Facts, project directives, and code choices are saved as you chat.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                Entity Resolution v2
              </div>
            </div>

            {/* Step 03: Sync */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/90 p-6 flex flex-col justify-between hover:border-[#f26522]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#f26522] font-semibold tracking-wider">
                    03
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-400">
                    ENCRYPTED
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-white tracking-tight">
                  Sync
                </h3>
                <p className="mt-2 text-[13.5px] leading-[22px] text-[#a1a1aa]">
                  Available everywhere you work. Instant cross-device replication ensures Claude, VS Code, and Slack share identical memory.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                P75 Latency &lt; 15ms
              </div>
            </div>

            {/* Step 04: Get Answers */}
            <div className="rounded-[12px] border border-white/[0.08] bg-[#0c0c0b]/90 p-6 flex flex-col justify-between hover:border-[#f26522]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#f26522] font-semibold tracking-wider">
                    04
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f26522]/20 text-[#f26522]">
                    ZERO FRICTION
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-white tracking-tight">
                  Get Answers
                </h3>
                <p className="mt-2 text-[13.5px] leading-[22px] text-[#a1a1aa]">
                  More relevant, personalized results. Prompts automatically receive pertinent memory vectors before LLM inference.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                92% Higher Accuracy
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. SECTION: "WORKS WITH YOUR FAVORITE AI TOOLS" (Ecosystem)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="integrations"
        className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f26522]" />
            <span className="font-mono text-[11.5px] uppercase tracking-[1.4px] text-[#f26522] font-medium">
              SUPPORTED AI APPS
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] font-medium tracking-[-0.03em] leading-[1.12] text-white">
            Works with your favorite AI tools
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#a1a1aa] max-w-[640px]">
            Maximem integrates with the tools you already use. One memory. All your AI apps.
          </p>
        </div>

        {/* Horizontal Tool Chips Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {APPS_DATA.map((tool) => {
            const isSelected = selectedApp.id === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => setSelectedApp(tool)}
                className={`p-3 rounded-[10px] border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#1f1d1b] border-[#f26522] text-white shadow-[0_0_16px_rgba(242,101,34,0.25)]"
                    : "bg-[#141413] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.18]"
                }`}
              >
                <tool.icon className={`size-5 ${isSelected ? "text-[#f26522]" : "text-zinc-300"}`} />
                <span className="text-[12.5px] font-medium tracking-tight">
                  {tool.name}
                </span>
                <span className="text-[9.5px] font-mono text-zinc-500">
                  {tool.latency}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Tool Deep Dive Comparison Card */}
        <div className="rounded-[16px] border border-white/[0.08] bg-[#141413] p-6 sm:p-8 text-left">
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-[8px] bg-[#1a1a19] border border-white/[0.1] flex items-center justify-center text-[#f26522]">
                <selectedApp.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-white tracking-tight">
                  {selectedApp.name} Integration
                </h3>
                <span className="text-[12px] font-mono text-zinc-400">
                  {selectedApp.category} · {selectedApp.protocol}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{selectedApp.tag}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Without Maximem */}
            <div className="rounded-[10px] bg-[#0c0c0b] border border-red-500/20 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-red-400 text-[11.5px] font-mono uppercase mb-2">
                <span>✕</span>
                <span>Without Maximem (Isolated)</span>
              </div>
              <p className="text-[13px] leading-[22px] text-zinc-400">
                {selectedApp.withoutMemory}
              </p>
            </div>

            {/* With Maximem */}
            <div className="rounded-[10px] bg-[#0c0c0b] border border-[#f26522]/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-[#f26522] text-[11.5px] font-mono uppercase mb-2">
                <span>✓</span>
                <span>With Maximem (Unified Memory)</span>
              </div>
              <p className="text-[13px] leading-[22px] text-zinc-200">
                {selectedApp.withMemory}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. SECTION: CALL TO ACTION BANNER (Matching Maximem CTA Standard)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 select-none"
      >
        <div className="relative rounded-[16px] border border-white/[0.09] bg-[#141413] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Subtle Dot Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Very Subtle Ambient Orange Radial Arc in Corner */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-[420px] h-[320px] rounded-full opacity-[0.25] blur-[100px]"
            style={{
              background: "radial-gradient(circle, #f26522 0%, rgba(242,101,34,0.1) 60%, transparent 80%)",
            }}
          />

          <div className="relative z-10 max-w-[700px] flex flex-col items-start text-left">
            <span className="font-mono text-[11.5px] uppercase tracking-[1.4px] text-[#f26522] font-medium mb-3">
              GET STARTED IN SECONDS
            </span>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] leading-[1.1] text-white">
              Ready to give your AI a memory?
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16.5px] leading-[26px] text-[#a1a1aa] max-w-[560px]">
              Join thousands of creators, builders and professionals using Maximem to get more from their AI tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://synap.maximem.ai/signup"
                className="h-[46px] px-6 rounded-[8px] bg-[#f26522] hover:bg-[#ff7733] text-white text-[14px] font-medium tracking-tight flex items-center gap-2 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Get Started Free</span>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="#how-it-works"
                className="h-[46px] px-5 rounded-[8px] bg-[#1a1a19] hover:bg-[#222221] text-zinc-300 hover:text-white border border-white/[0.1] text-[14px] font-medium tracking-tight transition-all active:scale-[0.98]"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-[12px] font-mono text-zinc-500">
              <span>Free tier available</span>
              <span>·</span>
              <span>No credit card required</span>
              <span>·</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. SECTION: FREQUENTLY ASKED QUESTIONS (Accordion Grid)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20 select-none"
      >
        <div className="flex flex-wrap items-end justify-between border-b border-white/[0.08] pb-6 mb-8 gap-4">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f26522]" />
              <span className="font-mono text-[11.5px] uppercase tracking-[1.4px] text-[#f26522] font-medium">
                FAQ
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[38px] font-medium tracking-[-0.03em] leading-[1.12] text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <a
            href="mailto:support@maximem.ai"
            className="text-[13px] font-mono text-[#f26522] hover:text-[#ff7733] transition-colors"
          >
            Still have questions? Contact Support →
          </a>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqItems.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={item.q}
                className={`rounded-[12px] border transition-all duration-200 overflow-hidden text-left ${
                  isOpen
                    ? "bg-[#141413] border-[#f26522]/40"
                    : "bg-[#0e0e0d] border-white/[0.07] hover:border-white/[0.14]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer gap-4"
                >
                  <span className={`text-[14.5px] font-medium tracking-tight ${isOpen ? "text-white" : "text-zinc-200"}`}>
                    {item.q}
                  </span>
                  <div className={`size-6 rounded-[6px] border flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? "rotate-180 bg-[#f26522]/15 border-[#f26522]/50 text-[#f26522]" : "border-white/[0.08] text-zinc-500"
                  }`}>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-[13.5px] leading-[22px] text-[#a1a1aa] border-t border-white/[0.04] pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. FOOTER SECTION (Canonical Maximem Footer)
      ══════════════════════════════════════════════════════════════════════ */}
      <FooterSection isLight={false} />

    </div>
  );
}
