import Image from 'next/image';
import { StaticImageData } from 'next/image';
import khs from '@/app/images/khs.png';
import jgec from '@/app/images/jgec.png';

type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  timeframe: string;
  cgpa?: string;
  logo: StaticImageData;
};

const educationData: EducationEntry[] = [
  {
    id: 'edu-1',
    institution: 'Jalpaiguri Government Engineering College',
    degree: 'B.Tech. in Computer Science',
    timeframe: '2021 - 2025',
    logo: jgec,
    cgpa: '8.0',
  },
  {
    id: 'edu-2',
    institution: 'Krishnagar High School',
    degree: 'Higher Secondary',
    timeframe: '2014 - 2021',
    logo: khs,
    cgpa: '90.2%',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-surface snap-start">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-12 text-3xl">Education</h2>

        <div className="space-y-6 w-5xl mx-auto">
          {educationData.map((edu) => (
            <article
              key={edu.id}
              className="flex flex-col p-8 m-10 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white/5"
              aria-labelledby={`edu-${edu.id}-title`}
            >
              <div className="flex items-center gap-8">
                <div className="p-2 rounded-full bg-white border border-gray-200 shadow-xl text-on-accent">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={100}
                    height={100}
                  />
                </div>
                <div className='p-4 -mt-8'>
                  <h2
                    id={`edu-${edu.id}-title`}
                    className="font-semibold text-lg"
                  >
                    {edu.institution}
                  </h2>
                  <p className="text-sm text-muted">{edu.degree}</p>
                  <p className="text-sm text-muted">{edu.timeframe}</p>
                  {edu.cgpa && (
                    <p className="text-sm text-muted">CGPA: {edu.cgpa}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
