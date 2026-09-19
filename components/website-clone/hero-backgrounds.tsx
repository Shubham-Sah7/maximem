"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export type HeroBgOption = "constellation" | "cyber-aurora" | "studio-spotlight";

export const HERO_BG_OPTIONS: { id: HeroBgOption; label: string; tag: string; dotColor: string }[] = [
  {
    id: "constellation",
    label: "Amber Horizon",
    tag: "Warm Glow",
    dotColor: "#f26522",
  },
  {
    id: "cyber-aurora",
    label: "Cyber Aurora",
    tag: "Dual Beam",
    dotColor: "#818cf8",
  },
  {
    id: "studio-spotlight",
    label: "Studio Spotlight",
    tag: "CAD Horizon",
    dotColor: "#e4e4e7",
  },
];

/* ─── Neural Constellation Watermark (Removed per user request) ─── */
export function ConstellationGraphic({ className = "" }: { className?: string }) {
  return null;
}

/* ─── OPTION 1: Amber Horizon & Constellation (Exact Screenshot Replica) ─── */
export function ConstellationBackground({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base Layer */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? "bg-[#fafaf9]" : "bg-[#0e0e0d]"
        }`}
      />

      {/* 2. Technical Dot Matrix Grid (Exact match to screenshot) */}
      <div
        className={`absolute inset-0 ${isLight ? "opacity-25" : "opacity-30"}`}
        style={{
          backgroundImage: isLight
            ? "radial-gradient(rgba(0, 0, 0, 0.08) 1.1px, transparent 1.1px)"
            : "radial-gradient(rgba(255, 255, 255, 0.085) 1.1px, transparent 1.1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 3. Warm Amber Horizon Glow (Gentle, eye-friendly warmth) */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 70% 50% at 38% 100%, rgba(242, 101, 34, 0.08) 0%, rgba(242, 101, 34, 0.02) 45%, transparent 75%)"
            : "radial-gradient(ellipse 70% 50% at 38% 100%, rgba(242, 101, 34, 0.14) 0%, rgba(242, 101, 34, 0.05) 40%, rgba(14, 14, 13, 0) 78%)",
        }}
      />

      {/* 4. Ambient Base Floor Wash */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 90% 30% at 50% 100%, rgba(242, 101, 34, 0.03) 0%, transparent 65%)"
            : "radial-gradient(ellipse 90% 32% at 50% 100%, rgba(242, 101, 34, 0.06) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}

/* ─── OPTION 2: Cyber Aurora & Dual Beam ─── */
export function CyberAuroraBackground({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base Layer */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? "bg-[#f8fafc]" : "bg-[#090a10]"
        }`}
      />

      {/* 2. Precision Coordinate Grid */}
      <div
        className={`absolute inset-0 ${isLight ? "opacity-20" : "opacity-25"}`}
        style={{
          backgroundImage: isLight
            ? "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* 3. Top-Right Cyber Indigo Beam */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(99, 102, 241, 0.09) 0%, rgba(56, 189, 248, 0.04) 45%, transparent 70%)"
            : "radial-gradient(ellipse 65% 55% at 85% 15%, rgba(99, 102, 241, 0.22) 0%, rgba(56, 189, 248, 0.09) 45%, transparent 70%)",
        }}
      />

      {/* 4. Bottom-Left Signature Amber Beam */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 65% 50% at 15% 95%, rgba(242, 101, 34, 0.06) 0%, transparent 65%)"
            : "radial-gradient(ellipse 65% 50% at 15% 95%, rgba(242, 101, 34, 0.12) 0%, rgba(242, 101, 34, 0.04) 50%, transparent 75%)",
        }}
      />

      {/* 5. Center Atmospheric Purple Nebula */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 60%)"
            : "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* 6. Cyber Crosshairs */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-indigo-400/30 select-none">
        + 37°46&apos;N
      </div>
      <div className="absolute top-12 right-12 font-mono text-[10px] text-cyan-400/30 select-none">
        122°25&apos;W +
      </div>
      <div className="absolute bottom-10 left-12 font-mono text-[10px] text-[#f26522]/30 select-none">
        + SYNAP-CORE::V2
      </div>
      <div className="absolute bottom-10 right-12 font-mono text-[10px] text-indigo-400/30 select-none">
        LOW-LATENCY::P75 +
      </div>
    </div>
  );
}

