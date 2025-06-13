import React from 'react';
import Tosin from '../assets/tee.png'; 

export const About = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-black to-gray-900 text-white py-16 md:py-28 overflow-hidden font-inter antialiased">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[size:32px_32px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neon-cyan rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-pulse-alt"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-pulse-alt animation-delay-2000"></div>
      <div className="absolute -top-1/12 right-0 w-64 h-64 bg-neon-pink rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-pulse-alt animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <div className="relative h-[380px] md:h-[520px] lg:h-[600px] rounded-3xl shadow-3xl-custom overflow-hidden
              transform -rotate-2 hover:rotate-0 hover:scale-[1.03] transition-all duration-800 ease-in-out-expo group
              border-4 border-transparent hover:border-neon-cyan"> 
            <img
              src={Tosin}
              alt="Tosin Olomu capturing moments with creative vision"
              style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
              className="brightness-90 contrast-110 group-hover:brightness-105 group-hover:contrast-120 group-hover:saturate-150 transition-all duration-800 ease-in-out-expo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,255,.15)_0,rgba(0,255,255,.15)_2px,transparent_2px,transparent_4px)]
                opacity-0 group-hover:opacity-10 transition-opacity duration-200 ease-in-out"></div>
            <div className="absolute inset-0 border-t border-b border-neon-cyan/50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 animation-delay-100"></div>

            <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center
                border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="p-4 md:p-8 flex flex-col justify-center text-left"> 
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight
                drop-shadow-heading animate-text-reveal"> 
              <span className="text-white">About </span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
                Tosin Olomu.
              </span> 
            </h2>

            <p className="text-base md:text-lg mb-8 leading-normal text-gray-300 font-light max-w-2xl mx-auto lg:mx-0
                animate-fade-in-up delay-400">
              Hi! I’m Tosin, but you can call me Tee. Growing up, my dad’s camcorder captured so many random moments that are now etched in my heart forever.
              <br /><br />
              My phone and I are inseparable. When I see a moment, my first instinct is always to capture it. Moments are precious, and while we can't time travel, we can capture them in real-time and keep them forever!
              <br /><br />
              To share the journey and the behind-the-scenes, I launched my{" "}
              <a
                href="https://www.youtube.com/user/TosinOlomu" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-neon-yellow font-bold hover:text-white transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neon-yellow after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"> 
                YouTube Channel
              </a>
              . It's blown up with over <strong className="text-neon-cyan font-black text-xl">390,000+ Subscribers</strong> and a crazy <strong className="text-neon-purple font-black text-xl">32 Million+ Views</strong>. Guess I'm not the only one obsessed with crafting epic visuals!
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-8 mt-10 animate-fade-in-up delay-600">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};







