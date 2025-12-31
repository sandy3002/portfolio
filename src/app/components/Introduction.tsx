'use client';

import { useEffect, useState } from 'react';

const lines = [
  "I'm a curious engineer.",
  'I have a keen interest in DevOps and cloud infrastructure.',
  'I doodle my thoughts into scribbles.',
  'I travel to collect stories and cool rocks.',
  'I procrastinate by being productive (and doomscrolling Instagram).',
];

export default function Introduction() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentLine = lines[currentIndex];

    if (isTyping) {
      if (currentText.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentLine.slice(0, currentText.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait 3 seconds then start clearing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Clearing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished clearing, move to next line
        setCurrentIndex((prev) => (prev + 1) % lines.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping]);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center bg-surface snap-start"
    >
      <h1 className="font-bold md:text-7xl text-base">
        Hello, I&apos;m <span className='text-blue-950'>Sandipan Chatterjee</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-muted min-h-[2rem] md:min-h-[3rem]">
        {currentText}
        <span className="blinking-cursor">
          |
        </span>
      </p>
      <a
        href="#projects"
        onClick={(e) => {
          const el = document.getElementById('projects');
          if (!el) return;
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', '#projects');
        }}
        className="mt-8 px-8 py-3 text-lg font-semibold text-on-accent bg-accent rounded-full hover:brightness-90 transition-colors"
      >
        View my work
      </a>
    </section>
  );
}