/* ─── OPTION 3: Studio Spotlight & CAD Horizon ─── */
export function StudioSpotlightBackground({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base Layer */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? "bg-[#ffffff]" : "bg-[#111110]"
        }`}
      />

      {/* 2. Concentrated Center Stage Spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 60% 60% at 50% 45%, rgba(0, 0, 0, 0.02) 0%, rgba(242, 101, 34, 0.04) 30%, transparent 70%)"
            : "radial-gradient(ellipse 65% 65% at 50% 45%, rgba(255, 255, 255, 0.045) 0%, rgba(242, 101, 34, 0.09) 32%, transparent 70%)",
        }}
      />

      {/* 3. Subtle Vignette Perimeter */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(circle at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.04) 100%)"
            : "radial-gradient(circle at 50% 50%, transparent 45%, rgba(5, 5, 5, 0.65) 100%)",
        }}
      />

      {/* 4. Fine 28px Dotted CAD Grid */}
      <div
        className={`absolute inset-0 ${isLight ? "opacity-20" : "opacity-22"}`}
        style={{
          backgroundImage: isLight
            ? "radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)"
            : "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 5. CAD Perspective Horizon Baseline (Gradient bottom glow) */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "linear-gradient(180deg, transparent 60%, rgba(242, 101, 34, 0.02) 80%, rgba(242, 101, 34, 0.05) 100%)"
            : "linear-gradient(180deg, transparent 55%, rgba(242, 101, 34, 0.03) 75%, rgba(242, 101, 34, 0.08) 100%)",
        }}
      />

      {/* 6. Hairline Bottom Boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f26522]/30 to-transparent" />
    </div>
  );
}

/* ─── Hero Background Manager (Animates transitions between options) ─── */
export function HeroBackgroundManager({
  activeOption,
  isLight = false,
}: {
  activeOption: HeroBgOption;
  isLight?: boolean;
}) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      <AnimatePresence mode="wait">
        {activeOption === "constellation" && (
          <motion.div
            key="bg-constellation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <ConstellationBackground isLight={isLight} />
          </motion.div>
        )}

        {activeOption === "cyber-aurora" && (
          <motion.div
            key="bg-cyber-aurora"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <CyberAuroraBackground isLight={isLight} />
          </motion.div>
        )}

        {activeOption === "studio-spotlight" && (
          <motion.div
            key="bg-studio-spotlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <StudioSpotlightBackground isLight={isLight} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Interactive Floating Background Switcher Pill ─── */
export function HeroBackgroundSwitcher({
  currentOption,
  onSelectOption,
  isLight = false,
}: {
  currentOption: HeroBgOption;
  onSelectOption: (opt: HeroBgOption) => void;
  isLight?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#121211]/85 backdrop-blur-md border border-white/10 shadow-lg text-[12px]">
      <span className="hidden sm:inline-block px-2 text-[10.5px] font-mono font-medium text-zinc-400 uppercase tracking-wider select-none">
        Hero BG:
      </span>
      {HERO_BG_OPTIONS.map((opt, idx) => {
        const isActive = currentOption === opt.id;
        return (
          <button
            key={opt.id}
            id={`hero-bg-btn-${opt.id}`}
            type="button"
            onClick={() => onSelectOption(opt.id)}
            className={`relative px-3 py-1 rounded-full flex items-center gap-1.5 transition-all duration-200 cursor-pointer select-none ${
              isActive
                ? "bg-white/15 text-white font-medium shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            }`}
            title={`Switch to ${opt.label} (${opt.tag})`}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0 transition-transform duration-200"
              style={{
                backgroundColor: opt.dotColor,
                boxShadow: isActive ? `0 0 8px ${opt.dotColor}` : "none",
                transform: isActive ? "scale(1.2)" : "scale(1)",
              }}
            />
            <span className="font-['Geist_Variable:Medium',sans-serif] tracking-tight">
              {idx + 1}. {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
