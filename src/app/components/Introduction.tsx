"use client";

import { useEffect, useState } from "react";
import { introLines } from "@/content/intro-lines";
import EntryStamp from "./EntryStamp";

export default function Introduction() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setCurrentText(introLines[0]);
      return;
    }

    const currentLine = introLines[currentIndex];

    if (isTyping) {
      if (currentText.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentLine.slice(0, currentText.length + 1));
        }, 90);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setIsTyping(false), 2800);
      return () => clearTimeout(timeout);
    }

    if (currentText.length > 0) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, 40);
      return () => clearTimeout(timeout);
    }

    setCurrentIndex((prev) => (prev + 1) % introLines.length);
    setIsTyping(true);
  }, [currentText, currentIndex, isTyping, reduceMotion]);

  return (
    <section
      id="home"
      className="paper-atmosphere relative flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height))] text-center px-4"
    >
      <EntryStamp>01 · Cover</EntryStamp>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-ink mt-4 tracking-tight max-w-4xl">
        Sandipan Chatterjee
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted min-h-[2rem] md:min-h-[2.5rem] max-w-xl">
        {currentText}
        {!reduceMotion && <span className="blinking-cursor text-accent">|</span>}
      </p>
      <a
        href="#about"
        onClick={(e) => {
          const el = document.getElementById("about");
          if (!el) return;
          e.preventDefault();
          el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
          history.pushState(null, "", "#about");
        }}
        className="mt-10 px-7 py-3 text-sm font-mono tracking-[0.12em] uppercase text-on-accent bg-accent rounded-full hover:brightness-110 transition-[filter]"
      >
        Open the journal
      </a>
    </section>
  );
}
