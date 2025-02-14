import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypingAnimation } from './TypingAnimation';
import { useLanguage } from '../context/LanguageContext';

export function Profile() {
  const { t } = useLanguage();
  
  const titles = [
    t('profile.title'),
    "Frontend Developer",
    "Backend Developer",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-8"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-48 h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex-1"
      >
        <h1 className="text-4xl font-bold mb-2">Sulistiawan Satria Limpad</h1>
        <TypingAnimation texts={titles} />
        <p className="text-gray-600 dark:text-gray-300 mb-6 mt-4 max-w-2xl">
          {t('profile.description')}
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1HJdfwqpQ09k2PdW8psdXgFRvesFquGAW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5" />
          {t('profile.downloadCV')}
        </motion.a>


          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/SulistiawanSatria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            {t('profile.viewGithub')}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/satrialimpad/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            {t('profile.viewLinkedIn')}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:satrialimpad@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            {t('profile.sendEmail')}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
