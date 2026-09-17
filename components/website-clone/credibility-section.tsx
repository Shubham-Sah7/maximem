"use client";

import React, { useRef, useState, useEffect } from "react";
import svgPaths from "./svg-paths";

// Image asset paths matching exact Maximem website assets
const imgImage = "/website-clone/a4f1d3c1f4f339c51188430eb8c65ec167cc6328.png"; // IIT Delhi
const imgImage1 = "/website-clone/bde9e2000ea3d2e071140afe25ecd0a77821cf12.png"; // Loopdesk
const imgImage2 = "/website-clone/57658469841f9d4846bb556243c1ddc3bd3cc86b.png"; // Aiden
const imgImageOmnidimension = "/website-clone/f2a46a515c2dab8f9b4c7ae24afb71cca9294bc4.png"; // Omnidimension
const imgImage3 = "/website-clone/3966c318087c34a87eab639481bcab8d2619c9a2.png"; // Praxel
const imgImage4 = "/website-clone/fd9e1e5c04b3fa7ffcf2e0956c3d9d406b68457b.png"; // IIT Roorkee
const imgImage5 = "/website-clone/5accd1373992738d0ddea3a5f06b409abe9879dc.png"; // BITS Pilani
const imgImage6 = "/website-clone/33a14a1ee5ee5d513eea0b796e0410cbfb4d8478.png"; // Mindloop
const imgImageClearVue = "/website-clone/40fa724e97ae2d6317abc3a458115e27355b8383.png"; // ClearVUE
const imgImage7 = "/website-clone/ac91258f549b9924be02e9f8382d107c5ba8c279.png"; // HandaUncle
const imgImageNexusVenturePartners = "/website-clone/ea8e428bcf8309be5780d7de5255c64c76d1dcd3.png"; // Nexus Venture Partners
const imgImage8 = "/website-clone/0f3b3f8acae7bd1f4962f38f04a4e721bfa1df43.png"; // helllo
const imgImagePoweredByAws = "/website-clone/84e327ff56180cce3616c360143e2d92910f6296.png"; // Powered by AWS

interface CredibilitySectionProps {
  isLight?: boolean;
}

// ══════════════════════════════════════════════════════════════════════
// 1. BUILDER LOGOS (Exact 23 Authentic Maximem Builders)
// ══════════════════════════════════════════════════════════════════════

function NvidiaLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[28px] w-[152px] flex items-center justify-center shrink-0">
      <svg className="h-[26px] w-auto max-w-[152px]" fill="none" viewBox="0 0 146.205 26.9577">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p5933000} fill={isLight ? "#18181b" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p126d6900} fill={isLight ? "#18181b" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pb0ef200} fill="#76B900" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IitDelhiLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="IIT Delhi" className="size-[26px] object-contain shrink-0" src={imgImage} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        IIT Delhi
      </span>
    </div>
  );
}

function LoopdeskLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="Loopdesk" className="h-[26px] w-[19px] object-contain shrink-0" src={imgImage1} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        Loopdesk
      </span>
    </div>
  );
}

function RazorpayLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[28px] w-[134px] flex items-center shrink-0">
      <svg className="h-[26px] w-auto" fill="none" viewBox="0 0 141.753 29.9402">
        <g id="Razorpay">
          <path clipRule="evenodd" d={svgPaths.p19257a00} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p17108c80} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3af8cb70} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p21102100} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p255cb080} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3f184600} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p4f44580} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p151ba240} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p26863f80} fill="#3395FF" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p248771f1} fill={isLight ? "#072654" : "#e4e4e7"} fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function AidenLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="Aiden" className="size-[26px] object-contain shrink-0" src={imgImage2} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        Aiden
      </span>
    </div>
  );
}

function WarrantLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <svg className="size-[26px] shrink-0" fill="none" viewBox="0 0 26 26">
        <g clipPath="url(#warrant_clip)">
          <path d={svgPaths.p3f3b5a00} stroke={isLight ? "#18181b" : "#FAFAFA"} strokeWidth="0.3" />
          <path d={svgPaths.p633c00} stroke={isLight ? "#18181b" : "#FAFAFA"} strokeWidth="0.1" />
          <g>
            <path d={svgPaths.p2e7a0400} fill={isLight ? "#18181b" : "#FAFAFA"} />
            <path d={svgPaths.p1d8eca00} fill={isLight ? "#18181b" : "#FAFAFA"} />
            <path d={svgPaths.p33887f80} fill={isLight ? "#18181b" : "#FAFAFA"} />
            <path d={svgPaths.p15613600} fill={isLight ? "#18181b" : "#FAFAFA"} />
          </g>
          <path d="M4.46875 20.7188H21.5312" opacity="0.7" stroke={isLight ? "#18181b" : "#FAFAFA"} strokeWidth="0.15" />
        </g>
        <defs>
          <clipPath id="warrant_clip">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
      </svg>
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        Warrant
      </span>
    </div>
  );
}

function OmnidimensionLogo() {
  return (
    <div className="h-[26px] flex items-center shrink-0">
      <img
        alt="Omnidimension"
        className="h-[24px] w-auto max-w-[152px] object-contain"
        src={imgImageOmnidimension}
      />
    </div>
  );
}

function TruCommerceLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <svg className="size-[26px] shrink-0" fill="none" viewBox="0 0 26 26">
        <path d={svgPaths.p1e5eb100} stroke={isLight ? "#27272a" : "#71717a"} strokeWidth="1.6" />
        <path d={svgPaths.p1c021a80} fill="#1F40FF" />
      </svg>
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        TruCommerce
      </span>
    </div>
  );
}

function PraxelLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="Praxel" className="h-[26px] w-[21px] object-contain shrink-0" src={imgImage3} />
      <span className={`font-serif text-[18px] whitespace-nowrap ${isLight ? "text-[#18181b]" : "text-[#e4e4e7]"}`}>
        Praxel
      </span>
    </div>
  );
}

function UcSantaCruzLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[26px] flex items-center shrink-0">
      <div className="rotate-180 scale-x-[-1] flex items-center justify-center">
        <svg className="h-[22px] w-auto max-w-[146px]" fill="none" viewBox="0 0 126.536 29.98">
          <path d={svgPaths.p3b7e3900} fill={isLight ? "#003C6C" : "#e4e4e7"} />
        </svg>
      </div>
    </div>
  );
}

function IitRoorkeeLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="IIT Roorkee" className="size-[26px] object-contain shrink-0" src={imgImage4} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        IIT Roorkee
      </span>
    </div>
  );
}

function UncypherLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <svg className="h-[26px] w-[35px] shrink-0" fill="none" viewBox="0 0 35 26">
        <g clipPath="url(#uncypher_clip)">
          <path d={svgPaths.p238fc380} fill={isLight ? "#27272a" : "#ECE3D0"} />
          <path d={svgPaths.p2e7f5e80} fill={isLight ? "#27272a" : "#ECE3D0"} />
          <path d={svgPaths.p32415b00} fill={isLight ? "#27272a" : "#ECE3D0"} />
          <path d={svgPaths.p2dd7b880} fill="#E1B84E" />
        </g>
        <defs>
          <clipPath id="uncypher_clip">
            <rect fill="white" height="26" width="35" />
          </clipPath>
        </defs>
      </svg>
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        Uncypher
      </span>
    </div>
  );
}

function AgnoLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[28px] w-[88px] flex items-center shrink-0">
      <svg className="h-[26px] w-auto" fill="none" viewBox="0 0 86 36">
        <g id="Agno">
          <path d={svgPaths.p2a44f000} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p21881780} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path clipRule="evenodd" d={svgPaths.p20bdfa80} fill={isLight ? "#18181b" : "#e4e4e7"} fillRule="evenodd" />
          <path d={svgPaths.p109efa00} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path clipRule="evenodd" d={svgPaths.p2bab3680} fill={isLight ? "#18181b" : "#e4e4e7"} fillRule="evenodd" />
          <path d={svgPaths.p13428200} fill={isLight ? "#52525b" : "#CECECE"} />
        </g>
      </svg>
    </div>
  );
}

function BitsPilaniLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="BITS Pilani" className="size-[26px] object-contain shrink-0" src={imgImage5} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        BITS Pilani
      </span>
    </div>
  );
}

function ByteDanceLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[26px] w-[146px] flex items-center shrink-0">
      <svg className="h-[22px] w-auto" fill="none" viewBox="0 0 150 26">
        <path d={svgPaths.p43d7200} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.peb50880} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p23c64f00} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p19cc5f00} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p38718200} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p3b850500} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.pb563f00} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.paefac00} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p3bf0f780} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p2bb625e0} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p12193280} fill={isLight ? "#18181b" : "white"} />
        <path d={svgPaths.p1f9cdd80} fill={isLight ? "#18181b" : "white"} />
      </svg>
    </div>
  );
}

function MindloopLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="Mindloop" className="size-[26px] object-contain shrink-0" src={imgImage6} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        Mindloop
      </span>
    </div>
  );
}

function ClearVueLogo() {
  return (
    <div className="h-[26px] flex items-center shrink-0">
      <img alt="ClearVUE" className="h-[24px] w-auto max-w-[146px] object-contain" src={imgImageClearVue} />
    </div>
  );
}

function HandaUncleLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="HandaUncle" className="h-[26px] w-[29px] object-contain shrink-0" src={imgImage7} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        HandaUncle
      </span>
    </div>
  );
}

function SupatestLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center shrink-0">
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        Supatest
      </span>
    </div>
  );
}

function NexusLogo() {
  return (
    <div className="h-[26px] flex items-center shrink-0">
      <img
        alt="Nexus Venture Partners"
        className="h-[22px] w-auto max-w-[124px] object-contain"
        src={imgImageNexusVenturePartners}
      />
    </div>
  );
}

function HellloLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img alt="helllo" className="size-[26px] object-contain shrink-0" src={imgImage8} />
      <span className={`font-['Geist_Variable:Semi_Bold',sans-serif] text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap ${
        isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
      }`}>
        helllo
      </span>
    </div>
  );
}

function HectorAiLogo() {
  return (
    <div className="h-[28px] w-[130px] flex items-center shrink-0">
      <svg className="h-[26px] w-auto" fill="none" viewBox="0 0 125 31">
        <path d={svgPaths.p3ca40000} fill="url(#hector_paint0)" />
        <path d={svgPaths.p1b59c400} fill="url(#hector_paint1)" />
        <path d={svgPaths.p3644f240} fill="url(#hector_paint2)" />
        <path d={svgPaths.p36e15280} fill="url(#hector_paint3)" />
        <path d={svgPaths.p2e704700} fill="white" />
        <path d={svgPaths.p3efc9280} fill="white" />
        <path d={svgPaths.p1a5aa200} fill="white" />
        <path d={svgPaths.p2bd9b880} fill="white" />
        <path d={svgPaths.p545fd80} fill="white" />
        <path d={svgPaths.p1be67c80} fill="white" />
        <defs>
          <linearGradient id="hector_paint0" x1="4.71" x2="19.53" y1="4.63" y2="30.09" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0078" />
            <stop offset="0.35" stopColor="#6200EB" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient id="hector_paint1" x1="9.49" x2="25.45" y1="0.66" y2="28.09" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0078" />
            <stop offset="0.35" stopColor="#6200EB" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient id="hector_paint2" x1="4.35" x2="22.16" y1="3.46" y2="34.06" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0078" />
            <stop offset="0.35" stopColor="#6200EB" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient id="hector_paint3" x1="18.45" x2="34.42" y1="-4.55" y2="22.87" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0078" />
            <stop offset="0.35" stopColor="#6200EB" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function UnpavedLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="flex items-center shrink-0">
      <span className={`font-serif text-[18px] whitespace-nowrap ${isLight ? "text-[#18181b]" : "text-[#e4e4e7]"}`}>
        Unpaved
      </span>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// 2. PRESS / FEATURED IN LOGOS (Actual Maximem Press Outlets)
// ══════════════════════════════════════════════════════════════════════

function FinancialExpressLogo() {
  return (
    <div className="h-[28px] w-[212px] flex items-center shrink-0">
      <svg className="h-[24px] w-auto max-w-[212px]" fill="none" viewBox="0 0 220.001 25.6559">
        <g id="FinancialExpress">
          <path d={svgPaths.p2862c800} fill="#005E8E" />
          <path d={svgPaths.p11662500} fill="#C20410" />
          <g>
            <path d={svgPaths.p24ad7600} fill="#FF1204" />
            <path d={svgPaths.p215bbf00} fill="#FF1204" />
            <path d={svgPaths.p1f455700} fill="#FF1204" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TimesOfIndiaLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[24px] w-[200px] flex items-center shrink-0">
      <svg className="h-[17px] w-auto max-w-[200px]" fill="none" viewBox="0 0 218.695 15.059">
        <g id="TimesOfIndia">
          <path d={svgPaths.p40d1e80} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p1278fa70} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.pb360100} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.pf27a100} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p26e26380} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p1f9b49c0} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p2ad48900} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p844f680} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p382b3f00} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p25f7b280} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p107b3900} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p3e53e800} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p2c473890} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p222b5500} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p3fb31b00} fill={isLight ? "#18181b" : "#e4e4e7"} />
        </g>
      </svg>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// 3. SUPPORTED BY LOGOS (Actual 5 Maximem Partners)
