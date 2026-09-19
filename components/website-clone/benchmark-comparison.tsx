"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatedHeading } from "@/components/ui/animated-text";

// Technical Chart Icon (3 vertical bars with baseline) matching reference image
function ChartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#8e8e93] transition-colors group-hover:text-white"
    >
      <path d="M2.5 15.5H15.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M5.25 15.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 15.5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12.75 15.5V3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Technical Layers Icon (stacked isometric rhombuses) matching reference image
function LayersIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#8e8e93] transition-colors group-hover:text-white"
    >
      <path
        d="M9 2.5L2.5 6L9 9.5L15.5 6L9 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 9.5L9 13L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 13L9 16.5L15.5 13"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BenchmarkComparisonProps {
  isLight?: boolean;
}

export default function BenchmarkComparison({ isLight = true }: BenchmarkComparisonProps) {
  const [isInView, setIsInView] = useState(false);
  const [synapPercent, setSynapPercent] = useState(0);
  const [synapActive, setSynapActive] = useState(false);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsInView(true);
      setSynapPercent(92);
      setSynapActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();

          // Step 4: Synap column active tint reveal
          const activeTimer = setTimeout(() => {
            setSynapActive(true);
          }, 450);

          // Numeric counter animation: 0% -> 92% in ~800ms
          const counterTimer = setTimeout(() => {
            const startTime = performance.now();
            const duration = 800;
            const target = 92;

            const animateCounter = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Clean cubic ease-out
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.round(easeOut * target);
              setSynapPercent(currentVal);

              if (progress < 1) {
                requestAnimationFrame(animateCounter);
              } else {
                setSynapPercent(92);
              }
            };

            requestAnimationFrame(animateCounter);
          }, 500);

          return () => {
            clearTimeout(activeTimer);
            clearTimeout(counterTimer);
          };
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isSynapHovered = hoveredCol === 1;

  return (
    <div
      ref={containerRef}
      className="content-stretch flex flex-col items-start max-w-[1240px] relative shrink-0 w-full select-none"
    >
      {/* ── STEP 1: Technical Eyebrow ─────────────────────────────────── */}
      <div
        className={`content-stretch flex gap-[8px] items-center relative shrink-0 w-full transition-all duration-500 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
        }`}
      >
        <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
        <p className={`font-['Geist_Mono_Variable:Regular',sans-serif] leading-[16px] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap ${
          isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
        }`}>
          BENCHMARKS
        </p>
      </div>

      {/* ── STEP 2: Main Focal Heading ─────────────────────────────────── */}
      <div
        className={`content-stretch flex flex-col h-auto items-start pt-[14px] relative shrink-0 w-full transition-all duration-600 ease-out delay-150 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
        }`}
      >
        <AnimatedHeading
          text="How Synap compares"
          className={`font-['Geist_Variable:Medium',sans-serif] leading-[1.12] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] ${
            isLight ? "text-[#09090b]" : "text-white"
          }`}
          highlightWords={{ "compares": isLight ? "text-[#71717a]" : "text-[#a1a1aa]" }}
          delay={0.1}
        />
      </div>

      {/* ── STEP 3: Secondary Description ──────────────────────────────── */}
      <div
        className={`content-stretch flex flex-col h-auto items-start max-w-[768px] pt-[14px] pb-[28px] relative shrink-0 w-full transition-all duration-500 ease-out delay-300 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
        }`}
      >
        <p className={`[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[26px] text-[15px] sm:text-[16px] md:text-[16.5px] tracking-[-0.012em] ${
          isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
        }`}>
          The quick snapshot, measured on the same open-source LongMemEval harness.
        </p>
      </div>

      {/* ── STEP 4: Hero Benchmark Table Container ──────────────────────── */}
      <div
        className={`w-full relative transition-all duration-600 ease-out delay-400 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Horizontal scroll wrapper with smooth touch scrolling */}
        <div className={`w-full overflow-x-auto rounded-[16px] border backdrop-blur-[2px] transition-all ${
          isLight
            ? "border-[#e4e4e7] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03),0_14px_36px_rgba(0,0,0,0.05)]"
            : "border-white/[0.08] bg-[#111110]/95 shadow-[0_2px_8px_rgba(0,0,0,0.3),0_16px_40px_rgba(0,0,0,0.5)]"
        }`}>
          <div className="grid grid-cols-[230px_210px_140px_350px_160px] min-w-[1090px] w-full">
            {/* ══════════════════════════════════════════════════════════════
                ROW 0: HEADERS
            ══════════════════════════════════════════════════════════════ */}
            {/* Col 0: Empty Label Header */}
            <div
              className={`h-[56px] flex items-center px-6 border-b transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredRow === 0 ? (isLight ? "bg-black/[0.02]" : "bg-white/[0.015]") : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(0);
                setHoveredCol(0);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            />

            {/* Col 1: Synap Column Header */}
            <div
              className={`h-[56px] flex items-center px-6 border-t border-l border-r rounded-t-[8px] transition-all duration-300 relative ${
                synapActive
                  ? isLight
                    ? isSynapHovered
                      ? "bg-[#fff2e8] border-[#f26522]/70 shadow-sm"
                      : "bg-[#fff7f2] border-[#f26522]/45"
                    : isSynapHovered
                    ? "bg-[#f26522]/[0.12] border-[#f26522]/65 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    : "bg-[#f26522]/[0.08] border-[#f26522]/40"
                  : "bg-transparent border-transparent"
              } border-b ${isLight ? "border-[#f26522]/30" : "border-[#f26522]/25"}`}
              onMouseEnter={() => {
                setHoveredRow(0);
                setHoveredCol(1);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[15px] tracking-[-0.01em] ${
                isLight ? "text-[#f26522] font-semibold" : "text-white"
              }`}>
                Synap
              </p>
            </div>

            {/* Col 2: Mem0 Header */}
            <div
              className={`h-[56px] flex items-center px-6 border-b border-r transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 2
                  ? isLight ? "bg-black/[0.03] border-r-[#d4d4d8]" : "bg-white/[0.03] border-r-white/[0.14]"
                  : hoveredRow === 0
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.015]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(0);
                setHoveredCol(2);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`font-['Geist_Variable:Medium',sans-serif] text-[15px] transition-colors duration-200 ${
                  hoveredCol === 2
                    ? isLight ? "text-[#09090b]" : "text-white"
                    : isLight ? "text-[#27272a]" : "text-[#d4d4d8]"
                } tracking-[-0.01em]`}
              >
                Mem0
              </p>
            </div>

            {/* Col 3: Zep Header */}
            <div
              className={`h-[56px] flex items-center px-6 border-b border-r transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 3
                  ? isLight ? "bg-black/[0.03] border-r-[#d4d4d8]" : "bg-white/[0.03] border-r-white/[0.14]"
                  : hoveredRow === 0
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.015]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(0);
                setHoveredCol(3);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`font-['Geist_Variable:Medium',sans-serif] text-[15px] transition-colors duration-200 ${
                  hoveredCol === 3
                    ? isLight ? "text-[#09090b]" : "text-white"
                    : isLight ? "text-[#27272a]" : "text-[#d4d4d8]"
                } tracking-[-0.01em]`}
              >
                Zep
              </p>
            </div>

            {/* Col 4: Supermemory Header */}
            <div
              className={`h-[56px] flex items-center px-6 border-b transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 4
                  ? isLight ? "bg-black/[0.03]" : "bg-white/[0.03]"
                  : hoveredRow === 0
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.015]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(0);
                setHoveredCol(4);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`font-['Geist_Variable:Medium',sans-serif] text-[15px] transition-colors duration-200 ${
                  hoveredCol === 4
                    ? isLight ? "text-[#09090b]" : "text-white"
                    : isLight ? "text-[#27272a]" : "text-[#d4d4d8]"
                } tracking-[-0.01em]`}
              >
                Supermemory
              </p>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                ROW 1: LongMemEval
            ══════════════════════════════════════════════════════════════ */}
            {/* Col 0: Icon + LongMemEval */}
            <div
              className={`h-[72px] flex items-center gap-3 px-6 border-b transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredRow === 1 ? (isLight ? "bg-black/[0.02]" : "bg-white/[0.02]") : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(1);
                setHoveredCol(0);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <ChartIcon />
              <p className={`font-['Geist_Variable:Medium',sans-serif] text-[14.5px] tracking-[-0.01em] ${
                isLight ? "text-[#09090b]" : "text-[#e4e4e7]"
              }`}>
                LongMemEval
              </p>
            </div>

            {/* Col 1: Synap: 92% (Hero Data Point) */}
            <div
              className={`h-[72px] flex items-center px-6 border-l border-r transition-all duration-300 relative ${
                synapActive
                  ? isLight
                    ? isSynapHovered
                      ? "bg-[#fff2e8] border-[#f26522]/70 shadow-sm"
                      : "bg-[#fff7f2] border-[#f26522]/45"
                    : isSynapHovered
                    ? "bg-[#f26522]/[0.12] border-[#f26522]/65 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    : "bg-[#f26522]/[0.08] border-[#f26522]/40"
                  : "bg-transparent border-transparent"
              } border-b ${isLight ? "border-[#f26522]/30" : "border-[#f26522]/25"}`}
              onMouseEnter={() => {
                setHoveredRow(1);
                setHoveredCol(1);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p className="tabular-nums font-['Geist_Variable:Semi_Bold',sans-serif] text-[26px] md:text-[28px] text-[#f26522] tracking-[-0.03em] font-semibold">
                {synapPercent}%
              </p>
            </div>

            {/* Col 2: Mem0: 73.8% */}
            <div
              className={`h-[72px] flex items-center px-6 border-b border-r transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 2
                  ? isLight ? "bg-black/[0.03] border-r-[#d4d4d8]" : "bg-white/[0.03] border-r-white/[0.14]"
                  : hoveredRow === 1
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.02]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(1);
                setHoveredCol(2);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`tabular-nums font-['Geist_Variable:Regular',sans-serif] text-[15px] transition-colors duration-200 ${
                  hoveredCol === 2
                    ? isLight ? "text-[#09090b]" : "text-white"
                    : isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                } tracking-[-0.01em]`}
              >
                73.8%
              </p>
            </div>

            {/* Col 3: Zep: 71.2% (Zep's own figure; not run on our harness) */}
            <div
              className={`h-[72px] flex items-center px-6 border-b border-r transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 3
                  ? isLight ? "bg-black/[0.03] border-r-[#d4d4d8]" : "bg-white/[0.03] border-r-white/[0.14]"
                  : hoveredRow === 1
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.02]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(1);
                setHoveredCol(3);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span
                  className={`tabular-nums font-['Geist_Variable:Regular',sans-serif] text-[15px] transition-colors duration-200 ${
                    hoveredCol === 3
                      ? isLight ? "text-[#09090b]" : "text-white"
                      : isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                  } tracking-[-0.01em]`}
                >
                  71.2%
                </span>
                <span className="font-['Geist_Variable:Regular',sans-serif] text-[12px] text-[#71717a] tracking-tight">
                  {`(Zep's own figure; not run on our harness)`}
                </span>
              </div>
            </div>

            {/* Col 4: Supermemory: 71.3% */}
            <div
              className={`h-[72px] flex items-center px-6 border-b transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 4
                  ? isLight ? "bg-black/[0.03]" : "bg-white/[0.03]"
                  : hoveredRow === 1
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.02]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(1);
                setHoveredCol(4);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`tabular-nums font-['Geist_Variable:Regular',sans-serif] text-[15px] transition-colors duration-200 ${
                  hoveredCol === 4
                    ? isLight ? "text-[#09090b]" : "text-white"
                    : isLight ? "text-[#3f3f46]" : "text-[#d4d4d8]"
                } tracking-[-0.01em]`}
              >
                71.3%
              </p>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                ROW 2: Entity resolution
            ══════════════════════════════════════════════════════════════ */}
            {/* Col 0: Icon + Entity resolution */}
            <div
              className={`h-[68px] flex items-center gap-3 px-6 transition-colors duration-200 ${
                hoveredRow === 2 ? (isLight ? "bg-black/[0.02]" : "bg-white/[0.02]") : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(2);
                setHoveredCol(0);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <LayersIcon />
              <p className={`font-['Geist_Variable:Medium',sans-serif] text-[14.5px] tracking-[-0.01em] ${
                isLight ? "text-[#09090b]" : "text-[#e4e4e7]"
              }`}>
                Entity resolution
              </p>
            </div>

            {/* Col 1: Synap: Automatic, every tier */}
            <div
              className={`h-[68px] flex items-center px-6 border-b border-l border-r rounded-b-[8px] transition-all duration-300 relative ${
                synapActive
                  ? isLight
                    ? isSynapHovered
                      ? "bg-[#fff2e8] border-[#f26522]/70 shadow-sm"
                      : "bg-[#fff7f2] border-[#f26522]/45"
                    : isSynapHovered
                    ? "bg-[#f26522]/[0.12] border-[#f26522]/65 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    : "bg-[#f26522]/[0.08] border-[#f26522]/40"
                  : "bg-transparent border-transparent"
              }`}
              onMouseEnter={() => {
                setHoveredRow(2);
                setHoveredCol(1);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p className="font-['Geist_Variable:Medium',sans-serif] text-[14.5px] md:text-[15px] text-[#f26522] tracking-[-0.01em] font-medium">
                Automatic, every tier
              </p>
            </div>

            {/* Col 2: Mem0: Pro tier only */}
            <div
              className={`h-[68px] flex items-center px-6 border-r transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 2
                  ? isLight ? "bg-black/[0.03] border-r-[#d4d4d8]" : "bg-white/[0.03] border-r-white/[0.14]"
                  : hoveredRow === 2
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.02]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(2);
                setHoveredCol(2);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`font-['Geist_Variable:Regular',sans-serif] text-[14.5px] transition-colors duration-200 ${
                  hoveredCol === 2
                    ? isLight ? "text-[#09090b]" : "text-[#e4e4e7]"
                    : isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                } tracking-[-0.01em]`}
              >
                Pro tier only
              </p>
            </div>

            {/* Col 3: Zep: Automatic */}
            <div
              className={`h-[68px] flex items-center px-6 border-r transition-colors duration-200 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                hoveredCol === 3
                  ? isLight ? "bg-black/[0.03] border-r-[#d4d4d8]" : "bg-white/[0.03] border-r-white/[0.14]"
                  : hoveredRow === 2
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.02]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(2);
                setHoveredCol(3);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`font-['Geist_Variable:Regular',sans-serif] text-[14.5px] transition-colors duration-200 ${
                  hoveredCol === 3
                    ? isLight ? "text-[#09090b]" : "text-[#e4e4e7]"
                    : isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                } tracking-[-0.01em]`}
              >
                Automatic
              </p>
            </div>

            {/* Col 4: Supermemory: Fact extraction */}
            <div
              className={`h-[68px] flex items-center px-6 transition-colors duration-200 ${
                hoveredCol === 4
                  ? isLight ? "bg-black/[0.03]" : "bg-white/[0.03]"
                  : hoveredRow === 2
                  ? isLight ? "bg-black/[0.02]" : "bg-white/[0.02]"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredRow(2);
                setHoveredCol(4);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
                setHoveredCol(null);
              }}
            >
              <p
                className={`font-['Geist_Variable:Regular',sans-serif] text-[14.5px] transition-colors duration-200 ${
                  hoveredCol === 4
                    ? isLight ? "text-[#09090b]" : "text-[#e4e4e7]"
                    : isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                } tracking-[-0.01em]`}
              >
                Fact extraction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STEP 5: Exact Disclaimer ───────────────────────────────────── */}
      <div
        className={`content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full max-w-[1100px] transition-all duration-500 ease-out delay-500 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
        }`}
      >
        <p className={`[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22px] text-[13px] md:text-[13.5px] tracking-[-0.01em] max-w-[960px] ${
          isLight ? "text-[#71717a]" : "text-[#8e8e93]"
        }`}>
          {`Measured on Maximem's open eval harness, same hardware, same prompts, same conversations, same scoring. Vendor self-reported figures differ and are shown separately. Zep has not been run on our harness, so its own published figure is shown instead. Full configuration and sources at /evals.`}
        </p>
      </div>

      {/* ── STEP 6: Exact Orange CTA ───────────────────────────────────── */}
      <div
        className={`pt-[26px] relative shrink-0 w-full flex items-center transition-all duration-500 ease-out delay-600 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
        }`}
      >
        <a
          href="/evals"
          className="cursor-pointer text-[#f26522] hover:text-[#f26522] transition-colors duration-200"
        >
          <span className="font-['Geist_Variable:Medium',sans-serif] text-[14.5px] tracking-[-0.01em] font-medium">
            See the full comparison
          </span>
        </a>
      </div>
    </div>
  );
}
