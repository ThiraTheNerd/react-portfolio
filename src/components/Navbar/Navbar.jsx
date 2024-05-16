import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {Link} from "react-router-dom"
import AuthLinks from "../Blog/AuthLinks/AuthLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <a className={styles.title} href="/">
         <img src={getImageUrl("nav/bloglogoVect.png")} alt="Youtube" width={140} height={140}/>
        </a>
      </div>
      {/* <div className={styles.navCenter}> */}
        <div className={`${styles.menu} ${styles.navCenter}`}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="#experience"></a>
            </li> */}
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <AuthLinks className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}/>
            </li>
            
          </ul>
        </div>
      {/* </div> */}
      <div className={styles.navRight}>
        <ThemeToggle/>
        <img className ={styles.youtubeLogo} src={getImageUrl("socials/youtube.png")} alt="Youtube" width={34} height={34}/>
        <img src={getImageUrl("socials/linkedin.png")} alt="LinkedIn" width={34} height={34}/>
        <img className ={styles.githubLogo} src={getImageUrl("socials/github.png")} alt="Github" width={44} height={44} />
      </div>
    </nav>
  );
};