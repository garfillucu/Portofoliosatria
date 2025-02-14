export function Skills() {
  const skills = {
    technical: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' },
    ],
    soft: [
      'Problem Solving',
      'Team Collaboration',
      'Agile Methodology',
      'Project Management',
      'Communication',
      'Time Management',
    ]
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.technical.map((skill, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <p className="font-medium">{skill.name}</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.soft.map((skill, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}