import { Link } from "react-router-dom";
import Olomu from "../assets/hero.png";
import Navbar from "./Navbar";

function Hero() {
  const CameraIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  );

  const FilmReelIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 17V2a2 2 0 0 1 2-2h7.9a2 2 0 0 1 1.8 1L16 6h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2v-5l-2 2v-4l2 2Z"></path>
      <circle cx="5" cy="5" r="3"></circle>
      <circle cx="19" cy="5" r="3"></circle>
      <circle cx="5" cy="19" r="3"></circle>
      <circle cx="19" cy="19" r="3"></circle>
    </svg>
  );

  const PlayCircleIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m10 8 6 4-6 4V8z"></path>
    </svg>
  );

  const VideoCameraIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.333L22 17V7l-4 3.333V8a2 2 0 0 0-2-2z"></path>
      <rect x="5" y="11" width="2" height="2" rx="1"></rect>
    </svg>
  );

  const MicrophoneIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  );

  const MonitorIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative bg-black text-white py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen flex items-center
                   pt-28 md:pt-24 lg:pt-32"
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

        <CameraIcon
          className="absolute top-1/4 left-5 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-cyan-500 opacity-25 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        />
        <FilmReelIcon
          className="absolute bottom-1/4 right-5 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-teal-400 opacity-20 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        />
        <PlayCircleIcon
          className="absolute top-10 right-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-500 opacity-30 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        />
        <VideoCameraIcon
          className="absolute bottom-10 left-1/4 w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 text-cyan-300 opacity-20 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        />
        <MicrophoneIcon
          className="absolute top-1/3 right-10 md:right-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-teal-600 opacity-25 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        />

        <MonitorIcon
          className="absolute bottom-1/3 left-5 sm:left-20 w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 text-cyan-400 opacity-20 animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        />
        <FilmReelIcon
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 text-blue-300 opacity-20 animate-fade-in-up hidden md:block"
          style={{ animationDelay: '1.4s' }}
        />
        <PlayCircleIcon
          className="absolute top-20 right-5 sm:right-1/3 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-teal-500 opacity-30 animate-fade-in-up"
          style={{ animationDelay: '1.6s' }}
        />
        <VideoCameraIcon
          className="absolute bottom-20 left-10 md:left-1/3 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-cyan-600 opacity-25 animate-fade-in-up"
          style={{ animationDelay: '1.8s' }}
        />
        <MicrophoneIcon
          className="absolute top-3/4 right-10 sm:right-20 w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 text-blue-400 opacity-30 animate-fade-in-up"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              We Make <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
                Viral Videos
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Hi, I'm a Lagos-based cinematographer and founder of Olhms Media.
              I bring stories to life through creative visuals. Every frame
              tells a story, and every story deserves to be told beautifully.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
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
                className="flex items-center justify-between bg-transparent border bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-full px-8 py-4 text-lg
                           shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-75 border-cyan-500 text-white rounded-full px-6 py-3 hover:bg-cyan-900 transition-colors shadow-lg group"
              >
                Explore My Work
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
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end h-[450px] md:h-[550px] mt-10 lg:mt-0">
            <div className="relative w-full max-w-xl h-full rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
              <img
                src={Olomu}
                alt="Creative professional at work"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="absolute top-8 right-0 bg-gray-900 rounded-3xl p-6 text-center z-10 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <p className="text-sm text-gray-400">Total Reach</p>
              <p className="text-2xl font-bold text-cyan-400">10.4M</p>
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

            <div className="absolute bottom-8 left-0 bg-black rounded-3xl p-4 text-center z-10 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <p className="text-sm text-gray-400">Total Engagements</p>
              <p className="text-2xl font-bold text-teal-400">307K</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;