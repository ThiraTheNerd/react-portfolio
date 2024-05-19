import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../../utils'
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
        <img
        src={getImageUrl("blog/blogpostimage.jpg")}
        alt=""
        fill
        className={styles.image}
        width={250}
        height={250}
        />
        </div>
        <div className={styles.textContianer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>Technology</span>
            </div>
            <h1>Lorem ipsum dolor sit amet consecteur adispisning elit</h1>
            <p className={styles.desc}>Hello everyone! In this article, we will take an in-depth look at the possible high-level architecture of 
                Booking.com, one of the world’s leading travel and hospitality platforms. 
                Introduction Serving millions</p>
            <Link className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card
