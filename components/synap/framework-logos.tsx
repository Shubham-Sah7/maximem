"use client";

import React from "react";

interface FrameworkLogoProps {
  name: string;
  className?: string;
}

export function FrameworkLogo({ name, className = "size-4 shrink-0" }: FrameworkLogoProps) {
  switch (name) {
    case "LangChain":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11 3.5C8 3.5 5.5 6 5.5 9c0 2 .8 3.8 2.2 5.1L7 20h8l-.7-5.9c1.4-1.3 2.2-3.1 2.2-5.1 0-3-2.5-5.5-5.5-5.5z" fill="#00A389" />
          <circle cx="10" cy="8.5" r="1.5" fill="#FFFFFF" />
          <circle cx="10" cy="8.5" r="0.7" fill="#064E3B" />
          <path d="M14.5 8.5l4 1.5-4 1.5V8.5z" fill="#F59E0B" />
          <path d="M7 17.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "LangGraph":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="17" r="2.8" fill="#10B981" />
          <circle cx="18" cy="17" r="2.8" fill="#059669" />
          <circle cx="12" cy="6.5" r="2.8" fill="#34D399" />
          <path d="M8.2 15L10.3 8.8M13.7 8.8l2.1 6.2M8.8 17h6.4" stroke="#6EE7B7" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "LlamaIndex":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M10 2.5l-1 2v3.8l3 3.2h2l1-2V5.5l-1-2-1 1-1.5-1-1 1-1.5-.5V2.5z" fill="#8B5CF6" />
          <path d="M9 11.5v5.5l2 4h2l.5-3 2.5-1 1-5.5H9z" fill="#A855F7" />
          <path d="M7 16l2-1v4H7v-3zm9 0l-1-1v4h2v-3z" fill="#C084FC" />
        </svg>
      );

    case "OpenAI Agents":
      return (
        <svg className={`${className} text-white`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.28 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.08zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .4-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.5zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.02l.14.09 4.78 2.76c.24.14.54.14.78 0l5.85-3.37v2.33a.08.08 0 0 1-.04.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.98v5.68a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14a4.5 4.5 0 0 1-1.65-6.11zm16.1 3.85L12.6 8.38l2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.67a.8.8 0 0 0-.4-.69zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.8.8 0 0 0-.39.68v6.72zm1.14-1.35l2.55-1.47a.78.78 0 0 0 .4-.68V6.44l2.54 1.47a.78.78 0 0 0 .79 0l2.55-1.47v2.92a.78.78 0 0 0 .39.68l2.55 1.47-2.55 1.47a.78.78 0 0 0-.39.68v2.92l-2.55-1.47a.78.78 0 0 0-.79 0l-2.54 1.47v-2.92a.78.78 0 0 0-.4-.68z" />
        </svg>
      );

    case "Pydantic AI":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M5 3h9.5a6.5 6.5 0 0 1 0 13H10v5H5V3z" fill="#E92063" />
          <path d="M10 7.5h4.5a2 2 0 0 1 0 4H10v-4z" fill="#FFFFFF" />
        </svg>
      );

    case "CrewAI":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" stroke="#FF4B26" strokeWidth="1.8" />
          <circle cx="12" cy="8" r="1.8" fill="#FF4B26" />
          <circle cx="8" cy="15" r="1.6" fill="#FF7849" />
          <circle cx="16" cy="15" r="1.6" fill="#FF7849" />
          <path d="M12 9.8v2.8m-2.4 1l-1.3.8m4.9-.8l1.3.8" stroke="#FF4B26" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "AutoGen":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="7" cy="7" r="2.8" fill="#0078D4" />
          <circle cx="17" cy="7" r="2.8" fill="#00BCF2" />
          <circle cx="12" cy="16.5" r="2.8" fill="#2B88D8" />
          <path d="M9 8.5l4 5.5m2-5.5l-4 5.5M7 7h10" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "Google ADK":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" fill="url(#adkGoogleGrad)" />
          <defs>
            <linearGradient id="adkGoogleGrad" x1="2" y1="2" x2="22" y2="22">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#D96570" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "Haystack":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 3v18M7 7l5 4 5-4M7 12l5 4 5-4M8 17l4 3 4-3" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "Agno":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 4L4 20h4.5l1.8-4h7.4l1.8 4H24L16 4h-4zm0 5l2.5 5.5h-5L12 9z" fill="#6366F1" />
        </svg>
      );

    case "Semantic Kernel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.8" fill="#8B5CF6" />
          <path d="M12 2v3.5m0 13V22M2 12h3.5m13 0H22m-3-7l-2.5 2.5m-9 9l-2.5 2.5m0-14l2.5 2.5m9 9l2.5 2.5" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "Microsoft Agent Framework":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8.5" height="8.5" fill="#F25022" />
          <rect x="12.5" y="3" width="8.5" height="8.5" fill="#7FBA00" />
          <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00A4EF" />
          <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#FFB900" />
        </svg>
      );

    case "NeMo Agent Toolkit":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 5c-4.4 0-8 3.1-8 7s3.6 7 8 7c3.8 0 7-2.3 7.8-5.5h-3.2c-.7 1.8-2.5 3-4.6 3-2.8 0-5-2-5-4.5S9.2 7.5 12 7.5c1.8 0 3.3.9 4.2 2.2L18.5 7C16.9 5.8 14.6 5 12 5z" fill="#76B900" />
          <circle cx="12" cy="12" r="2.2" fill="#76B900" />
        </svg>
      );

    case "LiveKit Agents":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="9" width="2.5" height="6" rx="1.2" fill="#00FFE0" />
          <rect x="8.5" y="5" width="2.5" height="14" rx="1.2" fill="#00FFE0" />
          <rect x="13.5" y="7.5" width="2.5" height="9" rx="1.2" fill="#00FFE0" />
          <rect x="18" y="10" width="2.5" height="4" rx="1.2" fill="#00FFE0" />
        </svg>
      );

    case "Pipecat":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 11V6l4.5 3.5h7L20 6v5c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#FF6B6B" />
          <circle cx="9" cy="13" r="1.2" fill="#FFFFFF" />
          <circle cx="15" cy="13" r="1.2" fill="#FFFFFF" />
          <path d="M12 14.5v1.2m-1.5-.4h3" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );

    case "Claude Agent SDK":
      return (
        <img
          src="/icons/devicon_claude.png"
          alt="Claude"
          className={`${className} object-contain shrink-0`}
        />
      );

    case "Mastra":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 19V5l8 9 8-9v14h-3.5V9.5L12 14.5l-4.5-5V19H4z" fill="#8B5CF6" />
        </svg>
      );

    case "Vercel AI SDK":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L22 21H2L12 3Z" fill="#FFFFFF" />
        </svg>
      );

    case "Vercel eve":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 3L22 21H2L12 3Z" fill="url(#vercelEveGrad)" />
          <defs>
            <linearGradient id="vercelEveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00DC82" />
              <stop offset="100%" stopColor="#36E4DA" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "Strands Agents":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8 4.6v9.2l-8 4.6-8-4.6V6.6L12 2z" stroke="#FF9900" strokeWidth="1.8" />
          <path d="M12 6.5l4 2.3v4.6l-4 2.3-4-2.3V8.8l4-2.3z" fill="#FF9900" fillOpacity="0.25" />
          <circle cx="12" cy="11.1" r="1.4" fill="#FF9900" />
        </svg>
      );

    case "CAMEL-AI":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 19v-4l2-2 1-3 2-2 2 1 2 2 3-1 2 1 2 3v5h-2v-3l-2-1-2 2-2-1-2 2H6v2H4z" fill="#F59E0B" />
          <circle cx="6.5" cy="7" r="1" fill="#F59E0B" />
        </svg>
      );

    case "Smolagents":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" fill="#FFD21E" />
          <ellipse cx="9" cy="10" rx="1.1" ry="1.4" fill="#1F2937" />
          <ellipse cx="15" cy="10" rx="1.1" ry="1.4" fill="#1F2937" />
          <path d="M8.5 14.5c1 1.4 2.2 1.8 3.5 1.8s2.5-.4 3.5-1.8" stroke="#1F2937" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="7" cy="13.5" r="0.9" fill="#F87171" fillOpacity="0.8" />
          <circle cx="17" cy="13.5" r="0.9" fill="#F87171" fillOpacity="0.8" />
        </svg>
      );

    case "deepagents":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="2" fill="#10B981" />
          <rect x="14" y="3" width="7" height="7" rx="2" fill="#059669" />
          <rect x="3" y="14" width="7" height="7" rx="2" fill="#047857" />
          <rect x="14" y="14" width="7" height="7" rx="2" fill="#34D399" />
          <circle cx="12" cy="12" r="2" fill="#A7F3D0" />
        </svg>
      );

    default:
      return <span className="size-1.5 rounded-full bg-[#f26522]" />;
  }
}
