import { Profile } from '../components/Profile';
import { TechStack } from '../components/sections/TechStack';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/Education';
import { useLanguage } from '../context/LanguageContext';

export function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Profile />
      <Experience />
      <TechStack />
      <Education />
    </div>
  );
}