import React from "react";
import styles from './Featured.module.css'


const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
         Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <iframe className={styles.video} width="560" height="400" src="https://www.youtube.com/embed/nSbD0ltUXqg?si=cLNPgYRuKuesBtZe" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unveiling Tales: A Journey Through Words</h1>
          <p className={styles.postDesc}>
          Experience my tech journey, from humble beginnings to international acclaim. 
          Join me as I navigate the twists of the tech world, sharing anecdotes and victories along the way. 
          Get inspired by my unique path, fueled by passion, perseverance, and a touch of serendipity!
          </p>
          <button className={styles.button}>Watch Now</button>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </div>
  )
}

export default Featured
