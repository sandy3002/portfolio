'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {

  const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project, highlighting the technologies used and the problems solved.',
    image: 'https://via.placeholder.com/500x300',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project, highlighting the technologies used and the problems solved.',
    image: 'https://via.placeholder.com/500x300',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the project, highlighting the technologies used and the problems solved.',
    image: 'https://via.placeholder.com/500x300',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

    useEffect(() => {}, []);
  return (
      <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-12 text-3xl">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
              <div key={project.title} className="bg-surface rounded-lg shadow-lg overflow-hidden">
              <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-56 object-cover" />
              <div className="p-6">
                  <h3 className="font-bold mb-2 text-base">{project.title}</h3>
                  <p className="text-muted mb-4">{project.description}</p>
                <div className="flex justify-between">
                    <a href={project.liveUrl} className="text-link hover:underline">
                    <FaExternalLinkAlt className="inline mr-1 text-gray-500 hover:text-gray-950 transition-normal duration-500" />
                  </a>
                    <a href={project.sourceUrl} className="text-muted hover:underline">
                    <FaGithub className="inline mr-1 text-gray-500 hover:text-gray-950 transition-normal duration-500" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
