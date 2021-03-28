import React from "react";
import Resume from "./Pics/resume.png";
import Git from "./Pics/github.png";
import LinkedIn from "./Pics/linkedin.png";

function Footer() {
  return (
    <footer className="lg:bg-gray-500 flex justify-center">
      <ul className="list-none flex items-center mr-6 space-x-6">
        <li>
          <a href="https://github.com/circerose-web" target="_blank">
            <img
              src={Git}
              alt="github"
              style={{ width: "150px", height: "150px" }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/circe-rose" target="_blank">
            <img
              src={LinkedIn}
              alt="LinkedIn"
              style={{ width: "150px", height: "150px" }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1YMVcg8AYcRiPvpPad7j7MWmaIT-FUZJx/view?usp=sharing"
            target="_blank"
          >
            <img
              src={Resume}
              alt="Hire Me!!"
              style={{ width: "150px", height: "150px" }}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
