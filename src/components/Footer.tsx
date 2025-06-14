import { Facebook, Linkedin, Instagram, Globe } from "lucide-react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-800 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-12 items-start">
          <div className="col-span-1">
            <NavLink to="/" aria-label="Home">
              <img
                src={Logo}
                alt="Brian Skerry Logo"
                className="w-36 h-auto mb-4"
              />
            </NavLink>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Lagos-based Documentary Videographer
            </p>
          </div>

          <div className="col-span-1 md:text-right">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-start md:justify-end gap-4 mb-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Globe size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-1">contact@olhmsmedia.com</p>
            <address className="text-sm text-gray-400 not-italic">
              Lagos, Nigeria
            </address>
          </div>
        </div>

        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white/90 leading-none">
            Olhms Media
          </h1>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row items-center md:gap-6">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Olhms Media. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