// ══════════════════════════════════════════════════════════════════════

function NvidiaInceptionLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[36px] w-[124px] flex items-center justify-center shrink-0">
      <svg className="h-[31px] w-auto" fill="none" viewBox="0 0 99.8574 36.7028">
        <path d={svgPaths.p14aac040} fill={isLight ? "#18181b" : "#e4e4e7"} />
      </svg>
    </div>
  );
}

function GoogleForStartupsLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[26px] flex items-center gap-2 shrink-0">
      <div className="rotate-180 scale-x-[-1] flex items-center shrink-0">
        <svg className="h-[19px] w-[59px] shrink-0" fill="none" viewBox="0 0 52.8964 17.293">
          <g id="google_letters">
            <path d={svgPaths.p36970c00} fill="#4285F4" />
            <path d={svgPaths.p2f0fba80} fill="#EA4335" />
            <path d={svgPaths.p1aab9200} fill="#FBBC05" />
            <path d={svgPaths.p21099100} fill="#4285F4" />
            <path d={svgPaths.p3a33ff00} fill="#34A853" />
            <path d={svgPaths.p1d96eb00} fill="#EA4335" />
          </g>
        </svg>
      </div>

      <svg className="h-[16.5px] w-[97px] shrink-0" fill="none" viewBox="0 0 83.9075 15.6739">
        <g opacity="0.9">
          <path d={svgPaths.p2ec85500} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p2abe3880} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p152757b0} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p2d132500} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p1926bff2} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p2f027e00} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p1543a080} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p76ac800} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.p1feadc00} fill={isLight ? "#18181b" : "#e4e4e7"} />
          <path d={svgPaths.pc6fe300} fill={isLight ? "#18181b" : "#e4e4e7"} />
        </g>
      </svg>
    </div>
  );
}

function Neo4jLogo() {
  return (
    <div className="h-[28px] flex items-center shrink-0">
      <svg className="h-[24px] w-auto" viewBox="0 0 94 28" fill="none">
        <circle cx="5.5" cy="14" r="3.2" fill="#018BFF" />
        <circle cx="14" cy="6.5" r="3.6" fill="#018BFF" />
        <circle cx="14" cy="21.5" r="3.6" fill="#018BFF" />
        <path d="M5.5 14L14 6.5M5.5 14L14 21.5" stroke="#018BFF" strokeWidth="2.2" strokeLinecap="round" />
        <text
          x="23"
          y="20"
          fill="#018BFF"
          fontFamily="var(--font-sans), 'Geist', sans-serif"
          fontWeight="700"
          fontSize="18.5"
          letterSpacing="-0.5px"
        >
          neo4j
        </text>
      </svg>
    </div>
  );
}

