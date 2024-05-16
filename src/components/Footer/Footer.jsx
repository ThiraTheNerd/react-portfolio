import React from 'react'
import styles from "./Footer.module.css"
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../utils'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
        <img src={getImageUrl("nav/bloglogoVect.png")} alt="Youtube" width={70} height={70}/>
          {/* <h1 className={styles.logoText}>Mercy's Creative Studio</h1> */}
        </div>
        <p className={styles.desc}>
          Where passion meets creativity
        </p>
        <div className={styles.icons}>
        <img className ={styles.youtubeLogo} src={getImageUrl("socials/youtube.png")} alt="Youtube" width={18} height={18}/>
        <img src={getImageUrl("socials/linkedin.png")} alt="LinkedIn" width={18} height={18}/>
        <img className ={styles.githubLogo} src={getImageUrl("socials/github.png")} alt="Github" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
