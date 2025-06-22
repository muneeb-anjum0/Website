// src/components/NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const sections = ['home','education','experience','projects','skills','contact'] as const;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Logo / Name */}
        <Link
          to="home"
          spy
          smooth
          offset={-80}
          duration={500}
          className="font-heading text-2xl text-accentDark tracking-widest cursor-pointer"
        >
          MUNEEB
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {sections.map(sec => (
            <li key={sec}>
              <Link
                to={sec}
                spy
                smooth
                offset={-80}
                duration={500}
                className="group font-heading uppercase text-sm text-accentDark tracking-wide hover:text-accentBlue transition cursor-pointer"
              >
                {sec}
                <span className="block h-0.5 bg-accentBlue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-accentDark focus:outline-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full inset-x-0 bg-white bg-opacity-90 backdrop-blur-sm transition-transform origin-top ${
          open ? 'scale-y-100' : 'scale-y-0'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {sections.map(sec => (
            <li key={sec}>
              <Link
                to={sec}
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="font-body text-lg text-accentDark hover:text-accentBlue uppercase"
              >
                {sec}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
