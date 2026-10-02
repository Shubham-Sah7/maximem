import React from "react";

// ═════════════════════════════════════════════════════════════════════════════
// 1. BRAND VECTOR MARKS (100% AUTHENTIC, RECOGNIZABLE, OPTICALLY BALANCED)
// ═════════════════════════════════════════════════════════════════════════════

export function MaximemHexIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
        stroke="#f26522"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <polygon
        points="12,6.5 17,9.5 17,14.5 12,17.5 7,14.5 7,9.5"
        fill="#f26522"
        fillOpacity="0.9"
      />
      <circle cx="12" cy="12" r="2" fill="#ffffff" />
    </svg>
  );
}

export function MaximemLogo({
  className = "size-10",
  fill = "#f26522",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path
        d="M0.137112 20.262C-0.0456666 20.1197 -0.0456661 19.8418 0.137113 19.6995C2.68329 17.7174 4.89707 15.2205 6.60978 12.254C8.32252 9.28751 9.37798 6.12189 9.82145 2.9258C9.85325 2.69637 10.0939 2.5574 10.3086 2.64455C13.2982 3.85853 16.5674 4.52733 19.9928 4.52733C23.4182 4.52731 26.6874 3.85854 29.6771 2.64455C29.8917 2.5574 30.1324 2.69637 30.1642 2.9258C30.6077 6.12189 31.6631 9.28751 33.3758 12.254C35.0885 15.2205 37.3023 17.7173 39.8485 19.6994C40.0313 19.8417 40.0313 20.1196 39.8485 20.2619C37.3023 22.244 35.0885 24.7408 33.3757 27.7073C31.663 30.6739 30.6077 33.8395 30.1642 37.0356C30.1324 37.265 29.8917 37.404 29.6771 37.3168C26.6874 36.1028 23.4182 35.434 19.9927 35.434C16.5673 35.434 13.2982 36.1028 10.3085 37.3168C10.0939 37.404 9.85319 37.265 9.82139 37.0356C9.37792 33.8395 8.32252 30.6739 6.60978 27.7073C4.89709 24.7409 2.68326 22.2441 0.137112 20.262ZM10.1657 19.5353C9.98593 19.6815 9.98694 19.9594 10.1676 20.1044C11.3847 21.0798 12.4461 22.2917 13.2776 23.7204C14.1091 25.1492 14.6385 26.6707 14.8855 28.2107C14.9221 28.4394 15.1634 28.5776 15.3792 28.4936C16.8326 27.9273 18.4128 27.6141 20.0659 27.6083C21.719 27.6026 23.3013 27.9049 24.7585 28.461C24.975 28.5436 25.2152 28.4038 25.2503 28.1748C25.4866 26.6331 26.0054 25.108 26.8271 23.6735C27.6486 22.239 28.7015 21.0198 29.9117 20.0359C30.0915 19.8898 30.0905 19.6117 29.9098 19.4669C28.6927 18.4914 27.6314 17.2795 26.7999 15.8507C25.9683 14.422 25.4389 12.9005 25.1919 11.3604C25.1553 11.1317 24.914 10.9936 24.6982 11.0777C23.2449 11.6439 21.6647 11.9571 20.0117 11.9628C18.3585 11.9685 16.7762 11.6663 15.3189 11.1102C15.1025 11.0276 14.8623 11.1674 14.8271 11.3964C14.5909 12.9381 14.0721 14.4632 13.2505 15.8977C12.4289 17.3322 11.376 18.5514 10.1657 19.5353Z"
        fill={fill}
      />
    </svg>
  );
}

export function VityHexMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 20 2.5 L 35.5 11.5 V 28.5 L 20 37.5 L 4.5 28.5 V 11.5 Z M 20 12.5 L 12.8 16.7 V 23.3 L 20 27.5 L 27.2 23.3 V 16.7 Z"
        fill="#f26522"
      />
    </svg>
  );
}

// ── 1. ChatGPT (From /icons/bi_openai.png) ──
export function ChatGPTIcon({ className = "size-5", invert = true }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/icons/bi_openai.png"
      alt="ChatGPT"
      className={`object-contain shrink-0 ${invert ? "invert" : ""} ${className}`}
    />
  );
}

