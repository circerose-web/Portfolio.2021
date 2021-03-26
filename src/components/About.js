import React from "react";
import ".././App.css";
import Profile from "./Pics/profilepic.jpeg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Portfolio from "./Pics/portfolio1.png";
import BarcartApp from "./Pics/barcartapp.png";
import CSS from "./Pics/css-creature.png";
import Lorem from "./Pics/Lorem.Picsum.API.png";
import Background from "./Pics/Hello.png";

const About = () => {
  return (
    <div className="font-sans text-lg pt-6 pb-6">
      <img
        className="rounded-md justify-start h-96 w-96 mx-auto shadow-2xl"
        src={Profile}
        alt="profile"
      />

      <h1 className="text-5xl pt-4 pb-2">Hello, I'm Circe! </h1>
      <li className="list-none">
        <ul className="text-4xl pt-2">I'm a web developer</ul>
        <ul className="text-4xl pt-2">Problem Solver</ul>
        <ul className="text-4xl pt-2">Constantly learning</ul>
      </li>
      <div className="flex justify-center pt-4 pb-4">
        {/* <p>
          I have been working in Medical Billing for 6 years and am transitioning into a career in tech. I am studying web development at Eleven Fifty Academy. The 6 month, extensive course has taught me 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          eveniet iste debitis fugit doloribus nisi odit repudiandae dolorem
          temporibus at fugiat nobis, minus saepe. Optio libero porro eius
          consequuntur culpa.
        </p> */}
      </div>
      <div className="space-y-4 bg-red-50 max-w-2xl mx-auto md:p-12 my-10 rounded-lg shadow-2xl w-1/2 text-gray-700">
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
            Communication, Open-mindedness, Adaptability, Collaboration/Teamwork
          </ul>
        </span>
        <span className="block">
          {" "}
          <ul className="text-3xl font-medium">Currently Learning</ul>
          <ul className="text-2xl font-light">
            TypeScript, Legacy React, Interaction Design Foundation-Beginner UX
            course
          </ul>
        </span>
      </div>
      <div className="projects">
        <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-4 pl-60">
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={{ width: "300px", height: "300px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "300px", height: "250px" }}
                src={Portfolio}
                alt="CSS creature"
              />
              <h1 className="text-gray-700">First Portfolio</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>ROCKS</BackSide>
          </Flippy>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={{ width: "300px", height: "300px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "300px", height: "250px" }}
                src={BarcartApp}
                alt="The Bar Cart"
              />
              <h1 className="text-gray-700">The Bar Cart</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              This app was inspired by our desire to allow anyone to become
              their own bartender. Users can register on the app to find
              cocktail recipes by using search functionality which calls on an
              external API. Users can favorite cocktails they're interested in,
              add them into their library (MyBar) , create new cocktails and
              update their own drinks.
            </BackSide>
          </Flippy>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={{ width: "300px", height: "300px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "300px", height: "250px" }}
                src={CSS}
                alt="CSS creature"
              />
              <h1 className="text-gray-700">CSS Creature</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>ROCKS</BackSide>
          </Flippy>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={{ width: "300px", height: "300px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "300px", height: "250px" }}
                src={Lorem}
                alt="CSS creature"
              />
              <h1 className="text-gray-700">Lorem Picsum API</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>ROCKS</BackSide>
          </Flippy>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={{ width: "300px", height: "300px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "300px", height: "250px" }}
                src={Lorem}
                alt="CSS creature"
              />
              <h1 className="text-gray-700">Lorem Picsum API</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>ROCKS</BackSide>
          </Flippy>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={{ width: "300px", height: "300px" }}
          >
            <FrontSide
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "300px", height: "250px" }}
                src={Lorem}
                alt="CSS creature"
              />
              <h1 className="text-gray-700">Lorem Picsum API</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>ROCKS</BackSide>
          </Flippy>
        </div>
      </div>
    </div>
  );
};

export default About;
