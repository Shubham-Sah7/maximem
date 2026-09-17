import { useEffect, useRef } from "react";
import MaximemMemoryAndContextManagementForAiAgents from "@/imports/MaximemMemoryAndContextManagementForAiAgents/index";

export default function App() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // ── Scroll-reveal ────────────────────────────────────────────
    // Target sections and major content blocks by data-name patterns
    const revealSelectors = [
      '[data-name="Section"]',
      '[data-name="Section1"]',
      '[data-name="Container14"]',
      '[data-name="Container16"]',
      '[data-name="Container15"]',
    ];

    const revealTargets: Element[] = [];
    revealSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => revealTargets.push(el));
    });

    // Also pick up block-level containers that are direct children of MainContent
    const mainContent = document.querySelector('[data-name="Main content"]');
    if (mainContent) {
      Array.from(mainContent.children).forEach((child) => {
        if (!revealTargets.includes(child)) revealTargets.push(child);
      });
    }

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );

    revealTargets.forEach((el, i) => {
      el.classList.add("reveal-on-scroll");
      (el as HTMLElement).style.transitionDelay = `${(i % 4) * 70}ms`;
      revealIO.observe(el);
    });

    // ── Nav scroll-tint ──────────────────────────────────────────
    const nav = document.querySelector('[data-name="Navigation"]') as HTMLElement | null;

    const onScroll = () => {
      if (!nav) return;
      const scrolled = window.scrollY > 30;
      nav.style.backgroundColor = scrolled
        ? "rgba(0, 0, 0, 0.95)"
        : "rgba(0, 0, 0, 0.80)";
      nav.style.backdropFilter = scrolled ? "blur(20px)" : "blur(12px)";
      nav.style.borderBottom = scrolled
        ? "1px solid rgba(255,255,255,0.07)"
        : "none";
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Stagger-reveal for feature cards ────────────────────────
    // Find the "What is Maximem" product cards and stagger them
    const productCards = document.querySelectorAll(
      '[data-name="Container17"], [data-name="Container18"]',
    );
    productCards.forEach((card, i) => {
      card.classList.add("reveal-on-scroll");
      (card as HTMLElement).style.transitionDelay = `${i * 120}ms`;
      revealIO.observe(card);
    });

    // ── Animate stat numbers counting up ────────────────────────
    const statEls = document.querySelectorAll(
      '[data-name="Maximem Synap benchmark results"] [data-name="Text"]',
    );

    const statsIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const p = entry.target.querySelector("p");
          if (!p) return;
          const rawText = p.textContent ?? "";
          const match = rawText.match(/[\d.]+/);
          if (!match) return;
          const target = parseFloat(match[0]);
          const isPercent = rawText.includes("%");
          const prefix = rawText.startsWith("<") ? "<" : "";
          const suffix = isPercent ? "%" : rawText.replace(/[\d.<]/g, "");
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            const current = (target * ease).toFixed(target % 1 !== 0 ? 1 : 0);
            p.textContent = `${prefix}${current}${suffix}`;
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          statsIO.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    statEls.forEach((el) => statsIO.observe(el));

    return () => {
      revealIO.disconnect();
      statsIO.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <MaximemMemoryAndContextManagementForAiAgents />;
}
