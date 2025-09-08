'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import aboutImage from '@/app/images/image.png';
export default function About() {
  useEffect(() => {}, []);
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              width={500}
              height={300}
              src={aboutImage}
              alt="About Me"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted mb-4">
              I am a passionate and creative web developer with a knack for
              building beautiful, user-friendly websites and applications. I
              have a strong foundation in front-end and back-end technologies
              and a love for learning and continuous improvement.
            </p>
            <p className="text-lg text-muted">
              I have a growing curiosity for the infrastructure side of
              technology, especially how systems are deployed, managed, and
              scaled efficiently. Exploring the processes that keep applications
              running smoothly fascinates me. I enjoy learning about the
              practices that ensure reliability, automation, and seamless
              collaboration between development and operations. This interest
              drives me to understand the bigger picture behind delivering
              robust digital experiences.
            </p>
            <p className="text-lg text-muted mt-4">
              When I&apos;m not coding, you&apos;ll probably find me doodling
              masterpieces (or stick figures) and daydreaming about my next
              travel adventure. Art supplies and a suitcase are my true
              sidekicks!
              <br />I also love discovering new music and experimenting with
              different coffee brews to fuel my creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
