import React, { useEffect } from 'react';
import Threads from './components/Threads';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // nothing here now
  }, []);

  return (
    <div className="relative z-0">
      {/* Thread background */}
      <Threads />

      {/* Main content */}
      <NavBar />
      <main className="relative z-10 pt-20 space-y-32">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
