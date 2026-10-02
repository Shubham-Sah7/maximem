"use client";

import React from "react";
import OrangeDitherWaveCanvas from "@/components/vity/orange-dither-wave-canvas";

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
        fillOpacity="0.95"
      />
      <circle cx="12" cy="12" r="1.8" fill="#ffffff" />
    </svg>
  );
}

interface HeroOptionDitherProps {
  isLight?: boolean;
}

export default function HeroOptionDither({ isLight = false }: HeroOptionDitherProps) {
  return (
    <div className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 sm:pt-32 pb-24 sm:pb-32 select-none">
      
      {/* ── Background: The Orange Dither Pixel Wave Terrain ── */}
      <OrangeDitherWaveCanvas dotSize={7} gap={3} />

      {/* ── Hero Content (Centered - Exact User Screenshot Replica) ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center text-center">
        
        {/* Centered Brand Mark: Hexagon Icon + "Vity" */}
        <div className="flex items-center justify-center gap-2.5 mb-6 sm:mb-8">
          <div className="size-8 rounded-[8px] bg-black/40 border border-white/[0.12] flex items-center justify-center text-white shadow-sm backdrop-blur-sm">
            <MaximemHexMark className="size-4.5 text-[#f26522]" />
          </div>
          <span className="font-['Geist_Variable:Semi_Bold',sans-serif] font-semibold text-[22px] sm:text-[24px] tracking-tight text-white">
            Vity
          </span>
        </div>

        {/* Centered 3-Line Authority Headline */}
        <h1 className="font-['Geist_Variable:Medium',sans-serif] text-[42px] sm:text-[58px] md:text-[68px] lg:text-[76px] xl:text-[80px] font-medium leading-[1.08] tracking-[-0.035em] text-center text-white max-w-[980px] mx-auto">
          Different AI Apps
          <br />
          Know You Partially
          <br />
          <span className="text-[#f26522] font-semibold">
            Vity makes it whole
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="mt-6 sm:mt-7 font-['Geist_Variable:Regular',sans-serif] text-[16px] sm:text-[18px] md:text-[19px] leading-[28px] sm:leading-[30px] tracking-[-0.012em] text-[#a1a1aa] text-center max-w-[560px] mx-auto">
          Securely operate between LLM &amp;
          <br className="hidden sm:inline" />{" "}
          AI powered apps with same context-level
        </p>

        {/* Centered CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {/* Primary: Get Started Free -> */}
          <a
            href="/signup"
            className="h-[46px] px-7 rounded-[10px] bg-[#f26522] hover:bg-[#ff732e] text-white text-[15px] font-medium tracking-tight flex items-center justify-center gap-2 shadow-[0px_2px_16px_rgba(242,101,34,0.4)] transition-all active:scale-[0.98]"
          >
            <span>Get Started Free</span>
            <span className="text-[17px] leading-none">→</span>
          </a>

          {/* Secondary: View Playground */}
          <a
            href="https://synap.maximem.ai/playground"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[46px] px-7 rounded-[10px] bg-[#141412]/80 hover:bg-white/[0.08] text-white border border-white/[0.18] hover:border-white/[0.32] text-[15px] font-medium tracking-tight flex items-center justify-center gap-2 transition-all active:scale-[0.98] backdrop-blur-sm shadow-sm"
          >
            <span>View Playground</span>
          </a>
        </div>

        {/* 3 Metric Badges underneath Hero */}
        <div className="mt-14 sm:mt-16 pt-7 border-t border-white/[0.08] w-full max-w-[680px] grid grid-cols-3 gap-4 sm:gap-6 backdrop-blur-xs">
          <div className="flex flex-col items-center">
            <span className="text-[24px] sm:text-[28px] font-semibold text-white tracking-tight leading-none">
              92<span className="text-white">%</span>
            </span>
            <span className="mt-2 text-[11.5px] font-mono text-[#8e8e93] uppercase tracking-wider">
              Higher recall
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[24px] sm:text-[28px] font-semibold text-white tracking-tight leading-none">
              93.2<span className="text-white">%</span>
            </span>
            <span className="mt-2 text-[11.5px] font-mono text-[#8e8e93] uppercase tracking-wider">
              Consistent replies
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[24px] sm:text-[28px] font-semibold text-white tracking-tight leading-none">
              &lt;15<span className="text-zinc-400">ms</span>
            </span>
            <span className="mt-2 text-[11.5px] font-mono text-[#8e8e93] uppercase tracking-wider">
              Retrieval speed
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
