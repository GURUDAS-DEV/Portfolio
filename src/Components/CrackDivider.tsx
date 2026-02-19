"use client";

import { useEffect, useRef, useState } from "react";

const CrackDivider = () => {
  const lastScroll = useRef(0);
  const [gapSize, setGapSize] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current + 2) {
        setGapSize(0); // joined
      } else if (current < lastScroll.current - 2) {
        setGapSize(55); // open with gap
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Top edge points (jagged crack pattern)
  const topPoints: [number, number][] = [
    [0, 10], [20, 6], [35, 12], [50, 7], [70, 13], [90, 8], [110, 14], [130, 7],
    [150, 12], [170, 6], [190, 13], [210, 8], [230, 14], [250, 7], [270, 12],
    [290, 5], [310, 11], [330, 8], [350, 14], [370, 7], [390, 12], [410, 6],
    [430, 13], [450, 8], [470, 14], [490, 7], [510, 12], [530, 5], [550, 11],
    [570, 8], [590, 14], [610, 7], [630, 12], [650, 5], [670, 11], [690, 8],
    [710, 14], [730, 7], [750, 12], [770, 5], [790, 11], [810, 8], [830, 14],
    [850, 7], [870, 12], [890, 5], [910, 11], [930, 8], [950, 14], [970, 7],
    [990, 12], [1000, 10]
  ];

  // Generate path for top and bottom edges
  const topPath = topPoints.map(([x, y], i) => 
    `${i === 0 ? 'M' : 'L'}${x},${y}`
  ).join(' ');
  
  const bottomPath = [...topPoints].reverse().map(([x, y], i) => 
    `${i === 0 ? 'L' : 'L'}${x},${y + gapSize}`
  ).join(' ');

  const fullPath = `${topPath} ${bottomPath} Z`;

  return (
    <div className="crack-divider ">
      <svg
        className="crack-svg"
        viewBox="0 0 1000 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={fullPath}
          fill="#d1d5db"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ transition: "d 400ms cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </svg>
    </div>
  );
};

export default CrackDivider;
