import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface TechCategory {
  category: string;
  skills: Skill[];
}

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    skills: [
      { 
        name: "React", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      { 
        name: "TypeScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      { 
        name: "Tailwind CSS", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      },
      { 
        name: "Next.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      }
    ]
  },
  {
    category: "Backend",
    skills: [
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      { 
        name: "MySQL", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      { 
        name: "PostgreSQL", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { 
        name: "Git", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      }
    ]
  }
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 ease-in-out"
  >
    <div className="flex items-center space-x-4">
      <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">{skill.name}</h3>
      </div>
    </div>
  </motion.div>
);

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(techStack.map(cat => cat.category))];

  const filteredSkills = selectedCategory === 'All'
    ? techStack.flatMap(category => category.skills)
    : techStack.find(cat => cat.category === selectedCategory)?.skills || [];

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-24 container mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

      {/* Category Filter */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
