import React from 'react';

interface VideoItem {
  text: string;
  icon: 'clapboard' | 'playButton' | 'monitor' | 'phonePlay' | 'microphone' | 'videoCamera' | 'photoFilm';
}

const VideoThatSells: React.FC = () => {
  const videoContent: VideoItem[] = [
    { text: "Brand Story Films", icon: "clapboard" },
    { text: "Event Highlight Reels", icon: "playButton" },
    { text: "Product Demos", icon: "monitor" },
    { text: "Short-form Social Content", icon: "phonePlay" },
    { text: "Music Videos", icon: "microphone" },
    { text: "Lifestyle Vlogs", icon: "videoCamera" },
    { text: "Fashion Editorials", icon: "photoFilm" },
  ];

  const IconComponent: React.FC<{ type: VideoItem['icon'] }> = ({ type }) => {
    switch (type) {
      case 'clapboard':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400 transform rotate-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 2L3 2v14a2 2 0 002 2h14a2 2 0 002-2V2zM12 4l3 3-3 3-3-3 3-3zm-6 0h2v2H6V4zm0 4h2v2H6V8zm0 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
          </svg>
        );
      case 'playButton':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        );
      case 'monitor':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 transform rotate-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 2v1h12v-1l-1-2h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
          </svg>
        );
      case 'phonePlay':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 transform -rotate-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-3 14h-4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm.5-6.5l-3 2.25V9.5l3-2.25v2.25z" />
          </svg>
        );
      case 'microphone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 transform rotate-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v7c0 1.66 1.34 3 3 3zm5.3-2.99c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2c0 2.89 2.29 5.25 5.15 5.25S16.15 14.89 16.15 12H17.3z" />
          </svg>
        );
      case 'videoCamera':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 transform -rotate-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
          </svg>
        );
      case 'photoFilm':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 5l-2-2H6c-1.1 0-1.99.9-1.99 2L4 19c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-3zm3 15H7V5h4.17L14 7.83V19zm-3-5l4 4H8l3-3 2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-yellow-400 py-4 overflow-hidden relative">
      <style>
        {`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-content {
          animation: scroll-left 40s linear infinite;
        }
        `}
      </style>
      <div className="flex items-center space-x-8 px-4 py-3 rounded-full bg-blue-900 mx-auto max-w-[90vw] shadow-lg overflow-hidden">
        <div className="scrolling-content flex-shrink-0 flex items-center space-x-8">
          {videoContent.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-2 text-white text-lg sm:text-xl font-semibold whitespace-nowrap px-4 py-2">
              <span>{item.text}</span>
              <IconComponent type={item.icon} />
            </div>
          ))}
          {videoContent.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-2 text-white text-lg sm:text-xl font-semibold whitespace-nowrap px-4 py-2">
              <span>{item.text}</span>
              <IconComponent type={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoThatSells;