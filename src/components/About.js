import React from "react";
import "../App.css";
import Profile from "./Pics/profilepic.jpeg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Portfolio from "./Pics/portfolio1.png";
import BarcartApp from "./Pics/barcartapp.png";
import CSS from "./Pics/css-creature.png";
import Lorem from "./Pics/Lorem.Picsum.API.png";
import Button from "@material-ui/core/Button";

const About = () => {
  return (
    <div className="font-sans text-lg pt-6 pb-6">
      <div className="grid grid-cols-2  pl-60">
        <img
          className="rounded-full h-96 w-96 shadow-2xl"
          src={Profile}
          alt="profile"
        />
        <div className="space-y-4 bg-red-50 md:p-12 my-10 rounded-lg shadow-2xl w-3/4 text-gray-700 mb-6">
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
        </div>
      </div>
      <div className="projects">
        <div className="grid grid-cols-2 col-span-2 space-x-0">
          <div className="pl-24">
            <Flippy
              flipOnHover={true}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "400px", height: "400px" }}
            >
              <FrontSide
                style={{
                  backgroundColor: "#f5f4f4",
                }}
              >
                <img
                  style={{ width: "350px", height: "350px" }}
                  src={Portfolio}
                  alt="Portfolio"
                />
                <h1 className="text-gray-700">First Portfolio</h1>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#e2bcb7" }}>
                <Button>Go To Project</Button>
                <Button>View Raw Code</Button>
              </BackSide>
            </Flippy>
          </div>
          <div className="text-white pt-24">
            <h1 className="text-3xl">Original Portfolio</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              aliquid. Dolorum maxime maiores labore necessitatibus ipsum
              excepturi expedita, itaque commodi sapiente veniam. Itaque fugit
              dolorum sit, consequatur rem consequuntur facilis!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="text-white pt-24">
            <h1 className="text-3xl">The Bar Cart</h1>
            <p className="text-xl">
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
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "350px", height: "350px" }}
                src={BarcartApp}
                alt="The Bar Cart"
              />
              <h1 className="text-gray-700">The Bar Cart</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              <Button>Go To Project</Button>
              <Button>View Raw Code</Button>
            </BackSide>
          </Flippy>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="pl-24">
            <Flippy
              flipOnHover={true}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "400px", height: "400px" }}
            >
              <FrontSide
                style={{
                  backgroundColor: "#f5f4f4",
                }}
              >
                <img
                  style={{ width: "350px", height: "350px" }}
                  src={CSS}
                  alt="CSS creature"
                />
                <h1 className="text-gray-700">CSS Creature</h1>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#e2bcb7" }}>
                <Button>Go To Project</Button>
                <Button>View Raw Code</Button>
              </BackSide>
            </Flippy>
          </div>
          <div className="text-white pt-24">
            <h1 className="text-3xl">
              Princess Caroline-Character made using only CSS
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, delectus ipsum ipsam repudiandae, quasi laboriosam
              nostrum qui autem exercitationem laudantium deleniti. Itaque sit
              harum animi ab repellat tenetur, ut dolores.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0">
          <div className="text-white pt-24">
            <h1 className="text-3xl">The Office-"It is your Birthday."</h1>
            <p className="text-xl">
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
                backgroundColor: "#f5f4f4",
              }}
            >
              <img
                style={{ width: "350px", height: "350px" }}
                src={Lorem}
                alt="CSS creature"
              />
              <h1 className="text-gray-700">Lorem Picsum API</h1>
            </FrontSide>
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              <Button>Go To Project</Button>
              <Button>View Raw Code</Button>
            </BackSide>
          </Flippy>
        </div>
        {/* <Flippy
            flipOnHover={true}
            flipOnClick={true}
            flipDirection="horizontal"
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
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              <Button>Go To Project</Button>
              <Button>View Raw Code</Button>
            </BackSide>
          </Flippy>
          <Flippy
            flipOnHover={true}
            flipOnClick={true}
            flipDirection="horizontal"
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
            <BackSide style={{ backgroundColor: "#e2bcb7" }}>
              <Button>Go To Project</Button>
              <Button>View Raw Code</Button>
            </BackSide>
          </Flippy> */}
      </div>
    </div>
  );
};

export default About;
