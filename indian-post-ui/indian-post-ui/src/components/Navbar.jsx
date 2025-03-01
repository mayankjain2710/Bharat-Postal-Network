import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mail", label: "Mail" },
    { path: "/speed-trace", label: "Speed & Trace" },
    { path: "/parcel", label: "Parcel" },
    { path: "/find-post-office", label: "Find Post Office" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#1f2937] to-[#2d3748] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-2xl text-red-500" />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Bharat Postal Network
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 transition-all duration-300 hover:text-red-400 ${
                  isActiveLink(link.path)
                    ? "text-red-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md font-semibold"
              >
                BOOKING
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 border-2 border-red-400 text-red-400 rounded-md hover:bg-red-400 hover:text-white transition-all duration-300 font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 border-2 border-red-400 text-red-400 rounded-md hover:bg-red-400 hover:text-white transition-all duration-300 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink(link.path)
                    ? "bg-gray-700 text-red-400"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-300 mx-3 text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              BOOKING
            </Link>
            <div className="px-3 space-y-2">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 border-2 border-red-400 text-red-400 rounded-md hover:bg-red-400 hover:text-white transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center px-4 py-2 border-2 border-red-400 text-red-400 rounded-md hover:bg-red-400 hover:text-white transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
