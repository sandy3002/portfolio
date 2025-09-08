"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      const height = el.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    };

    setVar();

    // Update when the header size changes (e.g., on resize or responsive changes)
    const RO = (window as unknown as { ResizeObserver?: typeof ResizeObserver }).ResizeObserver;
    const ro = RO ? new RO(setVar) : null;
    if (ro) ro.observe(el);
    window.addEventListener('resize', setVar);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', setVar);
    };
  }, []);

  return (
  <header ref={headerRef} className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link href="/#home" className="text-2xl font-bold">
            MyPortfolio
          </Link>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/#home" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-gray-600 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="text-gray-600 hover:text-black">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="text-gray-600 hover:text-black">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#education" className="text-gray-600 hover:text-black">
                Education
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="text-gray-600 hover:text-black">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
