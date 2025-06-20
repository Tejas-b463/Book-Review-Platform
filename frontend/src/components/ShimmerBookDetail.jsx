const ShimmerBookDetail = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 animate-pulse">
      {/* Top Book Info Section */}
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow">
        <div className="w-full md:w-1/3 h-[300px] bg-gray-200 rounded-md"></div>

        <div className="flex-1 space-y-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>

          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-5 w-5 bg-gray-300 rounded-full"></div>
            ))}
            <div className="h-4 w-10 bg-gray-200 rounded ml-2"></div>
          </div>

          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="h-5 w-1/3 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>

        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-5 w-5 bg-gray-300 rounded-full"></div>
          ))}
        </div>

        <div className="h-24 bg-gray-100 rounded-md"></div>

        <div className="h-10 w-36 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default ShimmerBookDetail;
