import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'HTML5', 'CSS3'] },
    { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'ShadcnUI', 'Responsive Design'] },
    { category: 'Backend', items: ['Node.js', 'Django', 'Express.js', 'Django REST Framework', 'RESTful APIs', 'Payload CMS'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Firebase Firestore'] },
    { category: 'Blockchain & Web3', items: ['Smart Contracts', 'Hardhat', 'Ethers.js', 'Web3.js', 'IPFS', 'Merkle Trees'] },
    { category: 'Frameworks & Tools', items: ['Frappe Framework', 'Payload CMS', 'React Query', 'Git/GitHub', 'Vercel', 'Railway', 'Docker', 'Postman', 'VS Code', 'Figma'] },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="max-w-3xl mx-auto text-justify text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Full-stack web developer with hands-on experience building scalable applications using modern technologies including React.js, Next.js, Django, and Payload CMS.
              Skilled in creating user-friendly interfaces, implementing secure authentication systems, and integrating APIs with headless CMS solutions. Experienced in both traditional
              web development and emerging blockchain technologies. Passionate about solving real-world problems with clean, efficient code and committed to continuous learning and adapting to new frameworks and tools.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-sm bg-blue-900/20 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300 rounded-full hover:bg-blue-900/30 dark:hover:bg-blue-500/30 transition-colors">
                React
              </span>

              <span className="px-3 py-1.5 text-sm bg-sky-500/20 text-sky-700 dark:bg-sky-400/20 dark:text-sky-300 rounded-full hover:bg-sky-500/30 dark:hover:bg-sky-400/30 transition-colors">
                TypeScript
              </span>

              <span className="px-3 py-1.5 text-sm bg-green-600/20 text-green-700 dark:bg-green-500/20 dark:text-green-300 rounded-full hover:bg-green-600/30 dark:hover:bg-green-500/30 transition-colors">
                Node.js
              </span>

              <span className="px-3 py-1.5 text-sm bg-cyan-400/20 text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-300 rounded-full hover:bg-cyan-400/30 dark:hover:bg-cyan-400/30 transition-colors">
                Tailwind CSS
              </span>
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
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-sm bg-gray-200/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-900/20 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white transition-colors"
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