import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#0a0f1a] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <FaEnvelope className="text-3xl text-red-500" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bharat Postal Network
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting lives and delivering dreams across India since 1854.
            </p>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <a href="#" className="flex items-center hover:text-red-400 transition-colors">
                <FaPhone className="mr-2" /> +91 1800-123-4567
              </a>
              <a href="#" className="flex items-center hover:text-red-400 transition-colors">
                <FaEnvelope className="mr-2" /> support@bharatpost.gov.in
              </a>
              <a href="#" className="flex items-center hover:text-red-400 transition-colors">
                <FaMapMarkerAlt className="mr-2" /> New Delhi, India
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Speed Post</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Regular Mail</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Express Delivery</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">International</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors group">
                <FaFacebook className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors group">
                <FaTwitter className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors group">
                <FaInstagram className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors group">
                <FaLinkedin className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bharat Postal Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  