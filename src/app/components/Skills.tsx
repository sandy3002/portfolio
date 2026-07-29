'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { skillGroups } from '@/content/skills';
import Section from './Section';

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="skills"
      chapter="05 · Tools I Carry"
      title="The kit on the road"
      lead="Just the tools I reach for when building and shipping."
    >
      <div className="grid sm:grid-cols-2 gap-10 md:gap-16">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : index * 0.08,
              ease: 'easeOut',
            }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
              {group.label}
            </h3>
            <p className="font-serif text-2xl md:text-3xl text-ink leading-relaxed">
              {group.items.join(' · ')}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
