import React from 'react';
import { motion } from 'framer-motion';

const exps = [
  {
    period: 'Jun 2025 – Present',
    role: 'Backend Intern @ App in Snap',
    desc: 'Building & maintaining .NET Core / ASP.NET Core APIs',
  },
  {
    period: 'Feb 2025 – Present',
    role: 'OpenGL Developer (Self-employed)',
    desc: 'Real-time rendering app in C++ (GLFW, GLEW, GLAD, ImGui)',
  },
  {
    period: 'Feb 2025 – Jun 2025',
    role: 'Web Content Writer @ GDG',
    desc: 'Blog & social posts, SEO & SMO for Google Developer events',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-accentGray"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-heading text-center text-accentDark mb-12">
          Experience
        </h2>
        <div className="relative pl-12">
          <div className="absolute left-6 top-0 h-full w-px bg-gray-400" />
          <div className="space-y-12">
            {exps.map((e, i) => (
              <motion.div
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="absolute left-0 mt-1">
                  <div className="w-3 h-3 bg-accentOrange rounded-full" />
                  {i < exps.length - 1 && (
                    <div className="w-px h-full bg-gray-400 mt-1" />
                  )}
                </div>
                <div className="card p-6 rounded-xl shadow-md w-full">
                  <div className="text-accentOrange font-body mb-2">{e.period}</div>
                  <h3 className="font-heading text-xl text-accentDark mb-1">{e.role}</h3>
                  <p className="text-gray-700">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