// ── 2. Claude (From /icons/devicon_claude.png) ──
export function ClaudeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <img
      src="/icons/devicon_claude.png"
      alt="Claude"
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

// ── 3. Gemini (From /icons/thesvg-color_gemini.png) ──
export function GeminiIcon({ className = "size-5" }: { className?: string }) {
  return (
    <img
      src="/icons/thesvg-color_gemini.png"
      alt="Gemini"
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

// ── 4. Perplexity (From /icons/logos_perplexity-icon.png) ──
export function PerplexityIcon({ className = "size-5" }: { className?: string }) {
  return (
    <img
      src="/icons/logos_perplexity-icon.png"
      alt="Perplexity"
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

// ── 5. Grok (From /icons/logos_grok-icon.png) ──
export function GrokIcon({ className = "size-5", invert = true }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/icons/logos_grok-icon.png"
      alt="Grok"
      className={`object-contain shrink-0 ${invert ? "invert" : ""} ${className}`}
    />
  );
}

// ── 5b. Cursor (Official Tilted Oval with Diagonal Slash) ──
export function CursorIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="4.6"
        transform="rotate(-40 12 12)"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <line
        x1="6.5"
        y1="17.5"
        x2="17.5"
        y2="6.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── 6. DeepSeek (Official Leaping Whale) ──
export function DeepSeekIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.8 7.4c-.8-1.2-2.1-1.9-3.6-1.9-2.9 0-5.3 2-6.6 4.5-1.1 2.1-1.8 4.4-1.8 6.9 0 .8.2 1.5.5 2.2 1.4-1.8 3.5-3 5.8-3.2 2.6-.2 5-1.4 6.8-3.2 1-1 1.6-2.2 1.6-3.6 0-.6-.1-1.1-.3-1.6l-2.4-.1zm-4.3 1.9a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
      <path d="M5.5 17c1.2-2.5 3-4.5 5.2-6-1.5 2.8-2.2 6-2.2 9 0 .5.1 1 .2 1.5-1.8-1-3-2.6-3.2-4.5z" />
      <path d="M19.2 15.5c-1.5 1.8-3.6 3-6 3.3 1.5.8 3.2 1.2 5 1.2 1.5 0 2.8-.3 4-.9-1-1.2-2-2.4-3-3.6z" />
    </svg>
  );
}

// ── 7. Chrome (Official 4-Color Chrome) ──
export function ChromeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <img
      src="/icons/perfect_chrome.png"
      alt="Google Chrome"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

// ── 8. Microsoft Edge (Official Wave) ──
export function EdgeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c80df" />
          <stop offset="45%" stopColor="#00bcf2" />
          <stop offset="100%" stopColor="#00ffa3" />
        </linearGradient>
      </defs>
      <path
        d="M21.8 13.5c-.2 4.4-3.8 7.9-8.3 7.9-5.1 0-8.9-4.2-8.9-9.1C4.6 7.2 8.4 3 13.5 3c2.4 0 4.6.9 6.2 2.5l-2.4 2.4c-1-1-2.4-1.6-3.8-1.6-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8 2.3 0 4.3-1.4 5.2-3.4h-5.2v-3.2h8.5v2.2z"
        fill="url(#edgeGrad)"
      />
    </svg>
  );
}

// ── 9. Mozilla Firefox (Official Fox & Globe) ──
export function FirefoxIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="ffGlobeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#251b54" />
          <stop offset="60%" stopColor="#0c2360" />
          <stop offset="100%" stopColor="#00438b" />
        </radialGradient>
        <linearGradient id="ffFoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe600" />
          <stop offset="40%" stopColor="#ff7b00" />
          <stop offset="80%" stopColor="#e50040" />
          <stop offset="100%" stopColor="#960055" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" fill="url(#ffGlobeGrad)" />
      <path
        d="M12 3.2c2.4 0 4.6.9 6.2 2.4-1.2.4-2.3 1.2-3 2.2-.4.6-.6 1.4-.4 2.1.2 1 .9 1.8 1.9 2.1 1.2.4 2.4 0 3.3-.8.2.9.2 1.8.1 2.7-.4 3.4-3.2 6.1-6.7 6.1-3.9 0-7-3.1-7-7 0-3.3 2.3-6.1 5.4-6.8-.2.6-.2 1.3 0 1.9.4 1.2 1.5 2 2.7 2 1.1 0 2.1-.7 2.5-1.7.3-.8.2-1.8-.3-2.5-.9-1.2-2.3-2.1-3.7-2.5-.3-.1-.7-.2-1-.2z"
        fill="url(#ffFoxGrad)"
      />
    </svg>
  );
}

