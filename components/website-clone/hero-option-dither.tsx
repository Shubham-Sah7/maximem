"use client";

import React from "react";
import { AnimatedCounter, TypewriterHeadline, TypewriterSegment } from "@/components/ui/animated-text";
import DitherVeil from "./DitherVeil";

interface HeroOptionDitherProps {
  isLight?: boolean;
}

export default function HeroOptionDither({ isLight = false }: HeroOptionDitherProps) {
  const typewriterSegments: TypewriterSegment[] = [
    { text: "Build AI that " },
    {
      text: "remembers,",
      className: isLight ? "text-[#f26522]" : "text-[#f26522]",
    },
    { text: " learns and gets better" },
    { text: "over time.", lineBreakBefore: true },
  ];

  return (
    <div className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 sm:pt-28 pb-28 sm:pb-36">
      {/* ── Subtle Background Ambiance ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Fine Technical Grid */}
        <div
          className={`absolute inset-0 ${isLight ? "opacity-20" : "opacity-25"}`}
          style={{
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 0, 0, 0.08) 1.1px, transparent 1.1px)"
              : "radial-gradient(rgba(255, 255, 255, 0.08) 1.1px, transparent 1.1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft Amber / Violet Horizon Wash */}
        <div
          className="absolute inset-0"
          style={{
            background: isLight
              ? "radial-gradient(ellipse 70% 50% at 75% 50%, rgba(242, 101, 34, 0.06) 0%, transparent 65%)"
              : "radial-gradient(ellipse 70% 50% at 75% 50%, rgba(242, 101, 34, 0.12) 0%, rgba(167, 139, 250, 0.04) 40%, transparent 75%)",
          }}
        />
      </div>

      {/* ── Hero Content Container ── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">
          
          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN: Typography, Copy, Metrics & CTAs
          ══════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[48%] xl:w-[46%] max-w-[600px] flex flex-col items-start gap-7 lg:gap-8">
            

            {/* Headline */}
            <div className="w-full">
              <TypewriterHeadline
                segments={typewriterSegments}
                className={`items-start text-left font-medium text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[48px] tracking-[-0.03em] leading-[1.13] ${
                  isLight ? "text-[#09090b]" : "text-white"
                }`}
                speed={20}
                startDelay={100}
              />
            </div>

            {/* Supporting Copy */}
            <p
              className={`text-[14.5px] sm:text-[15px] leading-[26px] tracking-[-0.012em] max-w-[520px] ${
                isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
              }`}
            >
              Maximem gives AI agents persistent, structured memory and active context
              management; so every interaction makes them more personal, accurate and
              useful, while reducing token costs, and so that what your agents know becomes
              something a competitor cannot trivially copy.
            </p>

            {/* Metrics Row: 92%, 93.2%, <15ms */}
            <div className="flex flex-wrap items-start gap-8 sm:gap-10">
              <div className="flex flex-col items-start group cursor-default">
                <AnimatedCounter
                  value={92}
                  suffix="%"
                  duration={1.6}
                  delay={0.1}
                  trigger={true}
                  className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                    isLight ? "text-[#09090b]" : "text-[#f26522]"
                  }`}
                />
                <span
                  className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}
                >
                  LongMemEval accuracy
                </span>
              </div>

              <div className="flex flex-col items-start group cursor-default">
                <AnimatedCounter
                  value={93.2}
                  suffix="%"
                  decimals={1}
                  duration={1.8}
                  delay={0.2}
                  trigger={true}
                  className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none transition-transform duration-200 group-hover:scale-105 ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                />
                <span
                  className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}
                >
                  LoCoMo accuracy
                </span>
              </div>

              <div className="flex flex-col items-start group cursor-default">
                <span
                  className={`tabular-nums text-[24px] sm:text-[28px] xl:text-[30px] font-semibold tracking-tight leading-none ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}
                >
                  &lt;15ms
                </span>
                <span
                  className={`mt-2 text-[12.5px] tracking-tight transition-colors ${
                    isLight ? "text-[#71717a] group-hover:text-[#18181b]" : "text-[#8e8e93] group-hover:text-[#d4d4d8]"
                  }`}
                >
                  P75 in-conversation retrieval
                </span>
              </div>
            </div>

            {/* ── Primary & Secondary CTA Buttons ── */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
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
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN: Floating Dither Face (Floyd 1px, Wander ON, Flipped)
          ══════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[52%] xl:w-[54%] max-w-[660px] flex items-center justify-center lg:justify-end shrink-0">
            <div
              style={{
                width: "100%",
                height: "600px",
                position: "relative",
                maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 95%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 95%)",
              }}
              className="select-none cursor-crosshair"
            >
              <DitherVeil
                src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
                pattern="floyd"
                pixelSize={1}
                inkColor={isLight ? "#fafaf9" : "#1B1B19"}
                paperColor={isLight ? "#18181b" : "#f4f1ea"}
                revealRadius={200}
                softness={0.6}
                linger={1}
                fit="contain"
                rimColor="#a78bfa"
                palette="duotone"
                levels={2}
                contrast={1.15}
                brightness={0}
                rim={0}
                reverse={false}
                wander={true}
                flipX={true}
                clickBurst
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
