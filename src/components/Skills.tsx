import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Data Structures & Algorithms',
  'JavaScript',
  'C++',
  'Python',
  '.NET / C#',
  'Node.js',
  'MongoDB',
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-accentGray">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-heading text-center text-accentDark mb-12">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <motion.span
              key={i}
              className="card px-4 py-2 rounded-full shadow-sm font-body text-accentDark"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
