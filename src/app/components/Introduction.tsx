'use client';

import { useEffect } from 'react';

export default function Introduction() {
  useEffect(() => {}, []);
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center bg-surface snap-start"
    >
      <h1 className="font-bold md:text-7xl text-base">
        Hello, I&apos;m Sandipan Chatterjee
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-muted">
        I&apos;m a curious engineer and adventurer.
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
