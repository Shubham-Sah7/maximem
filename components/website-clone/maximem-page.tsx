"use client";

import React, { useState, useEffect } from "react";
import svgPaths from "./svg-paths";
import HeroSection from "./hero-section";
import BenchmarkComparison from "./benchmark-comparison";
import FooterSection from "./footer-section";
import CredibilitySection from "./credibility-section";
import WhatIsMaximem from "./what-is-maximem";
import HowSynapWorks from "./how-synap-works";
import BlogSection from "./blog-section";
import ProblemSection from "./problem-section";
const imgCanvas = "/website-clone/41f31794f4832a59ff417534d341e2838abf31e3.png";
const imgImage = "/website-clone/a4f1d3c1f4f339c51188430eb8c65ec167cc6328.png";
const imgImage1 = "/website-clone/bde9e2000ea3d2e071140afe25ecd0a77821cf12.png";
const imgImage2 = "/website-clone/57658469841f9d4846bb556243c1ddc3bd3cc86b.png";
const imgImageOmnidimension = "/website-clone/f2a46a515c2dab8f9b4c7ae24afb71cca9294bc4.png";
const imgImage3 = "/website-clone/3966c318087c34a87eab639481bcab8d2619c9a2.png";
const imgImage4 = "/website-clone/fd9e1e5c04b3fa7ffcf2e0956c3d9d406b68457b.png";
const imgImage5 = "/website-clone/5accd1373992738d0ddea3a5f06b409abe9879dc.png";
const imgImage6 = "/website-clone/33a14a1ee5ee5d513eea0b796e0410cbfb4d8478.png";
const imgImageClearVue = "/website-clone/40fa724e97ae2d6317abc3a458115e27355b8383.png";
const imgImage7 = "/website-clone/ac91258f549b9924be02e9f8382d107c5ba8c279.png";
const imgImageNexusVenturePartners = "/website-clone/ea8e428bcf8309be5780d7de5255c64c76d1dcd3.png";
const imgImage8 = "/website-clone/0f3b3f8acae7bd1f4962f38f04a4e721bfa1df43.png";
const imgImageNeo4J = "/website-clone/911b19730f3b929e0024b0dfa7c933bf0ec8447b.png";
const imgImagePoweredByAws = "/website-clone/84e327ff56180cce3616c360143e2d92910f6296.png";
const imgImageClaudeSkillsForAiEngineers2026MidYearEdition11SkillsThatFillLastYearsGaps = "/website-clone/6bf0a82de0f435acdf2709da1b099cd4c24bf460.png";
const imgImageMcp2026072820BreakingChangesAndTheErrorsTheyCause = "/website-clone/d8ed252916b8f0dab62ac88c5a241e8a1f7ba05c.png";
const imgImageAgenticContextManagementAgentMemoryIsNotMerelyAStorageRetrievalProblemItIsAnArchitectureProblem = "/website-clone/d58a9ec38402123c051d047262f1de8219af0c4b.png";
const imgCanvas1 = "/website-clone/7ab3ad669caeee84fc649e8d76ad90fb9d08a056.png";
const imgContainer = "/website-clone/e49092636a580de3385d2e46a97ffb69f1ab726d.png";

function Header() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Header" />;
}

function Section({ isLight }: { isLight?: boolean }) {
  return <HeroSection isLight={isLight} />;
}

function Container8() {
  return <div className="h-px relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(89.99999999999349deg, rgba(66, 63, 57, 0) 0%, rgb(66, 63, 57) 15%, rgb(66, 63, 57) 85%, rgba(66, 63, 57, 0) 100%)" }} data-name="Container" />;
}

function Group9() {
  return (
    <div className="absolute inset-[0.16%_1.73%_0_0.8%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.9577" preserveAspectRatio="none" viewBox="0 0 146.205 26.9577" width="146.205">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p5933000} fill="#e4e4e7" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p126d6900} fill="#e4e4e7" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pb0ef200} fill="#76B900" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ImageNvidia() {
  return (
    <div className="h-[27px] max-h-[30px] max-w-[150px] opacity-55 overflow-clip relative shrink-0 w-[150px]" data-name="Image (NVIDIA)">
      <Group9 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageNvidia />
    </div>
  );
}

function Image() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">IIT Delhi</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[192.7px]" data-name="Text">
      <Image />
      <Text7 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[26px] opacity-55 relative shrink-0 w-[19px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Loopdesk</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[200.7px]" data-name="Text">
      <Image1 />
      <Text9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[0.12%_0.08%_0.08%_0.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.9402" preserveAspectRatio="none" viewBox="0 0 141.753 29.9402" width="141.753">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p19257a00} fill="#072654" fillRule="evenodd" id="Fill-1" />
          <path clipRule="evenodd" d={svgPaths.p17108c80} fill="#072654" fillRule="evenodd" id="Fill-3" />
          <path clipRule="evenodd" d={svgPaths.p3af8cb70} fill="#072654" fillRule="evenodd" id="Fill-5" />
          <path clipRule="evenodd" d={svgPaths.p21102100} fill="#072654" fillRule="evenodd" id="Fill-7" />
          <path clipRule="evenodd" d={svgPaths.p255cb080} fill="#072654" fillRule="evenodd" id="Fill-9" />
          <path clipRule="evenodd" d={svgPaths.p3f184600} fill="#072654" fillRule="evenodd" id="Fill-11" />
          <path clipRule="evenodd" d={svgPaths.p4f44580} fill="#072654" fillRule="evenodd" id="Fill-13" />
          <path clipRule="evenodd" d={svgPaths.p151ba240} fill="#072654" fillRule="evenodd" id="Fill-15" />
          <path clipRule="evenodd" d={svgPaths.p26863f80} fill="#3395FF" fillRule="evenodd" id="Fill-17" />
          <path clipRule="evenodd" d={svgPaths.p248771f1} fill="#072654" fillRule="evenodd" id="Fill-19" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0.12%_0.08%_0.08%_0.1%]" data-name="Page-1">
      <Group10 />
    </div>
  );
}

function ImageRazorpay() {
  return (
    <div className="h-[30px] max-h-[30px] max-w-[150px] opacity-55 overflow-clip relative shrink-0 w-[142px]" data-name="Image (Razorpay)">
      <Page />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageRazorpay />
    </div>
  );
}

function Image2() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Aiden</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[171.7px]" data-name="Text">
      <Image2 />
      <Text11 />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
        <g clipPath="url(#clip0_0_32)" id="Image" opacity="0.55">
          <path d={svgPaths.p3f3b5a00} id="Vector" stroke="#FAFAFA" strokeWidth="0.304688" />
          <path d={svgPaths.p633c00} id="Vector_2" stroke="#FAFAFA" strokeWidth="0.101562" />
          <g id="Group">
            <path d={svgPaths.p2e7a0400} fill="#FAFAFA" id="Vector_3" />
            <path d={svgPaths.p1d8eca00} fill="#FAFAFA" id="Vector_4" />
            <path d={svgPaths.p33887f80} fill="#FAFAFA" id="Vector_5" />
            <path d={svgPaths.p15613600} fill="#FAFAFA" id="Vector_6" />
          </g>
          <path d="M4.46875 20.7188H21.5312" id="Vector_7" opacity="0.7" stroke="#FAFAFA" strokeWidth="0.142187" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Warrant</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[191.7px]" data-name="Text">
      <Image3 />
      <Text13 />
    </div>
  );
}

function ImageOmnidimension() {
  return (
    <div className="h-[27px] max-h-[27px] max-w-[150px] opacity-55 relative shrink-0 w-[138px]" data-name="Image (Omnidimension)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageOmnidimension} />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageOmnidimension />
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
        <g id="Image" opacity="0.55">
          <path d={svgPaths.p1e5eb100} id="Vector" stroke="#0B0F14" strokeWidth="1.625" />
          <path d={svgPaths.p1c021a80} fill="#1F40FF" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">TruCommerce</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[247.7px]" data-name="Text">
      <Image4 />
      <Text15 />
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[26px] opacity-55 relative shrink-0 w-[22px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white whitespace-nowrap">Praxel</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[168.7px]" data-name="Text">
      <Image5 />
      <Text17 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute flex inset-[1.84%_1.38%_1.45%_1.28%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="relative size-full" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="29.98" preserveAspectRatio="none" viewBox="0 0 126.536 29.98" width="126.536">
            <g id="Group">
              <path d={svgPaths.p3b7e3900} fill="#003C6C" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageUcSantaCruz() {
  return (
    <div className="h-[31px] max-h-[31.5px] max-w-[150px] opacity-55 overflow-clip relative shrink-0 w-[130px]" data-name="Image (UC Santa Cruz)">
      <Group11 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageUcSantaCruz />
    </div>
  );
}

function Image6() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">IIT Roorkee</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[221.7px]" data-name="Text">
      <Image6 />
      <Text19 />
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[26px] relative shrink-0 w-[35px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 35 26" width="35">
        <g clipPath="url(#clip0_0_146)" id="Image" opacity="0.55">
          <path d={svgPaths.p238fc380} fill="#ECE3D0" id="Vector" />
          <path d={svgPaths.p2e7f5e80} fill="#ECE3D0" id="Vector_2" />
          <path d={svgPaths.p32415b00} fill="#ECE3D0" id="Vector_3" />
          <path d={svgPaths.p2dd7b880} fill="#E1B84E" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_0_146">
            <rect fill="white" height="26" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Uncypher</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[216.7px]" data-name="Text">
      <Image7 />
      <Text21 />
    </div>
  );
}

function ImageAgno() {
  return (
    <div className="h-[36px] max-h-[36px] max-w-[150px] relative shrink-0 w-[86px]" data-name="Image (Agno)">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 86 36" width="86">
        <g id="Image (Agno)" opacity="0.75">
          <path d={svgPaths.p2a44f000} fill="#e4e4e7" id="Vector" />
          <path d={svgPaths.p21881780} fill="#e4e4e7" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p20bdfa80} fill="#e4e4e7" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p109efa00} fill="#e4e4e7" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p2bab3680} fill="#e4e4e7" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p605c800} fill="#CECECE" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageAgno />
    </div>
  );
}

function Image8() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">BITS Pilani</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[215.7px]" data-name="Text">
      <Image8 />
      <Text23 />
    </div>
  );
}

function ImageByteDance() {
  return (
    <div className="h-[26px] max-h-[30px] max-w-[150px] relative shrink-0 w-[150px]" data-name="Image (ByteDance)">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 150 26" width="150">
        <g id="Image (ByteDance)" opacity="0.55">
          <path d={svgPaths.p32244e80} fill="white" id="Vector" />
          <path d={svgPaths.peb50880} fill="white" id="Vector_2" />
          <path d={svgPaths.p23c64f00} fill="white" id="Vector_3" />
          <path d={svgPaths.p19cc5f00} fill="white" id="Vector_4" />
          <path d={svgPaths.p38718200} fill="white" id="Vector_5" />
          <path d={svgPaths.p3b850500} fill="white" id="Vector_6" />
          <path d={svgPaths.pb563f00} fill="white" id="Vector_7" />
          <path d={svgPaths.p144cb100} fill="white" id="Vector_8" />
          <path d={svgPaths.p3bf0f780} fill="white" id="Vector_9" />
          <path d={svgPaths.p1396a00} fill="white" id="Vector_10" />
          <path d={svgPaths.p12193280} fill="white" id="Vector_11" />
          <path d={svgPaths.p1f9cdd80} fill="white" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageByteDance />
    </div>
  );
}

function Image9() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Mindloop</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[203.7px]" data-name="Text">
      <Image9 />
      <Text25 />
    </div>
  );
}

function ImageClearVue() {
  return (
    <div className="h-[28.5px] max-h-[28.5px] max-w-[150px] opacity-55 relative shrink-0 w-[143px]" data-name="Image (ClearVUE)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageClearVue} />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageClearVue />
    </div>
  );
}

function Image10() {
  return (
    <div className="h-[26px] opacity-55 relative shrink-0 w-[30px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">HandaUncle</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[233.7px]" data-name="Text">
      <Image10 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Supatest</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <Text28 />
    </div>
  );
}

function ImageNexusVenturePartners() {
  return (
    <div className="h-[25px] max-h-[25.5px] max-w-[150px] opacity-55 relative shrink-0 w-[121px]" data-name="Image (Nexus Venture Partners)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNexusVenturePartners} />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageNexusVenturePartners />
    </div>
  );
}

function Image11() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage8} />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">helllo</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[167.7px]" data-name="Text">
      <Image11 />
      <Text30 />
    </div>
  );
}

function ImageHectorAi() {
  return (
    <div className="h-[31px] max-h-[31.5px] max-w-[150px] relative shrink-0 w-[125px]" data-name="Image (Hector AI)">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 125 31" width="125">
        <g id="Image (Hector AI)" opacity="0.55">
          <path d={svgPaths.p10099e80} fill="url(#paint0_linear_0_179)" id="Vector" />
          <path d={svgPaths.p1b59c400} fill="url(#paint1_linear_0_179)" id="Vector_2" />
          <path d={svgPaths.p3644f240} fill="url(#paint2_linear_0_179)" id="Vector_3" />
          <path d={svgPaths.p1e994e80} fill="url(#paint3_linear_0_179)" id="Vector_4" />
          <path d={svgPaths.p200d4680} fill="white" id="Vector_5" />
          <path d={svgPaths.p175b3870} fill="white" id="Vector_6" />
          <path d={svgPaths.p1ecb0f40} fill="white" id="Vector_7" />
          <path d={svgPaths.p2bd9b880} fill="white" id="Vector_8" />
          <path d={svgPaths.p2315f00} fill="white" id="Vector_9" />
          <path d={svgPaths.pf073b00} fill="white" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_179" x1="4.71218" x2="19.5338" y1="4.62582" y2="30.0912">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_179" x1="9.48741" x2="25.4503" y1="0.664228" y2="28.0902">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_179" x1="4.35072" x2="22.164" y1="3.45621" y2="34.0616">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_179" x1="18.4544" x2="34.4172" y1="-4.55463" y2="22.8714">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageHectorAi />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white whitespace-nowrap">Unpaved</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <Text31 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="List">
      <ListItem />
      <Text6 />
      <Text8 />
      <ListItem1 />
      <Text10 />
      <Text12 />
      <ListItem2 />
      <Text14 />
      <Text16 />
      <ListItem3 />
      <Text18 />
      <Text20 />
      <ListItem4 />
      <Text22 />
      <ListItem5 />
      <Text24 />
      <ListItem6 />
      <Text26 />
      <ListItem7 />
      <ListItem8 />
      <Text29 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[0.16%_1.73%_0_0.8%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.9577" preserveAspectRatio="none" viewBox="0 0 146.205 26.9577" width="146.205">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p5933000} fill="black" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p126d6900} fill="black" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pb0ef200} fill="#76B900" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ImageNvidia1() {
  return (
    <div className="h-[27px] max-h-[30px] max-w-[150px] opacity-55 overflow-clip relative shrink-0 w-[150px]" data-name="Image (NVIDIA)">
      <Group12 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageNvidia1 />
    </div>
  );
}

function Image12() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">IIT Delhi</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[192.7px]" data-name="Text">
      <Image12 />
      <Text33 />
    </div>
  );
}

