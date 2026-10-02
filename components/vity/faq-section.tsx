"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechChevronDownIcon } from "./app-icons";
import {
  AnimatedEyebrow,
  AnimatedHeading,
  usePrefersReducedMotion,
} from "./vity-motion";

interface FaqItem {
  q: string;
  a: string;
}

const faqItems: FaqItem[] = [
  {
    q: "What is Vity and how does it work?",
    a: "Vity is a personal AI memory layer that works across all your favorite AI apps and platforms. When you chat with ChatGPT, Claude, Gemini, Perplexity, or write code in Cursor, Vity captures your preferences, context, project details, and past discussions, securely storing them in your personal encrypted vault. When you open any supported tool, relevant memories are seamlessly recalled so you never have to repeat yourself.",
  },
  {
    q: "Which AI tools and platforms does Vity support?",
    a: "Vity natively supports ChatGPT (web & desktop), Claude, Google Gemini, Perplexity, Cursor, Notion, Slack, and browsers including Chrome, Edge, Firefox, and Safari. Our Chrome Extension enables instant memory capture and injection on any web interface.",
  },
  {
    q: "Is my data secure and private?",
    a: "Yes, security and privacy are paramount. Your memories are encrypted client-side using authenticated AES-GCM-256 before syncing. Only you hold the decryption keys. We never sell your data, and your conversations are never used to train foundation AI models.",
  },
  {
    q: "How much does Vity cost?",
    a: "Vity offers a generous Free tier for individual users that includes memory capture, cross-platform synchronization, and access across your web tools. Pro and Team plans provide unlimited memory storage, priority low-latency recall, and team workspace sharing.",
  },
  {
    q: "Can I view, edit, or delete the memories Vity stores?",
    a: "Absolutely. You have 100% deterministic control over your memory bank. Through your Vity dashboard, you can inspect individual memories, edit entries, delete outdated facts, or purge your entire vault at any time.",
  },
  {
    q: "How do I get started with Vity?",
    a: "Getting started takes less than a minute. Simply install the free Vity Chrome extension, sign in with your Maximem account, and start using your favorite AI apps as you normally would. Vity begins organizing your context automatically.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = usePrefersReducedMotion();

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="mb-4">
            <AnimatedEyebrow number="07" category="FAQ" />
          </div>

          <AnimatedHeading
            primaryText="Frequently Asked"
            highlightText="Questions"
            subtitle="Everything you need to know about Vity, privacy, synchronization, and setup."
            align="center"
          />
        </div>

        {/* ── ACCORDION LIST (Matches Maximem Card Language) ── */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-3 sm:gap-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-[14px] border transition-colors duration-200 overflow-hidden shadow-sm ${
                  isOpen
                    ? "bg-[#161413] border-[#f26522]/35"
                    : "bg-[#141413] border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Geist',sans-serif] text-[15.5px] sm:text-[16px] font-semibold text-white tracking-tight leading-snug">
                    {item.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`size-7 rounded-[7px] border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#f26522]/15 border-[#f26522]/40 text-[#f26522]"
                        : "bg-[#181816] border-white/[0.08] text-[#a1a1aa] hover:text-white"
                    }`}
                  >
                    <TechChevronDownIcon className="size-4" strokeWidth={2.2} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[14px] sm:text-[14.5px] leading-[24px] text-[#a1a1aa] border-t border-white/[0.06] pt-3.5 font-['Geist',sans-serif]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── STILL HAVE QUESTIONS FOOTER CALLOUT ── */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="font-['Geist',sans-serif] text-[13.5px] sm:text-[14px] text-[#71717a]">
            Still have questions? Reach out to us at{" "}
            <a
              href="mailto:support@maximem.ai"
              className="text-[#f26522] hover:underline font-medium"
            >
              support@maximem.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
