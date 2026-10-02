"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import OrangeDitherWaveCanvas from "./orange-dither-wave-canvas";
import {
  ChatGPTIcon,
  ClaudeIcon,
  NotionIcon,
  GmailIcon,
  SlackIcon,
  MaximemLogo,
  PlusDashedIcon,
} from "./app-icons";
import { usePrefersReducedMotion, MetricCountUp } from "./vity-motion";

// ═════════════════════════════════════════════════════════════════════════════
// 3. APP ROWS DATA & CONFIGURATION
// ═════════════════════════════════════════════════════════════════════════════
interface AppRowItem {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
}

const APP_ROWS: AppRowItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tag: "Conversations",
    icon: (
      <div className="size-5 rounded-full flex items-center justify-center shrink-0 text-[#10a37f]">
        <ChatGPTIcon className="size-4.5" />
      </div>
    ),
  },
  {
    id: "claude",
    name: "Claude",
    tag: "Projects",
    icon: (
      <div className="size-5 rounded-full flex items-center justify-center shrink-0 text-[#cc785c]">
        <ClaudeIcon className="size-4.5" />
      </div>
    ),
  },
  {
    id: "notion",
    name: "Notion",
    tag: "Knowledge",
    icon: (
      <div className="size-5 flex items-center justify-center shrink-0">
        <NotionIcon className="size-4.5" />
      </div>
    ),
  },
  {
    id: "gmail",
    name: "Gmail",
    tag: "Emails",
    icon: (
      <div className="size-5 flex items-center justify-center shrink-0">
        <GmailIcon className="size-4.5" />
      </div>
    ),
  },
  {
    id: "slack",
    name: "Slack",
    tag: "Team context",
    icon: (
      <div className="size-5 flex items-center justify-center shrink-0">
        <SlackIcon className="size-4.5" />
      </div>
    ),
  },
  {
    id: "more",
    name: "And 10+ more",
    tag: "All your apps",
    icon: <PlusDashedIcon className="size-5" />,
  },
];

