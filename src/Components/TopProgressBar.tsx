"use client";

import { useEffect, useState } from "react";

const TopProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  console.log(`Scroll Percent: ${scrollPercent.toFixed(2)}%`);

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
  return (
    <div className="w-screen fixed top-0 left-0 z-50">
      <div className="w-full relative">
        <div className="h-4 relative z-0 border-[6px] border-t-0 flex justify-between border-black w-full bg-white"></div>
        <div
          className="z-10 absolute top-0 border-r-8 border-r-black left-0 h-2.75 bg-[#ffd93d]"
          style={{ width: `${scrollPercent}%` }}
        ></div>
        <div className="h-5.5 w-5.5 z-20 absolute -top-1 left-[5%] bg-white border flex justify-center items-center border-white rounded-full">
          <div className="h-4 w-4 border-4 border-black rounded-full bg-[#ffd93d]"></div>
        </div>
        <div className="h-5.5 w-5.5  z-20  absolute -top-1 left-[21%] bg-white border flex justify-center items-center border-white rounded-full">
          <div className="h-4 w-4 border-4 border-black rounded-full bg-[#ffd93d]"></div>
        </div>
        <div className="h-5.5 w-5.5  z-20  absolute -top-1 left-[62%] bg-white border flex justify-center items-center border-white rounded-full">
          <div className="h-4 w-4 border-4 border-black rounded-full bg-[#ffd93d]"></div>
        </div>
        <div className="h-5.5 w-5.5  z-20  absolute -top-1 left-[78%] bg-white border flex justify-center items-center border-white rounded-full">
          <div className="h-4 w-4 border-4 border-black rounded-full bg-[#ffd93d]"></div>
        </div>
        <div className="h-5.5 w-5.5  z-20  absolute -top-1 left-[97%] bg-white border flex justify-center items-center border-white rounded-full">
          <div className="h-4 w-4 border-4 border-black rounded-full bg-[#ffd93d]"></div>
        </div>
      </div>
    </div>
  );
};

export default TopProgressBar;
