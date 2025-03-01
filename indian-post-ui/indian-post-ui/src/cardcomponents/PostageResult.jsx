const PostageResult = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">POSTAGE DETAILS</h3>
        <div className="flex justify-center">
          <span className="text-3xl font-bold text-red-500">📍</span>
        </div>
        <p className="text-gray-500 mt-2">Check your estimated postage.</p>
      </div>
    );
  };
  
  export default PostageResult;
  