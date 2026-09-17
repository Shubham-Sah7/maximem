"use client";

import React, { useEffect, useRef } from "react";
import MaximemLightEdition from "./linkrunner-page";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LinkrunnerView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      // 1. Staggered section reveals
      const sections = containerRef.current?.querySelectorAll<HTMLElement>(
        '[data-name="Section"], section'
      );
      if (sections) {
        sections.forEach((sec, idx) => {
          if (idx === 0) return; // Keep hero fully visible without delay
          gsap.fromTo(
            sec,
            { opacity: 0.1, y: 28, scale: 0.99 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // 2. Heading and text animations
      const headings = containerRef.current?.querySelectorAll<HTMLElement>("h2, h3, h4");
      if (headings) {
        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-white text-[#1a1a24] overflow-x-hidden flex flex-col items-center pt-[42px]">
      {/* Framer motion top scroll progress bar in Linkrunner indigo */}
      <motion.div
        className="fixed top-[42px] left-0 right-0 h-[3px] bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#818cf8] origin-left z-[100] shadow-[0_0_8px_rgba(99,102,241,0.6)] pointer-events-none"
        style={{ scaleX }}
      />
      <div className="relative w-full flex flex-col items-center">
        <MaximemLightEdition />
      </div>
    </div>
  );
}
