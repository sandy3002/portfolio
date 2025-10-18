'use client';
import { FiCheck } from 'react-icons/fi';

import { useEffect } from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaRocket,
  FaLightbulb,
} from 'react-icons/fa';

export default function Projects() {
  // Color mapping for gradients
  const colorMap: Record<string, string> = {
    'blue-500': '#3b82f6',
    'purple-600': '#9333ea',
    'red-500': '#ef4444',
    'orange-500': '#f97316',
    'green-500': '#22c55e',
    'teal-500': '#14b8a6',
  };

  const projects = [
    {
      id: 1,
      title: 'HackWars',
      description: 'Official website for HackWars, an intra college hackathon of JGEC',
      technologies: ['Next.js', 'TypeScript', 'MongoDB'],
      category: 'Web Application',
      liveUrl: 'https://hackwars.netlify.app/',
      sourceUrl: 'https://github.com/sandy3002/hackwars',
      icon: FaCode,
      startColor: 'blue-500',
      endColor: 'purple-600',
      gradient: 'from-blue-500 to-purple-600',
      status: 'Live',
    },
    {
      id: 2,
      title: 'Dragon Slayer',
      description:
        'An immersive RPG game engine with silly fun. Features strategic gameplay and hidden paths.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Game Development',
      liveUrl: 'https://dragon-slayer-game.vercel.app/',
      sourceUrl: 'https://github.com/sandy3002/dragon-slayer',
      icon: FaRocket,
      startColor: 'green-500',
      endColor: 'teal-500',
      gradient: 'from-green-500 to-teal-500',
      status: 'Live',
    },
    {
      id: 3,
      title: 'YouTube Playlist Downloader',
      description:
        'A tool to download YouTube playlists in mp3 format. Built with a focus on performance and user experience.',
      technologies: ['Node.js', 'ffmpeg', 'YouTube API'],
      category: 'Web Application',
      liveUrl: 'https://github.com/sandy3002/ypd',
      sourceUrl: 'https://github.com/sandy3002/ypd',
      icon: FaLightbulb,
      startColor: 'red-500',
      endColor: 'orange-500',
      gradient: 'from-red-500 to-orange-500',
      status: 'Beta',
    },
  ];

  useEffect(() => {}, []);
  return (
    <section id="projects" className="py-20 bg-surface snap-start">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-bold text-center mb-4 text-3xl">My Projects</h2>
        <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve been working on, showcasing my
          skills in various technologies and domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <article
                key={project.id}
                className="group relative bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live'
                        ? 'bg-gray-100 text-gray-500'
                        : project.status === 'Beta'
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Icon with Gradient Background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]`}
                >
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient
                        id={`gradient-${project.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop
                          stopColor={colorMap[project.startColor]}
                          offset="0%"
                        />
                        <stop
                          stopColor={colorMap[project.endColor]}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <IconComponent
                    className="text-2xl"
                    style={{
                      fill: `url(#gradient-${project.id})`,
                      color: `url(#gradient-${project.id})`,
                    }}
                  />
                </div>

                {/* Category */}
                <div className="text-sm font-medium text-muted mb-2 uppercase tracking-wide">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-900 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - Fixed at bottom */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 mt-auto">
                    <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-500 group/link"
                    aria-label={`View ${project.title} live demo`}
                    >
                    <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform duration-500" />
                    </a>
                  <a
                    href={project.sourceUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-500 group/link"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub className="text-sm group-hover/link:scale-110 transition-transform duration-500" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-on-accent rounded-full font-semibold hover:brightness-90 transition-all duration-300 hover:scale-102"
          >
            <FaGithub />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
