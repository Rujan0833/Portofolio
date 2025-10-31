import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const codeSnippet = [
    {
      line: '// Welcome to my portfolio',
      color: 'text-gray-400'
    },
    {
      line: 'const developer = {',
      color: 'text-blue-400'
    },
    {
      line: '  name: "Rujan Rajlawat",',
      color: 'text-green-400'
    },
    {
      line: '  role: "Full Stack Developer",',
      color: 'text-green-400'
    },
    {
      line: '  skills: ["React", "Next.js", "Node.js", "Blockchain"],',
      color: 'text-green-400'
    },
    {
      line: '  passion: "Building amazing web apps"',
      color: 'text-green-400'
    },
    {
      line: '};',
      color: 'text-blue-400'
    },
    {
      line: '',
      color: ''
    },
    {
      line: 'function greeting() {',
      color: 'text-purple-400'
    },
    {
      line: '  return "Thanks for visiting!";',
      color: 'text-green-400'
    },
    {
      line: '}',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),rgba(255,255,255,0)_600px)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-900/10 text-gray-900 dark:bg-white/10 dark:text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">
              Rujan Rajlawat
            </span>
          </motion.h1>
          <motion.p 
            className="text-gray-700 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Computer Science Student & Web Developer
          </motion.p>
          <motion.p 
            className="text-gray-700 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Aspiring Computer Science professional with expertise in programming languages and web development. 
            I specialize in building responsive, user-focused applications.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg dark:from-white dark:via-gray-100 dark:to-gray-200 dark:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg dark:from-white dark:via-gray-100 dark:to-gray-200 dark:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm space-y-2 overflow-hidden">
                {codeSnippet.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`${line.color}`}
                  >
                    {line.line}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-4 bg-blue-400 inline-block"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 