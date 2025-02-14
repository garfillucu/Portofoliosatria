import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-center"
      >
        <Code className="w-16 h-16 mb-4 mx-auto text-indigo-400" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5 }}
          className="h-1 bg-indigo-500 rounded-full w-32"
        />
      </motion.div>
    </motion.div>
  );
}