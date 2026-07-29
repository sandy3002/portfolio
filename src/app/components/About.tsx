'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import aboutImage from '@/app/images/dp.png';
import Section from './Section';

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="about"
      chapter="02 · Who I Am"
      title="A short note on myself"
      lead="Engineer by day. Doodler, traveler, and rock collector in the margins."
    >
      <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 md:gap-16 items-center">
        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="relative bg-white p-3 pb-9 shadow-[0_12px_40px_rgba(26,25,23,0.1)] border border-rule rotate-[-1.5deg]">
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#e8d9a8]/80 rotate-1 shadow-sm"
              aria-hidden
            />
            <div className="bg-[#BDC4C1] overflow-hidden">
              <Image
                src={aboutImage}
                alt="Sandipan Chatterjee"
                width={480}
                height={560}
                className="w-full h-auto object-cover aspect-[4/5] grayscale-[10%]"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-5 text-lg text-muted leading-relaxed"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
        >
          <p>
            I build things for the web — and I&apos;m increasingly curious about
            the infrastructure that keeps them alive. Deployments, automation,
            the quiet reliability behind a smooth digital experience: that
            bigger picture is what pulls me in.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me doodling (masterpieces
            and stick figures alike), planning the next trip, or chasing a new
            playlist with a fresh coffee brew. Art supplies and a suitcase are
            my usual sidekicks.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
