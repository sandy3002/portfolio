'use client';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaLinux,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
} from 'react-icons/si';
import { useEffect } from 'react';

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact size={48} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={48} /> },
    { name: 'Nest.js', icon: <SiNestjs size={48} /> },
    { name: 'Node.js', icon: <FaNodeJs size={48} /> },
    { name: 'TypeScript', icon: <SiTypescript size={48} /> },
    { name: 'JavaScript', icon: <FaJsSquare size={48} /> },
    { name: 'HTML5', icon: <FaHtml5 size={48} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={48} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} /> },
    { name: 'Git', icon: <FaGitAlt size={48} /> },
    { name: 'Linux', icon: <FaLinux size={48} /> },
    { name: 'Docker', icon: <FaDocker size={48} /> },
  ];

  useEffect(() => { }, []);
  return (
    <section id="skills" className="py-20 bg-surface snap-start">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-12 text-3xl">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-base">{skill.icon}</div>
              <p className="mt-4 font-semibold text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
