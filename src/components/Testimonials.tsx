
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Victoria Dickson",
      role: "Brand Manager",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Working with Tosin was like watching magic unfold behind the lens. He captured moments we didn't even know were happening."
    },
    {
      id: 2,
      name: "Michael Adebayo",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The attention to detail and creative vision that Tosin brings to every project is absolutely exceptional. Our brand campaign exceeded all expectations."
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Tosin doesn't just take photos or videos - he tells stories. Every frame is purposeful and every shot is crafted with incredible skill."
    }
  ];

  return (
    <section className="py-20 bg-dark-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            What Clients <span className="text-purple">Say</span>
          </h2>
          <p className="text-xl text-white/70">
            "Collaboration fuels our creativity."
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1">
                <Card className="bg-black/50 border-white/10">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto object-cover"
                      />
                    </div>
                    
                    <blockquote className="text-lg text-white/90 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <p className="font-montserrat font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-purple text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
