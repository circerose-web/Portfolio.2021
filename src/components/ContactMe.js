import React, { useState } from "react";
import axios from "axios";

function ContactMe() {
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
    <div className="bg-white bg-opacity-50 max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
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
        <button disabled={serverState.submitting}>Submit</button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactMe;
