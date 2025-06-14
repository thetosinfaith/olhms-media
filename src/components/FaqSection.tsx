"use client";

import { useState } from "react";
import { Plus, Minus, Send } from "lucide-react";

export const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); 
  const [activeTab, setActiveTab] = useState<string>("Brand Design"); 
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
    "Brand Design", 
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

       </div>
    </section>
  );
};
