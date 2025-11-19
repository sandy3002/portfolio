"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over a clickable element
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);
        };

        window.addEventListener("mousemove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50 rounded-full border border-gray-500 mix-blend-difference transition-transform duration-100 ease-out"
            style={{
                left: position.x,
                top: position.y,
                width: isPointer ? "40px" : "20px",
                height: isPointer ? "40px" : "20px",
                transform: "translate(-50%, -50%)",
                backgroundColor: isPointer ? "rgba(255, 255, 255, 0.3)" : "transparent",
            }}
        />
    );
}
