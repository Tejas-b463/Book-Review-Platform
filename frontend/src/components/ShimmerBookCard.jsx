const ShimmerBookCard = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
        >
          <div className="bg-gray-200 h-64 w-full"></div>

          <div className="p-6 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="h-4 w-4 bg-gray-300 rounded-full" />
              ))}
            </div>
            <div className="h-8 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShimmerBookCard;
