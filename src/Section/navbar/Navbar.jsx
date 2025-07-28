import React, { useState } from "react";
import styles from "./Navbar.module.css";

const navList = [
  { id: 1, title: "Home", path: "#" },
  { id: 2, title: "About", path: "#about" },
  { id: 3, title: "Skills", path: "#skills" },
  { id: 4, title: "Project", path: "#project" },
  { id: 5, title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.navLeft}>
        <h1>Mukesh Kumar</h1>
      </div>

      <div className={styles.hamburger}>
        <button onClick={handleMenuToggle} aria-label="Toggle Menu">
          ☰
        </button>
      </div>

      <ul className={isMenuOpen ? styles.navListAfterClick : styles.navRight}>
        {navList.map((link) => (
          <li
            key={link.id}
            className={styles.navItem}  
          >
            <a href={link.path} className={styles.navList}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
