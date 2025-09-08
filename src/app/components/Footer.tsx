'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Footer() {

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub size={24} />, url: '#' },
  { name: 'LinkedIn', icon: <FaLinkedin size={24} />, url: '#' },
  { name: 'Twitter', icon: <FaTwitter size={24} />, url: '#' },
];

  useEffect(() => {}, []);
  return (
  <footer className="bg-surface text-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0 text-muted">
            &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
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
