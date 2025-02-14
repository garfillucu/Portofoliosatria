import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">{t('education.title')}</h2>
      <div className="space-y-4">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{t('education.bootcamp.title')}</h3>
              <p className="text-indigo-600 dark:text-indigo-400">RevoU</p>
              <p className="text-gray-600 dark:text-gray-300">2024</p>
            </div>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
              {t('education.status.completed')}
            </span>
          </div>
          <ul className="mt-3 mb-4 list-disc list-inside text-gray-600 dark:text-gray-300">
            {(t('education.bootcamp.highlights') as unknown as string[]).map((highlight: string, index: number) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <div className="flex gap-2">
          <a
            href="https://drive.google.com/file/d/1JLWGXF2wO0lxFO31pmf31i5y1pyKAkwy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Award className="w-5 h-5" />
            {t('education.viewCertificate')}
          </a>
            <a
              href="https://revou.co/software-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              {t('education.programDetails')}
            </a>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{t('education.university.title')}</h3>
              <p className="text-indigo-600 dark:text-indigo-400">Universitas Widyatama</p>
              <p className="text-gray-600 dark:text-gray-300">2019 - 2024</p>
            </div>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
              {t('education.status.graduate')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}