// ── 10. Apple Safari (Official Compass) ──
export function SafariIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#007aff" />
      <circle cx="12" cy="12" r="9.2" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="1.2 1.2" />
      <polygon points="12,4.5 14.8,12 12,19.5 9.2,12" fill="#ffffff" />
      <polygon points="12,4.5 14.8,12 12,12" fill="#ff3b30" />
      <circle cx="12" cy="12" r="1.6" fill="#ffffff" />
    </svg>
  );
}

// ── 11. Notion (Official Cube Logo) ──
export function NotionIcon({ className = "size-5", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/icons/perfect_notion.png"
      alt="Notion"
      className={`object-contain shrink-0 ${invert ? "invert" : ""} ${className}`}
    />
  );
}

// ── 12. Google Drive (Official 3-Color Triangle) ──
export function GoogleDriveIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8.2 4l5.4 9.4H2.8L8.2 4z" fill="#0066da" />
      <path d="M15.8 4h5.4l-5.4 9.4H10.4L15.8 4z" fill="#00ac47" />
      <path d="M2.8 13.4l2.7 4.6h10.8l-2.7-4.6H2.8z" fill="#ffba00" />
    </svg>
  );
}

// ── 13. Gmail (Official 4-Color 'M' Logo) ──
export function GmailIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={`shrink-0 ${className}`} fill="none">
      <path fill="#4285F4" d="M6 15v21c0 2.21 1.79 4 4 4h6V21.5L6 15z" />
      <path fill="#34A853" d="M42 15v21c0 2.21-1.79 4-4 4h-6V21.5L42 15z" />
      <path fill="#EA4335" d="M24 27.5L8 15V10c0-2.21 1.79-4 4-4h3l9 7 9-7h3c2.21 0 4 1.79 4 4v5L24 27.5z" />
      <path fill="#FBBC04" d="M33 6h7c2.21 0 4 1.79 4 4v5l-11-8.5V6z" />
      <path fill="#C5221F" d="M15 6H8c-2.21 0-4 1.79-4 4v5l11-8.5V6z" />
    </svg>
  );
}

// ── 14. Google Calendar (Official Blue '31' Badge) ──
export function GoogleCalendarIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="3.5" fill="#4285F4" />
      <path d="M3 9h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="#ffffff" />
      <text x="12" y="17.5" fill="#4285F4" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        31
      </text>
      <rect x="7" y="2.5" width="2" height="3.5" rx="1" fill="#EA4335" />
      <rect x="15" y="2.5" width="2" height="3.5" rx="1" fill="#EA4335" />
    </svg>
  );
}

// ── 15. GitHub (Official Octocat) ──
export function GitHubIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// ── 16. VS Code (Official Blue Ribbon) ──
export function VSCodeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#007acc">
      <path d="M17.5 1.5l4.5 2.2v16.6l-4.5 2.2-11-9.5 5-4.2-5-4.3 11-3zm-1.5 5.5l-6.2 4.5 6.2 4.5V7zm3 11.2V5.8l-1.5-.7v13.8l1.5-.7zM3.8 8.6L2 10v4l1.8 1.4 3.7-3.4-3.7-3.4z" />
    </svg>
  );
}

// ── 17. Figma (Official 5-Color Segmented Logo) ──
export function FigmaIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 2h4v6H8a3 3 0 1 1 0-6z" fill="#F24E1E" />
      <path d="M12 2h4a3 3 0 1 1 0 6h-4V2z" fill="#FF7262" />
      <path d="M12 8h4a3 3 0 1 1 0 6h-4V8z" fill="#1ABCFE" />
      <path d="M8 14h4v6a3 3 0 1 1-4-2.83V14z" fill="#0ACF83" />
      <circle cx="8" cy="11" r="3" fill="#A259FF" />
    </svg>
  );
}

