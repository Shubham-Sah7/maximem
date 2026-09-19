"use client";

import React, { useState } from "react";
import { AnimatedHeading, ScrollReveal } from "@/components/ui/animated-text";

interface Article {
  tag: string;
  index: string;
  image: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

const ARTICLE_PAGES: Article[][] = [
  // Page 1: Exact matches from reference design
  [
    {
      tag: "SKILLS DIRECTORY",
      index: "01",
      image: "/website-clone/6bf0a82de0f435acdf2709da1b099cd4c24bf460.png",
      title: "Claude Skills for AI Engineers: 2026 Mid-Year Edition",
      description:
        "Curated technical cheat-sheets for context scaffolding, MCP server interfaces, and long-turn state management across autonomous agents.",
      date: "Aug 10, 2026",
      url: "https://www.maximem.ai/blog/claude-skills-for-ai-engineers-2026",
    },
    {
      tag: "PROTOCOL SPEC",
      index: "02",
      image: "/website-clone/d8ed252916b8f0dab62ac88c5a241e8a1f7ba05c.png",
      title: "MCP 2026-07-28: 20 Breaking Changes and the Errors They Cause",
      description:
        "MCP 2026-07-28 removed sessions, the initialize handshake, and the ability for servers to initiate requests at all. Breaking wire changes explained.",
      date: "Jul 29, 2026",
      url: "https://www.maximem.ai/blog/mcp-2026-07-28-breaking-changes",
    },
    {
      tag: "CORE RESEARCH",
      index: "03",
      image: "/website-clone/d58a9ec38402123c051d047262f1de8219af0c4b.png",
      title: "Agentic Context Management: Agent Memory is an Architecture Problem",
      description:
        "We argue in our latest paper that agent memory and token cost must be treated as lifecycle and architecture problems, not simple vector lookups.",
      date: "Jul 25, 2026",
      url: "https://www.maximem.ai/blog/agentic-context-management-paper",
    },
  ],
  // Page 2: Additional deep dives
  [
    {
      tag: "BENCHMARKS",
      index: "04",
      image: "/website-clone/41f31794f4832a59ff417534d341e2838abf31e3.png",
      title: "LongMemEval: State-of-the-Art Benchmark for Long-Horizon Agent Memory",
      description:
        "Empirical evaluations demonstrating 94.2% recall on multi-turn context preservation vs 61.8% for standard vector embeddings.",
      date: "Jul 12, 2026",
      url: "https://www.maximem.ai/blog/long-mem-eval-benchmark",
    },
    {
      tag: "SYSTEM DESIGN",
      index: "05",
      image: "/website-clone/ac91258f549b9924be02e9f8382d107c5ba8c279.png",
      title: "Why Vector Databases Alone Fail Multi-Session Agent Workflows",
      description:
        "Analyzing catastrophic context bleed and associative loss in autonomous agent memory systems during complex reasoning tasks.",
      date: "Jun 28, 2026",
      url: "https://www.maximem.ai/blog/why-vector-dbs-fail-agent-memory",
    },
    {
      tag: "ARCHITECTURE",
      index: "06",
      image: "/website-clone/fd9e1e5c04b3fa7ffcf2e0956c3d9d406b68457b.png",
      title: "Tiered Context Hierarchies: Working Memory, Semantic Graph & Cold Storage",
      description:
        "Architecting scalable multi-tiered memory pipelines that balance sub-millisecond retrieval with enterprise-grade state durability.",
      date: "Jun 15, 2026",
      url: "https://www.maximem.ai/blog/tiered-context-hierarchies",
    },
  ],
  // Page 3: Enterprise & Scaling
  [
    {
      tag: "DEEP DIVE",
      index: "07",
      image: "/website-clone/5accd1373992738d0ddea3a5f06b409abe9879dc.png",
      title: "Zero-Latency Agent State Restorations with Tiered Ephemeral Caches",
      description:
        "How we reduced context reconstitution time from 2.4s to under 18ms for high-frequency trading and customer service bots.",
      date: "May 30, 2026",
      url: "https://www.maximem.ai/blog/zero-latency-agent-state",
    },
    {
      tag: "ENGINEERING",
      index: "08",
      image: "/website-clone/3966c318087c34a87eab639481bcab8d2619c9a2.png",
      title: "Self-Pruning Memory Graphs for Autonomous Coding Agents",
      description:
        "Preventing token window bloat and hallucinatory references by dynamically compressing resolved code AST modifications.",
      date: "May 18, 2026",
      url: "https://www.maximem.ai/blog/self-pruning-memory-graphs",
    },
    {
      tag: "ENTERPRISE",
      index: "09",
      image: "/website-clone/40fa724e97ae2d6317abc3a458115e27355b8383.png",
      title: "Privacy-Preserving On-Premise Context Management for Financial AI",
      description:
        "Deploying Synap SDK with air-gapped encryption and hardware-enforced tenant isolation for regulated fintech environments.",
      date: "May 02, 2026",
      url: "https://www.maximem.ai/blog/privacy-preserving-context",
    },
  ],
];

interface BlogSectionProps {
  isLight?: boolean;
}

export default function BlogSection({ isLight = true }: BlogSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    const nextIdx = (currentPage - 1 + ARTICLE_PAGES.length) % ARTICLE_PAGES.length;
    handlePageChange(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentPage + 1) % ARTICLE_PAGES.length;
    handlePageChange(nextIdx);
  };

