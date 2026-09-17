"use client";

import React, { useEffect, useRef } from "react";
import MaximemCenteredLightEdition from "./memo-page";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MemoView() {
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
      const sections = containerRef.current?.querySelectorAll<HTMLElement>(
        '[data-name="Section"], [data-name="Body"] > div'
      );
      if (sections) {
        sections.forEach((sec, idx) => {
          if (idx === 0) return; // Keep hero section fully visible without delay
          gsap.from(sec, {
            opacity: 0.3,
            y: 16,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        });
      }
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-[#020202] overflow-x-hidden flex flex-col items-center pt-[42px]"
    >
      {/* Framer motion top scroll progress bar in Maximem orange accent */}
      <motion.div
        className="fixed top-[42px] left-0 right-0 h-[3px] bg-gradient-to-r from-[#f26522] via-[#ff7a36] to-[#f26522] origin-left z-[100] shadow-[0_0_8px_rgba(242,101,34,0.6)] pointer-events-none"
        style={{ scaleX }}
      />
      
      {/* Centered canvas wrapper */}
      <div className="relative w-full flex justify-center items-center overflow-x-auto min-h-screen">
        <MaximemCenteredLightEdition />
      </div>
    </div>
  );
}
