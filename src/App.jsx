import "./App.css";
import Project1 from "./Project1";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";
let App = () => {
  return (
    <>
      {/* <div className='bg-pink-500 min-h-screen'>
    <h1 className='text-white'>This is my first Tailwind Course</h1>
    <h2 className='bg-green-200 ml-2 p-2'>Hello Everyone my name is suraj pandey</h2>
    <p className='text-3xl text-orange-300 bg-amber-100 p-2 m-2 font-semibold'>Hello Everyone this is Suraj Pandey</p>
    <div class='rounded-lg bg-amber-300 p-4 m-4 shadow-xl border-blue-300 border-3 uppercase font-serif text-center text-green-400'>hello</div>
  </div> */}
      <Router>
        <nav className="flex justify-center items-center bg-white-100 font-semibold shadow-md text-gray-400 flex-wrap">
          <NavLink
            to="/project1"
            className="px-2 py-2 rounded-xl mt-2 font-serif transition duration-300 hover:scale-108 hover:text-blue-500"
          >
            Project1
          </NavLink>
          <NavLink
            to="/project2"
            className=" px-2 py-2 rounded-xl mt-2 font-serif transition duration-300 hover:scale-108 hover:text-blue-500"
          >
            Project2
          </NavLink>
          <NavLink
            to="/project3"
            className="px-2 py-2 rounded-xl mt-2 font-serif transition duration-300 hover:scale-108 hover:text-blue-500"
          >
            Project3
          </NavLink>
          <NavLink
            to="/project4"
            className="px-2 py-2 rounded-xl mt-2 font-serif transition duration-300 hover:scale-108 hover:text-blue-500"
          >
            Project4
          </NavLink>
          <NavLink
            to="/project5"
            className="px-2 py-2 rounded-xl mt-2 font- transition duration-300 hover:scale-108 font-serif hover:text-blue-500"
          >
            Project5
          </NavLink>
          <NavLink
            to="/project6"
            className="px-2 py-2 rounded-xl mt-2 font- transition duration-300 hover:scale-108 font-serif hover:text-blue-500"
          >
            Project6
          </NavLink>
        </nav>
        <Routes>
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project6" element={<Project6/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

// 37:46 Tailwind css course started
