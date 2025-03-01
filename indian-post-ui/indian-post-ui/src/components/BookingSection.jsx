import { FaTruck, FaClock, FaCompass, FaEnvelope } from 'react-icons/fa';

const BookingSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#111827] text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-red-500 rounded-full opacity-5 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Service</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose from our wide range of postal services designed to meet your needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - Booking Form */}
          <div className="bg-gradient-to-br from-[#2d3748] to-[#1f2937] p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaEnvelope className="text-red-500 mr-3" />
              BOOK MAIL
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium">From Address</label>
                <input
                  type="text"
                  placeholder="Enter sender's address"
                  className="w-full p-3 bg-[#374151] rounded-lg border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium">To Address</label>
                <input
                  type="text"
                  placeholder="Enter recipient's address"
                  className="w-full p-3 bg-[#374151] rounded-lg border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium">Parcel Type</label>
                <select className="w-full p-3 bg-[#374151] rounded-lg border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20 transition-all">
                  <option value="">Select Parcel Type</option>
                  <option value="speed">Speed Post</option>
                  <option value="regular">Regular Post</option>
                  <option value="express">Express Delivery</option>
                </select>
              </div>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-red-500/25">
                CONFIRM BOOKING
              </button>
            </form>
          </div>

          {/* Right Section - Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#2d3748] to-[#1f2937] p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FaTruck className="text-red-500 text-2xl" />
                </div>
                <h3 className="font-semibold">SPEED POST</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Express delivery service for urgent shipments</p>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-200">
                BOOK NOW
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#2d3748] to-[#1f2937] p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FaClock className="text-red-500 text-2xl" />
                </div>
                <h3 className="font-semibold">TRACK ID</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Track your shipment status in real-time</p>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-200">
                TRACK NOW
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#2d3748] to-[#1f2937] p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FaCompass className="text-red-500 text-2xl" />
                </div>
                <h3 className="font-semibold">TRACK & TRACE</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Detailed tracking with delivery updates</p>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-200">
                CHECK STATUS
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#2d3748] to-[#1f2937] p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FaEnvelope className="text-red-500 text-2xl" />
                </div>
                <h3 className="font-semibold">SCHEDULE PICKUP</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Convenient doorstep collection service</p>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-200">
                SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
  