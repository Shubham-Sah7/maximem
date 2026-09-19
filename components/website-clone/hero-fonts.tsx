"use client";

import React from "react";

export type HeroFontOption = "geist" | "sora" | "jakarta" | "manrope";

export interface HeroFontDef {
  id: HeroFontOption;
  label: string;
  tag: string;
  badge: string;
  fontFamily: string;
  letterSpacingHeadline: string;
}

export const HERO_FONT_OPTIONS: HeroFontDef[] = [
  {
    id: "geist",
    label: "Geist",
    tag: "Current · Primary",
    badge: "Primary",
    fontFamily: 'var(--font-geist-sans), "Geist Variable", "Geist", sans-serif',
    letterSpacingHeadline: "tracking-[-0.035em]",
  },
  {
    id: "sora",
    label: "Sora",
    tag: "Futuristic, Techy",
    badge: "Futuristic",
    fontFamily: '"Sora", sans-serif',
    letterSpacingHeadline: "tracking-[-0.025em]",
  },
  {
    id: "jakarta",
    label: "Plus Jakarta",
    tag: "Clean, Enterprise",
    badge: "Enterprise",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    letterSpacingHeadline: "tracking-[-0.03em]",
  },
  {
    id: "manrope",
    label: "Manrope",
    tag: "Minimal, Premium",
    badge: "Minimal",
    fontFamily: '"Manrope", sans-serif',
    letterSpacingHeadline: "tracking-[-0.03em]",
  },
];

export function HeroFontSwitcher({
  currentFont,
  onSelectFont,
  isLight = false,
}: {
  currentFont: HeroFontOption;
  onSelectFont: (font: HeroFontOption) => void;
  isLight?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-full transition-all duration-300 shadow-md text-[12px] border ${
        isLight
          ? "bg-white/90 backdrop-blur-md border-[#e4e4e7] shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
          : "bg-[#121211]/90 backdrop-blur-md border-white/10 shadow-[0_2px_14px_rgba(0,0,0,0.4)]"
      }`}
      aria-label="Hero Font Preview Switcher"
    >
      <div className="flex items-center gap-1.5 pl-2.5 pr-1 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] animate-pulse" />
        <span
          className={`text-[10.5px] font-mono font-medium uppercase tracking-wider ${
            isLight ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          Font:
        </span>
      </div>

      {HERO_FONT_OPTIONS.map((opt) => {
        const isActive = currentFont === opt.id;
        return (
          <button
            key={opt.id}
            id={`hero-font-btn-${opt.id}`}
            type="button"
            onClick={() => onSelectFont(opt.id)}
            style={{ fontFamily: opt.fontFamily }}
            className={`relative px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 transition-all duration-200 cursor-pointer select-none text-[12px] ${
              isActive
                ? isLight
                  ? "bg-[#09090b] text-white shadow-sm font-semibold"
                  : "bg-white/20 text-white shadow-sm font-semibold border border-white/15"
                : isLight
                ? "text-zinc-600 hover:text-zinc-900 hover:bg-black/5 font-medium"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 font-medium"
            }`}
            title={`${opt.label} (${opt.tag})`}
          >
            <span>{opt.label}</span>
            {opt.id === "geist" ? (
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-normal ${
                isActive ? "bg-[#f26522] text-white" : "bg-[#f26522]/15 text-[#f26522]"
              }`}>
                Default
              </span>
            ) : (
              <span
                className={`text-[9.5px] opacity-75 hidden sm:inline-block font-sans ${
                  isActive ? "text-white/90" : "text-zinc-500"
                }`}
              >
                · {opt.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
