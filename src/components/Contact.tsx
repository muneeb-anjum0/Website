import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contacts = [
  { icon: FaEnvelope, label: 'Email',    href: 'mailto:muneeb.anjum@hotmail.com' },
  { icon: FaLinkedin,label: 'LinkedIn', href: 'https://www.linkedin.com/in/muneebanjum335/' },
  { icon: FaGithub, label: 'GitHub',    href: 'https://github.com/muneeb-anjum0' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-accentGray">
      <div className="container mx-auto max-w-3xl text-center space-y-12">
        <div>
          <h2 className="text-4xl font-heading text-accentDark mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 font-body">
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="flex justify-center gap-12">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                onClick={() => window.open(c.href, "_blank")}
                className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-110 cursor-pointer"
                aria-label={c.label}
              >
                <div className="border-2 border-gray-300 p-4 rounded-full">
                  <Icon size={32} className="text-accentDark" />
                </div>
                <span className="font-body text-lg text-accentDark">{c.label}</span>
              </div>
            );
          })}
        </div>

        <div className="pt-12 border-t border-gray-200 text-center space-y-4">
          <p className="text-gray-500 font-body text-sm">
            © {new Date().getFullYear()} Muneeb Anjum. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-gray-600">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  onClick={() => window.open(c.href, "_blank")}
                  className="hover:text-accentBlue transition cursor-pointer"
                  aria-label={c.label}
                >
                  <Icon size={20} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
