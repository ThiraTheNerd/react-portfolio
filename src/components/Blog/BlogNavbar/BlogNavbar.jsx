import React from 'react'
import styles from './BlogNavbar.module.css'
import { getImageUrl } from "../../../utils";
import { Link } from 'react-router-dom';
import AuthLinks from '../AuthLinks/AuthLinks' 
// import ThemeToggle from '../ThemeToggle/ThemeToggle';
const BlogNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src={getImageUrl("socials/youtube.png")} alt="Youtube" width={24} height={24}/>
        <img src={getImageUrl("socials/linkedin.png")} alt="LinkedIn" width={24} height={24}/>
        <img src={getImageUrl("socials/github.png")} alt="Github" width={24} height={24}/>
      </div>
      <div className={styles.logo}>TeesLogo</div>
      <div className={styles.links}>
        {/* <ThemeToggle/> */}
        <Link to="/">Portfolio</Link>
        <Link href="/">Blog</Link>
        <Link to="/login">Login</Link>
        <AuthLinks/>
      </div>
   </div>
  )
}

export default BlogNavbar
