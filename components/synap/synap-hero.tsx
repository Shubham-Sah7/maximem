"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractiveWaveCanvas from "@/components/website-clone/interactive-wave-canvas";

// Ensure GSAP ScrollTrigger plugin is registered safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SynapHeroProps {
  isLight?: boolean;
}

/**
 * MetricCountUp: Animated numerical counter using GSAP tweening with requestAnimationFrame precision
 */
function MetricCountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  delay = 0.55,
  isReducedMotion = false,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  isReducedMotion?: boolean;
}) {
  const [val, setVal] = useState(() => (isReducedMotion ? target : 0));

  useEffect(() => {
    if (isReducedMotion) {
      setVal(target);
      return;
    }

    const state = { count: 0 };
    const tween = gsap.to(state, {
      count: target,
      duration,
      delay,
      ease: "power2.out",
      onUpdate: () => {
        setVal(state.count);
      },
    });

    return () => {
      tween.kill();
    };
  }, [target, decimals, duration, delay, isReducedMotion]);

  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/**
 * TypewriterText: Intentional typewriter reveal for key supporting product copy
 */
function TypewriterText({
  text,
  delay = 480,
  speed = 13,
  isReducedMotion = false,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  isReducedMotion?: boolean;
  className?: string;
}) {
  const [displayedLength, setDisplayedLength] = useState(() => (isReducedMotion ? text.length : 0));
  const [showCursor, setShowCursor] = useState(!isReducedMotion);

  useEffect(() => {
    if (isReducedMotion) {
      setDisplayedLength(text.length);
      setShowCursor(false);
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      let currentIdx = 0;
      intervalId = setInterval(() => {
        currentIdx++;
        setDisplayedLength(currentIdx);
        if (currentIdx >= text.length) {
          clearInterval(intervalId);
          setTimeout(() => setShowCursor(false), 2400);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay, speed, isReducedMotion]);

  return (
    <span className={className}>
      {text.slice(0, displayedLength)}
      {showCursor && (
        <span className="inline-block w-[2px] h-[0.9em] bg-[#f26522] ml-1 align-baseline animate-pulse opacity-90" />
      )}
    </span>
  );
}

export function SynapHero({ isLight = false }: SynapHeroProps) {
  const prefersReduced = useReducedMotion();
  const isReducedMotion = !!prefersReduced;

  const heroSectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const orangeLightRef = useRef<HTMLDivElement>(null);

  // GSAP Animations: Entrance fade+scale for image, subtle ambient light movement, and scroll parallax
  useEffect(() => {
    if (isReducedMotion || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Cinematic entrance for doorway image (fade + scale + blur clear)
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.93,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            delay: 0.15,
            ease: "power3.out",
          }
        );
      }

      // 2. Very subtle ambient breathing and drift for the orange glow
      if (orangeLightRef.current) {
        gsap.to(orangeLightRef.current, {
          scale: 1.14,
          x: 22,
          y: -14,
          opacity: 0.35,
          duration: 7.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. GSAP ScrollTrigger for minimal image parallax on scroll
      if (imageRef.current && heroSectionRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // 4. Opposing subtle parallax for the background light to create natural depth
      if (orangeLightRef.current && heroSectionRef.current) {
        gsap.to(orangeLightRef.current, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      }
    }, heroSectionRef);

    return () => {
      ctx.revert();
    };
  }, [isReducedMotion]);

  const headlineLines = [
    "Build AI that remembers,",
    "learns and gets better",
    "over time.",
  ];

  const supportingCopy =
    "Persistent memory and context for AI agents, across all popular agent frameworks.";

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center pt-16 sm:pt-20 lg:pt-20 pb-14 sm:pb-20 bg-black"
    >
      {/* Restored Homepage Hero animated wave canvas with mouse interaction */}
      <div className="absolute inset-0 pointer-events-auto z-0 select-none">
        <InteractiveWaveCanvas
          isLight={isLight}
          glowColor="#f26522"
          dotSpacing={26}
          transparentBg={true}
          showAura={false}
          variant="hero"
        />
      </div>

      {/* Ambient warm glow behind doorway on right with subtle GSAP breathing/drift animation */}
      <div
        ref={orangeLightRef}
        className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[750px] lg:w-[850px] h-[750px] lg:h-[850px] rounded-full pointer-events-none z-0 opacity-30 blur-[150px] will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(242,101,34,0.38) 0%, rgba(242,101,34,0.15) 45%, rgba(0,0,0,0) 70%)",
        }}
      />
      {/* Floor reflection spill beneath doorway */}
      <div
        className="absolute bottom-6 right-[6%] w-[500px] lg:w-[620px] h-[120px] pointer-events-none z-0 opacity-25 blur-[50px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(242,101,34,0.35) 0%, rgba(242,101,34,0.1) 50%, rgba(0,0,0,0) 75%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ── LEFT COLUMN: Authority Headline, Metrics & Action Buttons ── */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Smooth line-by-line headline reveal with Framer Motion */}
            <h1 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-semibold leading-[1.12] tracking-[-0.03em] text-white font-['Geist',sans-serif]">
              {headlineLines.map((line, idx) => (
                <span key={idx} className="block overflow-hidden py-[2px] -my-[2px]">
                  <motion.span
                    className="block"
                    initial={isReducedMotion ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.08 + idx * 0.14,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Sub-headline: Typewriter / progressive reveal */}
            <motion.p
              initial={isReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.44,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-[25px] tracking-[-0.012em] text-[#9F9FA9] max-w-[490px] font-['Geist',sans-serif] min-h-[50px]"
            >
              <TypewriterText
                text={supportingCopy}
                delay={460}
                speed={12}
                isReducedMotion={isReducedMotion}
              />
            </motion.p>

            {/* Metrics Row: 92% (orange), 93.2% (white), <15ms (white) with subtle count-up */}
            <motion.div
              initial={isReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 sm:mt-10 flex flex-wrap items-start gap-7 sm:gap-9 lg:gap-11"
            >
              <div className="flex flex-col items-start cursor-default">
                <span className="font-['Geist',sans-serif] text-[30px] sm:text-[34px] lg:text-[36px] font-semibold text-[#f26522] tracking-tight leading-none">
                  <MetricCountUp
                    target={92}
                    suffix="%"
                    delay={1.2}
                    duration={1.4}
                    isReducedMotion={isReducedMotion}
                  />
                </span>
                <span className="mt-2 text-[12px] sm:text-[12.5px] text-[#9F9FA9] font-normal leading-tight font-['Geist',sans-serif]">
                  LongMemEval accuracy
                </span>
              </div>

              <div className="flex flex-col items-start cursor-default">
                <span className="font-['Geist',sans-serif] text-[30px] sm:text-[34px] lg:text-[36px] font-semibold text-white tracking-tight leading-none">
                  <MetricCountUp
                    target={93.2}
                    decimals={1}
                    suffix="%"
                    delay={1.3}
                    duration={1.4}
                    isReducedMotion={isReducedMotion}
                  />
                </span>
                <span className="mt-2 text-[12px] sm:text-[12.5px] text-[#9F9FA9] font-normal leading-tight font-['Geist',sans-serif]">
                  LoCoMo accuracy
                </span>
              </div>

              <div className="flex flex-col items-start cursor-default">
                <span className="font-['Geist',sans-serif] text-[30px] sm:text-[34px] lg:text-[36px] font-semibold text-white tracking-tight leading-none">
                  <MetricCountUp
                    target={15}
                    prefix="<"
                    suffix="ms"
                    delay={1.4}
                    duration={1.3}
                    isReducedMotion={isReducedMotion}
                  />
                </span>
                <span className="mt-2 text-[12px] sm:text-[12.5px] text-[#9F9FA9] font-normal leading-tight font-['Geist',sans-serif]">
                  P75 in-conversation retrieval
                </span>
              </div>
            </motion.div>

            {/* CTA Action Buttons with gentle hover & tap interactions */}
            <motion.div
              initial={isReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <motion.a
                href="https://synap.maximem.ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={isReducedMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group h-[46px] pl-5 pr-2.5 font-medium text-[15px] rounded-[10px] flex items-center gap-3 bg-[#f26522] hover:bg-[#e05616] text-white shadow-[0_2px_14px_rgba(242,101,34,0.35)] select-none cursor-pointer"
              >
                <span className="tracking-tight">Get Started</span>
                <span className="w-[26px] h-[26px] rounded-[7px] bg-white text-[#f26522] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:translate-x-0.5">
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
              </motion.a>

              <motion.a
                href="https://synap.maximem.ai/playground"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={isReducedMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group h-[46px] px-6 font-medium text-[14.5px] rounded-[10px] flex items-center justify-center bg-[#18181b] hover:bg-[#222226] border border-white/10 text-white shadow-xs select-none cursor-pointer"
              >
                <span>Try in Playground</span>
              </motion.a>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Glowing Doorway Visual with Cinematic Reveal & Parallax ── */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            {/* Ambient orange glow anchor behind doorway */}
            <div
              className="absolute inset-0 pointer-events-none -z-10 blur-[80px] opacity-40"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(242, 101, 34, 0.45) 0%, rgba(242, 101, 34, 0.1) 50%, transparent 75%)",
              }}
            />

            <div className="relative w-[115%] sm:w-[120%] lg:w-[122%] max-w-[580px] lg:max-w-[740px] xl:max-w-[800px] lg:-mr-6 xl:-mr-12 flex items-center justify-center lg:justify-end overflow-hidden">
              <img
                ref={imageRef}
                src="/synap/hero_doorway_2x.png"
                alt="Build AI that remembers, learns and gets better over time"
                style={{
                  mixBlendMode: "screen",
                  maskImage:
                    "radial-gradient(ellipse 72% 70% at 50% 50%, black 45%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 78%, transparent 92%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 72% 70% at 50% 50%, black 45%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 78%, transparent 92%)",
                }}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_80px_rgba(242,101,34,0.35)] will-change-transform mix-blend-screen"
              />

              {/* Seamless edge feathering overlays to melt into hero background on all 4 sides */}
              <div className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
