import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jenifer Lopez",
    title: "Regional Markets Executive",
    quote:
      "Working with Tosin Olomu was an absolute pleasure. Not only is he incredibly talented behind the lens, but he also has a knack for putting clients at ease and capturing genuine moments. Our wedding photos exceeded our expectations, and we couldn't be happier with the results.",
    imageUrl: "/assets/jenifer-lopez.jpg", 
    imageAlt: "Jenifer Lopez",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Marketing Manager",
    quote:
      "Exceptional work! The photos truly captured the essence of our event. Highly recommend for any professional photography needs.",
    imageUrl: "/assets/john-doe.jpg", 
    imageAlt: "John Doe",
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className="bg-white py-16 md:py-24 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 sm:mb-16">
        TESTIMONIAL CLIENT
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto px-4 md:px-0">
        <div className="relative bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-left mb-8 md:mb-0 md:mr-8 w-full">
          <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden -mt-16 md:-ml-16 md:mt-0 shadow-md">
            <img
              src={currentTestimonial.imageUrl}
              alt={currentTestimonial.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:ml-8 mt-4 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {currentTestimonial.title}
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              "{currentTestimonial.quote}"
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePrev}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
        >
          PREVIOUS
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
        >
          NEXT
        </button>
      </div>
    </section>
  );
};
