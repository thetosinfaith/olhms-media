import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, Mail, Instagram, Send} from "lucide-react";

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [activeTab, setActiveTab] = useState("Photography");

  const serviceCategories = [
    "Photography",
    "Content Creation",
    "Other"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, service: activeTab };
    console.log("Form submitted:", dataToSubmit);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-transparent to-purple/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        <div className="mt-24 bg-amber-50 rounded-xl p-8 md:p-12 shadow-xl flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Start Your Project
          </h2>

          <form onSubmit={handleFormSubmit} className="w-full">
            <div className="mb-6">
              <h3 className="mb-3 font-semibold text-lg text-gray-800">
                How can we help?
              </h3>
              <div className="flex flex-wrap gap-3">
                {serviceCategories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={`px-5 py-2 rounded-full text-base font-medium transition-colors duration-200 ${
                      activeTab === category
                        ? "bg-amber-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What's your name?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="What's your email?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What else can you share about the project?"
                className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-y focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg"
              >
                <Send size={20} /> Send Message
              </button>
              <p className="text-xs text-gray-500 text-center md:text-right">
                By clicking this button, you agree to our{" "}
                <a
                  href="#"
                  className="text-amber-600 hover:underline font-medium"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </form>
        </div>

        <div className="flex-1 w-full mt-24 lg:mt-0">
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