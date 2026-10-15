import { NavLink } from "react-router-dom";
let Project1 = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 max-w-sm rounded-xl text-center shadow-lg">
          <h2 className="text-2xl text-green-800 font-bold mb-2 tracking-wide">
            Pro Plan
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ideal for developers and startups who want power and performance
          </p>
          <div className="text-blue-600 font-bold text-4xl mb-6">
            ₹999 <span className="text-gray-500 text-sm">/month</span>
          </div>
          <ul className="text-left mb-4 text-gray-700 space-y-2">
            <li>✅ Unlimited Projects</li>
            <li>✅ 100 GB Storage</li>
            <li>✅ Priority Support</li>
          </ul>
          <button className="text-white px-6 py-4 bg-blue-600 rounded-2xl hover:bg-blue-800 transition duration-300 ease-in-out mt-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Project1;
