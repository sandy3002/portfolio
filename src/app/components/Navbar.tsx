'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import logo from '@/app/images/sc.jpg';

const navItems = [
  { href: '/#home', label: 'Cover' },
  { href: '/#about', label: 'Who I Am' },
  { href: '/#projects', label: 'Built' },
  { href: '/#timeline', label: 'Along the Way' },
  { href: '/#skills', label: 'Tools' },
  { href: '/#life', label: 'Field Notes' },
  { href: '/#contact', label: 'Write Me' },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${el.offsetHeight}px`,
      );
    };

    setVar();
    const RO = window.ResizeObserver;
    const ro = RO ? new RO(setVar) : null;
    if (ro) ro.observe(el);
    window.addEventListener('resize', setVar);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', setVar);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-rule"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <nav className="flex justify-between items-center py-3">
          <Link
            href="/#home"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <Image
              src={logo}
              alt="Sandipan Chatterjee"
              width={36}
              height={36}
              className="rounded-full border border-rule"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-xs tracking-[0.12em] uppercase text-muted hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="lg:hidden font-mono text-xs tracking-[0.14em] uppercase text-ink border border-rule px-3 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-rule bg-paper"
        >
          <ul className="container mx-auto px-4 max-w-5xl py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block font-serif text-2xl text-ink hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
