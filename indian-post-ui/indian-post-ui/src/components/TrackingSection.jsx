const TrackingSection = () => {
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Track Your Shipment</h2>
        <div className="flex justify-center mt-6">
          <input 
            type="text" 
            placeholder="Enter Tracking ID" 
            className="p-3 border-2 border-gray-300 rounded-md w-1/2"
          />
          <button className="ml-4 bg-green-500 text-white px-6 py-3 rounded-md">Track & Trace</button>
        </div>
      </section>
    );
  };
  
  export default TrackingSection;
  