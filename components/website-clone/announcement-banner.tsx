"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BANNER_DISMISSED_KEY = "maximem_banner_dismissed_v1";

interface AnnouncementBannerProps {
  isLight?: boolean;
}

export default function AnnouncementBanner({ isLight = false }: AnnouncementBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
      if (!dismissed) setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(BANNER_DISMISSED_KEY, "1");
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="announcement-banner"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full z-[90] border-b ${
            isLight
              ? "bg-[#f5f5f4] border-[#e4e4e7]"
              : "bg-[#1B1B19] border-white/[0.08]"
          }`}
        >
          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">

              {/* Left: Tag + Message */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                {/* Pill tag */}
                <span
                  className={`hidden sm:inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-[5px] border font-mono text-[10px] font-medium tracking-wider uppercase ${
                    isLight
                      ? "border-[#e4e4e7] bg-white text-[#09090b]"
                      : "border-white/[0.1] bg-white/[0.04] text-[#d4d4d8]"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
                  New Research
                </span>

                {/* Message */}
                <p className={`text-[12.5px] sm:text-[13px] leading-[1.5] tracking-[-0.01em] truncate ${
                  isLight ? "text-[#3f3f46]" : "text-[#a1a1aa]"
                }`}>
                  <span className={`font-medium ${isLight ? "text-[#09090b]" : "text-[#e4e4e4]"}`}>
                    New research from Maximem.{" "}
                  </span>
                  Agentic Context Management: Solving Agent Memory and Cost by Treating Them as Lifecycle and Architecture Problems.
                </p>
              </div>

              {/* Right: CTA pill + Close */}
              <div className="flex items-center gap-3 shrink-0">
                {/* CTA styled as bordered pill — matches "NEW RESEARCH" pill aesthetic */}
                <a
                  href="#research"
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[5px] border text-[11.5px] font-mono font-medium tracking-wide whitespace-nowrap transition-all duration-150 ${
                    isLight
                      ? "border-[#f26522]/40 bg-[#f26522]/[0.06] text-[#f26522] hover:bg-[#f26522]/[0.12]"
                      : "border-[#f26522]/40 bg-[#f26522]/[0.08] text-[#f26522] hover:bg-[#f26522]/[0.14]"
                  }`}
                >
                  Read the paper →
                </a>

                {/* Dismiss X */}
                <button
                  type="button"
                  onClick={dismiss}
                  aria-label="Dismiss announcement"
                  className={`p-1 rounded-[4px] transition-colors duration-150 cursor-pointer ${
                    isLight
                      ? "text-[#71717a] hover:text-[#09090b] hover:bg-black/[0.06]"
                      : "text-[#71717a] hover:text-[#d4d4d8] hover:bg-white/[0.06]"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 1L13 13M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
