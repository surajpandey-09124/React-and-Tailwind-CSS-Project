import React from "react";

const Project3 = () => {
  return (
    <>
      <div className="p-6 bg-gray-100 mt-2 flex justify-evenly items-center flex-wrap gap-4">
        <div className="bg-white rounded-lg p-6 shadow-md w-64">
          <h1 className="text-center font-bold text-xl leading-relaxed">
            Card 1
          </h1>
          <p className="text-center">This is some card content</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md w-64">
          <h1 className="text-center font-bold text-xl leading-relaxed">
            Card 2
          </h1>
          <p className="text-center">This is some more content</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md w-64">
          <h1 className="text-center font-bold text-xl leading-relaxed">
            Card 3
          </h1>
          <p className="text-center">Another one!</p>
        </div>
      </div>
    </>
  );
};

export default Project3;
