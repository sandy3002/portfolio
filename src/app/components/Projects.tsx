"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/content/projects";
import Section from "./Section";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      chapter="03 · Things I've Built"
      title="Pages, games, and small tools"
      lead="A few stops from the notebook — short stories, not feature lists."
    >
      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="group grid md:grid-cols-[4rem_1fr] gap-4 md:gap-8 py-6 border-b border-rule last:border-0"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.45,
              delay: reduceMotion ? 0 : index * 0.06,
              ease: "easeOut",
            }}
          >
            <span className="font-mono text-sm text-muted pt-1">
              {project.number}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted border border-rule px-2 py-0.5 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-muted leading-relaxed max-w-2xl mb-4">
                {project.description}
              </p>
              <p className="font-mono text-xs text-muted tracking-wide mb-5">
                {project.technologies.join(" · ")}
              </p>
              <div className="flex gap-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-accent hover:underline"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  Live
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors"
                >
                  <FaGithub className="text-sm" />
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <a
          href="https://github.com/sandy3002"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] border border-rule rounded-full text-ink hover:border-accent hover:text-accent transition-colors"
        >
          <FaGithub />
          More on GitHub
        </a>
      </div>
    </Section>
  );
}
