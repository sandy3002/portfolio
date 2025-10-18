'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import iitm from '@/app/images/iitm.png';
import prismforce from '@/app/images/prismforce.png';

type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  timeframe: string;
  bullets?: string[];
  logo: StaticImageData;
};

const experienceData: ExperienceEntry[] = [
  {
    id: 'exp-1',
    company: 'Prismforce',
    role: 'Backend Engineer',
    timeframe: 'Feb-2025 — Present',
    bullets: [
      'Built scalable React and Next.js applications used by thousands of users.',
      'Improved performance and accessibility, reducing page load by 30%.',
      'Led migration to TypeScript and modernized the component library.',
    ],
    logo: prismforce,
  },
  {
    id: 'exp-2',
    company: 'IIT Madras',
    role: 'Network Security Intern',
    timeframe: 'June-2024 — August-2024',
    bullets: [
      'Analyzed and decompiled binaries to understand application logic and vulnerabilities.',
      'Developed scripts and tools to automate reverse engineering workflows.',
      'Documented findings and contributed to security research reports.',
    ],
    logo: iitm,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-surface snap-start">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-12 text-3xl">Experience</h2>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <article
              key={exp.id}
              className="flex flex-col md:flex-row md:items-start gap-4 p-6 m-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white/5"
              aria-labelledby={`exp-${exp.id}-title`}
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-white border border-gray-200 shadow-xl text-on-accent">
                  <Image
                    src={exp.logo}
                    alt="Prismforce"
                    width={25}
                    height={25}
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3
                    id={`exp-${exp.id}-title`}
                    className="font-semibold text-base"
                  >
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted">{exp.timeframe}</span>
                </div>

                <p className="text-sm text-muted">{exp.company}</p>

                {exp.bullets && (
                  <ul className="mt-3 list-disc ml-5 space-y-2 text-base">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
