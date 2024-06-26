import React from "react";

const LoadDataSpiner = () => {
  return (
    <div className=" flex justify-center items-center">
      <div>
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
      </div>
    </div>
  );
};

export default LoadDataSpiner;
