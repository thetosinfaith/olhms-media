import React, { useState, useEffect } from "react";
import LogoBlack from "../assets/logo-black.png"; 
import LogoWhite from "../assets/logo.png"; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const accentColorClass = "text-zinc-400";
  const accentBgClass = "bg-zinc-500";
  const accentHoverClass = "hover:text-zinc-300";
  const accentButtonHoverClass = "hover:bg-zinc-400";
  const accentRingClass = "focus:ring-zinc-500";

  const navLinks = [
    { name: "Portfolio", path: "#portfolio" },
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "Blog", path: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    if (targetId === "#blog") {
      alert("Blog section is coming soon!");
      setIsMobileMenuOpen(false); 
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); 
    }
  };

  const whatsappNumber = "+2348073683154";
  const whatsappMessage = "Hello, I'm interested in corporate videos!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <nav
      className={`
        fixed w-full z-50 top-0 transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-black shadow-xl py-3" : "bg-transparent py-0"}
      `}
    >
      <div
        className={`
        flex justify-between items-center text-black
        transition-all duration-300 ease-in-out
        rounded-full shadow-xl bg-white
        ${isScrolled ? "mt-0" : "mt-4"}

        py-2 md:py-3
        w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:max-w-7xl mx-auto

        px-4 sm:px-6 md:px-8
        `}
      >
        <div className="text-4xl font-extrabold tracking-tight transition-colors duration-300">
          <a href="#top" onClick={(e) => handleSmoothScroll(e, "#top")}>
            <img
              src={LogoBlack}
              alt="Company Logo"
              className="w-32 h-auto md:w-55"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = LogoBlack;
              }}
            />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleSmoothScroll(e, link.path)}
              className={`relative text-lg font-medium text-gray-700 group ${accentHoverClass} transition-colors duration-200`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 ${accentBgClass} opacity-0 group-hover:opacity-100 group-hover:scale-x-75 transform origin-left transition-all duration-300 ease-out`}
              ></span>
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-transparent border bg-zinc-900 text-black font-bold rounded-full px-8 py-4 text-lg
                        shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                        focus:outline-none focus:ring-4 focus:ring-black-500 focus:ring-opacity-75 border-black-500 text-white rounded-full px-6 py-3 hover:bg-zinc-900 transition-colors group"
          >
            Need Corporate Videos
            <span className="bg-white text-black rounded-full p-2 ml-2 transition-transform duration-200 group-hover:rotate-45">
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
          </a>
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
        <div
          className={`
            md:hidden fixed inset-y-0 right-0 w-full bg-gray-950 shadow-2xl transform transition-transform duration-300 ease-in-out z-40
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center px-4 py-3 bg-gray-900 border-b border-gray-800">
            <a href="#top" onClick={(e) => handleSmoothScroll(e, "#top")}>
              <img
                src={LogoWhite}
                alt="Company Logo"
                className="w-32 h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = LogoWhite;
                }}
              />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-white bg-transparent focus:outline-none focus:ring-2 ${accentRingClass} p-2 transition-transform duration-200 active:scale-90`}
              aria-label="Close mobile menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-6 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className={`block text-2xl font-medium text-gray-200 ${accentHoverClass} transition-colors duration-200`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicking "Let's Connect"
              className={`mt-6 px-8 py-3 rounded-full ${accentBgClass} text-black font-bold text-2xl text-center ${accentButtonHoverClass} transition-colors duration-200`}
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;