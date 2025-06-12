
import { Camera, Users, Globe } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Camera,
      text: "6+ years experience in cinematography"
    },
    {
      icon: Users,
      text: "Founder of: Olhms Media, Entrepreneurs Lodge"
    },
    {
      icon: Globe,
      text: "Based in Lagos | Available to travel"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tosin Olomu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent"></div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Who is <span className="text-purple">Tosin?</span>
            </h2>
            
            <div className="text-lg text-white/90 leading-relaxed mb-8 space-y-4">
              <p>
                👋 Hi, I'm Tosin — a Lagos-based cinematographer and founder of Olhms Media. 
                I bring stories to life through creative visuals.
              </p>
              
              <p>
                Whether it's brand content, event storytelling, or entrepreneurial features, 
                I create with purpose. Every frame tells a story, and every story deserves 
                to be told beautifully.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple/20 rounded-full flex items-center justify-center">
                    <item.icon className="text-purple" size={16} />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
