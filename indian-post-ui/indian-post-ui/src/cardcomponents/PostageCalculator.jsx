const PostageCalculator = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">CALCULATE POSTAGE</h3>
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-2xl">🔢</span>
          </div>
        </div>
        <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
          Calculate
        </button>
      </div>
    );
  };
  
  export default PostageCalculator;
  