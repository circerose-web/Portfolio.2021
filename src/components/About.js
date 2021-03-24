import React from "react";
import ".././App.css";
import Profile from "./Pics/profilepic.jpeg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Portfolio from "./Pics/portfolio1.png";
import BarcartApp from "./Pics/barcartapp.png";

const About = () => {
  return (
    <div>
      <img
        className="rounded-md h-80 w-80 mx-auto"
        src={Profile}
        alt="profile"
      />
      <h1 className="text-purple-600">About Me</h1>
      <div className="flex justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          magni, temporibus facere suscipit ipsum minima aspernatur praesentium
          mollitia velit recusandae tenetur saepe molestias et obcaecati,
          excepturi vero possimus. Mollitia, officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          eveniet iste debitis fugit doloribus nisi odit repudiandae dolorem
          temporibus at fugiat nobis, minus saepe. Optio libero porro eius
          consequuntur culpa.
        </p>
      </div>
      <div className="grid grid-cols-4 grid-flow-col gap-2">
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "300px", height: "300px" }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            <img
              style={{ width: "300px", height: "275px" }}
              src={Portfolio}
              alt="CSS creature"
            />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "300px", height: "300px" }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            <img
              style={{ width: "300px", height: "275px" }}
              src={Portfolio}
              alt="CSS creature"
            />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "300px", height: "300px" }}
        >
          <FrontSide>
            <img
              style={{ width: "300px", height: "275px" }}
              src={Portfolio}
              alt="CSS creature"
            />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "300px", height: "300px" }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            <img
              style={{ width: "300px", height: "275px" }}
              src={Portfolio}
              alt="CSS creature"
            />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "300px", height: "300px" }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            RICK
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
      </div>
    </div>
  );
};

export default About;
