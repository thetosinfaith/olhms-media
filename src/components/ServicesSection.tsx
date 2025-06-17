import { useState } from "react";
import { ArrowRight, Camera, Heart, Gift, Briefcase, Paintbrush, Shirt, Utensils } from "lucide-react";

const serviceData = [
  {
    id: 1,
    title: "PRE - WEDDING \n SHOOTS",
    frontDetails: "Indoor | Outdoor | Destination",
    backDetails: {
      pricing: "Our rates start from ₦100,000.",
      terms: "Our coverage includes personalized sessions tailored to the theme you’re going for. Whether you're envisioning a romantic outdoor settingan intimate studio shoot, or something completely unique, we’ve got you covered.",
    },
    icon: Camera,
    initialBgColor: "bg-zinc-900",
  },
  {
    id: 2,
    title: "WEDDINGS",
    frontDetails: "Introduction | Engagement | Church/Nikkah Ceremony | Reception | After Party",
    backDetails: {
      pricing: "Custom packages based on event size and duration. Full-day coverage starts at ₦300,000.",
      terms: "A detailed contract outlining deliverables and timeline will be provided upon booking confirmation. 50% non-refundable deposit.",
    },
    icon: Heart,
    initialBgColor: "bg-zinc-950",
  },
  {
    id: 3,
    title: "SOCIAL \n EVENTS",
    frontDetails: "Birthdays | Parties | Dinners | Fundraisers | Baby or Bridal Showers e.t.c.",
    backDetails: {
      pricing: "Hourly rates available, or flat rates for specific events. Get a personalized quote.",
      terms: "Minimum booking of 3 hours. Special requests may incur additional charges.",
    },
    icon: Gift,
    initialBgColor: "bg-zinc-900",
  },
  {
    id: 4,
    title: "CORPORATE \n EVENTS",
    frontDetails: "Conferences | Launches | End of the Year Parties | Seminars e.t.c.",
    backDetails: {
      pricing: "Project-based pricing. Daily rates available for multi-day events.",
      terms: "Includes high-resolution photos and videography. Client retains full usage rights.",
    },
    icon: Briefcase,
    initialBgColor: "bg-zinc-900",
  },
  {
    id: 5,
    title: "FASHION \n BRANDS",
    frontDetails: "Fashion Designers | Clothing Brands | Fashion Stylists e.t.c.",
    backDetails: {
      pricing: "Lookbook shoots, campaign imagery, and e-commerce photography packages available.",
      terms: "Model casting and studio rental can be arranged. Usage rights for commercial use included.",
    },
    icon: Shirt,
    initialBgColor: "bg-zinc-900",
  },
  {
    id: 6,
    title: "FOOD \n BRANDS",
    frontDetails: "Event Vendors | Restaurants e.t.c.",
    backDetails: {
      pricing: "Menu photography, promotional content, and chef portraits. Packages for startups and established brands.",
      terms: "On-location or studio shoots. Food styling services available upon request.",
    },
    icon: Utensils,
    initialBgColor: "bg-zinc-900",
  },
];

export const ServicesSection = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section id="services" className="w-full py-16 px-4 md:px-8 bg-black text-white font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="text-left mb-16 mt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              What We Cover
            </h2>
            <p className="text-lg md:text-xl text-left text-white max-w-3xl font-medium">
              <i> Capturing your moments & stories </i>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-10">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className={`
                relative h-[240px] md:h-[280px] cursor-pointer
                rounded-xl overflow-hidden p-6 flex flex-col justify-end
                transition-all duration-500 ease-in-out transform hover:scale-105
                border-2 border-transparent hover:border-purple-500
                ${activeCardId === service.id ? 'bg-gradient-to-br from-purple-800 to-pink-600 shadow-lg' : service.initialBgColor}
              `}
              onClick={() => handleCardClick(service.id)}
            >
              <div
                className={`
                  absolute inset-0 p-6 flex flex-col justify-end
                  transition-opacity duration-500 ease-in-out
                  ${activeCardId === service.id ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
                  ${activeCardId === service.id ? 'text-white' : 'text-white'} 
                `}
              >
                <div className="absolute top-5 right-5">
                  {<service.icon className={`w-10 h-10 ${activeCardId === service.id ? 'text-white' : 'text-zinc-400'}`} />}
                </div>
                <div className="text-7xl mb-4 text-gray-700 opacity-20 font-bold">
                  {service.id < 10 ? `0${service.id}` : service.id}
                </div>
                <h3 className="text-2xl font-medium mb-2 whitespace-pre-line leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 tracking-wide">
                  {service.frontDetails}
                </p>
                <button className="bg-zinc-500 text-white rounded-full px-5   py-2 text-sm flex items-center gap-2 hover:bg-black transition-all duration-300 self-start font-semibold shadow-md">
                  FIND OUT MORE
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight size={14} className="text-zinc-500" />
                  </div>
                </button>
              </div>

              <div
                className={`
                  absolute inset-0 p-6 flex flex-col justify-center items-center text-center
                  transition-opacity duration-500 ease-in-out
                  ${activeCardId === service.id ? 'opacity-100 pointer-events-auto text-white' : 'opacity-0 pointer-events-none'}
                `}
              >
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-zinc-200">
                  {service.title.replace(/\n/g, ' ')}
                </h3>
                <div className="text-left max-w-xs space-y-3">
                
                  <p className="text-base text-gray-200">
                    <span className="font-bold text-zinc-300 mr-2">Description:</span> {service.backDetails.terms}
                  </p>
                   <p className="text-base text-gray-100">
                    <span className="font-bold text-zinc-300 mr-2">Price:</span> {service.backDetails.pricing}
                  </p>
                </div>
                <button className="mt-8 bg-white text-purple-700 rounded-full px-7 py-3 text-sm font-bold hover:bg-fuchsia-300 hover:text-white transition-colors duration-300 shadow-lg transform hover:-translate-y-1">
                  DM FOR A QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};