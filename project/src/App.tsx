import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectPage } from './pages/ProjectPage';
import { Contact } from './pages/Contact';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticlesBackground } from './components/ParticlesBackground';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AnimatePresence mode="wait">
            {loading && <LoadingScreen />}
          </AnimatePresence>
          <ParticlesBackground />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100"
          >
            <Navbar />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="pt-16"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </motion.div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
