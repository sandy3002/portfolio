"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(fine.matches);
    sync();
    fine.addEventListener("change", sync);
    return () => fine.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button");

      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[60] rounded-full border border-ink/40 mix-blend-difference transition-[width,height,background-color] duration-100 ease-out"
      style={{
        width: isPointer ? "40px" : "20px",
        height: isPointer ? "40px" : "20px",
        backgroundColor: isPointer ? "rgba(247, 244, 239, 0.25)" : "transparent",
      }}
      aria-hidden="true"
    />
  );
}
