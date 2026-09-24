"use client";

import React, { useState, useEffect } from "react";
import AnnouncementBanner from "@/components/website-clone/announcement-banner";
import FooterSection from "@/components/website-clone/footer-section";
import svgPaths from "@/components/website-clone/svg-paths";

// ─────────────────────────────────────────────────────────────
// Framework Integrations List
// ─────────────────────────────────────────────────────────────
const FRAMEWORKS = [
  { name: "LangChain", tag: "Python & TS", install: "pip install maximem-synap-langchain" },
  { name: "LangGraph", tag: "Multi-Agent", install: "pip install maximem-synap[langgraph]" },
  { name: "LlamaIndex", tag: "Agentic RAG", install: "pip install maximem-synap-llamaindex" },
  { name: "OpenAI Agents", tag: "Assistants API", install: "npm i @maximem/synap-openai" },
  { name: "Pydantic AI", tag: "Type-Safe", install: "pip install maximem-synap[pydantic]" },
  { name: "CrewAI", tag: "Autonomous", install: "pip install maximem-synap-crewai" },
  { name: "AutoGen", tag: "Multi-Persona", install: "pip install maximem-synap-autogen" },
  { name: "Claude Agent SDK", tag: "Anthropic", install: "npm i @maximem/synap-claude" },
  { name: "LiveKit Agents", tag: "Voice AI", install: "pip install maximem-synap-livekit" },
  { name: "Pipecat", tag: "Realtime Audio", install: "pip install maximem-synap-pipecat" },
  { name: "Vercel AI SDK", tag: "Next.js & Edge", install: "npm i @maximem/synap-vercel" },
  { name: "Google ADK", tag: "Gemini", install: "pip install maximem-synap-google" },
  { name: "Haystack", tag: "Modular Pipelines", install: "pip install maximem-synap-haystack" },
  { name: "Semantic Kernel", tag: "Microsoft C# / Py", install: "pip install maximem-synap-sk" },
  { name: "Smolagents", tag: "Hugging Face", install: "pip install maximem-synap-smolagents" },
  { name: "DSPy", tag: "Prompt Optimizer", install: "pip install maximem-synap-dspy" },
  { name: "MemGPT", tag: "OS for LLMs", install: "pip install maximem-synap-memgpt" },
  { name: "SuperAGI", tag: "Open Source Agents", install: "pip install maximem-synap-superagi" },
  { name: "Camel AI", tag: "Communicative", install: "pip install maximem-synap-camel" },
  { name: "MetaGPT", tag: "Software Company", install: "pip install maximem-synap-metagpt" },
  { name: "BabyAGI", tag: "Autonomous Loop", install: "pip install maximem-synap-babyagi" },
  { name: "Phidata", tag: "Memory & Tools", install: "pip install maximem-synap-phidata" },
  { name: "Model Context Protocol", tag: "MCP Server", install: "npx -y @maximem/mcp-synap" },
];

