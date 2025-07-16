
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/95287cda-9de7-4684-bf2a-7e1624f6ac70.png" 
                alt="Kadai 2 Manai Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Kadai 2 Manai
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your daily freshness partner - bringing farm-fresh vegetables and fruits 
              straight from trusted vendors to your doorstep every morning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vendor" className="text-gray-300 hover:text-purple-400 transition-colors">
                  For Vendors
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>info@kadai2manai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2025 Kadai 2 Manai. Owned and Operated by Mr. Manoharan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed and Maintained by{" "}
            <span className="text-purple-400 font-medium">The Quantum Craft</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
