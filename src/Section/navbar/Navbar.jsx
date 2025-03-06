import React, { useState } from "react";
import styles from "./Navbar.module.css";

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
        <div className={menuBar ? styles.navListAfterClick : styles.navRight}>
          {navList.map((link) => (
            <div key={link.id}>
              <a href={link.path} className={styles.navList}>
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
