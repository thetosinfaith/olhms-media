
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, Mail, Instagram } from "lucide-react";

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-transparent to-purple/20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Let's Create Something <span className="text-purple">Together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-dark-grey border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-white">
                Start Your Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-purple focus:outline-none"
                    required
                  >
                    <option value="">Select Service Type</option>
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="branding">Branding</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple focus:outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-purple hover:bg-purple/90 text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                Prefer to reach out directly?
              </h3>
              <p className="text-white/70 text-lg">
                Get in touch through your preferred platform
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/+2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-dark-grey border border-white/10 rounded-lg hover:border-purple/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-purple transition-colors">
                    WhatsApp
                  </h4>
                  <p className="text-white/70">Message us directly</p>
                </div>
              </a>

              <a
                href="mailto:hello@olhmsmedia.com"
                className="flex items-center space-x-4 p-6 bg-dark-grey border border-white/10 rounded-lg hover:border-purple/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-purple transition-colors">
                    Email
                  </h4>
                  <p className="text-white/70">hello@olhmsmedia.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/olhmsmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-dark-grey border border-white/10 rounded-lg hover:border-purple/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-pink-500 rounded-full flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-purple transition-colors">
                    Instagram DM
                  </h4>
                  <p className="text-white/70">@olhmsmedia</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
