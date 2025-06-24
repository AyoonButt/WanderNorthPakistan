import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Twitter, Instagram, Send } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-poppins font-bold mb-4">Wander North Pakistan</div>
            <p className="text-slate-300 dark:text-gray-300 mb-6 leading-relaxed">
              Authentic small-group journeys through Pakistan's most spectacular northern regions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("destinations")}
                  className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("tours")}
                  className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300"
                >
                  Tours & Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("guide")}
                  className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300"
                >
                  Travel Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">Skardu Valley</a></li>
              <li><a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">Hunza Valley</a></li>
              <li><a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">Fairy Meadows</a></li>
              <li><a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">Deosai Plains</a></li>
              <li><a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange transition-colors duration-300">Khunjerab Pass</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-slate-300 dark:text-gray-300 mb-4 text-sm">Get travel tips and destination updates</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-r-none bg-slate-700 dark:bg-gray-700 border-slate-600 dark:border-gray-600 text-white placeholder-slate-400 dark:placeholder-gray-400 focus:ring-sunrise-orange focus:border-sunrise-orange"
              />
              <Button className="bg-sunrise-orange hover:bg-orange-600 rounded-l-none px-4">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 dark:text-gray-300 text-sm">
            © 2024 Wander North Pakistan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-slate-300 dark:text-gray-300 hover:text-sunrise-orange text-sm transition-colors duration-300">Travel Insurance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
