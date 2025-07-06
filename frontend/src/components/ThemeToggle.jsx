import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        key={darkMode ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;