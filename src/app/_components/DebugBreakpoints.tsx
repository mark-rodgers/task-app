"use client";

import { useState, useEffect } from "react";

type DebugBreakpointsProps = {
  enabled: boolean;
};

function getBreakpoint(windowWidth: number): string {
  if (windowWidth >= 1536) return "2xl";
  if (windowWidth >= 1280) return "xl";
  if (windowWidth >= 1024) return "lg";
  if (windowWidth >= 768) return "md";
  if (windowWidth >= 640) return "sm";
  return "xs";
}

export default function DebugBreakpoints({ enabled }: DebugBreakpointsProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");

  const onWindowResize = () => {
    const innerWidth = window.innerWidth;
    const breakpoint = getBreakpoint(innerWidth);
    setWindowWidth(innerWidth);
    if (breakpoint !== currentBreakpoint) setCurrentBreakpoint(breakpoint);
  };

  useEffect(() => {
    if (!enabled) return;
    onWindowResize();

    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    enabled && (
      <div className="fixed bottom-0 mx-auto flex w-full justify-center">
        <div className="bg-black px-4 font-bold text-white">
          {currentBreakpoint && (
            <span>
              {currentBreakpoint} : {windowWidth}px
            </span>
          )}
        </div>
      </div>
    )
  );
}
