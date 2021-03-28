import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <Navbar />
      <Route exact path="/" component={() => <About />} />
      <Route exact path="/ContactMe" component={() => <ContactMe />} />
      <Footer />
      {/*</header>*/}
    </div>
  );
}

export default App;
