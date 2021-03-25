import React from "react";
import ".././App.css";
import Profile from "./Pics/profilepic.jpeg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Portfolio from "./Pics/portfolio1.png";
import BarcartApp from "./Pics/barcartapp.png";
import CSS from "./Pics/css-creature.png";

const About = () => {
  return (
    <div className="font-sans text-lg pt-6 pb-6">
      <img
        className=" rounded-md h-80 w-80 mx-auto shadow-2xl"
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
      <div className="space-y-4 bg-white max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
        <span className="block">
          <ul className="text-2xl">JavaScript, React, HTML5, CSS3</ul>
        </span>
        <span className="block"></span>
        <span className="block">hi</span>
      </div>
      <div className="grid grid-cols-4 grid-flow-col gap-2 pt-4">
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
              style={{ width: "300px", height: "275px" }}
              src={Portfolio}
              alt="CSS creature"
            />
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
              style={{ width: "300px", height: "275px" }}
              src={BarcartApp}
              alt="The Bar Cart"
            />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#e2bcb7" }}>
            This app was inspired by our desire to allow anyone to become their
            own bartender during the 2020-21 Coronavirus Pandemic. Users can
            register on the app to find cocktail recipes by using the search
            functionality which calls on an external API. Users can then
            favorite cocktails they're interested in, add them into their
            library (MyBar) and also create and update their own drinks.
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
              style={{ width: "300px", height: "275px" }}
              src={CSS}
              alt="CSS creature"
            />
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
              style={{ width: "300px", height: "275px" }}
              src={CSS}
              alt="CSS creature"
            />
          </FrontSide>
          <BackSide style={{ backgroundColor: "#e2bcb7" }}>ROCKS</BackSide>
        </Flippy>
      </div>
    </div>
  );
};

export default About;
