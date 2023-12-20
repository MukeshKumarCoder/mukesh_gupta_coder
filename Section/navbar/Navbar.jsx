import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  function handleMenu() {
    setMenuBar(!menuBar);
  }

  return (
    <div>
      <div className={styles.nabarContainer}>
        <h1>Mukesh Kumar</h1>
        <div className={menuBar ? styles.navListfterClick : styles.navlist}>
          <ul>
            <a href="#home">
              <li onClick={()=> setMenuBar(false)}>Home</li>
            </a>
            <a href="#about">
              <li onClick={()=> setMenuBar(false)}>About</li>
            </a>
            <a href="#skills">
              <li onClick={()=> setMenuBar(false)}>Skills</li>
            </a>
            <a href="#project">
              <li onClick={()=> setMenuBar(false)}>Projects</li>
            </a>
            <a href="#contact">
              <li onClick={()=> setMenuBar(false)}>Contact</li>
            </a>
          </ul>
        </div>
        <div className={styles.hamburgur}>
          {menuBar ? (
            <button onClick={handleMenu}>
              <FaTimes />
            </button>
          ) : (
            <button onClick={handleMenu}>
              <RxHamburgerMenu />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
