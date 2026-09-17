"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaximemMemoryAndContextManagementForAiAgents from "./maximem-page";

export default function WebsiteClone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLight, setIsLight] = useState(false);

  // Synchronize Maximem dark / light theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("maximem_theme");
      if (saved === "light") {
        setIsLight(true);
      } else if (saved === "dark") {
        setIsLight(false);
      }

      const handleThemeChanged = (e: Event) => {
        const customEvent = e as CustomEvent<{ isLight?: boolean }>;
        if (typeof customEvent.detail?.isLight === "boolean") {
          setIsLight(customEvent.detail.isLight);
        }
      };

      const handleToggleEvent = (e: Event) => {
        const customEvent = e as CustomEvent<{ isLight?: boolean }>;
        if (typeof customEvent.detail?.isLight === "boolean") {
          setIsLight(customEvent.detail.isLight);
        } else {
          setIsLight((prev) => !prev);
        }
      };

      window.addEventListener("maximem-theme-changed", handleThemeChanged);
      window.addEventListener("toggle-maximem-theme", handleToggleEvent);
      return () => {
        window.removeEventListener("maximem-theme-changed", handleThemeChanged);
        window.removeEventListener("toggle-maximem-theme", handleToggleEvent);
      };
    }
  }, []);

  // Framer Motion top reading scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin safely in browser
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // ── 1. GSAP Section Smooth Scroll Reveals ─────────────────
      const sections = document.querySelectorAll(
        '.maximem-dark-theme [data-name="Section"], .maximem-dark-theme [data-name*="Section"], .maximem-dark-theme section'
      );

      sections.forEach((sec, idx) => {
        // Skip hero section from hiding on initial load
        if (idx === 0) return;
        
        gsap.fromTo(
          sec,
          { opacity: 0.15, y: 32, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── 2. GSAP Headings & Text Fade-Slide Reveals ─────────────
      const textHeadings = document.querySelectorAll(
        '.maximem-dark-theme h2, .maximem-dark-theme h3, .maximem-dark-theme [data-name="Heading 2"] p'
      );

      textHeadings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── 3. GSAP Feature & Product Cards Stagger ────────────────────
      const productCards = document.querySelectorAll(
        '.maximem-dark-theme [data-name="Container18"], .maximem-dark-theme [data-name="Container21"], .maximem-dark-theme .why-card'
      );
      if (productCards.length > 0) {
        gsap.fromTo(
          productCards,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: productCards[0],
              start: "top 84%",
            },
          }
        );
      }

      // ── 4. GSAP Blog / Research Cards Stagger ──────────────────────
      const blogCards = document.querySelectorAll(
        '.maximem-dark-theme .research-card'
      );
      if (blogCards.length > 0) {
        gsap.fromTo(
          blogCards,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blogCards[0],
              start: "top 85%",
            },
          }
        );
      }

      // ── 5. GSAP Precision Counter Animations ─────────────────────
      const statEls = document.querySelectorAll(
        '.maximem-dark-theme [data-name="Maximem Synap benchmark results"] [data-name="Text"]'
      );

      statEls.forEach((el) => {
        const p = el.querySelector("p");
        if (!p) return;
        const rawText = p.textContent ?? "";
        const match = rawText.match(/[\d.]+/);
        if (!match) return;

        const targetValue = parseFloat(match[0]);
        const isPercent = rawText.includes("%");
        const prefix = rawText.startsWith("<") ? "<" : "";
        const suffix = isPercent ? "%" : rawText.replace(/[\d.<]/g, "");

        const counterObj = { val: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(counterObj, {
              val: targetValue,
              duration: 1.4,
              ease: "power3.out",
              onUpdate: () => {
                const formatted = (counterObj.val).toFixed(targetValue % 1 !== 0 ? 1 : 0);
                p.textContent = `${prefix}${formatted}${suffix}`;
              },
            });
          },
        });
      });

      // ── 6. Interactive Spotlight Cursor Tracking on Cards ────────
      const handleMouseMove = (e: MouseEvent) => {
        const cards = document.querySelectorAll<HTMLElement>(
          '.maximem-dark-theme [data-name="Container5"], .maximem-dark-theme [data-name="Container18"], .maximem-dark-theme [data-name="Container21"], .maximem-dark-theme [data-name="Container33"], .maximem-dark-theme [data-name="Container34"], .maximem-dark-theme [data-name="Container35"], .maximem-dark-theme .why-card, .maximem-dark-theme .research-card'
        );
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // ── 7. Nav Scroll Scrolled State ─────────────────────────────
      const nav = document.querySelector('[data-name="Navigation"]') as HTMLElement | null;
      const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 20) {
          nav.classList.add("nav-scrolled");
        } else {
          nav.classList.remove("nav-scrolled");
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", onScroll);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen transition-colors duration-200 ${
        isLight
          ? "maximem-light-theme bg-[#ffffff] selection:bg-[#f26522]/20 selection:text-[#09090b] text-[#27272a]"
          : "maximem-dark-theme bg-[#090a0d] selection:bg-[#f26522]/25 selection:text-white text-white"
      }`}
    >
      {/* ─────────────────────────────────────────────────────────────
          GLOBAL CSS: DESIGN PRINCIPLES (Sharp Corners, Grid, Alignment, Contrast)
          OPTION 1: Supports both Dark Obsidian and Crisp Light Mode
      ────────────────────────────────────────────────────────────── */}
      <style jsx global>{`
        /* ── 0. Universal Space Grotesk Typography for Maximem (Dark & Light) ── */
        .maximem-dark-theme,
        .maximem-light-theme {
          --font-sans: var(--font-space-grotesk), "Space Grotesk", sans-serif !important;
          --font-heading: var(--font-space-grotesk), "Space Grotesk", sans-serif !important;
          font-family: var(--font-space-grotesk), "Space Grotesk", sans-serif !important;
        }

        .maximem-dark-theme,
        .maximem-light-theme,
        .maximem-dark-theme p,
        .maximem-light-theme p,
        .maximem-dark-theme h1,
        .maximem-light-theme h1,
        .maximem-dark-theme h2,
        .maximem-light-theme h2,
        .maximem-dark-theme h3,
        .maximem-light-theme h3,
        .maximem-dark-theme h4,
        .maximem-light-theme h4,
        .maximem-dark-theme h5,
        .maximem-light-theme h5,
        .maximem-dark-theme h6,
        .maximem-light-theme h6,
        .maximem-dark-theme a,
        .maximem-light-theme a,
        .maximem-dark-theme button,
        .maximem-light-theme button,
        .maximem-dark-theme div,
        .maximem-light-theme div,
        .maximem-dark-theme input,
        .maximem-light-theme input,
        .maximem-dark-theme textarea,
        .maximem-light-theme textarea,
        .maximem-dark-theme label,
        .maximem-light-theme label,
        .maximem-dark-theme li,
        .maximem-light-theme li,
        .maximem-dark-theme span:not([class*="mono"]):not([class*="Mono"]):not([class*="Geist_Mono"]):not([data-mono]),
        .maximem-light-theme span:not([class*="mono"]):not([class*="Mono"]):not([class*="Geist_Mono"]):not([data-mono]),
        .maximem-dark-theme [class*="font-['Geist"],
        .maximem-light-theme [class*="font-['Geist"],
        .maximem-dark-theme [class*="font-['Inter"],
        .maximem-light-theme [class*="font-['Inter"],
        .maximem-dark-theme [class*="font-['SF"],
        .maximem-light-theme [class*="font-['SF"],
        .maximem-dark-theme [class*="font-sans"],
        .maximem-light-theme [class*="font-sans"],
        .maximem-dark-theme *:not(code):not(pre):not(kbd):not([class*="mono"]):not([class*="Mono"]):not([class*="Geist_Mono"]):not([class*="geist-mono"]):not([class*="GeistMono"]):not([data-mono]),
        .maximem-light-theme *:not(code):not(pre):not(kbd):not([class*="mono"]):not([class*="Mono"]):not([class*="Geist_Mono"]):not([class*="geist-mono"]):not([class*="GeistMono"]):not([data-mono]) {
          font-family: var(--font-space-grotesk), "Space Grotesk", sans-serif !important;
        }

        .maximem-dark-theme .font-mono,
        .maximem-light-theme .font-mono,
        .maximem-dark-theme [class*="Mono"],
        .maximem-light-theme [class*="Mono"],
        .maximem-dark-theme [class*="mono"],
        .maximem-light-theme [class*="mono"],
        .maximem-dark-theme [class*="Geist_Mono"],
        .maximem-light-theme [class*="Geist_Mono"],
        .maximem-dark-theme [class*="GeistMono"],
        .maximem-light-theme [class*="GeistMono"],
        .maximem-dark-theme [data-mono],
        .maximem-light-theme [data-mono],
        .maximem-dark-theme code,
        .maximem-light-theme code,
        .maximem-dark-theme kbd,
        .maximem-light-theme kbd,
        .maximem-dark-theme pre,
        .maximem-light-theme pre {
          font-family: var(--font-mono), "Geist Mono", monospace !important;
        }

        .maximem-dark-theme [data-name="Button"],
        .maximem-dark-theme [data-name*="Button"] {
          border-radius: 4px !important;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .maximem-dark-theme [data-name="Button"]:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(242, 101, 34, 0.2) !important;
        }

        /* ── 1.5 Navigation Theme Styles ── */
        .maximem-dark-theme [data-name="Navigation"] {
          background-color: rgba(9, 10, 13, 0.9) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
        }
        .maximem-dark-theme [data-name="Navigation"].nav-scrolled {
          background-color: rgba(9, 10, 13, 0.96) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14) !important;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6) !important;
        }

        .maximem-light-theme [data-name="Navigation"] {
          background-color: rgba(255, 255, 255, 0.9) !important;
          border-bottom: 1px solid #e4e4e7 !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
        }
        .maximem-light-theme [data-name="Navigation"].nav-scrolled {
          background-color: rgba(255, 255, 255, 0.98) !important;
          border-bottom: 1px solid #d4d4d8 !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
        }

        /* ── 2. Builder Logos Contrast Fix ── */
        .maximem-dark-theme [data-name*="List"] [data-name*="Image"],
        .maximem-dark-theme [data-name*="List"] img {
          opacity: 0.85 !important;
          transition: opacity 0.25s ease, transform 0.25s ease !important;
        }
        .maximem-dark-theme [data-name*="List"] [data-name*="Image"]:hover,
        .maximem-dark-theme [data-name*="List"] img:hover {
          opacity: 1 !important;
          transform: translateY(-1px);
        }

        /* ── 3. Container Alignment & Grid Resiliency ── */
        .maximem-dark-theme [data-name="Main Content"] {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }

        /* Hero Section Keyframes & Accessibility */

        @keyframes synapCoreBreathe {
          0%, 100% {
            box-shadow: 0 0 14px rgba(242, 101, 34, 0.22), inset 0 0 10px rgba(242, 101, 34, 0.05);
            border-color: rgba(242, 101, 34, 0.6);
          }
          50% {
            box-shadow: 0 0 24px rgba(242, 101, 34, 0.42), inset 0 0 16px rgba(242, 101, 34, 0.12);
            border-color: rgba(242, 101, 34, 0.95);
          }
        }

        /* Footer Globe Animation Keyframes */
        @keyframes footerGlobeOrbit1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes footerGlobeOrbit2 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        .footer-globe-orbit-1 {
          animation: footerGlobeOrbit1 24s linear infinite;
        }

        .footer-globe-orbit-2 {
          animation: footerGlobeOrbit2 32s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-grid-drift {
            animation: none !important;
          }
          .synap-core-breathe {
            animation: none !important;
          }
          .footer-globe-orbit-1,
          .footer-globe-orbit-2 {
            animation: none !important;
          }
        }

        /* Credibility & Trust Section */
        .maximem-dark-theme [data-name="CredibilitySection"],
        .maximem-dark-theme [data-name="Section1"] {
          height: auto !important;
          min-height: unset !important;
        }

        /* Section 2: Products (Synap & Vity / What is Maximem) */
        .maximem-dark-theme [data-name="WhatIsMaximemSection"],
        .maximem-dark-theme [data-name="Section2"] {
          height: auto !important;
          min-height: unset !important;
        }
        .maximem-dark-theme [data-name="Container17"] {
          position: static !important;
          transform: none !important;
          width: 100% !important;
          max-width: 1080px !important;
          margin-top: 40px !important;
          margin-bottom: 24px !important;
          height: auto !important;
          display: flex !important;
          gap: 28px !important;
        }
        .maximem-dark-theme [data-name="Link7"] {
          position: static !important;
          transform: none !important;
          margin-top: 16px !important;
        }

        /* Equalize Product Cards */
        .maximem-light-theme [data-name="Container18"],
        .maximem-light-theme [data-name="Container21"] {
          flex: 1 1 0% !important;
          height: 440px !important;
          border-radius: 6px !important;
          background: #ffffff !important;
          border: 1px solid #e4e4e7 !important;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04) !important;
          position: relative !important;
          overflow: hidden !important;
          display: flex !important;
          flex-direction: column !important;
          padding: 32px !important;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease !important;
        }
        .maximem-dark-theme [data-name="Container18"],
        .maximem-dark-theme [data-name="Container21"] {
          flex: 1 1 0% !important;
          height: 440px !important;
          border-radius: 6px !important;
          background: #111113 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4) !important;
          position: relative !important;
          overflow: hidden !important;
          display: flex !important;
          flex-direction: column !important;
          padding: 32px !important;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease !important;
        }
        .maximem-light-theme [data-name="Container18"]:hover,
        .maximem-light-theme [data-name="Container21"]:hover {
          border-color: rgba(242, 101, 34, 0.55) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 16px 40px rgba(242, 101, 34, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06) !important;
        }
        .maximem-dark-theme [data-name="Container18"]:hover,
        .maximem-dark-theme [data-name="Container21"]:hover {
          border-color: rgba(242, 101, 34, 0.55) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 16px 40px rgba(242, 101, 34, 0.2), 0 8px 24px rgba(0, 0, 0, 0.6) !important;
        }
        /* Spotlight mouse ray */
        .maximem-light-theme [data-name="Container18"]::before,
        .maximem-light-theme [data-name="Container21"]::before,
        .maximem-dark-theme [data-name="Container18"]::before,
        .maximem-dark-theme [data-name="Container21"]::before {
          content: "" !important;
          position: absolute !important;
          inset: 0 !important;
          background: radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(242, 101, 34, 0.06), transparent 60%) !important;
          pointer-events: none !important;
          opacity: 0;
          transition: opacity 0.3s ease !important;
        }
        .maximem-light-theme [data-name="Container18"]:hover::before,
        .maximem-light-theme [data-name="Container21"]:hover::before,
        .maximem-dark-theme [data-name="Container18"]:hover::before,
        .maximem-dark-theme [data-name="Container21"]:hover::before {
          opacity: 1 !important;
        }

        /* Section 3: Why Memory alignment */
        .maximem-light-theme [data-name="Section3"],
        .maximem-dark-theme [data-name="Section3"] {
          padding-top: 80px !important;
          padding-bottom: 80px !important;
        }

        /* Section 4: Architecture Diagram sharp radius & alignment */
        .maximem-light-theme [data-name="Section4"],
        .maximem-dark-theme [data-name="Section4"] {
          padding-top: 80px !important;
          padding-bottom: 80px !important;
        }
        .maximem-light-theme [data-name*="Synap architecture"] [class*="rounded"],
        .maximem-dark-theme [data-name*="Synap architecture"] [class*="rounded"] {
          border-radius: 4px !important;
        }

        /* Section 5: Benchmark Comparison Table */
        .maximem-light-theme [data-name="Section5"] {
          padding-top: 96px !important;
          padding-bottom: 96px !important;
          background-color: #ffffff !important;
          background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px) !important;
          background-size: 24px 24px !important;
        }
        .maximem-dark-theme [data-name="Section5"] {
          padding-top: 96px !important;
          padding-bottom: 96px !important;
          background-color: #090a0d !important;
          background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px) !important;
          background-size: 24px 24px !important;
        }
        .maximem-light-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar,
        .maximem-dark-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar {
          height: 5px;
        }
        .maximem-light-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar-track,
        .maximem-dark-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 4px;
        }
        .maximem-light-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar-thumb,
        .maximem-dark-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(242, 101, 34, 0.3);
          border-radius: 4px;
        }
        .maximem-light-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar-thumb:hover,
        .maximem-dark-theme [data-name="Section5"] .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(242, 101, 34, 0.6);
        }

        /* Section 6: Research Cards Equalization & Alignment */
        .maximem-light-theme [data-name="Section6"],
        .maximem-dark-theme [data-name="Section6"] {
          padding: 88px 24px !important;
          height: auto !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }

        /* Section 7 & 8: Bottom Banner & Zero Clipping */
        .maximem-light-theme [data-name="Section7"] {
          height: auto !important;
          min-height: 140px !important;
          padding: 32px 24px !important;
          background: #fafafa !important;
          border-top: 1px solid #e4e4e7 !important;
          border-bottom: 1px solid #e4e4e7 !important;
        }
        .maximem-dark-theme [data-name="Section7"] {
          height: auto !important;
          min-height: 140px !important;
          padding: 32px 24px !important;
          background: #0c0c0e !important;
          border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        .maximem-light-theme [data-name="Section8"],
        .maximem-dark-theme [data-name="Section8"] {
          height: auto !important;
          min-height: unset !important;
          background: transparent !important;
        }
        .maximem-light-theme [data-name="Container60"],
        .maximem-dark-theme [data-name="Container60"] {
          position: static !important;
          max-width: 1140px !important;
          width: 100% !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
        }

        /* Footer Alignment */
        .maximem-light-theme [data-name="Footer"],
        .maximem-dark-theme [data-name="Footer"] {
          width: 100% !important;
          border-top: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* Framer Motion Top Reading Scroll Progress Indicator */}
      <motion.div
        className="fixed top-[44px] left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#f26522] via-[#ff7a36] to-[#f26522] origin-left z-[100] shadow-[0_0_12px_rgba(242,101,34,0.6)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Ambient background engineering grid overlay */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 ${
          isLight
            ? "bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        } bg-[size:64px_64px]`}
      />
      <div className="fixed top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-radial from-[#f26522]/[0.04] via-transparent to-transparent blur-3xl pointer-events-none z-0" />

      {/* Main App Content */}
      <div className="relative z-10 w-full pt-[44px]">
        <MaximemMemoryAndContextManagementForAiAgents
          isLightProp={isLight}
          onToggleThemeProp={() => {
            setIsLight((prev) => {
              const next = !prev;
              if (typeof window !== "undefined") {
                localStorage.setItem("maximem_theme", next ? "light" : "dark");
                window.dispatchEvent(new CustomEvent("maximem-theme-changed", { detail: { isLight: next } }));
              }
              return next;
            });
          }}
        />
      </div>
    </div>
  );
}

