"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { flushSync } from "react-dom";

type ThemeTransition = {
  ready: Promise<void>;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => ThemeTransition;
};

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const change = () => {
    const nextTheme = resolvedTheme === "light" ? "dark" : "light";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const viewTransitionDocument = document as ViewTransitionDocument;

    if (!viewTransitionDocument.startViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const transition = viewTransitionDocument.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    const button = buttonRef.current;
    if (!button) {
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          opacity: [1, 0.75],
          transform: ["scale(1)", "scale(0.985)"],
        },
        {
          duration: 420,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-old(root)",
        },
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
          opacity: [0.85, 1],
          transform: ["scale(1.015)", "scale(1)"],
        },
        {
          duration: 520,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };
  

  return (
    <div className="cta-overlay-shell">
      <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf] pointer-events-none" />
      <button
        ref={buttonRef}
        id="theme-toggle"
        className="nav-cta cta-overlay-front cursor-pointer rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-[#67d6ea] p-2.5 leading-none dark:text-black"
        aria-label="Toggle theme"
        type="button"
        onClick={() => change()}
      >
        {resolvedTheme === "dark" ? <Sun size={20} className="text-black" /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
