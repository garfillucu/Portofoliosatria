import { motion } from 'framer-motion';
import { type TechCategory } from '../../types';

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  }
];

const MarqueeContent = ({ skills }: { skills: typeof techStack[0]['skills'] }) => (
  <div className="flex items-center">
    {skills.map((skill, index) => (
      <div key={index} className="flex items-center mx-8 bg-white dark:bg-gray-700 px-6 py-3 rounded-lg shadow-sm">
        <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
        <span className="text-base font-medium ml-3">{skill.name}</span>
      </div>
    ))}
  </div>
);

export function TechStack() {
  const allSkills = techStack.flatMap(category => category.skills);

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-24"
    >
      <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>

      {/* Marquee Animation */}
      <div className="relative flex overflow-x-hidden bg-gray-100 dark:bg-gray-800 py-6">
        <div className="animate-marquee whitespace-nowrap">
          <MarqueeContent skills={allSkills} />
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6">
          <MarqueeContent skills={allSkills} />
        </div>
      </div>
    </motion.div>
  );
}