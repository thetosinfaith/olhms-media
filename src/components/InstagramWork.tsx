import React from 'react';
import Adesile from '../assets/adesile.png';
import Olomu from '../assets/olomu.png';
import Children from '../assets/children.png';
import VideoThatSells from './VideoThatSells';

interface InstagramWork {
  id: number;
  imageUrl: string;
  altText: string;
  instagramLink?: string;
}

const instagramWorks: InstagramWork[] = [
  { id: 1, imageUrl: Adesile, altText: 'Aerial view of ocean waves and a surfboard' },
  { id: 2, imageUrl: Olomu, altText: 'Footprints in a desert landscape', instagramLink: 'https://www.instagram.com/olhms.media/' },
  { id: 3, imageUrl: Children, altText: 'Aerial view of a boat on turquoise water' },
];

export const InstagramSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <section className={`${className} bg-gray-50 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center min-h-[60vh]`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:mb-16 xl:mb-20 font-semibold text-gray-800 mb-8 sm:mb-10 md:mb-12 text-center px-4">
          Browse my Works <br /> on Instagram
        </h2>
        <div className="relative w-full overflow-x-auto pb-4 md:w-auto md:overflow-x-visible md:flex md:justify-center md:items-center md:gap-x-8 lg:gap-x-12 xl:gap-x-16">
          <div className="flex space-x-4 px-4 md:space-x-0 md:px-0">
            {instagramWorks.map((work, index) => (
              <div
                key={work.id}
                className={`
                  relative
                  flex-shrink-0
                  w-56 h-56
                  sm:w-64 sm:h-64
                  md:w-72 md:h-72
                  lg:w-80 lg:h-80
                  xl:w-96 xl:h-96
                  rounded-xl overflow-hidden shadow-xl
                  transform transition-transform duration-300 ease-in-out
                  ${index === 0 ? 'md:-rotate-6' : ''}
                  ${index === 1 ? 'md:rotate-0 md:scale-105 md:z-10' : ''}
                  ${index === 2 ? 'md:rotate-6' : ''}
                `}
              >
                <img
                  src={work.imageUrl}
                  alt={work.altText}
                  className="w-full h-full object-cover"
                />
                {index === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <a
                      href={work.instagramLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                        rounded-full border-2 border-white flex items-center justify-center text-white
                        opacity-90 hover:opacity-100 transition-opacity
                      "
                    >
                      <span className="sr-only">View on Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-8 sm:mt-10 md:mt-12">
          <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 transition-colors"></button>
        </div>
      </section>
    </>
  );
};