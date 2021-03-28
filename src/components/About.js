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
        <div>
          <img
            className="pt-20"
            src={HelloYou}
            alt="hello"
            width="800px"
            height="800px"
          />
          <h1 className="text-2xl font-light pt-10 text-center">
            {" "}
            My name is Circe and I am a front end web developer.{" "}
          </h1>
          <ul>
            {/* <ul className="bg-red-50 bg-auto rounded-lg"> */}
            <li className="text-xl font-light pt-10 text-center">
              Front End: JavaScript, React, HTML5, CSS3
            </li>
            <li className="text-xl font-light pt-4 text-center">
              Back End: Postgres, Node.js, Express
            </li>
            <li className="text-xl font-light pt-4 text-center">
              Soft Skills: Communication, Open-mindedness, Adaptability,
              Collaboration/Teamwork
            </li>
          </ul>
        </div>
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
          <div className="pt-24 pb-16 bg-green-50">
            <h1 className="text-3xl text-gray-700 font-semibold bg-green-50">
              Original Portfolio
            </h1>
            <br />
            <ul className="text-gray-700 font-semibold pb-4">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
            <p className="text-xl text-gray-600">
              This portfolio was my first static webpage. Built using HTML and
              CSS it is a starting point to introduce the structure of a
              portfolio. It was also an introduction to styling libraries.
              Looking back at this portfolio I can see how mush I have grown in
              my coding capabilities as well as an improvement in my eye for
              design and in creating a more pleasurable user experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pt-24 pr-20 pb-16 bg-green-50">
            <h1 className="text-3xl text-gray-700 font-semibold">
              The Bar Cart
            </h1>
            <br />
            <ul className="text-gray-700 font-semibold pb-4">
              <li>React</li>
              <li>Tailwind</li>
              <li>Ant Design</li>
              <li>Material UI</li>
            </ul>
            <p className="text-xl text-gray-600 pr-4">
              This app was inspired by our desire to allow anyone to become
              their own bartender during the 2020-21 Coronavirus Pandemic. Users
              can register on the app to find cocktail recipes by using the
              search functionality which calls on an external API. Users can
              then favorite cocktails they're interested in, add them into their
              library (MyBar) and also create and update their own drinks.
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
          <div className="pt-24 pr-20 pl-10 bg-green-50">
            <h1 className="text-3xl text-gray-700 font-semibold">
              Princess Carolyn-Created with CSS
            </h1>
            <br />
            <ul className="text-gray-700 font-semibold pb-4">
              <li>CSS</li>
            </ul>
            <p className="text-xl text-gray-600 pr-4">
              Based on a character from a popular cartoon television show, this
              creature was created using CSS and nothing else.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pt-24 pr-20 pl-10 bg-green-50">
            <h1 className="text-3xl text-gray-700 font-semibold">
              The Office-"It is your Birthday."
            </h1>
            <br />
            <ul className="text-gray-700 font-semibold pb-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p className="text-xl text-gray-600">
              Fetching from the popular image sharing API Lorem Picsum these
              webpage will generate a random photo each time the Button is
              clicked.
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
