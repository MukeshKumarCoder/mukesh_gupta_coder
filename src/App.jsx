import "./App.css";
import Navbar from "../Section/navbar/Navbar";
import Home from "../Section/home/Home"
import About from "../Section/about/About";
import Skills from "../Section/skills/Skills";
import Project from "../Section/project/Project";
import Contact from "../Section/contact/Contact";
import Footer from "../Section/footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

function App() {
  return (
    <div className="appContainer">
     <Navbar />
      <Home id="home" />
      <About id="about"/>
      <Skills id="skills" />
      <Project id="project" />
      <Contact id="contact" />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
