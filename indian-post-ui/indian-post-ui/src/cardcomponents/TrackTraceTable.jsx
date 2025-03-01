const TrackTraceTable = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">TRACK & TRACE</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">#12345</td>
                <td className="p-2 border">In Transit</td>
                <td className="p-2 border">Feb 28</td>
              </tr>
              <tr>
                <td className="p-2 border">#67890</td>
                <td className="p-2 border">Delivered</td>
                <td className="p-2 border">Feb 27</td>
              </tr>
              <tr>
                <td className="p-2 border">#54321</td>
                <td className="p-2 border">Pending</td>
                <td className="p-2 border">Feb 26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TrackTraceTable;
  