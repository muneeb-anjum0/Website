import React from 'react';
import { Link } from 'react-scroll';

const sections = ['home','education','experience','projects','skills','contact'] as const;

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 md:px-6 backdrop-blur-sm">
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

        {/* Mobile Menu: wraps into two rows so all tabs remain visible */}
        <ul className="flex flex-wrap md:hidden w-full justify-center gap-4 mt-2">
          {sections.map(sec => (
            <li key={sec}>
              <Link
                to={sec}
                spy
                smooth
                offset={-80}
                duration={500}
                className="font-body text-sm text-accentDark hover:text-accentBlue transition uppercase cursor-pointer"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
