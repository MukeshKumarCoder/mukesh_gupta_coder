import Navbar from "../src/Section/Navbar";
import Home from "../src/Section/Home";
import About from "../src/Section/About";
import Skills from "../src/Section/Skills";
import Project from "../src/Section/Project";
import Contact from "../src/Section/Contact";
import Footer from "../src/Section/Footer";
import "react-toastify/dist/ReactToastify.css";
import Tools from "./Section/Tools";
import Experience from "./Section/Experience";
import GitHubStats from "./Section/GitHubStats";

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
      <GitHubStats />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
