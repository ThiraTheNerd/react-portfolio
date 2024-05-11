import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mercy</h1>
        <p className={styles.description}>
        I specialize in developing innovative solutions that drive business growth and enhance user experiences. Let's turn your vision into reality!
        </p>
        <a href={getImageUrl("hero/Mercy_ThiraResume.pdf")} download="Mercy_ThiraResume.pdf" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};