"use client";

import React, { useEffect, useState, useRef } from "react";
import svgPaths from "./svg-paths";

interface FooterSectionProps {
  isLight?: boolean;
}

export default function FooterSection({ isLight = true }: FooterSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const navColumns = [
    {
      id: "01",
      title: "PRODUCT",
      links: [
        { label: "Synap", href: "#synap" },
        { label: "Synap Pricing", href: "#pricing" },
        { label: "Synap Security", href: "#security" },
        { label: "Maximem Vity", href: "#vity" },
        { label: "Cross-App Memory", href: "#cross-app" },
        { label: "Chrome Extension", href: "#extension" },
        { label: "OpenClaw Plugin", href: "#openclaw" },
        { label: "Hermes Plugin", href: "#hermes" },
      ],
    },
    {
      id: "02",
      title: "DEVELOPERS",
      links: [
        { label: "Synap Docs", href: "#docs" },
        { label: "Quickstart", href: "#quickstart" },
        { label: "Integrations", href: "#integrations" },
        { label: "Synap on GitHub", href: "https://github.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Talk to the founder", href: "#contact" },
        { label: "Synap Playground", href: "https://synap.maximem.ai/playground" },
      ],
    },
    {
      id: "03",
      title: "COMPARE",
      links: [
        { label: "#1 on LongMemEval", href: "#benchmarks" },
        { label: "Vity vs Mem0 vs Supermemory", href: "#compare-mem0" },
        { label: "Synap vs alternatives", href: "#compare" },
        { label: "Mem0 vs Zep + 5 others →", href: "#compare-all" },
        { label: "Synap vs Mem0", href: "#vs-mem0" },
        { label: "Synap vs Zep", href: "#vs-zep" },
        { label: "Synap vs Letta", href: "#vs-letta" },
        { label: "Synap vs Supermemory", href: "#vs-supermemory" },
        { label: "Synap vs Cognee", href: "#vs-cognee" },
        { label: "Synap vs Evermind", href: "#vs-evermind" },
        { label: "Mem0 alternatives", href: "#mem0-alt" },
        { label: "Zep alternatives", href: "#zep-alt" },
        { label: "Letta alternatives", href: "#letta-alt" },
        { label: "Supermemory alternatives", href: "#supermemory-alt" },
        { label: "Cognee alternatives", href: "#cognee-alt" },
        { label: "Evermind alternatives", href: "#evermind-alt" },
        { label: "Cost calculator (TCO)", href: "#tco" },
      ],
    },
    {
      id: "04",
      title: "USE CASES",
      links: [
        { label: "Healthcare", href: "#healthcare" },
        { label: "Customer Support", href: "#support" },
        { label: "Sales", href: "#sales" },
        { label: "Voice AI", href: "#voice-ai" },
        { label: "Multi-Agent", href: "#multi-agent" },
        { label: "Personalized Workflow", href: "#vity-workflow" },
        { label: "Professional Roles", href: "#vity-roles" },
      ],
    },
    {
      id: "05",
      title: "COMPANY",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Learn", href: "#learn" },
        { label: "Research", href: "#research" },
        { label: "Products", href: "#products" },
        { label: "Press", href: "#press" },
        { label: "Press Kit", href: "#press-kit" },
      ],
    },
    {
      id: "06",
      title: "VITY",
      sections: [
        {
          items: [
            { label: "Apps", href: "#vity-apps" },
            { label: "Echo", href: "#echo" },
            { label: "WaitPro", href: "#waitpro" },
            { label: "Summarize For Me", href: "#summarize" },
            { label: "Sound Like Me", href: "#sound-like-me" },
            { label: "Skills", href: "#skills" },
          ],
        },
        {
          heading: "Integrations",
          items: [
            { label: "OpenClaw", href: "#vity-openclaw" },
            { label: "Hermes", href: "#vity-hermes" },
            { label: "Chrome Extension", href: "#vity-extension" },
          ],
        },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      data-name="MaximemFooter"
      className={`w-full pt-8 pb-14 sm:pb-20 relative overflow-hidden transition-colors duration-300 ${
        isLight ? "bg-[#ffffff] text-[#09090b]" : "bg-[#0e0e0d] text-white"
      }`}
    >
      {/* ── Outer Alignment Container: Unified 1240px container width ── */}
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── Bordered Technical Panel Container ── */}
        <div
          className={`w-full rounded-[6px] relative overflow-hidden transition-all duration-700 ease-out ${
            isLight
              ? "border border-[#e4e4e7] bg-[#fafafa] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              : "border border-white/[0.09] bg-[#111110] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Subtle architectural dot grid inside the card */}
          <div
            className={`absolute inset-0 pointer-events-none ${isLight ? "opacity-20" : "opacity-30"}`}
            style={{
              backgroundImage: isLight
                ? "radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)"
                : "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* ════════════════════════════════════════════════════════════════
              MAIN CONTENT: 7-COLUMN UNIFIED GRID ON DESKTOP
              Col 0: Brand (240px)
              Col 1: 01 Product (1fr)
              Col 2: 02 Developers (1fr)
              Col 3: 03 Compare (1.6fr)
              Col 4: 04 Use Cases (1.1fr)
              Col 5: 05 Company (0.8fr)
              Col 6: 06 Vity (1.1fr)
          ════════════════════════════════════════════════════════════════ */}
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,1.1fr)] w-full">
            {/* ── Left Brand Column ── */}
            <div
              className={`p-6 sm:p-8 lg:p-8 xl:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r transition-all duration-600 ease-out delay-100 ${
                isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className="flex flex-col items-start space-y-4">
                {/* Maximem Logo */}
                <a
                  href="#hero"
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <div className="relative size-[33px] shrink-0">
                    <svg
                      className="size-full"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path d={svgPaths.p807ad80} fill="#f26522" />
                    </svg>
                  </div>
                  <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[21px] font-semibold tracking-[-0.02em] ${
                    isLight ? "text-[#09090b]" : "text-white"
                  }`}>
                    Maximem
                  </span>
                </a>

                {/* Description */}
                <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13px] leading-[21px] max-w-[260px] ${
                  isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                }`}>
                  AI memory infrastructure. Maximem Synap gives agents persistent
                  context management. Maximem Vity gives individuals private,
                  cross-app AI memory.
                </p>

                {/* Dashboard Technical Cards */}
                <div className="grid grid-cols-2 gap-2 w-full pt-1">
                  {/* Synap Dashboard */}
                  <a
                    href="https://synap.maximem.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between px-2.5 py-2 border rounded-[4px] transition-all duration-150 overflow-hidden ${
                      isLight
                        ? "bg-white hover:bg-[#f4f4f5] border-[#e4e4e7] hover:border-[#d4d4d8] shadow-sm"
                        : "bg-[#161615] hover:bg-[#1a1a19] border-white/[0.08] hover:border-white/[0.2]"
                    }`}
                  >
                    <div className="flex flex-col text-left overflow-hidden min-w-0 pr-1">
                      <span className={`font-['Geist_Variable:Medium',sans-serif] text-[10px] font-medium whitespace-nowrap tracking-tight ${
                        isLight ? "text-[#09090b]" : "text-white"
                      }`}>
                        Synap Dashboard
                      </span>
                      <span className="font-['Geist_Mono_Variable:Regular',sans-serif] font-mono text-[8.5px] text-[#71717a] group-hover:text-[#f26522] transition-colors whitespace-nowrap">
                        synap.maximem.ai
                      </span>
                    </div>
                  </a>

                  {/* Vity Dashboard */}
                  <a
                    href="https://app.maximem.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between px-2.5 py-2 border rounded-[4px] transition-all duration-150 overflow-hidden ${
                      isLight
                        ? "bg-white hover:bg-[#f4f4f5] border-[#e4e4e7] hover:border-[#d4d4d8] shadow-sm"
                        : "bg-[#161615] hover:bg-[#1a1a19] border-white/[0.08] hover:border-white/[0.2]"
                    }`}
                  >
                    <div className="flex flex-col text-left overflow-hidden min-w-0 pr-1">
                      <span className={`font-['Geist_Variable:Medium',sans-serif] text-[10px] font-medium whitespace-nowrap tracking-tight ${
                        isLight ? "text-[#09090b]" : "text-white"
                      }`}>
                        Vity Dashboard
                      </span>
                      <span className="font-['Geist_Mono_Variable:Regular',sans-serif] font-mono text-[8.5px] text-[#71717a] group-hover:text-[#f26522] transition-colors whitespace-nowrap">
                        app.maximem.ai
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-6">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com/maximem_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className={`transition-colors duration-150 p-1 ${
                    isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#71717a] hover:text-white"
                  }`}
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                    <path
                      d={svgPaths.pba1780}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/maximem"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`transition-colors duration-150 p-1 ${
                    isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#71717a] hover:text-white"
                  }`}
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                    <path
                      d={svgPaths.p204bd7c0}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPaths.pad25e80}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPaths.p127a4d00}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── 6 Navigation Columns (direct grid children, no wrapper) ── */}
            {navColumns.map((col, idx) => (
              <div
                key={col.id}
                className={`p-5 sm:p-6 lg:px-5 xl:px-6 lg:py-9 flex flex-col items-start min-w-0 lg:border-r last:lg:border-r-0 transition-all duration-600 ease-out ${
                  isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${150 + idx * 50}ms` }}
              >
                {/* Technical Section Header */}
                <div className="flex items-center gap-2 mb-4 pb-1">
                  <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
                  <span className={`font-['Geist_Mono_Variable:Regular',sans-serif] font-mono text-[12px] font-medium tracking-wider uppercase ${
                    isLight ? "text-[#09090b]" : "text-white/90"
                  }`}>
                    {col.title}
                  </span>
                </div>

                {/* Column Links */}
                {col.links && (
                  <ul className="flex flex-col space-y-2.5 w-full">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`font-['Geist_Variable:Regular',sans-serif] text-[13px] transition-colors duration-150 leading-[19px] block ${
                            isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Vity Sections with Integrations subcategory */}
                {col.sections && (
                  <div className="flex flex-col w-full">
                    <ul className="flex flex-col space-y-2.5 w-full">
                      {col.sections[0].items.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className={`font-['Geist_Variable:Regular',sans-serif] text-[13px] transition-colors duration-150 leading-[19px] block ${
                              isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
                            }`}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* Spacer and Subheading */}
                    <div className="mt-5 pt-3 flex flex-col space-y-2.5 w-full">
                      <span className={`font-['Geist_Variable:Medium',sans-serif] text-[13px] font-medium ${
                        isLight ? "text-[#09090b]" : "text-white/80"
                      }`}>
                        {col.sections[1].heading}
                      </span>
                      {col.sections[1].items.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className={`font-['Geist_Variable:Regular',sans-serif] text-[13px] transition-colors duration-150 leading-[19px] block ${
                            isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ════════════════════════════════════════════════════════════════
              BOTTOM BAR
              Left: Copyright
              Center: Legal Links separated by '|'
              Right: 'BUILT FOR A MORE CAPABLE TOMORROW.'
          ════════════════════════════════════════════════════════════════ */}
          <div
            className={`relative z-10 px-6 sm:px-8 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t transition-all duration-600 ease-out delay-400 ${
              isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
            } ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {/* Copyright */}
            <p className={`font-['Geist_Variable:Regular',sans-serif] text-[13px] order-2 md:order-1 text-center md:text-left ${
              isLight ? "text-[#71717a]" : "text-[#71717a]"
            }`}>
              © 2026 Maximem. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className={`flex flex-wrap items-center justify-center gap-y-1.5 text-[13px] order-1 md:order-2 ${
              isLight ? "text-[#71717a]" : "text-[#71717a]"
            }`}>
              <a
                href="#privacy"
                className={`transition-colors duration-150 ${isLight ? "hover:text-[#09090b]" : "hover:text-white"}`}
              >
                Privacy Policy
              </a>
              <span className={`mx-2.5 sm:mx-3 select-none ${isLight ? "text-black/15" : "text-white/20"}`}>|</span>
              <a
                href="#terms"
                className={`transition-colors duration-150 ${isLight ? "hover:text-[#09090b]" : "hover:text-white"}`}
              >
                Terms of Service
              </a>
              <span className={`mx-2.5 sm:mx-3 select-none ${isLight ? "text-black/15" : "text-white/20"}`}>|</span>
              <a
                href="#security"
                className={`transition-colors duration-150 ${isLight ? "hover:text-[#09090b]" : "hover:text-white"}`}
              >
                Security
              </a>
              <span className={`mx-2.5 sm:mx-3 select-none ${isLight ? "text-black/15" : "text-white/20"}`}>|</span>
              <a
                href="#glossary"
                className={`transition-colors duration-150 ${isLight ? "hover:text-[#09090b]" : "hover:text-white"}`}
              >
                Glossary
              </a>
              <span className={`mx-2.5 sm:mx-3 select-none ${isLight ? "text-black/15" : "text-white/20"}`}>|</span>
              <a
                href="#contact"
                className={`transition-colors duration-150 ${isLight ? "hover:text-[#09090b]" : "hover:text-white"}`}
              >
                Contact
              </a>
            </div>

            {/* Far Right Closing Tagline with Orange Marker */}
            <div className={`hidden lg:flex items-center pl-6 border-l min-h-[42px] order-3 ${
              isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
            }`}>
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-[2px] bg-[#f26522] shrink-0" />
                <div className={`font-['Geist_Mono_Variable:Regular',sans-serif] font-mono text-[10.5px] uppercase tracking-[1.5px] leading-[15px] font-medium whitespace-nowrap ${
                  isLight ? "text-[#52525b]" : "text-[#a1a1aa]"
                }`}>
                  BUILT FOR A MORE CAPABLE TOMORROW.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
