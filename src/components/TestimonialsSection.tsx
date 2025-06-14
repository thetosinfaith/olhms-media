import React from 'react';
import { Star, ArrowRight } from "lucide-react";
import Tomike from '../assets/tomike.png'
import HROga from '../assets/hr_oga.png'
import Veekee from '../assets/veekee.png'
import Funke from '../assets/funke.png'

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tomike Adeoye",
      title: "Instagram Influencer",
      quote: "Olhm Media turned my book launch into a viral moment! Their visuals were fire and totally captured the vibe.",
      rating: 5,
      profileImg: Tomike,
    },
    {
      name: "The HR Oga",
      title: "Tech Startup Founder",
      quote: "They crushed our business event branding. Super fresh, super impactful. Definitely amplified our presence!",
      rating: 5,
      profileImg: HROga,
    },
    {
      name: "Veekee James",
      title: "Fashion Blogger",
      quote: "Our social media presence went next level! They helped us connect with our audience authentically.",
      rating: 5,
      profileImg: Veekee,
    },
    {
      name: "Funke Akindele",
      title: "Actress",
      quote: "Professional from start to finish. Olhm Media understood the brief and delivered pure cinematic magic. Highly recommend!",
      rating: 5,
      profileImg: Funke,
    },
  ];

  return (
    <section className="w-full bg-white text-black py-16 px-4 md:px-8 lg:py-28 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-0 text-black leading-tight">
            <span className="text-gray-500"> Our </span> Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col h-[380px] transform hover:scale-105 transition-all duration-300
                bg-black text-white border border-transparent hover:border-purple-400`}
            >
              <div className="mb-4 flex-shrink-0">
                <img
                  src={testimonial.profileImg}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-md"
                />
              </div>

              <div className="flex flex-col justify-between h-full z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFD700" stroke="#FFD700" className="mr-1" />
                  ))}
                </div>

                <p className="text-base font-light mb-6 flex-grow leading-relaxed text-white">
                  {testimonial.quote}
                </p>

                <div>
                  <p className="font-semibold text-lg mb-1 text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-200 opacity-80 text-white">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