// Calculated centers of the 6 app rows (height=40px, gap=10px, total height=290px)
const ROW_CENTERS = [20, 70, 120, 170, 220, 270];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Subtle mouse-based parallax for right card using GSAP quickTo (max 6-8px)
  useEffect(() => {
    if (prefersReduced || !heroRef.current || !rightCardRef.current) return;

    const card = rightCardRef.current;
    const hero = heroRef.current;

    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(card, "x", { duration: 0.8, ease: "power2.out" });
      const yTo = gsap.quickTo(card, "y", { duration: 0.8, ease: "power2.out" });

      const onPointerMove = (e: PointerEvent) => {
        const rect = hero.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        xTo(nx * 12); // -6px to +6px
        yTo(ny * 8);  // -4px to +4px
      };

      const onPointerLeave = () => {
        xTo(0);
        yTo(0);
      };

      hero.addEventListener("pointermove", onPointerMove);
      hero.addEventListener("pointerleave", onPointerLeave);

      return () => {
        hero.removeEventListener("pointermove", onPointerMove);
        hero.removeEventListener("pointerleave", onPointerLeave);
      };
    }, hero);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden select-none pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 border-b border-white/[0.08]"
    >
      
      {/* ── Background: Animated Orange Dither Wave Canvas ── */}
      <OrangeDitherWaveCanvas dotSize={6} gap={3} />

      {/* ── Subtle Technical Dot Matrix Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1.1px, transparent 1.1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
        }}
      />

      {/* ── Architectural Engineering Grid Lines & Crosshairs ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: Eyebrow + Headline + Subtitle + Stats + CTA Buttons */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* 1. Eyebrow */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5 font-mono text-[11.5px] sm:text-[12px] tracking-[1.4px] uppercase text-[#a1a1aa]"
            >
              <span className="size-1.5 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
              <span>GET STARTED</span>
            </motion.div>

            {/* 2. Headline (3 Lines, revealed with staggered line-by-line rhythm) */}
            <h1 className="font-['Geist',sans-serif] text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] font-bold leading-[1.08] tracking-[-0.035em] text-white">
              <span className="block overflow-hidden py-[2px] -my-[2px]">
                <motion.span
                  initial={prefersReduced ? {} : { y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Different AI Apps
                </motion.span>
              </span>
              <span className="block overflow-hidden py-[2px] -my-[2px]">
                <motion.span
                  initial={prefersReduced ? {} : { y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Know You Partially
                </motion.span>
              </span>
              <span className="block overflow-hidden py-[2px] -my-[2px]">
                <motion.span
                  initial={prefersReduced ? {} : { y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#f26522]"
                >
                  Vity makes it whole
                </motion.span>
              </span>
            </h1>

            {/* 3. Subtitle */}
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 font-['Geist',sans-serif] text-[15px] sm:text-[16px] md:text-[16.5px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] max-w-[480px]"
            >
              Securely operate between LLM &amp; AI powered apps with same context-level.
            </motion.p>

            {/* 4. Action Buttons Row (Directly below subtitle, matching Maximem homepage) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              
              {/* Primary: Get Started Free -> */}
              <motion.a
                href="#get-started"
                whileHover={prefersReduced ? {} : { y: -2, scale: 1.01 }}
                whileTap={prefersReduced ? {} : { scale: 0.98 }}
                className="group h-[46px] pl-6 pr-3 font-medium text-[15px] rounded-[10px] flex items-center gap-3 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer select-none bg-[#f26522] hover:bg-[#f26522]/90 text-white"
              >
                <span className="tracking-tight">Get Started Free</span>
                <span className="size-6 rounded-[6px] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5 bg-white text-[#f26522]">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </motion.a>

              {/* Secondary: View Playground */}
              <motion.a
                href="https://synap.maximem.ai/playground"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReduced ? {} : { y: -2 }}
                whileTap={prefersReduced ? {} : { scale: 0.98 }}
                className="h-[46px] px-6 rounded-[10px] font-medium text-[14.5px] flex items-center justify-center transition-all duration-200 active:scale-[0.98] cursor-pointer select-none bg-[#141412] hover:bg-[#1c1c1a] border border-white/10 text-white shadow-sm"
              >
                <span>View Playground</span>
              </motion.a>

            </motion.div>

            {/* 5. Stats Metrics Row (3 Metrics with Vertical Dividers & Count-Up) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex items-center pt-8 border-t border-white/[0.06]"
            >
              
              {/* Metric 1: 92% */}
              <div className="flex flex-col">
                <span
                  style={{ color: "#ffffff" }}
                  className="font-['Geist',sans-serif] text-[26px] sm:text-[32px] font-semibold text-white tracking-tight leading-none"
                >
                  <MetricCountUp target={92} suffix="%" delay={0.62} duration={1.4} />
                </span>
                <span className="mt-2 font-['Geist',sans-serif] text-[12px] sm:text-[12.5px] text-[#8e8e93] leading-snug">
                  More relevant answers
                </span>
              </div>

              {/* Divider 1 */}
              <div className="w-[1px] h-10 bg-white/[0.1] mx-4 sm:mx-6 lg:mx-7 shrink-0" />

              {/* Metric 2: 93.2% */}
              <div className="flex flex-col">
                <span className="font-['Geist',sans-serif] text-[26px] sm:text-[32px] font-semibold text-white tracking-tight leading-none">
                  <MetricCountUp target={93.2} decimals={1} suffix="%" delay={0.72} duration={1.4} />
                </span>
                <span className="mt-2 font-['Geist',sans-serif] text-[12px] sm:text-[12.5px] text-[#8e8e93] leading-snug">
                  Context recall accuracy
                </span>
              </div>

              {/* Divider 2 */}
              <div className="w-[1px] h-10 bg-white/[0.1] mx-4 sm:mx-6 lg:mx-7 shrink-0" />

              {/* Metric 3: <15ms */}
              <div className="flex flex-col">
                <span className="font-['Geist',sans-serif] text-[26px] sm:text-[32px] font-semibold text-white tracking-tight leading-none">
                  <MetricCountUp target={15} prefix="<" suffix="ms" delay={0.82} duration={1.3} />
                </span>
                <span className="mt-2 font-['Geist',sans-serif] text-[12px] sm:text-[12.5px] text-[#8e8e93] leading-snug">
                  Context retrieval time
                </span>
              </div>

            </motion.div>

          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: Interactive VITY Hub & Apps Diagram Card          */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            
            {/* Outer Container Card with dark border & rounded corners */}
            <motion.div
              ref={rightCardRef}
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[610px] bg-[#141413] border border-white/[0.08] rounded-[20px] p-5 sm:p-7 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
            >
              
              {/* ── Top Diagram: VITY Central Box + Connector Rays + 6 Apps ── */}
              <div className="relative flex items-center justify-between gap-2.5 sm:gap-4 w-full">
                
                {/* 1. Maximem Hub Box (Left) - Square with only Maximem Logo */}
                <div className="relative shrink-0 size-[116px] sm:size-[132px] rounded-[16px] border border-[#f26522]/80 bg-[#141412] flex items-center justify-center p-3 sm:p-4 shadow-md z-10">
                  {/* Maximem Logo */}
                  <MaximemLogo className="size-11 sm:size-13" fill="#f26522" />

                  {/* Central Node Dot on right edge */}
                  <div className="absolute -right-[5px] top-1/2 -translate-y-1/2 size-2.5 rounded-full bg-[#f26522] z-20 shadow-[0_0_8px_#f26522]" />
                </div>

                {/* 2. Middle SVG Dotted Connector Curves */}
                <div className="flex-1 h-[290px] relative pointer-events-none select-none">
                  <svg
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 290"
                  >
                    {/* Fanning Connector Paths */}
                    {ROW_CENTERS.map((yPos, idx) => (
                      <g key={idx}>
                        {/* Dotted S-Curve */}
                        <path
                          d={`M 0 145 C 42 145, 58 ${yPos}, 100 ${yPos}`}
                          fill="none"
                          stroke="#f26522"
                          strokeWidth="1.5"
                          strokeDasharray="2.5 3"
                          strokeOpacity="0.75"
                        />

                        {/* Destination Node Dot connecting to app card */}
                        <circle
                          cx="100"
                          cy={yPos}
                          r="3"
                          fill="#f26522"
                        />

                        {/* Animated Light Pulse traveling from Vity to app */}
                        <circle r="1.6" fill="#ffffff" opacity="0.95">
                          <animateMotion
                            path={`M 0 145 C 42 145, 58 ${yPos}, 100 ${yPos}`}
                            dur={`${2.2 + idx * 0.3}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    ))}
                  </svg>
                </div>

                {/* 3. Right App Stack (6 Rows) */}
                <div className="shrink-0 flex flex-col gap-2.5 w-[190px] sm:w-[245px] md:w-[265px]">
                  {APP_ROWS.map((app) => (
                    <motion.div
                      key={app.id}
                      whileHover={prefersReduced ? {} : { x: 3 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="h-[42px] px-3 sm:px-3.5 rounded-[10px] bg-[#161614]/90 border border-white/[0.06] hover:border-white/[0.18] hover:bg-[#1a1a18] transition-colors flex items-center justify-between cursor-default"
                    >
                      {/* Left: Icon + Name */}
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        {app.icon}
                        <span className="font-['Geist',sans-serif] text-[13px] sm:text-[13.5px] font-medium text-white tracking-tight truncate">
                          {app.name}
                        </span>
                      </div>

                      {/* Right: Pill Tag */}
                      <div className="shrink-0 px-2 sm:px-2.5 py-0.5 rounded-[6px] bg-[#121210] border border-white/[0.06] text-[#8e8e93] text-[10.5px] sm:text-[11px] font-mono whitespace-nowrap">
                        {app.tag}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>

              {/* ── Bottom Feature Badges (Universal Memory, Real-time Sync, Cross-Platform) ── */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-2 sm:gap-3">
                
                {/* Badge 1: Universal Memory */}
                <motion.div
                  whileHover={prefersReduced ? {} : { y: -1 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[10px] bg-[#161614] border border-white/[0.08] hover:border-white/[0.18] transition-colors cursor-default"
                >
                  <span className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522] shrink-0" />
                  <span className="font-['Geist',sans-serif] text-[11.5px] sm:text-[12.5px] font-medium text-white/90 whitespace-nowrap">
                    Universal Memory
                  </span>
                </motion.div>

                {/* Badge 2: Real-time Sync */}
                <motion.div
                  whileHover={prefersReduced ? {} : { y: -1 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[10px] bg-[#161614] border border-white/[0.08] hover:border-white/[0.18] transition-colors cursor-default"
                >
                  <span className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522] shrink-0" />
                  <span className="font-['Geist',sans-serif] text-[11.5px] sm:text-[12.5px] font-medium text-white/90 whitespace-nowrap">
                    Real-time Sync
                  </span>
                </motion.div>

                {/* Badge 3: Cross-Platform */}
                <motion.div
                  whileHover={prefersReduced ? {} : { y: -1 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[10px] bg-[#161614] border border-white/[0.08] hover:border-white/[0.18] transition-colors cursor-default"
                >
                  <span className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522] shrink-0" />
                  <span className="font-['Geist',sans-serif] text-[11.5px] sm:text-[12.5px] font-medium text-white/90 whitespace-nowrap">
                    Cross-Platform
                  </span>
                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
