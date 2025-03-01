import { useState, memo } from "react";
import { User, MapPin, Phone, Mail as MailIcon, Building, Send, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import PostOfficeMap from "./PostOfficeMap";

// Memoized AddressFields component to prevent unnecessary re-renders
const AddressFields = memo(({ type, data, onChange, nearestOffice }) => (
  <div className="space-y-6 bg-white backdrop-blur-lg bg-opacity-90 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
      <div className={`p-3 rounded-full ${type === "sender" ? "bg-gradient-to-br from-orange-100 to-orange-200" : "bg-gradient-to-br from-blue-100 to-blue-200"}`}>
        {type === "sender" ? (
          <Send className={`h-6 w-6 text-orange-500`} />
        ) : (
          <UserPlus className={`h-6 w-6 text-blue-500`} />
        )}
      </div>
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        {type === "sender" ? "From (Sender)" : "To (Receiver)"}
      </h3>
    </div>
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className={`h-5 w-5 ${type === "sender" ? "text-orange-400" : "text-blue-400"}`} />
          </div>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange(type, "firstName", e.target.value)}
            className={`pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className={`h-5 w-5 ${type === "sender" ? "text-orange-400" : "text-blue-400"}`} />
          </div>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange(type, "lastName", e.target.value)}
            className={`pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
          <MapPin className={`h-5 w-5 ${type === "sender" ? "text-orange-400" : "text-blue-400"}`} />
        </div>
        <textarea
          value={data.address}
          onChange={(e) => onChange(type, "address", e.target.value)}
          rows={3}
          className={`pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
            type === "sender" 
            ? "focus:ring-orange-500 focus:border-orange-500" 
            : "focus:ring-blue-500 focus:border-blue-500"
          }`}
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
        <div className="mt-1">
          <input
            type="text"
            value={data.country}
            disabled
            className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">State/UT</label>
        <div className="mt-1">
          <input
            type="text"
            value={data.state}
            onChange={(e) => onChange(type, "state", e.target.value)}
            className={`block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City/District</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building className={`h-5 w-5 ${type === "sender" ? "text-orange-400" : "text-blue-400"}`} />
          </div>
          <input
            type="text"
            value={data.city}
            onChange={(e) => onChange(type, "city", e.target.value)}
            className={`pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
        <div className="mt-1">
          <input
            type="text"
            value={data.pincode}
            onChange={(e) => onChange(type, "pincode", e.target.value)}
            className={`block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MailIcon className={`h-5 w-5 ${type === "sender" ? "text-orange-400" : "text-blue-400"}`} />
          </div>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange(type, "email", e.target.value)}
            className={`pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className={`h-5 w-5 ${type === "sender" ? "text-orange-400" : "text-blue-400"}`} />
          </div>
          <input
            type="tel"
            value={data.mobile}
            onChange={(e) => onChange(type, "mobile", e.target.value)}
            className={`pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-2 ${
              type === "sender" 
              ? "focus:ring-orange-500 focus:border-orange-500" 
              : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
      </div>
    </div>

    {nearestOffice && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
      >
        <h4 className="text-lg font-semibold mb-2">Nearest Post Office</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p><strong>Name:</strong> {nearestOffice.officename}</p>
          <p><strong>Pincode:</strong> {nearestOffice.pincode}</p>
          <p><strong>District:</strong> {nearestOffice.district}</p>
          <p><strong>State:</strong> {nearestOffice.state}</p>
        </div>
      </motion.div>
    )}
  </div>
));

const AddressForm = () => {
  const [formData, setFormData] = useState({
    sender: {
      firstName: "",
      lastName: "",
      address: "",
      country: "India",
      state: "",
      city: "",
      pincode: "",
      email: "",
      mobile: "",
      latitude: "",
      longitude: ""
    },
    receiver: {
      firstName: "",
      lastName: "",
      address: "",
      country: "India",
      state: "",
      city: "",
      pincode: "",
      email: "",
      mobile: "",
      latitude: "",
      longitude: ""
    },
  });

  const [nearestOffices, setNearestOffices] = useState({
    sender: null,
    receiver: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [pincodeError, setPincodeError] = useState({
    sender: null,
    receiver: null
  });

  const handleChange = async (person, field, value) => {
    // First update the form data
    setFormData((prev) => ({
      ...prev,
      [person]: {
        ...prev[person],
        [field]: value,
      },
    }));

    // If pincode is changed and has 6 digits, fetch nearest post office
    if (field === "pincode") {
      // Clear any previous pincode error
      setPincodeError(prev => ({
        ...prev,
        [person]: null
      }));

      // Only proceed with API call if pincode is 6 digits
      if (value.length === 6 && /^\d{6}$/.test(value)) {
        try {
          const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              address: value,
              pincode: value
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch post office details');
          }

          const data = await response.json();
          
          if (data.nearest_office) {
            // Update nearest offices state
            setNearestOffices(prev => ({
              ...prev,
              [person]: data.nearest_office
            }));

            // Update form data with the state and city from nearest office
            setFormData(prev => ({
              ...prev,
              [person]: {
                ...prev[person],
                state: data.nearest_office.state || prev[person].state,
                city: data.nearest_office.district || prev[person].city,
                latitude: data.nearest_office.latitude || "",
                longitude: data.nearest_office.longitude || ""
              }
            }));
          } else {
            setPincodeError(prev => ({
              ...prev,
              [person]: "No post office found for this pincode"
            }));
          }
        } catch (error) {
          console.error("Error fetching nearest post office:", error);
          setPincodeError(prev => ({
            ...prev,
            [person]: "Failed to fetch post office details. Please try again."
          }));
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Validate form data
      if (!formData.sender.pincode || !formData.receiver.pincode) {
        throw new Error('Please fill in all required fields including pincodes');
      }

      // Here you would typically send the data to your backend
      console.log("Form data to be submitted:", formData);
      
      // For now, just show success message
      alert('Addresses submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit addresses. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AddressFields 
              type="sender" 
              data={formData.sender} 
              onChange={handleChange}
              nearestOffice={nearestOffices.sender}
            />
            {pincodeError.sender && (
              <div className="mt-2 text-red-500 text-sm">
                {pincodeError.sender}
              </div>
            )}
          </div>
          <div>
            <AddressFields 
              type="receiver" 
              data={formData.receiver} 
              onChange={handleChange}
              nearestOffice={nearestOffices.receiver}
            />
            {pincodeError.receiver && (
              <div className="mt-2 text-red-500 text-sm">
                {pincodeError.receiver}
              </div>
            )}
          </div>
        </div>

        {submitError && (
          <div className="text-red-500 text-center font-medium">
            {submitError}
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Addresses'}
          </button>
        </div>
      </form>
      
      {nearestOffices.sender && (
        <PostOfficeMap
          senderAddress={formData.sender}
          nearestOffice={nearestOffices.sender}
        />
      )}
    </motion.div>
  );
};

export default AddressForm; 