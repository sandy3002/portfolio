export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'build',
    label: 'Build',
    items: ['React', 'Next.js', 'Nest.js', 'Node.js', 'Python'],
  },
  {
    id: 'run',
    label: 'Run',
    items: ['Docker', 'AWS'],
  },
];