export default function SynapPage() {
  const [isLight, setIsLight] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCodeLang, setActiveCodeLang] = useState<"python" | "typescript" | "curl">("python");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedInstall, setCopiedInstall] = useState<string | null>(null);

  // Synchronize theme with home page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("maximem_theme");
      if (saved === "light") {
        setIsLight(false);
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

  const handleCopyInstall = (cmd: string, name: string) => {
    navigator.clipboard?.writeText(cmd);
    setCopiedInstall(name);
    setTimeout(() => setCopiedInstall(null), 1800);
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

  const navItems = [
    { label: "Pricing", href: "https://maximem.ai/pricing" },
    { label: "Playground", href: "https://synap.maximem.ai/playground" },
    { label: "Use Cases", href: "/#why-memory" },
    { label: "Why Memory", href: "#problem" },
    { label: "Integrations", href: "#integrations" },
    { label: "Docs", href: "https://docs.maximem.ai" },
    { label: "Blog & Resources", href: "/#blog" },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 font-sans selection:bg-[#f26522]/30 selection:text-white ${
        isLight ? "bg-[#fbfbfd] text-[#111114]" : "bg-[#09090b] text-[#f4f4f5]"
      }`}
    >
      {/* ── Fixed Top Navigation (Stuck to top: 0 with zero gap) ── */}
      <nav
        style={{ top: 0, left: 0, right: 0, margin: 0 }}
        className={`fixed top-0 left-0 right-0 w-full h-[64px] backdrop-blur-[16px] backdrop-saturate-[180%] z-50 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
          isLight
            ? "bg-white/75 border-b border-zinc-200/80 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.8),0_4px_20px_rgba(0,0,0,0.03)]"
            : "bg-[#121210]/70 border-b border-white/[0.08] shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.04),0_4px_20px_rgba(0,0,0,0.25)]"
        }`}
        data-name="Navigation"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between relative h-full">
          {/* Logo */}
          <a href="/" className="flex gap-[10px] items-center relative shrink-0 group cursor-pointer">
            <div className="relative shrink-0 size-[38px] sm:size-[42px]">
              <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                <g id="Image (Maximem Logo)">
                  <path d={svgPaths.p807ad80} fill={isLight ? "#09090b" : "white"} id="Vector" />
                </g>
              </svg>
            </div>
            <p className={`font-['Geist_Variable:Bold',sans-serif] leading-none not-italic text-[23px] sm:text-[25px] font-semibold tracking-[-0.02em] whitespace-nowrap ${
              isLight ? "text-[#09090b]" : "text-white"
            }`}>
              Maximem
            </p>
          </a>

          {/* Centered Nav Items */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-7">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 py-2 cursor-pointer font-['Geist_Variable:Regular',sans-serif] text-[13.5px] transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap ${
                  productsOpen
                    ? "text-[#f26522]"
                    : isLight
                    ? "text-[#52525b] hover:text-[#09090b]"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <span>Products</span>
                <svg
                  className={`size-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180 text-[#f26522]" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50 w-72">
                  <div
                    className={`rounded-[14px] border p-2 shadow-2xl backdrop-blur-xl transition-all ${
                      isLight
                        ? "bg-white/95 border-zinc-200/90 text-zinc-900 shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
                        : "bg-[#111113]/95 border-white/[0.1] text-white shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    <a
                      href="/synap"
                      className={`flex items-start gap-3 p-2.5 rounded-[10px] transition-colors ${
                        isLight ? "bg-[#f26522]/10 text-zinc-900" : "bg-[#f26522]/15 text-white"
                      }`}
                    >
                      <div className="size-8 rounded-[8px] bg-[#f26522] flex items-center justify-center text-white shrink-0 mt-0.5">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-semibold tracking-tight text-[#f26522]">Maximem Synap</span>
                          <span className="text-[9.5px] font-mono px-1.5 py-0.2 rounded bg-[#f26522]/20 text-[#f26522]">ACTIVE</span>
                        </div>
                        <p className="text-[11.5px] text-zinc-400 leading-snug mt-0.5">
                          Agentic context management & persistent memory for AI agents.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/#products"
                      className={`flex items-start gap-3 p-2.5 rounded-[10px] transition-colors mt-1 ${
                        isLight ? "hover:bg-zinc-100" : "hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="size-8 rounded-[8px] bg-zinc-800 border border-white/[0.1] flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[13px] font-medium tracking-tight block">Maximem Linkrunner</span>
                        <p className="text-[11.5px] text-zinc-400 leading-snug mt-0.5">
                          Browser-native workflow execution & automation.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/#products"
                      className={`flex items-start gap-3 p-2.5 rounded-[10px] transition-colors mt-1 ${
                        isLight ? "hover:bg-zinc-100" : "hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="size-8 rounded-[8px] bg-zinc-800 border border-white/[0.1] flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[13px] font-medium tracking-tight block">Maximem Memo</span>
                        <p className="text-[11.5px] text-zinc-400 leading-snug mt-0.5">
                          Personal private memory for individual assistants.
                        </p>
                      </div>
                    </a>

                    <div className="border-t border-white/[0.08] my-1" />
                    <a
                      href="/synap#how-it-works"
                      className="block px-2.5 py-1.5 rounded-[6px] text-[11.5px] text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                    >
                      How Synap works under the hood →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap cursor-pointer ${
                  isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className={`size-[36px] rounded-[8px] border flex items-center justify-center transition-all mr-3 cursor-pointer shadow-sm active:scale-95 ${
                isLight
                  ? "bg-[#f4f4f5] hover:bg-[#e4e4e7] border-[#e4e4e7] text-zinc-700 hover:text-black"
                  : "bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.1] text-zinc-300 hover:text-white"
              }`}
              title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label="Theme toggle"
            >
              {isLight ? (
                <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>

            <a
              href="https://synap.maximem.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`group h-[36px] px-4 rounded-[8px] border flex items-center justify-center cursor-pointer hover:-translate-y-0.5 transition-all duration-200 shadow-sm shrink-0 ${
                isLight
                  ? "bg-[#09090b] text-white border-[#27272a] hover:bg-[#27272a]"
                  : "bg-[#f26522] text-white border-[#f26522] hover:bg-[#f26522]"
              }`}
            >
              <span className="font-['Geist_Variable:Medium',sans-serif] leading-none text-[13.5px] font-medium tracking-[-0.01em]">
                Get Started Free
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION: (From media_1790257363120.png)
          "Build AI that remembers, learns and gets better over time."
          Pixel-perfect reproduction of user's mockup.
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center pt-[88px] sm:pt-[96px] lg:pt-[104px] pb-16 sm:pb-20 border-b border-white/[0.06] bg-[#070504]">
        
        {/* Glowing doorway portal artwork seamlessly integrated on right */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[54%] pointer-events-none z-0 overflow-hidden flex items-center justify-end">
          <img
            src="/synap/hero_doorway_2x.png"
            alt="Maximem Synap AI Portal"
            className="w-full h-full object-cover object-left-top sm:object-right opacity-90 lg:opacity-100"
          />
          {/* Subtle horizontal gradient to guarantee 100% seamless fade to dark background */}
          <div className="absolute inset-y-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-[#070504] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070504] to-transparent pointer-events-none" />
        </div>

        {/* Ambient Warm Radial Glow behind the doorway */}
        <div className="absolute top-1/4 right-[15%] w-[450px] h-[450px] bg-[#f26522]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[620px] flex flex-col items-start">
            
            {/* Brand Logo Row (Clean white logo with NO orange box as requested) */}
            <div className="flex items-center gap-2.5 mb-7 sm:mb-8">
              <div className="size-[28px] sm:size-[32px] shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                  <path d={svgPaths.p807ad80} fill="white" />
                </svg>
              </div>
              <span className="font-['Geist_Variable:Bold',sans-serif] text-[22px] sm:text-[25px] font-bold text-white tracking-tight">
                Maximem
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.08] max-w-[580px]">
              Build AI that<br />
              <span className="inline-flex items-center my-1 px-3 py-0.5 rounded-[8px] bg-[#22130c] text-[#ff6622] border border-[#ff6622]/30 shadow-[0_0_20px_rgba(255,102,34,0.15)] font-semibold">
                remembers,
              </span>{" "}
              learns and<br />
              gets better over time<span className="text-[#ff6622]">.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] text-[#9ca3af] font-normal leading-relaxed max-w-[540px]">
              Persistent memory and context for AI agents,<br className="hidden sm:inline" />
              across all popular agent frameworks.
            </p>

            {/* 3 Benchmarks / Accuracy Row */}
            <div className="mt-8 pt-7 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-[560px]">
              <div>
                <div className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight font-['Geist_Variable:Bold',sans-serif]">
                  92%
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#9ca3af] font-normal leading-snug mt-1">
                  LongMemEval accuracy
                </div>
              </div>

              <div className="border-l border-white/[0.08] pl-6 sm:pl-8">
                <div className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight font-['Geist_Variable:Bold',sans-serif]">
                  93.2%
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#9ca3af] font-normal leading-snug mt-1">
                  LoCoMo accuracy
                </div>
              </div>

              <div className="border-l border-white/[0.08] pl-6 sm:pl-8">
                <div className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight font-['Geist_Variable:Bold',sans-serif]">
                  &lt;15ms
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#9ca3af] font-normal leading-snug mt-1">
                  P75 in-conversation retrieval
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://synap.maximem.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[48px] px-5 sm:px-6 rounded-[10px] bg-[#f26522] hover:bg-[#e05a1c] text-white text-[15px] font-semibold tracking-tight flex items-center gap-3 transition-all duration-200 shadow-[0_4px_24px_rgba(242,101,34,0.35)] hover:scale-[1.02] cursor-pointer"
              >
                <span>Get Started</span>
                <div className="size-6 sm:size-7 rounded-[7px] bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="size-3.5 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>

              <a
                href="https://synap.maximem.ai/playground"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[48px] px-5 sm:px-6 rounded-[10px] bg-[#141416]/80 hover:bg-[#1a1a1e] border border-white/[0.12] text-white text-[15px] font-medium tracking-tight flex items-center gap-2.5 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <svg className="size-4 text-white fill-white shrink-0" viewBox="0 0 24 24">
                  <polygon points="6 4 18 12 6 20 6 4" />
                </svg>
                <span>Try in Playground</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 00: FRAMEWORK INTEGRATIONS MARQUEE & GRID
      ───────────────────────────────────────────────────────────── */}
      <section id="integrations" className="w-full py-16 px-5 sm:px-8 border-b border-white/[0.06]">
        <div className="w-full max-w-[1240px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-widest uppercase mb-2">
                <span className="text-[#f26522] font-semibold">00</span>
                <span className="text-zinc-600">/</span>
                <span>INTEGRATIONS</span>
              </div>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-white tracking-tight">
                Works seamlessly with your agent stack
              </h2>
            </div>
            <p className="text-[13px] text-zinc-400 font-mono">
              Click any card to copy pip / npm install command
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {FRAMEWORKS.map((fw) => (
              <button
                key={fw.name}
                type="button"
                onClick={() => handleCopyInstall(fw.install, fw.name)}
                className={`p-3.5 rounded-[12px] border text-left transition-all duration-200 cursor-pointer relative overflow-hidden group active:scale-95 ${
                  copiedInstall === fw.name
                    ? "bg-[#f26522]/20 border-[#f26522] shadow-[0_0_20px_rgba(242,101,34,0.3)]"
                    : "bg-[#111114]/70 hover:bg-[#18181c] border-white/[0.08] hover:border-[#f26522]/40"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[13px] font-semibold text-white tracking-tight truncate">
                    {fw.name}
                  </span>
                  {copiedInstall === fw.name ? (
                    <span className="text-[10px] font-mono text-[#f26522] font-semibold">COPIED</span>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">
                      {fw.tag}
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 truncate group-hover:text-zinc-400">
                  {fw.install}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: (From media_1790256612432.png)
          "What it looks like when your agent forgets"
      ───────────────────────────────────────────────────────────── */}
      <section id="problem" className="w-full py-20 px-5 sm:px-8 max-w-[1240px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-zinc-400 tracking-widest uppercase mb-3">
            <span className="text-[#f26522] font-semibold">01</span>
            <span className="text-zinc-600">/</span>
            <span>FORGETTING</span>
          </div>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-white leading-tight">
            What it looks like when your agent <span className="text-[#f26522]">forgets</span>
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Memory failure isn't a small UX issue. It shows up as real user complaints, refunds, and lost trust.
          </p>
        </div>

        {/* 2x2 Grid with Interactive Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 01 */}
          <div className="p-7 rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md relative overflow-hidden group hover:border-[#f26522]/40 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] font-bold text-[#f26522]">01</span>
              </div>
              <h3 className="text-[19px] font-semibold text-white tracking-tight mb-2.5">
                It re-asks for information the user already gave
              </h3>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                After a user spends 15 minutes sharing their requirements, the agent asks the same questions again — leading to instant frustration.
              </p>
            </div>

            {/* Visual Graphic: Repeated chat bubbles + retry spinner */}
            <div className="my-6 p-4 rounded-[12px] bg-black/40 border border-white/[0.06] flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2.5 flex-1">
                <div className="flex items-center gap-2.5 p-2 rounded-[8px] bg-white/[0.04] border border-white/[0.05]">
                  <div className="size-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-[10px]">
                    👤
                  </div>
                  <span className="text-[12.5px] text-zinc-300 font-mono">What stack are you using?</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-[8px] bg-white/[0.04] border border-white/[0.05]">
                  <div className="size-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-[10px]">
                    👤
                  </div>
                  <span className="text-[12.5px] text-zinc-300 font-mono">What stack are you using?</span>
                </div>
              </div>

              {/* Orange reload icon */}
              <div className="size-10 rounded-full border border-[#f26522]/40 bg-[#f26522]/10 flex items-center justify-center text-[#f26522] shrink-0">
                <svg className="size-5 animate-spin" style={{ animationDuration: "6s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
              <span className="text-[#f26522] font-bold">|</span>
              <span>SYMPTOM: HIGH BOUNCE &amp; SESSION DROP-OFF</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="p-7 rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md relative overflow-hidden group hover:border-[#f26522]/40 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] font-bold text-[#f26522]">02</span>
              </div>
              <h3 className="text-[19px] font-semibold text-white tracking-tight mb-2.5">
                It recommends what the user already rejected
              </h3>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                An agent without negative preference retention keeps suggesting the same options, even after the user said no.
              </p>
            </div>

            {/* Visual Graphic: AWS & GCP with Rejected badges */}
            <div className="my-6 p-4 rounded-[12px] bg-black/40 border border-white/[0.06] flex flex-col gap-2">
              <div className="flex items-center justify-between p-2 rounded-[8px] bg-white/[0.04] border border-white/[0.05]">
                <div className="flex items-center gap-2 text-[13px] text-zinc-300 font-medium">
                  <span>☁️</span> AWS
                </div>
                <span className="px-2 py-0.5 rounded text-[10.5px] font-mono border border-[#f26522]/40 bg-[#f26522]/10 text-[#f26522]">
                  Rejected
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-[8px] bg-white/[0.04] border border-white/[0.05]">
                <div className="flex items-center gap-2 text-[13px] text-zinc-300 font-medium">
                  <span>🔺</span> GCP
                </div>
                <span className="px-2 py-0.5 rounded text-[10.5px] font-mono border border-[#f26522]/40 bg-[#f26522]/10 text-[#f26522]">
                  Rejected
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-[8px] opacity-40">
                <div className="flex items-center gap-2 text-[13px] text-zinc-400">
                  <span>🔷</span> Azure
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
              <span className="text-[#f26522] font-bold">|</span>
              <span>SYMPTOM: REVENUE CHURN &amp; LOSS OF AUTHORITY</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="p-7 rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md relative overflow-hidden group hover:border-[#f26522]/40 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] font-bold text-[#f26522]">03</span>
              </div>
              <h3 className="text-[19px] font-semibold text-white tracking-tight mb-2.5">
                It contradicts itself across sessions
              </h3>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                The agent makes a promise in one conversation and denies it in the next because the context wasn't remembered.
              </p>
            </div>

            {/* Visual Graphic: Bot conflicting responses */}
            <div className="my-6 p-4 rounded-[12px] bg-black/40 border border-white/[0.06] flex flex-col gap-2.5">
              <div className="flex items-center justify-between p-2 rounded-[8px] bg-white/[0.04] border border-white/[0.05]">
                <div className="flex items-center gap-2 text-[12.5px] text-zinc-300">
                  <span>🤖</span> "Sure, we support refunds within 30 days."
                </div>
                <div className="size-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[11px] shrink-0 font-bold">
                  ✓
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-[8px] bg-white/[0.04] border border-white/[0.05]">
                <div className="flex items-center gap-2 text-[12.5px] text-zinc-300">
                  <span>🤖</span> "Refunds are not available."
                </div>
                <div className="size-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-[11px] shrink-0 font-bold">
                  ✕
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
              <span className="text-[#f26522] font-bold">|</span>
              <span>SYMPTOM: REOPENED SUPPORT TICKETS &amp; ESCALATIONS</span>
            </div>
          </div>

          {/* Card 04 */}
          <div className="p-7 rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md relative overflow-hidden group hover:border-[#f26522]/40 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] font-bold text-[#f26522]">04</span>
              </div>
              <h3 className="text-[19px] font-semibold text-white tracking-tight mb-2.5">
                It stuffs everything into the prompt to compensate
              </h3>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                Engineers end up sending huge chunks of chat history with every request, causing slow replies, higher costs, and lost context in the middle.
              </p>
            </div>

            {/* Visual Graphic: Stacked blurred documents with token badge */}
            <div className="my-6 p-4 rounded-[12px] bg-black/40 border border-white/[0.06] flex items-center justify-between relative overflow-hidden">
              <div className="flex flex-col gap-1.5 opacity-60 w-3/5">
                <div className="h-2 rounded bg-zinc-600 w-full" />
                <div className="h-2 rounded bg-zinc-700 w-5/6" />
                <div className="h-2 rounded bg-zinc-600 w-4/6" />
                <div className="h-2 rounded bg-zinc-700 w-full" />
              </div>

              <div className="px-3 py-1.5 rounded-lg border border-[#f26522]/60 bg-[#f26522]/15 text-[#f26522] flex items-center gap-1.5 text-[11.5px] font-mono font-semibold shadow-[0_0_20px_rgba(242,101,34,0.3)]">
                <span>⚠️</span>
                <span>50,000+ tokens</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
              <span className="text-[#f26522] font-bold">|</span>
              <span>SYMPTOM: 80% WASTED TOKEN BUDGET &amp; SLOW REPLIES</span>
            </div>
          </div>

        </div>

        {/* Bottom Core Truth Alert Bar */}
        <div className="mt-10 p-4.5 sm:p-5 rounded-[14px] bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-center gap-3">
          <span className="text-[#f26522] text-[18px]">⚠️</span>
          <p className="text-[14.5px] text-zinc-300 font-normal">
            <strong className="text-[#f26522] font-semibold">The core truth:</strong> Memory failure is not an interface nitpick. It is tickets, refunds, lost hours, and churn.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: THE ALTERNATIVES MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 px-5 sm:px-8 border-t border-white/[0.06] bg-[#0c0c0e]/60">
        <div className="w-full max-w-[1240px] mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-widest uppercase mb-3">
              <span className="text-[#f26522] font-semibold">02</span>
              <span className="text-zinc-600">/</span>
              <span>THE ALTERNATIVES</span>
            </div>
            <h2 className="text-[30px] sm:text-[40px] font-bold tracking-tight text-white leading-tight">
              Every alternative to memory has been tried
            </h2>
            <p className="mt-3 text-[15px] text-zinc-400 max-w-2xl leading-relaxed">
              Teams spend months stitching vector databases, prompt stuffing, and fine-tuning before realizing context management is a distinct architectural problem.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-[16px] border border-white/[0.09] bg-[#111114]/90 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left text-[13.5px] border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-4 px-6 font-semibold text-zinc-300 uppercase tracking-wider text-[11.5px] font-mono">
                    Approach
                  </th>
                  <th className="py-4 px-6 font-semibold text-zinc-300 uppercase tracking-wider text-[11.5px] font-mono">
                    Why Teams Try It
                  </th>
                  <th className="py-4 px-6 font-semibold text-zinc-300 uppercase tracking-wider text-[11.5px] font-mono">
                    Where It Breaks Down
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#f26522] uppercase tracking-wider text-[11.5px] font-mono">
                    Maximem Synap
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Vector DBs / RAG</td>
                  <td className="py-4 px-6 text-zinc-400">Good at document retrieval from static corpora</td>
                  <td className="py-4 px-6 text-rose-400/90">No temporal order, no deduplication, retrieves outdated facts</td>
                  <td className="py-4 px-6 text-emerald-400 font-medium">Auto-resolves recency &amp; entity conflicts</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Prompt Stuffing</td>
                  <td className="py-4 px-6 text-zinc-400">Zero setup; dump whole chat history into prompt</td>
                  <td className="py-4 px-6 text-rose-400/90">Exploding token bills, slow latency, lost-in-the-middle degradation</td>
                  <td className="py-4 px-6 text-emerald-400 font-medium">Ranked &lt;200 tokens injected right before turn</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Fine-Tuning</td>
                  <td className="py-4 px-6 text-zinc-400">Embeds knowledge directly into weights</td>
                  <td className="py-4 px-6 text-rose-400/90">Static, slow, catastrophic forgetting, cannot delete user data (GDPR)</td>
                  <td className="py-4 px-6 text-emerald-400 font-medium">Instant writes, point deletion &amp; tenant isolation</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Agent Scratchpads</td>
                  <td className="py-4 px-6 text-zinc-400">Agents take notes in local key-value or JSON</td>
                  <td className="py-4 px-6 text-rose-400/90">Fails across sessions, no cross-agent sharing, no hierarchy</td>
                  <td className="py-4 px-6 text-emerald-400 font-medium">3-tier persistent memory across entire fleet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: (From media_1790256695337.png)
          "Memory is three layers, not one bucket."
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 px-5 sm:px-8 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-zinc-400 tracking-widest uppercase mb-3">
              <span className="text-[#f26522] font-semibold">03</span>
              <span className="text-zinc-600">/</span>
              <span>THE THREE LAYERS</span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight text-white leading-tight mb-5">
              Memory is three layers,{" "}
              <span className="text-[#f26522]">not one bucket.</span>
            </h2>

            <p className="text-[15px] text-zinc-400 leading-relaxed mb-6">
              Different types of information live at different timescales. Good memory systems don't just store everything — they organise it.
            </p>

            <div className="w-12 h-px bg-white/[0.15] mb-6" />

            <p className="text-[14px] text-zinc-400 leading-relaxed">
              Most memory tools give you the session. The real value is in the two layers above it.
            </p>
          </div>

          {/* Center Column: 3D Isometric Slabs */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative w-full max-w-[340px] group">
              <div className="absolute inset-0 bg-[#f26522]/15 rounded-full blur-[80px] pointer-events-none" />
              <img
                src="/synap/three-layers-slabs.png"
                alt="Three Layers of Memory Slabs"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out z-10 relative"
              />
            </div>
          </div>

          {/* Right Column: Layer Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Layer 1: Organisational */}
            <div className="p-5 rounded-[16px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md hover:border-[#f26522]/50 transition-all duration-300 relative group">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-[8px] border border-[#f26522]/40 bg-[#f26522]/10 flex items-center justify-center text-[#f26522]">
                  🏢
                </div>
                <h3 className="text-[16px] font-semibold text-white tracking-tight">
                  Organisational
                </h3>
              </div>
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                Shared across your users and tenants. Your policies, product facts, pricing, and company knowledge — not just personal knowledge.
              </p>
            </div>

            {/* Layer 2: Long-term */}
            <div className="p-5 rounded-[16px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md hover:border-[#f26522]/50 transition-all duration-300 relative group">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-[8px] border border-[#f26522]/40 bg-[#f26522]/10 flex items-center justify-center text-[#f26522]">
                  👤
                </div>
                <h3 className="text-[16px] font-semibold text-white tracking-tight">
                  Long-term
                </h3>
              </div>
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                Persists across sessions, per person. The layer a user means when they say <em className="text-zinc-200">"it remembers me."</em>
              </p>
            </div>

            {/* Layer 3: Short-term */}
            <div className="p-5 rounded-[16px] border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-md hover:border-[#f26522]/50 transition-all duration-300 relative group">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-[8px] border border-[#f26522]/40 bg-[#f26522]/10 flex items-center justify-center text-[#f26522]">
                  ⏱️
                </div>
                <h3 className="text-[16px] font-semibold text-white tracking-tight">
                  Short-term
                </h3>
              </div>
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                The current session. Working memory.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: (From media_1790256787314.png)
          "Maximem Synap, in two calls"
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 px-5 sm:px-8 border-t border-white/[0.06] bg-[#0c0c0e]/70">
        <div className="w-full max-w-[1240px] mx-auto">
          
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-zinc-400 tracking-widest uppercase mb-2">
              <span className="text-[#f26522] font-semibold">04</span>
              <span className="text-zinc-600">/</span>
              <span>THE PRODUCT</span>
            </div>
            <p className="text-[14px] text-zinc-400 font-mono mb-2">
              Memory is not a storage problem alone. It is an active context-management problem.
            </p>
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-white leading-tight">
              Maximem Synap, in <span className="text-[#f26522]">two calls</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 2 Cards + Connectors */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* Card 1: What it is */}
              <div className="p-6 rounded-[16px] border border-white/[0.08] bg-[#111114]/90 backdrop-blur-md relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-9 rounded-[8px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#f26522]">
                    💬
                  </div>
                  <h3 className="text-[18px] font-semibold text-white tracking-tight">
                    What it is
                  </h3>
                </div>
                <p className="text-[13.5px] text-zinc-400 leading-relaxed">
                  You send Synap the conversation as it happens. Before your agent replies, you ask what is known about this person, and you get back a short, ranked set of facts, formatted and ready for the prompt. Two calls. Writes return immediately and never block your agent.
                </p>
              </div>

              {/* Connector pill 01 Write */}
              <div className="flex items-center gap-3 px-3">
                <span className="px-3 py-1 rounded-full border border-[#f26522]/50 bg-[#f26522]/10 text-[#f26522] text-[11px] font-mono font-bold">
                  01 Write
                </span>
                <span className="text-[12px] text-zinc-400 font-mono">
                  Send conversation in real-time.
                </span>
              </div>

              {/* Card 2: What you do not build */}
              <div className="p-6 rounded-[16px] border border-white/[0.08] bg-[#111114]/90 backdrop-blur-md relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-9 rounded-[8px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#f26522]">
                    📦
                  </div>
                  <h3 className="text-[18px] font-semibold text-white tracking-tight">
                    What you do not build
                  </h3>
                </div>
                <p className="text-[13.5px] text-zinc-400 leading-relaxed">
                  No vector database to run. No extraction pipeline to build. No retrieval ranker to tune. No scoping logic to get right.{" "}
                  <strong className="text-[#f26522] font-semibold">Those are the product.</strong>
                </p>
              </div>

              {/* Connector pill 02 Read */}
              <div className="flex items-center gap-3 px-3">
                <span className="px-3 py-1 rounded-full border border-[#f26522]/50 bg-[#f26522]/10 text-[#f26522] text-[11px] font-mono font-bold">
                  02 Read
                </span>
                <span className="text-[12px] text-zinc-400 font-mono">
                  Get ranked, formatted memory for your prompt.
                </span>
              </div>

            </div>

            {/* Right: Mac-style Code Box */}
            <div className="lg:col-span-7 rounded-[18px] border border-white/[0.12] bg-[#0c0c0e] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[#ff5f57]" />
                  <div className="size-3 rounded-full bg-[#febc2e]" />
                  <div className="size-3 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono text-[11.5px] text-zinc-400">
                    {activeCodeLang === "python" ? "quickstart.py" : activeCodeLang === "typescript" ? "quickstart.ts" : "quickstart.sh"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-white/[0.05] rounded-[6px] p-0.5 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveCodeLang("python")}
                      className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                        activeCodeLang === "python" ? "bg-[#f26522] text-white font-semibold" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Python
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeLang("typescript")}
                      className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                        activeCodeLang === "typescript" ? "bg-[#f26522] text-white font-semibold" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      TypeScript
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeLang("curl")}
                      className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                        activeCodeLang === "curl" ? "bg-[#f26522] text-white font-semibold" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      cURL
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyCode(activeCodeLang === "python" ? pythonSnippet : activeCodeLang === "typescript" ? typescriptSnippet : curlSnippet)}
                    className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Code"
                  >
                    {copiedCode ? (
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">Copied!</span>
                    ) : (
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Pre Box */}
              <div className="p-5 font-mono text-[12.5px] leading-relaxed overflow-x-auto text-zinc-300">
                <pre>
                  <code>
                    {activeCodeLang === "python" && pythonSnippet}
                    {activeCodeLang === "typescript" && typescriptSnippet}
                    {activeCodeLang === "curl" && curlSnippet}
                  </code>
                </pre>
              </div>
            </div>

          </div>

          {/* Bottom 4 Feature Pills */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <span className="text-[#f26522] font-mono font-bold">{`</>`}</span>
              <span className="text-[13px] text-zinc-300 font-medium">Python &amp; TypeScript SDKs</span>
            </div>
            <div className="p-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <span className="text-[#f26522]">⬡</span>
              <span className="text-[13px] text-zinc-300 font-medium">A REST API from any language</span>
            </div>
            <div className="p-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <span className="text-[#f26522]">🔗</span>
              <span className="text-[13px] text-zinc-300 font-medium">A hosted MCP endpoint</span>
            </div>
            <div className="p-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <span className="text-[#f26522]">⛶</span>
              <span className="text-[13px] text-zinc-300 font-medium">
                Native adapters for <strong className="text-[#f26522] font-semibold">23 agent frameworks</strong>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: CAPABILITIES (Pixel-perfect reproduction)
          "What changes when your agent can remember"
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 px-5 sm:px-8 bg-[#070709] overflow-hidden">
        {/* Ambient Radial Amber Glow behind Title */}
        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-[radial-gradient(ellipse_at_center,_rgba(242,101,34,0.14)_0%,_rgba(242,101,34,0.03)_50%,_transparent_75%)] pointer-events-none blur-3xl z-0" />

        <div className="w-full max-w-[1240px] mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] tracking-[0.22em] uppercase mb-4">
              <span className="text-[#f26522] font-semibold">05</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 font-medium">CAPABILITIES</span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold tracking-tight text-white leading-[1.14]">
              What changes when your agent
              <br />
              can <span className="text-[#f26522] drop-shadow-[0_0_24px_rgba(242,101,34,0.45)]">remember</span>
            </h2>
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#9ca3af] leading-relaxed max-w-[620px] mx-auto font-normal">
              From individual users to your entire organization, agents get the right context at the right time — without bloating the prompt.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* ──────── CARD 01: Remembers every user ──────── */}
            <div className="rounded-[20px] border border-white/[0.08] bg-[#0c0c0e]/95 backdrop-blur-xl p-6 flex flex-col justify-between h-[410px] transition-all duration-300 hover:border-[#f26522]/30 relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div>
                <span className="font-mono text-[13px] font-bold text-[#f26522]">01</span>
                <h3 className="text-[18px] font-semibold text-white tracking-tight mt-2 mb-2 leading-snug">
                  Remembers every user
                </h3>
                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                  Recall across sessions, channels, and months — not just the last twenty turns.
                </p>
              </div>

              {/* Stacked Profile Cards Visual */}
              <div className="relative mt-auto pt-6 flex flex-col justify-end">
                {/* Decorative background ghost card outline for depth */}
                <div className="absolute top-2 right-1 w-[90%] h-[120px] rounded-[14px] border border-white/[0.05] bg-white/[0.015] rotate-2 pointer-events-none -z-10" />

                {/* Forefront Card: Sarah Chen */}
                <div className="relative z-20 rounded-[14px] bg-[#181820] border border-white/[0.14] p-3.5 flex items-center gap-3.5 shadow-[0_14px_30px_rgba(0,0,0,0.7)] backdrop-blur-md">
                  <div className="size-9 rounded-full bg-[#f26522]/15 border border-[#f26522]/40 flex items-center justify-center text-[#f26522] shrink-0">
                    <svg className="size-4.5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold text-white tracking-tight">Sarah Chen</div>
                    <div className="text-[11px] text-[#9ca3af] truncate">Prefers detailed answers</div>
                  </div>
                </div>

                {/* Middle Card: Uses Slack for updates */}
                <div className="relative z-10 -mt-2.5 rounded-[14px] bg-[#131319]/90 border border-white/[0.06] p-3 flex items-center gap-3 opacity-60">
                  <div className="size-7 rounded-full bg-zinc-800 border border-white/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-semibold text-zinc-400">SC</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-zinc-300">Sp:</div>
                    <div className="text-[10px] text-zinc-500 truncate">Uses Slack for updates</div>
                  </div>
                </div>

                {/* Bottom Card: Works on growth */}
                <div className="relative z-0 -mt-2.5 rounded-[14px] bg-[#0e0e13]/80 border border-white/[0.04] p-2.5 flex items-center gap-3 opacity-30">
                  <div className="size-7 rounded-full bg-zinc-900 border border-white/[0.04] flex items-center justify-center shrink-0">
                    <svg className="size-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-zinc-400">Sarah</div>
                    <div className="text-[10px] text-zinc-600 truncate">Works on growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ──────── CARD 02: Remembers your organization ──────── */}
            <div className="rounded-[20px] border border-white/[0.08] bg-[#0c0c0e]/95 backdrop-blur-xl p-6 flex flex-col justify-between h-[410px] transition-all duration-300 hover:border-[#f26522]/30 relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div>
                <span className="font-mono text-[13px] font-bold text-[#f26522]">02</span>
                <h3 className="text-[18px] font-semibold text-white tracking-tight mt-2 mb-2 leading-snug">
                  Remembers your organization
                </h3>
                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                  Shared policies, product knowledge, and team context for every agent that should see them.
                </p>
              </div>

              {/* Acme Corp Directory Card Visual */}
              <div className="mt-auto pt-6">
                <div className="rounded-[16px] bg-[#121217] border border-white/[0.08] p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-lg">
                  {/* Header Row */}
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/[0.06]">
                    <div className="size-7 rounded-[7px] bg-[#f26522]/15 border border-[#f26522]/30 flex items-center justify-center shrink-0">
                      <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-white tracking-tight">Acme Corp</span>
                  </div>

                  {/* Menu Rows */}
                  <div className="flex flex-col gap-2 pt-0.5">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-[12px] text-zinc-300 font-normal">Product knowledge</span>
                      </div>
                      <svg className="size-3 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-[12px] text-zinc-300 font-normal">Security policies</span>
                      </div>
                      <svg className="size-3 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-[12px] text-zinc-300 font-normal">Team context</span>
                      </div>
                      <svg className="size-3 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center justify-between text-zinc-300 py-0.5">
                      <div className="flex items-center gap-2.5">
                        <svg className="size-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                        </svg>
                        <span className="text-[12px] text-zinc-300 font-normal">Pricing and contracts</span>
                      </div>
                      <svg className="size-3 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ──────── CARD 03: Without the token bill ──────── */}
            <div className="rounded-[20px] border border-white/[0.08] bg-[#0c0c0e]/95 backdrop-blur-xl p-6 flex flex-col justify-between h-[410px] transition-all duration-300 hover:border-[#f26522]/30 relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div>
                <span className="font-mono text-[13px] font-bold text-[#f26522]">03</span>
                <h3 className="text-[18px] font-semibold text-white tracking-tight mt-2 mb-2 leading-snug">
                  Without the token bill
                </h3>
                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                  Context stays lean as conversations grow, so cost doesn't balloon and quality doesn't rot.
                </p>
              </div>

              {/* Before vs With Synap Visual */}
              <div className="mt-auto pt-6 flex items-center justify-between gap-2.5">
                {/* Before Card */}
                <div className="rounded-[14px] bg-[#121217] border border-white/[0.06] p-3 flex-1 flex flex-col gap-2">
                  <span className="text-[11px] font-medium text-zinc-400 tracking-tight">Before</span>
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
                          <svg className="size-2 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
                <div className="rounded-[14px] bg-[#161620] border border-white/[0.12] p-3 flex-1 flex flex-col gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                  <span className="text-[11px] font-semibold text-white tracking-tight">With Synap</span>
                  <div className="flex flex-col gap-2.5 pt-1">
                    {[
                      { w: "w-[80%]" },
                      { w: "w-[85%]" },
                      { w: "w-[70%]" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-1.5">
                        <div className={`h-2.5 rounded-full bg-zinc-700/60 ${row.w}`} />
                        <div className="size-4 rounded-full bg-[#f26522] flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(242,101,34,0.45)]">
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
            <div className="rounded-[20px] border border-white/[0.08] bg-[#0c0c0e]/95 backdrop-blur-xl p-6 flex flex-col justify-between h-[410px] transition-all duration-300 hover:border-[#f26522]/30 relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div>
                <span className="font-mono text-[13px] font-bold text-[#f26522]">04</span>
                <h3 className="text-[18px] font-semibold text-white tracking-tight mt-2 mb-2 leading-snug">
                  Fast enough for voice
                </h3>
                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                  Context is pre-fetched before your agent asks, under 15ms at P75, in-conversation.
                </p>
              </div>

              {/* Voice Audio Waveform & Retrieval Visual */}
              <div className="mt-auto pt-6">
                <div className="rounded-[18px] bg-[#121217] border border-white/[0.08] p-4 flex flex-col gap-3.5 relative shadow-lg">
                  {/* Speech bubble notch on bottom-left */}
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#121217] border-b border-l border-white/[0.08] rotate-[-45deg]" />

                  {/* Mic & Waveform Row */}
                  <div className="flex items-center gap-3">
                    {/* Glowing Mic Button */}
                    <div className="size-11 rounded-full border border-[#f26522] bg-[#f26522]/10 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(242,101,34,0.3)]">
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
                          className="w-[2.5px] rounded-full bg-zinc-700/50"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Retrieval Pill Badge */}
                  <div className="flex justify-end pt-1 relative z-10">
                    <div className="rounded-[10px] bg-[#191922] border border-white/[0.12] px-3 py-1.5 flex items-center gap-2 shadow-md">
                      <svg className="size-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <span className="text-[11.5px] font-mono text-zinc-200 tracking-tight">&lt;15ms P75 retrieval</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: THE 5-PHASE LIFECYCLE (Pixel-perfect reproduction)
          "What a memory layer has to do, and keep doing"
      ───────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="relative w-full py-20 lg:py-24 px-5 sm:px-8 border-t border-white/[0.06] bg-[#070709] overflow-hidden">
        {/* Ambient Radial Amber Glow */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-[radial-gradient(ellipse_at_center,_rgba(242,101,34,0.15)_0%,_rgba(242,101,34,0.03)_50%,_transparent_75%)] pointer-events-none blur-3xl z-0" />

        <div className="w-full max-w-[1240px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] tracking-[0.22em] uppercase mb-4">
              <span className="text-[#f26522] font-semibold">06</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 font-medium">THE 5-PHASE LIFECYCLE</span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold tracking-tight text-white leading-[1.12]">
              What a memory layer has to do,
              <br />
              and <span className="text-[#f26522] drop-shadow-[0_0_24px_rgba(242,101,34,0.45)]">keep doing</span>
            </h2>
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#9ca3af] leading-relaxed max-w-[620px] mx-auto">
              A turn does not land in a database. It goes through a complete real-time lifecycle.
            </p>
          </div>

          {/* 5-Phase Horizontal Connected Stepper Row */}
          <div className="flex items-center justify-between gap-1 sm:gap-2 mb-10 overflow-x-auto pb-4 pt-2 scrollbar-none">
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
                <div key={phase.id} className="flex items-center shrink-0">
                  <button
                    type="button"
                    onClick={() => setActivePhase(phase.id)}
                    className="flex items-center gap-3 text-left group cursor-pointer transition-all duration-200"
                  >
                    {/* Squircle Icon Container */}
                    <div
                      className={`size-[44px] sm:size-[46px] rounded-[13px] border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "border-[#f26522] bg-[#f26522]/10 text-[#f26522] shadow-[0_0_18px_rgba(242,101,34,0.3)]"
                          : "border-white/[0.08] bg-[#121216] text-zinc-400 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      {phase.icon}
                    </div>

                    {/* Step Text Info */}
                    <div className="flex flex-col pr-2">
                      <span
                        className={`text-[11px] font-mono tracking-wider ${
                          isActive ? "text-[#f26522] font-bold" : "text-zinc-500 font-medium"
                        }`}
                      >
                        {phase.num}
                      </span>
                      <span
                        className={`text-[13px] sm:text-[13.5px] font-semibold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {phase.name}
                      </span>
                      <span className="text-[11px] text-zinc-500 whitespace-nowrap mt-0.5">
                        {phase.desc}
                      </span>
                    </div>
                  </button>

                  {/* Connecting Line Between Steps */}
                  {idx < arr.length - 1 && (
                    <div
                      className={`h-px w-6 sm:w-10 lg:w-14 shrink-0 mx-2 transition-colors duration-300 ${
                        idx === 0 && activePhase === 0
                          ? "bg-[#f26522]"
                          : activePhase > idx
                          ? "bg-[#f26522]"
                          : "bg-white/[0.08]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Phase Display Card */}
          <div className="p-6 sm:p-9 lg:p-10 rounded-[22px] sm:rounded-[24px] border border-white/[0.08] bg-[#0c0c0e]/95 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Subtle Vertical Dashed Grid Guide Lines */}
            <div className="hidden lg:grid grid-cols-4 absolute inset-0 pointer-events-none z-0 px-8">
              <div className="border-r border-dashed border-white/[0.03] h-full" />
              <div className="border-r border-dashed border-white/[0.03] h-full" />
              <div className="border-r border-dashed border-white/[0.03] h-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left Column: Phase Description & Key Outcomes */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="font-mono text-[11px] text-[#f26522] uppercase tracking-[0.16em] font-semibold">
                  PHASE 1 / INGESTION PIPELINE
                </div>
                <h3 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight leading-[1.18]">
                  Deciding what is signal
                  <br />
                  vs ephemeral noise
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-[#9ca3af] leading-relaxed">
                  Not every word in a conversation belongs in permanent memory. Synap's ingestion filter separates transient pleasantries ("Thanks!", "Sounds great") from actionable constraints ("I work on the East Coast and need meetings before 2 PM"). Writes return immediately and process asynchronously.
                </p>

                <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
                  <div className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-[0.18em] font-medium mb-1">
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
                    <div className="text-[12px] font-medium text-white tracking-tight mb-0.5 flex items-center gap-1.5">
                      <svg className="size-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Conversation</span>
                    </div>

                    {/* Bubble 1 */}
                    <div className="p-3 rounded-[12px] bg-[#141417] border border-white/[0.07] text-[11.5px] text-zinc-400 leading-snug flex items-start gap-2.5 shadow-sm">
                      <div className="size-5 rounded-[6px] bg-[#f26522]/15 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] shrink-0 text-[10px]">
                        💬
                      </div>
                      <div>
                        Sounds great,
                        <br />
                        thanks!
                      </div>
                    </div>

                    {/* Bubble 2: Active fact */}
                    <div className="p-3 rounded-[12px] bg-[#171311] border border-[#f26522]/60 text-[11.5px] text-zinc-200 leading-snug flex items-start gap-2.5 shadow-[0_0_20px_rgba(242,101,34,0.14)]">
                      <div className="size-5 rounded-[6px] bg-[#f26522]/20 border border-[#f26522]/40 flex items-center justify-center text-[#f26522] shrink-0 text-[10px]">
                        💬
                      </div>
                      <div>
                        I work on the <span className="text-white font-medium">East Coast</span> and need meetings before <span className="text-white font-medium">2 PM</span>.
                      </div>
                    </div>

                    {/* Bubble 3 */}
                    <div className="p-3 rounded-[12px] bg-[#141417] border border-white/[0.07] text-[11.5px] text-zinc-400 leading-snug flex items-start gap-2.5 shadow-sm">
                      <div className="size-5 rounded-[6px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 shrink-0 text-[10px]">
                        💬
                      </div>
                      <div>
                        Can you share
                        <br />
                        the deck?
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Ingestion Filter (Enclosed Box) */}
                  <div className="rounded-[16px] bg-[#0c0c0f]/90 border border-white/[0.08] p-3 flex flex-col gap-2.5 shadow-lg relative">
                    <div className="text-[12.5px] font-semibold text-white tracking-tight mb-0.5 flex items-center gap-1.5">
                      <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                      <span>Ingestion Filter</span>
                    </div>

                    {/* Filter Item 1 */}
                    <div className="p-2.5 rounded-[10px] bg-[#161619] border border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="size-4.5 rounded-full border border-white/[0.1] flex items-center justify-center text-[9px] text-zinc-500">
                          ⚙
                        </div>
                        <div>
                          <div className="text-zinc-300 font-medium text-[11px]">Pleasantry</div>
                          <div className="text-zinc-500 text-[10px]">(ignored)</div>
                        </div>
                      </div>
                      <div className="size-4.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-500 flex items-center justify-center text-[9px]">
                        ✕
                      </div>
                    </div>

                    {/* Filter Item 2: Active fact */}
                    <div className="p-2.5 rounded-[10px] bg-[#1f130c] border border-[#f26522] flex items-center justify-between text-[11px] shadow-[0_0_18px_rgba(242,101,34,0.22)]">
                      <div className="flex items-center gap-2">
                        <div className="size-4.5 rounded-full border border-[#f26522] flex items-center justify-center text-[9px] text-[#f26522]">
                          🎯
                        </div>
                        <div>
                          <div className="text-white font-medium text-[11px]">Actionable fact</div>
                          <div className="text-[#f26522] text-[10px] font-medium">(stored)</div>
                        </div>
                      </div>
                      <div className="size-5 rounded-full bg-[#f26522] text-white flex items-center justify-center text-[10px] font-bold shadow-[0_0_8px_#f26522]">
                        ✓
                      </div>
                    </div>

                    {/* Filter Item 3 */}
                    <div className="p-2.5 rounded-[10px] bg-[#161619] border border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="size-4.5 rounded-full border border-white/[0.1] flex items-center justify-center text-[9px] text-zinc-500">
                          ⚙
                        </div>
                        <div>
                          <div className="text-zinc-300 font-medium text-[11px]">General request</div>
                          <div className="text-zinc-500 text-[10px]">(ignored)</div>
                        </div>
                      </div>
                      <div className="size-4.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-500 flex items-center justify-center text-[9px]">
                        ✕
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Stored Memory */}
                  <div className="flex flex-col gap-2.5">
                    <div className="text-[12px] font-medium text-white tracking-tight mb-0.5 flex items-center gap-1.5">
                      <svg className="size-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                        <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
                        <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                      </svg>
                      <span>Stored Memory</span>
                    </div>

                    {/* Stored Item 1 (Active) */}
                    <div className="p-3 rounded-[12px] bg-[#171311] border border-[#f26522]/60 flex items-center justify-between text-[11.5px] shadow-[0_0_18px_rgba(242,101,34,0.15)]">
                      <div className="flex items-center gap-2.5">
                        <div className="size-6 rounded-[7px] bg-[#f26522]/15 border border-[#f26522]/40 flex items-center justify-center text-[#f26522] text-[10px] shrink-0">
                          📥
                        </div>
                        <div>
                          <div className="font-semibold text-white text-[11.5px] leading-tight">User availability</div>
                          <div className="text-zinc-400 text-[10.5px] mt-0.5">East Coast, before 2 PM</div>
                        </div>
                      </div>
                      <div className="size-4.5 rounded-full border border-[#f26522] text-[#f26522] flex items-center justify-center text-[10px] shrink-0 font-bold">
                        ✓
                      </div>
                    </div>

                    {/* Stored Item 2 (Dim) */}
                    <div className="p-2.5 rounded-[10px] bg-white/[0.015] border border-white/[0.04] flex items-center justify-between text-[11px] opacity-40">
                      <div className="flex items-center gap-2">
                        <div className="size-5 rounded-[5px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-600 text-[9px]">
                          📄
                        </div>
                        <div>
                          <div className="text-zinc-400 font-medium text-[11px]">Pleasantries</div>
                          <div className="text-zinc-600 text-[10px]">Not stored</div>
                        </div>
                      </div>
                      <div className="size-4 rounded-full bg-white/[0.02] text-zinc-600 flex items-center justify-center text-[8px]">
                        ✕
                      </div>
                    </div>

                    {/* Stored Item 3 (Dim) */}
                    <div className="p-2.5 rounded-[10px] bg-white/[0.015] border border-white/[0.04] flex items-center justify-between text-[11px] opacity-40">
                      <div className="flex items-center gap-2">
                        <div className="size-5 rounded-[5px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-600 text-[9px]">
                          📄
                        </div>
                        <div>
                          <div className="text-zinc-400 font-medium text-[11px]">Deck request</div>
                          <div className="text-zinc-600 text-[10px]">Not stored</div>
                        </div>
                      </div>
                      <div className="size-4 rounded-full bg-white/[0.02] text-zinc-600 flex items-center justify-center text-[8px]">
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
          SECTION 08: (From media_1790257207341.png)
      {/* ─────────────────────────────────────────────────────────────
          SECTION 08: THREE-TIER CONSOLIDATION (Pixel-perfect reproduction)
          "Memory that is maintained, not just stored"
      ───────────────────────────────────────────────────────────── */}
      <section id="consolidation" className="relative w-full py-24 px-5 sm:px-8 max-w-[1240px] mx-auto">
        {/* Ambient Radial Amber Glow matching user mockup */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[860px] h-[420px] bg-[radial-gradient(ellipse_at_center,_rgba(242,101,34,0.22)_0%,_rgba(242,101,34,0.07)_45%,_transparent_75%)] pointer-events-none blur-3xl z-0" />

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] tracking-[0.22em] uppercase mb-4">
            <span className="text-[#f26522] font-semibold">08</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 font-medium">THREE-TIER CONSOLIDATION</span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold tracking-tight text-white leading-[1.12]">
            Memory that is maintained,
            <br />
            not just <span className="text-[#f26522] drop-shadow-[0_0_24px_rgba(242,101,34,0.45)]">stored</span>
          </h2>
          <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#9ca3af] leading-relaxed max-w-[600px] mx-auto">
            Context moves through a natural cycle — from recent, to recurring,
            <br className="hidden sm:inline" /> to long-term memory, so your agent actually remembers.
          </p>
        </div>

        {/* 3 Horizontal Connected Cards with Glowing Connectors */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-0 max-w-[1140px] mx-auto z-10">
          
          {/* Card 1: Meditation */}
          <div className="w-full lg:w-[31%] h-[200px] sm:h-[208px] rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/95 relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group hover:border-[#f26522]/40 transition-all duration-300">
            {/* Right Photo with Smooth Gradient Blend */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none overflow-hidden rounded-r-[18px]">
              <img
                src="/synap/consolidation_card_photo1.png"
                alt="Meditation desk notebook"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0c0c0e] to-transparent pointer-events-none" />
            </div>

            {/* Left Content (Text) */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-[10px] sm:text-[10.5px] font-mono font-medium text-zinc-400 uppercase tracking-[0.18em] mb-1">
                SHORT-TERM
              </div>
              <h3 className="text-[20px] sm:text-[21px] font-bold text-white tracking-tight mb-1.5 font-['Geist_Variable:Bold',sans-serif]">
                Meditation
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#9ca3af] font-normal leading-[1.35] max-w-[150px]">
                Every few hours,
                <br />
                a light pass
              </p>
            </div>

            {/* Bottom Left Icon Squircle */}
            <div className="relative z-10 size-[36px] rounded-[10px] bg-[#141418] border border-white/[0.1] flex items-center justify-center text-[#f26522] shadow-sm group-hover:border-[#f26522]/40 transition-colors">
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 14" />
              </svg>
            </div>
          </div>

          {/* Connector 1 (between Card 1 & Card 2) */}
          <div className="hidden lg:flex items-center justify-center w-[3.5%] h-px bg-[#f26522]/50 relative z-20">
            <div className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522,0_0_16px_rgba(242,101,34,0.6)]" />
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center h-6 w-px bg-[#f26522]/50 my-1">
            <div className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522]" />
          </div>

          {/* Card 2: Nap */}
          <div className="w-full lg:w-[31%] h-[200px] sm:h-[208px] rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/95 relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group hover:border-[#f26522]/40 transition-all duration-300">
            {/* Right Photo with Smooth Gradient Blend */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none overflow-hidden rounded-r-[18px]">
              <img
                src="/synap/consolidation_card_photo2.png"
                alt="Nap cozy bed"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0c0c0e] to-transparent pointer-events-none" />
            </div>

            {/* Left Content (Text) */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-[10px] sm:text-[10.5px] font-mono font-medium text-zinc-400 uppercase tracking-[0.18em] mb-1">
                MID-TERM
              </div>
              <h3 className="text-[20px] sm:text-[21px] font-bold text-white tracking-tight mb-1.5 font-['Geist_Variable:Bold',sans-serif]">
                Nap
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#9ca3af] font-normal leading-[1.35] max-w-[150px]">
                Once a day,
                <br />
                deeper
              </p>
            </div>

            {/* Bottom Left Icon Squircle */}
            <div className="relative z-10 size-[36px] rounded-[10px] bg-[#141418] border border-white/[0.1] flex items-center justify-center text-[#f26522] shadow-sm group-hover:border-[#f26522]/40 transition-colors">
              <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
          </div>

          {/* Connector 2 (between Card 2 & Card 3) */}
          <div className="hidden lg:flex items-center justify-center w-[3.5%] h-px bg-[#f26522]/50 relative z-20">
            <div className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522,0_0_16px_rgba(242,101,34,0.6)]" />
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center h-6 w-px bg-[#f26522]/50 my-1">
            <div className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522]" />
          </div>

          {/* Card 3: Sleep */}
          <div className="w-full lg:w-[31%] h-[200px] sm:h-[208px] rounded-[18px] border border-white/[0.08] bg-[#0c0c0e]/95 relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group hover:border-[#f26522]/40 transition-all duration-300">
            {/* Right Photo with Smooth Gradient Blend */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none overflow-hidden rounded-r-[18px]">
              <img
                src="/synap/consolidation_card_photo3.png"
                alt="Sleep sunset window"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0c0c0e] to-transparent pointer-events-none" />
            </div>

            {/* Left Content (Text) */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-[10px] sm:text-[10.5px] font-mono font-medium text-zinc-400 uppercase tracking-[0.18em] mb-1">
                LONG-TERM
              </div>
              <h3 className="text-[20px] sm:text-[21px] font-bold text-white tracking-tight mb-1.5 font-['Geist_Variable:Bold',sans-serif]">
                Sleep
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#9ca3af] font-normal leading-[1.35] max-w-[155px]">
                Your quiet hours: deep consolidation and conscious forgetting
              </p>
            </div>

            {/* Bottom Left Icon Squircle */}
            <div className="relative z-10 size-[36px] rounded-[10px] bg-[#141418] border border-white/[0.1] flex items-center justify-center text-[#f26522] shadow-sm group-hover:border-[#f26522]/40 transition-colors">
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
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09: (From media_1790257341748.png)
      {/* ─────────────────────────────────────────────────────────────
          SECTION 09: SCOPING (Pixel-perfect reproduction of user mockup)
          "The right memories reach the right tenant, automatically"
      ───────────────────────────────────────────────────────────── */}
      <section id="scoping" className="w-full py-20 lg:py-24 px-5 sm:px-8 border-t border-white/[0.06] bg-[#09090b]">
        <div className="w-full max-w-[1240px] mx-auto">
          
          {/* Top Half: Left Title & Description, Right Isometric Scoping Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14 lg:mb-16">
            
            {/* Left Title & Description */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-zinc-400 tracking-widest uppercase mb-3.5">
                <span className="text-[#f26522] font-semibold">09</span>
                <span className="text-zinc-600">/</span>
                <span>SCOPING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.12] mb-5">
                The right memories reach<br className="hidden sm:inline" />
                the right tenant, <span className="text-[#f26522]">automatically</span>
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#9ca3af] leading-relaxed max-w-[480px]">
                A request sees its own level and every level above it. Never below. Never sideways. One person&apos;s memory does not reach another person&apos;s session, and one tenant&apos;s does not reach another tenant&apos;s.
              </p>
            </div>

            {/* Right: Full HD Isometric Scoping Diagram (Seamless without card framing) */}
            <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[700px] overflow-hidden group">
                <img
                  src="/synap/scoping_diagram_clean.png"
                  alt="Scoping Hierarchy and Tenant Isolation Diagram"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

          </div>

          {/* Bottom Card: Flexible Hierarchies */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-[22px] sm:rounded-[24px] border border-white/[0.08] bg-[#0d0d10]/95 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtitle & Link */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <div className="text-[11px] font-mono text-[#f26522] uppercase tracking-widest font-semibold mb-3">
                  FLEXIBLE HIERARCHIES
                </div>
                <h3 className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight leading-[1.15] mb-3.5">
                  Your hierarchy,<br />not ours
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#9ca3af] leading-relaxed mb-6 max-w-[340px]">
                  When three levels is not your shape, define your own hierarchy with the names you already use.
                </p>
                <a
                  href="https://docs.maximem.ai/hierarchies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#f26522] hover:text-[#ff8142] transition-colors group cursor-pointer"
                >
                  <span>How hierarchies work</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Right Column: Two Example Hierarchy Chains */}
              <div className="lg:col-span-8 flex flex-col gap-5">
                
                {/* EXAMPLE 1 / OUT OF THE BOX */}
                <div className="p-5 sm:p-6 rounded-[16px] bg-[#121215]/80 border border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="flex flex-col gap-2.5 flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium">
                      EXAMPLE 1 <span className="text-zinc-700">/</span> OUT OF THE BOX
                    </div>
                    
                    {/* Chain: Client -> Customer -> User */}
                    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        <span>Client</span>
                      </div>
                      <span className="text-zinc-600 text-[13px] select-none">→</span>
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                        <span>Customer</span>
                      </div>
                      <span className="text-zinc-600 text-[13px] select-none">→</span>
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>User</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[200px] shrink-0 lg:border-l lg:border-white/[0.08] lg:pl-6">
                    <div className="text-[13.5px] font-semibold text-white tracking-tight">
                      Ideal for SaaS products
                    </div>
                    <div className="text-[12px] text-zinc-400 mt-0.5">
                      Simple and ready to use.
                    </div>
                  </div>
                </div>

                {/* EXAMPLE 2 / YOUR OWN SHAPE */}
                <div className="p-5 sm:p-6 rounded-[16px] bg-[#121215]/80 border border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="flex flex-col gap-2.5 flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium">
                      EXAMPLE 2 <span className="text-zinc-700">/</span> YOUR OWN SHAPE
                    </div>
                    
                    {/* Chain: Hospital -> Department -> Clinician -> Patient */}
                    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                          <line x1="9" y1="9" x2="15" y2="9" />
                          <line x1="12" y1="6" x2="12" y2="12" />
                        </svg>
                        <span>Hospital</span>
                      </div>
                      <span className="text-zinc-600 text-[13px] select-none">→</span>
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>Department</span>
                      </div>
                      <span className="text-zinc-600 text-[13px] select-none">→</span>
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19 12v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4" />
                          <path d="M12 3v3" />
                        </svg>
                        <span>Clinician</span>
                      </div>
                      <span className="text-zinc-600 text-[13px] select-none">→</span>
                      <div className="px-3.5 sm:px-4 py-2 rounded-[10px] bg-[#17171b] border border-white/[0.08] flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-zinc-200 shadow-sm">
                        <svg className="size-4 text-[#f26522]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>Patient</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[200px] shrink-0 lg:border-l lg:border-white/[0.08] lg:pl-6">
                    <div className="text-[13.5px] font-semibold text-white tracking-tight">
                      Use any structure
                    </div>
                    <div className="text-[12px] text-zinc-400 mt-0.5 leading-snug">
                      From enterprises to healthcare, it adapts to your organization.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: PROOF & BENCHMARKS (From user mockup)
          "Highest accuracy, lowest latency, and you can check it yourself"
      ───────────────────────────────────────────────────────────── */}
      <section id="benchmarks" className="w-full py-20 lg:py-24 px-5 sm:px-8 border-t border-white/[0.06] bg-[#09090b]">
        <div className="w-full max-w-[1240px] mx-auto">
          
          {/* Top Row: Left Title & Description, Right 3 KPI Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-zinc-400 tracking-widest uppercase mb-3">
                <span className="text-[#f26522] font-semibold">10</span>
                <span className="text-zinc-600">/</span>
                <span>PROOF</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.12] mb-5">
                Highest accuracy, lowest latency,<br className="hidden sm:inline" />
                and you can <span className="text-[#f26522]">check it yourself</span>
              </h2>

              <p className="text-[14.5px] sm:text-[15px] text-[#9ca3af] leading-relaxed max-w-[560px]">
                Synap scores 92% on LongMemEval, the benchmark that tests whether a memory system retrieves the right fact from a long conversation and holds that accuracy as the conversation grows. In-conversation retrieval is under 15ms at P75. These numbers are a consequence of the architecture, not prompt tricks. The methodology is published and the eval harness is open source, so you can run it against any system you are evaluating.
              </p>
            </div>

            {/* Right Column: 3 KPI Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
              
              {/* Card 1: Accuracy (Active Glowing Orange Border) */}
              <div className="p-4 sm:p-5 rounded-[14px] border border-[#f26522] bg-[#120e0b]/90 shadow-[0_0_30px_rgba(242,101,34,0.18)] flex flex-col justify-between relative">
                <div>
                  {/* Bullseye / Target Icon */}
                  <div className="mb-3 text-[#f26522]">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    ACCURACY
                  </div>
                </div>
                <div>
                  <div className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none mb-1.5 font-['Geist_Variable:Bold',sans-serif]">
                    92.0%
                  </div>
                  <div className="text-[11.5px] text-zinc-400 font-normal">
                    LongMemEval
                  </div>
                </div>
              </div>

              {/* Card 2: Benchmark Score */}
              <div className="p-4 sm:p-5 rounded-[14px] border border-white/[0.08] bg-[#111114]/80 flex flex-col justify-between">
                <div>
                  {/* Bar Chart Icon */}
                  <div className="mb-3 text-[#f26522]">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    BENCHMARK SCORE
                  </div>
                </div>
                <div>
                  <div className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none mb-1.5 font-['Geist_Variable:Bold',sans-serif]">
                    93.2%
                  </div>
                  <div className="text-[11.5px] text-zinc-400 font-normal">
                    LoCoMo
                  </div>
                </div>
              </div>

              {/* Card 3: Retrieval Latency */}
              <div className="p-4 sm:p-5 rounded-[14px] border border-white/[0.08] bg-[#111114]/80 flex flex-col justify-between">
                <div>
                  {/* Lightning Icon */}
                  <div className="mb-3 text-[#f26522]">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    RETRIEVAL LATENCY
                  </div>
                </div>
                <div>
                  <div className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight leading-none mb-1.5 font-['Geist_Variable:Bold',sans-serif]">
                    &lt;15ms
                  </div>
                  <div className="text-[11.5px] text-zinc-400 font-normal">
                    P75 in-conversation
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Large Comparison Table Card */}
          <div className="rounded-[18px] border border-white/[0.08] bg-[#0e0e11]/90 backdrop-blur-md shadow-2xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.07] text-[13px] font-medium text-zinc-400">
                    <th className="py-4 px-6 sm:px-8 w-[28%] font-normal">Metric</th>
                    
                    {/* Synap Column (Highlighted) */}
                    <th className="py-4 px-6 w-[20%] bg-[#1a1410]/70 text-white font-semibold relative border-x border-[#f26522]/20">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.8)]" />
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
                  <tr className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-semibold text-white text-[15px] mb-0.5">
                        LongMemEval (accuracy)
                      </div>
                      <div className="text-[12.5px] text-zinc-400 leading-snug">
                        Retrieves the right fact in long conversations
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#1a1410]/70 border-x border-[#f26522]/20">
                      <span className="text-[17px] font-bold text-white font-['Geist_Variable:Bold',sans-serif]">
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
                  <tr className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-semibold text-white text-[15px] mb-0.5">
                        Entity resolution
                      </div>
                      <div className="text-[12.5px] text-zinc-400 leading-snug">
                        Handles names, roles, and references
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#1a1410]/70 border-x border-[#f26522]/20">
                      <div className="font-semibold text-[#f26522]">
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
                  <tr className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-semibold text-white text-[15px] mb-0.5">
                        Open-source eval harness
                      </div>
                      <div className="text-[12.5px] text-zinc-400 leading-snug">
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

          {/* Comparison Pills Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            {[
              { label: "Synap vs Memo", active: true },
              { label: "Synap vs Zep", active: false },
              { label: "Synap vs Letta", active: false },
              { label: "Synap vs Supermemory", active: false },
              { label: "Synap vs Cognee", active: false },
              { label: "Synap vs Evermind", active: false },
            ].map((tab, idx) => (
              <button
                key={idx}
                type="button"
                className={`px-4 py-2 rounded-[10px] text-[13px] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  tab.active
                    ? "bg-[#1f150e] border border-[#f26522] text-[#f26522] shadow-[0_0_15px_rgba(242,101,34,0.15)]"
                    : "bg-[#111114]/70 hover:bg-[#18181c] border border-white/[0.08] text-zinc-400 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[12px]">→</span>
              </button>
            ))}
          </div>

          {/* Bottom Methodology Link */}
          <div>
            <a
              href="https://docs.maximem.ai/benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#f26522] hover:text-[#ff8142] transition-colors"
            >
              <span>See the full comparison and methodology</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: FAQ
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 px-5 sm:px-8 max-w-[940px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-widest uppercase mb-3">
            <span className="text-[#f26522] font-semibold">11</span>
            <span className="text-zinc-600">/</span>
            <span>FAQ</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight text-white">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {[
            {
              q: "How does Synap differ from a traditional Vector Database?",
              a: "Vector DBs only perform similarity searches over text chunks. They do not handle temporal conflict resolution, entity deduplication, user preferences, or automatic forgetting. Synap is an end-to-end memory engine that combines graph, vector, and key-value indexing with autonomous background consolidation.",
            },
            {
              q: "Is user data isolated across different tenants?",
              a: "Yes. Maximem Synap provides strict cryptographically enforced tenant isolation. Memory scoped to one workspace or user is completely invisible to any other tenant.",
            },
            {
              q: "Can I use Synap with self-hosted LLMs?",
              a: "Yes. Synap operates independently of your LLM provider. You can use it with OpenAI, Anthropic, Google Gemini, Ollama, vLLM, or any private enterprise deployment via our REST API or Python/TS SDKs.",
            },
            {
              q: "What happens when a user updates their preference or revokes information?",
              a: "Synap's temporal resolution automatically detects conflicting assertions. Newer explicit preferences supersede older assumptions, and explicit retraction requests immediately purge the target entity from active retrieval.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="rounded-[14px] border border-white/[0.08] bg-[#111114]/90 backdrop-blur-md overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
              >
                <span className="text-[15.5px] font-semibold text-white tracking-tight">
                  {faq.q}
                </span>
                <span className="text-[#f26522] text-[18px] font-mono shrink-0">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-[14px] text-zinc-400 leading-relaxed border-t border-white/[0.05] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: BOTTOM CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 px-5 sm:px-8 border-t border-white/[0.08] bg-gradient-to-b from-[#09090b] via-[#120d09] to-[#09090b]">
        <div className="w-full max-w-[800px] mx-auto text-center flex flex-col items-center">
          <div className="size-14 rounded-[14px] bg-[#f26522] flex items-center justify-center mb-6 shadow-[0_0_36px_rgba(242,101,34,0.5)]">
            <svg className="size-8 text-white" viewBox="0 0 40 40" fill="currentColor">
              <path d={svgPaths.p807ad80} />
            </svg>
          </div>

          <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight text-white leading-tight">
            Start building with <span className="text-[#f26522]">Maximem Synap</span>
          </h2>

          <p className="mt-4 text-[16px] text-zinc-400 max-w-lg leading-relaxed">
            Give your AI agents permanent, coherent, and secure memory today with two lines of code.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://synap.maximem.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[48px] px-8 rounded-[10px] bg-[#f26522] hover:bg-[#e05a1c] text-white text-[15px] font-semibold tracking-tight flex items-center gap-2.5 transition-all shadow-[0_4px_24px_rgba(242,101,34,0.4)] hover:scale-[1.02] cursor-pointer"
            >
              <span>Get Started Free</span>
              <span>→</span>
            </a>

            <a
              href="https://docs.maximem.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[48px] px-8 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-white text-[15px] font-medium tracking-tight flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Read Documentation</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[12.5px] text-zinc-500 font-mono">
            <span>✓ No credit card required</span>
            <span>✓ Google or GitHub sign-in</span>
            <span>✓ 23 framework SDKs</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER: (From components/website-clone/footer-section.tsx)
          Copied directly from Hero Section as requested
      ───────────────────────────────────────────────────────────── */}
      <FooterSection isLight={isLight} />
    </div>
  );
}
