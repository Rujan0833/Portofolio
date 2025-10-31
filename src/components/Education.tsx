import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  courses: string[];
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Tribhuvan University",
      duration: "2021 - Present",
      description: "Currently pursuing a degree in Computer Science with a focus on software development and web technologies.",
      courses: ["Data Structures", "Algorithms", "Database Management", "Web Development"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Little Angels School",
      duration: "2018 - 2020",
      description: "Completed higher secondary education with a focus on science and mathematics.",
      courses: ["Physics", "Mathematics", "Computer Science", "English"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed py-1">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2"></div>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu: EducationItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-900 to-gray-100 rounded-full"></div>
              <div className="ml-8">
                <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{edu.institution}</p>
                  <p className="text-gray-700 dark:text-gray-400 mb-4">{edu.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course: string, courseIndex: number) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1.5 text-sm bg-gray-200/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 