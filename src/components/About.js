import React from "react";
import "../App.css";
import Profile from "./Pics/profilepic.jpeg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Portfolio from "./Pics/portfoliologo.png";
import BarcartApp from "./Pics/barcart2.png";
import CSS from "./Pics/css-creature.png";
import Lorem from "./Pics/lorem2.png";
import Button from "@material-ui/core/Button";
import HelloYou from "./Pics/helloyou.png";

const About = () => {
  return (
    <div className="font-sans text-lg pt-20 pb-6">
      <div className="grid grid-cols-2">
        <img
          className="rounded-full h-96 w-96 shadow-2xl ml-32"
          src={Profile}
          alt="profile"
        />
        <img
          className="pt-20"
          src={HelloYou}
          alt="hello"
          width="800px"
          height="800px"
        />
        {/* <div className="space-y-4 bg-red-50 md:p-12 my-10 rounded-lg shadow-2xl w-3/4 text-gray-700 mb-6">
          <span className="block">
            <ul className="text-3xl font-medium">Front End </ul>
            <ul className="text-2xl font-light">
              JavaScript, React, HTML5, CSS3
            </ul>
          </span>
          <span className="block">
            {" "}
            <ul className="text-3xl font-medium">Back End </ul>
            <ul className="text-2xl font-light">Postgres, Node.js, Express</ul>
          </span>
          <span className="block">
            {" "}
            <ul className="text-3xl font-medium">Soft Skills</ul>
            <ul className="text-2xl font-light">
              Communication, Open-mindedness, Adaptability,
              Collaboration/Teamwork
            </ul>
          </span>
          <span className="block">
            {" "}
            <ul className="text-3xl font-medium">Currently Learning</ul>
            <ul className="text-2xl font-light">
              TypeScript, Legacy React, Interaction Design Foundation-Beginner
              UX course
            </ul>
          </span>
        </div> */}
      </div>
      <div className="projects pt-32">
        <div className="grid grid-cols-2 col-span-2 space-x-0">
          <div className="pl-24 text-gray-500">
            <Flippy
              flipOnHover={true}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "400px", height: "400px" }}
            >
              <FrontSide
                style={{
                  backgroundColor: "#ffdcdc",
                }}
              >
                <img
                  style={{ width: "375px", height: "375px" }}
                  src={BarcartApp}
                  alt="BarCart"
                />
              </FrontSide>
              <BackSide style={{ backgroundColor: "#e2bcb7" }}>
                <Button>Go To Project</Button>
                <Button>View Raw Code</Button>
              </BackSide>
            </Flippy>
          </div>
          <div className="pt-24">
            <h1 className="text-3xl text-gray-700">Original Portfolio</h1>
            <p className="text-xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              aliquid. Dolorum maxime maiores labore necessitatibus ipsum
              excepturi expedita, itaque commodi sapiente veniam. Itaque fugit
              dolorum sit, consequatur rem consequuntur facilis!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pt-24 pr-20 pl-10">
            <h1 className="text-3xl text-gray-700">The Bar Cart</h1>
            <p className="text-xl text-gray-600 pr-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              voluptate, delectus asperiores mollitia vero assumenda repellat
              et, perspiciatis porro ullam quos eaque dolor non alias quidem
              laborum sequi consequatur. Ut?
            </p>
          </div>
          <Flippy
            flipOnHover={true}
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ width: "400px", height: "400px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#ffdcdc",
              }}
            >
              <img
                style={{ width: "375px", height: "375px" }}
                src={Portfolio}
                alt="Original Portfolio"
              />
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              <Button>Go To Project</Button>
              <Button>View Raw Code</Button>
            </BackSide>
          </Flippy>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pl-24 text-gray-500">
            <Flippy
              flipOnHover={true}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "400px", height: "400px" }}
            >
              <FrontSide
                style={{
                  backgroundColor: "#ffdcdc",
                }}
              >
                <img
                  style={{ width: "375px", height: "375px" }}
                  src={CSS}
                  alt="CSS creature"
                />
              </FrontSide>
              <BackSide style={{ backgroundColor: "#e2bcb7" }}>
                <Button>Go To Project</Button>
                <Button>View Raw Code</Button>
              </BackSide>
            </Flippy>
          </div>
          <div className="pt-24 pr-20 pl-10">
            <h1 className="text-3xl text-gray-700">
              Princess Carolyn-Character made using only CSS
            </h1>
            <p className="text-xl text-gray-600 pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, delectus ipsum ipsam repudiandae, quasi laboriosam
              nostrum qui autem exercitationem laudantium deleniti. Itaque sit
              harum animi ab repellat tenetur, ut dolores.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pt-24 pr-20 pl-10">
            <h1 className="text-3xl text-gray-700">
              The Office-"It is your Birthday."
            </h1>
            <p className="text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              nisi, ipsa enim modi doloremque cupiditate rerum fugit temporibus
              nemo, vero numquam repudiandae non placeat eos quasi quod sint,
              qui repellendus.
            </p>
          </div>
          <Flippy
            flipOnHover={true}
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ width: "400px", height: "400px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#ffdcdc",
              }}
            >
              <img
                style={{ width: "375px", height: "375px" }}
                src={Lorem}
                alt="Lorem"
              />
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              <Button>Go To Project</Button>
              <Button>View Raw Code</Button>
            </BackSide>
          </Flippy>
        </div>
      </div>
    </div>
  );
};

export default About;
