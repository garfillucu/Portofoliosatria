import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ path: string; label: string }>;
};

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { t } = useLanguage();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 z-50 shadow-xl"
            >
              <div className="p-4">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ml-auto block"
                >
                  <X className="w-6 h-6" />
                </button>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={onClose}
                          className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}