"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CrackDivider = () => {
  const lastScroll = useRef(0);
  const targetGap = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const [gapSize, setGapSize] = useState(0);
  
  // Smoothly interpolate gap size
  const animateGap = useCallback(() => {
    setGapSize(prev => {
      const diff = targetGap.current - prev;
      if (Math.abs(diff) < 0.5) {
        return targetGap.current;
      }
      // Ease towards target (adjust 0.08 for speed - lower = smoother but slower)
      return prev + diff * 0.08;
    });
    animationFrame.current = requestAnimationFrame(animateGap);
  }, []);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll.current;
      
      // Clear any pending timeout
      clearTimeout(scrollTimeout);
      
      // Use larger threshold to avoid jitter
      if (delta > 5) {
        targetGap.current = 0; // scrolling down - joined
      } else if (delta < -5) {
        targetGap.current = 55; // scrolling up - open with gap
      }
      
      lastScroll.current = current;
      
      // Auto-close after user stops scrolling (optional)
      scrollTimeout = setTimeout(() => {
        targetGap.current = 0;
      }, 800);
    };

    // Start the animation loop
    animationFrame.current = requestAnimationFrame(animateGap);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [animateGap]);

  const isAttached = gapSize < 5;
  const dividerHeight = 30 + (gapSize * 1.6); // Smooth height transition
  const viewBoxHeight = 26 + (gapSize * 0.8);

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
    <div className="crack-divider" style={{ height: `${dividerHeight}px` }}>
      <svg
        className="crack-svg"
        viewBox={`0 0 1000 ${viewBoxHeight}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={fullPath}
          fill="#d1d5db"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CrackDivider;
