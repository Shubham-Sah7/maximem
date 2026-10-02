"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChatGPTBadge,
  ClaudeBadge,
  GeminiBadge,
  PerplexityBadge,
  GrokBadge,
  CursorBadge,
  DeepSeekBadge,
  ChromeBadge,
  EdgeBadge,
  FirefoxBadge,
  NotionBadge,
  GoogleDriveBadge,
  GmailBadge,
  GitHubBadge,
  VSCodeBadge,
  FigmaBadge,
  WhatsAppBadge,
  SlackBadge,
  LinearBadge,
} from "./app-icons";
import {
  AnimatedEyebrow,
  AnimatedHeading,
  usePrefersReducedMotion,
  cardHoverMotion,
} from "./vity-motion";

interface BadgeWrapperProps {
  children: React.ReactNode;
}

function BadgeWrapper({ children }: BadgeWrapperProps) {
  const prefersReduced = usePrefersReducedMotion();
  return (
    <motion.div
      whileHover={prefersReduced ? {} : { scale: 1.05, filter: "brightness(1.12)" }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="inline-flex items-center justify-center shrink-0 cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

export default function SupportedAppsSection() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section className="relative w-full bg-[#0E0E0F] py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] select-none overflow-hidden scroll-mt-24">
      {/* ── Architectural Dot Grid (Alternating Section Rhythm) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1.1px, transparent 1.1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── Single Large Bordered Container (Maximem Container Language) ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[20px] bg-[#141413] border border-white/[0.08] p-7 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          
          {/* Subtle Architectural Dot Grid Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top Eyebrow Bar */}
          <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
            <AnimatedEyebrow number="05" category="SUPPORTED PLATFORMS" />
            <motion.span
              initial={prefersReduced ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden sm:inline-block font-mono text-[11px] text-[#71717a] tracking-[1.4px] uppercase"
            >
              UNIFIED CLIENT LAYER
            </motion.span>
          </div>

          {/* Centered Heading Content */}
          <div className="relative z-10 text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
            <AnimatedHeading
              primaryText="Supported"
              highlightText="Apps and Platforms"
              subtitle="Stop repeating yourself. One secure memory vault across all your AI tools and workspaces."
              align="center"
            />
          </div>

          {/* 5 Clean Category Cards Matching User Reference */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
            
            {/* Card 1: AI Chat */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReduced ? {} : cardHoverMotion.whileHover}
              className="rounded-[16px] bg-[#181816] border border-white/[0.08] hover:border-white/[0.18] p-5 flex flex-col justify-between min-h-[230px] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                  AI Chat
                </h3>

                {/* 6 Clean Circular Badges arranged in 2 rows of 3 */}
                <div className="grid grid-cols-3 gap-2.5 my-5 w-fit">
                  <BadgeWrapper><ChatGPTBadge /></BadgeWrapper>
                  <BadgeWrapper><ClaudeBadge /></BadgeWrapper>
                  <BadgeWrapper><GeminiBadge /></BadgeWrapper>
                  <BadgeWrapper><PerplexityBadge /></BadgeWrapper>
                  <BadgeWrapper><GrokBadge /></BadgeWrapper>
                  <BadgeWrapper><DeepSeekBadge /></BadgeWrapper>
                </div>
              </div>

              <p className="font-['Geist',sans-serif] text-[12px] leading-[18px] text-[#71717a]">
                ChatGPT, Claude, Gemini, Perplexity, Grok &amp; more.
              </p>
            </motion.div>

            {/* Card 2: Browsers */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReduced ? {} : cardHoverMotion.whileHover}
              className="rounded-[16px] bg-[#181816] border border-white/[0.08] hover:border-white/[0.18] p-5 flex flex-col justify-between min-h-[230px] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                  Browsers
                </h3>

                {/* 3 Clean Browser Badges */}
                <div className="flex items-center gap-2.5 my-5">
                  <BadgeWrapper><ChromeBadge /></BadgeWrapper>
                  <BadgeWrapper><EdgeBadge /></BadgeWrapper>
                  <BadgeWrapper><FirefoxBadge /></BadgeWrapper>
                </div>
              </div>

              <p className="font-['Geist',sans-serif] text-[12px] leading-[18px] text-[#71717a]">
                Chrome, Edge, Firefox &amp; more.
              </p>
            </motion.div>

            {/* Card 3: Productivity */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReduced ? {} : cardHoverMotion.whileHover}
              className="rounded-[16px] bg-[#181816] border border-white/[0.08] hover:border-white/[0.18] p-5 flex flex-col justify-between min-h-[230px] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                  Productivity
                </h3>

                {/* 3 Clean Productivity Badges */}
                <div className="flex items-center gap-2.5 my-5">
                  <BadgeWrapper><NotionBadge /></BadgeWrapper>
                  <BadgeWrapper><GoogleDriveBadge /></BadgeWrapper>
                  <BadgeWrapper><GmailBadge /></BadgeWrapper>
                </div>
              </div>

              <p className="font-['Geist',sans-serif] text-[12px] leading-[18px] text-[#71717a]">
                Notion, Google Workspace, Gmail &amp; more.
              </p>
            </motion.div>

            {/* Card 4: Dev Tools */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReduced ? {} : cardHoverMotion.whileHover}
              className="rounded-[16px] bg-[#181816] border border-white/[0.08] hover:border-white/[0.18] p-5 flex flex-col justify-between min-h-[230px] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                  Dev Tools
                </h3>

                {/* 3 Clean Dev Tool Badges */}
                <div className="flex items-center gap-2.5 my-5">
                  <BadgeWrapper><GitHubBadge /></BadgeWrapper>
                  <BadgeWrapper><VSCodeBadge /></BadgeWrapper>
                  <BadgeWrapper><FigmaBadge /></BadgeWrapper>
                </div>
              </div>

              <p className="font-['Geist',sans-serif] text-[12px] leading-[18px] text-[#71717a]">
                GitHub, VS Code, Figma &amp; more.
              </p>
            </motion.div>

            {/* Card 5: Coming Soon */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReduced ? {} : cardHoverMotion.whileHover}
              className="rounded-[16px] bg-[#181816] border border-white/[0.08] hover:border-white/[0.18] p-5 flex flex-col justify-between min-h-[230px] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-['Geist',sans-serif] text-[15px] font-semibold text-white tracking-tight">
                  Coming Soon
                </h3>

                {/* 3 Clean Coming Soon Badges */}
                <div className="flex items-center gap-2.5 my-5">
                  <BadgeWrapper><WhatsAppBadge /></BadgeWrapper>
                  <BadgeWrapper><SlackBadge /></BadgeWrapper>
                  <BadgeWrapper><LinearBadge /></BadgeWrapper>
                </div>
              </div>

              <p className="font-['Geist',sans-serif] text-[12px] leading-[18px] text-[#71717a]">
                More apps coming soon.
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
