"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  MaximemHexIcon,
  TechPlayIcon,
  TechExpandIcon,
  TechRotateIcon,
} from "./app-icons";
import VideoModal, {
  VITY_VIDEO_CHAPTERS,
  VITY_VIDEO_ID,
  VITY_VIDEO_THUMBNAIL,
} from "./video-modal";
import { AnimatedEyebrow, usePrefersReducedMotion } from "./vity-motion";

// ═════════════════════════════════════════════════════════════════════════════
// MAIN SEE HOW IT WORKS SECTION
// ═════════════════════════════════════════════════════════════════════════════

interface SeeHowItWorksSectionProps {
  onOpenModal?: (startSeconds?: number) => void;
}

export default function SeeHowItWorksSection({ onOpenModal }: SeeHowItWorksSectionProps = {}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isInternalModalOpen, setIsInternalModalOpen] = useState(false);
  const [modalStartTime, setModalStartTime] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Subtle GSAP scroll parallax on the main video tablet
  useEffect(() => {
    if (prefersReduced || !videoRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        y: -8,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReduced]);

  const handleTriggerModal = (seconds: number = 0) => {
    if (onOpenModal) {
      onOpenModal(seconds);
    } else {
      setModalStartTime(seconds);
      setIsInternalModalOpen(true);
    }
  };

  return (
    <section id="how-it-works" className="relative w-full bg-[#0E0E0F] py-16 sm:py-20 lg:py-24 border-t border-white/[0.08] select-none overflow-hidden scroll-mt-24">
      {/* ── Architectural Dot Grid Texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── Section Container Card (Maximem Container Language) ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[20px] bg-[#141413] border border-white/[0.08] p-6 sm:p-9 lg:p-11 shadow-[0_4px_30px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {/* Subtle Architectural Dot Grid Pattern inside card */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top Eyebrow Header Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] pb-4 mb-8 sm:mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
              <span className="font-mono text-[11px] font-medium tracking-[1.4px] uppercase text-[#e4e4e7]">
                SEE IT IN ACTION
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#71717a] tracking-[1.4px] uppercase">
              INTERACTIVE DEMO · 1-MIN WALKTHROUGH
            </span>
          </div>

          {/* ── 2-COLUMN SECTION LAYOUT ── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ── LEFT COLUMN: Header + 3 Steps + Watch Video CTA (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              
              {/* Header */}
              <div>
                {/* Heading */}
                <h2 className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-white">
                  <motion.span
                    initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    See how it
                  </motion.span>{" "}
                  <motion.span
                    initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-[#f26522]"
                  >
                    works
                  </motion.span>
                </h2>

                {/* Subtitle */}
                <motion.p
                  initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-3 font-['Geist',sans-serif] text-[14.5px] sm:text-[15.5px] leading-[24px] text-[#a1a1aa] max-w-[440px]"
                >
                  Explore a quick walkthrough to see how Maximem brings memory to your AI tools.
                </motion.p>
              </div>

              {/* Stepper items (Interactive Cards) */}
              <div className="flex flex-col gap-2.5 my-6 sm:my-8">
                
                {/* Step 1: Add your information */}
                <motion.div
                  initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={prefersReduced ? {} : { x: 2 }}
                  onClick={() => {
                    setActiveStep(0);
                    if (isPlayingInline) setIsPlayingInline(false);
                  }}
                  className={`p-3.5 sm:p-4 rounded-[12px] border transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                    activeStep === 0
                      ? "bg-white/[0.06] border-[#f26522]/40 shadow-sm"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                  }`}
                >
                  <div
                    className={`size-9 rounded-[8px] font-mono text-[12.5px] font-bold flex items-center justify-center shrink-0 transition-all duration-200 ${
                      activeStep === 0
                        ? "bg-[#f26522] text-white shadow-sm"
                        : "bg-[#181816] border border-white/10 text-[#a1a1aa]"
                    }`}
                  >
                    01
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                      Add your information
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13px] leading-[20px] text-[#a1a1aa] mt-0.5">
                      Share what&apos;s relevant, with your consent.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2: Import chat history */}
                <motion.div
                  initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={prefersReduced ? {} : { x: 2 }}
                  onClick={() => {
                    setActiveStep(1);
                    if (isPlayingInline) setIsPlayingInline(false);
                  }}
                  className={`p-3.5 sm:p-4 rounded-[12px] border transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                    activeStep === 1
                      ? "bg-white/[0.06] border-[#f26522]/40 shadow-sm"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                  }`}
                >
                  <div
                    className={`size-9 rounded-[8px] font-mono text-[12.5px] font-bold flex items-center justify-center shrink-0 transition-all duration-200 ${
                      activeStep === 1
                        ? "bg-[#f26522] text-white shadow-sm"
                        : "bg-[#181816] border border-white/10 text-[#a1a1aa]"
                    }`}
                  >
                    02
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                      Import chat history
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13px] leading-[20px] text-[#a1a1aa] mt-0.5">
                      Bring context from your existing AI conversations.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3: Connect your tools */}
                <motion.div
                  initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={prefersReduced ? {} : { x: 2 }}
                  onClick={() => {
                    setActiveStep(2);
                    if (isPlayingInline) setIsPlayingInline(false);
                  }}
                  className={`p-3.5 sm:p-4 rounded-[12px] border transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                    activeStep === 2
                      ? "bg-white/[0.06] border-[#f26522]/40 shadow-sm"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                  }`}
                >
                  <div
                    className={`size-9 rounded-[8px] font-mono text-[12.5px] font-bold flex items-center justify-center shrink-0 transition-all duration-200 ${
                      activeStep === 2
                        ? "bg-[#f26522] text-white shadow-sm"
                        : "bg-[#181816] border border-white/10 text-[#a1a1aa]"
                    }`}
                  >
                    03
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                      Connect your tools
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13px] leading-[20px] text-[#a1a1aa] mt-0.5">
                      Use one memory across all your AI tools.
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Primary CTA Button */}
              <div>
                <motion.button
                  type="button"
                  whileHover={prefersReduced ? {} : { y: -2, scale: 1.01 }}
                  whileTap={prefersReduced ? {} : { scale: 0.98 }}
                  onClick={() => handleTriggerModal(VITY_VIDEO_CHAPTERS[activeStep]?.startSeconds || 0)}
                  className="h-[44px] px-5 rounded-[10px] bg-[#f26522] hover:bg-[#ff732e] text-white font-['Geist',sans-serif] font-medium text-[14px] tracking-tight flex items-center gap-2.5 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <div className="size-5 rounded-full bg-white flex items-center justify-center text-[#f26522] shrink-0">
                    <TechPlayIcon className="size-2.5 fill-[#f26522] ml-0.5" />
                  </div>
                  <span>Watch the 1-min video</span>
                </motion.button>
              </div>

            </div>

          {/* ── RIGHT COLUMN: Full-Width Video (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* ── Main Full-Width Video Stage Container ── */}
            <motion.div
              ref={videoRef}
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-[20px] bg-[#141413] border border-white/[0.08] p-4 sm:p-5 shadow-[0_4px_32px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              
              {/* Subtle dot matrix texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* ── Video Player Screen ── */}
              <div className="relative w-full rounded-[14px] bg-[#0E0E0D] border border-white/[0.1] p-3.5 sm:p-4.5 overflow-hidden shadow-2xl">
                  
                  {/* Tablet Top Nav */}
                  <div className="flex items-center justify-between pb-3 mb-3">
                    <div className="flex items-center">
                      <span className="font-['Geist',sans-serif] text-[13.5px] font-semibold text-white tracking-tight">
                        Maximem AI &mdash; How it Works!
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#f26522] text-white text-[10.5px] font-mono font-medium flex items-center gap-1">
                        <span className="size-1 rounded-full bg-white animate-pulse" />
                        1:00 min
                      </span>

                      {/* Expand to Modal Button */}
                      <button
                        type="button"
                        onClick={() => handleTriggerModal(VITY_VIDEO_CHAPTERS[activeStep]?.startSeconds || 0)}
                        className="size-7 rounded-[6px] bg-[#1c1c1a] hover:bg-white/[0.1] border border-white/[0.08] text-[#a1a1aa] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        title="Open in Fullscreen Modal"
                        aria-label="Open in Fullscreen Modal"
                      >
                        <TechExpandIcon className="size-3.5" />
                      </button>

                      {/* Reset to Preview Button if playing inline */}
                      {isPlayingInline && (
                        <button
                          type="button"
                          onClick={() => setIsPlayingInline(false)}
                          className="size-7 rounded-[6px] bg-[#221814] hover:bg-[#2c1d17] border border-[#f26522]/40 text-[#f26522] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          title="Close Video"
                          aria-label="Close Video"
                        >
                          <TechRotateIcon className="size-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Video Player / Preview Area */}
                  {isPlayingInline ? (
                    /* ── INLINE YOUTUBE PLAYER ── */
                    <div className="relative w-full aspect-video rounded-[10px] overflow-hidden bg-black border border-white/[0.1] shadow-2xl">
                      <iframe
                        key={`${activeStep}-${isPlayingInline}`}
                        src={`https://www.youtube.com/embed/${VITY_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&start=${VITY_VIDEO_CHAPTERS[activeStep]?.startSeconds || 0}`}
                        title="Maximem AI - How it Works!"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 size-full border-0"
                      />
                    </div>
                  ) : (
                    /* ── RICH VIDEO PREVIEW WITH POSTER & GLOWING PLAY BUTTON ── */
                    <div
                      onClick={() => setIsPlayingInline(true)}
                      className="relative w-full aspect-video rounded-[10px] overflow-hidden bg-[#0d0d0c] border border-white/[0.1] cursor-pointer group select-none shadow-lg"
                    >
                      {/* Authentic Video Thumbnail Image */}
                      <img
                        src={VITY_VIDEO_THUMBNAIL}
                        alt="Maximem AI - How it Works! Video Preview"
                        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-95"
                      />

                      {/* Subtle Vignette & Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />
                      
                      {/* Architectural Dot Grid */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />

                      {/* Top Badge on Preview */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10.5px] font-medium tracking-tight">
                          <span className="size-1.5 rounded-[2px] bg-[#f26522]" />
                          <span>Chapter {VITY_VIDEO_CHAPTERS[activeStep]?.id}: {VITY_VIDEO_CHAPTERS[activeStep]?.title}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-[5px] bg-[#f26522] text-white text-[10px] font-mono font-semibold shadow-sm">
                          1:00 MIN
                        </span>
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10 pointer-events-none">
                        <motion.div
                          whileHover={prefersReduced ? {} : { scale: 1.04 }}
                          className="size-14 sm:size-16 rounded-full bg-[#f26522] group-hover:bg-[#ff732e] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all duration-200 border border-white/20"
                        >
                          <TechPlayIcon className="size-6 text-white fill-white ml-0.5" />
                        </motion.div>

                        {/* Hint Tag */}
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
                          Click to Play Video
                        </span>
                      </div>

                      {/* Bottom Info Bar inside Preview */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none text-[11px] text-white/80 px-2 py-1 rounded-[6px] bg-black/40 backdrop-blur-sm border border-white/5">
                        <div className="flex items-center gap-1.5 truncate">
                          <MaximemHexIcon className="size-3.5 shrink-0" />
                          <span className="truncate font-medium text-white">Maximem AI Walkthrough</span>
                        </div>
                        <span className="font-mono text-[10px] text-[#f26522] shrink-0 font-medium">
                          {VITY_VIDEO_CHAPTERS[activeStep]?.time} / 1:00
                        </span>
                      </div>
                    </div>
                  )}

              </div>

            </motion.div>

          </div>

        </div>

        </motion.div>

      </div>

      {/* Internal Modal Fallback (if onOpenModal not provided) */}
      <VideoModal
        isOpen={isInternalModalOpen}
        onClose={() => setIsInternalModalOpen(false)}
        initialStartTime={modalStartTime}
        currentChapterIndex={activeStep}
        onChapterSelect={(idx) => setActiveStep(idx)}
      />

    </section>
  );
}
