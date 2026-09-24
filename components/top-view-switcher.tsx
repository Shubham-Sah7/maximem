"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebsiteClone from "@/components/website-clone";
import LinkrunnerView from "@/components/linkrunner";
import MemoView from "@/components/memo";

export type ActiveProject = "maximem" | "linkrunner" | "memo";

export default function TopViewSwitcher() {
  const [activeProject, setActiveProject] = useState<ActiveProject>("maximem");
  const [maximemIsLight, setMaximemIsLight] = useState(false);

  // Sync with URL hash and listen for keyboard shortcuts & custom theme events
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("memo") || hash.includes("mem0") || hash.includes("clean-light")) {
        setActiveProject("memo");
      } else if (hash.includes("linkrunner") || hash.includes("light-saas") || hash.includes("saas")) {
        setActiveProject("linkrunner");
      } else if (hash.includes("maximem") || hash.includes("dark") || hash.includes("obsidian")) {
        setActiveProject("maximem");
      }

      const savedTheme = localStorage.getItem("maximem_theme");
      if (savedTheme === "light") {
        localStorage.setItem("maximem_theme", "dark");
        setMaximemIsLight(false);
      } else {
        setMaximemIsLight(false);
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"
        ) {
          return;
        }

        if (e.key === "1") {
          switchProject("maximem");
        } else if (e.key === "2") {
          switchProject("linkrunner");
        } else if (e.key === "3") {
          switchProject("memo");
        } else if (e.key.toLowerCase() === "t") {
          // Toggle between Dark and Light mode for Option 1 Maximem
          window.dispatchEvent(new CustomEvent("toggle-maximem-theme"));
          setMaximemIsLight((prev) => !prev);
        } else if (e.key.toLowerCase() === "d") {
          if (activeProject === "maximem") {
            window.dispatchEvent(new CustomEvent("toggle-maximem-theme", { detail: { isLight: false } }));
            setMaximemIsLight(false);
          } else {
            switchProject("maximem");
          }
        } else if (e.key.toLowerCase() === "l") {
          if (activeProject === "maximem") {
            window.dispatchEvent(new CustomEvent("toggle-maximem-theme", { detail: { isLight: true } }));
            setMaximemIsLight(true);
          } else {
            switchProject("linkrunner");
          }
        }
      };

      const handleThemeEvent = (e: Event) => {
        const customEvent = e as CustomEvent<{ target?: ActiveProject }>;
        if (customEvent.detail?.target) {
          switchProject(customEvent.detail.target);
        } else {
          window.dispatchEvent(new CustomEvent("toggle-maximem-theme"));
          setMaximemIsLight((prev) => !prev);
        }
      };

      const handleMaximemThemeChanged = (e: Event) => {
        const customEvent = e as CustomEvent<{ isLight?: boolean }>;
        if (typeof customEvent.detail?.isLight === "boolean") {
          setMaximemIsLight(customEvent.detail.isLight);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("toggle-theme", handleThemeEvent);
      window.addEventListener("maximem-theme-changed", handleMaximemThemeChanged);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("toggle-theme", handleThemeEvent);
        window.removeEventListener("maximem-theme-changed", handleMaximemThemeChanged);
      };
    }
  }, [activeProject]);

  const switchProject = (project: ActiveProject) => {
    setActiveProject(project);
    if (typeof window !== "undefined") {
      window.location.hash = project;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isMaximem = activeProject === "maximem";

  return (
    <div className="relative w-full min-h-screen">
      {/* ── Fixed Top Theme & Mode Switcher Bar (h-44px) ──────────────────── */}
      <header className="fixed top-0 left-0 right-0 h-[44px] z-[9999] bg-[#0c0c0e]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.6)] px-4 sm:px-6 flex items-center justify-between select-none">
        
        {/* Left: Brand Logo / Status */}
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500 inline-block" />
          <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase font-medium">
            Maximem
          </span>
        </div>

        {/* Center: Tabs */}
        <div className="flex items-center p-1 rounded-full bg-black/60 border border-white/[0.12] gap-1 shadow-inner">
          
          {/* Option 1: Maximem (Contains Dark & Light in same UI) */}
          <button
            type="button"
            onClick={() => switchProject("maximem")}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none ${
              isMaximem ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {isMaximem && (
              <motion.div
                layoutId="activeThemePill"
                className="absolute inset-0 bg-[#f26522]/15 border border-[#f26522]/50 rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <svg className="relative z-10 size-3.5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span className="relative z-10 text-[12px] tracking-tight">
              Maximem {maximemIsLight ? "(Light)" : "(Dark)"}
            </span>
          </button>

          {/* Option: Synap Redesigned Page */}
          <a
            href="/synap"
            className="relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer select-none"
            title="Open Redesigned Synap Page"
          >
            <span className="size-1.5 rounded-full bg-[#f26522] animate-pulse" />
            <span className="text-[12px] tracking-tight">Synap</span>
            <span className="text-[9px] font-mono px-1 py-0.2 bg-[#f26522]/20 text-[#f26522] rounded">
              NEW
            </span>
          </a>

          {/* Option 2: LinkRunner (Light SaaS Edition) - Commented out
          <button
            type="button"
            onClick={() => switchProject("linkrunner")}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none ${
              activeProject === "linkrunner"
                ? "text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeProject === "linkrunner" && (
              <motion.div
                layoutId="activeThemePill"
                className="absolute inset-0 bg-[#6366f1]/25 border border-[#6366f1]/60 rounded-full shadow-[0_0_14px_rgba(99,102,241,0.35)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <svg className="relative z-10 size-3.5 text-[#a5b4fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <span className="relative z-10 text-[12px] tracking-tight">2. LinkRunner</span>
          </button>
          */}

          {/* Option 3: Memo (Clean Light Edition) - Commented out
          <button
            type="button"
            onClick={() => switchProject("memo")}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none ${
              activeProject === "memo"
                ? "text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeProject === "memo" && (
              <motion.div
                layoutId="activeThemePill"
                className="absolute inset-0 bg-[#f26522]/20 border border-[#f26522]/60 rounded-full shadow-[0_0_14px_rgba(242,101,34,0.35)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <svg className="relative z-10 size-3.5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <span className="relative z-10 text-[12px] tracking-tight">3. Memo</span>
          </button>
          */}
        </div>

        {/* Right: Quick Dark / Light Toggle for Option 1, or Jump to Maximem */}
        <div className="flex items-center gap-2.5">
          {isMaximem ? (
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("toggle-maximem-theme"));
                setMaximemIsLight((prev) => !prev);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-[11px] font-mono text-zinc-200 transition-all cursor-pointer shadow-sm active:scale-95"
              title={`Switch Maximem to ${maximemIsLight ? "Dark" : "Light"} Mode (Shortcut: T)`}
            >
              {maximemIsLight ? (
                <>
                  <svg className="size-3.5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                  <span>Switch to Dark</span>
                </>
              ) : (
                <>
                  <svg className="size-3.5 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  <span>Switch to Light</span>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => switchProject("maximem")}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-[11px] font-mono text-zinc-200 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>← Option 1 (Maximem)</span>
            </button>
          )}
        </div>
      </header>

      {/* ── Active View ──────────────────────────────────────────────────── */}
      <main className="w-full">
        <WebsiteClone />

        {/* Commented out Linkrunner & Memo views:
        <AnimatePresence mode="wait">
          {activeProject === "linkrunner" ? (
            <motion.div
              key="linkrunner-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-[#f7f9fc]"
            >
              <LinkrunnerView />
            </motion.div>
          ) : activeProject === "memo" ? (
            <motion.div
              key="memo-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-white"
            >
              <MemoView />
            </motion.div>
          ) : null}
        </AnimatePresence>
        */}
      </main>
    </div>
  );
}
