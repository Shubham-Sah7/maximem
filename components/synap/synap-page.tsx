"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import FooterSection from "@/components/website-clone/footer-section";
import svgPaths from "@/components/website-clone/svg-paths";
import HowSynapWorks from "@/components/website-clone/how-synap-works";
import HomepageNavbar from "@/components/website-clone/homepage-navbar";
import InteractiveWaveCanvas from "@/components/website-clone/interactive-wave-canvas";
import BlogSection from "@/components/website-clone/blog-section";
import { motion, AnimatePresence } from "framer-motion";
import { FrameworkLogo } from "./framework-logos";
import { SynapHero } from "./synap-hero";
import { SynapAnimationProvider } from "./synap-animations";

export default function SynapPage() {
  const [isLight, setIsLight] = useState(false);
  const [activeCodeLang, setActiveCodeLang] = useState<"python" | "typescript" | "curl">("python");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  // Section 04 Dynamic SVG Connectors
  const sec04WrapperRef = useRef<HTMLDivElement>(null);
  const pill1Ref = useRef<HTMLDivElement>(null);
  const pill2Ref = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const [connectorPaths, setConnectorPaths] = useState<{
    d1: string;
    start1: { x: number; y: number };
    dot1: { x: number; y: number };
    d2: string;
    start2: { x: number; y: number };
    dot2: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    const updatePaths = () => {
      if (!sec04WrapperRef.current || !pill1Ref.current || !pill2Ref.current || !line1Ref.current || !line2Ref.current) return;
      const wrapRect = sec04WrapperRef.current.getBoundingClientRect();
      const p1 = pill1Ref.current.getBoundingClientRect();
      const p2 = pill2Ref.current.getBoundingClientRect();
      const l1 = line1Ref.current.getBoundingClientRect();
      const l2 = line2Ref.current.getBoundingClientRect();

      // Pill 1 center-right
      const x1 = p1.right - wrapRect.left;
      const y1 = p1.top + p1.height / 2 - wrapRect.top;

      // Target 1: line 6 in code window, 14px before await
      const endX1 = l1.left - wrapRect.left - 14;
      const endY1 = l1.top + l1.height / 2 - wrapRect.top;

      const dx1 = Math.max(16, endX1 - x1);
      const dy1 = Math.abs(endY1 - y1);
      const r1 = Math.max(4, Math.min(14, dx1 * 0.25, dy1 * 0.45));
      const midX1 = x1 + Math.max(r1 * 1.5, dx1 * 0.42);
      const isDown1 = endY1 >= y1;
      const d1 = isDown1
        ? `M ${x1} ${y1} H ${midX1 - r1} A ${r1} ${r1} 0 0 1 ${midX1} ${y1 + r1} V ${endY1 - r1} A ${r1} ${r1} 0 0 0 ${midX1 + r1} ${endY1} H ${endX1}`
        : `M ${x1} ${y1} H ${midX1 - r1} A ${r1} ${r1} 0 0 0 ${midX1} ${y1 - r1} V ${endY1 + r1} A ${r1} ${r1} 0 0 1 ${midX1 + r1} ${endY1} H ${endX1}`;

      // Pill 2 center-right
      const x2 = p2.right - wrapRect.left;
      const y2 = p2.top + p2.height / 2 - wrapRect.top;

      // Target 2: line 14 in code window, 14px before context
      const endX2 = l2.left - wrapRect.left - 14;
      const endY2 = l2.top + l2.height / 2 - wrapRect.top;

      const dx2 = Math.max(16, endX2 - x2);
      const dy2 = Math.abs(endY2 - y2);
      const r2 = Math.max(4, Math.min(14, dx2 * 0.25, dy2 * 0.45));
      const midX2 = x2 + Math.max(r2 * 1.5, dx2 * 0.42);
      const isDown2 = endY2 >= y2;
      const d2 = isDown2
        ? `M ${x2} ${y2} H ${midX2 - r2} A ${r2} ${r2} 0 0 1 ${midX2} ${y2 + r2} V ${endY2 - r2} A ${r2} ${r2} 0 0 0 ${midX2 + r2} ${endY2} H ${endX2}`
        : `M ${x2} ${y2} H ${midX2 - r2} A ${r2} ${r2} 0 0 0 ${midX2} ${y2 - r2} V ${endY2 + r2} A ${r2} ${r2} 0 0 1 ${midX2 + r2} ${endY2} H ${endX2}`;

      setConnectorPaths({
        d1,
        start1: { x: x1, y: y1 },
        dot1: { x: endX1, y: endY1 },
        d2,
        start2: { x: x2, y: y2 },
        dot2: { x: endX2, y: endY2 },
      });
    };

    updatePaths();
    const t1 = setTimeout(updatePaths, 80);
    const t2 = setTimeout(updatePaths, 300);
    const t3 = setTimeout(updatePaths, 800);

    window.addEventListener("resize", updatePaths);
    const ro = new ResizeObserver(updatePaths);
    if (sec04WrapperRef.current) ro.observe(sec04WrapperRef.current);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", updatePaths);
      ro.disconnect();
    };
  }, []);


  // Synchronize theme with home page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("maximem_theme");
      if (saved === "light") {
        localStorage.setItem("maximem_theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      localStorage.setItem("maximem_theme", next ? "light" : "dark");
      return next;
    });
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };


  const pythonSnippet = `from maximem_synap import MaximemSynapSDK

sdk = MaximemSynapSDK(api_key="your-api-key")

# 1. Send the conversation as it happens (write)
await sdk.conversation.record_message(
    conversation_id="mon-standup",
    user_id="alice",
    role="user",
    content="I'm migrating our auth service to OAuth2 this sprint."
)

# 2. Ask what is known before your agent replies (read)
context = await sdk.fetch(
    conversation_id="fri-review",
    user_id="alice",
    search_query="what is alice working on?",
)

print(context.formatted_context)`;

  const typescriptSnippet = `import { MaximemSynapSDK } from "@maximem/synap";

const sdk = new MaximemSynapSDK({ apiKey: "your-api-key" });

// 1. Send the conversation as it happens (write)
await sdk.conversation.recordMessage({
  conversationId: "mon-standup",
  userId: "alice",
  role: "user",
  content: "I'm migrating our auth service to OAuth2 this sprint.",
});

// 2. Ask what is known before your agent replies (read)
const context = await sdk.fetch({
  conversationId: "fri-review",
  userId: "alice",
  searchQuery: "what is alice working on?",
});

console.log(context.formattedContext);`;

  const curlSnippet = `# 1. Write turn
curl -X POST https://api.maximem.ai/v1/synap/messages \\
  -H "Authorization: Bearer $MAXIMEM_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "conversation_id": "mon-standup",
    "user_id": "alice",
    "role": "user",
    "content": "I am migrating our auth service to OAuth2 this sprint."
  }'

# 2. Read context
curl -X GET "https://api.maximem.ai/v1/synap/context?user_id=alice&query=what+is+alice+working+on" \\
  -H "Authorization: Bearer $MAXIMEM_API_KEY"`;

  return (
    <SynapAnimationProvider>
    <div
      className={`min-h-screen w-full relative transition-colors duration-300 font-sans selection:bg-[#f26522]/30 selection:text-white ${
        isLight
          ? "maximem-light-theme bg-[#ffffff] text-[#111114]"
          : "maximem-dark-theme bg-[#1B1B19] text-[#f4f4f5]"
      }`}
    >

      {/* ── Fixed Top Navigation (Synchronized with Homepage & Vity) ── */}
      <HomepageNavbar isLight={isLight} onToggleTheme={toggleTheme} />


      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION: "Build AI that remembers, learns and gets better over time."
          Animated via GSAP + Framer Motion
      ───────────────────────────────────────────────────────────── */}
      <SynapHero isLight={isLight} />



      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: FORGETTING
          "What it looks like when your agent forgets"
      ───────────────────────────────────────────────────────────── */}
      <section id="problem" data-synap-section className="w-full py-24 lg:py-28 bg-[#0E0E0D] scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-[768px] mx-auto mb-12 sm:mb-14">
            <div data-synap-eyebrow className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
              <span className="text-[#f26522]">01</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#a1a1aa]">FORGETTING</span>
            </div>
            <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] leading-[1.12] text-white text-center">
              What it looks like when your agent forgets
            </h2>
            <p data-synap-text className="mt-3.5 sm:mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] text-center max-w-[672px] mx-auto">
              Memory failure isn’t a small UX issue. It shows up as repeated questions, broken promises, bloated prompts, and lost user trust.
            </p>
          </div>

          {/* 2x2 Grid with Exact Figma Card Specs (574px x 284px, rounded-[14px], bg rgba(19,19,17,0.9)) */}
          <div data-synap-cards className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
            
            {/* Card 01: Re-asking for information */}
            <div data-synap-card className="relative p-7 sm:p-8 rounded-[14px] bg-[#131311]/90 border border-white/[0.08] backdrop-blur-[12px] hover:border-white/[0.16] shadow-sm hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden min-h-[284px]">
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left Column: Text & Symptom */}
                <div className="sm:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-['Geist',sans-serif] font-bold text-[19px] text-white tracking-[-0.475px] leading-[24px] mb-2.5">
                      It re-asks for information the user already gave
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13.5px] text-[#9F9FA9] leading-[22px] tracking-normal">
                      After a user spends 15 minutes sharing their requirements, the agent asks the same questions again — leading to instant frustration.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 pt-2 font-['Geist',sans-serif] text-[11px] tracking-[0.55px] uppercase text-[#9F9FA9]">
                    <span>SYMPTOM: HIGH BOUNCE &amp; SESSION DROP-OFF</span>
                  </div>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="sm:col-span-5 flex items-center justify-center py-2 sm:py-0">
                  <div className="w-[160px] h-[109px] rounded-[8px] bg-white/[0.02] border border-white/[0.04] p-2 flex flex-col justify-center gap-2.5">
                    {/* Bubble 1 */}
                    <div className="w-[152px] h-[46px] flex items-center gap-2.5 px-3 py-2 rounded-[4px] bg-[#16161B] border border-white/[0.08] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                      <div className="size-6 rounded-full bg-zinc-800/90 border border-white/[0.08] flex items-center justify-center text-zinc-300 shrink-0">
                        <svg className="size-3 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="text-[11px] font-['Geist',sans-serif] text-[#D4D4D8] leading-[14px]">
                        <div>What stack are</div>
                        <div>you using?</div>
                      </div>
                    </div>

                    {/* Bubble 2 */}
                    <div className="w-[152px] h-[46px] flex items-center gap-2.5 px-3 py-2 rounded-[4px] bg-[#16161B] border border-white/[0.08] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                      <div className="size-6 rounded-full bg-zinc-800/90 border border-white/[0.08] flex items-center justify-center text-zinc-300 shrink-0">
                        <svg className="size-3 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="text-[11px] font-['Geist',sans-serif] text-[#D4D4D8] leading-[14px]">
                        <div>What stack are</div>
                        <div>you using?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Recommends what was rejected */}
            <div data-synap-card className="relative p-7 sm:p-8 rounded-[14px] bg-[#131311]/90 border border-white/[0.08] backdrop-blur-[12px] hover:border-white/[0.16] shadow-sm hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden min-h-[284px]">
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left Column: Text & Symptom */}
                <div className="sm:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-['Geist',sans-serif] font-bold text-[19px] text-white tracking-[-0.475px] leading-[24px] mb-2.5">
                      It recommends what the user already rejected
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13.5px] text-[#9F9FA9] leading-[22px] tracking-normal">
                      An agent without negative preference retention keeps suggesting the same options, even after the user said no.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 pt-2 font-['Geist',sans-serif] text-[11px] tracking-[0.55px] uppercase text-[#9F9FA9]">
                    <span>SYMPTOM: REVENUE CHURN &amp; LOSS OF AUTHORITY</span>
                  </div>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="sm:col-span-5 flex items-center justify-center py-2 sm:py-0">
                  <div className="relative w-[198px] h-[154px] mx-auto">
                    {/* Stacked background layer 2 */}
                    <div className="absolute inset-0 translate-x-3 -translate-y-3 rounded-[14px] bg-[#121217]/50 border border-white/[0.04] pointer-events-none" />
                    
                    {/* Stacked background layer 1 */}
                    <div className="absolute inset-0 translate-x-1.5 -translate-y-1.5 rounded-[14px] bg-[#141419]/70 border border-white/[0.06] pointer-events-none" />

                    {/* Front Card */}
                    <div className="relative z-10 w-[198px] h-[138px] rounded-[14px] bg-[#1B1B19] border border-white/[0.1] p-3 flex flex-col gap-2 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                      {/* Row 1: AWS Rejected */}
                      <div className="flex items-center justify-between p-1.5 rounded-[8px] bg-white/[0.03]">
                        <div className="flex items-center gap-2 text-[12px] font-medium text-[#E4E4E7]">
                          <svg className="size-4 text-[#D4D4D8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                          </svg>
                          <span className="font-['Geist',sans-serif]">AWS</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-[5px] text-[10px] font-['Geist',sans-serif] border border-[#F26522]/40 bg-[#F26522]/10 text-[#F26522]">
                          Rejected
                        </span>
                      </div>

                      {/* Row 2: GCP Rejected */}
                      <div className="flex items-center justify-between p-1.5 rounded-[8px] bg-white/[0.03]">
                        <div className="flex items-center gap-2 text-[12px] font-medium text-[#E4E4E7]">
                          <svg className="size-4 text-[#D4D4D8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2 2 22h20L12 2Z" />
                          </svg>
                          <span className="font-['Geist',sans-serif]">GCP</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-[5px] text-[10px] font-['Geist',sans-serif] border border-[#F26522]/40 bg-[#F26522]/10 text-[#F26522]">
                          Rejected
                        </span>
                      </div>

                      {/* Row 3: Azure */}
                      <div className="flex items-center justify-between p-1.5 rounded-[8px] opacity-50">
                        <div className="flex items-center gap-2 text-[12px] font-medium text-[#9F9FA9]">
                          <svg className="size-4 text-[#00BCFF]" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12,2 22,12 12,22 2,12" />
                          </svg>
                          <span className="font-['Geist',sans-serif]">Azure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: Contradicts itself across sessions */}
            <div data-synap-card className="relative p-7 sm:p-8 rounded-[14px] bg-[#131311]/90 border border-white/[0.08] backdrop-blur-[12px] hover:border-white/[0.16] shadow-sm hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden min-h-[284px]">
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left Column: Text & Symptom */}
                <div className="sm:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-['Geist',sans-serif] font-bold text-[19px] text-white tracking-[-0.475px] leading-[24px] mb-2.5">
                      It contradicts itself across sessions
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13.5px] text-[#9F9FA9] leading-[22px] tracking-normal">
                      The agent makes a promise in one conversation and denies it in the next — leaving the user stranded.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 pt-2 font-['Geist',sans-serif] text-[11px] tracking-[0.55px] uppercase text-[#9F9FA9]">
                    <span>SYMPTOM: REOPENED SUPPORT TICKETS &amp; ESCALATIONS</span>
                  </div>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="sm:col-span-5 flex items-center justify-center py-2 sm:py-0">
                  <div className="w-[198px] flex flex-col gap-2.5">
                    {/* Bubble 1: Promise */}
                    <div className="w-[198px] h-[58px] p-3 rounded-[4px] bg-[#141418] border border-white/[0.08] flex items-center gap-2.5 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                      <div className="size-6 rounded-[7px] bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-300 shrink-0">
                        <svg className="size-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="12" x="3" y="6" rx="2" />
                          <circle cx="9" cy="12" r="1" fill="currentColor" />
                          <circle cx="15" cy="12" r="1" fill="currentColor" />
                          <path d="M12 2v4M2 12h1M21 12h1" />
                        </svg>
                      </div>
                      <div className="text-[11px] font-['Geist',sans-serif] text-[#E4E4E7] leading-[15px]">
                        <div>Sure, we support</div>
                        <div>refunds within 30 days.</div>
                      </div>
                    </div>

                    {/* Bubble 2: Denial */}
                    <div className="w-[198px] h-[58px] p-3 rounded-[4px] bg-[#141418] border border-white/[0.08] flex items-center gap-2.5 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                      <div className="size-6 rounded-[7px] bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-300 shrink-0">
                        <svg className="size-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="12" x="3" y="6" rx="2" />
                          <circle cx="9" cy="12" r="1" fill="currentColor" />
                          <circle cx="15" cy="12" r="1" fill="currentColor" />
                          <path d="M12 2v4M2 12h1M21 12h1" />
                        </svg>
                      </div>
                      <div className="text-[11px] font-['Geist',sans-serif] text-[#E4E4E7] leading-[15px]">
                        <div>Refunds are not</div>
                        <div>available.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 04: Stuffs everything into prompt */}
            <div data-synap-card className="relative p-7 sm:p-8 rounded-[14px] bg-[#131311]/90 border border-white/[0.08] backdrop-blur-[12px] hover:border-white/[0.16] shadow-sm hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden min-h-[284px]">
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left Column: Text & Symptom */}
                <div className="sm:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-['Geist',sans-serif] font-bold text-[19px] text-white tracking-[-0.475px] leading-[24px] mb-2.5">
                      It stuffs everything into the prompt to compensate
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[13.5px] text-[#9F9FA9] leading-[22px] tracking-normal">
                      Engineers end up sending huge chunks of chat history with every request, causing slow replies, higher costs, and lost context in the middle.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 pt-2 font-['Geist',sans-serif] text-[11px] tracking-[0.55px] uppercase text-[#9F9FA9]">
                    <span>SYMPTOM: 80% WASTED TOKEN BUDGET &amp; SLOW REPLIES</span>
                  </div>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="sm:col-span-5 flex items-center justify-center py-2 sm:py-0">
                  <div className="relative w-[198px] h-[141px] mx-auto">
                    {/* Stack layer 2 */}
                    <div className="absolute inset-0 translate-x-3 -translate-y-3 rounded-[14px] bg-[#121217]/50 border border-white/[0.04] pointer-events-none" />
                    
                    {/* Stack layer 1 */}
                    <div className="absolute inset-0 translate-x-1.5 -translate-y-1.5 rounded-[14px] bg-[#141419]/70 border border-white/[0.06] pointer-events-none" />

                    {/* Front Document */}
                    <div className="relative z-10 w-[198px] h-[125px] rounded-[4px] bg-[#1B1B19] border border-white/[0.1] p-3.5 flex flex-col justify-between shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                      {/* Code skeleton lines */}
                      <div className="flex flex-col gap-1.5 opacity-60">
                        <div className="h-1.5 rounded-full bg-[#52525C] w-[134px]" />
                        <div className="h-1.5 rounded-full bg-[#3F3F46] w-[100px]" />
                        <div className="h-1.5 rounded-full bg-[#52525C] w-[168px]" />
                        <div className="h-1.5 rounded-full bg-[#3F3F46] w-[112px]" />
                      </div>

                      {/* Warning Token Badge */}
                      <div className="self-end mt-3 px-2.5 py-1 rounded-[7px] bg-[#1A1410] border border-[#F26522]/60 shadow-sm flex items-center gap-1.5 shrink-0">
                        <svg className="size-3 text-[#F26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span className="text-[10.5px] font-['Geist',sans-serif] font-semibold text-[#F26522]">
                          50,000+ tokens
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Core Truth Alert Bar */}
          <div data-synap-callout className="mt-12 p-5 rounded-[8px] bg-[#141412] border border-white/[0.08] flex items-center justify-center text-center max-w-[896px] mx-auto shadow-sm">
            <p className="text-[14.5px] leading-[22px] font-normal text-center">
              <span className="text-[#F26522] font-semibold mr-1.5">The core truth:</span>
              <span className="text-[#D4D4D8]">Memory failure is not an interface nitpick. It is an agent capability ceiling.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: THE ALTERNATIVES MATRIX
          "Every alternative to memory has been tried"
      ───────────────────────────────────────────────────────────── */}
      <section data-synap-section className="w-full py-24 lg:py-28 bg-[#1B1B19]">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10 sm:mb-12">
            <div data-synap-eyebrow className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
              <span className="text-[#f26522]">02</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#a1a1aa]">THE ALTERNATIVES</span>
            </div>
            <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] leading-[1.12] text-white">
              Every alternative to memory has been tried
            </h2>
            <p data-synap-text className="mt-3.5 sm:mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] max-w-[760px]">
              Teams spend months stitching vector databases, prompt bloat, and fine-tuning. None solve the actual problem.
            </p>
          </div>

          <div data-synap-table className="w-full overflow-x-auto rounded-[14px] border border-white/[0.08] bg-[#141413] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
            <table className="w-full text-left text-[13.5px] border-collapse min-w-[740px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-4.5 px-6 font-semibold text-[#D4D4D8] uppercase tracking-[0.6px] text-[11.5px] font-['Geist',sans-serif] w-[18%]">
                    Approach
                  </th>
                  <th className="py-4.5 px-6 font-semibold text-[#D4D4D8] uppercase tracking-[0.6px] text-[11.5px] font-['Geist',sans-serif] w-[27%]">
                    Why Teams Try It
                  </th>
                  <th className="py-4.5 px-6 font-semibold text-[#D4D4D8] uppercase tracking-[0.6px] text-[11.5px] font-['Geist',sans-serif] w-[31%]">
                    Where It Breaks Down
                  </th>
                  <th className="py-4.5 px-6 font-semibold uppercase tracking-[0.6px] text-[11.5px] font-['Geist',sans-serif] w-[24%] bg-[#1a1410]/60 border-l border-[#f26522]/20 text-white">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#f26522]" />
                      <span>Maximem Synap</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                <tr data-synap-table-row className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4.5 px-6 font-medium text-white">Vector DBs / RAG</td>
                  <td className="py-4.5 px-6 text-[#9F9FA9]">Good at document retrieval from static corpora</td>
                  <td className="py-4.5 px-6 text-[rgba(255,120,135,0.9)]">No temporal order, no deduplication, retrieves out-of-date facts with equal confidence</td>
                  <td className="py-4.5 px-6 text-[#34d399] font-medium bg-[#1a1410]/30 border-l border-[#f26522]/15">
                    Auto-resolves recency &amp; entity conflicts
                  </td>
                </tr>
                <tr data-synap-table-row className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4.5 px-6 font-medium text-white">Prompt Stuffing</td>
                  <td className="py-4.5 px-6 text-[#9F9FA9]">Zero setup; dump whole chat history into prompt</td>
                  <td className="py-4.5 px-6 text-[rgba(255,120,135,0.9)]">Exploding token bills, slow latency, lost-in-the-middle context degradation</td>
                  <td className="py-4.5 px-6 text-[#34d399] font-medium bg-[#1a1410]/30 border-l border-[#f26522]/15">
                    Ranked &lt;200 tokens injected right before turn
                  </td>
                </tr>
                <tr data-synap-table-row className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4.5 px-6 font-medium text-white">Fine-Tuning</td>
                  <td className="py-4.5 px-6 text-[#9F9FA9]">Embeds knowledge directly into weights</td>
                  <td className="py-4.5 px-6 text-[rgba(255,120,135,0.9)]">Static, slow, catastrophic forgetting, cannot delete or isolate per-user facts</td>
                  <td className="py-4.5 px-6 text-[#34d399] font-medium bg-[#1a1410]/30 border-l border-[#f26522]/15">
                    Instant writes, point deletion &amp; tenant isolation
                  </td>
                </tr>
                <tr data-synap-table-row className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4.5 px-6 font-medium text-white">Agent Scratchpads</td>
                  <td className="py-4.5 px-6 text-[#9F9FA9]">Agents take notes in local key-value or JSON</td>
                  <td className="py-4.5 px-6 text-[rgba(255,120,135,0.9)]">Fails across sessions, no cross-agent sharing, no semantic retrieval or decay</td>
                  <td className="py-4.5 px-6 text-[#34d399] font-medium bg-[#1a1410]/30 border-l border-[#f26522]/15">
                    3-tier persistent memory across fleet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: THE THREE LAYERS (Stacked Cards Layout)
          "Memory is three layers, not one bucket."
      ───────────────────────────────────────────────────────────── */}
      <section id="the-three-layers" data-synap-section className="w-full py-20 sm:py-24 lg:py-28 bg-[#0E0E0D] scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Eyebrow, Heading, Paragraph & Callout */}
            <div data-synap-col-left className="lg:col-span-5 flex flex-col justify-center">

              {/* Eyebrow Label */}
              <div data-synap-eyebrow className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
                <span className="text-[#f26522]">03</span>
                <span className="text-zinc-600">/</span>
                <span className="text-[#a1a1aa]">THE THREE LAYERS</span>
              </div>

              {/* Heading */}
              <h2 data-synap-heading className="font-['Geist',sans-serif] text-[34px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12] mb-6">
                Memory is three layers, not one bucket.
              </h2>

              {/* Body */}
              <p data-synap-text className="font-['Geist',sans-serif] text-[15px] sm:text-[16px] text-[#9F9FA9] leading-[26px] tracking-[-0.012em] mb-7 max-w-[480px]">
                Different types of information live at different timescales. Session memory dies when the conversation closes. Agent memory compounds across every user and task. Organizational memory governs compliance, product knowledge, and shared rules across your entire agent fleet.
              </p>

              {/* Callout Box */}
              <div className="p-5 sm:p-5.5 rounded-[14px] border border-white/[0.08] bg-[#141413] max-w-[480px] shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                <p className="font-['Geist',sans-serif] text-[13.5px] sm:text-[14px] text-[#D4D4D8] leading-[1.6]">
                  <span className="text-[#f26522] font-semibold">Most memory tools</span> give you only the raw session. The compounding advantage is unified agent and organisational memory.
                </p>
              </div>
            </div>

            {/* Right Column: Stacked Layer Cards */}
            <div data-synap-col-right data-synap-cards className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              
              {/* Card 1: Organisational */}
              <div data-synap-card className="group rounded-[16px] border border-white/[0.08] bg-[#141413] hover:border-white/[0.16] hover:bg-[#161614] transition-all duration-300 p-5.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-[4px] text-[10.5px] font-bold tracking-wider bg-white/[0.06] text-white/90 border border-white/[0.08]">
                      LAYER 01
                    </span>
                    <span className="text-[11.5px] text-[#71717A] tracking-wider uppercase font-medium">
                      // MULTI-TENANT
                    </span>
                  </div>
                  <span className="text-[12px] text-[#f26522] flex items-center gap-1.5 font-medium">
                    <span className="size-2 rounded-full bg-[#f26522] inline-block shadow-[0_0_8px_rgba(242,101,34,0.6)]" />
                    Permanent
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="size-13 sm:size-14 rounded-[14px] bg-[#1a1816] border border-white/[0.12] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="size-[22px] text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <path d="M9 22v-4h6v4" />
                      <path d="M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
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
              <div data-synap-card className="group rounded-[16px] border border-white/[0.08] bg-[#141413] hover:border-white/[0.16] hover:bg-[#161614] transition-all duration-300 p-5.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-[4px] text-[10.5px] font-bold tracking-wider bg-white/[0.06] text-white/90 border border-white/[0.08]">
                      LAYER 02
                    </span>
                    <span className="text-[11.5px] text-[#71717A] tracking-wider uppercase font-medium">
                      // PER-USER
                    </span>
                  </div>
                  <span className="text-[12px] text-[#f26522] flex items-center gap-1.5 font-medium">
                    <span className="size-2 rounded-full bg-[#f26522] inline-block shadow-[0_0_8px_rgba(242,101,34,0.6)]" />
                    Cross-Session
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="size-13 sm:size-14 rounded-[14px] bg-[#1a1816] border border-white/[0.12] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="size-[22px] text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
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
              <div data-synap-card className="group rounded-[16px] border border-white/[0.08] bg-[#141413] hover:border-white/[0.16] hover:bg-[#161614] transition-all duration-300 p-5.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-[4px] text-[10.5px] font-bold tracking-wider bg-white/[0.06] text-white/90 border border-white/[0.08]">
                      LAYER 03
                    </span>
                    <span className="text-[11.5px] text-[#71717A] tracking-wider uppercase font-medium">
                      // REAL-TIME
                    </span>
                  </div>
                  <span className="text-[12px] text-[#34d399] flex items-center gap-1.5 font-medium">
                    <span className="size-2 rounded-full bg-[#10b981] inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    &lt;15ms Working
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="size-13 sm:size-14 rounded-[14px] bg-[#1a1816] border border-white/[0.12] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="size-[22px] text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
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

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: THE PRODUCT (Pixel-perfect Master Alignment)
          "Maximem Synap, in two calls"
      ───────────────────────────────────────────────────────────── */}
      <section id="the-product" data-synap-section className="relative w-full py-24 lg:py-28 bg-[#1B1B19] overflow-hidden scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Tag, Heading, & 2 Feature Cards */}
            <div data-synap-col-left className="lg:col-span-5 flex flex-col justify-between">
              
              {/* Header */}
              <div className="mb-6">
                <div data-synap-eyebrow className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
                  <span className="text-[#f26522]">04</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[#a1a1aa]">THE PRODUCT</span>
                </div>
                <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[46px] font-medium tracking-[-0.03em] text-white leading-[1.12] mb-3">
                  Maximem Synap, in two calls
                </h2>
                <p data-synap-text className="font-['Geist',sans-serif] text-[15px] sm:text-[16px] text-[#a1a1aa] leading-[26px] tracking-[-0.012em]">
                  Memory is not a storage problem alone. It is an active context-management problem.
                </p>
              </div>

              {/* Card 1: What it is */}
              <div data-synap-info-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-7 mb-5 transition-all duration-300 hover:border-white/[0.16] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
                <h3 className="text-[19px] font-medium text-white tracking-tight mb-2.5 font-['Geist',sans-serif]">
                  What it is
                </h3>
                <p className="text-[13.5px] text-[#a1a1aa] leading-[22px] font-['Geist',sans-serif]">
                  You send Synap the conversation as it happens. Before your agent speaks, you ask Synap what is relevant. Everything else is handled.
                </p>
              </div>

              {/* Card 2: What you do not build */}
              <div data-synap-info-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-7 transition-all duration-300 hover:border-white/[0.16] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
                <h3 className="text-[19px] font-medium text-white tracking-tight mb-2.5 font-['Geist',sans-serif]">
                  What you do not build
                </h3>
                <p className="text-[13.5px] text-[#a1a1aa] leading-[22px] font-['Geist',sans-serif]">
                  No vector database to run. No extraction pipeline to maintain. No relevance tuning. Two SDK calls.
                </p>
              </div>

            </div>

            {/* Right Column: Connectors + Code Window */}
            <div
              ref={sec04WrapperRef}
              data-synap-col-right
              className="lg:col-span-7 flex flex-col lg:flex-row items-stretch gap-0 relative pt-2 lg:pt-16"
            >
              {/* Dynamic SVG Connectors overlay (Desktop only) */}
              <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible">
                <defs>
                  <filter id="synapGlowOrange" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {connectorPaths && (
                  <>
                    {/* Path 1: 01 Write -> record_message */}
                    <path
                      d={connectorPaths.d1}
                      fill="none"
                      stroke="#f26522"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                    <path
                      d={connectorPaths.d1}
                      fill="none"
                      stroke="#ff7a29"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="16 34"
                      className="animate-synap-connector-flow"
                      filter="url(#synapGlowOrange)"
                    />
                    <circle
                      cx={connectorPaths.start1.x}
                      cy={connectorPaths.start1.y}
                      r="3.5"
                      fill="#f26522"
                    />
                    <circle
                      cx={connectorPaths.start1.x}
                      cy={connectorPaths.start1.y}
                      r="7.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.45"
                    />
                    <circle
                      cx={connectorPaths.dot1.x}
                      cy={connectorPaths.dot1.y}
                      r="4.5"
                      fill="#ff9444"
                      filter="url(#synapGlowOrange)"
                    />
                    <circle
                      cx={connectorPaths.dot1.x}
                      cy={connectorPaths.dot1.y}
                      r="8.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.6"
                    />
                    <circle
                      cx={connectorPaths.dot1.x}
                      cy={connectorPaths.dot1.y}
                      r="12"
                      stroke="#f26522"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                      className="animate-pulse"
                    />

                    {/* Path 2: 02 Read -> fetch */}
                    <path
                      d={connectorPaths.d2}
                      fill="none"
                      stroke="#f26522"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                    <path
                      d={connectorPaths.d2}
                      fill="none"
                      stroke="#ff7a29"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="16 34"
                      className="animate-synap-connector-flow"
                      style={{ animationDelay: "-0.7s" }}
                      filter="url(#synapGlowOrange)"
                    />
                    <circle
                      cx={connectorPaths.start2.x}
                      cy={connectorPaths.start2.y}
                      r="3.5"
                      fill="#f26522"
                    />
                    <circle
                      cx={connectorPaths.start2.x}
                      cy={connectorPaths.start2.y}
                      r="7.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.45"
                    />
                    <circle
                      cx={connectorPaths.dot2.x}
                      cy={connectorPaths.dot2.y}
                      r="4.5"
                      fill="#ff9444"
                      filter="url(#synapGlowOrange)"
                    />
                    <circle
                      cx={connectorPaths.dot2.x}
                      cy={connectorPaths.dot2.y}
                      r="8.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.6"
                    />
                    <circle
                      cx={connectorPaths.dot2.x}
                      cy={connectorPaths.dot2.y}
                      r="12"
                      stroke="#f26522"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                      className="animate-pulse"
                    />
                  </>
                )}
              </svg>

              {/* Middle Connectors Column (01 Write & 02 Read) */}
              <div className="hidden lg:flex flex-col w-[150px] shrink-0 pt-2 relative z-20">
                {/* 01 Write node */}
                <div style={{ marginTop: '72px' }} className="flex flex-col items-start">
                  <div
                    ref={pill1Ref}
                    className="box-border inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[6px] border border-[#F26522]/90 bg-[#131215]"
                  >
                    <span className="font-['Geist',sans-serif] text-[#F26522] font-bold text-[13px] leading-tight">01</span>
                    <span className="font-['Geist',sans-serif] text-white font-bold text-[14px] leading-tight tracking-[-0.35px]">Write</span>
                  </div>
                  <p className="font-['Geist',sans-serif] text-[12px] text-[#9F9FA9] leading-[16px] mt-2 max-w-[102px]">
                    Send conversation in real-time.
                  </p>
                </div>

                {/* 02 Read node */}
                <div style={{ marginTop: '92px' }} className="flex flex-col items-start">
                  <div
                    ref={pill2Ref}
                    className="box-border inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[6px] border border-[#F26522]/90 bg-[#131215]"
                  >
                    <span className="font-['Geist',sans-serif] text-[#F26522] font-bold text-[13px] leading-tight">02</span>
                    <span className="font-['Geist',sans-serif] text-white font-bold text-[14px] leading-tight tracking-[-0.35px]">Read</span>
                  </div>
                  <p className="font-['Geist',sans-serif] text-[12px] text-[#9F9FA9] leading-[16px] mt-2 max-w-[137px]">
                    Get ranked, formatted memory for your prompt.
                  </p>
                </div>
              </div>

              {/* Mobile / Tablet inline badges */}
              <div className="flex lg:hidden items-center justify-between gap-4 py-4 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border border-[#f26522]/90 bg-[#131215]">
                    <span className="font-['Geist',sans-serif] text-[#F26522] font-bold text-[12px]">01</span>
                    <span className="font-['Geist',sans-serif] text-white font-bold text-[13px]">Write</span>
                  </span>
                  <span className="text-[11.5px] text-[#9F9FA9]">Send in real-time</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border border-[#f26522]/90 bg-[#131215]">
                    <span className="font-['Geist',sans-serif] text-[#F26522] font-bold text-[12px]">02</span>
                    <span className="font-['Geist',sans-serif] text-white font-bold text-[13px]">Read</span>
                  </span>
                  <span className="text-[11.5px] text-[#9F9FA9]">Get ranked memory</span>
                </div>
              </div>

              {/* Code Window */}
              <div className="flex-1 min-w-0 rounded-[14px] border border-white/[0.08] bg-[#111110] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] relative overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="size-2.5 rounded-full bg-[#ff5f56]/80" />
                    <div className="size-2.5 rounded-full bg-[#febc2e]/80" />
                    <div className="size-2.5 rounded-full bg-[#27c93f]/80" />
                    <span className="ml-3 font-['Geist',sans-serif] text-[12px] text-zinc-400">
                      quickstart.py
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyCode(pythonSnippet)}
                    className="p-1.5 rounded-[6px] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer group flex items-center gap-1.5"
                    title="Copy Code"
                  >
                    {copiedCode ? (
                      <span className="text-[11px] text-white font-['Geist',sans-serif] font-medium flex items-center gap-1">
                        <svg className="size-3.5 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                      </span>
                    ) : (
                      <svg className="size-4 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Window Code Content */}
                <div className="p-5 sm:p-6 pl-7 sm:pl-8 font-['Geist',sans-serif] text-[11.5px] sm:text-[12px] leading-[22px] overflow-x-auto text-zinc-300">
                  {/* Line 1 */}
                  <div data-synap-code-line className="flex items-center whitespace-nowrap">
                    <span className="text-[#f26522]">from</span>
                    <span className="text-zinc-200 ml-1.5">maximem_synap</span>
                    <span className="text-[#f26522] ml-1.5">import</span>
                    <span className="text-zinc-200 ml-1.5">MaximemSynapSDK</span>
                  </div>

                  {/* Line 2 */}
                  <div className="h-[22px]" />

                  {/* Line 3 */}
                  <div data-synap-code-line className="flex items-center whitespace-nowrap">
                    <span className="text-zinc-200">sdk = MaximemSynapSDK(api_key=</span>
                    <span className="text-[#ff7849]">&quot;your-api-key&quot;</span>
                    <span className="text-zinc-200">)</span>
                  </div>

                  {/* Line 4 */}
                  <div className="h-[22px]" />

                  {/* Line 5 */}
                  <div data-synap-code-line className="text-zinc-500 whitespace-nowrap">
                    # 1. Send the conversation as it happens (write)
                  </div>

                  {/* Line 6 - Connected to 01 Write */}
                  <div ref={line1Ref} data-synap-code-line className="flex items-center relative whitespace-nowrap">
                    <span className="text-[#f26522] font-medium">await</span>
                    <span className="text-zinc-200 ml-1.5">sdk.conversation.record_message(</span>
                  </div>

                  {/* Line 7 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">conversation_id=</span>
                    <span className="text-[#ff7849]">&quot;mon-standup&quot;</span>
                    <span className="text-zinc-400">,</span>
                  </div>

                  {/* Line 8 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">user_id=</span>
                    <span className="text-[#ff7849]">&quot;alice&quot;</span>
                    <span className="text-zinc-400">,</span>
                  </div>

                  {/* Line 9 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">role=</span>
                    <span className="text-[#ff7849]">&quot;user&quot;</span>
                    <span className="text-zinc-400">,</span>
                  </div>

                  {/* Line 10 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">content=</span>
                    <span className="text-[#ff7849]">&quot;I&apos;m migrating our auth service to OAuth2 this sprint.&quot;</span>
                  </div>

                  {/* Line 11 */}
                  <div data-synap-code-line className="text-zinc-200 whitespace-nowrap">
                    )
                  </div>

                  {/* Line 12 */}
                  <div className="h-[22px]" />

                  {/* Line 13 */}
                  <div data-synap-code-line className="text-zinc-500 whitespace-nowrap">
                    # 2. Ask what is known before your agent replies (read)
                  </div>

                  {/* Line 14 - Connected to 02 Read */}
                  <div ref={line2Ref} data-synap-code-line className="flex items-center relative whitespace-nowrap">
                    <span className="text-zinc-200">context = </span>
                    <span className="text-[#f26522] font-medium ml-1.5">await</span>
                    <span className="text-zinc-200 ml-1.5">sdk.fetch(</span>
                  </div>

                  {/* Line 15 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">conversation_id=</span>
                    <span className="text-[#ff7849]">&quot;fri-review&quot;</span>
                    <span className="text-zinc-400">,</span>
                  </div>

                  {/* Line 16 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">user_id=</span>
                    <span className="text-[#ff7849]">&quot;alice&quot;</span>
                    <span className="text-zinc-400">,</span>
                  </div>

                  {/* Line 17 */}
                  <div data-synap-code-line className="pl-6 flex items-center whitespace-nowrap">
                    <span className="text-zinc-300">search_query=</span>
                    <span className="text-[#ff7849]">&quot;what is alice working on?&quot;</span>
                    <span className="text-zinc-400">,</span>
                  </div>

                  {/* Line 18 */}
                  <div data-synap-code-line className="text-zinc-200 whitespace-nowrap">
                    )
                  </div>

                  {/* Line 19 */}
                  <div className="h-[22px]" />

                  {/* Line 20 */}
                  <div data-synap-code-line className="flex items-center whitespace-nowrap">
                    <span className="text-[#f26522]">print</span>
                    <span className="text-zinc-200">(context.formatted_context)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: CAPABILITIES (Pixel-perfect master consistency)
          "What changes when your agent can remember"
      ───────────────────────────────────────────────────────────── */}
      <section data-synap-section className="relative w-full py-24 lg:py-28 bg-[#0E0E0D] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div data-synap-eyebrow className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
              <span className="text-[#f26522]">05</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#a1a1aa]">CAPABILITIES</span>
            </div>
            <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12]">
              What changes when your agent can remember
            </h2>
            <p data-synap-text className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] text-[#a1a1aa] leading-[26px] tracking-[-0.012em] max-w-[620px] mx-auto">
              From individual users to your entire organization, memory turns stateless models into systems that understand context.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div data-synap-cards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* ──────── CARD 01: Remembers every user ──────── */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-6 flex flex-col justify-between min-h-[410px] transition-all duration-300 hover:border-white/[0.16] relative overflow-hidden group shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="font-['Geist',sans-serif] text-[18px] font-semibold text-white tracking-[-0.45px] mb-2 leading-[25px]">
                  Remembers every user
                </h3>
                <p className="font-['Geist',sans-serif] text-[13px] text-[#9CA3AF] leading-[21px]">
                  Recall across sessions, channels, and months — not just the last twenty turns.
                </p>
              </div>

              {/* Stacked Profile Cards Visual */}
              <div className="relative mt-auto pt-6 flex flex-col justify-end">
                {/* Decorative background ghost card outline for depth */}
                <div className="absolute top-2 right-1 w-[90%] h-[120px] rounded-[14px] border border-white/[0.05] bg-white/[0.015] rotate-2 pointer-events-none -z-10" />

                {/* Forefront Card: Sarah Chen */}
                <div className="relative z-20 rounded-[14px] bg-[#181820] border border-white/[0.14] p-3.5 flex items-center gap-3.5 shadow-[0px_14px_30px_rgba(0,0,0,0.7)] backdrop-blur-[12px]">
                  <div className="size-9 rounded-full bg-[#f26522]/15 border border-[#f26522]/40 flex items-center justify-center text-[#f26522] shrink-0">
                    <svg className="size-4.5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Geist',sans-serif] text-[12.5px] font-semibold text-white tracking-[-0.31px] leading-[19px]">Sarah Chen</div>
                    <div className="font-['Geist',sans-serif] text-[11px] text-[#9CA3AF] leading-[16px] truncate">Prefers detailed answers</div>
                  </div>
                </div>

                {/* Middle Card: Uses Slack for updates */}
                <div className="relative z-10 -mt-2.5 rounded-[14px] bg-[#131319]/90 border border-white/[0.06] p-3 flex items-center gap-3 opacity-60">
                  <div className="size-7 rounded-full bg-[#27272A] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <span className="font-['Geist',sans-serif] text-[10px] font-semibold text-[#9F9FA9]">SC</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Geist',sans-serif] text-[11px] font-medium text-[#D4D4D8] leading-[16px]">Sp:</div>
                    <div className="font-['Geist',sans-serif] text-[10px] text-[#71717B] leading-[15px] truncate">Uses Slack for updates</div>
                  </div>
                </div>

                {/* Bottom Card: Works on growth */}
                <div className="relative z-0 -mt-2.5 rounded-[14px] bg-[#0E0E13]/80 border border-white/[0.04] p-2.5 flex items-center gap-3 opacity-30">
                  <div className="size-7 rounded-full bg-[#18181B] border border-white/[0.04] flex items-center justify-center shrink-0">
                    <svg className="size-3.5 text-[#71717B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Geist',sans-serif] text-[11px] font-medium text-[#9F9FA9] leading-[16px]">Sarah</div>
                    <div className="font-['Geist',sans-serif] text-[10px] text-[#52525C] leading-[15px] truncate">Works on growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ──────── CARD 02: Remembers your organization ──────── */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-6 flex flex-col justify-between min-h-[410px] transition-all duration-300 hover:border-white/[0.16] relative overflow-hidden group shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="font-['Geist',sans-serif] text-[18px] font-semibold text-white tracking-[-0.45px] mb-2 leading-[25px]">
                  Remembers your organization
                </h3>
                <p className="font-['Geist',sans-serif] text-[13px] text-[#9CA3AF] leading-[21px]">
                  Shared policies, product knowledge, and team context for every agent that should see them.
                </p>
              </div>

              {/* Acme Corp Directory Card Visual */}
              <div className="mt-auto pt-6">
                <div className="rounded-[14px] bg-[#121217] border border-white/[0.08] p-4 flex flex-col gap-2.5 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  {/* Header Row */}
                  <div className="flex items-center gap-2.5 pb-2">
                    <div className="size-7 rounded-[7px] border border-[#f26522]/30 flex items-center justify-center shrink-0">
                      <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="font-['Geist',sans-serif] text-[13px] font-semibold text-white tracking-[-0.325px]">Acme Corp</span>
                  </div>

                  {/* Menu Rows */}
                  <div className="flex flex-col gap-2 pt-0.5">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-[#71717B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-['Geist',sans-serif] text-[12px] text-[#D4D4D8] font-normal leading-[18px]">Product knowledge</span>
                      </div>
                      <svg className="size-3 text-[#52525C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-[#71717B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="font-['Geist',sans-serif] text-[12px] text-[#D4D4D8] font-normal leading-[18px]">Security policies</span>
                      </div>
                      <svg className="size-3 text-[#52525C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-[#71717B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-['Geist',sans-serif] text-[12px] text-[#D4D4D8] font-normal leading-[18px]">Team context</span>
                      </div>
                      <svg className="size-3 text-[#52525C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-[#71717B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                        </svg>
                        <span className="font-['Geist',sans-serif] text-[12px] text-[#D4D4D8] font-normal leading-[18px]">Pricing and contracts</span>
                      </div>
                      <svg className="size-3 text-[#52525C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ──────── CARD 03: Without the token bill ──────── */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-6 flex flex-col justify-between min-h-[410px] transition-all duration-300 hover:border-white/[0.16] relative overflow-hidden group shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="font-['Geist',sans-serif] text-[18px] font-semibold text-white tracking-[-0.45px] mb-2 leading-[25px]">
                  Without the token bill
                </h3>
                <p className="font-['Geist',sans-serif] text-[13px] text-[#9CA3AF] leading-[21px]">
                  Context stays lean as conversations grow, so cost doesn&apos;t balloon and quality doesn&apos;t rot.
                </p>
              </div>

              {/* Before vs With Synap Visual */}
              <div className="mt-auto pt-6 flex items-center justify-between gap-2.5">
                {/* Before Card */}
                <div className="rounded-[14px] bg-[#121217] border border-white/[0.06] p-3 flex-1 flex flex-col gap-2">
                  <span className="font-['Geist',sans-serif] text-[11px] font-medium text-[#9F9FA9] tracking-[-0.275px] leading-[16px]">Before</span>
                  <div className="flex flex-col gap-2 pt-1">
                    {[
                      { w: "w-[75%]" },
                      { w: "w-[65%]" },
                      { w: "w-[85%]" },
                      { w: "w-[60%]" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-1.5">
                        <div className={`h-2 rounded-full bg-zinc-800/90 ${row.w}`} />
                        <div className="size-3.5 rounded-full bg-zinc-800/90 border border-white/[0.05] flex items-center justify-center shrink-0">
                          <svg className="size-2 text-[#71717B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orange Connecting Arrow */}
                <span className="text-[#f26522] font-semibold text-[15px] shrink-0 select-none">→</span>

                {/* With Synap Card */}
                <div className="rounded-[14px] bg-[#161620] border border-white/[0.12] p-3 flex-1 flex flex-col gap-2 shadow-[0px_8px_20px_rgba(0,0,0,0.5)]">
                  <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-white tracking-[-0.275px] leading-[16px]">With Synap</span>
                  <div className="flex flex-col gap-2.5 pt-1">
                    {[
                      { w: "w-[80%]" },
                      { w: "w-[85%]" },
                      { w: "w-[70%]" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-1.5">
                        <div className={`h-2.5 rounded-full bg-zinc-700/60 ${row.w}`} />
                        <div className="size-4 rounded-full bg-[#f26522] flex items-center justify-center shrink-0">
                          <svg className="size-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ──────── CARD 04: Fast enough for voice ──────── */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-6 flex flex-col justify-between min-h-[410px] transition-all duration-300 hover:border-white/[0.16] relative overflow-hidden group shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="font-['Geist',sans-serif] text-[18px] font-semibold text-white tracking-[-0.45px] mb-2 leading-[25px]">
                  Fast enough for voice
                </h3>
                <p className="font-['Geist',sans-serif] text-[13px] text-[#9CA3AF] leading-[21px]">
                  Context is pre-fetched before your agent asks, under 15ms at P75, in-conversation.
                </p>
              </div>

              {/* Voice Audio Waveform & Retrieval Visual */}
              <div className="mt-auto pt-6">
                <div className="rounded-[18px] bg-[#121217] border border-white/[0.08] p-4 flex flex-col gap-3.5 relative shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  {/* Speech bubble notch on bottom-left */}
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#121217] border-b border-l border-white/[0.08] rotate-[-45deg]" />

                  {/* Mic & Waveform Row */}
                  <div className="flex items-center gap-3">
                    {/* Crisp Mic Button */}
                    <div className="size-[44px] rounded-full border border-[#f26522] shadow-sm flex items-center justify-center shrink-0">
                      <svg className="size-5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" />
                      </svg>
                    </div>

                    {/* Audio Soundwave Frequency Bars */}
                    <div className="flex items-center gap-[3px] flex-1 h-9 justify-center">
                      {[8, 14, 22, 14, 28, 18, 32, 24, 16, 26, 34, 20, 14, 24, 16, 10, 6].map((h, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${h}px` }}
                          className="w-[2.5px] rounded-full bg-zinc-600/50"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Retrieval Pill Badge */}
                  <div className="flex justify-end pt-1 relative z-10">
                    <div className="rounded-[10px] bg-[#191922] border border-white/[0.12] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] px-3 py-1.5 flex items-center gap-2">
                      <svg className="size-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <span className="font-['Geist',sans-serif] text-[11.5px] text-[#E4E4E7] tracking-[-0.2875px] leading-[17px]">&lt;15ms P75 retrieval</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: HOW SYNAP ACTUALLY WORKS (Architecture Canvas)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-20 bg-[#1B1B19]">
        <HowSynapWorks isLight={isLight} />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07: THE 5-PHASE LIFECYCLE (Master consistency)
          "What a memory layer has to do, and keep doing"
      ───────────────────────────────────────────────────────────── */}
      <section id="lifecycle" data-synap-section className="relative w-full py-24 lg:py-28 bg-[#0E0E0D] overflow-hidden scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div data-synap-eyebrow className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
              <span className="text-[#f26522]">07</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#a1a1aa]">THE 5-PHASE LIFECYCLE</span>
            </div>
            <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12]">
              What a memory layer has to do, and <span className="text-[#f26522]">keep doing</span>
            </h2>
            <p data-synap-text className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] text-[#a1a1aa] leading-[26px] tracking-[-0.012em] max-w-[574px] mx-auto">
              A turn does not land in a database. It goes through a complete real-time lifecycle.
            </p>
          </div>

          {/* 5-Phase Horizontal Connected Stepper Row */}
          <div data-synap-phase-container className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 mb-10 overflow-x-auto pb-4 pt-2 scrollbar-none">
            {[
              {
                id: 0,
                num: "01",
                name: "Ingestion",
                desc: "Triages what to store",
                icon: (
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                    <path d="M4 5v4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
                    <path d="M4 9v4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V9" />
                    <path d="M4 13v4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-4" />
                  </svg>
                ),
              },
              {
                id: 1,
                num: "02",
                name: "Entity Resolution",
                desc: "Deduplicates identities",
                icon: (
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                id: 2,
                num: "03",
                name: "Temporal Logic",
                desc: "Weights recency vs stale",
                icon: (
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                ),
              },
              {
                id: 3,
                num: "04",
                name: "Forgetting",
                desc: "Handles retractions",
                icon: (
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                id: 4,
                num: "05",
                name: "Anticipation",
                desc: "Pre-fetches context",
                icon: (
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                ),
              },
            ].map((phase, idx, arr) => {
              const isActive = activePhase === phase.id;
              return (
                <div data-synap-phase-step key={phase.id} className="flex items-center shrink-0">
                  <button
                    type="button"
                    onClick={() => setActivePhase(phase.id)}
                    className="flex items-center gap-3 text-left group cursor-pointer transition-all duration-200"
                  >
                    {/* Squircle Icon Container */}
                    <div
                      className={`size-[44px] sm:size-[46px] rounded-[13px] border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "border-white/30 bg-white/10 text-white shadow-sm"
                          : "border-white/[0.08] bg-[#161615] text-[#a1a1aa] group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      {phase.icon}
                    </div>

                    {/* Step Text Info */}
                    <div className="flex flex-col pr-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`size-1.5 rounded-full ${isActive ? "bg-white" : "bg-zinc-600"}`} />
                      </div>
                      <span
                        className={`text-[13px] sm:text-[13.5px] font-medium tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {phase.name}
                      </span>
                      <span className="text-[11px] text-[#71717a] whitespace-nowrap mt-0.5">
                        {phase.desc}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Interactive Phase Display Card */}
          <div className="p-6 sm:p-9 lg:p-10 rounded-[14px] border border-white/[0.08] bg-[#161615] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] relative overflow-hidden">
            {/* Subtle localized architectural dot texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.085) 1.1px, transparent 1.1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left Column: Phase Description & Key Outcomes */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-2 font-['Geist',sans-serif] text-[11px] text-[#f26522] uppercase tracking-[0.16em] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#f26522] inline-block shrink-0" />
                  INGESTION PIPELINE
                </div>
                <h3 className="text-[24px] sm:text-[30px] font-medium text-white tracking-tight leading-[1.18]">
                  Deciding what is signal
                  <br />
                  vs ephemeral noise
                </h3>
                <p className="text-[14px] text-[#a1a1aa] leading-relaxed">
                  Not every word in a conversation belongs in permanent memory. Synap&apos;s ingestion filter separates transient pleasantries (&quot;Thanks!&quot;, &quot;Sounds great&quot;) from actionable constraints (&quot;I work on the East Coast and need meetings before 2 PM&quot;). Writes return immediately and process asynchronously.
                </p>

                <div className="pt-2 flex flex-col gap-2.5">
                  <div className="text-[10.5px] font-['Geist',sans-serif] text-zinc-500 uppercase tracking-[0.18em] font-medium mb-1">
                    KEY OUTCOME
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-zinc-300">
                    <span className="size-[17px] rounded-full border border-[#f26522] flex items-center justify-center text-[#f26522] text-[10px] shrink-0 font-bold">✓</span>
                    <span>Only relevant facts are stored</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-zinc-300">
                    <span className="size-[17px] rounded-full border border-[#f26522] flex items-center justify-center text-[#f26522] text-[10px] shrink-0 font-bold">✓</span>
                    <span>Noise is filtered automatically</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-zinc-300">
                    <span className="size-[17px] rounded-full border border-[#f26522] flex items-center justify-center text-[#f26522] text-[10px] shrink-0 font-bold">✓</span>
                    <span>Real-time and non-blocking</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3-Column Diagram (Conversation -> Ingestion Filter -> Stored Memory) */}
              <div className="lg:col-span-7 relative">
                
                {/* Embedded SVG Curved Connectors between columns (desktop) */}
                <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 620 300" fill="none">
                  {/* Top connector from Col 1 to Col 2 (Pleasantry) */}
                  <path d="M 188 64 C 205 64, 210 64, 228 64" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Middle active connector from Col 1 to Col 2 (Actionable fact) */}
                  <path d="M 188 152 L 228 152" stroke="#f26522" strokeWidth="2" />
                  
                  {/* S-curve active connector from Ingestion Filter to Stored Memory */}
                  <path d="M 392 152 C 418 152, 418 78, 442 78" stroke="#f26522" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Bottom connector from Col 1 to Col 2 (General request) */}
                  <path d="M 188 238 C 205 238, 210 238, 228 238" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 relative z-10">
                  
                  {/* Column 1: Conversation */}
                  <div className="flex flex-col gap-2.5">
                    <div className="text-[12px] font-medium text-white tracking-tight mb-0.5">
                      Conversation
                    </div>

                    {/* Bubble 1 */}
                    <div className="p-3 rounded-[12px] bg-[#141413] border border-white/[0.07] text-[11.5px] text-[#a1a1aa] leading-snug shadow-sm">
                      Sounds great, thanks!
                    </div>

                    {/* Bubble 2: Active fact */}
                    <div className="p-3 rounded-[12px] bg-[#1e1713] border border-white/[0.14] text-[11.5px] text-zinc-200 leading-snug shadow-sm">
                      I work on the <span className="text-white font-medium">East Coast</span> and need meetings before <span className="text-white font-medium">2 PM</span>.
                    </div>

                    {/* Bubble 3 */}
                    <div className="p-3 rounded-[12px] bg-[#141413] border border-white/[0.07] text-[11.5px] text-[#a1a1aa] leading-snug shadow-sm">
                      Can you share the deck?
                    </div>
                  </div>

                  {/* Column 2: Ingestion Filter (Enclosed Box) */}
                  <div className="rounded-[10px] bg-[#111110] border border-white/[0.08] p-3 flex flex-col gap-2.5 shadow-lg relative">
                    <div className="text-[12.5px] font-medium text-white tracking-tight mb-0.5">
                      Ingestion Filter
                    </div>

                    {/* Filter Item 1 */}
                    <div className="p-2.5 rounded-[10px] bg-[#141413] border border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div>
                        <div className="text-zinc-300 font-medium text-[11px]">Pleasantry</div>
                        <div className="text-zinc-500 text-[10px]">(ignored)</div>
                      </div>
                      <div className="size-4.5 rounded-full bg-white/[0.06] text-zinc-400 flex items-center justify-center text-[9px] font-bold">
                        ✕
                      </div>
                    </div>

                    {/* Filter Item 2: Active fact */}
                    <div className="p-2.5 rounded-[10px] bg-[#1e1713] border border-white/[0.14] flex items-center justify-between text-[11px] shadow-sm">
                      <div>
                        <div className="text-white font-medium text-[11px]">Actionable fact</div>
                        <div className="text-[#f26522] text-[10px] font-medium">(stored)</div>
                      </div>
                      <div className="size-5 rounded-full bg-[#f26522] text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                        ✓
                      </div>
                    </div>

                    {/* Filter Item 3 */}
                    <div className="p-2.5 rounded-[10px] bg-[#141413] border border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div>
                        <div className="text-zinc-300 font-medium text-[11px]">General request</div>
                        <div className="text-zinc-500 text-[10px]">(ignored)</div>
                      </div>
                      <div className="size-4.5 rounded-full bg-white/[0.06] text-zinc-400 flex items-center justify-center text-[9px] font-bold">
                        ✕
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Stored Memory */}
                  <div className="flex flex-col gap-2.5">
                    <div className="text-[12px] font-medium text-white tracking-tight mb-0.5">
                      Stored Memory
                    </div>

                    {/* Stored Item 1 (Active) */}
                    <div className="p-3 rounded-[12px] bg-[#1e1713] border border-white/[0.14] flex items-center justify-between text-[11.5px] shadow-sm">
                      <div>
                        <div className="font-medium text-white text-[11.5px] leading-tight">User availability</div>
                        <div className="text-[#a1a1aa] text-[10.5px] mt-0.5">East Coast, before 2 PM</div>
                      </div>
                      <div className="size-5 rounded-full bg-[#f26522] text-white flex items-center justify-center text-[10px] shrink-0 font-bold shadow-sm">
                        ✓
                      </div>
                    </div>

                    {/* Stored Item 2 */}
                    <div className="p-2.5 rounded-[10px] bg-[#141413] border border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div>
                        <div className="text-zinc-300 font-medium text-[11px]">Pleasantries</div>
                        <div className="text-zinc-500 text-[10px]">Not stored</div>
                      </div>
                      <div className="size-4.5 rounded-full bg-white/[0.06] text-zinc-400 flex items-center justify-center text-[9px] font-bold">
                        ✕
                      </div>
                    </div>

                    {/* Stored Item 3 */}
                    <div className="p-2.5 rounded-[10px] bg-[#141413] border border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div>
                        <div className="text-zinc-300 font-medium text-[11px]">Deck request</div>
                        <div className="text-zinc-500 text-[10px]">Not stored</div>
                      </div>
                      <div className="size-4.5 rounded-full bg-white/[0.06] text-zinc-400 flex items-center justify-center text-[9px] font-bold">
                        ✕
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 08: THREE-TIER CONSOLIDATION (Master consistency)
          "Memory that is maintained, not just stored"
      ───────────────────────────────────────────────────────────── */}
      <section id="consolidation" data-synap-section className="relative w-full py-24 lg:py-28 bg-[#1B1B19] scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div data-synap-eyebrow className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
            <span className="text-[#f26522]">08</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#a1a1aa]">THREE-TIER CONSOLIDATION</span>
          </div>
          <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12]">
            Memory that is maintained,
            <br />
            not just <span className="text-[#f26522]">stored</span>
          </h2>
          <p className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] text-[#a1a1aa] leading-[26px] tracking-[-0.012em] max-w-[620px] mx-auto">
            Context moves through a natural cycle — from recent, to recurring,
            <br className="hidden sm:inline" /> to long-term memory, so your agent actually remembers.
          </p>
        </div>

        {/* 3 Consolidation Cards Grid */}
        <div data-synap-cards className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto z-10 w-full">
          
          {/* Card 1: Meditation */}
          <div data-synap-card className="w-full h-[200px] sm:h-[208px] rounded-[14px] border border-white/[0.08] bg-[#161615] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] group hover:border-white/[0.16] transition-all duration-300">
            {/* Right Photo with Smooth Gradient Blend */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none overflow-hidden rounded-r-[14px]">
              <img
                src="/synap/consolidation_card_photo1.png"
                alt="Meditation desk notebook"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#161615] via-[#161615]/70 to-transparent pointer-events-none" />
            </div>

            {/* Left Content (Text) */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-[10.5px] font-['Geist',sans-serif] font-medium text-[#a1a1aa] uppercase tracking-[1.4px] mb-1">
                SHORT-TERM
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-medium text-white tracking-tight mb-1.5 font-['Geist',sans-serif]">
                Meditation
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#a1a1aa] font-normal leading-[1.35] max-w-[150px]">
                Every few hours,
                <br />
                a light pass
              </p>
            </div>

            {/* Bottom Left Icon Squircle */}
            <div className="relative z-10 size-[36px] rounded-[10px] bg-[#141413] border border-white/[0.08] flex items-center justify-center text-[#f26522] shadow-sm group-hover:border-[#f26522]/40 transition-colors">
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 15 14" />
              </svg>
            </div>
          </div>

          {/* Card 2: Nap */}
          <div data-synap-card className="w-full h-[200px] sm:h-[208px] rounded-[14px] border border-white/[0.08] bg-[#161615] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] group hover:border-white/[0.16] transition-all duration-300">
            {/* Right Photo with Smooth Gradient Blend */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none overflow-hidden rounded-r-[14px]">
              <img
                src="/synap/consolidation_card_photo2.png"
                alt="Nap cozy bed"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#161615] via-[#161615]/70 to-transparent pointer-events-none" />
            </div>

            {/* Left Content (Text) */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-[10.5px] font-['Geist',sans-serif] font-medium text-[#a1a1aa] uppercase tracking-[1.4px] mb-1">
                MID-TERM
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-medium text-white tracking-tight mb-1.5 font-['Geist',sans-serif]">
                Nap
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#a1a1aa] font-normal leading-[1.35] max-w-[150px]">
                Once a day,
                <br />
                deeper
              </p>
            </div>

            {/* Bottom Left Icon Squircle */}
            <div className="relative z-10 size-[36px] rounded-[10px] bg-[#141413] border border-white/[0.08] flex items-center justify-center text-[#f26522] shadow-sm group-hover:border-[#f26522]/40 transition-colors">
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
          </div>

          {/* Card 3: Sleep */}
          <div data-synap-card className="w-full h-[200px] sm:h-[208px] rounded-[14px] border border-white/[0.08] bg-[#161615] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] group hover:border-white/[0.16] transition-all duration-300">
            {/* Right Photo with Smooth Gradient Blend */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none overflow-hidden rounded-r-[14px]">
              <img
                src="/synap/consolidation_card_photo3.png"
                alt="Sleep sunset window"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#161615] via-[#161615]/70 to-transparent pointer-events-none" />
            </div>

            {/* Left Content (Text) */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-[10.5px] font-['Geist',sans-serif] font-medium text-[#a1a1aa] uppercase tracking-[1.4px] mb-1">
                LONG-TERM
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-medium text-white tracking-tight mb-1.5 font-['Geist',sans-serif]">
                Sleep
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#a1a1aa] font-normal leading-[1.35] max-w-[150px]">
                Your quiet hours: deep consolidation and conscious forgetting
              </p>
            </div>

            {/* Bottom Left Icon Squircle */}
            <div className="relative z-10 size-[36px] rounded-[10px] bg-[#141413] border border-white/[0.08] flex items-center justify-center text-[#f26522] shadow-sm group-hover:border-[#f26522]/40 transition-colors">
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
                <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                <path d="M4 15v4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-12 text-center relative z-10">
          <a
            href="https://docs.maximem.ai/consolidation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#f26522] hover:text-[#ff8243] transition-colors group cursor-pointer"
          >
            <span className="border-b border-[#f26522] pb-0.5 group-hover:border-[#ff8243]">
              How consolidation works
            </span>
            <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09: SCOPING (Master consistency)
          "The right memories reach the right tenant, automatically"
      ───────────────────────────────────────────────────────────── */}
      <section id="scoping" data-synap-section className="relative w-full py-24 lg:py-28 bg-[#0E0E0D] select-none scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* ── Section Header ── */}
          <div className="w-full mb-10 sm:mb-12">
            <div data-synap-eyebrow className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
              <span className="text-[#f26522]">09</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#a1a1aa]">SCOPING &amp; ISOLATION</span>
            </div>

            <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] leading-[1.12] text-white max-w-[840px]">
              The right memories reach the right tenant, <span className="text-[#f26522]">automatically</span>
            </h2>

            <p data-synap-text className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] max-w-[720px]">
              A request sees its own level and every level above it. Never below. Never sideways. One person&apos;s memory does not reach another person&apos;s session, and one tenant&apos;s does not reach another tenant&apos;s.
            </p>
          </div>

          {/* ── Main Architecture Card: Scoping Hierarchy & Isolation Architecture ── */}
          <div data-synap-info-card className="w-full rounded-[14px] bg-[#141413] border border-white/[0.08] p-6 sm:p-8 lg:p-9 relative shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
            
            {/* Outer Card Top Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f26522] inline-block shrink-0" />
                <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-[1.4px]">
                  SCOPING HIERARCHY &amp; ISOLATION ARCHITECTURE
                </span>
              </div>
              <div className="font-['Geist',sans-serif] text-[11px] font-medium text-[#71717a] uppercase tracking-[1.4px]">
                ORGANIZATION &rarr; WORKSPACE &rarr; USER
              </div>
            </div>

            {/* Inner Two-Column Architecture Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              
              {/* Left Column: Context Inheritance Traversal Stack */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center justify-between mb-4 font-['Geist',sans-serif]">
                  <span className="text-[10.5px] font-semibold tracking-[1.4px] text-[#71717a] uppercase">
                    ONLY SEES ITS OWN AND ABOVE (CONTEXT INHERITANCE)
                  </span>
                  <span className="text-[10.5px] font-medium text-[#71717a] uppercase tracking-[1.4px]">
                    Context inheritance path
                  </span>
                </div>

                <div className="flex flex-col">
                  {/* Card 1: Organization */}
                  <div data-synap-hierarchy-card className="rounded-[12px] bg-[#1a1917]/90 border border-white/[0.08] p-4 sm:p-4.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold text-white font-['Geist',sans-serif]">
                          Organization
                        </span>
                        <span className="px-1.5 py-0.5 rounded-[4px] bg-white/[0.06] border border-white/[0.08] text-[9.5px] font-bold text-zinc-400 font-['Geist',sans-serif] uppercase tracking-wider">
                          ORG
                        </span>
                      </div>
                      <p className="text-[12px] text-[#8e8e93] mt-1 font-['Geist',sans-serif]">
                        Shared policies, product facts &amp; global company knowledge
                      </p>
                    </div>
                    <span className="px-3 py-1.5 rounded-[7px] bg-[#131211] border border-white/[0.08] text-[11.5px] text-zinc-300 font-medium font-['Geist',sans-serif] shrink-0 whitespace-nowrap">
                      Acme Global Enterprise
                    </span>
                  </div>

                  {/* Upward Connector 1 */}
                  <div className="flex items-center gap-2 py-2 px-3 text-[11px] text-[#71717a] font-['Geist',sans-serif]">
                    <span className="text-zinc-500 text-[12px]">↑</span>
                    <span>Inherits organization context</span>
                  </div>

                  {/* Card 2: Workspace */}
                  <div data-synap-hierarchy-card className="rounded-[12px] bg-[#1a1917]/90 border border-white/[0.08] p-4 sm:p-4.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold text-white font-['Geist',sans-serif]">
                          Workspace
                        </span>
                        <span className="px-1.5 py-0.5 rounded-[4px] bg-white/[0.06] border border-white/[0.08] text-[9.5px] font-bold text-zinc-400 font-['Geist',sans-serif] uppercase tracking-wider">
                          WORKSPACE
                        </span>
                      </div>
                      <p className="text-[12px] text-[#8e8e93] mt-1 font-['Geist',sans-serif]">
                        Team context, project runbooks &amp; customer playbooks
                      </p>
                    </div>
                    <span className="px-3 py-1.5 rounded-[7px] bg-[#131211] border border-white/[0.08] text-[11.5px] text-zinc-300 font-medium font-['Geist',sans-serif] shrink-0 whitespace-nowrap">
                      Customer Success
                    </span>
                  </div>

                  {/* Upward Connector 2 */}
                  <div className="flex items-center gap-2 py-2 px-3 text-[11px] text-[#71717a] font-['Geist',sans-serif]">
                    <span className="text-zinc-500 text-[12px]">↑</span>
                    <span>Inherits workspace context</span>
                  </div>

                  {/* Card 3: User */}
                  <div data-synap-hierarchy-card className="rounded-[12px] bg-[#1a1917]/90 border border-white/[0.08] p-4 sm:p-4.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold text-white font-['Geist',sans-serif]">
                          User
                        </span>
                        <span className="px-1.5 py-0.5 rounded-[4px] bg-white/[0.06] border border-white/[0.08] text-[9.5px] font-bold text-zinc-400 font-['Geist',sans-serif] uppercase tracking-wider">
                          USER
                        </span>
                      </div>
                      <p className="text-[12px] text-[#8e8e93] mt-1 font-['Geist',sans-serif]">
                        Personal memory, custom preferences &amp; interaction history
                      </p>
                    </div>
                    <span className="px-3 py-1.5 rounded-[7px] bg-[#131211] border border-white/[0.08] text-[11.5px] text-zinc-300 font-medium font-['Geist',sans-serif] shrink-0 whitespace-nowrap">
                      Alice
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Isolation Boundaries */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 font-['Geist',sans-serif] text-[10.5px] font-semibold tracking-[1.4px] text-[#71717a] uppercase">
                    <span className="size-1.5 rounded-full bg-[#71717a] inline-block" />
                    <span>NEVER BELOW. NEVER SIDEWAYS.</span>
                  </div>

                  {/* Blocked Card 1: Other workspaces */}
                  <div className="rounded-[12px] bg-[#161514]/70 border border-white/[0.06] p-4 sm:p-4.5 mb-3.5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-zinc-300">
                        {/* Prohibited Icon ⊘ */}
                        <svg className="size-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m4.9 4.9 14.2 14.2" />
                        </svg>
                        <span className="text-[14px] font-medium text-zinc-300 font-['Geist',sans-serif]">
                          Other workspaces
                        </span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-[4px] bg-white/[0.04] border border-white/[0.06] text-[9.5px] font-bold text-zinc-500 font-['Geist',sans-serif] uppercase tracking-wider">
                        NO ACCESS
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#71717a] leading-[17px] font-['Geist',sans-serif]">
                      Engineering, Sales, Legal. Queries cannot traverse sideways to peer workspaces within the organization.
                    </p>
                  </div>

                  {/* Blocked Card 2: Other tenants */}
                  <div className="rounded-[12px] bg-[#161514]/70 border border-white/[0.06] p-4 sm:p-4.5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-zinc-300">
                        {/* Prohibited Icon ⊘ */}
                        <svg className="size-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m4.9 4.9 14.2 14.2" />
                        </svg>
                        <span className="text-[14px] font-medium text-zinc-300 font-['Geist',sans-serif]">
                          Other tenants
                        </span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-[4px] bg-white/[0.04] border border-white/[0.06] text-[9.5px] font-bold text-zinc-500 font-['Geist',sans-serif] uppercase tracking-wider">
                        HARD PARTITION
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#71717a] leading-[17px] font-['Geist',sans-serif]">
                      External corporations and tenants. Physically partitioned keys and vector namespaces prevent cross-tenant leaks.
                    </p>
                  </div>
                </div>

                {/* Bottom Reassurance Note */}
                <p className="text-[11.5px] text-[#71717a] mt-4 sm:mt-6 leading-relaxed font-['Geist',sans-serif]">
                  Strict boundary enforcement at the database &amp; graph traversal layer.
                </p>
              </div>

            </div>

          </div>

          {/* ── Flexible Hierarchy Card: Your hierarchy, not ours ── */}
          <div data-synap-info-card className="w-full rounded-[20px] bg-[#141311] border border-white/[0.08] p-6 sm:p-8 lg:p-9 relative shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Heading, Explanation & Link */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#f26522] inline-block shrink-0" />
                  <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-[#f26522] tracking-[1.4px] uppercase">
                    FLEXIBLE HIERARCHIES
                  </span>
                </div>

                <h3 className="font-['Geist',sans-serif] text-[24px] sm:text-[26px] font-bold text-white tracking-[-0.02em] leading-tight mb-2.5">
                  Your hierarchy, not ours
                </h3>
                <p className="font-['Geist',sans-serif] text-[13.5px] text-[#a1a1aa] leading-[22px] mb-4 max-w-[380px]">
                  When three levels is not your shape, define your own hierarchy at any depth, with the names you already use.
                </p>
                <a
                  href="https://docs.maximem.ai/hierarchies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#f26522] hover:text-[#ff8142] transition-colors group cursor-pointer font-['Geist',sans-serif]"
                >
                  <span className="border-b border-[#f26522]/40 group-hover:border-[#ff8142] pb-0.5 transition-colors">
                    How hierarchies work
                  </span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Right Column: Two Clean Example Hierarchy Chains */}
              <div className="lg:col-span-7 flex flex-col gap-3.5">
                
                {/* CHAIN 1: Client -> Customer -> User */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {["Client", "Customer", "User"].map((item, idx) => (
                    <React.Fragment key={item}>
                      {idx > 0 && <span className="text-zinc-600 text-[12px] select-none font-['Geist',sans-serif]">→</span>}
                      <div className="flex-1 py-3 px-4 rounded-[8px] bg-[#1a1918] border border-white/[0.08] text-[13px] text-zinc-200 font-medium font-['Geist',sans-serif] text-center shadow-sm">
                        {item}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* CHAIN 2: Hospital -> Department -> Clinician -> Patient */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  {["Hospital", "Department", "Clinician", "Patient"].map((item, idx) => (
                    <React.Fragment key={item}>
                      {idx > 0 && <span className="text-zinc-600 text-[11px] select-none font-['Geist',sans-serif]">→</span>}
                      <div className="flex-1 py-3 px-2 sm:px-3 rounded-[8px] bg-[#1a1918] border border-white/[0.08] text-[12px] text-zinc-200 font-medium font-['Geist',sans-serif] text-center shadow-sm">
                        {item}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: PROOF & BENCHMARKS (Master consistency)
          "Highest accuracy, lowest latency, and you can check it yourself"
      ───────────────────────────────────────────────────────────── */}
      <section id="benchmarks" data-synap-section className="w-full py-24 lg:py-28 bg-[#1B1B19] scroll-mt-28">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Top Row: Heading & Description */}
          <div className="max-w-[760px] mb-12 lg:mb-14">
            <div className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
              <span className="text-[#f26522]">10</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#a1a1aa]">PROOF &amp; BENCHMARKS</span>
            </div>

            <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12] mb-4 max-w-[840px]">
              Highest accuracy, lowest latency,<br className="hidden sm:inline" />
              and you can <span className="text-[#f26522]">check it yourself</span>
            </h2>

            <p className="font-['Geist',sans-serif] text-[15px] sm:text-[16px] text-[#a1a1aa] leading-[26px] tracking-[-0.012em] max-w-[760px]">
              Synap scores 92% on LongMemEval, the benchmark that tests whether a memory system retrieves the right fact from a long conversation and holds that accuracy as the conversation grows. In-conversation retrieval is under 15ms at P75. These numbers are a consequence of the architecture, not prompt tricks. The methodology is published and the eval harness is open source, so you can run it against any system you are evaluating.
            </p>
          </div>

          {/* Large Comparison Table Card */}
          <div data-synap-table className="rounded-[14px] border border-white/[0.08] bg-[#161615] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)] overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.07] text-[13px] font-medium text-zinc-400">
                    <th className="py-4 px-6 sm:px-8 w-[28%] font-normal">Metric</th>
                    
                    {/* Synap Column (Highlighted) */}
                    <th className="py-4 px-6 w-[20%] bg-[#1a1410]/70 text-white font-medium relative border-x border-[#f26522]/20">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#f26522]" />
                        <span className="text-[14px] text-white">Synap</span>
                      </div>
                    </th>

                    <th className="py-4 px-6 w-[17%] font-normal text-zinc-400">Memo</th>
                    <th className="py-4 px-6 w-[18%] font-normal text-zinc-400">Zep</th>
                    <th className="py-4 px-6 w-[17%] font-normal text-zinc-400">Supermemory</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-[14px]">
                  
                  {/* Row 1: LongMemEval (accuracy) */}
                  <tr data-synap-table-row className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-medium text-white text-[15px] mb-0.5">
                        LongMemEval (accuracy)
                      </div>
                      <div className="text-[12.5px] text-[#a1a1aa] leading-snug">
                        Retrieves the right fact in long conversations
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#1a1410]/70 border-x border-[#f26522]/20">
                      <span data-synap-benchmark-counter className="text-[17px] font-medium text-white font-['Geist_Variable:Medium',sans-serif]">
                        92%
                      </span>
                    </td>
                    <td className="py-5 px-6 text-zinc-300">
                      73.8%
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-zinc-300">71.2%</div>
                      <div className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                        (Zep&apos;s own figure; not run on our harness)
                      </div>
                    </td>
                    <td className="py-5 px-6 text-zinc-300">
                      71.3%
                    </td>
                  </tr>

                  {/* Row 2: Entity resolution */}
                  <tr data-synap-table-row className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-medium text-white text-[15px] mb-0.5">
                        Entity resolution
                      </div>
                      <div className="text-[12.5px] text-[#a1a1aa] leading-snug">
                        Handles names, roles, and references
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#1a1410]/70 border-x border-[#f26522]/20">
                      <div className="font-medium text-[#f26522]">
                        Automatic, <span className="text-white">every tier</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-zinc-400">
                      Pro tier only
                    </td>
                    <td className="py-5 px-6 text-zinc-400">
                      Automatic
                    </td>
                    <td className="py-5 px-6 text-zinc-400">
                      Fact extraction
                    </td>
                  </tr>

                  {/* Row 3: Open-source eval harness */}
                  <tr data-synap-table-row className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-medium text-white text-[15px] mb-0.5">
                        Open-source eval harness
                      </div>
                      <div className="text-[12.5px] text-[#a1a1aa] leading-snug">
                        Reproducible, transparent evaluation
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#1a1410]/70 border-x border-[#f26522]/20">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <div className="size-4 rounded-full bg-[#f26522] flex items-center justify-center shrink-0">
                          <svg className="size-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[13.5px]">Full config published</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <div className="size-4 rounded-full bg-zinc-800 border border-white/[0.1] flex items-center justify-center shrink-0 text-zinc-500">
                          <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </div>
                        <span>No</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <div className="size-4 rounded-full bg-zinc-800 border border-white/[0.1] flex items-center justify-center shrink-0 text-zinc-500">
                          <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </div>
                        <span>No</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <div className="size-4 rounded-full bg-zinc-800 border border-white/[0.1] flex items-center justify-center shrink-0 text-zinc-500">
                          <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </div>
                        <span>No</span>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* Note under Table */}
          <p className="mt-4 font-['Geist',sans-serif] text-[13px] leading-[20px] text-[#9F9FA9]">
            Measured on Maximem&apos;s open eval harness, same hardware, same prompts, same conversations, same scoring. Vendor self-reported figures differ and are shown separately. Zep has not been run on our harness, so its own published figure is shown instead. Full configuration and sources at /evals.
          </p>

          {/* Comparison Pills Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 mb-4">
            {[
              "Synap vs Mem0",
              "Synap vs Zep",
              "Synap vs Letta",
              "Synap vs Supermemory",
              "Synap vs Cognee",
              "Synap vs Evermind",
            ].map((pill, idx) => (
              <button
                key={idx}
                type="button"
                className="px-4 py-2 rounded-[10px] text-[13px] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer bg-[#141413] hover:bg-[#1a1a18] border border-white/[0.08] text-[#a1a1aa] hover:text-white"
              >
                <span>{pill}</span>
              </button>
            ))}
          </div>

          {/* Bottom Methodology Link */}
          <div>
            <a
              href="https://docs.maximem.ai/benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#f26522] hover:text-[#ff8142] transition-colors"
            >
              <span>See the full Synap vs Mem0 vs Zep vs Letta vs Supermemory vs Cognee vs Evermind comparison</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: WHERE IT RUNS (Works across agents)
      ───────────────────────────────────────────────────────────── */}
      <section data-synap-section className="w-full py-24 lg:py-28 bg-[#0E0E0D]">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div data-synap-eyebrow className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
            <span className="text-[#f26522]">11</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#a1a1aa]">WHERE IT RUNS</span>
          </div>

          {/* Heading */}
          <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12] max-w-[800px]">
            Works across conversational, voice, and workflow agents
          </h2>

          {/* Subtitle */}
          <p className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.012em] text-[#a1a1aa] max-w-[680px]">
            Synap is not limited to a fixed list. It manages memory for customer support and sales agents, voice concierges, healthcare assistants, and multi-agent workflows alike. These are a few of the places teams run it today.
          </p>

          {/* 5 Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 mb-6">
            {[
              "Healthcare",
              "Customer Support",
              "Sales",
              "Voice AI",
              "Multi-Agent",
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-full text-[13.5px] font-medium bg-[#141413] hover:bg-[#1a1917] border border-white/[0.08] hover:border-white/[0.18] text-[#D4D4D8] flex items-center gap-2.5 shadow-sm font-['Geist',sans-serif] transition-all"
              >
                <span className="size-1.5 rounded-full bg-[#f26522] shrink-0" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>

          {/* Link */}
          <a
            href="#use-cases"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#f26522] hover:text-[#ff8142] transition-colors font-['Geist',sans-serif]"
          >
            <span>See all Synap use cases</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: SECURITY AND TRUST (Built for production and enterprise)
      ───────────────────────────────────────────────────────────── */}
      <section data-synap-section className="w-full py-24 lg:py-28 bg-[#1B1B19]">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Eyebrow */}
          <div data-synap-eyebrow className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
            <span className="text-[#f26522]">12</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#a1a1aa]">SECURITY AND TRUST</span>
          </div>

          {/* Heading */}
          <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12] mb-6">
            Built for production and for enterprise
          </h2>

          {/* 4 Feature Pills without Icons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-10">
            {[
              "Encrypted in transit and at rest",
              "Strict tenant isolation",
              "BYOK for model providers",
              "On-premise, self-hosted, and air-gapped",
            ].map((item, idx) => (
              <div
                key={idx}
                className="px-4.5 py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-medium font-['Geist',sans-serif] bg-[#141413] hover:bg-[#1a1917] border border-white/[0.08] hover:border-white/[0.18] text-[#D4D4D8] transition-all shadow-sm"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* 3 Cards */}
          <div data-synap-cards className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Sensitive Data */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-[#f26522] tracking-[1.2px] uppercase block mb-3">
                  SENSITIVE DATA
                </span>
                <h3 className="font-['Geist',sans-serif] text-[20px] font-bold text-white mb-3 tracking-tight">
                  PII & redaction
                </h3>
                <p className="font-['Geist',sans-serif] text-[14px] leading-[23px] text-[#9F9FA9]">
                  Your PII posture, applied per kind of data, down to what an individual API key is allowed to see, and a short list of things that are never stored for anyone.
                </p>
              </div>
              <div className="mt-8 pt-2">
                <a
                  href="#posture"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#f26522] hover:text-[#ff8142] transition-colors font-['Geist',sans-serif]"
                >
                  <span>Read the full posture</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Card 2: The Full Posture */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-[#f26522] tracking-[1.2px] uppercase block mb-3">
                  THE FULL POSTURE
                </span>
                <h3 className="font-['Geist',sans-serif] text-[20px] font-bold text-white mb-3 tracking-tight">
                  Security & privacy
                </h3>
                <p className="font-['Geist',sans-serif] text-[14px] leading-[23px] text-[#9F9FA9]">
                  Our full security posture is published in one place: data flow, hosting, encryption, retention, deletion, subprocessors, tenant isolation, and DPA availability.
                </p>
              </div>
              <div className="mt-8 pt-2">
                <a
                  href="#security"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#f26522] hover:text-[#ff8142] transition-colors font-['Geist',sans-serif]"
                >
                  <span>Read the security and privacy page</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Card 3: Enterprise */}
            <div data-synap-card className="rounded-[14px] border border-white/[0.08] bg-[#141413] p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.25),0_12px_32px_rgba(0,0,0,0.35)]">
              <div>
                <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-[#f26522] tracking-[1.2px] uppercase block mb-3">
                  ENTERPRISE
                </span>
                <h3 className="font-['Geist',sans-serif] text-[20px] font-bold text-white mb-3 tracking-tight">
                  Dedicated infrastructure
                </h3>
                <p className="font-['Geist',sans-serif] text-[14px] leading-[23px] text-[#9F9FA9]">
                  Enterprise plans add VPC and private deployment, SSO and SAML, configurable RBAC, and custom SLAs.
                </p>
              </div>
              <div className="mt-8 pt-2">
                <a
                  href="#enterprise"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#f26522] hover:text-[#ff8142] transition-colors"
                >
                  <span>See plans and enterprise options</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Link */}
          <div>
            <a
              href="#docs"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#9F9FA9] hover:text-white transition-colors"
            >
              <span>Security and trust in the docs</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 13: 23 AGENT FRAMEWORKS
      ───────────────────────────────────────────────────────────── */}
      <section data-synap-section className="relative w-full py-24 lg:py-28 bg-[#0E0E0D] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 text-center flex flex-col items-center relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-9 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
            <span className="text-[#f26522]">13</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#a1a1aa]">NATIVE INTEGRATIONS WITH 23 AGENT FRAMEWORKS</span>
          </div>

          {/* 23 Clean Framework Pills */}
          <div data-synap-framework-pills className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-[1080px] mb-10">
            {[
              "LangChain",
              "LangGraph",
              "LlamaIndex",
              "OpenAI Agents",
              "Pydantic AI",
              "CrewAI",
              "AutoGen",
              "Google ADK",
              "Haystack",
              "Agno",
              "Semantic Kernel",
              "Microsoft Agent Framework",
              "NeMo Agent Toolkit",
              "LiveKit Agents",
              "Pipecat",
              "Claude Agent SDK",
              "Mastra",
              "Vercel AI SDK",
              "Vercel eve",
              "Strands Agents",
              "CAMEL-AI",
              "Smolagents",
              "deepagents",
            ].map((name, idx) => (
              <motion.div
                key={idx}
                data-synap-framework-card
                whileHover={{
                  y: -3,
                  borderColor: "rgba(255, 255, 255, 0.24)",
                  backgroundColor: "#191918",
                  color: "#ffffff",
                  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group relative px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-[10px] text-[13px] sm:text-[13.5px] font-medium font-['Geist',sans-serif] bg-[#141413] border border-white/[0.08] text-[#d4d4d8] transition-colors duration-200 cursor-default shadow-sm select-none flex items-center justify-center"
              >
                <span>{name}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* CTA 1: LangChain */}
            <a
              href="#langchain"
              className="group h-[46px] pl-5 pr-2.5 font-medium text-[14.5px] rounded-[10px] flex items-center gap-3 bg-[#f26522] hover:bg-[#f26522]/90 text-white shadow-[0_2px_12px_rgba(242,101,34,0.3)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer"
            >
              <span className="tracking-tight">Synap memory for LangChain</span>
              <span className="w-[26px] h-[26px] rounded-[7px] bg-white text-[#f26522] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </a>

            {/* CTA 2: LangGraph */}
            <a
              href="#langgraph"
              className="group h-[46px] px-6 font-medium text-[14.5px] rounded-[10px] flex items-center justify-center bg-[#18181b] hover:bg-[#222226] border border-white/10 text-white shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer"
            >
              <span>Synap memory for LangGraph</span>
            </a>

            {/* CTA 3: See all 23 integrations */}
            <a
              href="#integrations"
              className="group h-[46px] px-5 font-medium text-[14px] rounded-[10px] flex items-center justify-center text-[#9F9FA9] hover:text-white border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer"
            >
              <span>See all 23 integrations</span>
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 14: FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      <section data-synap-section className="w-full py-24 lg:py-28 bg-[#1B1B19]">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4">
              <div data-synap-eyebrow className="flex items-center gap-2 mb-3.5 sm:mb-4 font-mono text-[11.5px] sm:text-[12px] tracking-[1.5px] uppercase font-medium">
                <span className="text-[#f26522]">14</span>
                <span className="text-zinc-600">/</span>
                <span className="text-[#a1a1aa]">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 data-synap-heading className="font-['Geist',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.12] sticky top-28">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Right Column: 8 Accordions */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              {[
                {
                  q: "What is Synap SDK?",
                  a: "Maximem Synap SDK is a lightweight, low-latency client library (available for Python, TypeScript/JavaScript, and via REST) that allows you to give AI agents persistent, cross-session memory with just two calls: record_message() to write conversation turns and fetch() to retrieve ranked, deduplicated context before the model generates a response.",
                },
                {
                  q: "How do I integrate Synap into my AI application?",
                  a: "Integration takes fewer than five lines of code. Simply initialize MaximemSynapSDK(api_key=...), stream user and assistant turns to record_message(), and call fetch() to inject ranked, relevant memories into your prompt. Synap handles extraction, entity resolution, deduplication, and forgetting asynchronously in the background without blocking your agent.",
                },
                {
                  q: "What programming languages does Synap support?",
                  a: "Synap provides first-class native SDKs for Python and TypeScript/Node.js. Any other language or environment (Go, Rust, Java, C#, Ruby, PHP) can interact directly via our high-performance REST API or hosted Model Context Protocol (MCP) server endpoints.",
                },
                {
                  q: "How does memory persistence work in Synap?",
                  a: "Synap organizes memory into three distinct architectural layers: Working Context (in-session scratchpad), Episodic & Semantic Memory (cross-session facts, entity relations, and dialogue history stored across vector and graph indexes), and Procedural Memory (agent skills, rules, and core organization knowledge). Background consolidation cycles continuously prune stale assertions, deduplicate conflicting facts, and elevate high-value patterns.",
                },
                {
                  q: "Is Synap suitable for enterprise use?",
                  a: "Yes. Synap is built ground-up for enterprise workloads with SOC 2 compliance readiness, strict tenant and workspace isolation, granular RBAC, BYOK (Bring Your Own Key) for LLM providers, and options for dedicated VPC, on-premise, or air-gapped deployments.",
                },
                {
                  q: "How is Synap different from other memory solutions like Mem0 or Zep?",
                  a: "Unlike pure vector databases or wrappers that rely on brittle prompt-stuffing, Synap uses a multi-tier hybrid vector-graph engine that scores 92% on LongMemEval. It features true anticipatory context pre-fetching (<15ms P75 retrieval), hierarchical multi-tenant scoping (Client → Customer → User), and automated conflict resolution across sessions without requiring manual prompt engineering.",
                },
                {
                  q: "How is Synap different from Supermemory?",
                  a: "Supermemory focuses primarily on personal bookmarking and human knowledge management. Synap is purpose-built as an autonomous memory infrastructure for production AI agents and multi-agent fleets, supporting real-time streaming ingestion, temporal decay, multi-hop entity graphs, and 23 agent framework adapters.",
                },
                {
                  q: "Is Synap open source?",
                  a: "The Maximem Synap evaluation harness, reproduction datasets, benchmarks, and community client SDKs are fully open source on GitHub. The managed cloud engine, real-time streaming pipeline, and enterprise clustering are provided as a hosted service or deployable VPC appliance.",
                },
              ].map((faq, idx) => (
                <div
                  data-synap-faq-row
                  key={idx}
                  className="rounded-[14px] border border-white/[0.08] bg-[#161615] overflow-hidden transition-all hover:border-white/[0.14] shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-['Geist',sans-serif] text-[15.5px] sm:text-[16px] font-medium text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span
                      className={`text-[#f26522] transition-transform duration-200 shrink-0 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-[14px] sm:text-[14.5px] text-[#9F9FA9] leading-[24px] pt-1 font-['Geist',sans-serif]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 15: FROM THE BLOG (Synchronized with Homepage BlogSection)
      ───────────────────────────────────────────────────────────── */}
      <BlogSection isLight={isLight} bgDark="bg-[#0E0E0D]" sectionNumber="15" />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 16: BOTTOM CTA (Exact Homescreen Banner Design)
      ───────────────────────────────────────────────────────────── */}
      <div
        className={`min-h-[140px] relative shrink-0 w-full flex items-center justify-center transition-colors duration-200 overflow-hidden ${
          isLight ? "bg-[#fafafa]" : "bg-[#0E0E0D]"
        }`}
        data-name="Section"
      >
        <InteractiveWaveCanvas
          isLight={isLight}
          variant="banner"
          dotSpacing={26}
          glowColor="#f26522"
        />
        <div className="content-stretch flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[1280px] w-full px-5 sm:px-8 lg:px-10 py-10 mx-auto z-10 relative">
          <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0">
            <p
              className={`[word-break:break-word] font-['Geist',sans-serif] leading-[33px] text-[24px] tracking-[0.0703px] font-semibold ${
                isLight ? "text-[#09090b]" : "text-white"
              }`}
            >
              Start building with Maximem Synap.
            </p>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            <div className="h-[42px] relative shrink-0">
              <a
                href="https://synap.maximem.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f26522] content-stretch shadow-[0px_2px_10px_rgba(242,101,34,0.3)] flex items-center justify-center px-[22px] py-[10px] rounded-[8px] cursor-pointer hover:bg-[#ff7536] transition-all"
                data-name="Button"
              >
                <p className="[word-break:break-word] font-['Geist',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[14.5px] text-white text-center tracking-[-0.2344px] whitespace-nowrap font-semibold">
                  Get Started Free
                </p>
              </a>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <a
                href="https://docs.maximem.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={`[word-break:break-word] font-['Geist',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[14.5px] tracking-[-0.2344px] whitespace-nowrap transition-colors cursor-pointer ${
                  isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Read the docs →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER: (From components/website-clone/footer-section.tsx)
          Copied directly from Hero Section as requested
      ───────────────────────────────────────────────────────────── */}
      <FooterSection isLight={isLight} />
    </div>
    </SynapAnimationProvider>
  );
}
