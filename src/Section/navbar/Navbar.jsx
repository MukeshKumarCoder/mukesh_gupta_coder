import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navList = [
  {
    id: 1,
    title: "Home",
    path: "#",
  },
  {
    id: 2,
    title: "About",
    path: "#about",
  },
  {
    id: 3,
    title: "Skills",
    path: "#skills",
  },
  {
    id: 4,
    title: "Project",
    path: "#project",
  },
  {
    id: 5,
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  function handleMenu() {
    setMenuBar(!menuBar);
  }

  return (
    <>
      <nav className={styles.navBarContainer}>
        <div className={styles.navLeft}>
          <h1>Mukesh Kumar</h1>
        </div>
        <div className={menuBar ? styles.navListfterClick : styles.navRight}>
          {/* <ul>
            <a href="#">
              <li onClick={() => setMenuBar(false)}>Home</li>
            </a>
            <a href="#about">
              <li onClick={() => setMenuBar(false)}>About</li>
            </a>
            <a href="#skills">
              <li onClick={() => setMenuBar(false)}>Skills</li>
            </a>
            <a href="#project">
              <li onClick={() => setMenuBar(false)}>Projects</li>
            </a>
            <a href="#contact">
              <li onClick={() => setMenuBar(false)}>Contact</li>
            </a>
          </ul> */}
          {navList.map((link) => (
            <div key={link.id}>
              <a href={link.path} className={styles.navList}>
                {link.title}
              </a>
            </div>
          ))}
        </div>
        {/* <div className={styles.hamburgur}>
          {menuBar ? (
            <button onClick={handleMenu}>
              <FaTimes />
            </button>
          ) : (
            <button onClick={handleMenu}>
              <RxHamburgerMenu />
            </button>
          )}
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
