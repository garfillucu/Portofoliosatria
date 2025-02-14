import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Inisialisasi EmailJS
emailjs.init("5IDNO5UozeoibpcMi"); // Ganti dengan Public Key Anda

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        'service_6x6awmj', // Ganti dengan Service ID Anda dari EmailJS
        'template_ltzlxzc', // Ganti dengan Template ID Anda
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sulistiawan Satria',
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        {t('contact.title')}
      </motion.h1>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-bold mb-6">{t('contact.contactInfo')}</h2>
          <div className="space-y-6">
            <motion.a 
              whileHover={{ x: 10 }}
              href="mailto:satrialimpad@gmail.com"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-medium">Email</p>
                <p>satrialimpad@gmail.com</p>
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ x: 10 }}
              href="https://wa.me/6282127428365"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p>+62 821-2742-8365</p>
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ x: 10 }}
              href="https://www.linkedin.com/in/satrialimpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p>linkedin.com/in/satrialimpad</p>
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ x: 10 }}
              href="https://github.com/SulistiawanSatria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
              <div>
                <p className="font-medium">GitHub</p>
                <p>github.com/SulistiawanSatria</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-bold mb-6">{t('contact.sendMessage')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 transition-all duration-300"
              />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 transition-all duration-300"
              />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 transition-all duration-300"
              />
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-all duration-300
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-indigo-700 hover:to-purple-700'}`}
            >
              <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              {isSubmitting ? 'Sending...' : t('contact.form.send')}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}