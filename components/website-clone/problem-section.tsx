"use client";

import React from "react";
import { AnimatedHeading, ScrollReveal } from "@/components/ui/animated-text";

interface ProblemSectionProps {
  isLight?: boolean;
}

export default function ProblemSection({ isLight = true }: ProblemSectionProps) {
  return (
    <section
      id="the-problem"
      className={`content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pt-20 md:pt-28 pb-20 px-6 sm:px-10 border-none transition-colors duration-300 ${
        isLight ? "bg-[#ffffff] text-[#09090b]" : "bg-[#0e0e0d] text-white"
      }`}
      data-name="ProblemSection"
    >
      <div className="content-stretch flex flex-col items-center max-w-[1240px] w-full relative">
        
        {/* ── TOP TWO-COLUMN AREA: PITCH + ARCHITECTURE DIAGRAM ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">
          
          {/* Left Column: Heading, Pitch & CTA (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Tag Pill / Label */}
            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-2 mb-4">
                <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
                <span className={`font-mono text-[11.5px] tracking-[1.5px] uppercase font-medium ${
                  isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                }`}>
                  THE PROBLEM
                </span>
              </div>
            </ScrollReveal>

            {/* Headline with animated text */}
            <AnimatedHeading
              text="Why memory, and why the alternatives fall short."
              className={`font-['Geist_Variable:Medium',sans-serif] text-[36px] sm:text-[44px] lg:text-[48px] font-semibold leading-[1.12] tracking-[-0.03em] mb-5 ${
                isLight ? "text-[#09090b]" : "text-white"
              }`}
              delay={0.1}
            />

            {/* Paragraph Body */}
            <ScrollReveal delay={0.2}>
              <p className={`font-['Geist_Variable:Regular',sans-serif] text-[15px] sm:text-[16px] leading-[1.65] max-w-[460px] mb-8 ${
                isLight ? "text-[#52525b]" : "text-[#99999f]"
              }`}>
                Bigger context windows do not fix it. Vector search is not it.
                Files do not scale, and the platforms will not own it for you.
                We answer the nine loudest objections to agent memory, with proof.
              </p>
            </ScrollReveal>

            {/* Link CTA */}
            <a
              href="https://www.maximem.ai/blog/agentic-context-management-paper"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f26522] hover:text-[#d94e0e] text-[14.5px] font-medium transition-colors group cursor-pointer"
            >
              <span>Read the case for memory</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column: Interactive / Animated Architecture Flow Diagram (7 cols) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <div className={`relative w-full max-w-[720px] min-h-[410px] rounded-[16px] p-5 sm:p-7 flex items-center justify-between overflow-hidden transition-all duration-300 ${
              isLight
                ? "bg-[#fafafa] border border-[#e4e4e7] shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                : "bg-[#11110f]/90 border border-white/[0.07] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            }`}>
              
              {/* Subtle background grid pattern */}
              <div
                className={`absolute inset-0 pointer-events-none ${isLight ? "opacity-[0.06]" : "opacity-[0.035]"}`}
                style={{
                  backgroundImage: isLight
                    ? `radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)`
                    : `radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />
              
              {/* Subtle orange radial glow behind central agent */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#f26522]/[0.08] rounded-full blur-3xl pointer-events-none" />

              {/* ── STAGE 1: 5 Input Sources (Left) ───────────────────── */}
              <div className="flex flex-col justify-between gap-3 z-10 w-[150px] sm:w-[175px]">
                {/* 1. Conversations */}
                <div className={`group rounded-[9px] p-2 sm:p-2.5 flex items-center gap-2.5 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/50 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-white/20"
                }`}>
                  <div className={`size-6 sm:size-7 rounded-[5px] flex items-center justify-center shrink-0 transition-colors ${
                    isLight
                      ? "bg-[#f4f4f5] border border-[#e4e4e7] text-[#52525b] group-hover:text-[#09090b]"
                      : "bg-[#1c1c1a] border border-white/[0.06] text-[#8e8e93] group-hover:text-white"
                  }`}>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.873-.873 5.97 5.97 0 01.996-3.036A8.196 8.196 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[12px] sm:text-[13px] font-medium tracking-tight truncate ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>Conversations</p>
                    <p className="text-[10px] sm:text-[11px] text-[#71717a] truncate">Real-time chats</p>
                  </div>
                </div>

                {/* 2. Documents */}
                <div className={`group rounded-[9px] p-2 sm:p-2.5 flex items-center gap-2.5 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/50 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-white/20"
                }`}>
                  <div className={`size-6 sm:size-7 rounded-[5px] flex items-center justify-center shrink-0 transition-colors ${
                    isLight
                      ? "bg-[#f4f4f5] border border-[#e4e4e7] text-[#52525b] group-hover:text-[#09090b]"
                      : "bg-[#1c1c1a] border border-white/[0.06] text-[#8e8e93] group-hover:text-white"
                  }`}>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[12px] sm:text-[13px] font-medium tracking-tight truncate ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>Documents</p>
                    <p className="text-[10px] sm:text-[11px] text-[#71717a] truncate">PDFs, docs, notes</p>
                  </div>
                </div>

                {/* 3. Databases */}
                <div className={`group rounded-[9px] p-2 sm:p-2.5 flex items-center gap-2.5 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/50 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-white/20"
                }`}>
                  <div className={`size-6 sm:size-7 rounded-[5px] flex items-center justify-center shrink-0 transition-colors ${
                    isLight
                      ? "bg-[#f4f4f5] border border-[#e4e4e7] text-[#52525b] group-hover:text-[#09090b]"
                      : "bg-[#1c1c1a] border border-white/[0.06] text-[#8e8e93] group-hover:text-white"
                  }`}>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[12px] sm:text-[13px] font-medium tracking-tight truncate ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>Databases</p>
                    <p className="text-[10px] sm:text-[11px] text-[#71717a] truncate">Structured data</p>
                  </div>
                </div>

                {/* 4. Web & APIs */}
                <div className={`group rounded-[9px] p-2 sm:p-2.5 flex items-center gap-2.5 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/50 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-white/20"
                }`}>
                  <div className={`size-6 sm:size-7 rounded-[5px] flex items-center justify-center shrink-0 transition-colors ${
                    isLight
                      ? "bg-[#f4f4f5] border border-[#e4e4e7] text-[#52525b] group-hover:text-[#09090b]"
                      : "bg-[#1c1c1a] border border-white/[0.06] text-[#8e8e93] group-hover:text-white"
                  }`}>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[12px] sm:text-[13px] font-medium tracking-tight truncate ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>Web &amp; APIs</p>
                    <p className="text-[10px] sm:text-[11px] text-[#71717a] truncate">External knowledge</p>
                  </div>
                </div>

                {/* 5. Code & repos */}
                <div className={`group rounded-[9px] p-2 sm:p-2.5 flex items-center gap-2.5 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/50 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-white/20"
                }`}>
                  <div className={`size-6 sm:size-7 rounded-[5px] flex items-center justify-center shrink-0 transition-colors ${
                    isLight
                      ? "bg-[#f4f4f5] border border-[#e4e4e7] text-[#52525b] group-hover:text-[#09090b]"
                      : "bg-[#1c1c1a] border border-white/[0.06] text-[#8e8e93] group-hover:text-white"
                  }`}>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[12px] sm:text-[13px] font-medium tracking-tight truncate ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>Code &amp; repos</p>
                    <p className="text-[10px] sm:text-[11px] text-[#71717a] truncate">Source code, issues</p>
                  </div>
                </div>
              </div>

              {/* ── STAGE 2: Connecting SVG Flow Lines (Background Overlay) ─ */}
              <svg
                className="absolute inset-0 size-full pointer-events-none"
                viewBox="0 0 720 410"
                fill="none"
                preserveAspectRatio="none"
              >
                {/* 5 Inflow Paths */}
                <path
                  d="M 185 52 C 265 52, 275 195, 320 195"
                  stroke={isLight ? "#a1a1aa" : "#52525b"}
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 185 124 C 260 124, 275 200, 320 200"
                  stroke={isLight ? "#a1a1aa" : "#52525b"}
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 185 196 C 255 196, 275 205, 320 205"
                  stroke={isLight ? "#a1a1aa" : "#52525b"}
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 185 268 C 260 268, 275 210, 320 210"
                  stroke={isLight ? "#a1a1aa" : "#52525b"}
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 185 340 C 265 340, 275 215, 320 215"
                  stroke={isLight ? "#a1a1aa" : "#52525b"}
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />

                {/* Left Inflow Ports / Connector Dots on Agent Box */}
                <circle cx="320" cy="195" r="2.5" fill={isLight ? "#71717a" : "#71717a"} />
                <circle cx="320" cy="200" r="2.5" fill={isLight ? "#71717a" : "#71717a"} />
                <circle cx="320" cy="205" r="2.5" fill={isLight ? "#71717a" : "#71717a"} />
                <circle cx="320" cy="210" r="2.5" fill={isLight ? "#71717a" : "#71717a"} />
                <circle cx="320" cy="215" r="2.5" fill={isLight ? "#71717a" : "#71717a"} />

                {/* 3 Outflow Paths to Warning Cards (Orange dashed) */}
                <path
                  d="M 388 190 C 435 190, 440 90, 478 90"
                  stroke="#f26522"
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 388 205 C 435 205, 440 205, 478 205"
                  stroke="#f26522"
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 388 220 C 435 220, 440 320, 478 320"
                  stroke="#f26522"
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />

                {/* Right Outflow Port Dots on Warning Cards */}
                <circle cx="478" cy="90" r="3" fill="#f26522" />
                <circle cx="478" cy="205" r="3" fill="#f26522" />
                <circle cx="478" cy="320" r="3" fill="#f26522" />
              </svg>

              {/* ── STAGE 3: Central Node — "Your AI Agent" ─────────────── */}
              <div className="z-10 flex items-center justify-center px-1 sm:px-3">
                <div className={`rounded-[12px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-center transition-all ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[#f26522]/50"
                    : "bg-[#171715] border border-white/[0.12] shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:border-[#f26522]/40"
                }`}>
                  {/* Label */}
                  <span className={`text-[13px] sm:text-[14px] font-medium whitespace-nowrap tracking-tight ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}>
                    Your AI Agent
                  </span>
                </div>
              </div>

              {/* ── STAGE 4: 3 Problem Outcome Cards (Right) ────────────── */}
              <div className="flex flex-col justify-around gap-4 z-10 w-[190px] sm:w-[235px]">
                {/* Problem 1: Forgets earlier context */}
                <div className={`group rounded-[9px] p-3 flex flex-col gap-1 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/60 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-[#f26522]/40"
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-[1px] bg-[#f26522] shrink-0" />
                    <p className={`text-[12px] sm:text-[13px] font-semibold tracking-tight leading-[1.25] ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>
                      Forgets earlier context
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#71717a] italic mt-0.5 leading-[1.3] pl-3.5">
                    &ldquo;What did we discuss last week?&rdquo;
                  </p>
                </div>

                {/* Problem 2: Can't connect information */}
                <div className={`group rounded-[9px] p-3 flex flex-col gap-1 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/60 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-[#f26522]/40"
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-[1px] bg-[#f26522] shrink-0" />
                    <p className={`text-[12px] sm:text-[13px] font-semibold tracking-tight leading-[1.25] ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>
                      Can&apos;t connect information
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#71717a] italic mt-0.5 leading-[1.3] pl-3.5">
                    &ldquo;It knows the pieces, not the whole.&rdquo;
                  </p>
                </div>

                {/* Problem 3: Doesn't scale */}
                <div className={`group rounded-[9px] p-3 flex flex-col gap-1 transition-all shadow-sm ${
                  isLight
                    ? "bg-white border border-[#e4e4e7] hover:border-[#f26522]/60 hover:shadow-md"
                    : "bg-[#141412] border border-white/[0.08] hover:border-[#f26522]/40"
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-[1px] bg-[#f26522] shrink-0" />
                    <p className={`text-[12px] sm:text-[13px] font-semibold tracking-tight leading-[1.25] ${
                      isLight ? "text-[#09090b]" : "text-white"
                    }`}>
                      Doesn&apos;t scale
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#71717a] italic mt-0.5 leading-[1.3] pl-3.5">
                    &ldquo;More data just creates more noise.&rdquo;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

