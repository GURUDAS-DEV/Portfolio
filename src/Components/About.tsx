"use client";

import { useEffect, useRef, useState } from "react";

const About = () => {
  const [highlightProgress, setHighlightProgress] = useState(0);
  const highlightsRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (!highlightsRef.current) return;
      const rect = highlightsRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 1.03;
      const end = viewport * 0.3;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      setHighlightProgress(clamped);
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-auto flex font-space-grotesk text-black dark:text-white">
      <div className="flex w-full flex-col gap-6 px-5 sm:gap-7 sm:px-8 md:gap-8 md:px-12">
        <div className="cta-overlay-shell w-fit">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
          <div className="nav-cta relative inline-flex w-fit rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-[#ffd93d] dark:bg-[#67d6ea] px-4 py-2 text-3xl font-black leading-none text-black sm:px-5 sm:py-2.5 sm:text-4xl md:px-6 md:py-3 md:text-5xl">
            <h1>ABOUT</h1>
          </div>
        </div>

        <div className="cta-overlay-shell cta-overlay-static w-full">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
          <div
            className="cta-overlay-front relative flex w-full flex-col gap-5 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-4 py-5 text-base leading-7 text-black dark:text-white sm:gap-6 sm:px-5 sm:py-6 sm:text-lg sm:leading-8 md:px-6 md:py-8 md:text-xl md:leading-9"
            ref={highlightsRef}
            style={{ ["--highlight-progress" as string]: highlightProgress }}
          >
            <p className="leading-inherit">
              I’m a{" "}
              <span className="skill-highlight skill-highlight-left skill-highlight-yellow">full-stack developer</span>
              {" "}who loves turning ideas into reliable systems and shipping features that solve real problems.
            </p>
            <p className="leading-inherit">
              From building <span className="skill-highlight skill-highlight-right skill-highlight-green">SaaS applications</span> to working with <span className="skill-highlight skill-highlight-left skill-highlight-cyan">AI integrations</span> and <span className="skill-highlight skill-highlight-right skill-highlight-pink">background workers</span>, I enjoy owning both product flow and technical depth.
            </p>
            <p className="leading-inherit">
              I focus on <span className="skill-highlight skill-highlight-left skill-highlight-yellow">backend architecture</span>, <span className="skill-highlight skill-highlight-right skill-highlight-green">API design</span>, <span className="skill-highlight skill-highlight-left skill-highlight-cyan">lifecycle management</span>, and <span className="skill-highlight skill-highlight-right skill-highlight-pink">scalable foundations</span>. I Create systems as user, not as a developer, I myself see things from user prespective and try to create it in most efficient way.
            </p>
            <p className="leading-inherit">I don’t just want to make things work — I want to understand why they work, improve my <span className="skill-highlight skill-highlight-left skill-highlight-yellow">problem-solving approach</span>, and continuously build more <span className="skill-highlight skill-highlight-right skill-highlight-green">production-ready systems</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
