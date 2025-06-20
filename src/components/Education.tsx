import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    period: 'Sep 2023 – Present',
    degree: 'B.S. Software Engineering',
    institute: 'SZABIST University, Islamabad',
    details: [
      'Member, Google Developers Group content team',
      'Organized Google events',
      'Learned: Python, C++, OOP, DSA, DBMS, SQL, HTML, CSS, React, JS',
    ],
  },
  {
    period: '2018 – 2022',
    degree: 'O/A Levels (Math, Physics, CS)',
    institute: 'Benchmark School System, Rawalpindi',
    details: [
      'Grades: Math (B), Physics (B), CS (C)',
      'Focused on problem-solving & analytics',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-heading text-center text-accentDark mb-12">
          Education
        </h2>
        <div className="relative pl-12">
          <div className="absolute left-6 top-0 h-full w-px bg-gray-300" />
          <div className="space-y-12">
            {education.map((ed, i) => (
              <motion.div
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="absolute left-0 mt-1">
                  <div className="w-3 h-3 bg-accentBlue rounded-full" />
                  {i < education.length - 1 && (
                    <div className="w-px h-full bg-gray-300 mt-1" />
                  )}
                </div>
                <div className="card p-6 rounded-xl shadow-md w-full">
                  <div className="text-accentBlue font-body mb-2">{ed.period}</div>
                  <h3 className="font-heading text-xl text-accentDark mb-1">{ed.degree}</h3>
                  <p className="italic text-gray-600 mb-4">{ed.institute}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {ed.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
