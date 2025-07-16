import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "For Vendors", href: "/vendor" },
    // { name: "About", href: "#about" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/lovable-uploads/95287cda-9de7-4684-bf2a-7e1624f6ac70.png"
              alt="Kadai 2 Manai Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Kadai 2 Manai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-start space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  location.pathname === item.href
                    ? "text-purple-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="gradient-primary text-white hover:shadow-lg transition-all duration-300"
             onClick={() => {
                window.location.href = "tel:+918050011001";}   }
            >
             Call Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="gradient-primary text-white w-fit"
              onClick={() => {
                window.location.href = "tel:+918050011001";}   }
              >
                Call Now 
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
