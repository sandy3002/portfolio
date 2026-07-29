"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import EntryStamp from "./EntryStamp";
import Rule from "./Rule";

type SectionProps = {
  id: string;
  chapter: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  chapter,
  title,
  lead,
  children,
  className = "",
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`py-20 md:py-28 bg-paper ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.header
          className="mb-12 md:mb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <EntryStamp>{chapter}</EntryStamp>
          <h2 className="font-serif text-3xl md:text-5xl text-ink mt-3 tracking-tight">
            {title}
          </h2>
          {lead && (
            <p className="mt-4 text-muted text-lg max-w-2xl leading-relaxed">
              {lead}
            </p>
          )}
          <Rule className="mt-8" />
        </motion.header>
        {children}
      </div>
    </section>
  );
}
