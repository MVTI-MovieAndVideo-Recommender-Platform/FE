import React from 'react';

const LoadingSpinner = ({ loadingTime }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-opacity-75 text-black dark:text-white text-xl">
      <div className="border-4 border-gray-300  items-center justify-center border-t-4 border-t-blue-500 rounded-full w-24 h-24 animate-spin"></div>
      <p className="mt-4 text-black dark:text-white text-xl">로딩중. . . {loadingTime}</p>
    </div>
  );
};

export default LoadingSpinner;

//바꿔넣기!
