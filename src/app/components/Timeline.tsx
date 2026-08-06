'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { timeline } from '@/content/timeline';
import Section from './Section';
import EntryStamp from './EntryStamp';
import prismforce from '@/app/images/prismforce.png';
import iitm from '@/app/images/iitm.png';
import jgec from '@/app/images/jgec.png';
import khs from '@/app/images/khs.png';

const logos = {
  prismforce,
  iitm,
  jgec,
  khs,
} as const;

export default function Timeline() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="timeline"
      chapter="04 · Along the Way"
      title="Stops on the map"
      lead="Work and school - where I was, what I learned."
    >
      <ol className="relative border-l border-rule ml-3 md:ml-4 space-y-10">
        {timeline.map((entry, index) => {
          const logo =
            entry.logo && entry.logo in logos
              ? logos[entry.logo as keyof typeof logos]
              : null;

          return (
            <motion.li
              key={entry.id}
              className="relative pl-8 md:pl-10"
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.05,
                ease: 'easeOut',
              }}
            >
              <span
                className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-paper"
                aria-hidden
              />
              <EntryStamp>{entry.stamp}</EntryStamp>
              <div className="mt-2 flex items-start gap-4">
                {logo && (
                  <div className="shrink-0 w-10 h-10 rounded-full bg-card border border-rule flex items-center justify-center overflow-hidden mt-0.5">
                    <Image
                      src={logo}
                      alt=""
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-ink">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-muted mt-0.5">{entry.place}</p>
                  <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                    {entry.summary}
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
