"use client";

import React, { useEffect } from "react";
import {
  TechCloseIcon,
  TechPlayIcon,
  TechExternalLinkIcon,
} from "./app-icons";

export interface VideoChapter {
  id: string;
  title: string;
  time: string;
  startSeconds: number;
}

export const VITY_VIDEO_CHAPTERS: VideoChapter[] = [
  { id: "01", title: "Overview", time: "0:00", startSeconds: 0 },
  { id: "02", title: "Add information", time: "0:15", startSeconds: 15 },
  { id: "03", title: "Import history", time: "0:30", startSeconds: 30 },
  { id: "04", title: "Connect tools", time: "0:45", startSeconds: 45 },
];

export const VITY_VIDEO_ID = "8fwQNOrOjL4";
export const VITY_VIDEO_URL = "https://www.youtube.com/watch?v=8fwQNOrOjL4";
export const VITY_VIDEO_THUMBNAIL = "/vity/video-thumbnail.jpg";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStartTime?: number;
  currentChapterIndex?: number;
  onChapterSelect?: (index: number, startSeconds: number) => void;
}

export default function VideoModal({
  isOpen,
  onClose,
  initialStartTime = 0,
  currentChapterIndex = 0,
  onChapterSelect,
}: VideoModalProps) {
  const [startTime, setStartTime] = React.useState(initialStartTime);
  const [activeIdx, setActiveIdx] = React.useState(currentChapterIndex);
  const [prevIsOpen, setPrevIsOpen] = React.useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setStartTime(initialStartTime);
      setActiveIdx(currentChapterIndex);
    }
  }

  // Handle ESC key press and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChapterClick = (idx: number, seconds: number) => {
    setActiveIdx(idx);
    setStartTime(seconds);
    if (onChapterSelect) {
      onChapterSelect(idx, seconds);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Maximem AI Video Player"
      className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-[960px] bg-[#141412] border border-white/[0.12] rounded-[16px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/[0.08] bg-[#171715]">
          <div className="flex items-center gap-2.5">
            <span className="font-['Geist_Variable:Semi_Bold',sans-serif] text-[13.5px] font-semibold text-white tracking-tight">
              Maximem AI &mdash; How it Works!
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#f26522]/15 border border-[#f26522]/30 text-[#f26522] text-[10.5px] font-mono font-medium">
              <span className="size-1.5 rounded-[2px] bg-[#f26522] animate-pulse" />
              1:00 min
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={VITY_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[11.5px] text-[#a1a1aa] hover:text-white transition-colors px-2 py-1 rounded-[6px] hover:bg-white/[0.06]"
            >
              <span>Open on YouTube</span>
              <TechExternalLinkIcon className="size-3 text-[#a1a1aa]" />
            </a>
            <button
              onClick={onClose}
              type="button"
              className="size-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.1] text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Close video"
            >
              <TechCloseIcon className="size-3.5" />
            </button>
          </div>
        </div>

        {/* 16:9 Video Frame */}
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          <iframe
            key={startTime}
            src={`https://www.youtube.com/embed/${VITY_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1${startTime > 0 ? `&start=${startTime}` : ""}`}
            title="Maximem AI - How it Works!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>

        {/* Bottom Bar: Chapter Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-5 py-3 border-t border-white/[0.08] bg-[#171715] gap-2.5">
          <div className="flex items-center gap-2 text-[12px] text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-[2px] bg-[#f26522]" />
            <span className="font-['Geist_Variable:Medium',sans-serif] text-white font-medium">
              Jump to Chapter:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {VITY_VIDEO_CHAPTERS.map((ch, i) => {
              const isSelected = activeIdx === i;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleChapterClick(i, ch.startSeconds)}
                  className={`h-7 px-2.5 rounded-[6px] text-[11.5px] font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#f26522] text-white font-semibold shadow-sm"
                      : "bg-[#1c1c1a] border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/20"
                  }`}
                >
                  <TechPlayIcon className={`size-2.5 ${isSelected ? "fill-white text-white" : "text-[#f26522] fill-current"}`} />
                  <span>{ch.id}</span>
                  <span className="hidden sm:inline font-sans">{ch.title}</span>
                  <span className="text-[10px] opacity-75">({ch.time})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
