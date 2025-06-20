import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-heading text-accentDark mb-4"
      >
        Hello, I’m Muneeb Anjum
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-xl font-body text-xl text-gray-700"
      >
        A Software Engineer & Backend Developer based in Islamabad. I build high-quality web apps and graphics tools.
      </motion.p>
    </section>
  );
}
