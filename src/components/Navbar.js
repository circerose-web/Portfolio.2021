import "../components/Navbar.css";

import React from "react";

function Navbar() {
  return (
    <nav className="bg-white bg-opacity-50 max-width h-20 flex items justify-between">
      <ul className="list-none flex items-center mr-6 space-x-3 ">About</ul>
      <ul className="list-none flex items-center mr-6 space-x-3 ">Projects</ul>
      <ul className="list-none flex items-center mr-6 space-x-3 ">
        Contact ME
      </ul>
    </nav>
  );
}

export default Navbar;
