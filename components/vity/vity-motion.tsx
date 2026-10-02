"use client";

import React, { useRef, useSyncExternalStore } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ═════════════════════════════════════════════════════════════════════════════
// 1. ACCESSIBILITY: PREFERS REDUCED MOTION (useSyncExternalStore)
// ═════════════════════════════════════════════════════════════════════════════
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. REUSABLE SCROLL REVEAL WRAPPER
// ═════════════════════════════════════════════════════════════════════════════
export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 30,
  duration = 0.8,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // power3.out equivalent
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 3. ANIMATED TECHNICAL EYEBROW LABEL
// ═════════════════════════════════════════════════════════════════════════════
export interface AnimatedEyebrowProps {
  number?: string;
  category: string;
  className?: string;
  delay?: number;
}

export function AnimatedEyebrow({
  number: _number,
  category,
  className = "",
  delay = 0,
}: AnimatedEyebrowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  if (prefersReduced) {
    return (
      <div className={`inline-flex items-center gap-2 font-mono text-[11.5px] sm:text-[12px] tracking-[1.4px] uppercase text-[#a1a1aa] ${className}`}>
        <span className="size-1.5 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
        <span>{category}</span>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`inline-flex items-center gap-2 font-mono text-[11.5px] sm:text-[12px] tracking-[1.4px] uppercase text-[#a1a1aa] ${className}`}
    >
      {/* 1. Orange square dot indicator */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.4,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="size-1.5 rounded-[2px] bg-[#f26522] inline-block shrink-0"
      />

      {/* 2. Category Label reveals */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{
          duration: 0.55,
          delay: delay + 0.06,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {category}
      </motion.span>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 4. ANIMATED SECTION HEADING
// ═════════════════════════════════════════════════════════════════════════════
export interface AnimatedHeadingProps {
  primaryText: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  primaryText,
  highlightText,
  subtitle,
  align = "center",
  className = "",
  delay = 0.05,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  if (prefersReduced) {
    return (
      <div className={`flex flex-col ${alignClass} ${className}`}>
        <h2 className="font-['Geist',sans-serif] text-[34px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.12] text-white">
          <span className={highlightText ? "inline-block mr-[0.28em]" : ""}>{primaryText}</span>
          {highlightText && (
            <span className="text-[#f26522] not-italic font-bold">{highlightText}</span>
          )}
        </h2>
        {subtitle && (
          <p className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#a1a1aa] max-w-[600px]">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={`flex flex-col ${alignClass} ${className}`}>
      <h2 className="font-['Geist',sans-serif] text-[34px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.12] text-white">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{
            duration: 0.7,
            delay: delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${highlightText ? "mr-[0.28em]" : ""}`}
        >
          {primaryText}
        </motion.span>
        {highlightText && (
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: 0.7,
              delay: delay + 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block text-[#f26522] not-italic font-bold"
          >
            {highlightText}
          </motion.span>
        )}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{
            duration: 0.65,
            delay: delay + 0.18,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#a1a1aa] max-w-[600px]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 5. STAGGER GRID CONTAINER & ITEMS
// ═════════════════════════════════════════════════════════════════════════════
export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 22,
}: StaggerItemProps) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 6. CARD HOVER MOTION SETTINGS (Exact matching spec)
// ═════════════════════════════════════════════════════════════════════════════
export const cardHoverMotion = {
  whileHover: {
    y: -3,
    transition: { duration: 0.24, ease: "easeOut" as const },
  },
};

export const buttonHoverMotion = {
  whileHover: {
    y: -2,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// ═════════════════════════════════════════════════════════════════════════════
// 7. NUMERICAL COUNT-UP (GSAP tweening for metrics)
// ═════════════════════════════════════════════════════════════════════════════
export function MetricCountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  delay = 0.55,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const prefersReduced = usePrefersReducedMotion();
  const [val, setVal] = React.useState(() => (prefersReduced ? target : 0));

  React.useEffect(() => {
    if (prefersReduced) {
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
  }, [target, decimals, duration, delay, prefersReduced]);

  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
