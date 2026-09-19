"use client";

import React, { useState } from "react";

interface SynapDashboardVisualProps {
  isLight?: boolean;
}

export default function SynapDashboardVisual({ isLight = false }: SynapDashboardVisualProps) {
  const [activeNav, setActiveNav] = useState<string>("dashboard");
  const [copiedClientId, setCopiedClientId] = useState(false);

  const handleCopyClientId = () => {
    navigator.clipboard?.writeText("cli_e7be3c3ff1054a52");
    setCopiedClientId(true);
    setTimeout(() => setCopiedClientId(false), 1800);
  };

  // Maximem Logo SVG path (geometric brand vector)
  const maximemLogoPath =
    "M0.137112 20.262C-0.0456666 20.1197 -0.0456661 19.8418 0.137113 19.6995C2.68329 17.7174 4.89707 15.2205 6.60978 12.254C8.32252 9.28751 9.37798 6.12189 9.82145 2.9258C9.85325 2.69637 10.0939 2.5574 10.3086 2.64455C13.2982 3.85853 16.5674 4.52733 19.9928 4.52733C23.4182 4.52731 26.6874 3.85854 29.6771 2.64455C29.8917 2.5574 30.1324 2.69637 30.1642 2.9258C30.6077 6.12189 31.6631 9.28751 33.3758 12.254C35.0885 15.2205 37.3023 17.7173 39.8485 19.6994C40.0313 19.8417 40.0313 20.1196 39.8485 20.2619C37.3023 22.244 35.0885 24.7408 33.3757 27.7073C31.663 30.6739 30.6077 33.8395 30.1642 37.0356C30.1324 37.265 29.8917 37.404 29.6771 37.3168C26.6874 36.1028 23.4182 35.434 19.9927 35.434C16.5673 35.434 13.2982 36.1028 10.3085 37.3168C10.0939 37.404 9.85319 37.265 9.82139 37.0356C9.37792 33.8395 8.32252 30.6739 6.60978 27.7073C4.89709 24.7409 2.68326 22.2441 0.137112 20.262ZM10.1657 19.5353C9.98593 19.6815 9.98694 19.9594 10.1676 20.1044C11.3847 21.0798 12.4461 22.2917 13.2776 23.7204C14.1091 25.1492 14.6385 26.6707 14.8855 28.2107C14.9221 28.4394 15.1634 28.5776 15.3792 28.4936C16.8326 27.9273 18.4128 27.6141 20.0659 27.6083C21.719 27.6026 23.3013 27.9049 24.7585 28.461C24.975 28.5436 25.2152 28.4038 25.2503 28.1748C25.4866 26.6331 26.0054 25.108 26.8271 23.6735C27.6486 22.239 28.7015 21.0198 29.9117 20.0359C30.0915 19.8898 30.0905 19.6117 29.9098 19.4669C28.6927 18.4914 27.6314 17.2795 26.7999 15.8507C25.9683 14.422 25.4389 12.9005 25.1919 11.3604C25.1553 11.1317 24.914 10.9936 24.6982 11.0777C23.2449 11.6439 21.6647 11.9571 20.0117 11.9628C18.3585 11.9685 16.7762 11.6663 15.3189 11.1102C15.1025 11.0276 14.8623 11.1674 14.8271 11.3964C14.5909 12.9381 14.0721 14.4632 13.2505 15.8977C12.4289 17.3322 11.376 18.5514 10.1657 19.5353Z";

  return (
    <div
      className={`w-full rounded-[14px] overflow-hidden text-left border font-sans select-none shadow-[0_24px_70px_rgba(0,0,0,0.8)] ${
        isLight
          ? "bg-[#fafafb] border-[#e4e4e7] text-[#18181b]"
          : "bg-[#090a0f] border-white/[0.12] text-[#f4f4f5]"
      }`}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION BAR (Matches synap.maximem.ai/dashboard)
      ───────────────────────────────────────────────────────────── */}
      <header
        className={`h-14 px-3 sm:px-4 border-b flex items-center justify-between gap-3 text-xs shrink-0 ${
          isLight ? "bg-white border-[#e4e4e7]" : "bg-[#090a0f] border-white/[0.08]"
        }`}
      >
        {/* Left: Brand + Toggle + Search */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {/* Maximem Synap Brand Logo & Name */}
          <div className="flex items-center gap-2.5 shrink-0 pr-2">
            <svg className="size-4.5 shrink-0" viewBox="0 0 40 40" fill="none">
              <path d={maximemLogoPath} fill="currentColor" className={isLight ? "text-black" : "text-white"} />
            </svg>
            <span className={`text-[13.5px] font-semibold tracking-tight ${isLight ? "text-black" : "text-white"}`}>
              Maximem Synap
            </span>
          </div>

          {/* Sidebar Toggle Icon */}
          <button
            type="button"
            className={`p-1.5 rounded-[5px] transition-colors ${
              isLight ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
            title="Toggle Sidebar"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="9" y1="4" x2="9" y2="20" />
            </svg>
          </button>

          {/* Search Box with ⌘ K */}
          <div
            className={`hidden md:flex items-center justify-between gap-3 px-2.5 py-1.5 rounded-[6px] border text-[12px] w-[180px] lg:w-[220px] transition-colors ${
              isLight
                ? "bg-[#f4f4f5] border-[#e4e4e7] text-zinc-500"
                : "bg-[#111218] border-white/[0.08] text-zinc-400"
            }`}
          >
            <div className="flex items-center gap-2 truncate">
              <svg className="size-3.5 shrink-0 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search</span>
            </div>
            <span
              className={`text-[9.5px] font-mono px-1.5 py-0.5 rounded border leading-none shrink-0 ${
                isLight ? "bg-white border-zinc-300 text-zinc-600" : "bg-white/5 border-white/10 text-zinc-400"
              }`}
            >
              ⌘ K
            </span>
          </div>
        </div>

        {/* Right Actions (Code, Sparkle, Balance, Playground, Notifications, Mode, Currency) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Code Icon </> */}
          <button
            type="button"
            className={`p-1.5 rounded-[5px] transition-colors ${
              isLight ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
            title="API & SDK Docs"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </button>

          {/* AI Sparkle */}
          <button
            type="button"
            className={`p-1.5 rounded-[5px] transition-colors ${
              isLight ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
            title="Features"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
            </svg>
          </button>

          {/* Balance Pill ($10.00) */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border text-[11.5px] font-medium font-mono ${
              isLight
                ? "bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]"
                : "bg-[#092418] border-[#0f4d30] text-[#34d399]"
            }`}
          >
            <svg className="size-3.5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span>$10.00</span>
          </div>

          {/* Playground Button */}
          <button
            type="button"
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] text-[11.5px] font-medium transition-colors ${
              isLight ? "text-zinc-700 hover:bg-zinc-100" : "text-zinc-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <svg className="size-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span>Playground</span>
          </button>

          {/* Bell (Notification) */}
          <button
            type="button"
            className={`p-1.5 rounded-[5px] transition-colors ${
              isLight ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Theme Display */}
          <button
            type="button"
            className={`p-1.5 rounded-[5px] transition-colors ${
              isLight ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </button>

          {/* Currency / Billing */}
          <button
            type="button"
            className={`p-1.5 rounded-[5px] transition-colors ${
              isLight ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN BODY (Sidebar + Dashboard Content)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row min-h-[580px]">
        {/* ── Left Sidebar (Exact from screenshot) ── */}
        <aside
          className={`w-full lg:w-[220px] shrink-0 p-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${
            isLight ? "bg-[#fafafa] border-[#e4e4e7]" : "bg-[#090a0f] border-white/[0.08]"
          }`}
        >
          {/* Sidebar Nav Links */}
          <div className="space-y-1">
            {/* Setup */}
            <button
              type="button"
              onClick={() => setActiveNav("setup")}
              className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[6px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                activeNav === "setup"
                  ? "bg-[#f26522] text-white"
                  : isLight
                  ? "text-zinc-700 hover:bg-zinc-100"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
                </svg>
                <span>Setup</span>
              </div>
              <svg className="size-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dashboard (Active - Solid Coral Orange) */}
            <div>
              <button
                type="button"
                onClick={() => setActiveNav("dashboard")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-[7px] text-[12.5px] font-semibold bg-[#f26522] text-white shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Dashboard</span>
                </div>
                <svg className="size-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Indented sub-link: Requests */}
              <div className="pl-6 pr-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveNav("requests")}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-[5px] text-[12px] transition-colors cursor-pointer ${
                    activeNav === "requests"
                      ? "text-[#f26522] font-semibold"
                      : isLight
                      ? "text-zinc-600 hover:text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Requests</span>
                </button>
              </div>
            </div>

            {/* Agents */}
            <button
              type="button"
              onClick={() => setActiveNav("agents")}
              className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[6px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                isLight ? "text-zinc-700 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Agents</span>
              </div>
              <svg className="size-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* MCP */}
            <button
              type="button"
              onClick={() => setActiveNav("mcp")}
              className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[6px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                isLight ? "text-zinc-700 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>MCP</span>
              </div>
            </button>

            {/* Memories */}
            <button
              type="button"
              onClick={() => setActiveNav("memories")}
              className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[6px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                isLight ? "text-zinc-700 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>Memories</span>
              </div>
              <svg className="size-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Settings */}
            <button
              type="button"
              onClick={() => setActiveNav("settings")}
              className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[6px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                isLight ? "text-zinc-700 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Settings</span>
              </div>
              <svg className="size-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Synap Doc */}
            <button
              type="button"
              onClick={() => setActiveNav("doc")}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[6px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                isLight ? "text-zinc-700 hover:bg-zinc-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Synap Doc</span>
            </button>
          </div>

          {/* Sidebar Bottom: Balance Widget & User Profile */}
          <div className="pt-4 mt-4 border-t border-white/[0.08] flex flex-col gap-3">
            {/* Balance Widget (Exact from screenshot) */}
            <div className={`p-2.5 rounded-[8px] border ${isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.06]"}`}>
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="text-zinc-400">Balance left</span>
                <span className={`font-mono font-bold ${isLight ? "text-black" : "text-white"}`}>100%</span>
              </div>

              {/* Green Progress Bar */}
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mb-2">
                <div className="w-full h-full bg-[#10b981] rounded-full" />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-400">$10 of $10</span>
                <button type="button" className="text-[#f26522] hover:underline font-medium cursor-pointer">
                  Upgrade ↗
                </button>
              </div>
            </div>

            {/* User Profile Bar */}
            <div className="flex items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-2 min-w-0">
                <div className="size-7 rounded-full bg-[#f26522] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                  SA
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`text-[12px] font-medium truncate leading-tight ${isLight ? "text-black" : "text-white"}`}>
                    sahbusiness953
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 truncate leading-tight">
                    sahbusiness953@g...
                  </span>
                </div>
              </div>
              <svg className="size-3.5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </aside>

        {/* ── Main Content Area (Overview) ── */}
        <main className="flex-1 p-4 sm:p-6 flex flex-col gap-5 overflow-hidden">
          {/* Header Row: Overview + Actions */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
            <div>
              <h1 className={`text-[22px] sm:text-[24px] font-bold tracking-tight ${isLight ? "text-black" : "text-white"}`}>
                Overview
              </h1>
              <p className="text-[13px] text-zinc-400 mt-0.5">
                Structured analytics for Shubham Sah.
              </p>
              <div className="mt-2.5">
                <button
                  type="button"
                  onClick={handleCopyClientId}
                  className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] border text-[11.5px] font-mono transition-colors cursor-pointer ${
                    isLight
                      ? "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                      : "bg-[#111218] border-white/10 text-zinc-300 hover:border-white/20"
                  }`}
                  title="Click to copy"
                >
                  <span className="text-zinc-500">Client ID</span>
                  <span>cli_e7be3c3ff1054a52</span>
                  <svg className="size-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                  {copiedClientId && <span className="text-[#10b981] text-[10.5px]">Copied!</span>}
                </button>
              </div>
            </div>

            {/* Top Right Controls: All Instances, Date Range, Open Memories */}
            <div className="flex flex-wrap items-center gap-2">
              {/* All Instances Dropdown */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[12px] cursor-pointer ${
                  isLight
                    ? "bg-white border-zinc-200 text-zinc-800"
                    : "bg-[#111218] border-white/10 text-zinc-300"
                }`}
              >
                <span>All Instances</span>
                <svg className="size-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Date Range Dropdown */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[12px] cursor-pointer ${
                  isLight
                    ? "bg-white border-zinc-200 text-zinc-800"
                    : "bg-[#111218] border-white/10 text-zinc-300"
                }`}
              >
                <span>Pick a date range:</span>
                <span className="text-white font-medium">7D</span>
                <svg className="size-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Open Memories Button */}
              <button
                type="button"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] border text-[12px] font-medium transition-colors cursor-pointer ${
                  isLight
                    ? "bg-white border-zinc-300 text-black hover:bg-zinc-50"
                    : "bg-[#14161f] border-white/15 text-white hover:bg-white/10"
                }`}
              >
                <svg className="size-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Open Memories</span>
              </button>
            </div>
          </div>

          {/* ── Row 1: 3 Metric Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Card 1: Total Memories */}
            <div
              className={`p-4 rounded-[8px] border transition-all ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between text-[12px] mb-2">
                <span className={`font-medium ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                  Total Memories
                </span>
                <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-medium">
                  +0 7d
                </span>
              </div>
              <div className={`text-[28px] font-bold font-mono leading-none tracking-tight ${isLight ? "text-black" : "text-white"}`}>
                0
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-2">
                Vs previous 7d: +0.0% | 0 active
              </div>
            </div>

            {/* Card 2: Requests */}
            <div
              className={`p-4 rounded-[8px] border transition-all ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between text-[12px] mb-2">
                <span className={`font-medium ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                  Requests
                </span>
                <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                  isLight ? "bg-zinc-100 text-zinc-600" : "bg-white/10 text-zinc-300"
                }`}>
                  7D
                </span>
              </div>
              <div className={`text-[28px] font-bold font-mono leading-none tracking-tight ${isLight ? "text-black" : "text-white"}`}>
                0
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-2 truncate">
                Total API requests in selected range
              </div>
            </div>

            {/* Card 3: Active Instances */}
            <div
              className={`p-4 rounded-[8px] border transition-all ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between text-[12px] mb-2">
                <span className={`font-medium ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                  Active Instances
                </span>
                <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-medium">
                  +0%
                </span>
              </div>
              <div className={`text-[28px] font-bold font-mono leading-none tracking-tight ${isLight ? "text-black" : "text-white"}`}>
                0
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-2">
                0 tracked
              </div>
            </div>
          </div>

          {/* ── Row 2: TWO Side-by-Side Chart Cards (Exact from screenshot!) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {/* Chart 1 (Left): Requests */}
            <div
              className={`p-4 rounded-[8px] border flex flex-col justify-between ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.08]"
              }`}
            >
              {/* Header with Title & Dot Legends */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className={`text-[15px] font-bold tracking-tight ${isLight ? "text-black" : "text-white"}`}>
                    Requests
                  </h3>
                  <p className="text-[11.5px] text-zinc-400 mt-0.5">
                    Request volume for last 7 days.
                  </p>
                </div>

                {/* Dots Legend: Total, Add, Search, Get All, Get, Delete */}
                <div className="flex flex-wrap items-center gap-2 text-[10.5px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#f26522]" /> Total
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-white" /> Add
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#a855f7]" /> Search
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#f26522] opacity-80" /> Get All
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#3b82f6]" /> Get
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#ef4444]" /> Delete
                  </span>
                </div>
              </div>

              {/* Chart Grid SVG */}
              <div className="relative w-full h-[170px] pt-1">
                <svg className="w-full h-full" viewBox="0 0 450 140" preserveAspectRatio="none">
                  {/* Horizontal Grid lines with numbers (4, 3, 2, 1, 0) */}
                  {[
                    { y: 15, label: "4" },
                    { y: 42, label: "3" },
                    { y: 69, label: "2" },
                    { y: 96, label: "1" },
                    { y: 123, label: "0" },
                  ].map((grid) => (
                    <g key={grid.label}>
                      <line
                        x1="25"
                        y1={grid.y}
                        x2="445"
                        y2={grid.y}
                        stroke={isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)"}
                        strokeDasharray="2 2"
                      />
                      <text
                        x="10"
                        y={grid.y + 3.5}
                        fill="#71717a"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {grid.label}
                      </text>
                    </g>
                  ))}

                  {/* Marker Dot for "Now" */}
                  <circle cx="230" cy="123" r="3.5" fill="#f26522" />
                  <text
                    x="230"
                    y="136"
                    textAnchor="middle"
                    fill="#71717a"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    Now
                  </text>
                </svg>
              </div>
            </div>

            {/* Chart 2 (Right): Token Savings */}
            <div
              className={`p-4 rounded-[8px] border flex flex-col justify-between ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.08]"
              }`}
            >
              {/* Header with Dotted Underline on Token Savings & Dot Legend */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className={`text-[15px] font-bold tracking-tight inline-block border-b border-dotted border-zinc-500 pb-0.5 ${
                    isLight ? "text-black" : "text-white"
                  }`}>
                    Token Savings
                  </h3>
                  <p className="text-[11.5px] text-zinc-400 mt-0.5">
                    Covered by the Synap LLM Pool (Last 7 days).
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-zinc-400">
                  <span className="size-1.5 rounded-full bg-[#f26522]" />
                  <span>Synap LLM Pool</span>
                </div>
              </div>

              {/* Chart Grid SVG with 7 Days and baseline */}
              <div className="relative w-full h-[170px] pt-1">
                <svg className="w-full h-full" viewBox="0 0 450 140" preserveAspectRatio="none">
                  {/* Horizontal Grid lines with numbers (4, 3, 2, 1, 0) */}
                  {[
                    { y: 15, label: "4" },
                    { y: 42, label: "3" },
                    { y: 69, label: "2" },
                    { y: 96, label: "1" },
                    { y: 123, label: "0" },
                  ].map((grid) => (
                    <g key={grid.label}>
                      <line
                        x1="25"
                        y1={grid.y}
                        x2="445"
                        y2={grid.y}
                        stroke={isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)"}
                        strokeDasharray="2 2"
                      />
                      <text
                        x="10"
                        y={grid.y + 3.5}
                        fill="#71717a"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {grid.label}
                      </text>
                    </g>
                  ))}

                  {/* Orange Baseline at 0 across all 7 days (as in screenshot) */}
                  <line x1="28" y1="123" x2="440" y2="123" stroke="#f26522" strokeWidth="1.5" />

                  {/* 7 Days: Thu, Fri, Sat, Sun, Mon, Tue, Wed, Thu */}
                  {[
                    { x: 35, day: "Thu" },
                    { x: 92, day: "Fri" },
                    { x: 150, day: "Sat" },
                    { x: 208, day: "Sun" },
                    { x: 266, day: "Mon" },
                    { x: 324, day: "Tue" },
                    { x: 382, day: "Wed" },
                    { x: 435, day: "Thu" },
                  ].map((pt) => (
                    <text
                      key={pt.day + pt.x}
                      x={pt.x}
                      y="136"
                      textAnchor="middle"
                      fill="#71717a"
                      fontSize="9.5"
                      fontFamily="monospace"
                    >
                      {pt.day}
                    </text>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* ── Row 3: Recent Activities ── */}
          <div
            className={`p-4 rounded-[8px] border ${
              isLight ? "bg-white border-[#e4e4e7]" : "bg-[#111218] border-white/[0.08]"
            }`}
          >
            <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${isLight ? "text-black" : "text-white"}`}>
              Recent Activities
            </h3>
            <p className="text-[12px] text-zinc-400">
              No recent instance activities recorded in this timeframe.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
