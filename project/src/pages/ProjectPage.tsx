import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export function ProjectPage() {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="relative h-[50vh]">
        <img 
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <button
          onClick={() => navigate('/projects')}
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200"
                >
                  <Github className="w-5 h-5" />
                  {t('projects.viewCode')}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('projects.viewDemo')}
                </a>
              )}
            </div>
          </div>

          <p className="text-lg mb-8">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Project Duration</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.duration}</p>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
