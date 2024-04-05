import React from 'react'

const Shimmer = () => {
    return (
        <div className="animate-pulse flex flex-col items-center justify-center mb-4 border-gray-300 border-2 px-5 md:px-14 py-5 rounded-xl mt-2">
          <div className="w-40 h-40 bg-gray-200 rounded-full"></div>
          <div className="mt-4">
            <div className="w-24 h-6 bg-gray-200 mb-2"></div>
            <div className="w-20 h-4 bg-gray-200"></div>
          </div>
        </div>
      );
    };

export default Shimmer