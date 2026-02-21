"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface markerProp {
  percent: number;
  redirectTo: string;
}

const TopProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setScrollPercent(Math.min(100, Math.max(0, percent)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const markers : markerProp[] = [
    {percent : 1, redirectTo : "#Home"},
    {percent : 14, redirectTo : "#About"},
    {percent : 24, redirectTo : "#Project"},
    {percent : 43, redirectTo : "#Skills"},
    {percent : 71, redirectTo : "#Github"},
    {percent : 87, redirectTo : "#Education"},
    {percent : 95, redirectTo : "#GetInTouch"},
    {percent : 98, redirectTo : "#Footer"},
  ];

  return (
    <div className="w-screen fixed top-0 left-0 z-[100]">
      <div className="w-full relative">
        <div className="relative z-0 h-3 w-full border-4 border-t-0 border-black bg-white sm:h-4 sm:border-[6px]"></div>
        <div
          className="absolute top-0 left-0 z-10 h-2 border-r-4 border-r-black bg-[#ffd93d] sm:h-2.75 sm:border-r-8"
          style={{ width: `${scrollPercent}%` }}
        ></div>
        {markers.map((point) => (
          <Link
            key={point.percent}
            href={point.redirectTo}
            className="absolute cursor-pointer -top-0.5 z-20 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-white sm:-top-1 sm:h-5.5 sm:w-5.5"
            style={{ left: `${point.percent}%`, transform: "translateX(-50%)" }}
          >
            <div
              className={`h-3 w-3 rounded-full border-2 border-black sm:h-4 sm:w-4 sm:border-4 ${
                scrollPercent >= point.percent ? "bg-[#ffd93d]" : "bg-white"
              }`}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopProgressBar;
