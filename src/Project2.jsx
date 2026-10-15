import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Project2 = () => {
  let [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-lg px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-blue-700 text-2xl font-serif">
            Brand
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-between p-2 items-center min-w-sm font-semibold text-gray-600 gap-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <button
            className="block md:hidden text-2xl"
            onClick={() => setMenu(!menu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {/* Mobile Links */}
        {menu && (
          <div className="md:hidden flex flex-col font-bold text-gray-600 gap-6 mt-2">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Project2;

// 01:26:30 project3 started
