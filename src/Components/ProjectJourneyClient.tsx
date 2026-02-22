"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/utils/projectsData";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

const SLIDE = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function ProjectJourneyClient() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const { resolvedTheme } = useTheme();

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  const prev = () => go((idx - 1 + projects.length) % projects.length);
  const next = () => go((idx + 1) % projects.length);

  const p = projects[idx];
  const actionButtons = [
    { label: "Live Link", href: p.link },
    { label: "View Github", href: p.github },
    { label: "Watch Demo", href: p.demo },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));

  return (
    <div className="w-full font-space-grotesk text-black dark:text-white">
      
      <div className="flex w-full border-[3px] border-black overflow-x-auto sm:overflow-hidden shadow-[4px_4px_0px_0px_#000]">
        {projects.map((proj, i) => {
          const isActive = i === idx;
          return (
            <button
              key={proj.id}
              onClick={() => go(i)}
              className="relative min-w-28 sm:min-w-0 flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-2 border-r-[3px] last:border-r-0 border-black transition-all duration-150 focus-visible:outline-none group"
              style={{
                backgroundColor: isActive
                  ? proj.accent
                  : resolvedTheme === "dark"
                    ? "#292524"
                    : "#ffffff",
              }}
            >
              {/* Active underline bar */}
              {isActive && (
                <motion.div
                  layoutId="tab-bar"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-black"
                />
              )}
              <span
                className="text-[11px] font-black tracking-widest text-black/40 group-hover:text-black/70 transition-colors"
                style={{
                  color: isActive
                    ? "rgba(0,0,0,0.55)"
                    : resolvedTheme === "dark"
                      ? "rgba(255,255,255,0.7)"
                      : undefined,
                }}
              >
                {proj.num}
              </span>
              <span
                className="hidden sm:block text-xs font-black uppercase tracking-wider truncate"
                style={{ color: resolvedTheme === "dark" && !isActive ? "#ffffff" : "#000" }}
              >
                {proj.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          MAIN STAGE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div
        className="relative w-full border-[3px] border-t-0 border-black overflow-hidden"
        style={{ minHeight: "clamp(360px, 68vh, 520px)" }}
      >
        {/* Accent color background fill â€” full panel */}
        <motion.div
          key={`bg-${p.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
          style={{ backgroundColor: p.accent }}
          aria-hidden="true"
        />

        {/* Subtle dot-grid texture over accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        {/* â”€â”€ Animated content â”€â”€ */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={p.id}
            custom={dir}
            variants={SLIDE}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex flex-col md:flex-row min-h-90 md:min-h-105"
          >
            {/* â”€â”€ LEFT: Text content â”€â”€ */}
            <div className="flex flex-col justify-between p-5 sm:p-7 md:p-10 w-full md:w-[55%]">
              {/* Top meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
                {/* Year chip */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 translate-x-0.75 translate-y-0.75 rounded-sm bg-black" />
                  <span className="relative inline-block border-[2.5px] border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-3 py-1 text-xs font-black tracking-widest text-black dark:text-white rounded-sm">
                    {p.year}
                  </span>
                </div>
                {/* Role chip */}
                <span className="text-xs font-bold uppercase tracking-widest text-black/55 dark:text-white/70 border-b-2 border-black/30 dark:border-[#a8e6cf]/50 pb-0.5">
                  {p.role}
                </span>
              </div>

              {/* Giant project title */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight text-black mb-5 sm:mb-6 uppercase wrap-break-word">
                  {p.title}
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-black/70 max-w-none sm:max-w-sm mb-6 sm:mb-8 font-medium">
                  {p.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <div key={t} className="relative inline-block">
                      <div className="absolute inset-0 translate-x-0.75 translate-y-0.75 bg-black dark:bg-[#a8e6cf] rounded-sm" />
                        <span className="relative inline-flex items-center border-2 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-3 py-1.5 text-xs font-black text-black dark:text-white rounded-sm">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View project link */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                {actionButtons.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block group cursor-pointer w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 translate-x-1 translate-y-1 border-[2.5px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf] rounded-lg" />
                    <div className="relative flex items-center justify-center gap-2 text-black dark:text-white border-[2.5px] border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-5 py-3 rounded-lg font-black text-sm transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                      {action.label} <ArrowUpRight size={16} strokeWidth={3} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* â”€â”€ RIGHT: Visual panel â”€â”€ */}
            <div className="hidden md:flex flex-1 items-center justify-center p-8 border-l-[3px] border-black dark:border-[#a8e6cf] relative overflow-hidden">
              {/* Big ghost number â€” the WOW visual */}
              <span
                aria-hidden="true"
                className="absolute select-none font-black leading-none text-black pointer-events-none"
                style={{
                  fontSize: "clamp(140px, 18vw, 240px)",
                  opacity: 0.12,
                  bottom: "-0.1em",
                  right: "-0.05em",
                  lineHeight: 1,
                }}
              >
                {p.num}
              </span>

              {/* Neo-brutalist "screen" card */}
              <div className="relative w-full max-w-75">
                <div className="absolute inset-0 translate-x-2 translate-y-2 border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf] rounded-lg" />
                <div className="relative border-[3px] border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 rounded-lg overflow-hidden">
                  {/* Fake browser chrome */}
                  <div
                    className="flex items-center gap-1.5 px-4 py-3 border-b-[3px] border-black"
                    style={{ backgroundColor: p.accent }}
                  >
                    <div className="w-3 h-3 rounded-full bg-black/40 border border-black/20" />
                    <div className="w-3 h-3 rounded-full bg-black/40 border border-black/20" />
                    <div className="w-3 h-3 rounded-full bg-black/40 border border-black/20" />
                    <span className="ml-2 text-[10px] font-black tracking-widest text-black/60 uppercase">
                      {p.role}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 space-y-3">
                    <div className="h-2 w-3/4 bg-black/10 rounded-full" />
                    <div className="h-2 w-full bg-black/10 rounded-full" />
                    <div className="h-2 w-5/6 bg-black/10 rounded-full" />
                    <div className="h-2 w-2/3 bg-black/10 rounded-full" />
                    <div className="mt-4 h-16 w-full border-2 border-black/15 rounded-md flex items-center justify-center">
                      <span className="text-3xl font-black text-black/10 tracking-tighter">
                        {p.num}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {p.tech.slice(0, 2).map((t) => (
                        <div
                          key={t}
                          className="h-5 flex-1 rounded-sm"
                          style={{ backgroundColor: p.accent, opacity: 0.6 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          BOTTOM NAV BAR
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-[3px] border-t-0 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-4 sm:px-6 py-3 sm:py-4 shadow-[4px_4px_0px_0px_#000]">
        {/* Prev */}
        <div className="relative inline-block group w-full sm:w-auto">
          <div className="absolute inset-0 translate-x-1 translate-y-1 border-[2.5px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf] rounded-lg" />
          <button
            onClick={prev}
            className="relative w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 border-[2.5px] border-black dark:border-[#a8e6cf] bg-white dark:bg-black px-4 py-2.5 font-black text-sm rounded-lg transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} strokeWidth={3} />
            <span className="hidden sm:inline">PREV</span>
          </button>
        </div>

        {/* Progress pips */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 order-first sm:order-0">
          {projects.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => go(i)}
              aria-label={`Go to ${proj.title}`}
              className="relative focus-visible:outline-none"
            >
              <motion.div
                animate={{
                  width: i === idx ? 28 : 10,
                  backgroundColor: i === idx ? "#000000" : "#d4d4d4",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="h-2.5 rounded-full border-[1.5px] border-black"
              />
            </button>
          ))}
        </div>

        {/* Next */}
        <div className="relative inline-block group w-full sm:w-auto">
          <div className="absolute inset-0 translate-x-1 translate-y-1 border-[2.5px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf] rounded-lg" />
          <button
            onClick={next}
            className="relative w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 border-[2.5px] border-black dark:border-[#a8e6cf] bg-white dark:bg-black px-4 py-2.5 font-black text-sm rounded-lg transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            aria-label="Next project"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
