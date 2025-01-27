import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-900">
              SkyWings
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className="text-primary-700 hover:text-primary-400">
              Home
            </NavLink>
            <NavLink
              to="flights"
              className="text-primary-700 hover:text-primary-400"
            >
              Flights
            </NavLink>
            <NavLink to="/" className="text-primary-700 hover:text-primary-400">
              Destinations
            </NavLink>
            <NavLink
              to="/    "
              className="text-primary-700 hover:text-primary-400"
            >
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-4 py-2 rounded-full bg-primary-700/80 text-white hover:bg-primary-700 transition-colors  hover:cursor-pointer"
              onClick={() => navigate("/auth")}
            >
              Sign In
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-300 hover:text-primary-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a
              href="#"
              className="block px-3 py-2 text-primary-300 hover:text-primary-400"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-primary-300 hover:text-primary-400"
            >
              Flights
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-primary-300 hover:text-primary-400"
            >
              Destinations
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-primary-300 hover:text-primary-400"
            >
              Bookings
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
