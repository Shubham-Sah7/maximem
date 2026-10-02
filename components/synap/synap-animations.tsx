"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SynapAnimationContextType {
  isReducedMotion: boolean;
}

const SynapAnimationContext = createContext<SynapAnimationContextType>({
  isReducedMotion: false,
});

export function useSynapAnimation() {
  return useContext(SynapAnimationContext);
}

interface SynapAnimationProviderProps {
  children: ReactNode;
}

export function SynapAnimationProvider({
  children,
}: SynapAnimationProviderProps) {
  const prefersReduced = useReducedMotion();
  const isReducedMotion = !!prefersReduced;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // ═════════════════════════════════════════════════════════════════
      // 1. TYPOGRAPHY: Clip-Path & Upward Slide for Major Headings
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-heading]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0 0 100% 0)", y: 22, opacity: 0 },
            {
              clipPath: "inset(0 0 0% 0)",
              y: 0,
              opacity: 1,
              duration: 0.95,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 89%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 2. EYEBROW LABELS: Crisp Left Slide + Fade
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-eyebrow]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -14 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 3. BODY TEXT: Gentle Upward Settle
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-text]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 4. SECTION CONTAINERS: Subtle Opacity + Y Settle
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-section]")
        .forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0.25, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 5. CARDS: Staggered Entrance (Subtle Y, Opacity & Scale)
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-cards]")
        .forEach((container) => {
          const cards = container.querySelectorAll<HTMLElement>(
            "[data-synap-card]"
          );
          if (!cards.length) return;
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: container,
                start: "top 86%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 6. INFO & ARCHITECTURE CARDS
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-info-card]")
        .forEach((card, idx) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 28, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              delay: idx * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 7. SECTION 04: THE PRODUCT DYNAMIC CONNECTORS & CODE TIMELINE
      // ═════════════════════════════════════════════════════════════════
      const productSection = document.getElementById("the-product");
      if (productSection) {
        // Draw connector paths on scroll
        const connectorPaths = productSection.querySelectorAll<SVGPathElement>(
          "svg path[d]"
        );
        connectorPaths.forEach((path) => {
          const len = path.getTotalLength ? path.getTotalLength() : 300;
          if (len > 0) {
            gsap.fromTo(
              path,
              { strokeDasharray: len, strokeDashoffset: len },
              {
                strokeDashoffset: 0,
                duration: 1.2,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: productSection,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

        // Stagger code editor lines inside product section
        const codeLines = productSection.querySelectorAll<HTMLElement>(
          "[data-synap-code-line]"
        );
        if (codeLines.length > 0) {
          gsap.fromTo(
            codeLines,
            { opacity: 0, x: -8 },
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.04,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: productSection,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ═════════════════════════════════════════════════════════════════
      // 8. SECTION 07: 5-PHASE LIFECYCLE STEPPER
      // ═════════════════════════════════════════════════════════════════
      const phaseContainer = document.querySelector<HTMLElement>(
        "[data-synap-phase-container]"
      );
      if (phaseContainer) {
        const steps = phaseContainer.querySelectorAll<HTMLElement>(
          "[data-synap-phase-step]"
        );
        gsap.fromTo(
          steps,
          { opacity: 0, y: 20, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.3)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: phaseContainer,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // ═════════════════════════════════════════════════════════════════
      // 9. SECTION 09: SCOPING & ISOLATION HIERARCHY FLOW
      // ═════════════════════════════════════════════════════════════════
      const scopingSection = document.getElementById("scoping");
      if (scopingSection) {
        const hierarchyCards = scopingSection.querySelectorAll<HTMLElement>(
          "[data-synap-hierarchy-card]"
        );
        if (hierarchyCards.length) {
          gsap.fromTo(
            hierarchyCards,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: scopingSection,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ═════════════════════════════════════════════════════════════════
      // 10. SECTION 10: BENCHMARKS TABLE & COUNTER
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-table]")
        .forEach((table) => {
          gsap.fromTo(
            table,
            { opacity: 0, y: 26, scale: 0.99 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: table,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );

          // Table Rows staggered entrance
          const rows = table.querySelectorAll<HTMLElement>(
            "[data-synap-table-row]"
          );
          if (rows.length) {
            gsap.fromTo(
              rows,
              { opacity: 0, x: -12 },
              {
                opacity: 1,
                x: 0,
                duration: 0.55,
                ease: "power2.out",
                stagger: 0.09,
                delay: 0.15,
                scrollTrigger: {
                  trigger: table,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }

          // Benchmark precision counter on 92%
          const benchmarkCounterEl = table.querySelector<HTMLElement>(
            "[data-synap-benchmark-counter]"
          );
          if (benchmarkCounterEl) {
            const counterObj = { val: 0 };
            ScrollTrigger.create({
              trigger: table,
              start: "top 84%",
              once: true,
              onEnter: () => {
                gsap.to(counterObj, {
                  val: 92,
                  duration: 1.5,
                  delay: 0.25,
                  ease: "power3.out",
                  onUpdate: () => {
                    benchmarkCounterEl.textContent = `${Math.round(counterObj.val)}%`;
                  },
                });
              },
            });
          }
        });

      // ═════════════════════════════════════════════════════════════════
      // 11. FAQ ACCORDION ROWS
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-faq-row]")
        .forEach((el, idx) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              delay: idx * 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 12. FRAMEWORK CARDS REVEAL (Smooth Staggered Flow)
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-framework-pills]")
        .forEach((container) => {
          const cards = container.querySelectorAll<HTMLElement>(
            "[data-synap-framework-card], :scope > div"
          );
          if (!cards.length) return;

          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 22,
              x: (i) => ((i % 6) - 2.5) * 4,
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              duration: 0.85,
              ease: "power2.out",
              stagger: {
                each: 0.038,
                from: "start",
                grid: "auto",
                ease: "power1.out",
              },
              scrollTrigger: {
                trigger: container,
                start: "top 86%",
                toggleActions: "play none none none",
              },
              onComplete: () => {
                gsap.set(cards, { clearProps: "transform" });
              },
            }
          );
        });

      // ═════════════════════════════════════════════════════════════════
      // 13. PARALLAX: Very Subtle Ambient Background Depth
      // ═════════════════════════════════════════════════════════════════
      gsap.utils
        .toArray<HTMLElement>("[data-synap-parallax]")
        .forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-speed") || "10");
          gsap.to(el, {
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });

      // ═════════════════════════════════════════════════════════════════
      // 14. INTERACTIVE SPOTLIGHT CURSOR TRACKING ON CARDS (Matching Homepage)
      // ═════════════════════════════════════════════════════════════════
      const handleMouseMove = (e: MouseEvent) => {
        const cards = document.querySelectorAll<HTMLElement>(
          "[data-synap-card], [data-synap-info-card], [data-synap-table]"
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

      // Refresh ScrollTrigger after DOM has settled
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearTimeout(timer);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isReducedMotion]);

  return (
    <SynapAnimationContext.Provider value={{ isReducedMotion }}>
      <div ref={containerRef} style={{ display: "contents" }}>
        {children}
      </div>
    </SynapAnimationContext.Provider>
  );
}
