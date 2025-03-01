const TrackTrackForm = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">TRACK & TRACK</h3>
        <div className="bg-gray-100 p-3 rounded-md flex flex-col space-y-3">
          <div className="w-full bg-white p-2 rounded-md shadow-inner text-gray-500">
            Enter Tracking ID
          </div>
          <div className="w-full bg-white p-2 rounded-md shadow-inner text-gray-500">
            Enter Order Date
          </div>
          <button className="w-full bg-gray-500 text-white py-2 rounded-md">Calculate</button>
          <button className="w-full bg-red-500 text-white py-2 rounded-md">Manage My Way</button>
        </div>
      </div>
    );
  };
  
  export default TrackTrackForm;
  