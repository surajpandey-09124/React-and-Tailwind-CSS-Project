import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useState } from "react";
let Project6 = () => {
  let [menu, setMenu] = useState(false);
  return (
    <>
      <div className="bg-gray-100 min-h-screen font-serif">
        {/* Heading Coding Started */}
        <header className="bg-white px-6 py-4 mt-4 shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-blue-500 text-2xl font-bold">SaaSly</h1>

            <nav className="hidden md:flex items-center gap-4 font-bold">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Pricing
              </a>
            </nav>

            <button
              className="text-xl block md:hidden"
              onClick={() => setMenu(!menu)}
            >
              <GiHamburgerMenu />
            </button>
          </div>

          {/* Mobile Responsive */}
          {menu && (
            <nav className="md:hidden flex gap-6 mt-2 flex-col">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Pricing
              </a>
            </nav>
          )}
        </header>

        {/* Main Coding Started */}
        <main>
          {/* Hero-Section Coding Started */}
          <section className="grid grid-cols-1 md:grid-cols-2 p-6">
            <div className="p-6 lg:flex lg:flex-col lg:justify-center lg:items-start">
              <h1 className="text-3xl font-bold mb-4">
                Build your SaaS website faster
              </h1>
              <p className="text-sm text-gray-400 mb-2 md:text-md">
                Tailwind CSS lets you built modern, responsive design without
                writing custom CSS.
              </p>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 transition duration-300 hover:scale-108">
                Get Started
              </button>
            </div>

            <div className="p-6">
              <img
                src="https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg"
                className="rounded-xl shadow-md transition duration-300 hover:scale-108"
              />
            </div>
          </section>

          {/* Core Features Coding */}
          <section className="p-6 mt-8">
            <h1 className="text-2xl text-blue-500 p-4 text-center font-semibold">
              Core Features
            </h1>
            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-gray-200 shadow-md text-center rounded-lg transition duration-300 hover:scale-108">
                <h3 className="text-xl font-bold mb-1">Fast Performace</h3>
                <p className="text-gray-400 text-sm">
                  Optimized for speed and performance
                </p>
              </div>
              <div className="p-6 bg-gray-200 shadow-md text-center rounded-lg transition duration-300 hover:scale-108">
                <h3 className="text-xl font-bold mb-1">Responsive Design</h3>
                <p className="text-gray-400 text-sm">
                  Mobile-first layout for all devices
                </p>
              </div>
              <div className="p-6 bg-gray-200 shadow-md text-center rounded-lg transition duration-300 hover:scale-108">
                <h3 className="text-xl font-bold mb-1">Easy Customization</h3>
                <p className="text-gray-400 text-sm">
                  Style with utilities only
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Plans Coding Started */}
          <section className="p-6">
            <h1 className="text-blue-500 text-2xl text-center font-semibold">
              Pricing Plans
            </h1>
            <div className="grid grid-cols-1 p-6 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 bg-gray-200 rounded-lg text-center leading-10 transition duration-300 hover:scale-108">
                <h3 className=" text-black font-bold text-md">Basic</h3>
                <h4 className="text-blue-500 text-xl">$19/mo</h4>
                <p>
                  ✔️ <span className="text-gray-500">1 Project</span>
                </p>
                <p>
                  ✔️ <span className="text-gray-500">Basic Support</span>
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
                  Choose Plan
                </button>
              </div>
              <div className="p-4 bg-gray-200 rounded-lg text-center leading-10 transition duration-300 hover:scale-108">
                <h3 className=" text-black font-bold text-md">Pro</h3>
                <h4 className="text-blue-500 text-xl">$49/mo</h4>
                <p>
                  ✔️ <span className="text-gray-500">10 Project</span>
                </p>
                <p className="text-purple-600">
                  ✔️ <span className="text-gray-500">Priority Support</span>
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
                  Choose Plan
                </button>
              </div>
              <div className="p-4 bg-gray-200 rounded-lg text-center leading-10 transition duration-300 hover:scale-108">
                <h3 className=" text-black font-bold text-md">Enterprise</h3>
                <h4 className="text-blue-500 text-xl">$99/mo</h4>
                <p className="text-purple-600">
                  ✔️ <span className="text-gray-500">Unlimited Project</span>
                </p>
                <p className="text-purple-600">
                  ✔️ <span className="text-gray-500">24/7 Support</span>
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
                  Choose Plan
                </button>
              </div>
            </div>
          </section>

          {/* Contact Us Coding Started */}
          <section className="p-6">
            <h1 className="text-2xl text-blue-500 font-bold text-center">
              Contact Us
            </h1>
            <div className="flex justify-center items-center">
              <form className="mt-4 p-6 bg-gray-200 text-center rounded-lg w-full max-w-2xl">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 rounded-md bg-white md:mb-4"
                  ></input>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 rounded-md bg-white mb-4"
                  ></input>
                </div>
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="p-2 rounded-md bg-white w-full mb-4"
                ></input>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="p-2 bg-white rounded-md w-full mb-4"
                ></textarea>
                <button className="bg-blue-500 rounded-md text-white px-4 py-2 w-full">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
        <footer className="p-6 mt-4 grid grid-cols-1 md:grid-cols-3 bg-gray-200 text-center">
          <div className="p-6">
            <h1 className="text-xl font-bold text-black">SaaSly</h1>
            <p className="text-gray-500">©️ 2026 All rights reserved.</p>
          </div>
          <nav className="p-6">
            <h1 className="text-xl font-bold text-black">Links</h1>
            <a href="#" className="text-gray-500">
              Home
            </a>
            <br></br>
            <a href="#" className="text-gray-500">
              Pricing
            </a>
          </nav>

          <div className="p-6">
            <h1 className="text-xl font-bold text-black">Follows Us</h1>
            <nav className="flex justify-center items-center gap-4 mt-2">
              <a
                href="https://github.com/surajpandey-09124"
                className="text-xl transition duration-300 hover:scale-108"
              >
                <FaGithubSquare />
              </a>

              <a
                href="https://www.linkedin.com/in/surajpandey09124/"
                className="text-xl transition duration-300 hover:scale-108"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/surajpandey6005/"
                className="text-xl transition duration-300 hover:scale-108"
              >
                <FaSquareInstagram />
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Project6;
