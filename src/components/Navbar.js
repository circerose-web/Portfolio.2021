import "./Navbar.css";
import Logo from "./Pics/cr-logo.png";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white bg-opacity-50 max-width h-20 flex items justify-start">
      <img src={Logo} alt="logo1" />
      <ul className="list-none flex items-center mr-6 space-x-3">
        <li className=" text-2xl flex items-center pl-4">
          <Link to="/About">About</Link>
        </li>
        <li className="text-2xl flex items-center">Projects</li>
        <li className="text-2xl flex items-center">Contact Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
