"use client";

import styles from './ThemeToggle.module.css'
import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { getImageUrl } from "../../utils";

const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext);
    console.log(theme)
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
        <img src={getImageUrl("nav/moon.png")} alt="" width={14} height={14}/>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <img src={getImageUrl("nav/sun.png")} alt="" width={14} height={14}/>
    </div>
  );
}

export default ThemeToggle
