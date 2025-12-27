import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import "./glob.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineContacts,
  
} from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? "assets/nav/closeIcon.png" : "assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            handleMenuToggle();
          }}
        />

        {menuOpen && <div className="overlay overlayOpen" />}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.menuitems}>
            <a href="/">
              <AiOutlineHome className={styles.menuItemIcon} />
              Home
            </a>
          </li>
          <li className={styles.menuitems}>
            <a href="#Introduction">
              <AiOutlineUser className={styles.menuItemIcon} /> Introduction
            </a>
          </li>
          <li className={styles.menuitems}>
            <a href="#skillc">
              <GrTechnology className={styles.menuItemIcon} /> Skills
            </a>
          </li>

          <li className={styles.menuitems}>
            <a href="https://drive.google.com/file/d/1gwDjuCvuc_isiFM33JozIj6OmWWnaWx6/view" target="_blank" rel="noopener noreferrer">
             <AiOutlineFileText className={styles.menuItemIcon} />
             Resume Overview
            </a>
          </li>
          
          <li className={styles.menuitems}>
            <a href="#contact">
              <AiOutlineContacts className={styles.menuItemIcon} />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
