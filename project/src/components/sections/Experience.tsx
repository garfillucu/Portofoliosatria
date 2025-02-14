import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">{t('experience.title')}</h2>
      <div className="space-y-4">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold">{t('experience.businessDev.title')}</h3>
              <p className="text-indigo-600 dark:text-indigo-400">{t('experience.businessDev.company')}</p>
              <p className="text-gray-600 dark:text-gray-300">{t('experience.businessDev.period')}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {t('experience.businessDev.description')}
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300">
            {t('experience.businessDev.responsibilities', { returnObjects: true }).map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}