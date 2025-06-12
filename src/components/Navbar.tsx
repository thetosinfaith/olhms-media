import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);


  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const accentColorClass = 'text-cyan-400';
  const accentBgClass = 'bg-cyan-500';
  const accentHoverClass = 'hover:text-cyan-300';
  const accentButtonHoverClass = 'hover:bg-cyan-400';
  const accentRingClass = 'focus:ring-cyan-500';

  return (
    <nav className="bg-black text-white p-4 shadow-xl fixed w-full z-50 top-0 border-b border-gray-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="text-4xl font-extrabold font-['Montserrat'] tracking-tight transition-colors duration-300 hover:text-gray-200">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-40 h-auto"
            />
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-400 group
                  ${accentHoverClass} transition-colors duration-200
                  ${isActive ? accentColorClass : ''}`
              }
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 ${accentBgClass} opacity-0 group-hover:opacity-100 group-hover:scale-x-75
                transform origin-left transition-all duration-300 ease-out
                ${isActive ? 'scale-x-100 opacity-100' : ''}`}
              ></span>
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={`ml-10 px-8 py-3 rounded-full ${accentBgClass} text-black font-bold text-xl shadow-lg
                         ${accentButtonHoverClass} transform hover:-translate-y-1 transition-all duration-200 ease-in-out
                         focus:outline-none focus:ring-4 ${accentRingClass} focus:ring-opacity-50`}
          >
            NEED CORPORATE VIDEOS ?

          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-white focus:outline-none focus:ring-2 ${accentRingClass} rounded-md p-2 transition-transform duration-200 active:scale-90`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950 py-6 mt-4 rounded-b-xl shadow-2xl animate-slideInDown">
          <div className="flex flex-col space-y-6 px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-2xl font-medium text-gray-200 ${accentHoverClass} transition-colors duration-200
                  ${isActive ? `${accentColorClass} font-bold` : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-6 px-8 py-3 rounded-full ${accentBgClass} text-black font-bold text-2xl text-center
                          ${accentButtonHoverClass} transition-colors duration-200`}
            >
              Let's Connect
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;