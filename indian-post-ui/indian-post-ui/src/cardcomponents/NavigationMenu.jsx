const NavigationMenu = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">MANAGE TRACK & TRACE</h3>
        <div className="flex flex-col space-y-2">
          <div className="p-3 bg-gray-200 rounded-md text-center">📦 Book a Postage</div>
          <div className="p-3 bg-gray-200 rounded-md text-center">🔍 Track & Trace</div>
          <div className="p-3 bg-gray-200 rounded-md text-center">📌 Track & Practice</div>
          <div className="p-3 bg-orange-500 text-white rounded-md text-center">📤 Manage My Deliver</div>
        </div>
      </div>
    );
  };
  
  export default NavigationMenu;
  