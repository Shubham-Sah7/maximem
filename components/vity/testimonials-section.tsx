"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AnimatedEyebrow,
  AnimatedHeading,
  usePrefersReducedMotion,
} from "./vity-motion";

// ═════════════════════════════════════════════════════════════════════════════
// VERIFIED CHECKMARK & BRAND BADGES (Exact Match to Design)
// ═════════════════════════════════════════════════════════════════════════════

function VerifiedBadge() {
  return (
    <svg
      className="size-[15px] text-[#1d9bf0] shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Verified account"
    >
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 10.45.7 11.82.7 13.4c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.05 1.273 2.42 2.148 4 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.05 2.148-2.42 2.148-4zm-12.28 4.22l-4.242-4.242 1.414-1.414 2.828 2.828 6.364-6.364 1.414 1.414-7.778 7.778z" />
    </svg>
  );
}

function ShopifyBadge() {
  return (
    <div
      className="size-[17px] rounded-[3px] bg-[#5e8e3e] flex items-center justify-center text-white shrink-0 p-0.5 shadow-sm"
      title="Shopify"
    >
      <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
        <path d="M15.3 5.4c-.1-.9-.7-1.8-1.5-2.2-.9-.4-1.9-.3-2.6.2-.7.6-1.1 1.5-1.1 2.4l-.1.4H8.4L6.9 20h11.2l-1.8-14.6h-1zm-3.8.4c0-.6.3-1.2.7-1.5.4-.4.9-.4 1.4-.2.5.2.8.7.9 1.3l.1.4h-3.1v-.4zm1.1 8.5c-.7 0-1.3-.2-1.8-.7-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .3.3.7.5 1.1.5.6 0 1-.3 1-.7 0-.5-.4-.7-1.2-1-1.1-.4-1.8-.9-1.8-1.9 0-1 .8-1.8 1.9-1.8.6 0 1.2.2 1.6.6.2.2.2.5 0 .7-.2.2-.5.2-.7 0-.3-.3-.6-.4-1-.4-.6 0-1 .3-1 .7 0 .4.4.6 1.1.9 1.2.4 1.9.9 1.9 2 0 1.1-.9 1.9-2 1.9z" />
      </svg>
    </div>
  );
}

function YCBadge() {
  return (
    <div
      className="size-[17px] rounded-[3px] bg-[#ff6600] flex items-center justify-center text-white shrink-0 shadow-sm"
      title="Y Combinator"
    >
      <span className="font-['Geist',sans-serif] font-bold text-[11px] leading-none text-white">
        Y
      </span>
    </div>
  );
}

