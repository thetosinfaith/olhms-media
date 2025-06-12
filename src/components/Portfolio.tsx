import { useState } from "react";

import { Button } from "./ui/button";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

import { Link } from "react-router-dom";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Videography", "Photography", "Brand Content"];

  const projects = [
    {
      id: 1,
      title: "Parcelle",
      category: "Brand Content",
      image: "/image_52acd7_stack_1.jpg",
      type: "video",
      description:
        "Capturing the raw emotion and energy of a memorable wedding day, crafted into a cinematic narrative.",
      views: "30.6K",
    },
    {
      id: 2,
      title: "Billy Sushi",
      category: "Brand Content",
      image: "/image_52acd7_stack_2.jpg",
      type: "video",
      description:
        "Dynamic visual assets created for a modern fashion brand, highlighting their new streetwear line.",
      views: "3.7M",
    },
    {
      id: 3,
      title: "North Star Home Tech",
      category: "Videography",
      image: "/image_52acd7_stack_3.jpg",
      type: "video",
      description:
        "A collection of striking portraits exploring diverse personalities and expressions through light and shadow.",
      views: "28.7K",
    },
    {
      id: 4,
      title: "Buncha",
      category: "Photography",
      image: "/image_52acd7_stack_4.jpg",
      type: "image",
      description:
        "Breathtaking aerial footage capturing the majesty of mountain landscapes and an adventurous journey.",
      views: "17K",
    },
    {
      id: 5,
      title: "Billy Sushi",
      category: "Videography",
      image: "/image_52acd7_stack_5.jpg",
      type: "video",
      description:
        "An engaging video highlighting the features and user experience of a cutting-edge new tech product.",
      views: "704K",
    },
    {
      id: 6,
      title: "Billy Sushi",
      category: "Videography",
      image: "/image_52acd7_stack_6.jpg",
      type: "video",
      description:
        "Unfiltered glimpses into urban life, capturing candid moments and vibrant street scenes.",
      views: "23.3M",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
              Visual Stories
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Dive into a curated collection of our best work across videography,
            photography, and dynamic brand content.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full px-7 py-3 text-lg font-semibold transition-all duration-300 ease-in-out
                ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-teal-600 text-black shadow-lg transform hover:scale-105"
                    : "bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600"
                }
              `}
            >
              {filter === "Videography" && "🎥 "}
              {filter === "Photography" && "📸 "}
              {filter === "Brand Content" && "✨ "}
              {filter === "All" && "🎬 "}
              {filter}
            </Button>
          ))}
        </div>

        <div
          className="flex justify-center items-center py-10 relative h-[600px] sm:h-[700px] lg:h-[800px] [perspective:1000px]
                           overflow-x-auto scrollbar-hide"
        >
          {" "}
          {filteredProjects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className={`
                    relative flex-shrink-0 w-[200px] h-[400px] sm:w-[250px] sm:h-[500px] lg:w-[300px] lg:h-[600px]
                    bg-gray-800 rounded-xl shadow-2xl overflow-hidden
                    flex flex-col transition-all duration-500 ease-in-out
                    border border-gray-700 mx-0
                    hover:z-50 hover:scale-105 hover:shadow-cyan-500/50 cursor-pointer
                  `}
                  style={{
                    transform: `
                      rotateY(${
                        (index - Math.floor(filteredProjects.length / 2)) * 5
                      }deg)
                      translateX(${
                        (index - Math.floor(filteredProjects.length / 2)) * 5
                      }px)
                      scale(0.95)`,
                    zIndex: index,
                  }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center text-white mb-2">
                        {project.type === "video" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2"
                          >
                            <path d="M7 6v12l10-6z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                        <span className="font-bold text-xl">
                          {project.views}
                        </span>
                      </div>
                      <p className="text-gray-200 text-sm font-semibold">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[90vw] p-0 bg-gray-950 border-gray-700 rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  {project.type === "video" ? (
                    <video
                      src={project.image}
                      controls
                      autoPlay
                      loop
                      className="w-full h-full object-cover"
                      poster={project.image}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-black"
                    />
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500 mb-4">
                    {project.category}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-6 py-3 rounded-full
                                hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
                    >
                      View Full Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};