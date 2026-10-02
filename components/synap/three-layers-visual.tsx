"use client";

import React from "react";

export interface ThreeLayersCardsProps {
  className?: string;
}

export default function ThreeLayersVisual({ className = "" }: ThreeLayersCardsProps) {
  return (
    <div className={`flex flex-col gap-4 sm:gap-5 w-full ${className}`}>
      {/* Card 1: Organisational */}
      <div data-synap-card className="group rounded-[16px] border border-white/[0.08] bg-[#141413] hover:border-white/[0.16] hover:bg-[#161614] hover:-translate-y-1 transition-all duration-300 p-5.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden">
        {/* Meta Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-[4px] text-[10.5px] font-bold tracking-wider bg-white/[0.06] text-white/90 border border-white/[0.08]">
              LAYER 01
            </span>
            <span className="text-[11.5px] text-[#71717A] tracking-wider uppercase font-medium">
              MULTI-TENANT
            </span>
          </div>
          <span className="text-[12px] text-[#f26522] flex items-center gap-1.5 font-medium">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26522] opacity-50" />
              <span className="relative inline-flex rounded-full size-2 bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.7)]" />
            </span>
            Permanent
          </span>
        </div>

        {/* Content */}
        <div>
          <div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold text-white tracking-[-0.01em] mb-1.5">
              Organisational
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#9F9FA9] leading-[1.55] mb-3.5">
              Shared across all users and agents. Your policies, pricing, and company rules — not just individual memory.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Company Docs", "RBAC Policies", "Fleet Rules"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-[5px] text-[11px] font-medium bg-[#191816] border border-white/[0.08] text-[#9F9FA9] group-hover:border-white/[0.12] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Long-term */}
      <div data-synap-card className="group rounded-[16px] border border-white/[0.08] bg-[#141413] hover:border-white/[0.16] hover:bg-[#161614] hover:-translate-y-1 transition-all duration-300 p-5.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden">
        {/* Meta Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-[4px] text-[10.5px] font-bold tracking-wider bg-white/[0.06] text-white/90 border border-white/[0.08]">
              LAYER 02
            </span>
            <span className="text-[11.5px] text-[#71717A] tracking-wider uppercase font-medium">
              PER-USER
            </span>
          </div>
          <span className="text-[12px] text-[#f26522] flex items-center gap-1.5 font-medium">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26522] opacity-50" />
              <span className="relative inline-flex rounded-full size-2 bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.7)]" />
            </span>
            Cross-Session
          </span>
        </div>

        {/* Content */}
        <div>
          <div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold text-white tracking-[-0.01em] mb-1.5">
              Long-term
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#9F9FA9] leading-[1.55] mb-3.5">
              Persists across sessions per person. The layer a user means when they say <em className="text-zinc-200 font-medium not-italic">“it remembers me.”</em>
            </p>
            <div className="flex flex-wrap gap-2">
              {["User Persona", "Negative Prefs", "Habit Graph"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-[5px] text-[11px] font-medium bg-[#191816] border border-white/[0.08] text-[#9F9FA9] group-hover:border-white/[0.12] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Short-term */}
      <div data-synap-card className="group rounded-[16px] border border-white/[0.08] bg-[#141413] hover:border-white/[0.16] hover:bg-[#161614] hover:-translate-y-1 transition-all duration-300 p-5.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden">
        {/* Meta Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-[4px] text-[10.5px] font-bold tracking-wider bg-white/[0.06] text-white/90 border border-white/[0.08]">
              LAYER 03
            </span>
            <span className="text-[11.5px] text-[#71717A] tracking-wider uppercase font-medium">
              REAL-TIME
            </span>
          </div>
          <span className="text-[12px] text-[#34d399] flex items-center gap-1.5 font-medium">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-50" />
              <span className="relative inline-flex rounded-full size-2 bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            </span>
            &lt;15ms Working
          </span>
        </div>

        {/* Content */}
        <div>
          <div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold text-white tracking-[-0.01em] mb-1.5">
              Short-term
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#9F9FA9] leading-[1.55] mb-3.5">
              The current live session. Zero-latency working memory with sub-15ms turn-by-turn context retrieval.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Active Turn #4", "1.2k Tokens", "<15ms P75"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-[5px] text-[11px] font-medium bg-[#191816] border border-white/[0.08] text-[#9F9FA9] group-hover:border-white/[0.12] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
