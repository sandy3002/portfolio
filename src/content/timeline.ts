export type TimelineEntry = {
  id: string;
  kind: 'work' | 'education';
  stamp: string;
  title: string;
  place: string;
  summary: string;
  logo?: string;
};

export const timeline: TimelineEntry[] = [
  {
    id: 'exp-1',
    kind: 'work',
    stamp: '2025 — Present',
    title: 'Backend Engineer',
    place: 'Prismforce',
    summary:
      'Shipping product with React and Nest.js — faster pages, optimized APIs, and a TypeScript migration that broke in production.',
    logo: 'prismforce',
  },
  {
    id: 'edu-1',
    kind: 'education',
    stamp: '2021 — 2025',
    title: 'B.Tech. in Computer Science',
    place: 'Jalpaiguri Government Engineering College',
    summary:
      'Four years of CS, late nights, and hackathons. Graduated with a CGPA of 8.0.',
    logo: 'jgec',
  },
  {
    id: 'exp-2',
    kind: 'work',
    stamp: 'Jun — Aug 2024',
    title: 'Network Security Intern',
    place: 'IIT Madras',
    summary:
      'Decompiled binaries, automated reverse-engineering workflows, and used this chance to enjoy the beaches of Mahabalipuram.',
    logo: 'iitm',
  },
  {
    id: 'edu-2',
    kind: 'education',
    stamp: '2014 — 2021',
    title: 'Higher Secondary',
    place: 'Krishnagar High School',
    summary:
      'Where the foundation was laid — scored 90.2% somehow and learned how to keep showing up even in rainy days.',
    logo: 'khs',
  },
];
