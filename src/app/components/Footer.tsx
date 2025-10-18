'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Footer() {

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub size={24} />, url: 'https://github.com/sandy3002' },
  { name: 'LinkedIn', icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/sandipan-chatterjee-jgec/' },
  { name: 'Email', icon: <FaEnvelope size={24} />, url: 'mailto:sandipan3002@gmail.com' },
];

  useEffect(() => {}, []);
  return (
  <footer className="bg-surface text-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0 text-muted">
            &copy; {new Date().getFullYear()} Sandipan. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