function Image13() {
  return (
    <div className="h-[26px] opacity-55 relative shrink-0 w-[19px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Loopdesk</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[200.7px]" data-name="Text">
      <Image13 />
      <Text35 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[0.12%_0.08%_0.08%_0.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.9402" preserveAspectRatio="none" viewBox="0 0 141.753 29.9402" width="141.753">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p19257a00} fill="#072654" fillRule="evenodd" id="Fill-1" />
          <path clipRule="evenodd" d={svgPaths.p2aa6e800} fill="#072654" fillRule="evenodd" id="Fill-3" />
          <path clipRule="evenodd" d={svgPaths.p3af8cb70} fill="#072654" fillRule="evenodd" id="Fill-5" />
          <path clipRule="evenodd" d={svgPaths.p21102100} fill="#072654" fillRule="evenodd" id="Fill-7" />
          <path clipRule="evenodd" d={svgPaths.p255cb080} fill="#072654" fillRule="evenodd" id="Fill-9" />
          <path clipRule="evenodd" d={svgPaths.p3f184600} fill="#072654" fillRule="evenodd" id="Fill-11" />
          <path clipRule="evenodd" d={svgPaths.p4f44580} fill="#072654" fillRule="evenodd" id="Fill-13" />
          <path clipRule="evenodd" d={svgPaths.p151ba240} fill="#072654" fillRule="evenodd" id="Fill-15" />
          <path clipRule="evenodd" d={svgPaths.p26863f80} fill="#3395FF" fillRule="evenodd" id="Fill-17" />
          <path clipRule="evenodd" d={svgPaths.p248771f1} fill="#072654" fillRule="evenodd" id="Fill-19" />
        </g>
      </svg>
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute contents inset-[0.12%_0.08%_0.08%_0.1%]" data-name="Page-1">
      <Group13 />
    </div>
  );
}

function ImageRazorpay1() {
  return (
    <div className="h-[30px] max-h-[30px] max-w-[150px] opacity-55 overflow-clip relative shrink-0 w-[142px]" data-name="Image (Razorpay)">
      <Page1 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageRazorpay1 />
    </div>
  );
}

function Image14() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Aiden</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[171.7px]" data-name="Text">
      <Image14 />
      <Text37 />
    </div>
  );
}

function Image15() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
        <g clipPath="url(#clip0_0_32)" id="Image" opacity="0.55">
          <path d={svgPaths.p3f3b5a00} id="Vector" stroke="#FAFAFA" strokeWidth="0.304688" />
          <path d={svgPaths.p633c00} id="Vector_2" stroke="#FAFAFA" strokeWidth="0.101562" />
          <g id="Group">
            <path d={svgPaths.p2e7a0400} fill="#FAFAFA" id="Vector_3" />
            <path d={svgPaths.p1d8eca00} fill="#FAFAFA" id="Vector_4" />
            <path d={svgPaths.p33887f80} fill="#FAFAFA" id="Vector_5" />
            <path d={svgPaths.p15613600} fill="#FAFAFA" id="Vector_6" />
          </g>
          <path d="M4.46875 20.7188H21.5312" id="Vector_7" opacity="0.7" stroke="#FAFAFA" strokeWidth="0.142187" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Warrant</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[191.7px]" data-name="Text">
      <Image15 />
      <Text39 />
    </div>
  );
}

function ImageOmnidimension1() {
  return (
    <div className="h-[27px] max-h-[27px] max-w-[150px] opacity-55 relative shrink-0 w-[138px]" data-name="Image (Omnidimension)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageOmnidimension} />
    </div>
  );
}

function ListItem13() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageOmnidimension1 />
    </div>
  );
}

function Image16() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
        <g id="Image" opacity="0.55">
          <path d={svgPaths.p1e5eb100} id="Vector" stroke="#0B0F14" strokeWidth="1.625" />
          <path d={svgPaths.p1c021a80} fill="#1F40FF" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">TruCommerce</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[247.7px]" data-name="Text">
      <Image16 />
      <Text41 />
    </div>
  );
}

function Image17() {
  return (
    <div className="h-[26px] opacity-55 relative shrink-0 w-[22px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white whitespace-nowrap">Praxel</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[168.7px]" data-name="Text">
      <Image17 />
      <Text43 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute flex inset-[1.84%_1.38%_1.45%_1.28%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="relative size-full" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="29.98" preserveAspectRatio="none" viewBox="0 0 126.536 29.98" width="126.536">
            <g id="Group">
              <path d={svgPaths.p3b7e3900} fill="#003C6C" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageUcSantaCruz1() {
  return (
    <div className="h-[31px] max-h-[31.5px] max-w-[150px] opacity-55 overflow-clip relative shrink-0 w-[130px]" data-name="Image (UC Santa Cruz)">
      <Group14 />
    </div>
  );
}

function ListItem14() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageUcSantaCruz1 />
    </div>
  );
}

function Image18() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">IIT Roorkee</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[221.7px]" data-name="Text">
      <Image18 />
      <Text45 />
    </div>
  );
}

function Image19() {
  return (
    <div className="h-[26px] relative shrink-0 w-[35px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 35 26" width="35">
        <g clipPath="url(#clip0_0_146)" id="Image" opacity="0.55">
          <path d={svgPaths.p238fc380} fill="#ECE3D0" id="Vector" />
          <path d={svgPaths.p2e7f5e80} fill="#ECE3D0" id="Vector_2" />
          <path d={svgPaths.p32415b00} fill="#ECE3D0" id="Vector_3" />
          <path d={svgPaths.p2dd7b880} fill="#E1B84E" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_0_146">
            <rect fill="white" height="26" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Uncypher</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[216.7px]" data-name="Text">
      <Image19 />
      <Text47 />
    </div>
  );
}

function ImageAgno1() {
  return (
    <div className="h-[36px] max-h-[36px] max-w-[150px] relative shrink-0 w-[86px]" data-name="Image (Agno)">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 86 36" width="86">
        <g id="Image (Agno)" opacity="0.55">
          <path d={svgPaths.p2a44f000} fill="black" id="Vector" />
          <path d={svgPaths.p21881780} fill="black" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p20bdfa80} fill="black" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p109efa00} fill="black" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p2bab3680} fill="black" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p13428200} fill="#CECECE" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageAgno1 />
    </div>
  );
}

function Image20() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">BITS Pilani</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[215.7px]" data-name="Text">
      <Image20 />
      <Text49 />
    </div>
  );
}

function ImageByteDance1() {
  return (
    <div className="h-[26px] max-h-[30px] max-w-[150px] relative shrink-0 w-[150px]" data-name="Image (ByteDance)">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 150 26" width="150">
        <g clipPath="url(#clip0_0_249)" id="Image (ByteDance)" opacity="0.55">
          <path d={svgPaths.p43d7200} fill="white" id="Vector" />
          <path d={svgPaths.peb50880} fill="white" id="Vector_2" />
          <path d={svgPaths.p23c64f00} fill="white" id="Vector_3" />
          <path d={svgPaths.p19cc5f00} fill="white" id="Vector_4" />
          <path d={svgPaths.p38718200} fill="white" id="Vector_5" />
          <path d={svgPaths.p3b850500} fill="white" id="Vector_6" />
          <path d={svgPaths.pb563f00} fill="white" id="Vector_7" />
          <path d={svgPaths.paefac00} fill="white" id="Vector_8" />
          <path d={svgPaths.p3bf0f780} fill="white" id="Vector_9" />
          <path d={svgPaths.p2bb625e0} fill="white" id="Vector_10" />
          <path d={svgPaths.p12193280} fill="white" id="Vector_11" />
          <path d={svgPaths.p1f9cdd80} fill="white" id="Vector_12" />
        </g>
        <defs>
          <clipPath id="clip0_0_249">
            <rect fill="white" height="26" width="150" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageByteDance1 />
    </div>
  );
}

function Image21() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Mindloop</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[203.7px]" data-name="Text">
      <Image21 />
      <Text51 />
    </div>
  );
}

function ImageClearVue1() {
  return (
    <div className="h-[28.5px] max-h-[28.5px] max-w-[150px] opacity-55 relative shrink-0 w-[143px]" data-name="Image (ClearVUE)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageClearVue} />
    </div>
  );
}

function ListItem17() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageClearVue1 />
    </div>
  );
}

function Image22() {
  return (
    <div className="h-[26px] opacity-55 relative shrink-0 w-[30px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">HandaUncle</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[233.7px]" data-name="Text">
      <Image22 />
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">Supatest</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <Text54 />
    </div>
  );
}

function ImageNexusVenturePartners1() {
  return (
    <div className="h-[25px] max-h-[25.5px] max-w-[150px] opacity-55 relative shrink-0 w-[121px]" data-name="Image (Nexus Venture Partners)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNexusVenturePartners} />
    </div>
  );
}

function ListItem19() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageNexusVenturePartners1 />
    </div>
  );
}

function Image23() {
  return (
    <div className="opacity-55 relative shrink-0 size-[26px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage8} />
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.2553px] whitespace-nowrap">helllo</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-[26px] items-center px-[42.75px] relative shrink-0 w-[167.7px]" data-name="Text">
      <Image23 />
      <Text56 />
    </div>
  );
}

function ImageHectorAi1() {
  return (
    <div className="h-[31px] max-h-[31.5px] max-w-[150px] relative shrink-0 w-[125px]" data-name="Image (Hector AI)">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 125 31" width="125">
        <g id="Image (Hector AI)" opacity="0.55">
          <path d={svgPaths.p3ca40000} fill="url(#paint0_linear_0_168)" id="Vector" />
          <path d={svgPaths.p1b59c400} fill="url(#paint1_linear_0_168)" id="Vector_2" />
          <path d={svgPaths.p3644f240} fill="url(#paint2_linear_0_168)" id="Vector_3" />
          <path d={svgPaths.p36e15280} fill="url(#paint3_linear_0_168)" id="Vector_4" />
          <path d={svgPaths.p2e704700} fill="white" id="Vector_5" />
          <path d={svgPaths.p3efc9280} fill="white" id="Vector_6" />
          <path d={svgPaths.p1a5aa200} fill="white" id="Vector_7" />
          <path d={svgPaths.p2bd9b880} fill="white" id="Vector_8" />
          <path d={svgPaths.p545fd80} fill="white" id="Vector_9" />
          <path d={svgPaths.p1be67c80} fill="white" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_168" x1="4.71271" x2="19.5344" y1="4.62582" y2="30.0913">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_168" x1="9.48741" x2="25.4503" y1="0.664228" y2="28.0902">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_168" x1="4.35072" x2="22.164" y1="3.45621" y2="34.0616">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_168" x1="18.454" x2="34.4168" y1="-4.55462" y2="22.8714">
            <stop offset="2.75506e-07" stopColor="#FF0078" />
            <stop offset="0.0636" stopColor="#E80089" />
            <stop offset="0.1972" stopColor="#AD00B4" />
            <stop offset="0.3511" stopColor="#6200EB" />
            <stop offset="0.6622" stopColor="#05D1CE" />
            <stop offset="1" stopColor="#007DEB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <ImageHectorAi1 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[19px] text-white whitespace-nowrap">Unpaved</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="content-stretch flex items-center px-[42.75px] relative shrink-0" data-name="List Item">
      <Text57 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="List">
      <ListItem11 />
      <Text32 />
      <Text34 />
      <ListItem12 />
      <Text36 />
      <Text38 />
      <ListItem13 />
      <Text40 />
      <Text42 />
      <ListItem14 />
      <Text44 />
      <Text46 />
      <ListItem15 />
      <Text48 />
      <ListItem16 />
      <Text50 />
      <ListItem17 />
      <Text52 />
      <ListItem18 />
      <ListItem19 />
      <Text55 />
      <ListItem20 />
      <ListItem21 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[-1703.08px] top-0 w-[9451px]" data-name="Container">
      <List />
      <List1 />
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[9451px]" data-name="Container:transform">
      <Container10 />
    </div>
  );
}

function CompaniesAndInstitutionsWhoseBuildersUseMaximem() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start overflow-clip relative shrink-0 w-[1297px]" data-name="Companies and institutions whose builders use Maximem">
      <ContainerTransform />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1297px]" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[1.2496px] uppercase whitespace-nowrap">Trusted by builders at</p>
      <CompaniesAndInstitutionsWhoseBuildersUseMaximem />
    </div>
  );
}

function Container11() {
  return <div className="bg-[#423f39] h-px relative shrink-0 w-[64px]" data-name="Container" />;
}