  const currentArticles = ARTICLE_PAGES[currentPage];

  return (
    <section className={`content-stretch flex flex-col items-center justify-center relative shrink-0 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isLight ? "bg-[#ffffff] text-[#09090b]" : "bg-[#1B1B19] text-white"
    }`} data-name="Section">
      <div className="content-stretch flex flex-col items-center max-w-[1240px] w-full relative">
        
        {/* ── HEADER & EYEBROW ─────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-12 max-w-[800px]">
          {/* Eyebrow with square box node */}
          <div className="flex items-center gap-2 mb-4">
            <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
            <span className={`font-mono text-[12px] tracking-[1.4px] uppercase font-medium ${
              isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
            }`}>
              RESEARCH &amp; DEEP-DIVES
            </span>
          </div>

          {/* Animated Heading */}
          <AnimatedHeading
            text="Learn about Context Engineering"
            className={`font-['Geist_Variable:Medium',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.03em] mb-3 ${
              isLight ? "text-[#09090b]" : "text-white"
            }`}
            delay={0.1}
          />

          {/* Subtitle */}
          <ScrollReveal delay={0.2}>
            <p className={`font-['Geist_Variable:Regular',sans-serif] text-[15px] sm:text-[16px] md:text-[16.5px] leading-[26px] tracking-[-0.012em] max-w-[700px] ${
              isLight ? "text-[#52525b]" : "text-[#99999f]"
            }`}>
              In-depth guides, research and real-world insights on AI context, memory and building production-ready agents with Maximem.
            </p>
          </ScrollReveal>
        </div>

        {/* ── 3-CARD GRID CONTAINER ───────────────────────────────────── */}
        <div
          data-name="Container39"
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-opacity duration-200 ${
            isTransitioning ? "opacity-40" : "opacity-100"
          }`}
        >
          {currentArticles.map((art) => (
            <a
              key={art.index}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`research-card group flex flex-col justify-between rounded-[14px] p-6 sm:p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 cursor-pointer select-none ${
                isLight
                  ? "bg-white border border-[#e4e4e7] shadow-[0_2px_8px_rgba(0,0,0,0.03),0_12px_28px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_18px_40px_rgba(0,0,0,0.08)] hover:border-[#f26522]/60"
                  : "bg-[#131311] border border-white/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.3),0_12px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.4),0_20px_48px_rgba(0,0,0,0.5)] hover:border-[#f26522]/50"
              }`}
            >
              {/* Card Content Top Area */}
              <div>
                {/* Top Meta Row: Category Tag & Number */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[#f26522] text-[11px] font-mono tracking-[1.4px] font-semibold uppercase">
                    {art.tag}
                  </span>
                  <span className={`text-[12px] font-mono font-medium ${
                    isLight ? "text-[#71717a]" : "text-[#71717a]"
                  }`}>
                    {art.index}
                  </span>
                </div>

                {/* Preview Image Container */}
                <div className={`relative w-full aspect-[16/10] sm:h-[185px] rounded-[10px] overflow-hidden mb-5 flex items-center justify-center border ${
                  isLight ? "bg-[#f4f4f5] border-[#e4e4e7]" : "bg-[#181816] border-white/[0.06]"
                }`}>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner top highlight */}
                  <div className={`absolute inset-0 ring-1 ring-inset pointer-events-none rounded-[10px] ${
                    isLight ? "ring-black/[0.04]" : "ring-white/[0.05]"
                  }`} />
                </div>

                {/* Article Title */}
                <h3 className={`text-[18px] sm:text-[19px] font-semibold transition-colors leading-[1.35] tracking-tight line-clamp-2 min-h-[50px] mb-3 ${
                  isLight
                    ? "text-[#09090b] group-hover:text-[#f26522]"
                    : "text-white group-hover:text-[#f26522]"
                }`}>
                  {art.title}
                </h3>

                {/* Article Description */}
                <p className={`text-[13px] sm:text-[13.5px] leading-[1.6] line-clamp-3 min-h-[64px] mb-5 ${
                  isLight ? "text-[#52525b]" : "text-[#8e8e93]"
                }`}>
                  {art.description}
                </p>
              </div>

              {/* Card Footer: Date + Read More */}
              <div className="pt-2 flex items-center justify-between mt-auto">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-[12px] font-mono text-[#71717a]">
                  <svg
                    className="size-3.5 text-[#71717a] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>{art.date}</span>
                </div>

                {/* Read More Link */}
                <div className={`text-[13px] sm:text-[13.5px] font-medium flex items-center transition-colors ${
                  isLight
                    ? "text-[#09090b] group-hover:text-[#f26522]"
                    : "text-white group-hover:text-[#f26522]"
                }`}>
                  <span>Read More</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── BOTTOM CAROUSEL & ACTION BAR ───────────────────────────── */}
        <div className="w-full mt-12 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className={`text-[13.5px] font-normal text-center sm:text-left ${
            isLight ? "text-[#52525b]" : "text-[#71717a]"
          }`}>
            Insights for builders who think long-term.
          </div>

          {/* Center Carousel Dash Indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pagination">
            {ARTICLE_PAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === idx
                    ? "w-8 bg-[#f26522]"
                    : isLight
                    ? "w-5 bg-black/15 hover:bg-black/30"
                    : "w-5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-selected={currentPage === idx}
              />
            ))}
          </div>

          {/* Right Action Links & Circular Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.maximem.ai/blog"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[13.5px] font-medium underline underline-offset-4 transition-all mr-1 ${
                isLight
                  ? "text-[#27272a] hover:text-[#09090b] decoration-black/20 hover:decoration-black"
                  : "text-[#d4d4d8] hover:text-white decoration-white/25 hover:decoration-white"
              }`}
            >
              View all articles
            </a>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className={`size-10 rounded-full border flex items-center justify-center transition-all active:scale-95 cursor-pointer ${
                isLight
                  ? "border-[#e4e4e7] bg-white hover:bg-[#f4f4f5] text-[#52525b] hover:text-[#09090b] shadow-sm"
                  : "border-white/10 hover:border-white/30 bg-[#161614] hover:bg-[#20201d] text-[#a1a1aa] hover:text-white"
              }`}
              aria-label="Previous articles"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Next Button (Active orange styled as in screenshot) */}
            <button
              onClick={handleNext}
              className={`size-10 rounded-full border border-[#f26522]/60 hover:border-[#f26522] flex items-center justify-center text-[#f26522] shadow-sm hover:scale-105 transition-all active:scale-95 cursor-pointer ${
                isLight ? "bg-[#fff7f2] hover:bg-[#f26522]/15" : "bg-[#1a1412] hover:bg-[#f26522]/20"
              }`}
              aria-label="Next articles"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