// ── 18. WhatsApp (Official Green Phone in Chat Bubble) ──
export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.55 1.35 5.03L2.3 21.7l4.81-1.03A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
        fill="#25D366"
      />
      <path
        d="M17.47 14.38c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.15-.24-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.17-.24.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.06 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.66 4.23 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.57.21-1.07.15-1.17-.06-.11-.23-.17-.48-.29z"
        fill="#ffffff"
      />
    </svg>
  );
}

// ── 19. Slack (Official 4-Color Hashtag) ──
export function SlackIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#007a5a" />
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36c5f0" />
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#ecb22e" />
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.52 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zm0-1.271a2.527 2.527 0 0 1-2.52-2.521 2.528 2.528 0 0 1 2.52-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.52 2.522h-6.313z" fill="#e01e5a" />
    </svg>
  );
}

// ── 20. Linear (Official Purple Arcs) ──
export function LinearIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#5E6AD2" />
      <path
        d="M6.5 17.5L17.5 6.5M6.5 12L12 6.5M12 17.5L17.5 12"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── 21. Dashed Plus Mark for "And 10+ more" ──
export function PlusDashedIcon({ className = "size-5" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-[6px] border border-dashed border-zinc-500/80 flex items-center justify-center text-zinc-400 shrink-0`}
    >
      <svg
        className="size-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. 20 APP BADGES MATCHING USER REFERENCE SCREENSHOT (Support.png)
// ═════════════════════════════════════════════════════════════════════════════

export function ChatGPTBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#10a37f] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 p-2 ${className}`}>
      <ChatGPTIcon className="size-full" />
    </div>
  );
}

export function ClaudeBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 p-2 ${className}`}>
      <ClaudeIcon className="size-full" />
    </div>
  );
}

export function GeminiBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#171322] border border-white/10 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 p-2 ${className}`}>
      <GeminiIcon className="size-full" />
    </div>
  );
}

export function PerplexityBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 p-2 ${className}`}>
      <PerplexityIcon className="size-full" />
    </div>
  );
}

export function GrokBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#000000] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 p-2 ${className}`}>
      <GrokIcon className="size-full" />
    </div>
  );
}

export function CursorBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 ${className}`}>
      <CursorIcon className="size-5.5 text-white" />
    </div>
  );
}

export function DeepSeekBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#1d4ed8] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 ${className}`}>
      <DeepSeekIcon className="size-5.5 text-white" />
    </div>
  );
}

export function ChromeBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-sm overflow-hidden ${className}`}>
      <img src="/icons/perfect_chrome.png" alt="Chrome" className="size-full object-contain" />
    </div>
  );
}

export function EdgeBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-sm overflow-hidden ${className}`}>
      <img src="/icons/perfect_edge.png" alt="Edge" className="size-full object-contain" />
    </div>
  );
}

export function FirefoxBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-sm overflow-hidden ${className}`}>
      <img src="/icons/perfect_firefox.png" alt="Firefox" className="size-full object-contain" />
    </div>
  );
}

export function SafariBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-sm overflow-hidden ${className}`}>
      <img src="/icons/perfect_safari.png" alt="Safari" className="size-full object-contain" />
    </div>
  );
}

export function NotionBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_notion.png" alt="Notion" className="size-5.5 object-contain" />
    </div>
  );
}

export function GoogleDriveBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_drive.png" alt="Google Drive" className="size-5.5 object-contain" />
    </div>
  );
}

export function GmailBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <GmailIcon className="size-5.5" />
    </div>
  );
}

export function GoogleCalendarBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_calendar.png" alt="Google Calendar" className="size-5.5 object-contain" />
    </div>
  );
}

export function GitHubBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_github.png" alt="GitHub" className="size-5.5 object-contain" />
    </div>
  );
}

export function VSCodeBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_vscode.png" alt="VS Code" className="size-5.5 object-contain" />
    </div>
  );
}

export function FigmaBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_figma.png" alt="Figma" className="h-5.5 w-auto object-contain" />
    </div>
  );
}

export function WhatsAppBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_whatsapp.png" alt="WhatsApp" className="size-full object-contain" />
    </div>
  );
}

