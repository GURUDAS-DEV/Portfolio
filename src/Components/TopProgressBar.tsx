"use client";

import { useEffect, useState } from "react";

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
  const markers = [5, 25, 50, 75, 97];

  return (
    <div className="w-screen fixed top-0 left-0 z-50">
      <div className="w-full relative">
        <div className="relative z-0 h-3 w-full border-4 border-t-0 border-black bg-white sm:h-4 sm:border-[6px]"></div>
        <div
          className="absolute top-0 left-0 z-10 h-2 border-r-4 border-r-black bg-[#ffd93d] sm:h-2.75 sm:border-r-8"
          style={{ width: `${scrollPercent}%` }}
        ></div>
        {markers.map((point) => (
          <div
            key={point}
            className="absolute -top-0.5 z-20 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-white sm:-top-1 sm:h-5.5 sm:w-5.5"
            style={{ left: `${point}%`, transform: "translateX(-50%)" }}
          >
            <div
              className={`h-3 w-3 rounded-full border-2 border-black sm:h-4 sm:w-4 sm:border-4 ${
                scrollPercent >= point ? "bg-[#ffd93d]" : "bg-white"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProgressBar;
