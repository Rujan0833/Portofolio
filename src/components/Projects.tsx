import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Charity Platform",
      description:
        "Decentralized charity platform on Ethereum testnet with Solidity smart contracts, Django REST API admin dashboard, Next.js frontend, Merkle Tree verification for donation transparency, and Web3 wallet connectivity with real-time transaction tracking.",
      technologies: [
        "Solidity",
        "Next.js",
        "Django REST",
        "Ethers.js",
        "Web3.js",
        "IPFS",
        "Merkle Trees"
      ],
      github: "https://github.com/Rujan0833/Blockchain-Project.git",
      image: "/projects/mainpage.png",
      
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and interactive components.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Rujan0833/Portofolio.git",
      image: "/projects/image.png",
      demo: "https://rujan-portfolio.vercel.app"
    },
    {
      title: "KantipurFitness",
      description: "A comprehensive fitness platform built with modern web technologies, featuring workout tracking, nutrition planning, and community features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Rujan0833/KantipurFitness.git",
      image: "/projects/kantipur-fitness.png",
      demo: "https://kantipur-fitness.vercel.app"
    },
    {
      title: "Raw Endurance E-commerce",
      description: "A full-featured e-commerce platform for fitness and sports equipment, with secure payment processing and inventory management.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com/kushal2060/e-commerce.git",
      image: "/projects/e-com.png",
      demo: "https://raw-endurance.vercel.app"
    },
    {
      title: "Interactive Government Site",
      description: "A modern government website prototype focusing on user experience and accessibility, featuring interactive service portals.",
      technologies: ["Figma"],
      figma: "https://www.figma.com/proto/ArXOveVBO4foWdEQpIdQ6B/Government-Site?node-id=5-196",
      image: "/projects/goverment.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed py-1">Projects</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-video relative overflow-hidden bg-white dark:bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black/30 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm bg-gray-200/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${project.title === 'Portfolio Website' ? 'bg-white text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:dark:bg-gray-600 hover:bg-gray-100'}`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Figma
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 

//hye there