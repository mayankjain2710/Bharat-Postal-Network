import React from 'react';
import { FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#111827] py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500 rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-red-500 bg-opacity-10 rounded-full">
              <p className="text-red-400 font-semibold">India's Most Trusted Postal Service</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Connecting Lives
              <span className="block mt-2">
                <span className="text-red-500">Delivering</span> Dreams
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              India Post has been the backbone of the nation's communication for over 150 years, 
              serving as the world's largest postal network. With more than 155,000 post offices 
              across the country, we connect people and empower businesses with our efficient and 
              trustworthy services.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#2d3748] p-6 rounded-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <FaShieldAlt className="text-red-500 text-3xl mb-3" />
                <h3 className="text-2xl font-bold text-white">155,000+</h3>
                <p className="text-gray-400">Post Offices</p>
              </div>
              <div className="bg-[#2d3748] p-6 rounded-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <FaClock className="text-red-500 text-3xl mb-3" />
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-gray-400">Support</p>
              </div>
              <div className="bg-[#2d3748] p-6 rounded-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <FaGlobe className="text-red-500 text-3xl mb-3" />
                <h3 className="text-2xl font-bold text-white">Pan India</h3>
                <p className="text-gray-400">Coverage</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Main Image */}
          <div className="relative group">
            {/* Image container with hover effect */}
            <div className="relative transform transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl transform rotate-3 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src="./public/modern-post-office.jpg.jpg"
                alt="Modern Indian Post Office"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover relative z-10"
              />
              
              {/* Trusted badge */}
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-2xl z-20 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-2xl font-bold">Trusted Since</p>
                <p className="text-3xl font-bold">1854</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500 rounded-full opacity-20 z-0 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500 rounded-full opacity-20 z-0 group-hover:scale-125 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
  