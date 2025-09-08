'use client';

import { FaGraduationCap } from 'react-icons/fa';

type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  timeframe: string;
  description?: string;
};

const educationData: EducationEntry[] = [
  {
    id: 'edu-1',
    institution: 'University of Example',
    degree: 'B.Sc. in Computer Science',
    timeframe: '2016 — 2020',
    description:
      'Focused on software engineering, algorithms, and web development. Graduated with honors and completed a senior capstone project on scalable web applications.',
  },
  {
    id: 'edu-2',
    institution: 'Example Bootcamp',
    degree: 'Full-Stack Web Development Certificate',
    timeframe: '2021',
    description:
      'Intensive practical training in React, Node.js, TypeScript and modern tooling.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-12 text-3xl">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <article
              key={edu.id}
              className="flex flex-col p-6 m-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white/5"
              aria-labelledby={`edu-${edu.id}-title`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent text-on-accent">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h3
                    id={`edu-${edu.id}-title`}
                    className="font-semibold text-base"
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted">{edu.institution}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-muted">{edu.timeframe}</p>
                {edu.description && (
                  <p className="mt-3 text-base">{edu.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
