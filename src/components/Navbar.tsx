import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-black.png'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const accentColorClass = 'text-cyan-400';
  const accentBgClass = 'bg-cyan-500';
  const accentHoverClass = 'hover:text-cyan-300';
  const accentButtonHoverClass = 'hover:bg-cyan-400';
  const accentRingClass = 'focus:ring-cyan-500';

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      fixed w-full z-50 top-0 transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-black shadow-xl py-3' : 'bg-transparent py-0'}
    `}>
      <div className={`
        flex justify-between items-center text-black
        transition-all duration-300 ease-in-out
        rounded-full shadow-xl bg-white
        ${isScrolled ? 'mt-0' : 'mt-4'}
        
        py-2 md:py-3
        w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:max-w-7xl mx-auto
        
        px-4 sm:px-6 md:px-8
      `}>
        <div className="text-4xl font-extrabold tracking-tight transition-colors duration-300">
          <NavLink to="/">
            <img
              src={Logo} 
              alt="Company Logo"
              className="w-32 h-auto md:w-55"
              onError={(e) => { e.target.onerror = null; e.target.src={Logo}; }} 
            />
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-700 group
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
                        to="/portfolio"
                        className="flex items-center justify-between bg-transparent border bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-full px-8 py-4 text-lg
                                        shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-75 border-cyan-500 text-white rounded-full px-6 py-3 hover:bg-cyan-900 transition-colors group"
                      >
                        Need Corporate Videos?
                        <span className="bg-cyan-500 text-white rounded-full p-2 ml-2 transition-transform duration-200 group-hover:rotate-45">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-white bg-black rounded-full focus:outline-none focus:ring-2 ${accentRingClass} p-2 transition-transform duration-200 active:scale-90`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-8 h-8"
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
        <div className={`
          md:hidden py-6 shadow-2xl animate-slideInDown
          bg-gray-950 rounded-b-xl
          ${isScrolled ? 'mt-0' : 'mt-4'}
          
          w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] mx-auto
        `}>
          <div className="flex flex-col space-y-6 px-4 sm:px-6 md:px-8">
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