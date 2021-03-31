import React, { useState } from "react";
import axios from "axios";
import Drawing from "./Pics/drawing.png";
import Button from "@material-ui/core/Button";

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
    <div className="h-screen">
      <img
        className="ml-28 pt-10 text-center"
        src={Drawing}
        alt="characterMe"
      />
      <h1 className="text-center font-thin text-gray-700 text-6xl mb-5">
        Contact Me!
      </h1>
      <form className="mx-auto self-center" onSubmit={handleOnSubmit}>
        <div className="bg-red-400 bg-opacity-25 max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
          <div className="flex flex-col space-y-3">
            <label
              className="text-center font-bold text-gray-600 text-xl mb-5"
              htmlFor="email"
            >
              Name:
            </label>
            <input
              className="w-full border-2 h-10 border-gray-300 rounded outline-none"
              id="name"
              type="name"
              name="name"
              required
            />
            <label
              className="text-center font-bold text-gray-600 text-xl mb-5"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full border-2 h-10 border-gray-300 rounded outline-none"
              id="name"
              type="name"
              name="name"
              required
            />
            <label
              className="text-center font-bold text-gray-600 text-xl mb-5"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="w-full h-64 border-2 border-gray-300 rounded outline-none"
              id="message"
              name="message"
            ></textarea>
          </div>
          <div className="flex mt-4">
            <div className="m-auto">
              <Button
                variant="contained"
                size="medium"
                type="submit"
                color="primary"
                disabled={serverState.submitting}
              >
                Submit
              </Button>
            </div>
          </div>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactMe;

// import React, { useState } from "react";
// import axios from "axios";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawing from "./Pics/drawing.png";

// const useStyles = makeStyles({
//   root: {
//     background: "#00303f",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "#573128",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// });

// function ContactMe() {
//   const classes = useStyles();
//   const [serverState, setServerState] = useState({
//     submitting: false,
//     status: null,
//   });

//   const handleServerResponse = (ok, msg, form) => {
//     setServerState({
//       submitting: true,
//       status: { ok, msg },
//     });
//     if (ok) {
//       form.reset();
//     }
//   };
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     setServerState({ submitting: true });
//     axios({
//       method: "post",
//       url: "https://formspree.io/f/xjvpekqv",
//       data: new FormData(form),
//     })
//       .then((r) => {
//         handleServerResponse(true, "Thanks!", form);
//       })
//       .catch((r) => {
//         handleServerResponse(false, r.response.data.error, form);
//       });
//   };
//   return (
//     <div>
//       <form className="mx-auto self-center">
//         <img
//           className="ml-28 pt-10 text-center"
//           src={Drawing}
//           alt="characterMe"
//         />
//         <div className="bg-red-400 bg-opacity-25 max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
//           <p className="text-center font-bold text-gray-700 text-2xl mb-5">
//             Contact me!
//           </p>
//           <div className="flex flex-col space-y-3" onSubmit={handleOnSubmit}>
//             <input
//               className="w-full border-2 h-10 border-gray-300 rounded outline-none"
//               placeholder="Name"
//             ></input>
//             <input
//               type="Email"
//               className="w-full border-2 h-10 border-gray-300 rounded outline-none"
//               placeholder="Email"
//             ></input>
//             <input className="w-full h-64 border-2 border-gray-300 rounded outline-none"></input>
//             <Button
//               className={classes.root}
//               variant="outlined"
//               size="medium"
//               type="submit"
//               disabled={serverState.submitting}
//             >
//               {" "}
//               Submit
//             </Button>
//             {serverState.status && (
//               <p className={!serverState.status.ok ? "errorMsg" : ""}>
//                 {serverState.status.msg}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="flex justify-center"></div>
//       </form>
//     </div>
//   );
// }

// export default ContactMe;
