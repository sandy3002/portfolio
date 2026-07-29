export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
  status: 'Live' | 'Beta';
};

export const projects: Project[] = [
  {
    id: 'hackwars',
    number: '01',
    title: 'HackWars',
    description:
      "The official site for JGEC's intra-college hackathon — schedules, teams, and a bit of chaos, held together with Next.js.",
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    liveUrl: 'https://hackwars.netlify.app/',
    sourceUrl: 'https://github.com/sandy3002/hackwars',
    status: 'Live',
  },
  {
    id: 'dragon-slayer',
    number: '02',
    title: 'Dragon Slayer',
    description:
      'A small RPG engine with silly fun, strategic turns, and hidden paths — the kind of game you build for the joy of it.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://dragon-slayer-game.vercel.app/',
    sourceUrl: 'https://github.com/sandy3002/dragon-slayer',
    status: 'Live',
  },
  {
    id: 'home-file-server',
    number: '03',
    title: 'Home File Server',
    description:
      'A self-hosted Flask file server — browse, upload, download, and stream media from any device on your network (or the internet via Cloudflare Tunnel).',
    technologies: ['Python', 'Flask', 'MongoDB', 'Docker'],
    liveUrl: 'https://github.com/sandy3002/home-file-server',
    sourceUrl: 'https://github.com/sandy3002/home-file-server',
    status: 'Beta',
  },
];
