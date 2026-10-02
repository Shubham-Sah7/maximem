"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  ChromeIcon,
  ChatGPTIcon,
  ClaudeIcon,
  GeminiIcon,
  NotionIcon,
  GmailIcon,
  SlackIcon,
  GitHubIcon,
  TechDashboardIcon,
  TechBookIcon,
  TechArrowRightIcon,
} from "./app-icons";
import {
  AnimatedEyebrow,
  usePrefersReducedMotion,
  buttonHoverMotion,
} from "./vity-motion";

export default function CtaGetStartedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftFlankRef = useRef<HTMLDivElement>(null);
  const rightFlankRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Subtle 2-4px GSAP Scroll Parallax on surrounding app tiles
  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (leftFlankRef.current) {
        gsap.to(leftFlankRef.current, {
          y: -4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (rightFlankRef.current) {
        gsap.to(rightFlankRef.current, {
          y: -4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0B0C] py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] select-none overflow-hidden scroll-mt-24"
    >
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── Single Large Bordered Container (Exact Homepage Container System) ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[20px] bg-[#141413] border border-white/[0.08] p-8 sm:p-12 lg:p-16 shadow-[0_4px_32px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          
          {/* Subtle Architectural Dot Grid Pattern */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex items-center justify-between">
            
            {/* ── LEFT FLANKING 3D APP TILES & GLOWING CURVES ── */}
            <div
              ref={leftFlankRef}
              className="hidden xl:block relative w-[220px] h-[340px] shrink-0 pointer-events-none select-none"
            >
              {/* Subtle connection curves */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 220 340" fill="none">
                <path
                  d="M 60 50 C 90 90, 110 100, 140 120 C 170 140, 70 190, 75 220 C 80 250, 115 260, 125 300"
                  stroke="#f26522"
                  strokeWidth="1.2"
                  strokeOpacity="0.4"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 140 120 C 90 140, 50 160, 65 200"
                  stroke="#f26522"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <circle cx="140" cy="120" r="3" fill="#f26522" fillOpacity="0.8" />
                <circle cx="75" cy="220" r="2.5" fill="#f26522" fillOpacity="0.8" />
              </svg>

              {/* Tile 1: ChatGPT */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-4 left-6 size-13 rounded-[14px] bg-[#161614] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center text-white [transform:rotate(-6deg)]"
              >
                <ChatGPTIcon className="size-7 text-white" />
              </motion.div>

              {/* Tile 2: Claude */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-20 right-4 size-13 rounded-[14px] bg-[#181411] border border-[#f26522]/60 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center text-[#f26522] [transform:rotate(5deg)]"
              >
                <ClaudeIcon className="size-7 text-[#f26522]" />
              </motion.div>

              {/* Tile 3: Gemini */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-40 left-3 size-12.5 rounded-[13px] bg-[#161614] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center [transform:rotate(-4deg)]"
              >
                <GeminiIcon className="size-6 text-[#60a5fa]" />
              </motion.div>

              {/* Tile 4: AI Chip */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-52 right-8 size-12 rounded-[12px] bg-[#161614] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center text-white font-semibold text-sm tracking-wide"
              >
                AI
              </motion.div>

              {/* Tile 5: Claude Sunburst */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-3 left-10 size-12 rounded-[13px] bg-[#181411] border border-[#f26522]/50 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center text-[#f26522] [transform:rotate(-8deg)]"
              >
                <ClaudeIcon className="size-6 text-[#f26522]" />
              </motion.div>
            </div>

            {/* ── CENTER NARRATIVE & BUTTONS ── */}
            <div className="flex-1 max-w-[620px] mx-auto text-center flex flex-col items-center px-4">
              
              {/* Eyebrow Label with technical mono style */}
              <div className="mb-4">
                <AnimatedEyebrow number="08" category="GET STARTED" />
              </div>

              {/* Heading (Strongest reveal on page: opacity 0 -> 1, y: 25 -> 0) */}
              <h2 className="font-['Geist',sans-serif] text-[34px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.12] text-white text-center">
                <motion.span
                  initial={prefersReduced ? {} : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Ready to Give
                </motion.span>
                <motion.span
                  initial={prefersReduced ? {} : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-2.5 sm:mr-3.5"
                >
                  Your AI
                </motion.span>
                <motion.span
                  initial={prefersReduced ? {} : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-[#f26522]"
                >
                  a Memory?
                </motion.span>
              </h2>

              {/* Subtitle */}
              <motion.p
                initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#a1a1aa] max-w-[540px]"
              >
                Install the Vity Chrome extension and start syncing your AI memory across every platform, free to get started.
              </motion.p>

              {/* Action Buttons (Matches Hero exactly with subtle hover and stagger) */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5"
              >
                
                {/* Primary Button: Orange button matching Hero */}
                <motion.a
                  whileHover={prefersReduced ? {} : buttonHoverMotion.whileHover}
                  whileTap={prefersReduced ? {} : buttonHoverMotion.whileTap}
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[46px] px-5 sm:px-6 rounded-[10px] bg-[#f26522] hover:bg-[#ff732e] text-white font-['Geist',sans-serif] font-medium text-[14px] sm:text-[14.5px] tracking-tight flex items-center gap-2.5 shadow-sm transition-colors cursor-pointer"
                >
                  <ChromeIcon className="size-4.5" />
                  <span>Download Extension &mdash; Free</span>
                  <div className="size-5 rounded-full bg-white/20 flex items-center justify-center ml-0.5">
                    <TechArrowRightIcon className="size-3 text-white" strokeWidth={2.2} />
                  </div>
                </motion.a>

                {/* Secondary 1: Dashboard Pill */}
                <motion.a
                  whileHover={prefersReduced ? {} : buttonHoverMotion.whileHover}
                  whileTap={prefersReduced ? {} : buttonHoverMotion.whileTap}
                  href="https://app.maximem.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[46px] px-5 rounded-[10px] bg-[#181816] hover:bg-white/[0.06] text-[#d4d4d8] hover:text-white border border-white/[0.12] hover:border-white/[0.25] text-[13.5px] font-medium tracking-tight flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <TechDashboardIcon className="size-4 text-[#8e8e93]" />
                  <span>Open Vity Dashboard</span>
                </motion.a>

                {/* Secondary 2: Learn More Pill */}
                <motion.a
                  whileHover={prefersReduced ? {} : buttonHoverMotion.whileHover}
                  whileTap={prefersReduced ? {} : buttonHoverMotion.whileTap}
                  href="https://docs.maximem.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[46px] px-4 rounded-[10px] bg-[#181816] hover:bg-white/[0.06] text-[#d4d4d8] hover:text-white border border-white/[0.12] hover:border-white/[0.25] text-[13.5px] font-medium tracking-tight flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <TechBookIcon className="size-4 text-[#8e8e93]" />
                  <span>Docs</span>
                </motion.a>

            </motion.div>

          </div>

          {/* ── RIGHT FLANKING 3D APP TILES & GLOWING CURVES (Matching User Reference) ── */}
          <div
            ref={rightFlankRef}
            className="hidden xl:block relative w-[220px] h-[340px] shrink-0 pointer-events-none select-none"
          >
            {/* Glowing orange connection curves */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 220 340" fill="none">
              <path
                d="M 160 50 C 130 90, 110 100, 80 120 C 50 140, 150 190, 145 220 C 140 250, 105 260, 95 300"
                stroke="#f26522"
                strokeWidth="1.2"
                strokeOpacity="0.4"
                strokeDasharray="3 3"
              />
              <path
                d="M 80 120 C 130 140, 170 160, 155 200"
                stroke="#f26522"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <circle cx="80" cy="120" r="3" fill="#f26522" fillOpacity="0.8" />
              <circle cx="145" cy="220" r="2.5" fill="#f26522" fillOpacity="0.8" />
            </svg>

            {/* Tile 1: Chrome (Top-Right) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 right-6 size-13 rounded-[14px] bg-[#161614] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center [transform:rotate(6deg)]"
            >
              <ChromeIcon className="size-7" />
            </motion.div>

            {/* Tile 2: Notion (Top-Left) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-4 size-13 rounded-[14px] bg-white border border-black/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center text-black [transform:rotate(-5deg)]"
            >
              <NotionIcon className="size-6" invert={true} />
            </motion.div>

            {/* Tile 3: Gmail (Middle-Right) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-40 right-3 size-12.5 rounded-[13px] bg-[#222220] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center [transform:rotate(4deg)]"
            >
              <GmailIcon className="size-6" />
            </motion.div>

            {/* Tile 4: Slack (Middle-Left) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-52 left-8 size-12 rounded-[12px] bg-[#161614] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center [transform:rotate(-3deg)]"
            >
              <SlackIcon className="size-6" />
            </motion.div>

            {/* Tile 5: GitHub (Bottom) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-3 right-10 size-12.5 rounded-[13px] bg-[#161614] border border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center text-white [transform:rotate(8deg)]"
            >
              <GitHubIcon className="size-6 text-white" />
            </motion.div>
          </div>

        </div>

      </motion.div>

    </div>
  </section>
  );
}
