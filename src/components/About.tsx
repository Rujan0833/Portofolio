import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Solidity"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Django", "REST APIs"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Blockchain & Web3",
      items: ["Smart Contracts", "Ethers.js", "IPFS"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git/GitHub", "Docker", "Vercel"]
    }
  ];

  return (
  <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I am a passionate Computer Science student and web developer with a strong foundation in both front-end and back-end technologies. My journey in programming began with a curiosity for creating digital solutions that make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I specialize in building responsive, user-focused applications using modern technologies like React, Next.js, and TypeScript. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-colors">React</span>
              <span className="px-3 py-1.5 text-sm bg-purple-500/10 text-purple-400 rounded-full hover:bg-purple-500/20 transition-colors">TypeScript</span>
              <span className="px-3 py-1.5 text-sm bg-green-500/10 text-green-400 rounded-full hover:bg-green-500/20 transition-colors">Node.js</span>
              <span className="px-3 py-1.5 text-sm bg-yellow-500/10 text-yellow-400 rounded-full hover:bg-yellow-500/20 transition-colors">Tailwind CSS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-sm bg-gray-200/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 