import React from "react";
import "../App.css";
import Profile from "./Pics/profilepic.jpeg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Portfolio from "./Pics/portfoliologo.png";
import BarcartApp from "./Pics/barcart2.png";
import CSS from "./Pics/css-creature.png";
import Lorem from "./Pics/lorem2.png";
import barcartpic from "./Pics/barcartapp.png";
import Button from "@material-ui/core/Button";
import HelloYou from "./Pics/helloyou.png";
import PortPic from "./Pics/portfolio1.png";
import LoremPic from "./Pics/Lorem.Picsum.API.png";

const About = () => {
  return (
    <div className="font-sans text-lg pt-20 pb-6">
      <div className="grid grid-cols-2">
        <div className="flex">
          <div className="m-auto">
            <img
              className="rounded-full h-96 w-96 shadow-2xl ml-32"
              src={Profile}
              alt="profile"
            />
          </div>
        </div>
        <div>
          <img
            className="pt-20"
            src={HelloYou}
            alt="hello"
            width="800px"
            height="800px"
          />
          <h1 className="text-3xl  text-shadow-lg font-light pt-2- text-center">
            {" "}
            My name is Circe and I am a front-end web developer.{" "}
          </h1>
          <ul>
            {/* <ul className="bg-red-50 bg-auto rounded-lg"> */}
            <li className="text-xl font-light pt-10 text-center">
              Front End: JavaScript, React, HTML5, CSS3
            </li>
            <li className="text-xl  font-light pt-4 text-center">
              Back End: Postgres, Node.js, Express
            </li>
            <li className="text-xl  font font-light pt-4 text-center">
              Soft Skills: Communication, Open-mindedness, Adaptability,
              Collaboration/Teamwork
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="bg-red-300 shadow-lg bg-opacity-30 mt-10 text-center pb-4 rounded-lg ml-40 mr-40"> */}
      {/* <div className="text-right"> */}

      {/* </div> */}
      {/* </div> */}
      <div className="projects pt-32">
        <div className="grid grid-cols-2 col-span-2 space-x-0">
          <div className="pl-24 text-gray-500 flex justify-center">
            <Flippy
              flipOnHover={true}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "400px", height: "400px" }}
            >
              <FrontSide
                style={{
                  backgroundColor: "#FEE2E2",
                }}
              >
                <img
                  style={{ width: "375px", height: "365px" }}
                  src={BarcartApp}
                  alt="BarCart"
                />
              </FrontSide>
              <BackSide style={{ backgroundColor: "#FEE2E2" }}>
                <div className="flex flex-wrap justify-center pt-10 space-x-2">
                  <a
                    href="https://czc-thebarcart.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined" color="primary">
                      Go To Project
                    </Button>
                  </a>
                  <a
                    href="https://github.com/circerose-web/blueBadgeCocktails-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined" color="primary">
                      View Raw Code
                    </Button>
                  </a>
                  <img
                    className="rounded-lg h-60 w-60 shadow-xl m-auto pt-4"
                    src={barcartpic}
                    alt="brc"
                  />
                </div>
              </BackSide>
            </Flippy>
          </div>
          <div className="flex">
            <div className="bg-gray-200 bg-opacity-60 m-auto shadow-2xl w-11/12 pl-4 text-center pb-4 pr-4 pt-4">
              <h1 className="text-3xl text-gray-700 font-semibold pt-2">
                The Bar Cart
              </h1>
              <br />
              <ul className="text-gray-700 font-semibold pb-4">
                <li>React</li>
                <li>Tailwind</li>
                <li>Ant Design</li>
                <li>Material UI</li>
              </ul>
              <p className="text-xl text-gray-600">
                This app was inspired by our desire to allow anyone to become
                their own bartender during the 2020-21 Coronavirus Pandemic.
                Users can register on the app to find cocktail recipes by using
                the search functionality which calls on an external API. Users
                can then favorite cocktails they're interested in, add them into
                their library (MyBar) and also create and update their own
                drinks.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="bg-gray-200 bg-opacity-60 m-auto shadow-2xl pl-4 w-11/12 text-center pb-4 pt-4">
            <h1 className="text-3xl text-gray-700 font-semibold">
              Original Portfolio
            </h1>
            <br />
            <ul className="text-gray-700 font-semibold pb-4">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
            <p className="text-xl text-gray-600 pr-4">
              This portfolio was my first static webpage. Built using HTML and
              CSS it is a starting point to introduce the structure of a
              portfolio. It was also an introduction to styling libraries.
              Looking back at this portfolio I can see how much I have grown in
              my coding capabilities as well as an improvement in my eye for
              design and in creating a more pleasurable user experience.
            </p>
          </div>
          <div className="flex pb-16 pt-10">
            <div className="m-auto">
              <Flippy
                flipOnHover={true}
                flipOnClick={true}
                flipDirection="horizontal"
                style={{ width: "400px", height: "400px" }}
              >
                <FrontSide
                  style={{
                    backgroundColor: "#FEE2E2",
                  }}
                >
                  <img
                    style={{ width: "375px", height: "365px" }}
                    src={Portfolio}
                    alt="Original Portfolio"
                  />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#FEE2E2" }}>
                  <div className="flex flex-wrap justify-center pt-10 space-x-2">
                    <a
                      href="https://circerose-web.github.io/Circe-s-Portfolio/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outlined" color="primary">
                        Go To Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/circerose-web/Circe-s-Portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outlined" color="primary">
                        View Raw Code
                      </Button>
                    </a>
                    <img
                      className="rounded-lg h-60 w-60 shadow-xl m-auto pt-4"
                      src={PortPic}
                      alt="portfoliofirst"
                    />
                  </div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pl-24 text-gray-500 flex justify-center">
            <Flippy
              flipOnHover={true}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "400px", height: "400px" }}
            >
              <FrontSide
                style={{
                  backgroundColor: "#FEE2E2",
                }}
              >
                <img
                  style={{ width: "375px", height: "365px" }}
                  src={CSS}
                  alt="CSS creature"
                />
              </FrontSide>
              <BackSide style={{ backgroundColor: "#FEE2E2" }}>
                <div className="flex flex-wrap justify-center pt-10 space-x-2">
                  <a
                    href="https://codepen.io/circe-rose/pen/wvWRaXO"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined" color="primary">
                      Go To Project
                    </Button>
                  </a>
                  <a
                    href="https://codepen.io/circe-rose/pen/wvWRaXO"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined" color="primary">
                      View Raw Code
                    </Button>
                  </a>
                  <img
                    className="rounded-lg h-60 w-60 shadow-xl m-auto pt-4"
                    src={CSS}
                    alt="brc"
                  />
                </div>
              </BackSide>
            </Flippy>
          </div>
          <div className="bg-gray-200 bg-opacity-60 m-auto shadow-2xl pl-4 w-11/12 h-60 text-center pt-4">
            <h1 className="text-3xl text-gray-700 font-semibold">
              Princess Carolyn-Created with CSS
            </h1>
            <br />
            <ul className="text-gray-700 font-semibold">
              <li>CSS</li>
            </ul>
            <p className="text-xl text-gray-600">
              Based on a character from a popular cartoon television show, this
              creature was created using CSS and nothing else.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="bg-gray-200 bg-opacity-60 m-auto shadow-2xl pl-4 w-11/12 text-center pt-4 pb-4">
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
          <div className="flex pt-6">
            <div className="m-auto">
              <Flippy
                flipOnHover={true}
                flipOnClick={true}
                flipDirection="horizontal"
                style={{ width: "400px", height: "400px" }}
              >
                <FrontSide
                  style={{
                    backgroundColor: "#FEE2E2",
                  }}
                >
                  <img
                    style={{ width: "375px", height: "365px" }}
                    src={Lorem}
                    alt="Lorem"
                  />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#FEE2E2" }}>
                  <div className="flex flex-wrap justify-center pt-10 space-x-2">
                    <a
                      href="https://circerose-web.github.io/LoremPic.Api/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outlined" color="primary">
                        Go To Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/circerose-web/LoremPic.Api"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outlined" color="primary">
                        View Raw Code
                      </Button>
                    </a>
                    <img
                      className="rounded-lg h-60 w-60 shadow-xl m-auto pt-4"
                      src={LoremPic}
                      alt="brc"
                    />
                  </div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