function CloudflareLogo({ isLight }: { isLight?: boolean }) {
  return (
    <div className="h-[31px] w-[99px] flex items-center shrink-0">
      <svg className="h-[28px] w-auto" fill="none" viewBox="0 0 88.8125 32.9922">
        <g id="Cloudflare">
          <path d={svgPaths.p260e4a80} fill={isLight ? "#18181b" : "white"} />
          <path d={svgPaths.p1577e280} fill="#F48120" />
          <path d={svgPaths.p2d06ec00} fill="#FAAD3F" />
          <path d={svgPaths.p3670bc00} fill="#404041" />
        </g>
      </svg>
    </div>
  );
}

function PoweredByAwsLogo() {
  return (
    <div className="h-[28px] flex items-center shrink-0">
      <img alt="Powered by AWS" className="h-[26px] w-auto max-w-[92px] object-contain" src={imgImagePoweredByAws} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// MAIN CREDIBILITY SECTION COMPONENT
// ══════════════════════════════════════════════════════════════════════

export default function CredibilitySection({ isLight = true }: CredibilitySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Viewport entrance observer (Scroll reveal)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  const allBuilderLogos = [
    { id: "nvidia", comp: <NvidiaLogo isLight={isLight} /> },
    { id: "iit-delhi", comp: <IitDelhiLogo isLight={isLight} /> },
    { id: "loopdesk", comp: <LoopdeskLogo isLight={isLight} /> },
    { id: "razorpay", comp: <RazorpayLogo isLight={isLight} /> },
    { id: "aiden", comp: <AidenLogo isLight={isLight} /> },
    { id: "warrant", comp: <WarrantLogo isLight={isLight} /> },
    { id: "omnidimension", comp: <OmnidimensionLogo /> },
    { id: "trucommerce", comp: <TruCommerceLogo isLight={isLight} /> },
    { id: "praxel", comp: <PraxelLogo isLight={isLight} /> },
    { id: "uc-santa-cruz", comp: <UcSantaCruzLogo isLight={isLight} /> },
    { id: "iit-roorkee", comp: <IitRoorkeeLogo isLight={isLight} /> },
    { id: "uncypher", comp: <UncypherLogo isLight={isLight} /> },
    { id: "agno", comp: <AgnoLogo isLight={isLight} /> },
    { id: "bits-pilani", comp: <BitsPilaniLogo isLight={isLight} /> },
    { id: "bytedance", comp: <ByteDanceLogo isLight={isLight} /> },
    { id: "mindloop", comp: <MindloopLogo isLight={isLight} /> },
    { id: "clearvue", comp: <ClearVueLogo /> },
    { id: "handa-uncle", comp: <HandaUncleLogo isLight={isLight} /> },
    { id: "supatest", comp: <SupatestLogo isLight={isLight} /> },
    { id: "nexus", comp: <NexusLogo /> },
    { id: "helllo", comp: <HellloLogo isLight={isLight} /> },
    { id: "hector-ai", comp: <HectorAiLogo /> },
    { id: "unpaved", comp: <UnpavedLogo isLight={isLight} /> },
  ];

  return (
    <section
      ref={containerRef}
      data-name="CredibilitySection"
      aria-label="Credibility and Trust"
      className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 lg:py-8 select-none"
    >
      <div
        className={`relative w-full rounded-[6px] overflow-hidden transition-all duration-700 ease-out border ${
          isLight
            ? "bg-white border-[#e4e4e7] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            : "bg-[#111110] border-white/[0.09]"
        } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div
          className={`absolute inset-0 pointer-events-none ${isLight ? "opacity-25" : "opacity-40"}`}
          style={{
            backgroundImage: isLight
              ? "radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)"
              : "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* TOP ROW: TRUSTED BY BUILDERS AT */}
        <div className="relative z-10 px-5 sm:px-8 lg:px-10 pt-5 sm:pt-6 pb-4 sm:pb-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
            <span
              className={`font-['Geist_Mono_Variable:Regular',sans-serif] font-medium text-[12px] tracking-[1.4px] uppercase ${
                isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
              }`}
            >
              TRUSTED BY BUILDERS AT
            </span>
          </div>

          <div className="relative mt-4 sm:mt-5 overflow-hidden">
            {/* Left Edge Gradient Fade Mask */}
            <div
              className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r z-10 ${
                isLight ? "from-white to-transparent" : "from-[#111110] to-transparent"
              }`}
            />

            {/* Right Edge Gradient Fade Mask */}
            <div
              className={`pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l z-10 ${
                isLight ? "from-white to-transparent" : "from-[#111110] to-transparent"
              }`}
            />

            {/* Continuous Seamless Infinite Marquee Track */}
            <div
              data-name="builder-marquee"
              className="animate-builder-marquee flex items-center py-2 select-none"
            >
              {/* Set 1 */}
              <div className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 pr-10 sm:pr-14 lg:pr-16">
                {allBuilderLogos.map((item) => (
                  <div
                    key={`set1-${item.id}`}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-default shrink-0 flex items-center"
                  >
                    {item.comp}
                  </div>
                ))}
                <div className="shrink-0 flex items-center">
                  <span
                    className={`font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] transition-colors cursor-default tracking-wider whitespace-nowrap ${
                      isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#71717a] hover:text-[#e4e4e7]"
                    }`}
                  >
                    + more
                  </span>
                </div>
              </div>

              {/* Set 2 (Exact duplicate for 100% seamless mathematical loop) */}
              <div
                className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 pr-10 sm:pr-14 lg:pr-16"
                aria-hidden="true"
              >
                {allBuilderLogos.map((item) => (
                  <div
                    key={`set2-${item.id}`}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-default shrink-0 flex items-center"
                  >
                    {item.comp}
                  </div>
                ))}
                <div className="shrink-0 flex items-center">
                  <span
                    className={`font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] transition-colors cursor-default tracking-wider whitespace-nowrap ${
                      isLight ? "text-[#71717a] hover:text-[#09090b]" : "text-[#71717a] hover:text-[#e4e4e7]"
                    }`}
                  >
                    + more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: AS FEATURED IN & SUPPORTED BY */}
        <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-[38%_62%] xl:grid-cols-[35%_65%] items-stretch lg:divide-x pt-2 ${
          isLight ? "divide-[#e4e4e7]" : "divide-white/[0.08]"
        }`}>
          {/* LEFT: AS FEATURED IN */}
          <div className="px-5 sm:px-8 lg:px-10 py-5 sm:py-6 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
              <span className={`font-['Geist_Mono_Variable:Regular',sans-serif] font-medium text-[12px] tracking-[1.4px] uppercase ${
                isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
              }`}>
                AS FEATURED IN
              </span>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-5 sm:gap-6 pt-1">
              <a
                href="https://www.financialexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Coverage in The Financial Express"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <FinancialExpressLogo />
              </a>

              <a
                href="https://timesofindia.indiatimes.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Coverage in The Times of India"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <TimesOfIndiaLogo isLight={isLight} />
              </a>
            </div>

            <div className="pt-1">
              <a
                href="/press"
                className={`font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] transition-colors duration-200 inline-flex items-center gap-1.5 group tracking-tight ${
                  isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <span>See all press coverage</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 text-[#f26522]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: SUPPORTED BY */}
          <div className="px-5 sm:px-8 lg:px-10 py-5 sm:py-6 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
              <span className={`font-['Geist_Mono_Variable:Regular',sans-serif] font-medium text-[12px] tracking-[1.4px] uppercase ${
                isLight ? "text-[#18181b]" : "text-[#e4e4e7]"
              }`}>
                SUPPORTED BY
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8 lg:gap-9 xl:gap-10 pt-1">
              <div
                title="NVIDIA Inception Program"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <NvidiaInceptionLogo isLight={isLight} />
              </div>

              <div
                title="Google for Startups"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <GoogleForStartupsLogo isLight={isLight} />
              </div>

              <div
                title="Neo4j"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <Neo4jLogo />
              </div>

              <div
                title="Cloudflare"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <CloudflareLogo isLight={isLight} />
              </div>

              <div
                title="Powered by AWS"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <PoweredByAwsLogo />
              </div>
            </div>

            <p className="font-['Geist_Mono_Variable:Regular',sans-serif] text-[10px] text-[#71717a] tracking-tight pt-1">
              AWS is a trademark of Amazon.com, Inc. or its affiliates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