function LayerX() {
  return (
    <div className="absolute inset-[9.91%_0]" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="25.6559" preserveAspectRatio="none" viewBox="0 0 220.001 25.6559" width="220.001">
        <g id="Layer_x0020_1">
          <path d={svgPaths.p2862c800} fill="#005E8E" id="Vector" />
          <path d={svgPaths.p11662500} fill="#C20410" id="Vector_2" />
          <g id="_2252088389120">
            <path d={svgPaths.p24ad7600} fill="#FF1204" id="Vector_3" />
            <path d={svgPaths.p215bbf00} fill="#FF1204" id="Vector_4" />
            <path d={svgPaths.p1f455700} fill="#FF1204" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ImageCoverageInTheFinancialExpress() {
  return (
    <div className="h-[32px] max-w-[220px] opacity-70 overflow-clip relative shrink-0 w-[220px]" data-name="Image (Coverage in The Financial Express)">
      <LayerX />
    </div>
  );
}

function LinkCoverageInTheFinancialExpressOpensInNewTab() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link - Coverage in The Financial Express, opens in new tab">
      <ImageCoverageInTheFinancialExpress />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[27.31%_0.33%_25.63%_0.26%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.059" preserveAspectRatio="none" viewBox="0 0 218.695 15.059" width="218.695">
        <g id="Group">
          <path d={svgPaths.p40d1e80} fill="#e4e4e7" id="Vector" />
          <path d={svgPaths.p1278fa70} fill="#e4e4e7" id="Vector_2" />
          <path d={svgPaths.pb360100} fill="#e4e4e7" id="Vector_3" />
          <path d={svgPaths.pf27a100} fill="#e4e4e7" id="Vector_4" />
          <path d={svgPaths.p26e26380} fill="#e4e4e7" id="Vector_5" />
          <path d={svgPaths.p1f9b49c0} fill="#e4e4e7" id="Vector_6" />
          <path d={svgPaths.p2ad48900} fill="#e4e4e7" id="Vector_7" />
          <path d={svgPaths.p844f680} fill="#e4e4e7" id="Vector_8" />
          <path d={svgPaths.p382b3f00} fill="#e4e4e7" id="Vector_9" />
          <path d={svgPaths.p25f7b280} fill="#e4e4e7" id="Vector_10" />
          <path d={svgPaths.p107b3900} fill="#e4e4e7" id="Vector_11" />
          <path d={svgPaths.p3e53e800} fill="#e4e4e7" id="Vector_12" />
          <path d={svgPaths.p2c473890} fill="#e4e4e7" id="Vector_13" />
          <path d={svgPaths.p222b5500} fill="#e4e4e7" id="Vector_14" />
          <path d={svgPaths.p3fb31b00} fill="#e4e4e7" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function ImageCoverageInTheTimesOfIndia() {
  return (
    <div className="h-[32px] max-w-[220px] opacity-70 overflow-clip relative shrink-0 w-[220px]" data-name="Image (Coverage in The Times of India)">
      <Group15 />
    </div>
  );
}

function LinkCoverageInTheTimesOfIndiaOpensInNewTab() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link - Coverage in The Times of India, opens in new tab">
      <ImageCoverageInTheTimesOfIndia />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0" data-name="List">
      <LinkCoverageInTheFinancialExpressOpensInNewTab />
      <LinkCoverageInTheTimesOfIndiaOpensInNewTab />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">See all press coverage →</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[1.2496px] uppercase whitespace-nowrap">As featured in</p>
      <List2 />
      <Link4 />
    </div>
  );
}

function Container13() {
  return <div className="bg-[#423f39] h-px relative shrink-0 w-[64px]" data-name="Container" />;
}

function InceptionProgram() {
  return (
    <div className="absolute inset-[11.76%_5.1%]" data-name="Inception Program">
      <svg className="absolute block inset-0 size-full" fill="none" height="36.7028" preserveAspectRatio="none" viewBox="0 0 99.8574 36.7028" width="99.8574">
        <g id="Inception Program">
          <path d={svgPaths.p14aac040} fill="#e4e4e7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageNvidiaInceptionProgram() {
  return (
    <div className="h-[47.992px] max-h-[48px] max-w-[150px] opacity-75 overflow-clip relative shrink-0 w-[111.203px]" data-name="Image (NVIDIA Inception Program)">
      <InceptionProgram />
    </div>
  );
}

function Use() {
  return (
    <div className="absolute flex inset-[3%_64.61%_2%_0.12%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="relative size-full" data-name="use2460">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.293" preserveAspectRatio="none" viewBox="0 0 52.8964 17.293" width="52.8964">
            <g id="use2460">
              <path d={svgPaths.p36970c00} fill="#4285F4" id="path3053" />
              <path d={svgPaths.p2f0fba80} fill="#EA4335" id="path3055" />
              <path d={svgPaths.p1aab9200} fill="#FBBC05" id="path3057" />
              <path d={svgPaths.p21099100} fill="#4285F4" id="path3059" />
              <path d={svgPaths.p3a33ff00} fill="#34A853" id="polygon3061" />
              <path d={svgPaths.p1d96eb00} fill="#EA4335" id="path3063" />
              <g id="polygon3065" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute inset-[9.18%_5.83%_4.71%_38.23%]" data-name="text3075">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.6739" preserveAspectRatio="none" viewBox="0 0 83.9075 15.6739" width="83.9075">
        <g id="text3075">
          <path d={svgPaths.p2ec85500} fill="#e4e4e7" fillOpacity="0.85" id="path3099" />
          <path d={svgPaths.p2abe3880} fill="#e4e4e7" fillOpacity="0.85" id="path3101" />
          <path d={svgPaths.p152757b0} fill="#e4e4e7" fillOpacity="0.85" id="path3103" />
          <path d={svgPaths.p2d132500} fill="#e4e4e7" fillOpacity="0.85" id="path3105" />
          <path d={svgPaths.p1926bff2} fill="#e4e4e7" fillOpacity="0.85" id="path3107" />
          <path d={svgPaths.p2f027e00} fill="#e4e4e7" fillOpacity="0.85" id="path3109" />
          <path d={svgPaths.p1543a080} fill="#e4e4e7" fillOpacity="0.85" id="path3111" />
          <path d={svgPaths.p76ac800} fill="#e4e4e7" fillOpacity="0.85" id="path3113" />
          <path d={svgPaths.p1feadc00} fill="#e4e4e7" fillOpacity="0.85" id="path3115" />
          <path d={svgPaths.pc6fe300} fill="#e4e4e7" fillOpacity="0.85" id="path3117" />
        </g>
      </svg>
    </div>
  );
}

function ImageGoogleForStartups() {
  return (
    <div className="h-[18.203px] max-h-[31.5px] max-w-[150px] opacity-60 overflow-clip relative shrink-0 w-[150px]" data-name="Image (Google for Startups)">
      <Use />
      <Text92 />
    </div>
  );
}

function ImageNeo4J() {
  return (
    <div className="h-[27.586px] max-h-[27.600000381469727px] max-w-[150px] opacity-60 relative shrink-0 w-[77.727px]" data-name="Image (Neo4j)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNeo4J} />
    </div>
  );
}

function ImageCloudflare() {
  return (
    <div className="h-[32.992px] max-h-[33px] max-w-[150px] relative shrink-0 w-[88.813px]" data-name="Image (Cloudflare)">
      <svg className="absolute block inset-0 size-full" fill="none" height="32.9922" preserveAspectRatio="none" viewBox="0 0 88.8125 32.9922" width="88.8125">
        <g id="Image (Cloudflare)" opacity="0.6">
          <path d={svgPaths.p260e4a80} fill="white" id="Vector" />
          <path d={svgPaths.p1577e280} fill="#F48120" id="Vector_2" />
          <path d={svgPaths.p2d06ec00} fill="#FAAD3F" id="Vector_3" />
          <path d={svgPaths.p3670bc00} fill="#404041" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List Item">
      <ImageCloudflare />
    </div>
  );
}

function ImagePoweredByAws() {
  return (
    <div className="h-[29.992px] max-h-[30px] max-w-[150px] opacity-60 relative shrink-0 w-[83.328px]" data-name="Image (Powered by AWS)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePoweredByAws} />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0" data-name="List">
      <ImageNvidiaInceptionProgram />
      <ImageGoogleForStartups />
      <ImageNeo4J />
      <ListItem22 />
      <ImagePoweredByAws />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[1.2496px] uppercase whitespace-nowrap">Supported by</p>
      <List3 />
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(113,113,122,0.8)] text-center tracking-[0.1172px] whitespace-nowrap">AWS is a trademark of Amazon.com, Inc. or its affiliates.</p>
    </div>
  );
}

function Section1({ isLight }: { isLight?: boolean }) {
  return <CredibilitySection isLight={isLight} />;
}

function Container15() {
  return <div className="h-px relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(89.99999999999349deg, rgba(66, 63, 57, 0) 0%, rgb(66, 63, 57) 15%, rgb(66, 63, 57) 85%, rgba(66, 63, 57, 0) 100%)" }} data-name="Container" />;
}

function Text58() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[566.25px] left-[798px] top-0 w-[627px]" data-name="Text" />;
}

function Text59() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[566.25px] left-0 top-[318.52px] w-[627px]" data-name="Text" />;
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[55.2px] not-italic relative shrink-0 text-[48px] text-center text-white tracking-[-1.0884px] whitespace-nowrap">What is Maximem?</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[32.5px] not-italic relative shrink-0 text-[#d4d4d8] text-[20px] text-center tracking-[-0.4492px] max-w-[760px] w-full">
        <span>{`Maximem builds memory infrastructure: Synap, so the agents you build can remember, and Vity, a personal memory that stays `}</span>
        <span className="font-['Geist_Variable:Medium',sans-serif] text-white">encrypted even from us</span>
        <span>, so the AI you use can too.</span>
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 -translate-x-1/2 max-w-[760px] top-[96px] w-[760px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Icon">
          <path d={svgPaths.p19fa1b00} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p26e2f800} id="Vector_2" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.pa029b00} id="Vector_3" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p2b840540} id="Vector_4" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d="M11 11V7.33333" id="Vector_5" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#3d3a34] border border-[#56524b] border-solid content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0" data-name="Container:margin">
      <Container19 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.1697px] whitespace-nowrap">Maximem Synap</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[458px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">For organizations and development teams</p>
    </div>
  );
}

function Container20() {
  return <div className="bg-[#423f39] h-px relative shrink-0 w-[458px]" data-name="Container" />;
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0" data-name="Container:margin">
      <Container20 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#e4e4e7] text-[16px] tracking-[-0.3125px] whitespace-nowrap">The context management stack for the AI agents you build.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.peafff80} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Icon:margin">
      <Icon3 />
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#d4d4d8] text-[15px] tracking-[-0.2344px] whitespace-nowrap">Persistent memory + anticipatory retrieval</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="List Item">
      <IconMargin />
      <Text60 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.peafff80} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Icon:margin">
      <Icon4 />
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#d4d4d8] text-[15px] tracking-[-0.2344px] whitespace-nowrap">Entity resolution + knowledge pipelines</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="List Item">
      <IconMargin1 />
      <Text61 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.peafff80} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Icon:margin">
      <Icon5 />
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#d4d4d8] text-[15px] tracking-[-0.2344px] whitespace-nowrap">92% LongMemEval · 93.2% LoCoMo accuracy</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="List Item">
      <IconMargin2 />
      <Text62 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[99px] items-start pt-[16px] relative shrink-0 w-[458px]" data-name="List">
      <ListItem23 />
      <ListItem24 />
      <ListItem25 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#3d3a34] border border-[#423f39] border-solid content-stretch flex gap-[8px] h-[42px] items-center left-0 px-[20px] py-[10px] rounded-[9999px] top-[28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">Explore Synap</p>
      <Icon6 />
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Link">
      <Button1 />
    </div>
  );
}

function LinkAlign() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full" data-name="Link:align">
      <Link5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#322f2b] border border-[#423f39] border-solid content-stretch flex flex-[524_0_0] flex-col h-[420.07px] items-start min-w-px p-[32px] relative rounded-[24px]" data-name="Container">
      <ContainerMargin1 />
      <Heading2 />
      <Paragraph2 />
      <ContainerMargin2 />
      <Paragraph3 />
      <List4 />
      <LinkAlign />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Icon">
          <path d={svgPaths.p153cdd00} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p3d160b80} id="Vector_2" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#3d3a34] border border-[#56524b] border-solid content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0" data-name="Container:margin">
      <Container22 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.1697px] whitespace-nowrap">Maximem Vity</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[458px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">For power users and AI enthusiasts</p>
    </div>
  );
}

function Container23() {
  return <div className="bg-[#423f39] h-px relative shrink-0 w-[458px]" data-name="Container" />;
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0" data-name="Container:margin">
      <Container23 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#e4e4e7] text-[16px] tracking-[-0.3125px] whitespace-nowrap">A secure personal context layer that follows you everywhere.</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.peafff80} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Icon:margin">
      <Icon8 />
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#d4d4d8] text-[15px] tracking-[-0.2344px] whitespace-nowrap">Private cloud vault, encrypted by default</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="List Item">
      <IconMargin3 />
      <Text63 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.peafff80} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Icon:margin">
      <Icon9 />
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#d4d4d8] text-[15px] tracking-[-0.2344px] whitespace-nowrap">{`Remembers preferences, work history & tasks`}</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="List Item">
      <IconMargin4 />
      <Text64 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.peafff80} id="Vector" stroke="#F26522" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin5() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Icon:margin">
      <Icon10 />
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#d4d4d8] text-[15px] tracking-[-0.2344px] whitespace-nowrap">Carries context across every AI you use</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="List Item">
      <IconMargin5 />
      <Text65 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[99px] items-start pt-[16px] relative shrink-0 w-[458px]" data-name="List">
      <ListItem26 />
      <ListItem27 />
      <ListItem28 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#3d3a34] border border-[#423f39] border-solid content-stretch flex gap-[8px] h-[42px] items-center left-0 px-[20px] py-[10px] rounded-[9999px] top-[28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">Explore Vity</p>
      <Icon11 />
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Link">
      <Button2 />
    </div>
  );
}

function LinkAlign1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full" data-name="Link:align">
      <Link6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#322f2b] border border-[#423f39] border-solid content-stretch flex flex-[524_0_0] flex-col h-[420.07px] items-start min-w-px p-[32px] relative rounded-[24px]" data-name="Container">
      <ContainerMargin3 />
      <Heading3 />
      <Paragraph4 />
      <ContainerMargin4 />
      <Paragraph5 />
      <List5 />
      <LinkAlign1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1080px] mx-auto items-stretch justify-center my-6" data-name="Container">
      <Container18 />
      <Container21 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="flex gap-[6px] h-[20px] items-center cursor-pointer hover:text-white transition-colors" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">Learn more on our blog</p>
      <Icon12 />
    </div>
  );
}

function Section2({ isLight }: { isLight?: boolean }) {
  return <WhatIsMaximem isLight={isLight} />;
}

function Container24() {
  return null;
}

