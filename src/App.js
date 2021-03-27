import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <Navbar />
      <About />
      <ContactMe />
      {/*</header>*/}
    </div>
  );
}

export default App;
