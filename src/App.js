import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <About />
        <ContactMe />
      </header>
    </div>
  );
}

export default App;