function XLogo() {
  return (
    <svg
      className="size-[15px] text-[#71717a] hover:text-white transition-colors shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS SECTION (Exact Replica of User Screenshot)
// ═════════════════════════════════════════════════════════════════════════════

export default function TestimonialsSection() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section className="relative w-full bg-[#0B0B0C] py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] select-none scroll-mt-24">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4">
            <AnimatedEyebrow number="06" category="SOCIAL PROOF" />
          </div>

          <AnimatedHeading
            primaryText="What people are"
            highlightText="saying"
            subtitle="Real opinions from builders, researchers and operators using Maximem in their daily workflows."
            align="left"
          />
        </div>

      {/* ── 6 TESTIMONIAL CARDS (3 Columns x 2 Rows) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        
        {/* ── Card 1: Aaron Levie ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -2, transition: { duration: 0.2 } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 shadow-sm min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/vity/testimonials/levie.jpg"
                  alt="Aaron Levie"
                  className="size-11 sm:size-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight leading-tight">
                      Aaron Levie
                    </span>
                    <VerifiedBadge />
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#71717a] mt-0.5">
                    @levie
                  </span>
                </div>
              </div>
              <XLogo />
            </div>

            <div className="space-y-1">
              <p className="font-['Geist',sans-serif] text-[15.5px] sm:text-[16px] font-semibold text-white tracking-tight leading-[1.35]">
                Context is king.
              </p>
              <p className="font-['Geist',sans-serif] text-[14px] sm:text-[14.5px] leading-[22px] text-[#a1a1aa] mt-1.5">
                AI Agents will be able to process vastly more context about a patient than any human could.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Card 2: Tanay Jaipuria ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -2, transition: { duration: 0.2 } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 shadow-sm min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/vity/testimonials/tanayj.jpg"
                  alt="Tanay Jaipuria"
                  className="size-11 sm:size-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight leading-tight">
                      Tanay Jaipuria
                    </span>
                    <VerifiedBadge />
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#71717a] mt-0.5">
                    @tanayj
                  </span>
                </div>
              </div>
              <XLogo />
            </div>

            <p className="font-['Geist',sans-serif] text-[15px] sm:text-[15.5px] leading-[23px] text-[#d4d4d8]">
              Bring your context, preferences, and{" "}
              <span className="font-['Geist',sans-serif] font-semibold text-white">
                memories to every app.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── Card 3: Marmik Mankodi ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -2, transition: { duration: 0.2 } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 shadow-sm min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/vity/testimonials/mar_kodi.jpg"
                  alt="Marmik Mankodi"
                  className="size-11 sm:size-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight leading-tight">
                      Marmik Mankodi
                    </span>
                    <VerifiedBadge />
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#71717a] mt-0.5">
                    @mar_kodi
                  </span>
                </div>
              </div>
              <XLogo />
            </div>

            <p className="font-['Geist',sans-serif] text-[15px] sm:text-[15.5px] leading-[23px] text-[#d4d4d8]">
              How can I do the same for context / memory on AI tools?
            </p>
          </div>
        </motion.div>

        {/* ── Card 4: tobi lutke ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -2, transition: { duration: 0.2 } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 shadow-sm min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/vity/testimonials/tobi.jpg"
                  alt="tobi lutke"
                  className="size-11 sm:size-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight leading-tight">
                      tobi lutke
                    </span>
                    <VerifiedBadge />
                    <ShopifyBadge />
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#71717a] mt-0.5">
                    @tobi
                  </span>
                </div>
              </div>
              <XLogo />
            </div>

            <p className="font-['Geist',sans-serif] text-[15px] sm:text-[15.5px] leading-[23px] text-[#d4d4d8]">
              I really like the term{" "}
              <span className="font-['Geist',sans-serif] font-semibold text-white">
                “context engineering” over prompt engineering.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── Card 5: Garry Tan ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.40, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -2, transition: { duration: 0.2 } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 shadow-sm min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/vity/testimonials/garrytan.jpg"
                  alt="Garry Tan"
                  className="size-11 sm:size-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight leading-tight">
                      Garry Tan
                    </span>
                    <VerifiedBadge />
                    <YCBadge />
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#71717a] mt-0.5">
                    @garrytan
                  </span>
                </div>
              </div>
              <XLogo />
            </div>

            <p className="font-['Geist',sans-serif] text-[15px] sm:text-[15.5px] leading-[23px] text-[#d4d4d8]">
              <span className="font-['Geist',sans-serif] font-semibold text-white">
                Context is the bottleneck
              </span>{" "}
              – it’s getting models to actually pay attention to it.
            </p>
          </div>
        </motion.div>

        {/* ── Card 6: govind ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          whileHover={prefersReduced ? {} : { y: -2, transition: { duration: 0.2 } }}
          className="rounded-[16px] bg-[#141413] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 shadow-sm min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/vity/testimonials/govindrathi_.jpg"
                  alt="govind"
                  className="size-11 sm:size-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight leading-tight">
                      govind
                    </span>
                    <VerifiedBadge />
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#71717a] mt-0.5">
                    @govindrathi_
                  </span>
                </div>
              </div>
              <XLogo />
            </div>

            <p className="font-['Geist',sans-serif] text-[15px] sm:text-[15.5px] leading-[23px] text-[#d4d4d8]">
              It was{" "}
              <span className="font-['Geist',sans-serif] font-semibold text-white">
                miserable in context recall.
              </span>{" "}
              Claude was much better, the responses it gave were more precise.
            </p>
          </div>
        </motion.div>

      </div>

    </div>
  </section>
  );
}