export function SlackBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#18181b] border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_slack.png" alt="Slack" className="size-5.5 object-contain" />
    </div>
  );
}

export function LinearBadge({ className = "size-10 sm:size-10.5" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#5e6ad2] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 overflow-hidden ${className}`}>
      <img src="/icons/perfect_linear.png" alt="Linear" className="size-full object-contain" />
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 3. UNIFIED TECHNICAL LINEAR / OUTLINE ICON SYSTEM (100% CONSISTENT)
// ═════════════════════════════════════════════════════════════════════════════

export interface TechIconProps {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number | string;
}

// ── Repeat / Cycle loop arrows (Ai memory Card 1) ──
export function TechCycleIcon({
  className = "size-5",
  strokeColor = "#f26522",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12 A9 9 0 0 0 5.6 5.6 L3 8" />
      <polyline points="3 3 3 8 8 8" />
      <path d="M3 12 A9 9 0 0 0 18.4 18.4 L21 16" />
      <polyline points="21 21 21 16 16 16" />
    </svg>
  );
}

// ── Storage / Inbox Drawer with arch handle (Ai memory Card 2) ──
export function TechArchiveIcon({
  className = "size-5",
  strokeColor = "#f26522",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6.5 V4.5 A2 2 0 0 1 11 2.5 H13 A2 2 0 0 1 15 4.5 V6.5" />
      <rect x="3.5" y="6.5" width="17" height="14" rx="2.5" />
      <path d="M9.5 11.5 H14.5" />
    </svg>
  );
}

// ── Neural Network Brain (Ai memory Card 3) ──
export function TechBrainIcon({
  className = "size-5",
  strokeColor = "#f26522",
  strokeWidth = 1.75,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 4a3.5 3.5 0 0 0-3.5 3.5c0 .35.05.69.15 1A3.5 3.5 0 0 0 4 12c0 1.25.65 2.35 1.63 2.97A3.5 3.5 0 0 0 8.5 20c.34 0 .67-.05 1-.15" />
      <path d="M14.5 4a3.5 3.5 0 0 1 3.5 3.5c0 .35-.05.69-.15 1A3.5 3.5 0 0 1 20 12c0 1.25-.65 2.35-1.63 2.97A3.5 3.5 0 0 1 15.5 20c-.34 0-.67-.05-1-.15" />
      <path d="M12 4v16" strokeDasharray="1 2.5" />
      <path d="M9.5 9h-2M14.5 9h2M8.5 15h-1M15.5 15h1" />
    </svg>
  );
}


// ── Linear Right Arrow (Buttons and Cards) ──
export function TechArrowRightIcon({
  className = "size-3.5",
  strokeColor = "currentColor",
  strokeWidth = 2,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ── Minimalist Chevron Down (Accordion) ──
export function TechChevronDownIcon({
  className = "size-3.5",
  strokeColor = "currentColor",
  strokeWidth = 2.2,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ── 4-Squares Dashboard Grid (CTA Button) ──
export function TechDashboardIcon({
  className = "size-4",
  strokeColor = "currentColor",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

// ── Open Documentation Book (CTA Button) ──
export function TechBookIcon({
  className = "size-4",
  strokeColor = "currentColor",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="6" x2="16" y2="6" strokeWidth="1.4" />
      <line x1="8" y1="10" x2="14" y2="10" strokeWidth="1.4" />
    </svg>
  );
}

// ── Equilateral Play Triangle ──
export function TechPlayIcon({
  className = "size-4",
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill}>
      <polygon points="7 4 19 12 7 20 7 4" strokeLinejoin="round" />
    </svg>
  );
}

// ── Fullscreen Expand Corner Arrows ──
export function TechExpandIcon({
  className = "size-3.5",
  strokeColor = "currentColor",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

// ── Close / Dismiss "X" Mark ──
export function TechCloseIcon({
  className = "size-3.5",
  strokeColor = "currentColor",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Rotate / Refresh Mark ──
export function TechRotateIcon({
  className = "size-3.5",
  strokeColor = "currentColor",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

// ── External Link Arrow (Modal Header) ──
export function TechExternalLinkIcon({
  className = "size-3",
  strokeColor = "currentColor",
  strokeWidth = 1.8,
}: TechIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
