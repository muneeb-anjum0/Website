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
        {/* Logo */}
        <Link
          to="home"
          spy
          smooth
          offset={-80}
          duration={500}
          className="font-heading text-2xl text-accentDark cursor-pointer"
        >
          MUNEEB
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-8">
          {sections.map(sec => (
            <li key={sec}>
              <Link
                to={sec}
                spy
                smooth
                offset={-80}
                duration={500}
                className="group font-heading uppercase text-sm text-accentDark hover:text-accentBlue transition"
              >
                {sec}
                <span className="block h-0.5 bg-accentBlue scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-accentDark focus:outline-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute top-full inset-x-2 transform transition ease-out duration-200
          ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-4 mx-2">
          <ul className="flex flex-col items-center space-y-4">
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
      </div>
    </nav>
  );
}
