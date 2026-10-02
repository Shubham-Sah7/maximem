"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TechCloseIcon,
  ChatGPTIcon,
  ClaudeIcon,
  GeminiIcon,
} from "./app-icons";
import { AnimatedEyebrow, usePrefersReducedMotion } from "./vity-motion";

export default function MemoryProblemSection() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section className="relative w-full bg-[#0B0B0C] py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] select-none scroll-mt-24">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── SECTION HEADER (Matches Homepage Hierarchy) ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          
          {/* Eyebrow Label with tiny orange indicator */}
          <div className="mb-4">
            <AnimatedEyebrow number="02" category="THE PROBLEM" />
          </div>

          {/* Heading */}
          <h2 className="font-['Geist',sans-serif] text-[34px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.12] text-white">
            <motion.span
              initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              The
            </motion.span>{" "}
            <motion.span
              initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-[#f26522]"
            >
              AI memory
            </motion.span>{" "}
            <motion.span
              initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              problem
            </motion.span>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#a1a1aa] max-w-[620px] mx-auto"
          >
            Every conversation with AI starts from zero. No context, no history, no learning.
          </motion.p>
        </div>

        {/* ── 3 PROBLEM CARDS GRID (Homepage Card System) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* ── CARD 1: Repetitive content ── */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReduced ? {} : { y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
            className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-sm transition-colors duration-200 group"
          >
          
          <div className="relative z-10">
            {/* Stat */}
            <div className="font-['Geist',sans-serif] text-[32px] sm:text-[36px] font-semibold text-white tracking-tight leading-none">
              ~3/4th
            </div>

            {/* Title */}
            <div className="font-['Geist',sans-serif] text-[18px] sm:text-[19px] font-semibold text-white tracking-tight mt-2.5">
              Repetitive content
            </div>

            {/* Description */}
            <p className="font-['Geist',sans-serif] text-[13px] sm:text-[13.5px] leading-[21px] text-[#a1a1aa] mt-2 max-w-[210px]">
              Every conversation starts from zero, repeating the same content endlessly.
            </p>
          </div>

          {/* Right Isometric Chat Stack Graphic (Clean, restrained) */}
          <div className="absolute -right-2 sm:right-2 bottom-4 sm:bottom-6 w-[160px] h-[160px] pointer-events-none [perspective:800px] flex items-center justify-center">
            <div className="relative w-[145px] flex flex-col gap-2 [transform:rotateX(22deg)_rotateY(-22deg)_rotateZ(4deg)] group-hover:scale-105 transition-transform duration-300 ease-out">
              
              {/* Layer 1 (Dark Top) */}
              <div className="h-8.5 px-3 rounded-[7px] bg-[#1c1c1a] border border-white/[0.08] flex items-center gap-2 opacity-50">
                <div className="size-3.5 rounded-full bg-white/20 shrink-0" />
                <div className="space-y-1 w-full">
                  <div className="h-1.5 w-12 bg-white/20 rounded-full" />
                  <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Layer 2 (Active Highlighted Bar with subtle #f26522 accent) */}
              <div className="h-10 px-3 rounded-[8px] bg-[#1e1713] border border-[#f26522]/80 flex items-center gap-2 z-10 translate-x-1 shadow-sm">
                <div className="size-4.5 rounded-full bg-[#f26522] flex items-center justify-center text-white shrink-0">
                  <span className="size-1.5 rounded-full bg-white" />
                </div>
                <div className="space-y-1 w-full">
                  <div className="h-1.5 w-16 bg-[#f26522]/90 rounded-full" />
                  <div className="h-1.5 w-20 bg-white/60 rounded-full" />
                </div>
              </div>

              {/* Layer 3 (Dark) */}
              <div className="h-8.5 px-3 rounded-[7px] bg-[#181816] border border-white/[0.06] flex items-center gap-2 opacity-40">
                <div className="size-3.5 rounded-full bg-white/15 shrink-0" />
                <div className="space-y-1 w-full">
                  <div className="h-1.5 w-10 bg-white/15 rounded-full" />
                  <div className="h-1.5 w-14 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Layer 4 (Dark Bottom) */}
              <div className="h-8.5 px-3 rounded-[7px] bg-[#141412] border border-white/[0.04] flex items-center gap-2 opacity-25">
                <div className="size-3.5 rounded-full bg-white/10 shrink-0" />
                <div className="space-y-1 w-full">
                  <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* ── CARD 2: Lost Conversations ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-sm transition-colors duration-200 group"
        >
          
          <div className="relative z-10">
            {/* Stat */}
            <div className="font-['Geist',sans-serif] text-[32px] sm:text-[36px] font-semibold text-white tracking-tight leading-none">
              Most
            </div>

            {/* Title */}
            <div className="font-['Geist',sans-serif] text-[19px] font-semibold text-white tracking-tight mt-2.5">
              Lost Conversations
            </div>

            {/* Description */}
            <p className="font-['Geist',sans-serif] text-[13.5px] leading-[22px] text-[#a1a1aa] mt-2 max-w-[220px]">
              No history or context is retained, making prior interactions inaccessible.
            </p>
          </div>

          {/* Right Document Stack Graphic with Clean Subtle Treatment */}
          <div className="absolute -right-2 sm:right-1 bottom-4 sm:bottom-6 w-[160px] h-[160px] pointer-events-none [perspective:800px] flex items-center justify-center">
            <div className="relative w-[130px] h-[130px] [transform:rotateX(20deg)_rotateY(-20deg)_rotateZ(3deg)] group-hover:scale-105 transition-transform duration-300 ease-out">
              
              {/* Back Card 3 */}
              <div className="absolute inset-0 translate-x-4 -translate-y-3 rounded-[9px] bg-[#161614] border border-white/[0.04] opacity-30" />

              {/* Back Card 2 */}
              <div className="absolute inset-0 translate-x-2 -translate-y-1.5 rounded-[9px] bg-[#181816] border border-white/[0.06] opacity-50" />

              {/* Front Card */}
              <div className="absolute inset-0 rounded-[9px] bg-[#1d1d1a] border border-white/[0.1] p-3 flex flex-col justify-between shadow-md">
                
                {/* Subtle Orange Accent Star */}
                <div className="text-[#f26522] flex items-center gap-1">
                  <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                  </svg>
                </div>

                {/* Simulated Content Lines */}
                <div className="space-y-1.5">
                  <div className="h-1.5 w-16 bg-white/30 rounded-full" />
                  <div className="h-1.5 w-20 bg-white/20 rounded-full" />
                  <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                </div>

              </div>

              {/* Top Right "X" Badge */}
              <div className="absolute -top-2 -right-1.5 size-5 rounded-full bg-[#181816] border border-white/20 flex items-center justify-center text-white/50 shadow-sm z-20">
                <TechCloseIcon className="size-3" strokeColor="#a1a1aa" />
              </div>

            </div>
          </div>

        </motion.div>

        {/* ── CARD 3: Fragmented Intelligence ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-sm transition-colors duration-200 group"
        >
          
          <div className="relative z-10">
            {/* Stat */}
            <div className="font-['Geist',sans-serif] text-[32px] sm:text-[36px] font-semibold text-white tracking-tight leading-none">
              ~3/4th
            </div>

            {/* Title */}
            <div className="font-['Geist',sans-serif] text-[19px] font-semibold text-white tracking-tight mt-2.5">
              Fragmented Intelligence
            </div>

            {/* Description */}
            <p className="font-['Geist',sans-serif] text-[13.5px] leading-[22px] text-[#a1a1aa] mt-2 max-w-[220px]">
              Ideas and insights are scattered across multiple AI tools, never connected.
            </p>
          </div>

          {/* Right 4 Floating Model Tiles on Grid Graphic */}
          <div className="absolute -right-2 sm:right-1 bottom-4 sm:bottom-6 w-[170px] h-[160px] pointer-events-none [perspective:700px] flex items-center justify-center">
            <div className="relative w-[140px] h-[120px] [transform:rotateX(52deg)_rotateZ(-28deg)] group-hover:scale-105 transition-transform duration-300 ease-out">
              
              {/* Isometric Floor Grid Lines */}
              <div
                className="absolute inset-0 opacity-25 rounded-md"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Connecting orange traces on floor */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 140 120">
                <line x1="70" y1="18" x2="22" y2="60" stroke="#f26522" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
                <line x1="70" y1="18" x2="118" y2="60" stroke="#f26522" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
                <line x1="22" y1="60" x2="70" y2="102" stroke="#f26522" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
                <line x1="118" y1="60" x2="70" y2="102" stroke="#f26522" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
              </svg>

              {/* Tile 1: Top (AI) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 size-8 rounded-[7px] bg-[#1c1c1a] border border-white/15 flex items-center justify-center text-white font-semibold text-[11px] shadow-sm [transform:translateZ(14px)]">
                AI
              </div>

              {/* Tile 2: Left (ChatGPT) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 size-8 rounded-[7px] bg-[#1c1c1a] border border-white/15 flex items-center justify-center text-white shadow-sm [transform:translateZ(14px)]">
                <ChatGPTIcon className="size-4 text-white" />
              </div>

              {/* Tile 3: Right (Claude) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 size-8 rounded-[7px] bg-[#1c1c1a] border border-white/15 flex items-center justify-center text-white shadow-sm [transform:translateZ(14px)]">
                <ClaudeIcon className="size-4 text-[#f26522]" />
              </div>

              {/* Tile 4: Bottom (Gemini) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-8 rounded-[7px] bg-[#1c1c1a] border border-white/15 flex items-center justify-center text-white shadow-sm [transform:translateZ(14px)]">
                <GeminiIcon className="size-4" />
              </div>

            </div>
          </div>

        </motion.div>

      </div>

    </div>
  </section>
  );
}
