"use client";

import { useState } from "react";
import { Plus, Minus, Send } from "lucide-react";

export const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); // Initialize with null for no open question
  const [activeTab, setActiveTab] = useState<string>("Brand Design"); // Renamed for clarity with your existing data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const faqData = [
    {
      id: 0,
      question: "What services does your agency offer?",
      answer:
        "Our agency specializes in a comprehensive range of services including brand design, web development, digital marketing, and content creation. We focus on delivering integrated solutions that elevate your brand's presence and achieve your business objectives.",
    },
    {
      id: 1,
      question: "Do you work with startups?",
      answer:
        "Absolutely! We love working with startups. We help emerging businesses build user-friendly websites, create powerful brand identities, and develop digital strategies that set them up for success. Our team understands the unique challenges startups face and provides tailored solutions to ensure growth and scalability. Let's bring your vision to life! ✨",
    },
    {
      id: 2,
      question: "Can I see some of your past work?",
      answer:
        "Yes, of course! You can explore our portfolio section to see a selection of our recent projects and case studies. We're proud of the work we've done and believe it speaks for itself. If you'd like to see examples relevant to your specific industry or needs, feel free to ask!",
    },
    {
      id: 3,
      question: "How can I make an appointment?",
      answer:
        "You can easily make an appointment by filling out the contact form below or by reaching out to us directly via email or phone. Our team will get back to you promptly to schedule a consultation at your convenience.",
    },
    {
      id: 4,
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on the scope and complexity of the work. After an initial consultation and understanding your specific needs, we'll provide a detailed proposal that includes a realistic timeline for completion. We always aim to deliver high-quality results efficiently.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including bank transfers, major credit cards, and other secure online payment gateways. Payment terms will be clearly outlined in our project agreement.",
    },
    {
      id: 6,
      question: "Can I be involved in the design process?",
      answer:
        "Absolutely! We believe in a collaborative approach. Your input is crucial throughout the design and development process. We'll involve you in key decision-making stages, from initial concepts to final revisions, to ensure the end product perfectly aligns with your vision.",
    },
    {
      id: 7,
      question: "How do you ensure project success?",
      answer:
        "We ensure project success through clear communication, meticulous planning, regular progress updates, and a dedicated team committed to excellence. We also conduct thorough testing and quality assurance to deliver a polished and effective solution.",
    },
  ];

  const serviceCategories = [
    "Brand Design", // Changed to match your activeTab initial state and existing button text
    "Web Development",
    "Digital Marketing",
    "Content Creation",
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-black text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Got any questions?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 italic">
            We've got answers, and we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq) => (
              <div
                key={faq.id}
                className="bg-amber-50 rounded-lg p-5 cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleQuestion(faq.id)}
                role="button"
                aria-expanded={openQuestion === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  {openQuestion === faq.id ? (
                    <Minus size={20} className="text-amber-600" />
                  ) : (
                    <Plus size={20} className="text-gray-600" />
                  )}
                </div>
                {openQuestion === faq.id && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="mt-4 text-gray-700 leading-relaxed animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq) => (
              <div
                key={faq.id}
                className="bg-amber-50 rounded-lg p-5 cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleQuestion(faq.id)}
                role="button"
                aria-expanded={openQuestion === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  {openQuestion === faq.id ? (
                    <Minus size={20} className="text-amber-600" />
                  ) : (
                    <Plus size={20} className="text-gray-600" />
                  )}
                </div>
                {openQuestion === faq.id && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="mt-4 text-gray-700 leading-relaxed animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-amber-50 rounded-xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Start Your Project With Us
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-amber-300 border-2 border-white flex items-center justify-center text-sm font-medium text-amber-900"
                ></div>
              ))}
            </div>
            <p className="text-xl text-gray-700 italic">
              Let's make & build something amazing together!
            </p>
          </div>

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
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="What's your name?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                  value={formData.fullName}
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
      </div>
    </section>
  );
};
