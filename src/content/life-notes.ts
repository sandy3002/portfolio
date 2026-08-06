export type LifeNote = {
  id: string;
  title: string;
  caption: string;
  stamp?: string;
  place?: string;
  /** Placeholder tint when no image is set yet */
  tint: string;
  rotation: number;
};

export const lifeNotes: LifeNote[] = [
  {
    id: 'painting',
    title: 'A painting I made',
    caption:
      'Fluorescent scribbles and stubborn lines — someday a real photo lands here.',
    stamp: 'Sometime',
    place: 'Desk corner',
    tint: 'from-[#e8dfd0] to-[#c9b8a0]',
    rotation: -2.5,
  },
  {
    id: 'solo-trip',
    title: 'A solo trip',
    caption:
      "One bag, cool rocks, and a story I haven't written down yet. Photo coming.",
    stamp: 'On the road',
    place: 'TBD',
    tint: 'from-[#d4e0d8] to-[#a8c4b4]',
    rotation: 1.8,
  },
  {
    id: 'doodle',
    title: 'A doodle that stuck',
    caption:
      'The sketch that refused to stay in the margins. Placeholder until I scan it.',
    stamp: 'Notebook',
    place: 'Wherever I sat',
    tint: 'from-[#e0d8e8] to-[#b8a8c8]',
    rotation: -1.2,
  },
];
