"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import svgPaths from "./svg-paths";

export interface HomepageNavbarProps {
  isLight?: boolean;
  onToggleTheme?: () => void;
}

function ImageMaximem({ isLight }: { isLight?: boolean }) {
  return (
    <div className="relative shrink-0 size-[32px] sm:size-[36px]" data-name="Image (Maximem)">
      <svg className="block size-full" fill="none" viewBox="0 0 40 40">
        <g id="Image (Maximem Logo)">
          <path d={svgPaths.p807ad80} fill={isLight ? "#09090b" : "white"} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text81({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p
        className={`font-['Geist_Variable:Bold',sans-serif] leading-none not-italic text-[21px] sm:text-[23px] font-semibold tracking-[-0.02em] whitespace-nowrap ${
          isLight ? "text-[#09090b]" : "text-white"
        }`}
      >
        Maximem
      </p>
    </div>
  );
}

function Link22({ isLight }: { isLight?: boolean }) {
  return (
    <Link href="/" className="flex gap-[10px] items-center relative shrink-0 group cursor-pointer" data-name="Link">
      <ImageMaximem isLight={isLight} />
      <Text81 isLight={isLight} />
    </Link>
  );
}

function ThemeToggleButton({ isLight, onToggle }: { isLight?: boolean; onToggle?: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
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
  );
}

function Button4({ isLight }: { isLight?: boolean }) {
  return (
    <a
      href="/signup"
      className={`group h-[36px] px-4 rounded-[8px] border flex items-center justify-center cursor-pointer hover:-translate-y-0.5 transition-all duration-200 shadow-sm shrink-0 ${
        isLight
          ? "bg-[#09090b] text-white border-[#27272a] hover:bg-[#27272a]"
          : "bg-[#f26522] text-white border-[#f26522] hover:bg-[#ff732e] shadow-[0px_2px_10px_rgba(242,101,34,0.3)]"
      }`}
      data-name="Button"
    >
      <span className="font-['Geist_Variable:Medium',sans-serif] leading-none text-[13.5px] font-medium tracking-[-0.01em]">
        Get Started Free
      </span>
    </a>
  );
}

export default function HomepageNavbar({ isLight = false, onToggleTheme }: HomepageNavbarProps) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "";
  const isSynap = pathname === "/synap" || pathname.startsWith("/synap");
  const isVity = pathname === "/vity" || pathname.startsWith("/vity");

  const navItems = [
    { label: "Pricing", href: "/#pricing", external: false },
    { label: "Playground", href: "https://synap.maximem.ai/playground", external: true },
    { label: "Use Cases", href: "/#why-memory", external: false },
    { label: "Why Memory", href: "/#why-memory", external: false },
    { label: "Integrations", href: "/#integrations", external: false },
    { label: "Docs", href: "https://docs.maximem.ai", external: true },
    { label: "Blog & Resources", href: "/#blog", external: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.split("#")[1];
      if (pathname === "/" || pathname === "") {
        const target = document.getElementById(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      style={{ top: 0, left: 0, right: 0, margin: 0, paddingTop: 0 }}
      className={`fixed top-0 inset-x-0 w-full h-[64px] backdrop-blur-[16px] backdrop-saturate-[180%] z-[9999] px-4 sm:px-6 md:px-10 flex items-center justify-between transition-all duration-300 ${
        isLight
          ? "bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-[#121210]/85 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      }`}
      data-name="Navigation"
    >
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between relative h-full">
        {/* Left: Maximem Brand Logo */}
        <Link22 isLight={isLight} />

        {/* Center: Full Navigation Bar (Products Dropdown + 7 Nav Items) */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-[20px] xl:gap-[26px]" data-name="Container">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap cursor-pointer flex items-center gap-1.5 py-1 ${
                  productsOpen || isSynap || isVity
                    ? "text-[#f26522] font-medium"
                    : isLight
                    ? "text-[#52525b] hover:text-[#09090b]"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <span>Products</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Products Dropdown Menu - Strictly Synap & Vity */}
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 z-[9999]">
                  <div
                    className={`w-[290px] rounded-[14px] p-2.5 border shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150 ${
                      isLight
                        ? "bg-white border-[#e4e4e7] shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
                        : "bg-[#141412] border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
                    }`}
                  >
                    {/* Synap Item */}
                    <Link
                      href="/synap"
                      onClick={() => setProductsOpen(false)}
                      className={`flex flex-col p-2.5 rounded-[8px] transition-colors cursor-pointer group ${
                        isSynap
                          ? isLight
                            ? "bg-zinc-100"
                            : "bg-white/[0.08]"
                          : isLight
                          ? "hover:bg-zinc-100 text-[#09090b]"
                          : "hover:bg-white/[0.06] text-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`font-semibold text-[13px] ${isLight ? "text-zinc-900" : "text-white"}`}>Synap</span>
                        <span className="text-[9px] font-mono px-1 py-0.2 bg-[#f26522]/20 text-[#f26522] rounded-[3px] font-medium border border-[#f26522]/30">
                          AGENT MEMORY
                        </span>
                      </div>
                      <span className={`text-[11.5px] leading-tight mt-0.5 ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                        AI Agents Context &amp; Memory SDK
                      </span>
                    </Link>

                    {/* Vity Item */}
                    <Link
                      href="/vity"
                      onClick={() => setProductsOpen(false)}
                      className={`flex flex-col p-2.5 rounded-[8px] transition-colors cursor-pointer mt-1 group ${
                        isVity
                          ? isLight
                            ? "bg-zinc-100"
                            : "bg-white/[0.08]"
                          : isLight
                          ? "hover:bg-zinc-100 text-[#09090b]"
                          : "hover:bg-white/[0.06] text-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`font-semibold text-[13px] ${isLight ? "text-zinc-900" : "text-white"}`}>Vity</span>
                        <span className="text-[9px] font-mono px-1 py-0.2 bg-[#f26522]/20 text-[#f26522] rounded-[3px] font-medium border border-[#f26522]/30">
                          PERSONAL
                        </span>
                      </div>
                      <span className={`text-[11.5px] leading-tight mt-0.5 ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                        Personal AI Memory Layer for All Apps
                      </span>
                    </Link>

                    <Link
                      href="/synap#how-it-works"
                      onClick={() => setProductsOpen(false)}
                      className={`block px-2.5 py-1.5 mt-1 rounded-[6px] text-[11.5px] transition-colors ${
                        isLight
                          ? "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      How Synap works under the hood →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 7 Other Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap cursor-pointer ${
                  isLight
                    ? "text-[#52525b] hover:text-[#09090b]"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Theme Toggle & Get Started Free Button & Mobile Hamburger */}
        <div className="flex items-center">
          <ThemeToggleButton isLight={isLight} onToggle={onToggleTheme} />
          <Button4 isLight={isLight} />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden ml-2 size-[36px] rounded-[8px] border flex items-center justify-center transition-all ${
              isLight
                ? "bg-[#f4f4f5] border-[#e4e4e7] text-zinc-700"
                : "bg-white/[0.06] border-white/[0.1] text-zinc-300"
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 right-0 w-full border-b px-5 py-4 space-y-3 backdrop-blur-xl ${
            isLight
              ? "bg-white/95 border-zinc-200 text-zinc-800 shadow-xl"
              : "bg-[#141412]/95 border-white/10 text-white shadow-2xl"
          }`}
        >
          <div className="text-[11px] font-mono tracking-wider text-[#f26522] uppercase font-semibold">
            Products
          </div>
          <div className="grid grid-cols-2 gap-2 pl-1">
            <Link
              href="/synap"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-[8px] border ${
                isSynap
                  ? "border-[#f26522] bg-[#f26522]/10 text-[#f26522]"
                  : isLight
                  ? "border-zinc-200 bg-zinc-50 text-zinc-800"
                  : "border-white/10 bg-white/[0.04] text-zinc-200"
              }`}
            >
              <div className="text-[13px] font-semibold">Synap</div>
              <div className="text-[11px] text-zinc-400">Agent SDK</div>
            </Link>
            <Link
              href="/vity"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-[8px] border ${
                isVity
                  ? "border-[#f26522] bg-[#f26522]/10 text-[#f26522]"
                  : isLight
                  ? "border-zinc-200 bg-zinc-50 text-zinc-800"
                  : "border-white/10 bg-white/[0.04] text-zinc-200"
              }`}
            >
              <div className="text-[13px] font-semibold">Vity</div>
              <div className="text-[11px] text-zinc-400">Personal Layer</div>
            </Link>
          </div>

          <div className="border-t border-white/[0.08] pt-2 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13.5px] py-1 text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
