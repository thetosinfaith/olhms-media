
import { Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Book", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/olhmsmedia", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@olhmsmedia", label: "YouTube" },
    { icon: Mail, href: "mailto:hello@olhmsmedia.com", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-purple mb-4">
              OLHMS Media
            </h3>
            <p className="text-white/70 leading-relaxed">
              Creating memories through lenses. Based in Lagos. Available worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-purple transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-grey rounded-full flex items-center justify-center text-white hover:text-purple hover:bg-purple/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 Olhms Media. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/50 text-sm hover:text-purple transition-colors">
              Terms & Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
