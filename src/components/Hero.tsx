import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Olomu from "../assets/hero.png";

import OgaHr from "../assets/ogahr.png";
import TedxAjegunle from "../assets/aj.jpg";
import Snapcode from "../assets/snapcode.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Hero({ className }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className={`${className} relative bg-black text-white py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen flex items-center pt-28 lg:pt-32 lg:pb-0`}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={Olomu}
            alt="Abstract background texture"
            className="w-full h-full object-cover blur-sm opacity-50"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left lg:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              We Make <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-500">
                Viral Videos
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Hi, I'm a Lagos-based cinematographer and founder of Olhms Media.
              I bring stories to life through creative visuals. Every frame
              tells a story, and every story deserves to be told beautifully.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <Link
                to="/contact"
                className="flex items-center justify-between text-lg bg-white text-black rounded-full px-6 py-3 hover:bg-gray-200 transition-colors shadow-lg group"
              >
                Collaborate With Me
                <span className="bg-black text-white rounded-full p-2 ml-2 transition-transform duration-200 group-hover:rotate-45">
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
              </Link>

              <Link
                to="/portfolio"
                className="flex items-center justify-between bg-transparent border bg-gradient-to-r from-zinc-600 to-zinc-900 text-black font-bold rounded-full px-8 py-4 text-lg
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-4 focus:ring-zinc-500 focus:ring-opacity-75 border-zinc-500 text-white rounded-full px-6 py-3 hover:bg-zinc-900 transition-colors group"
              > 
                Explore My Work
                <span className="bg-white text-zinc-900 rounded-full p-2 ml-2 transition-transform duration-200 group-hover:rotate-45">
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
              </Link>
            </div>

            <div
              className="mt-12 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="1200"
            >
              <p className="text-gray-400 mb-6 text-base md:text-lg">
                Worked with over 500+ Client
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-8">
                <div
                  className="flex items-center"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  <img
                    src={Snapcode}
                    alt="Snapcode Logo"
                    className="h-16 mr-2 object-contain filter hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div
                  className="flex items-center"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                >
                  <img
                    src={OgaHr}
                    alt="Notion Logo"
                    className="h-20 mr-2 object-contain filter hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div
                  className="flex items-center"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                >
                  <img
                    src={TedxAjegunle}
                    alt="Notion Logo"
                    className="h-10 mr-2 object-contain filter hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex items-center justify-center lg:justify-end h-[450px] md:h-[550px] mt-10 lg:mt-0"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="relative w-full max-w-xl h-full rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
              <img
                src={Olomu}
                alt="Creative professional at work"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div
              className="absolute top-8 right-0 bg-black rounded-3xl p-6 text-center z-10 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="1300"
            >
              <p className="text-sm text-gray-400">Highly Recommended</p>
              <p className="text-2xl font-bold text-zinc-400">450K+</p>
            </div>

            <div
              className="absolute bottom-8 left-0 bg-black rounded-3xl p-4 text-center z-10 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <p className="text-sm text-gray-400">Viral Video Views</p>
              <p className="text-2xl font-bold text-zinc-400">25M+</p>
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 100 40"
                  fill="none"
                >
                  <path
                    d="M0 30L5 25L10 28L15 20L20 22L25 18L30 15L35 25L40 20L45 18L50 22L55 15L60 18L65 12L70 15L75 10L80 15L85 5L90 8L95 2L100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
