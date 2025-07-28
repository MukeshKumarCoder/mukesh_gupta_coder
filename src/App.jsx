import "./App.css";
import Navbar from "../src/Section/navbar/Navbar";
import Home from "../src/Section/home/Home";
import About from "../src/Section/about/About";
import Skills from "../src/Section/skills/Skills";
import Project from "../src/Section/project/Project";
import Contact from "../src/Section/contact/Contact";
import Footer from "../src/Section/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import Tools from "./Section/tools/Tools";
import Experience from "./Section/experience/Experience";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Tools id="tools" />
      <Project id="project" />
      <Experience id="experience" />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
