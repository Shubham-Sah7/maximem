"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SynapDashboardVisualProps {
  isLight?: boolean;
}

export default function SynapDashboardVisual({ isLight = false }: SynapDashboardVisualProps) {
  const [activeNav, setActiveNav] = useState<string>("dashboard");
  const [activeRequestTab, setActiveRequestTab] = useState<string>("total");
  const [copiedClientId, setCopiedClientId] = useState(false);

  const handleCopyClientId = () => {
    navigator.clipboard?.writeText("cli_e7be3c3ff1054a52");
    setCopiedClientId(true);
    setTimeout(() => setCopiedClientId(false), 1800);
  };

  const navItems = [
    {
      id: "playground",
      label: "Playground",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "setup",
      label: "Setup",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "dashboard",
      label: "Dashboard",
      badge: "Overview",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: "memories",
      label: "Open Memories",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "requests",
      label: "Requests",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "agents",
      label: "Agents",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "mcp",
      label: "MCP",
      badge: "Active",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: "docs",
      label: "Synap Doc",
      external: true,
      icon: (
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
    },
  ];

  const requestTabs = [
    { id: "total", label: "Total" },
    { id: "add", label: "Add" },
    { id: "search", label: "Search" },
    { id: "get_all", label: "Get All" },
    { id: "get", label: "Get" },
    { id: "delete", label: "Delete" },
  ];

  return (
    <div
      className={`w-full rounded-[10px] overflow-hidden text-left border transition-all duration-300 font-sans select-none ${
        isLight
          ? "bg-[#fafafb] border-[#e4e4e7] shadow-[0_20px_50px_rgba(0,0,0,0.07)] text-[#18181b]"
          : "bg-[#0b0c10] border-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.65)] text-[#f4f4f5]"
      }`}
    >
      {/* ── Top Window Bar (Realistic App Frame) ── */}
      <div
        className={`px-4 py-2.5 border-b flex items-center justify-between text-xs transition-colors ${
          isLight ? "bg-[#f4f4f5] border-[#e4e4e7]" : "bg-[#121318] border-white/[0.08]"
        }`}
      >
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56]/90 inline-block border border-[#e0443e]/40" />
          <span className="size-3 rounded-full bg-[#ffbd2e]/90 inline-block border border-[#dea123]/40" />
          <span className="size-3 rounded-full bg-[#27c93f]/90 inline-block border border-[#1aab29]/40" />
          <div className="hidden sm:flex items-center gap-1.5 ml-2 pl-3 border-l border-white/10 text-[11px] font-mono text-[#71717a]">
            <span>Maximem Synap</span>
            <span>/</span>
            <span className={isLight ? "text-[#09090b]" : "text-white"}>Dashboard</span>
          </div>
        </div>

        {/* Real URL Pill in Window Header */}
        <div
          className={`flex items-center gap-1.5 px-3 py-1 rounded-[6px] border text-[11px] font-mono transition-colors max-w-[280px] sm:max-w-none truncate ${
            isLight
              ? "bg-white border-[#e4e4e7] text-[#52525b]"
              : "bg-[#08090d] border-white/[0.08] text-[#a1a1aa]"
          }`}
        >
          <svg className="size-3 text-[#10b981] shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
          </svg>
          <span className="truncate">https://synap.maximem.ai/dashboard</span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="flex size-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-[#10b981]" />
          </span>
          <span className={isLight ? "text-[#71717a]" : "text-[#a1a1aa]"}>Live</span>
        </div>
      </div>

      {/* ── Main Dashboard Workspace ── */}
      <div className="flex flex-col lg:flex-row min-h-[460px]">
        {/* ── Left Sidebar (Maximem Synap Navigation) ── */}
        <div
          className={`w-full lg:w-[210px] xl:w-[220px] shrink-0 p-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${
            isLight ? "bg-[#fafafa] border-[#e4e4e7]" : "bg-[#0e0f14] border-white/[0.08]"
          }`}
        >
          {/* Top Brand & Search */}
          <div>
            {/* Maximem Synap Brand Header */}
            <div className="flex items-center gap-2.5 px-2 py-1.5 mb-3">
              <div className="size-7 rounded-[7px] bg-gradient-to-br from-[#f26522] to-[#ff8c42] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_12px_rgba(242,101,34,0.35)] shrink-0">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-[13px] font-semibold tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                  Maximem Synap
                </span>
                <span className="text-[10px] font-mono text-[#71717a] leading-none">v2.4 Production</span>
              </div>
            </div>

            {/* Quick Search with ⌘K Badge */}
            <div
              className={`flex items-center justify-between px-2.5 py-1.5 rounded-[6px] border text-[11.5px] mb-3 cursor-pointer transition-colors ${
                isLight
                  ? "bg-white border-[#e4e4e7] text-[#71717a] hover:border-[#d4d4d8]"
                  : "bg-[#14161f] border-white/[0.08] text-[#8e8e93] hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </div>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                isLight ? "bg-[#f4f4f5] border-[#e4e4e7] text-[#52525b]" : "bg-white/10 border-white/10 text-white"
              }`}>
                ⌘K
              </span>
            </div>

            {/* Sidebar Navigation Items */}
            <div className="space-y-0.5">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] text-[12px] font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? isLight
                          ? "bg-[#f26522]/10 text-[#f26522] font-semibold"
                          : "bg-[#f26522]/15 text-[#f26522] font-semibold border-l-2 border-[#f26522]"
                        : isLight
                        ? "text-[#52525b] hover:bg-[#f4f4f5] hover:text-[#09090b]"
                        : "text-[#a1a1aa] hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={isActive ? "text-[#f26522]" : isLight ? "text-[#71717a]" : "text-[#8e8e93]"}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[9.5px] font-mono px-1.5 py-0.2 rounded ${
                          isActive
                            ? "bg-[#f26522]/20 text-[#f26522]"
                            : isLight
                            ? "bg-[#e4e4e7] text-[#52525b]"
                            : "bg-white/10 text-[#d4d4d8]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* User Profile Pill at Bottom of Sidebar */}
          <div
            className={`mt-4 pt-3 border-t flex items-center justify-between gap-2 px-1.5 ${
              isLight ? "border-[#e4e4e7]" : "border-white/[0.08]"
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="size-7 rounded-full bg-gradient-to-tr from-[#f26522] to-[#ffaa6b] text-white font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                SA
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`text-[11.5px] font-medium truncate leading-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                  sahbusiness953
                </span>
                <span className="text-[10px] font-mono text-[#71717a] truncate leading-tight">
                  sahbusiness953@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Content Column (Dashboard Overview) ── */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col gap-4 overflow-hidden">
          {/* Top Header Row with Client ID & Date Range */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-[16px] sm:text-[18px] font-semibold tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                  Overview
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                  Synap Active
                </span>
              </div>
              <p className={`text-[12px] mt-0.5 flex items-center gap-2 ${isLight ? "text-[#52525b]" : "text-[#a1a1aa]"}`}>
                <span>Structured analytics for Shubham Sah.</span>
                <span className="text-zinc-500">•</span>
                <button
                  type="button"
                  onClick={handleCopyClientId}
                  className={`inline-flex items-center gap-1 font-mono text-[11px] px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${
                    isLight
                      ? "bg-white border-[#e4e4e7] text-[#27272a] hover:bg-[#f4f4f5]"
                      : "bg-[#14161f] border-white/10 text-zinc-300 hover:text-white"
                  }`}
                  title="Click to copy Client ID"
                >
                  <span>Client ID: cli_e7be3c3ff1054a52</span>
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copiedClientId && <span className="text-[#10b981] text-[10px]">Copied!</span>}
                </button>
              </p>
            </div>

            {/* Date Range Selector & Balance */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] border text-[11.5px] font-mono ${
                  isLight ? "bg-white border-[#e4e4e7] text-[#27272a]" : "bg-[#14161f] border-white/10 text-zinc-300"
                }`}
              >
                <svg className="size-3.5 text-[#71717a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Pick a date range:</span>
                <span className="text-[#f26522] font-semibold">7D</span>
              </div>

              <div
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] border text-[11.5px] font-mono ${
                  isLight ? "bg-white border-[#e4e4e7] text-[#09090b]" : "bg-[#14161f] border-white/10 text-white"
                }`}
              >
                <span className="font-semibold text-[#10b981]">$10.00</span>
              </div>

              <button
                type="button"
                className="px-2.5 py-1.5 rounded-[6px] bg-[#f26522] hover:bg-[#ff7533] text-white text-[11.5px] font-medium font-mono transition-colors shadow-sm cursor-pointer"
              >
                Upgrade
              </button>
            </div>
          </div>

          {/* ── 3 Summary Metric Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Card 1: Total Memories */}
            <div
              className={`p-3.5 rounded-[8px] border transition-all ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#11131a] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between text-[11.5px] mb-2">
                <span className={`font-medium ${isLight ? "text-[#52525b]" : "text-[#a1a1aa]"}`}>
                  Total Memories
                </span>
                <span className="text-[10.5px] font-mono px-1.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-medium">
                  +0 7d
                </span>
              </div>
              <div className={`text-[26px] font-bold font-mono leading-none tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                0
              </div>
              <div className="text-[10.5px] font-mono text-[#71717a] mt-2">
                Vs previous 7d: <span className="text-zinc-400">+0.0%</span> | 0 active
              </div>
            </div>

            {/* Card 2: Requests */}
            <div
              className={`p-3.5 rounded-[8px] border transition-all ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#11131a] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between text-[11.5px] mb-2">
                <span className={`font-medium ${isLight ? "text-[#52525b]" : "text-[#a1a1aa]"}`}>
                  Requests
                </span>
                <span className={`text-[10.5px] font-mono px-1.5 py-0.5 rounded ${
                  isLight ? "bg-[#f4f4f5] text-[#71717a]" : "bg-white/10 text-zinc-300"
                }`}>
                  7D
                </span>
              </div>
              <div className={`text-[26px] font-bold font-mono leading-none tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                0
              </div>
              <div className="text-[10.5px] font-mono text-[#71717a] mt-2 truncate">
                Total API requests in selected range
              </div>
            </div>

            {/* Card 3: Active Instances */}
            <div
              className={`p-3.5 rounded-[8px] border transition-all ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#11131a] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between text-[11.5px] mb-2">
                <span className={`font-medium ${isLight ? "text-[#52525b]" : "text-[#a1a1aa]"}`}>
                  Active Instances
                </span>
                <span className="text-[10.5px] font-mono px-1.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-medium">
                  +0%
                </span>
              </div>
              <div className={`text-[26px] font-bold font-mono leading-none tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                0
              </div>
              <div className="text-[10.5px] font-mono text-[#71717a] mt-2">
                0 tracked
              </div>
            </div>
          </div>

          {/* ── Middle Row: Requests Chart + Token Savings / LLM Pool ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Chart: Requests Volume (2 Cols on lg) */}
            <div
              className={`lg:col-span-2 p-4 rounded-[8px] border flex flex-col justify-between ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#11131a] border-white/[0.08]"
              }`}
            >
              {/* Header & Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className={`text-[13px] font-semibold tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                    Requests
                  </h4>
                  <p className="text-[11px] text-[#71717a] font-mono">
                    Request volume for last 7 days.
                  </p>
                </div>

                {/* Sub-tabs: Total, Add, Search, Get All, Get, Delete */}
                <div
                  className={`flex items-center gap-1 p-0.5 rounded-[6px] border text-[10.5px] font-mono overflow-x-auto ${
                    isLight ? "bg-[#f4f4f5] border-[#e4e4e7]" : "bg-[#0b0c10] border-white/[0.08]"
                  }`}
                >
                  {requestTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveRequestTab(tab.id)}
                      className={`px-2 py-0.5 rounded-[4px] whitespace-nowrap transition-colors cursor-pointer ${
                        activeRequestTab === tab.id
                          ? "bg-[#f26522] text-white font-semibold shadow-xs"
                          : isLight
                          ? "text-[#71717a] hover:text-[#09090b]"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart SVG Visualization */}
              <div className="relative w-full h-[150px] sm:h-[165px] pt-2">
                <svg className="w-full h-full" viewBox="0 0 540 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="synapChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f26522" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#f26522" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines with Y-axis numbers (4, 3, 2, 1, 0) */}
                  {[
                    { y: 15, label: "4" },
                    { y: 42, label: "3" },
                    { y: 69, label: "2" },
                    { y: 96, label: "1" },
                    { y: 123, label: "0" },
                  ].map((grid) => (
                    <g key={grid.label}>
                      <line
                        x1="30"
                        y1={grid.y}
                        x2="535"
                        y2={grid.y}
                        stroke={isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)"}
                        strokeDasharray="3 3"
                      />
                      <text
                        x="10"
                        y={grid.y + 3}
                        fill="#71717a"
                        fontSize="9.5"
                        fontFamily="monospace"
                      >
                        {grid.label}
                      </text>
                    </g>
                  ))}

                  {/* Area fill */}
                  <path
                    d="M 40 123 L 105 123 L 175 123 L 245 123 L 315 123 L 385 123 L 455 123 L 525 123 L 525 123 L 40 123 Z"
                    fill="url(#synapChartGrad)"
                  />

                  {/* Chart Line with subtle activity baseline */}
                  <path
                    d="M 40 123 L 105 123 L 175 123 L 245 123 L 315 123 L 385 123 L 455 123 L 525 123"
                    stroke="#f26522"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Interactive point markers for 7 days */}
                  {[
                    { x: 40, day: "Thu" },
                    { x: 110, day: "Fri" },
                    { x: 180, day: "Sat" },
                    { x: 250, day: "Sun" },
                    { x: 320, day: "Mon" },
                    { x: 390, day: "Tue" },
                    { x: 460, day: "Wed" },
                    { x: 525, day: "Thu" },
                  ].map((pt, idx) => (
                    <g key={pt.day + idx}>
                      <circle
                        cx={pt.x}
                        cy="123"
                        r={idx === 7 ? "3.5" : "2.5"}
                        fill={idx === 7 ? "#f26522" : isLight ? "#ffffff" : "#11131a"}
                        stroke="#f26522"
                        strokeWidth="1.5"
                      />
                      <text
                        x={pt.x}
                        y="136"
                        textAnchor="middle"
                        fill="#71717a"
                        fontSize="9.5"
                        fontFamily="monospace"
                      >
                        {pt.day}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Subtle Tooltip Tag at latest point */}
                <div className="absolute right-2 top-2 px-2 py-1 rounded-[5px] bg-[#f26522]/10 border border-[#f26522]/30 text-[10.5px] font-mono text-[#f26522] flex items-center gap-1.5 shadow-xs">
                  <span className="size-1.5 rounded-full bg-[#f26522] animate-pulse" />
                  <span>13 Sept, 5:30</span>
                  <span className="text-zinc-500">|</span>
                  <span>Now</span>
                </div>
              </div>
            </div>

            {/* Token Savings / Synap LLM Pool */}
            <div
              className={`p-4 rounded-[8px] border flex flex-col justify-between ${
                isLight ? "bg-white border-[#e4e4e7]" : "bg-[#11131a] border-white/[0.08]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className={`text-[13px] font-semibold tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                    Token Savings
                  </h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f26522]/15 text-[#f26522] border border-[#f26522]/20 font-medium">
                    Synap LLM Pool
                  </span>
                </div>
                <p className="text-[11px] text-[#71717a] font-mono mt-1 leading-snug">
                  Covered by the Synap LLM Pool (Last 7 days).
                </p>
              </div>

              {/* Circular Gauge / Balance Meter */}
              <div className="flex flex-col items-center justify-center my-3">
                <div className="relative size-24 flex items-center justify-center">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={isLight ? "#e4e4e7" : "rgba(255,255,255,0.08)"}
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#f26522"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className={`text-[18px] font-bold font-mono leading-none ${isLight ? "text-[#09090b]" : "text-white"}`}>
                      100%
                    </span>
                    <span className="text-[9px] font-mono text-[#71717a] mt-0.5">
                      Balance left
                    </span>
                  </div>
                </div>
                <span className={`text-[12px] font-mono font-medium mt-1.5 ${isLight ? "text-[#27272a]" : "text-zinc-200"}`}>
                  $10 of $10
                </span>
              </div>

              {/* Upgrade Button */}
              <button
                type="button"
                className={`w-full py-1.5 rounded-[6px] text-[11.5px] font-mono font-medium transition-colors border text-center cursor-pointer ${
                  isLight
                    ? "bg-[#fff7f2] hover:bg-[#ffede3] text-[#f26522] border-[#f26522]/30"
                    : "bg-[#f26522]/10 hover:bg-[#f26522]/20 text-[#f26522] border-[#f26522]/30"
                }`}
              >
                Upgrade Plan
              </button>
            </div>
          </div>

          {/* ── Bottom Row: Recent Activities Card ── */}
          <div
            className={`p-3.5 rounded-[8px] border flex flex-col justify-between ${
              isLight ? "bg-white border-[#e4e4e7]" : "bg-[#11131a] border-white/[0.08]"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className={`text-[12.5px] font-semibold tracking-tight ${isLight ? "text-[#09090b]" : "text-white"}`}>
                  Recent Activities
                </h4>
                <p className="text-[10.5px] text-[#71717a] font-mono">
                  Your most recently active instances
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#71717a]">
                Instance Log
              </span>
            </div>

            {/* Empty State Body */}
            <div
              className={`p-4 rounded-[6px] border border-dashed flex items-center justify-center gap-2 text-center text-[11.5px] font-mono ${
                isLight
                  ? "bg-[#fafafa] border-[#e4e4e7] text-[#71717a]"
                  : "bg-[#0b0c10] border-white/[0.08] text-zinc-400"
              }`}
            >
              <svg className="size-4 text-[#71717a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>No recent instance activity yet.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
