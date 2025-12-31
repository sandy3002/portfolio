"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }

            // Check if hovering over a clickable element
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');

            setIsPointer(!!isClickable);
        };

        window.addEventListener("mousemove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-gray-500 mix-blend-difference transition-[width,height,background-color] duration-100 ease-out"
            style={{
                width: isPointer ? "40px" : "20px",
                height: isPointer ? "40px" : "20px",
                backgroundColor: isPointer ? "rgba(255, 255, 255, 0.3)" : "transparent",
            }}
        />
    );
}
