import "./App.css";
import Navbar from "../src/Section/navbar/Navbar";
import Home from "../src/Section/home/Home";
import About from "../src/Section/about/About";
import Skills from "../src/Section/skills/Skills";
import Project from "../src/Section/project/Project";
import Contact from "../src/Section/contact/Contact";
import Footer from "../src/Section/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tools from "./Section/tools/Tools";
import Experience from "./Section/experience/Experience";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Home id="home" />
      <hr
        style={{
          backgroundColor: "#2a9d8f",
          border: "none",
          width: "85%",
          height: "6px",
          margin: "4rem auto",
          borderRadius: "5px",
        }}
      />
      <About id="about" />
      <Skills id="skills" />
      <Tools />
      <Project id="project" />
      <Experience />
      <Contact id="contact" />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
