import "../components/Navbar.css";
import Logo from "./Pics/cr-logo.png";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white bg-opacity-50 max-width h-20 flex items justify-start">
      <img src={Logo} alt="logo1" />

      <ul className="list-none text-2xl flex items-center mr-6 space-x-3 pl-4">
        About
      </ul>
      <ul className="list-none text-2xl flex items-center mr-6 space-x-3 ">
        Projects
      </ul>
      <ul className="list-none text-2xl flex items-center mr-6 space-x-3 ">
        Contact Me
      </ul>
      <ul className="list-none text-2xl flex items-center mr-6 space-x-3 ">
        My Resume
      </ul>
    </nav>
  );
}

export default Navbar;
