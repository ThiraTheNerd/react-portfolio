import React from 'react'
import styles from './Comments.module.css'
import {Link} from "react-router-dom"
import { getImageUrl } from '../../../../utils'
// import {useSelector} from "react-redux"
// import {selectComments} from "../../redux/commentsSlice"
const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "unauthenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} >
            Send
          </button>
        </div>
      ) : (
        <Link to="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
      <div className={styles.comment}>
      <div className={styles.user}>
        <img
        src={getImageUrl("history/netflix.png")}
        alt=""
        width={50}
        height={50}
        className={styles.image}
        />
        <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>01.01.2023</span>
        </div>
      </div>
      <p className={styles.desc}>I ran this through an AI detector and found the first paragraph to be AI generated. I could tell as soon as I read the first sentence.

Use your own voice when writing it will make your articles a long more interesting.</p>
      </div>
      </div>
    </div>
  )
}

export default Comments
