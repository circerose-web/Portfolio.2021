import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Drawing from "./Pics/drawing3.png";
import Resume from "./Pics/resume.png";
import Git from "./Pics/github.png";
import LinkedIn from "./Pics/linkedin.png";

const useStyles = makeStyles({
  root: {
    background: "#00303f",
    border: 0,
    borderRadius: 3,
    boxShadow: "#573128",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function ContactMe() {
  const classes = useStyles();
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xjvpekqv",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>
      <div className="contact">
        <img src={Drawing} alt="characterMe" />
        <div className="bg-red-400 bg-opacity-25 max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
          <p className="text-center font-bold text-gray-700 text-2xl mb-5">
            Contact me!
          </p>
          <form className="flex flex-col space-y-3" onSubmit={handleOnSubmit}>
            <input
              type="text"
              className="w-full border-2 h-10 border-gray-300 rounded outline-none"
              placeholder="Name"
            ></input>
            <input
              type="Email"
              className="w-full border-2 h-10 border-gray-300 rounded outline-none"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="w-full h-64 border-2 border-gray-300 rounded outline-none"
              placeholder="Your Message here"
            ></input>
            <Button
              className={classes.root}
              variant="contained"
              disabled={serverState.submitting}
            >
              {" "}
              Submit
            </Button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
        <div className="flex justify-center">
          <a href="https://github.com/circerose-web" target="_blank">
            <img
              src={Git}
              alt="github"
              style={{ width: "150px", height: "150px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/circe-rose" target="_blank">
            <img
              src={LinkedIn}
              alt="LinkedIn"
              style={{ width: "150px", height: "150px" }}
            />
          </a>

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
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
