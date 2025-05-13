
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark py-12 text-white">
      <div className="empanada-container">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display mb-4 text-3xl font-bold">
              <span className="text-brand-coral">THE CRAZY</span> 
              <span className="text-brand-gold">EMPANADAS</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Bold flavors, bold colors. Handcrafted empanadas with a creative twist.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-brand-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 transition-colors hover:text-brand-gold">Home</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 transition-colors hover:text-brand-gold">Gallery</a>
              </li>
              <li>
                <a href="#dishes" className="text-gray-300 transition-colors hover:text-brand-gold">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 transition-colors hover:text-brand-gold">Menu</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-300 transition-colors hover:text-brand-gold">Locations</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-brand-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-brand-teal" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-brand-teal" />
                <a href="mailto:info@crazyempanadas.com" className="text-gray-300 transition-colors hover:text-brand-gold">
                  info@crazyempanadas.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-brand-gold">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-gray-300">11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-gray-300">10am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-300">10am - 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} The Crazy Empanadas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
