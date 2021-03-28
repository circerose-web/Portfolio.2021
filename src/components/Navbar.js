import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

import Dot from "./Pics/dots.png";

function Navbar() {
  return (
    <nav className="bg-red-200 bg-opacity-50 max-width h-20 flex items justify-start">
      {/* <img src={Logo} alt="logo1" /> */}
      <ul className="font-sans text-gray-700 list-none flex items-center mr-6 space-x-6">
        <li className="text-3xl flex items-center text-shadow-md pl-4 hover:bg-red-50 rounded-lg">
          <Link to="/">
            About
            {/* <img src={About} /> */}
          </Link>
          <img src={Dot} />
        </li>
        <li className="text-3xl flex items-center text-shadow-md hover:bg-red-50 rounded-lg">
          <Link to="/ContactMe">Contact Me{/* <img src={Contact} /> */}</Link>
          <img src={Dot} />
        </li>
        <li className="text-3xl flex items-center text-shadow-md hover:bg-red-50 rounded-lg">
          <a
            href="https://drive.google.com/file/d/1YMVcg8AYcRiPvpPad7j7MWmaIT-FUZJx/view?usp=sharing"
            target="_blank"
          >
            My Resume{/* <img src={Contact} /> */}
          </a>
          <img src={Dot} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