function Paragraph6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
      <p className="[word-break:break-word] font-['Geist_Mono_Variable:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">The problem</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col h-auto items-start pt-[16px] relative shrink-0 w-full max-w-[1100px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[55.2px] not-italic relative shrink-0 text-[40px] md:text-[48px] text-[#09090b] tracking-[-1.0884px]">Why memory, and why the alternatives fall short.</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-[16px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[29.25px] not-italic relative shrink-0 text-[#52525b] text-[18px] tracking-[-0.4395px] max-w-[768px] w-full">Bigger context windows do not fix it. Vector search is not it. Files do not scale, and the platforms will not own it for you. We answer the nine loudest objections to agent memory, with proof.</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="flex items-center gap-1.5 h-[24px] cursor-pointer group" data-name="Link">
      <p className="font-['Geist_Variable:Medium',sans-serif] leading-[20px] text-[#f26522] text-[14px] tracking-[-0.1504px] group-hover:underline flex items-center gap-1">
        Read the case for memory
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[28px] relative shrink-0 w-full flex items-center" data-name="Container">
      <Link8 />
    </div>
  );
}

function WhyMemoryGrid() {
  const objections = [
    {
      num: "01",
      tag: "CONTEXT LIMITS",
      title: "Bigger Windows ≠ True Memory",
      desc: "Expanding prompt window size causes attention dilution ('lost-in-the-middle') and explodes quadratic token billing. A 2M window cannot preserve state across 500+ turns and multi-month deployments.",
    },
    {
      num: "02",
      tag: "VECTOR DEFICIT",
      title: "Vector Search Misses Logic",
      desc: "Pure vector similarity lacks temporal decay, entity resolution, and relational topology. When a user updates a preference, cosine similarity still retrieves outdated contradicting facts.",
    },
    {
      num: "03",
      tag: "FLAT STORAGE",
      title: "Files Fail At Multi-Agent Scale",
      desc: "Local JSON or Markdown files crumble under concurrent multi-agent lifecycle writes, offering zero background consolidation or conscious forgetting cycles required in enterprise production.",
    },
    {
      num: "04",
      tag: "DATA SOVEREIGNTY",
      title: "Platform Moats Must Be Yours",
      desc: "Relying on model providers traps your core agent intelligence inside closed proprietary silos. Maximem gives you sovereign, portable memory that follows your agents across all LLMs.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-8">
      {objections.map((item) => (
        <div
          key={item.num}
          className="why-card relative p-5 rounded-[6px] bg-white border border-[#e4e4e7] hover:border-[#f26522]/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <div className="absolute top-1.5 right-2 text-[9px] font-mono text-[#a1a1aa] select-none pointer-events-none">+</div>
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-[#e4e4e7] pb-2">
              <span className="text-[11px] font-mono text-[#f26522] font-semibold tracking-wider">{item.num}</span>
              <span className="text-[9px] font-mono text-[#71717a] tracking-wider uppercase">{item.tag}</span>
            </div>
            <h4 className="text-[14.5px] font-semibold text-[#09090b] tracking-tight mb-2 group-hover:text-[#f26522] transition-colors">{item.title}</h4>
            <p className="text-[12px] text-[#52525b] leading-[18px]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1140px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Heading4 />
      <ParagraphMargin />
      <WhyMemoryGrid />
      <Container26 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container25 />
    </div>
  );
}

function Section3({ isLight }: { isLight?: boolean }) {
  return <ProblemSection isLight={isLight} />;
}

function Container27() {
  return null;
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
      <p className="[word-break:break-word] font-['Geist_Mono_Variable:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">How it works</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col h-auto items-start max-w-[768px] pt-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[55.2px] not-italic relative shrink-0 text-[40px] md:text-[48px] text-white tracking-[-1.0884px]">How Synap actually works</p>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[29.25px] not-italic relative shrink-0 text-[#d4d4d8] text-[18px] tracking-[-0.4395px] max-w-[768px] w-full">A turn does not land in a database. It is ingested, its meaning is extracted into structure rather than raw text, and it is stored across a vector, graph, and file store, asynchronously, so the write call returns before any of that happens and never blocks your agent. Retrieval then nets across all three stores at once, and most reads never leave your process, because context is pre-fetched while the conversation is still going. The context management pipeline below is where the accuracy and latency numbers come from.</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[13.45%_4.56%_16.9%_15.59%]" data-name="Group">
      <div className="absolute inset-[13.45%_4.56%_78.28%_29.41%]" data-name="Vector">
        <div className="absolute inset-[-19.27%_-1.03%]">
          <svg className="block size-full" fill="none" height="53.6882" preserveAspectRatio="none" viewBox="0 0 739.928 53.6882" width="739.928">
            <g filter="url(#filter0_f_0_27)" id="Vector" opacity="0.0365466">
              <path d={svgPaths.p3321dd80} stroke="#F26522" strokeWidth="2.01835" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="53.6882" id="filter0_f_0_27" width="739.928" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_27" stdDeviation="3.22937" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.1%_75.29%_41.03%_15.59%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_241)" id="Vector" opacity="0">
            <path d={svgPaths.p4dd9200} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_241" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_241" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[26.21%_59.93%_61.03%_30.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_94)" id="Vector" opacity="0">
            <path d={svgPaths.p33173c00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_94" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_94" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[26.21%_46.32%_61.03%_42.65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_92)" id="Vector" opacity="0">
            <path d={svgPaths.p22155d00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_92" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_92" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[26.21%_33.09%_61.03%_58.09%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_93)" id="Vector" opacity="0">
            <path d={svgPaths.p2a151100} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_93" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_93" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[43.45%_44.85%_45.17%_44.12%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_152)" id="Vector" opacity="0">
            <path d={svgPaths.p30787d00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_152" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_152" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[43.45%_31.99%_45.17%_56.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_152)" id="Vector" opacity="0">
            <path d={svgPaths.p30787d00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_152" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_152" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[43.45%_19.12%_45.17%_69.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_152)" id="Vector" opacity="0">
            <path d={svgPaths.p30787d00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_152" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_152" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[70%_30.51%_16.9%_55.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_79)" id="Vector" opacity="0">
            <path d={svgPaths.p1c497400} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_79" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_79" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[43.45%_44.85%_45.17%_44.12%]" data-name="Vector">
        <div className="absolute inset-[-14.02%_-6.17%]">
          <svg className="block size-full" fill="none" height="68.2204" preserveAspectRatio="none" viewBox="0 0 136.037 68.2204" width="136.037">
            <g filter="url(#filter0_f_0_77)" id="Vector" opacity="0.01">
              <path d={svgPaths.p1e26da00} stroke="#F26522" strokeWidth="2.01835" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.2203" id="filter0_f_0_77" width="136.037" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_77" stdDeviation="3.22937" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.45%_31.99%_45.17%_56.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_152)" id="Vector" opacity="0">
            <path d={svgPaths.p30787d00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_152" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_152" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[43.45%_19.12%_45.17%_69.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_0_152)" id="Vector" opacity="0">
            <path d={svgPaths.p30787d00} stroke="#F26522" strokeWidth="2.01835" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_0_152" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_152" stdDeviation="3.22937" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[21.72%_37.5%_73.79%_35.29%]" data-name="Group">
      <div className="absolute inset-[21.72%_64.71%_73.79%_35.29%] opacity-40" data-name="Vector">
        <div className="absolute inset-[0_-0.4px]">
          <svg className="block size-full" fill="none" height="20.9909" preserveAspectRatio="none" viewBox="0 0 0.807341 20.9909" width="0.807341">
            <path d="M0.403671 0V20.9909" id="Vector" stroke="#F26522" strokeDasharray="2.42 3.23" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[21.72%_51.84%_73.79%_48.16%] opacity-40" data-name="Vector">
        <div className="absolute inset-[0_-0.4px]">
          <svg className="block size-full" fill="none" height="20.9909" preserveAspectRatio="none" viewBox="0 0 0.807341 20.9909" width="0.807341">
            <path d="M0.403671 0V20.9909" id="Vector" stroke="#F26522" strokeDasharray="2.42 3.23" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[21.72%_37.5%_73.79%_62.5%] opacity-40" data-name="Vector">
        <div className="absolute inset-[0_-0.4px]">
          <svg className="block size-full" fill="none" height="20.9909" preserveAspectRatio="none" viewBox="0 0 0.807341 20.9909" width="0.807341">
            <path d="M0.403671 0V20.9909" id="Vector" stroke="#F26522" strokeDasharray="2.42 3.23" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[32.59%_42.21%_67.41%_40.07%]" data-name="Group">
      <div className="absolute inset-[32.59%_57.65%_67.41%_40.07%]" data-name="Vector">
        <div className="absolute inset-[-1.01px_0]">
          <svg className="block size-full" fill="none" height="2.01835" preserveAspectRatio="none" viewBox="0 0 25.0276 2.01835" width="25.0276">
            <path d="M0 1.00918H25.0276" id="Vector" stroke="#F26522" strokeWidth="2.01835" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.59%_42.21%_67.41%_53.68%]" data-name="Vector">
        <div className="absolute inset-[-1.01px_0]">
          <svg className="block size-full" fill="none" height="2.01835" preserveAspectRatio="none" viewBox="0 0 45.2111 2.01835" width="45.2111">
            <path d="M0 1.00918H45.2111" id="Vector" stroke="#F26522" strokeWidth="2.01835" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[38.97%_24.63%_56.55%_49.63%]" data-name="Group">
      <div className="absolute inset-[38.97%_37.5%_56.55%_49.63%]" data-name="Vector">
        <div className="absolute inset-[0_-0.57%]">
          <svg className="block size-full" fill="none" height="20.9909" preserveAspectRatio="none" viewBox="0 0 142.899 20.9909" width="142.899">
            <path d={svgPaths.p2b5f73e0} id="Vector" stroke="#56524B" strokeWidth="1.61468" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.38%_37.5%_56.55%_62.5%]" data-name="Vector">
        <div className="absolute inset-[0_-0.81px]">
          <svg className="block size-full" fill="none" height="9.6881" preserveAspectRatio="none" viewBox="0 0 1.61468 9.6881" width="1.61468">
            <path d="M0.807341 0V9.6881" id="Vector" stroke="#56524B" strokeWidth="1.61468" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.97%_24.63%_56.55%_62.5%]" data-name="Vector">
        <div className="absolute inset-[0_-0.57%]">
          <svg className="block size-full" fill="none" height="20.9909" preserveAspectRatio="none" viewBox="0 0 142.899 20.9909" width="142.899">
            <path d={svgPaths.p13c8564} id="Vector" stroke="#56524B" strokeWidth="1.61468" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[47.48%_53.34%_48.86%_45.25%]" data-name="Group">
      <div className="absolute inset-[47.48%_54.07%_51.62%_45.54%]" data-name="Vector">
        <div className="absolute inset-[-9.62%]">
          <svg className="block size-full" fill="none" height="5.00553" preserveAspectRatio="none" viewBox="0 0 5.00548 5.00553" width="5.00548">
            <path d={svgPaths.p3255fc00} fill="#F26522" id="Vector" stroke="#F26522" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[48.86%_53.34%_50.24%_46.28%]" data-name="Vector">
        <div className="absolute inset-[-9.62%]">
          <svg className="block size-full" fill="none" height="5.00553" preserveAspectRatio="none" viewBox="0 0 5.00548 5.00553" width="5.00548">
            <path d={svgPaths.p3255fc00} fill="#F26522" id="Vector" stroke="#F26522" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[50.24%_53.63%_48.86%_45.99%]" data-name="Vector">
        <div className="absolute inset-[-9.62%]">
          <svg className="block size-full" fill="none" height="5.00553" preserveAspectRatio="none" viewBox="0 0 5.00548 5.00553" width="5.00548">
            <path d={svgPaths.p3255fc00} fill="#F26522" id="Vector" stroke="#F26522" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.55%_54.37%_49.55%_45.25%]" data-name="Vector">
        <div className="absolute inset-[-9.62%]">
          <svg className="block size-full" fill="none" height="5.00553" preserveAspectRatio="none" viewBox="0 0 5.00548 5.00553" width="5.00548">
            <path d={svgPaths.p3255fc00} fill="#F26522" id="Vector" stroke="#F26522" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[48.62%_40.37%_49.31%_58.31%]" data-name="Group">
      <div className="absolute inset-[48.97%_40.81%_49.31%_58.31%]" data-name="Vector">
        <div className="absolute inset-[-5.38%_-3.73%]">
          <svg className="block size-full" fill="none" height="8.94172" preserveAspectRatio="none" viewBox="0 0 10.4117 8.94172" width="10.4117">
            <path d={svgPaths.p112e18c0} id="Vector" stroke="#F26522" strokeWidth="1.13028" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[48.62%_40.37%_49.31%_59.19%]" data-name="Vector">
        <div className="absolute inset-[-2.61%_-10.43%]">
          <svg className="block size-full" fill="none" height="10.1936" preserveAspectRatio="none" viewBox="0 0 5.855 10.1936" width="5.855">
            <path d={svgPaths.p30ecd80} id="Vector" stroke="#F26522" strokeWidth="1.13028" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[47.93%_40.07%_48.62%_58.09%]" data-name="Group">
      <div className="absolute inset-[48.45%_41.47%_50.52%_58.09%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.84405" preserveAspectRatio="none" viewBox="0 0 4.84405 4.84405" width="4.84405">
          <path d={svgPaths.p18723680} fill="#F26522" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.34%_40.59%_48.62%_58.97%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.84405" preserveAspectRatio="none" viewBox="0 0 4.84405 4.84405" width="4.84405">
          <path d={svgPaths.p18723680} fill="#F26522" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.93%_40.07%_51.03%_59.49%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.84405" preserveAspectRatio="none" viewBox="0 0 4.84405 4.84405" width="4.84405">
          <path d={svgPaths.p18723680} fill="#F26522" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[54.83%_24.63%_40.69%_49.63%]" data-name="Group">
      <div className="absolute inset-[54.83%_50.37%_42.07%_49.63%]" data-name="Vector">
        <div className="absolute inset-[0_-0.52px]">
          <svg className="block size-full" fill="none" height="14.5321" preserveAspectRatio="none" viewBox="0 0 1.04954 14.5321" width="1.04954">
            <path d="M0.524772 0V14.5321" id="Vector" stroke="#56524B" strokeWidth="1.04954" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.83%_37.5%_40.69%_62.5%]" data-name="Vector">
        <div className="absolute inset-[0_-0.52px]">
          <svg className="block size-full" fill="none" height="20.9909" preserveAspectRatio="none" viewBox="0 0 1.04954 20.9909" width="1.04954">
            <path d="M0.524772 0V20.9909" id="Vector" stroke="#56524B" strokeWidth="1.04954" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.83%_24.63%_42.07%_75.37%]" data-name="Vector">
        <div className="absolute inset-[0_-0.52px]">
          <svg className="block size-full" fill="none" height="14.5321" preserveAspectRatio="none" viewBox="0 0 1.04954 14.5321" width="1.04954">
            <path d="M0.524772 0V14.5321" id="Vector" stroke="#56524B" strokeWidth="1.04954" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[44.74%_6.01%_42.78%_82.05%]" data-name="Group">
      <div className="absolute inset-[45%_16.18%_50.86%_82.05%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" height="21.3137" preserveAspectRatio="none" viewBox="0 0 21.3138 21.3137" width="21.3138">
            <path d={svgPaths.p3953f200} id="Vector" stroke="#F26522" strokeWidth="1.93762" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[44.74%_9.43%_52.7%_84.56%] leading-[normal] not-italic text-[#d4d4d4] text-[10.092px] whitespace-nowrap">Consolidation</p>
      <div className="absolute inset-[50.86%_16.18%_45%_82.05%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" height="21.3137" preserveAspectRatio="none" viewBox="0 0 21.3138 21.3137" width="21.3138">
            <path d={svgPaths.p3953f200} id="Vector" stroke="#F26522" strokeWidth="1.93762" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[50.6%_6.33%_46.83%_84.56%] leading-[normal] not-italic text-[#d4d4d4] text-[10.092px] whitespace-nowrap">Conscious forgetting</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.09%_6.01%_42.78%_82.06%] leading-[normal] not-italic text-[#8a857c] text-[8.477px] whitespace-nowrap">background cycles on the stores</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-21" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-21" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-35" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-35" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[-1.29%_99.45%_98.71%_-0.55%]" data-name="Group">
      <div className="absolute inset-[-1.29%_99.45%_98.71%_-0.55%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.1101" preserveAspectRatio="none" viewBox="0 0 12.1101 12.1101" width="12.1101">
          <path d={svgPaths.p30580680} fill="#F26522" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[-0.55%_99.76%_99.45%_-0.23%] opacity-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.16699" preserveAspectRatio="none" viewBox="0 0 5.16699 5.16699" width="5.16699">
          <path d={svgPaths.p35659400} fill="#FFE3D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[468.258px] max-w-[1180px] min-w-[860px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="468.258" preserveAspectRatio="none" viewBox="0 0 1097.98 468.258" width="1097.98">
        <path d={svgPaths.p1e7e3c40} fill="#0E0E0D" id="Vector" />
      </svg>
      <Group16 />
      <div className="absolute inset-[13.79%_88.82%_12.07%_2.94%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="347.157" preserveAspectRatio="none" viewBox="0 0 90.4222 347.157" width="90.4222">
          <path d={svgPaths.pea9e800} fill="#F26522" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex inset-[40.15%_92.63%_38.06%_5.37%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative text-[#0e0e0d] text-[18.569px] text-center whitespace-nowrap">Your Agent</p>
        </div>
      </div>
      <div className="absolute inset-[43.1%_75.29%_41.03%_15.59%]" data-name="Vector">
        <div className="absolute inset-[-1.09%_-0.81%]">
          <svg className="block size-full" fill="none" height="75.8901" preserveAspectRatio="none" viewBox="0 0 101.725 75.8901" width="101.725">
            <path d={svgPaths.p3756e400} fill="url(#paint0_linear_0_208)" id="Vector" stroke="#F26522" strokeWidth="1.61468" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_208" x1="0.807341" x2="0.807341" y1="0.807341" y2="75.0827">
                <stop stopColor="#322F2B" />
                <stop offset="1" stopColor="#1B1B19" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[49.14%_76.5%_47.23%_16.77%] leading-[normal] not-italic text-[13.725px] text-center text-white whitespace-nowrap">Synap SDK</p>
      <div className="absolute inset-[51.03%_84.85%_48.97%_11.77%]" data-name="Vector">
        <div className="absolute inset-[-1.21px_0]">
          <svg className="block size-full" fill="none" height="2.42202" preserveAspectRatio="none" viewBox="0 0 37.1377 2.42202" width="37.1377">
            <path d="M0 1.21101H37.1377" id="Vector" stroke="#F26522" strokeWidth="2.42202" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.59%_2.79%_6.21%_27.65%]" data-name="Vector">
        <div className="absolute inset-[-0.13%_0]">
          <svg className="block size-full" fill="none" height="404.72" preserveAspectRatio="none" viewBox="0 0 764.794 404.72" width="764.794">
            <path d={svgPaths.p3f467cf0} id="Vector" opacity="0.85" stroke="#56524B" strokeDasharray="5.65 4.84" strokeWidth="1.04954" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[9.66%_67.55%_87.78%_29.27%] leading-[normal] not-italic text-[#8a857c] text-[9.688px] whitespace-nowrap">SYNAP</p>
      <div className="absolute inset-[13.45%_4.56%_78.28%_29.41%]" data-name="Vector">
        <div className="absolute inset-[-1.56%_0]">
          <svg className="block size-full" fill="none" height="39.9634" preserveAspectRatio="none" viewBox="0 0 726.204 39.9634" width="726.204">
            <path d={svgPaths.p31866d00} fill="#1E140B" id="Vector" stroke="#F26522" strokeDasharray="4.84 4.04" strokeWidth="1.21101" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[14.74%_28.12%_82.27%_52.94%] leading-[normal] not-italic text-[#f26522] text-[11.706px] text-center whitespace-nowrap">CUSTOM CONTEXT ARCHITECTURE</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[18.1%_22.61%_79.33%_47.34%] leading-[normal] not-italic text-[#a3a3a3] text-[9.688px] text-center whitespace-nowrap">generated per agent · governs extraction, scoping, retention and more...</p>
      <Group17 />
      <div className="absolute inset-[26.21%_59.93%_61.03%_30.51%]" data-name="Vector">
        <div className="absolute inset-[-1.01%_-0.58%]">
          <svg className="block size-full" fill="none" height="60.9543" preserveAspectRatio="none" viewBox="0 0 106.165 60.9543" width="106.165">
            <path d={svgPaths.p15c48f00} fill="url(#paint0_linear_0_69)" id="Vector" stroke="#56524B" strokeWidth="1.21101" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_69" x1="0.605506" x2="0.605506" y1="0.605506" y2="60.3488">
                <stop stopColor="#322F2B" />
                <stop offset="1" stopColor="#1B1B19" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[29.14%_62.74%_67.23%_33.35%] leading-[normal] not-italic text-[13.725px] text-center text-white whitespace-nowrap">Ingest</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.53%_62.38%_64.12%_32.98%] leading-[normal] not-italic text-[#a3a3a3] text-[9.284px] text-center whitespace-nowrap">async write</p>
      <div className="absolute inset-[26.21%_46.32%_61.03%_42.65%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-0.67%]">
          <svg className="block size-full" fill="none" height="61.3579" preserveAspectRatio="none" viewBox="0 0 122.716 61.3579" width="122.716">
            <path d={svgPaths.p5c7b900} fill="url(#paint0_linear_0_151)" id="Vector" stroke="#F26522" strokeWidth="1.61468" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_151" x1="0.807341" x2="0.807341" y1="0.807341" y2="60.5506">
                <stop stopColor="#322F2B" />
                <stop offset="1" stopColor="#1B1B19" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[29.14%_49.58%_67.23%_45.96%] leading-[normal] not-italic text-[13.725px] text-center text-white whitespace-nowrap">Extract</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.53%_47.4%_64.12%_43.68%] leading-[normal] not-italic text-[#d4d4d4] text-[9.284px] text-center whitespace-nowrap">structure, not raw text</p>
      <div className="absolute inset-[26.21%_33.09%_61.03%_58.09%]" data-name="Vector">
        <div className="absolute inset-[-1.01%_-0.63%]">
          <svg className="block size-full" fill="none" height="60.9543" preserveAspectRatio="none" viewBox="0 0 98.092 60.9543" width="98.092">
            <path d={svgPaths.p3105e110} fill="url(#paint0_linear_0_244)" id="Vector" stroke="#56524B" strokeWidth="1.21101" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_244" x1="0.605506" x2="0.605506" y1="0.605506" y2="60.3488">
                <stop stopColor="#322F2B" />
                <stop offset="1" stopColor="#1B1B19" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[29.14%_35.78%_67.23%_60.85%] leading-[normal] not-italic text-[13.725px] text-center text-white whitespace-nowrap">Store</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.53%_33.69%_64.12%_58.75%] leading-[normal] not-italic text-[#a3a3a3] text-[9.284px] text-center whitespace-nowrap">vector · graph · file</p>
      <Group18 />
      <div className="absolute inset-[32.59%_69.78%_51.38%_24.71%]" data-name="Vector">
        <div className="absolute inset-[-1.34%_0]">
          <svg className="block size-full" fill="none" height="77.1011" preserveAspectRatio="none" viewBox="0 0 60.5506 77.1011" width="60.5506">
            <path d={svgPaths.p4da9500} id="Vector" stroke="#F26522" strokeWidth="2.01835" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[45.43%_72.24%_52.43%_25.85%] leading-[normal] not-italic text-[#737373] text-[8.477px] text-center whitespace-nowrap">write</p>
      <Group19 />
      <div className="absolute inset-[43.45%_44.85%_45.17%_44.12%]" data-name="Vector">
        <div className="absolute inset-[-0.76%_-0.33%]">
          <svg className="block size-full" fill="none" height="54.0919" preserveAspectRatio="none" viewBox="0 0 121.909 54.0919" width="121.909">
            <path d={svgPaths.p2f776d80} fill="#1B1B19" id="Vector" stroke="#423F39" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <Group20 />
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[46.29%_49.15%_50.93%_47.57%] leading-[normal] not-italic text-[10.899px] text-white whitespace-nowrap">Vector</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[49.48%_45.32%_48.17%_47.57%] leading-[normal] not-italic text-[#737373] text-[8.881px] whitespace-nowrap">semantic similarity</p>
      <div className="absolute inset-[43.45%_31.99%_45.17%_56.99%]" data-name="Vector">
        <div className="absolute inset-[-0.76%_-0.33%]">
          <svg className="block size-full" fill="none" height="54.0919" preserveAspectRatio="none" viewBox="0 0 121.909 54.0919" width="121.909">
            <path d={svgPaths.p2f776d80} fill="#1B1B19" id="Vector" stroke="#423F39" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <Group21 />
      <Group22 />
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[46.29%_36.11%_50.93%_60.88%] leading-[normal] not-italic text-[10.899px] text-white whitespace-nowrap">Graph</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[49.48%_31.83%_48.17%_60.88%] leading-[normal] not-italic text-[#737373] text-[8.881px] whitespace-nowrap">entity relationships</p>
      <div className="absolute inset-[43.45%_19.12%_45.17%_69.85%]" data-name="Vector">
        <div className="absolute inset-[-0.76%_-0.33%]">
          <svg className="block size-full" fill="none" height="54.0919" preserveAspectRatio="none" viewBox="0 0 121.909 54.0919" width="121.909">
            <path d={svgPaths.p2f776d80} fill="#1B1B19" id="Vector" stroke="#423F39" strokeWidth="0.807341" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[46.55%_27.43%_50.34%_71.32%]" data-name="Vector">
        <div className="absolute inset-[-3.89%_-4.12%]">
          <svg className="block size-full" fill="none" height="15.6624" preserveAspectRatio="none" viewBox="0 0 14.8551 15.6624" width="14.8551">
            <path d={svgPaths.p3d458700} id="Vector" stroke="#F26522" strokeWidth="1.13028" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[46.55%_27.43%_52.59%_72.21%]" data-name="Vector">
        <div className="absolute inset-[0_0_-14%_-14%]">
          <svg className="block size-full" fill="none" height="4.60185" preserveAspectRatio="none" viewBox="0 0 4.60185 4.60185" width="4.60185">
            <path d="M0.565139 0V4.03671H4.60185" id="Vector" stroke="#F26522" strokeWidth="1.13028" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[46.29%_24.67%_50.93%_73.6%] leading-[normal] not-italic text-[10.899px] text-white whitespace-nowrap">File</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[49.48%_20.2%_48.17%_73.6%] leading-[normal] not-italic text-[#737373] text-[8.881px] whitespace-nowrap">documents, raw</p>
      <Group23 />
      <div className="absolute inset-[57.93%_20.22%_38.62%_45.22%]" data-name="Vector">
        <div className="absolute inset-[-5%_0]">
          <svg className="block size-full" fill="none" height="17.7615" preserveAspectRatio="none" viewBox="0 0 379.45 17.7615" width="379.45">
            <path d={svgPaths.p33b67b40} id="Vector" opacity="0.95" stroke="#F26522" strokeWidth="1.61468" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.38%_37.5%_30.34%_62.5%]" data-name="Vector">
        <div className="absolute inset-[0_-0.97px]">
          <svg className="block size-full" fill="none" height="38.7524" preserveAspectRatio="none" viewBox="0 0 1.93762 38.7524" width="1.93762">
            <path d="M0.96881 0V38.7524" id="Vector" stroke="#F26522" strokeWidth="1.93762" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70%_30.51%_16.9%_55.51%]" data-name="Vector">
        <div className="absolute inset-[-1.32%_-0.53%]">
          <svg className="block size-full" fill="none" height="62.9726" preserveAspectRatio="none" viewBox="0 0 155.01 62.9726" width="155.01">
            <path d={svgPaths.p12803c80} fill="url(#paint0_linear_0_55)" id="Vector" stroke="#F26522" strokeWidth="1.61468" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_55" x1="0.807341" x2="0.807341" y1="0.807341" y2="62.1653">
                <stop stopColor="#322F2B" />
                <stop offset="1" stopColor="#1B1B19" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[72.59%_32.28%_23.78%_57.24%] leading-[normal] not-italic text-[13.725px] text-center text-white whitespace-nowrap">Agentic Retrieval</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[77.16%_26.98%_20.5%_51.99%] leading-[normal] not-italic text-[#a3a3a3] text-[9.284px] text-center whitespace-nowrap">anticipatory · under 15ms P75 · nets across all stores</p>
      <div className="absolute inset-[58.97%_44.78%_23.45%_20.15%]" data-name="Vector">
        <div className="absolute inset-[0_0_-1.23%_-0.26%]">
          <svg className="block size-full" fill="none" height="83.358" preserveAspectRatio="none" viewBox="0 0 386.111 83.358" width="386.111">
            <path d="M1.00918 0V82.3488H386.111" id="Vector" stroke="#F26522" strokeWidth="2.01835" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[73.36%_77.15%_24.5%_21.21%] leading-[normal] not-italic text-[#737373] text-[8.477px] text-center whitespace-nowrap">read</p>
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
      <Group40 />
    </div>
  );
}

function ImageSynapArchitectureYourAgentExchangesContextWithTheSynapSdkWhichSitsJustOutsideTheSynapEngineOnWriteDataFlowsFromIngestToExtractToStoreAcrossAVectorGraphAndFileStoreOnReadTheSdkCallsAgenticRetrievalWhichNetsAcrossEveryStoreInUnder15MsAtP75InConversationACustomContextArchitectureGeneratedPerAgentGovernsExtractionScopingAndRetentionWhileConsolidationAndConsciousForgettingRunAsBackgroundCyclesOnTheStores() {
  return (
    <div className="bg-[#0e0e0d] border border-[#423f39] border-solid content-stretch flex flex-col h-[470.258px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[1100px]" data-name="Image - Synap architecture. Your agent exchanges context with the Synap SDK, which sits just outside the Synap engine. On write, data flows from Ingest to Extract to Store across a vector, graph, and file store. On read, the SDK calls Agentic Retrieval, which nets across every store in under 15ms at P75, in-conversation. A custom context architecture generated per agent governs extraction, scoping, and retention, while consolidation and conscious forgetting run as background cycles on the stores.">
      <Icon13 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[518.258px] items-start pt-[48px] relative shrink-0 w-full" data-name="Container">
      <ImageSynapArchitectureYourAgentExchangesContextWithTheSynapSdkWhichSitsJustOutsideTheSynapEngineOnWriteDataFlowsFromIngestToExtractToStoreAcrossAVectorGraphAndFileStoreOnReadTheSdkCallsAgenticRetrievalWhichNetsAcrossEveryStoreInUnder15MsAtP75InConversationACustomContextArchitectureGeneratedPerAgentGovernsExtractionScopingAndRetentionWhileConsolidationAndConsciousForgettingRunAsBackgroundCyclesOnTheStores />
    </div>
  );
}

function Link9() {
  return (
    <div className="flex items-center gap-1.5 h-[24px] cursor-pointer group" data-name="Link">
      <p className="font-['Geist_Variable:Medium',sans-serif] leading-[20px] text-[#f26522] text-[14px] tracking-[-0.1504px] group-hover:underline flex items-center gap-1">
        See the full architecture
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full flex items-center" data-name="Container">
      <Link9 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="Container:margin">
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1100px] relative shrink-0 w-[1100px]" data-name="Container">
      <Paragraph7 />
      <Heading5 />
      <ParagraphMargin1 />
      <Container29 />
      <ContainerMargin7 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container28 />
    </div>
  );
}

function Section4({ isLight }: { isLight?: boolean }) {
  return <HowSynapWorks isLight={isLight} />;
}

function Container31() {
  return null;
}

function Section5({ isLight }: { isLight?: boolean }) {
  return (
    <div
      className={`content-stretch flex flex-col items-center justify-center px-6 sm:px-10 py-[48px] sm:py-[64px] relative shrink-0 w-full border-y transition-colors duration-200 ${
        isLight
          ? "bg-[#ffffff] border-[#e4e4e7]"
          : "bg-[#090a0d] border-white/[0.08]"
      }`}
      style={{
        backgroundImage: isLight
          ? "radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)"
          : "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      data-name="Section5"
    >
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
        <BenchmarkComparison isLight={isLight} />
      </div>
    </div>
  );
}

function Container36() {
  return null;
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex items-center gap-2 mb-3">
        <span className="size-2 rounded-[2px] bg-[#f26522] inline-block shrink-0" />
        <span className="font-['Geist_Mono_Variable:Regular',sans-serif] text-[12px] font-mono text-[#a1a1aa] tracking-[1.4px] uppercase font-medium">
          RESEARCH &amp; DEEP-DIVES
        </span>
      </div>
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[52px] not-italic relative shrink-0 text-[36px] md:text-[46px] text-center text-white tracking-[-1.0884px]">Learn about Context Engineering</p>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[14px] relative shrink-0 w-full max-w-[680px]" data-name="Paragraph:margin">
      <p className="font-['Geist_Variable:Regular',sans-serif] leading-[24px] text-[#a1a1aa] text-[16px] text-center tracking-[-0.3125px]">
        <span>{`Discover how `}</span>
        <span className="font-['Geist_Variable:Medium',sans-serif] text-white">AI context</span>
        <span>{` and memory work. Check our `}</span>
        <span className="font-['Geist_Variable:Medium',sans-serif] text-white">use cases</span>
        <span>{` and `}</span>
        <span className="font-['Geist_Variable:Medium',sans-serif] text-white">Synap</span>
        <span>.</span>
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-auto items-center justify-center pb-[40px] px-4 relative shrink-0 w-full max-w-[1140px]" data-name="Container">
      <Heading7 />
      <ParagraphMargin2 />
    </div>
  );
}

function ImageClaudeSkillsForAiEngineers2026MidYearEdition11SkillsThatFillLastYearsGaps() {
  return (
    <div className="h-[170px] relative rounded-[16px] shrink-0 w-full" data-name="Image (Claude Skills for AI Engineers: 2026 Mid-Year Edition: 11 Skills That Fill Last Year's Gaps)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImageClaudeSkillsForAiEngineers2026MidYearEdition11SkillsThatFillLastYearsGaps} />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[170px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <ImageClaudeSkillsForAiEngineers2026MidYearEdition11SkillsThatFillLastYearsGaps />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[356.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.1697px] w-[353px]">{`Claude Skills for AI Engineers: 2026 Mid-Year Edition: 11 Skills That Fill Last Year's Gaps`}</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pt-[12px] relative shrink-0 w-[356.664px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a1a1aa] text-[13px] tracking-[-0.0762px] whitespace-nowrap">Claude Skills for AI Engineers.</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[16px] relative shrink-0 w-[356.664px]" data-name="Container">
      <Heading8 />
      <Paragraph11 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="size-3.5 text-[#8e8e93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">August 10, 2026</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[20px] top-[365.59px]" data-name="Container">
      <Icon14 />
      <Text75 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[325.32px] top-[321.59px]" data-name="Container">
      <Container45 />
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">Read More</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-[#322f2b] border border-[#423f39] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[20px] shrink-0 w-full" data-name="Link">
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container40() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Link11 />
    </div>
  );
}

function ImageMcp2026072820BreakingChangesAndTheErrorsTheyCause() {
  return (
    <div className="h-[170px] relative rounded-[16px] shrink-0 w-full" data-name="Image (MCP 2026-07-28: 20 Breaking Changes and the Errors They Cause)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImageMcp2026072820BreakingChangesAndTheErrorsTheyCause} />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col h-[170px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <ImageMcp2026072820BreakingChangesAndTheErrorsTheyCause />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[356.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.1697px] w-[353px]">MCP 2026-07-28: 20 Breaking Changes and the Errors They Cause</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[356.664px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a1a1aa] text-[13px] tracking-[-0.0762px] w-[357px]">MCP 2026-07-28 removed sessions, the initialize handshake, and the ability for servers to initiate requests at all. It is wire-incompatible...</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[16px] relative shrink-0 w-[356.664px]" data-name="Container">
      <Heading9 />
      <Paragraph12 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="size-3.5 text-[#8e8e93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    </div>
  );
}

function Text76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">July 29, 2026</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[20px] top-[413.59px]" data-name="Container">
      <Icon16 />
      <Text76 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[325.32px] top-[369.59px]" data-name="Container">
      <Container51 />
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">Read More</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[#322f2b] border border-[#423f39] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[20px] shrink-0 w-full" data-name="Link">
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function ImageAgenticContextManagementAgentMemoryIsNotMerelyAStorageRetrievalProblemItIsAnArchitectureProblem() {
  return (
    <div className="h-[170px] relative rounded-[16px] shrink-0 w-full" data-name="Image (Agentic Context Management: Agent Memory Is Not Merely a Storage & Retrieval Problem, It Is an Architecture Problem)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImageAgenticContextManagementAgentMemoryIsNotMerelyAStorageRetrievalProblemItIsAnArchitectureProblem} />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col h-[170px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <ImageAgenticContextManagementAgentMemoryIsNotMerelyAStorageRetrievalProblemItIsAnArchitectureProblem />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[356.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.1697px] w-[353px]">{`Agentic Context Management: Agent Memory Is Not Merely a Storage & Retrieval Problem, It Is an Architecture Problem`}</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[356.664px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a1a1aa] text-[13px] tracking-[-0.0762px] w-[357px]">We argue in our latest paper, that agent memory and cost is a lifecycle and architecture problem</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[16px] relative shrink-0 w-[356.664px]" data-name="Container">
      <Heading10 />
      <Paragraph13 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="size-3.5 text-[#8e8e93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    </div>
  );
}

function Text77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">July 25, 2026</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[20px] top-[420.78px]" data-name="Container">
      <Icon18 />
      <Text77 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[325.32px] top-[376.78px]" data-name="Container">
      <Container57 />
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">Read More</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-[#322f2b] border border-[#423f39] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[20px] shrink-0 w-full" data-name="Link">
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Link13 />
    </div>
  );
}

function ResearchCardsGrid() {
  const articles = [
    {
      img: imgImageClaudeSkillsForAiEngineers2026MidYearEdition11SkillsThatFillLastYearsGaps,
      category: "SKILLS DIRECTORY",
      title: "Claude Skills for AI Engineers: 2026 Mid-Year Edition: 11 Skills That Fill Last Year's Gaps",
      summary: "Curated technical cheat-sheets for context scaffolding, MCP server interfaces, and long-turn state management across autonomous agents.",
      date: "August 10, 2026",
      url: "https://www.maximem.ai/blog/claude-skills-for-ai-engineers-2026",
    },
    {
      img: imgImageMcp2026072820BreakingChangesAndTheErrorsTheyCause,
      category: "PROTOCOL SPEC",
      title: "MCP 2026-07-28: 20 Breaking Changes and the Errors They Cause",
      summary: "MCP 2026-07-28 removed sessions, the initialize handshake, and the ability for servers to initiate requests at all. Breaking wire changes explained.",
      date: "July 29, 2026",
      url: "https://www.maximem.ai/blog/mcp-2026-07-28-breaking-changes",
    },
    {
      img: imgImageAgenticContextManagementAgentMemoryIsNotMerelyAStorageRetrievalProblemItIsAnArchitectureProblem,
      category: "CORE RESEARCH",
      title: "Agentic Context Management: Agent Memory Is an Architecture Problem",
      summary: "We argue in our latest paper that agent memory and token cost must be treated as lifecycle and architecture problems, not simple vector lookups.",
      date: "July 25, 2026",
      url: "https://www.maximem.ai/blog/agentic-context-management-paper",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1140px] my-2">
      {articles.map((art, idx) => (
        <a
          key={idx}
          href={art.url}
          target="_blank"
          rel="noopener noreferrer"
          className="research-card group flex flex-col justify-between rounded-[6px] bg-[#141412] border border-white/[0.08] hover:border-[#f26522]/60 transition-all duration-300 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(242,101,34,0.12),0_10px_30px_rgba(0,0,0,0.7)] cursor-pointer select-none"
        >
          {/* Top image banner */}
          <div className="relative w-full h-[200px] shrink-0 bg-[#181816] overflow-hidden border-b border-white/[0.06] flex items-center justify-center">
            <img
              src={art.img}
              alt={art.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            {/* Ambient bottom gradient so image blends into card body */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#141412] to-transparent pointer-events-none z-[2]" />
            
            {/* Category tag */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[3px] bg-[#0e0e0d]/90 backdrop-blur-md border border-[#f26522]/30 text-[9.5px] font-mono font-medium text-[#f26522] tracking-wider uppercase z-10 shadow-sm">
              {art.category}
            </div>

            {/* HUD crosshair */}
            <div className="absolute top-2.5 right-3 text-[10px] font-mono text-[#635e54] select-none pointer-events-none z-10">
              +
            </div>
          </div>

          {/* Body content */}
          <div className="p-6 flex flex-col flex-1 justify-between bg-[#141412] relative z-10">
            <div>
              {/* Title with exact fixed height so subtitle starts at identical pixel across all cards */}
              <div className="h-[56px] flex items-start mb-2">
                <h3 className="text-[16px] font-semibold text-white group-hover:text-[#ff8a48] transition-colors leading-[23px] tracking-tight line-clamp-2">
                  {art.title}
                </h3>
              </div>

              {/* Subtitle with exact fixed height so footer starts at identical pixel across all cards */}
              <div className="h-[64px] flex items-start mb-4">
                <p className="text-[12.5px] text-[#a1a1aa] leading-[20px] line-clamp-3">
                  {art.summary}
                </p>
              </div>
            </div>

            {/* Bottom metadata & action row */}
            <div className="pt-2 flex items-center justify-between">
              {/* Date */}
              <div className="flex items-center gap-1.5 text-[11.5px] font-mono text-[#71717a]">
                <svg className="size-3.5 text-[#8e8e93] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <span>{art.date}</span>
              </div>

              {/* Read More button */}
              <div className="h-[32px] px-3.5 rounded-[4px] bg-white text-black font-semibold text-[12px] flex items-center gap-1.5 group-hover:bg-[#f26522] group-hover:text-white transition-all duration-200 shadow-sm group-hover:shadow-[0_0_12px_rgba(242,101,34,0.35)]">
                <span>Read More</span>
                <svg className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Container39() {
  return <ResearchCardsGrid />;
}

function Container58() {
  return (
    <div className="flex items-center justify-center w-full pt-8">
      <a
        href="https://www.maximem.ai/blog"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#141412] hover:bg-[#1a1917] border border-white/[0.12] hover:border-[#f26522]/60 text-[13px] font-medium text-[#d4d4d8] hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_16px_rgba(242,101,34,0.25)]"
      >
        <span>Read all research papers &amp; engineering articles</span>
        <span className="text-[#f26522] transition-transform duration-200 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

function Section6({ isLight }: { isLight?: boolean }) {
  return <BlogSection isLight={isLight} />;
}

function Container59() {
  return <div className="h-px relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(89.99999999999349deg, rgb(242, 101, 34) 0%, rgb(66, 63, 57) 12%, rgb(66, 63, 57) 88%, rgba(66, 63, 57, 0) 100%)" }} data-name="Container" />;
}

function Canvas1() {
  return (
    <div className="absolute h-[130px] left-1/2 -translate-x-1/2 top-0 w-full min-w-[1425px]" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCanvas1} />
    </div>
  );
}

function Heading11({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Heading 2">
      <p className={`[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[33px] not-italic relative shrink-0 text-[24px] tracking-[0.0703px] w-[448px] font-semibold ${
        isLight ? "text-[#09090b]" : "text-white"
      }`}>The difference between a demo and a product is memory.</p>
    </div>
  );
}

function Button3() {
  return (
    <a
      href="/signup"
      className="bg-[#f26522] content-stretch shadow-[0px_2px_10px_rgba(242,101,34,0.3)] flex items-center justify-center px-[22px] py-[10px] rounded-[4px] cursor-pointer hover:bg-[#e05310] transition-all"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[14.5px] text-white text-center tracking-[-0.2344px] whitespace-nowrap font-semibold">Get Started Free</p>
    </a>
  );
}

function Container62() {
  return (
    <div className="h-[42px] relative shrink-0" data-name="Container">
      <Button3 />
    </div>
  );
}

function Link14({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <a href="/contact" className={`[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[14.5px] tracking-[-0.2344px] whitespace-nowrap transition-colors cursor-pointer ${
        isLight ? "text-[#52525b] hover:text-[#09090b]" : "text-[#a1a1aa] hover:text-white"
      }`}>Talk to the founder →</a>
    </div>
  );
}

function Container61({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <Container62 />
      <Link14 isLight={isLight} />
    </div>
  );
}

function Container60({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <Heading11 isLight={isLight} />
      <Container61 isLight={isLight} />
    </div>
  );
}

function ContainerMargin9({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center px-6 sm:px-10 lg:px-14 xl:px-16 py-10 w-full max-w-[1920px] mx-auto z-10 relative" data-name="Container:margin">
      <Container60 isLight={isLight} />
    </div>
  );
}

function Section8({ isLight }: { isLight?: boolean }) {
  return (
    <div className={`min-h-[120px] relative shrink-0 w-full flex items-center justify-center border-t transition-colors duration-200 ${
      isLight ? "bg-[#fafafa] border-[#e4e4e7]" : "bg-[#0c0c0e] border-white/[0.08]"
    }`} data-name="Section">
      <ContainerMargin9 isLight={isLight} />
    </div>
  );
}

function Section7({ isLight }: { isLight?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col items-center justify-center relative shrink-0 w-full transition-colors duration-200 ${
      isLight ? "bg-[#fafafa]" : "bg-[#0c0c0e]"
    }`} data-name="Section">
      <Section8 isLight={isLight} />
    </div>
  );
}

function MainContent({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Main Content">
      <Section isLight={isLight} />
      <Section1 isLight={isLight} />
      <Section2 isLight={isLight} />
      <Section3 isLight={isLight} />
      <Section4 isLight={isLight} />
      <Section5 isLight={isLight} />
      <Section6 isLight={isLight} />
      <Section7 isLight={isLight} />
    </div>
  );
}

function ImageMaximemLogo() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Image (Maximem Logo)">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="Image (Maximem Logo)">
          <path d={svgPaths.p807ad80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.4395px] whitespace-nowrap">Maximem</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageMaximemLogo />
      <Text79 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#a1a1aa] text-[16px] tracking-[-0.3125px] w-[560px]">AI memory infrastructure. Maximem Synap gives agents persistent context management. Maximem Vity gives individuals private, cross-app AI memory.</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="border border-[rgba(255,255,255,0.15)] border-solid h-[38px] relative rounded-[9999px] shrink-0 w-[258.227px]" data-name="Link">
      <p className="absolute font-['Geist_Variable:Medium',sans-serif] leading-[20px] left-[16px] text-[14px] text-white top-[7px] tracking-[-0.1504px]">Synap Dashboard</p>
      <p className="absolute font-['Geist_Variable:Regular',sans-serif] leading-[16px] left-[139.57px] text-[#a1a1aa] text-[12px] top-[10px]">synap.maximem.ai</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="border border-[rgba(255,255,255,0.15)] border-solid h-[38px] relative rounded-[9999px] shrink-0 w-[231.125px]" data-name="Link">
      <p className="absolute font-['Geist_Variable:Medium',sans-serif] leading-[20px] left-[16px] text-[14px] text-white top-[7px] tracking-[-0.1504px]">Vity Dashboard</p>
      <p className="absolute font-['Geist_Variable:Regular',sans-serif] leading-[16px] left-[124.44px] text-[#a1a1aa] text-[12px] top-[10px]">app.maximem.ai</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Container">
      <Link15 />
      <Link16 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[560px] relative shrink-0" data-name="Container">
      <Container65 />
      <Paragraph15 />
      <Container66 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.pba1780} id="Vector" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LinkTwitter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Twitter">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p204bd7c0} id="Vector" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pad25e80} id="Vector_2" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p127a4d00} id="Vector_3" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LinkLinkedIn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - LinkedIn">
      <Icon23 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[8px] relative shrink-0" data-name="Container">
      <LinkTwitter />
      <LinkLinkedIn />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1400px] px-[64px] relative shrink-0 w-[1400px]" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container63 />
    </div>
  );
}

function Container69() {
  return <div className="bg-gradient-to-r from-[#f26522] h-px relative shrink-0 to-[rgba(66,63,57,0)] via-[#423f39] via-[55%] w-[80px]" data-name="Container" />;
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1400px] px-[64px] relative shrink-0 w-[1400px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[32px] relative shrink-0 w-full" data-name="Container:margin">
      <Container68 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Product</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap Pricing</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap Security</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Maximem Vity</p>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Cross-App AI Memory</p>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Chrome Extension</p>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">OpenClaw Plugin</p>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Hermes Plugin</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col h-[232px] items-start pt-[16px] relative shrink-0 w-[185.328px]" data-name="List">
      <ListItem29 />
      <ListItem30 />
      <ListItem31 />
      <ListItem32 />
      <ListItem33 />
      <ListItem34 />
      <ListItem35 />
      <ListItem36 />
    </div>
  );
}

function Container71() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading12 />
      <List6 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Developers</p>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap Docs</p>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Quickstart</p>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Framework Integrations</p>
    </div>
  );
}

function ListItem40() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap on GitHub</p>
    </div>
  );
}

function ListItem41() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">GitHub</p>
    </div>
  );
}

function ListItem42() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Talk to the founder</p>
    </div>
  );
}

function ListItem43() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap Playground</p>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col h-[204px] items-start pt-[16px] relative shrink-0 w-[185.336px]" data-name="List">
      <ListItem37 />
      <ListItem38 />
      <ListItem39 />
      <ListItem40 />
      <ListItem41 />
      <ListItem42 />
      <ListItem43 />
    </div>
  );
}

function Container72() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading13 />
      <List7 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Compare</p>
    </div>
  );
}

function ListItem44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap #1 on LongMemEval</p>
    </div>
  );
}

function ListItem45() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Vity vs Mem0 vs Supermemory</p>
    </div>
  );
}

function ListItem46() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs alternatives</p>
    </div>
  );
}

function ListItem47() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Mem0 vs Zep (and 5 others) →</p>
    </div>
  );
}

function ListItem48() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs Mem0</p>
    </div>
  );
}

function ListItem49() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs Zep</p>
    </div>
  );
}

function ListItem50() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs Letta</p>
    </div>
  );
}

function ListItem51() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs Supermemory</p>
    </div>
  );
}

function ListItem52() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs Cognee</p>
    </div>
  );
}

function ListItem53() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap vs Evermind</p>
    </div>
  );
}

function ListItem54() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pt-[16px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Mem0 alternatives</p>
    </div>
  );
}

function ListItem55() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Zep alternatives</p>
    </div>
  );
}

function ListItem56() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Letta alternatives</p>
    </div>
  );
}

function ListItem57() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Supermemory alternatives</p>
    </div>
  );
}

function ListItem58() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Cognee alternatives</p>
    </div>
  );
}

function ListItem59() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Evermind alternatives</p>
    </div>
  );
}

function ListItem60() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pt-[16px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Cost calculator (TCO)</p>
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col h-[500px] items-start pt-[16px] relative shrink-0 w-[185.328px]" data-name="List">
      <ListItem44 />
      <ListItem45 />
      <ListItem46 />
      <ListItem47 />
      <ListItem48 />
      <ListItem49 />
      <ListItem50 />
      <ListItem51 />
      <ListItem52 />
      <ListItem53 />
      <ListItem54 />
      <ListItem55 />
      <ListItem56 />
      <ListItem57 />
      <ListItem58 />
      <ListItem59 />
      <ListItem60 />
    </div>
  );
}

function Container73() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading14 />
      <List8 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Use Cases</p>
    </div>
  );
}

function ListItem61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap · Healthcare</p>
    </div>
  );
}

function ListItem62() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap · Customer Support</p>
    </div>
  );
}

function ListItem63() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap · Sales</p>
    </div>
  );
}

function ListItem64() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap · Voice AI</p>
    </div>
  );
}

function ListItem65() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Synap · Multi-Agent</p>
    </div>
  );
}

function ListItem66() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Vity · Personalized Workflow</p>
    </div>
  );
}

function ListItem67() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Vity · Professional Roles</p>
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-col h-[204px] items-start pt-[16px] relative shrink-0 w-[185.336px]" data-name="List">
      <ListItem61 />
      <ListItem62 />
      <ListItem63 />
      <ListItem64 />
      <ListItem65 />
      <ListItem66 />
      <ListItem67 />
    </div>
  );
}

function Container74() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading15 />
      <List9 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Company</p>
    </div>
  );
}

function ListItem68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">About</p>
    </div>
  );
}

function ListItem69() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Blog</p>
    </div>
  );
}

function ListItem70() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Learn</p>
    </div>
  );
}

function ListItem71() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Research</p>
    </div>
  );
}

function ListItem72() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Products</p>
    </div>
  );
}

function ListItem73() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Press</p>
    </div>
  );
}

function ListItem74() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.336px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Press Kit</p>
    </div>
  );
}

function List10() {
  return (
    <div className="content-stretch flex flex-col h-[204px] items-start pt-[16px] relative shrink-0 w-[185.336px]" data-name="List">
      <ListItem68 />
      <ListItem69 />
      <ListItem70 />
      <ListItem71 />
      <ListItem72 />
      <ListItem73 />
      <ListItem74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading16 />
      <List10 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Vity</p>
    </div>
  );
}

function ListItem75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Apps</p>
    </div>
  );
}

function ListItem76() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Echo</p>
    </div>
  );
}

function ListItem77() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">WaitPro</p>
    </div>
  );
}

function ListItem78() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Summarize For Me</p>
    </div>
  );
}

function ListItem79() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Sound Like Me</p>
    </div>
  );
}

function ListItem80() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Skills</p>
    </div>
  );
}

function ListItem81() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pt-[16px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Integrations</p>
    </div>
  );
}

function ListItem82() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">OpenClaw</p>
    </div>
  );
}

function ListItem83() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Hermes</p>
    </div>
  );
}

function ListItem84() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-[185.328px]" data-name="List Item">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Chrome Extension</p>
    </div>
  );
}

function List11() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start pt-[16px] relative shrink-0 w-[185.328px]" data-name="List">
      <ListItem75 />
      <ListItem76 />
      <ListItem77 />
      <ListItem78 />
      <ListItem79 />
      <ListItem80 />
      <ListItem81 />
      <ListItem82 />
      <ListItem83 />
      <ListItem84 />
    </div>
  );
}

function Container76() {
  return (
    <div className="col-6 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading17 />
      <List11 />
    </div>
  );
}

function Container70() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[______185.33px_185.34px_185.33px_185.34px_185.34px_185.33px] grid-rows-[_524px] max-w-[1400px] px-[64px] relative shrink-0 w-[1400px]" data-name="Container">
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function ContainerMargin12() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-name="Container:margin">
      <Container70 />
    </div>
  );
}

function Text80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">© 2026 Maximem</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="white" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonOpenCustomerSupportChat() {
  return (
    <div className="bg-[#f26522] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button - Open customer support chat">
      <Icon24 />
      <p className="[word-break:break-word] font-['Geist_Variable:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">Chat with us</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Privacy Policy</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Terms of Service</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Security</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Glossary</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <ButtonOpenCustomerSupportChat />
      <Link17 />
      <Link18 />
      <Link19 />
      <Link20 />
      <Link21 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1400px] px-[64px] relative shrink-0 w-[1400px]" data-name="Container">
      <Text80 />
      <Container78 />
    </div>
  );
}

function ContainerMargin13() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[48px] relative shrink-0 w-full" data-name="Container:margin">
      <Container77 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[40px] relative shrink-0 w-full" data-name="Footer">
      <ContainerMargin10 />
      <ContainerMargin11 />
      <ContainerMargin12 />
      <ContainerMargin13 />
    </div>
  );
}

function Footer({ isLight }: { isLight?: boolean }) {
  return <FooterSection isLight={isLight} />;
}

function Container({ isLight }: { isLight?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col items-center min-h-[807px] relative shrink-0 w-full transition-colors duration-200 ${
      isLight ? "bg-[#ffffff] text-[#09090b]" : "bg-[#090a0d] text-white"
    }`} data-name="Container">
      <Header />
      <MainContent isLight={isLight} />
      <Footer isLight={isLight} />
    </div>
  );
}

function Body({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col h-auto items-center min-h-[807px] relative shrink-0 w-full" data-name="Body">
      <Container isLight={isLight} />
    </div>
  );
}

function ImageMaximem() {
  return (
    <div className="relative shrink-0 size-[38px] sm:size-[42px]" data-name="Image (Maximem)">
      <svg className="block size-full" fill="none" viewBox="0 0 40 40">
        <g id="Image (Maximem Logo)">
          <path d={svgPaths.p807ad80} fill="#f26522" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text81({ isLight }: { isLight?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className={`font-['Geist_Variable:Bold',sans-serif] leading-none not-italic text-[23px] sm:text-[25px] font-semibold tracking-[-0.02em] whitespace-nowrap ${
        isLight ? "text-[#09090b]" : "text-white"
      }`}>Maximem</p>
    </div>
  );
}

function Link22({ isLight }: { isLight?: boolean }) {
  return (
    <a href="#" className="flex gap-[10px] items-center relative shrink-0 group cursor-pointer" data-name="Link">
      <ImageMaximem />
      <Text81 isLight={isLight} />
    </a>
  );
}

function Container80({ isLight }: { isLight?: boolean }) {
  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Pricing", href: "#pricing" },
    { label: "Playground", href: "#playground" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Why Memory", href: "#why-memory" },
    { label: "Integrations", href: "#integrations" },
    { label: "Docs", href: "#docs" },
    { label: "Blog & Resources", href: "#blog" },
  ];

  return (
    <div className="flex items-center gap-[22px] xl:gap-[28px]" data-name="Container">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`font-['Geist_Variable:Regular',sans-serif] text-[13.5px] transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap cursor-pointer ${
            isLight
              ? "text-[#52525b] hover:text-[#09090b]"
              : "text-[#a1a1aa] hover:text-white"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function Button4({ isLight }: { isLight?: boolean }) {
  return (
    <a
      href="/signup"
      className={`group h-[36px] px-4 rounded-[4px] border flex items-center justify-center cursor-pointer hover:-translate-y-0.5 transition-all duration-200 shadow-sm shrink-0 ${
        isLight
          ? "bg-[#09090b] text-white border-[#27272a] hover:bg-[#27272a]"
          : "bg-[#f26522] text-white border-[#f26522] hover:bg-[#ff7533]"
      }`}
      data-name="Button"
    >
      <span className="font-['Geist_Variable:Medium',sans-serif] leading-none text-[13.5px] font-medium tracking-[-0.01em]">
        Get Started Free
      </span>
    </a>
  );
}

function ThemeToggleButton({ isLight, onToggle }: { isLight?: boolean; onToggle?: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`size-[36px] rounded-[4px] border flex items-center justify-center transition-all mr-3 cursor-pointer shadow-sm active:scale-95 ${
        isLight
          ? "bg-black/[0.04] hover:bg-black/[0.08] border-[#e4e4e7] text-zinc-700 hover:text-black"
          : "bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.1] text-zinc-300 hover:text-white"
      }`}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Theme toggle"
    >
      {isLight ? (
        <svg className="size-4 text-[#f26522]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg className="size-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </button>
  );
}

function Navigation({ isLight, onToggleTheme }: { isLight?: boolean; onToggleTheme?: () => void }) {
  return (
    <nav
      style={{ top: "44px" }}
      className={`fixed left-0 right-0 w-full h-[64px] backdrop-blur-[16px] z-50 px-6 md:px-12 flex items-center justify-between transition-colors duration-200 ${
        isLight
          ? "bg-white/90 border-b border-[#e4e4e7]"
          : "bg-[#090a0d]/90 border-b border-white/[0.08]"
      }`}
      data-name="Navigation"
    >
      <div className="w-full max-w-[1425px] mx-auto flex items-center justify-between relative h-full">
        <Link22 isLight={isLight} />
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <Container80 isLight={isLight} />
        </div>
        <div className="flex items-center">
          <ThemeToggleButton isLight={isLight} onToggle={onToggleTheme} />
          <Button4 isLight={isLight} />
        </div>
      </div>
    </nav>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="white" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonOpenSupportChat() {
  return (
    <div className="absolute bg-[#f26522] content-stretch drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex items-center justify-center left-[1349px] rounded-[9999px] size-[56px] top-[731px]" data-name="Button - Open support chat">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d="M6 18L18 6M6 6L18 18" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCloseMenu() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative shrink-0" data-name="Button - Close menu">
      <Icon27 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-start justify-end p-[16px] relative shrink-0 w-full" data-name="Container">
      <ButtonCloseMenu />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[1.2px] uppercase whitespace-nowrap">Products</p>
    </div>
  );
}

function Link28() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.2344px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['Geist_Variable:Semi_Bold',sans-serif] leading-[22.5px] text-[15px]">Synap</span>
        <span className="font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] text-[15px]">: AI Agents Memory</span>
      </p>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link28 />
    </div>
  );
}

function Link29() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">How Synap works</p>
    </div>
  );
}

function Link30() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.2344px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['Geist_Variable:Semi_Bold',sans-serif] leading-[22.5px] text-[15px]">Vity</span>
        <span className="font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] text-[15px]">: Personal Memory Vault</span>
      </p>
    </div>
  );
}

function Link31() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Apps</p>
    </div>
  );
}

function Link32() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Integrations</p>
    </div>
  );
}

function Link33() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Add to Chrome</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <LinkMargin />
      <Link29 />
      <Link30 />
      <Link31 />
      <Link32 />
      <Link33 />
    </div>
  );
}

function Container89() {
  return <div className="border-[rgba(255,255,255,0.1)] border-solid border-t h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container89 />
    </div>
  );
}

function Link34() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[14px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Pricing</p>
    </div>
  );
}

function Container90() {
  return <div className="border-[rgba(255,255,255,0.1)] border-solid border-t h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container90 />
    </div>
  );
}

function Link35() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[14px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Playground</p>
    </div>
  );
}

function Container91() {
  return <div className="border-[rgba(255,255,255,0.1)] border-solid border-t h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin16() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[1.2px] uppercase whitespace-nowrap">Use Cases</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.3)] tracking-[1.1645px] uppercase whitespace-nowrap">For Synap</p>
    </div>
  );
}

function Text83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.3)] tracking-[1.1645px] uppercase whitespace-nowrap">See all →</p>
    </div>
  );
}

function Link36() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <Text82 />
      <Text83 />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link36 />
    </div>
  );
}

function Link37() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Healthcare</p>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Link:margin">
      <Link37 />
    </div>
  );
}

function Link38() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Customer Support</p>
    </div>
  );
}

function Link39() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Sales</p>
    </div>
  );
}

function Link40() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Voice AI</p>
    </div>
  );
}

function Link41() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Multi-Agent</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start pl-[12px] pt-[16px] relative shrink-0 w-[807px]" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.3)] tracking-[1.1645px] uppercase whitespace-nowrap">For Vity</p>
    </div>
  );
}

function Link42() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Personalized Workflow Acceleration</p>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Link:margin">
      <Link42 />
    </div>
  );
}

function Link43() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">For Every Professional Role</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <LinkMargin1 />
      <LinkMargin2 />
      <Link38 />
      <Link39 />
      <Link40 />
      <Link41 />
      <Container94 />
      <LinkMargin3 />
      <Link43 />
    </div>
  );
}

function Container95() {
  return <div className="border-[rgba(255,255,255,0.1)] border-solid border-t h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container95 />
    </div>
  );
}

function Text84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[1.2px] uppercase whitespace-nowrap">Why Memory</p>
    </div>
  );
}

function Text85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[14.667px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.3)] tracking-[1.2645px] uppercase whitespace-nowrap">See all →</p>
    </div>
  );
}

function Link44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Link">
      <Text84 />
      <Text85 />
    </div>
  );
}

function Link45() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Memory vs context windows</p>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link45 />
    </div>
  );
}

function Link46() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Memory vs vector RAG</p>
    </div>
  );
}

function Link47() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Memory vs agent skills</p>
    </div>
  );
}

function Link48() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Build vs buy agent memory</p>
    </div>
  );
}

function Link49() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Measuring agent memory</p>
    </div>
  );
}

function Link50() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Memory privacy and ownership</p>
    </div>
  );
}

function Link51() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">How agent memory works</p>
    </div>
  );
}

function Container97() {
  return <div className="border-[rgba(255,255,255,0.1)] border-solid border-t h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container97 />
    </div>
  );
}

function Text86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Building AI Agents That Remember</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-start pt-[4px] relative shrink-0 w-[795px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[1.1645px] uppercase whitespace-nowrap">Free course · 75 minutes · 7 lessons</p>
    </div>
  );
}

function Link52() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <Text86 />
      <Text87 />
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link52 />
    </div>
  );
}

function Text88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">What 35 Research Papers Say About Agent Skills</p>
    </div>
  );
}

function Text89() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-start pt-[4px] relative shrink-0 w-[795px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[1.1645px] uppercase whitespace-nowrap">Research · 35 papers · 299 claims</p>
    </div>
  );
}

function Link53() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] py-[10px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <Text88 />
      <Text89 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Link44 />
      <LinkMargin4 />
      <Link46 />
      <Link47 />
      <Link48 />
      <Link49 />
      <Link50 />
      <Link51 />
      <ContainerMargin18 />
      <LinkMargin5 />
      <Link53 />
    </div>
  );
}

function Container98() {
  return <div className="border-[rgba(255,255,255,0.1)] border-solid border-t h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin19() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container98 />
    </div>
  );
}

function Link54() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[14px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Integrations</p>
    </div>
  );
}

function Link55() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[14px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">Docs</p>
    </div>
  );
}

function Link56() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[14px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2344px] whitespace-nowrap">{`Blog & Resources`}</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[1.1645px] uppercase whitespace-nowrap">Get started free</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist_Variable:Semi_Bold',sans-serif] leading-[20px] left-[383.5px] not-italic text-[14px] text-black text-center top-[-0.86px] tracking-[-0.1504px] whitespace-nowrap">Synap Dashboard</p>
    </div>
  );
}

function Text90() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center pt-[2px] relative shrink-0 w-[767px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[15.714px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.5)] text-center tracking-[0.0645px] whitespace-nowrap">For developers building agent memory</p>
    </div>
  );
}

function Link57() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[12px] relative rounded-[9999px] shrink-0 w-[807px]" data-name="Link">
      <Container101 />
      <Text90 />
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Link:margin">
      <Link57 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist_Variable:Semi_Bold',sans-serif] leading-[20px] left-[382.55px] not-italic text-[14px] text-center text-white top-[-0.86px] tracking-[-0.1504px] whitespace-nowrap">Vity Dashboard</p>
    </div>
  );
}

function Text91() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center pt-[2px] relative shrink-0 w-[765px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist_Variable:Regular',sans-serif] leading-[15.714px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] text-center tracking-[0.0645px] whitespace-nowrap">For individuals using AI every day</p>
    </div>
  );
}

function Link58() {
  return (
    <div className="border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex flex-col items-start px-[20px] py-[12px] relative rounded-[9999px] shrink-0 w-[807px]" data-name="Link">
      <Container102 />
      <Text91 />
    </div>
  );
}

function LinkMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Link:margin">
      <Link58 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col h-[214px] items-start pb-[20px] pt-[28px] px-[24px] relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <LinkMargin6 />
      <LinkMargin7 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col h-[727px] items-start max-h-[727px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <ContainerMargin14 />
      <Link34 />
      <ContainerMargin15 />
      <Link35 />
      <ContainerMargin16 />
      <Container92 />
      <ContainerMargin17 />
      <Container96 />
      <ContainerMargin19 />
      <Link54 />
      <Link55 />
      <Link56 />
      <Container99 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-[#27272a] content-stretch drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] flex flex-col h-[807px] items-start left-[3706px] top-[-3310px] w-[855px]" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Button5() {
  return <div className="bg-[#2f2f27] h-[48px] min-w-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.09)] shrink-0 w-[40px]" data-name="Button" />;
}

function Container105() {
  return (
    <div className="h-[48px] pointer-events-none relative shrink-0 w-[2px]" data-name="Container">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute bg-[#2f2f27] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-1/2 left-[-550%] max-w-none top-1/4 w-[1200%]" src={imgContainer} />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-l border-r border-solid inset-0" />
    </div>
  );
}

function ImageApollo() {
  return (
    <div className="absolute left-0 size-[40px] top-[4px]" data-name="Image (Apollo)">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="Image (Apollo)">
          <path d={svgPaths.p1dc4e300} fill="#EBF212" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[1383px] top-[-145.27px]" data-name="Container">
      <Button5 />
      <Container105 />
      <ImageApollo />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[359px] top-[511px] w-[1425px]" data-name="Container">
      <Container104 />
    </div>
  );
}

export default function MaximemMemoryAndContextManagementForAiAgents({
  isLightProp,
  onToggleThemeProp,
}: {
  isLightProp?: boolean;
  onToggleThemeProp?: () => void;
} = {}) {
  const [internalIsLight, setInternalIsLight] = useState(false);
  const isLight = isLightProp !== undefined ? isLightProp : internalIsLight;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("maximem_theme");
      if (saved === "light") {
        setInternalIsLight(true);
      } else if (saved === "dark") {
        setInternalIsLight(false);
      }

      const handleToggleEvent = (e: Event) => {
        const customEvent = e as CustomEvent<{ isLight?: boolean }>;
        if (typeof customEvent.detail?.isLight === "boolean") {
          setInternalIsLight(customEvent.detail.isLight);
          localStorage.setItem("maximem_theme", customEvent.detail.isLight ? "light" : "dark");
        } else {
          setInternalIsLight((prev) => {
            const next = !prev;
            localStorage.setItem("maximem_theme", next ? "light" : "dark");
            return next;
          });
        }
      };

      window.addEventListener("toggle-maximem-theme", handleToggleEvent);
      return () => window.removeEventListener("toggle-maximem-theme", handleToggleEvent);
    }
  }, []);

  const handleToggleTheme = () => {
    if (onToggleThemeProp) {
      onToggleThemeProp();
    } else {
      setInternalIsLight((prev) => {
        const next = !prev;
        if (typeof window !== "undefined") {
          localStorage.setItem("maximem_theme", next ? "light" : "dark");
          window.dispatchEvent(new CustomEvent("maximem-theme-changed", { detail: { isLight: next } }));
        }
        return next;
      });
    }
  };

  return (
    <div
      className={`content-stretch flex flex-col items-center justify-start relative size-full min-h-screen w-full overflow-x-hidden transition-colors duration-200 ${
        isLight ? "bg-[#ffffff] text-[#09090b]" : "bg-[#090a0d] text-white"
      }`}
      data-name="Maximem | Memory and context management for AI agents"
    >
      <Navigation isLight={isLight} onToggleTheme={handleToggleTheme} />
      <Body isLight={isLight} />
    </div>
  );
}