"use client";

import { motion, useReducedMotion } from "framer-motion";
import { lifeNotes } from "@/content/life-notes";
import Section from "./Section";
import EntryStamp from "./EntryStamp";

export default function LifeNotes() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="life"
      chapter="06 · Field Notes"
      title="Margins of the map"
      lead="Paintings, trips, doodles — cards waiting for the photos and stories you'll add."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
        {lifeNotes.map((note, index) => (
          <motion.article
            key={note.id}
            className="relative bg-card border border-rule p-3 pb-5 shadow-[0_10px_30px_rgba(26,25,23,0.07)]"
            style={{
              transform: reduceMotion
                ? undefined
                : `rotate(${note.rotation}deg)`,
            }}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: reduceMotion ? 0 : index * 0.1,
              ease: "easeOut",
            }}
          >
            {/* Tape accent */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#e8d9a8]/85 rotate-[-1deg] shadow-sm z-10"
              aria-hidden
            />
            <div
              className={`aspect-[4/3] w-full bg-gradient-to-br ${note.tint} mb-4 flex items-center justify-center`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                Photo soon
              </span>
            </div>
            {(note.stamp || note.place) && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2 px-1">
                {note.stamp && <EntryStamp>{note.stamp}</EntryStamp>}
                {note.place && (
                  <span className="font-mono text-xs text-muted">
                    {note.place}
                  </span>
                )}
              </div>
            )}
            <h3 className="font-serif text-xl text-ink px-1">{note.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed px-1">
              {note.caption}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
