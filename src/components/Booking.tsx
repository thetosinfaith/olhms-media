import { useState, useCallback } from "react";
import { Send } from "lucide-react";

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState("Photography");

  const SERVICE_CATEGORIES = ["Photography", "Content Creation", "Other"];

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const dataToSubmit = { ...formData, service: activeTab };
      console.log("Form submitted:", dataToSubmit);
      setFormData({ name: "", email: "", message: "" });
      setActiveTab("Photography");
    },
    [formData, activeTab]
  );

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    []
  );

  return (
    <section
      id="booking"
      className="py-8 lg:py-16 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-transparent to-purple/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        <div className="mt-4 lg:mt-12 bg-white rounded-xl p-8 md:p-12 shadow-xl flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Start Your Project
          </h2>

          <form onSubmit={handleFormSubmit} className="w-full">
            <div className="mb-6">
              +{" "}
              <h3 className="mb-3 font-semibold text-base md:text-lg text-gray-800">
                How can we help?
              </h3>
              <div
                role="tablist"
                aria-label="Select service category"
                className="flex flex-wrap gap-3"
              >
                {SERVICE_CATEGORIES.map((category) => (
                  <button
                    type="button"
                    key={category}
                    role="tab"
                    aria-selected={activeTab === category}
                    onClick={() => setActiveTab(category)}
                    className={`px-5 py-2 rounded-full text-base font-medium transition-colors duration-200 ${
                      activeTab === category
                        ? "bg-black text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-12">
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
                  href="/privacy-policy"
                  className="text-black hover:underline font-medium"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
