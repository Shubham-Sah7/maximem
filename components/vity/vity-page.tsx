"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterSection from "@/components/website-clone/footer-section";
import HomepageNavbar from "@/components/website-clone/homepage-navbar";
import HeroSection from "./hero-section";
import MemoryProblemSection from "./memory-problem-section";
import SeeHowItWorksSection from "./see-how-it-works-section";
import UniversalMemorySection from "./universal-memory-section";
import SupportedAppsSection from "./supported-apps-section";
import TestimonialsSection from "./testimonials-section";
import FaqSection from "./faq-section";
import CtaGetStartedSection from "./cta-get-started-section";
import VideoModal from "./video-modal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VityPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [videoStartTime, setVideoStartTime] = React.useState(0);

  const handleOpenVideo = (seconds: number = 0) => {
    setVideoStartTime(seconds);
    setIsVideoModalOpen(true);
  };

  // GSAP ScrollTrigger Section Transitions & Reveals matching Homepage Rhythm
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const sections = containerRef.current?.querySelectorAll<HTMLElement>("[data-vity-section]");
      sections?.forEach((sec) => {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0B0B0C] text-white selection:bg-[#f26522]/30 selection:text-white font-['Geist',sans-serif] antialiased overflow-x-hidden"
    >
      
      {/* ── Top reading scroll progress indicator ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#f26522] origin-left z-[100] pointer-events-none"
        style={{ scaleX }}
      />


      {/* ── 1. NAVBAR (Synchronized with Homepage & Synap) ── */}
      <HomepageNavbar isLight={false} />

      {/* ── 2. HERO SECTION (Plays immediate entrance animations) ── */}
      <HeroSection />

      {/* ── 3. SECTION: THE AI MEMORY PROBLEM ── */}
      <div id="problem" data-vity-section className="relative z-10 will-change-transform">
        <MemoryProblemSection />
      </div>

      {/* ── 4. SECTION: SEE HOW IT WORKS (Walkthrough + Video Tablet) ── */}
      <div id="how-it-works" data-vity-section className="relative z-10 will-change-transform">
        <SeeHowItWorksSection onOpenModal={handleOpenVideo} />
      </div>

      {/* ── 5. SECTION: UNIVERSAL AI MEMORY (6 Cards + Vault Diagram) ── */}
      <div id="universal-memory" data-vity-section className="relative z-10 will-change-transform">
        <UniversalMemorySection />
      </div>

      {/* ── 6. SECTION: SUPPORTED APPS AND PLATFORMS (5 Category Cards) ── */}
      <div id="supported-apps" data-vity-section className="relative z-10 will-change-transform">
        <SupportedAppsSection />
      </div>

      {/* ── 7. SECTION: WHAT PEOPLE ARE SAYING (Masonry Tweet Grid) ── */}
      <div id="testimonials" data-vity-section className="relative z-10 will-change-transform">
        <TestimonialsSection />
      </div>

      {/* ── 8. SECTION: FREQUENTLY ASKED QUESTIONS (FAQ Accordion) ── */}
      <div id="faq" data-vity-section className="relative z-10 will-change-transform">
        <FaqSection />
      </div>

      {/* ── 9. SECTION: READY TO GIVE YOUR AI A MEMORY? (CTA Banner) ── */}
      <div id="get-started" data-vity-section className="relative z-10 will-change-transform">
        <CtaGetStartedSection />
      </div>

      {/* ── 10. FOOTER ── */}
      <div data-vity-section className="relative z-10 will-change-transform">
        <FooterSection isLight={false} />
      </div>

      {/* ── Global Cinematic Video Modal ── */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        initialStartTime={videoStartTime}
      />

    </div>
  );
}
