"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  highlightWords?: Record<string, string>; // word -> className
}

export function AnimatedHeading({
  text,
  className = "",
  el = "h2",
  delay = 0,
  stagger = 0.04,
  highlightWords = {},
}: AnimatedTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const Component = motion[el as "h2"];

  return (
    <Component
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^\w]/g, "");
        const highlightClass = highlightWords[cleanWord] || highlightWords[word];

        return (
          <span key={idx} className="inline-block overflow-hidden pb-1 align-top mr-[0.28em] last:mr-0">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${highlightClass || ""}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}

interface HeroTextRevealProps {
  lines: Array<{
    text: string;
    highlight?: { word: string; className: string };
  }>;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function HeroTextReveal({
  lines,
  className = "",
  delay = 0.1,
  stagger = 0.14,
}: HeroTextRevealProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {lines.map((lineObj, lineIdx) => {
        const words = lineObj.text.split(" ");
        return (
          <div key={lineIdx} className="overflow-hidden flex flex-wrap justify-center py-0.5">
            {words.map((word, wordIdx) => {
              const isHighlighted =
                lineObj.highlight &&
                (word.toLowerCase().includes(lineObj.highlight.word.toLowerCase()) ||
                  word.replace(/[^\w]/g, "").toLowerCase() === lineObj.highlight.word.toLowerCase());

              const wordDelay = delay + lineIdx * stagger + wordIdx * 0.035;

              return (
                <span key={wordIdx} className="inline-block overflow-hidden mx-[0.14em]">
                  <motion.span
                    initial={{ y: "115%", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.75,
                      delay: wordDelay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block ${
                      isHighlighted ? lineObj.highlight?.className : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export interface TypewriterSegment {
  text: string;
  className?: string;
  isHighlight?: boolean;
  lineBreakBefore?: boolean;
}

interface TypewriterHeadlineProps {
  segments: TypewriterSegment[];
  className?: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorColor?: string;
}

export function TypewriterHeadline({
  segments,
  className = "",
  speed = 22,
  startDelay = 180,
  onComplete,
  showCursor = true,
  cursorColor = "#f26522",
}: TypewriterHeadlineProps) {
  const totalLength = segments.reduce((sum, seg) => sum + seg.text.length, 0);
  const fullText = segments.map((seg) => seg.text).join("");

  const [charIndex, setCharIndex] = useState(0);
  const [blinkCursor, setBlinkCursor] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isCancelled = false;

    // Accessibility check: immediately finish if user prefers reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCharIndex(totalLength);
      onComplete?.();
      return;
    }

    const typeNextChar = (currentIdx: number) => {
      if (isCancelled) return;

      if (currentIdx >= totalLength) {
        onComplete?.();
        timeoutId = setTimeout(() => {
          if (!isCancelled) setBlinkCursor(false);
        }, 2200);
        return;
      }

      setCharIndex(currentIdx + 1);

      // Natural micro-pause at commas, periods, or word breaks
      const nextChar = fullText[currentIdx];
      let delay = speed;
      if (nextChar === "," || nextChar === ".") {
        delay = speed + 95;
      } else if (nextChar === " ") {
        delay = speed + 14;
      }

      timeoutId = setTimeout(() => {
        typeNextChar(currentIdx + 1);
      }, delay);
    };

    timeoutId = setTimeout(() => {
      typeNextChar(0);
    }, startDelay);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [totalLength, fullText, speed, startDelay]);

  let remaining = charIndex;

  return (
    <h1 className={className} aria-label={fullText}>
      {segments.map((segment, segIdx) => {
        const segLen = segment.text.length;
        const countToShow = Math.min(Math.max(0, remaining), segLen);
        remaining -= countToShow;

        if (countToShow === 0) return null;

        const visibleText = segment.text.slice(0, countToShow);

        return (
          <React.Fragment key={segIdx}>
            {segment.lineBreakBefore && <br />}
            <span
              className={segment.className || (segment.isHighlight ? "text-[#f26522]" : undefined)}
            >
              {visibleText}
            </span>
          </React.Fragment>
        );
      })}

      {showCursor && blinkCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: cursorColor }}
          className="inline-block w-[3px] h-[0.78em] rounded-sm ml-1 align-middle"
        />
      )}
    </h1>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  staggerChildren?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 28,
  duration = 0.7,
  staggerChildren = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-6% 0px -6% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren,
              },
            }
          : { opacity: 0, y: yOffset }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
  trigger?: boolean;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  delay = 0.2,
  className = "",
  trigger = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    const timer = setTimeout(() => {
      setHasStarted(true);
      if (!ref.current) return;
      const node = ref.current;
      const obj = { count: 0 };

      gsap.to(obj, {
        count: value,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (node) {
            node.textContent = `${prefix}${obj.count.toFixed(decimals)}${suffix}`;
          }
        },
      });
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, prefix, suffix, decimals, duration, delay, trigger]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}
