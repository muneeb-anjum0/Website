import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Sorting Visualizer',
    period: 'Feb 2025 – Present',
    desc: `Interactive sorting visualizer demonstrating 10 algorithms in real-time with speed control, stats overlays, and a minimalist UI.`,
    link: 'https://github.com/muneeb-anjum0/SortingVisualizer',
  },
  {
    title: 'Match-Three Game',
    period: 'Feb 2025 – May 2025',
    desc: `A classic match-three puzzle implemented in C++ & SFML, featuring smooth animations, intuitive controls, and scalable grid layouts.`,
    link: 'https://github.com/muneeb-anjum0/Match-Three',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-heading text-center text-accentDark mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm	grid-cols-2 gap-8 justify-items-center">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="card bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition w-full max-w-sm h-80 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div>
                <h3 className="font-heading text-2xl text-accentDark mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.period}</p>
              </div>
              <div className="flex-grow overflow-auto mt-4 mb-4">
                <p className="text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex justify-end">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accentBlue hover:text-accentBlue/80 transition"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     );                        
    }             
