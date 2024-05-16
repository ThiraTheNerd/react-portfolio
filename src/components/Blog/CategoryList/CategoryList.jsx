import React from 'react'
import styles from './CategoryList.module.css'
import {Link} from "react-router-dom"
import { getImageUrl } from '../../../utils'
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };
const CategoryList =  () => {
  // const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.technology}`}>
        <img
                src={getImageUrl("history/netflix.png")}
                alt=""
                width={32}
                height={32}
                className={styles.image}
        />
        Technology
        </Link>
        <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.softwaredev}`}>
        <img
                src={getImageUrl("history/netflix.png")}
                alt=""
                width={32}
                height={32}
                className={styles.image}
        />
        Software Development
        </Link>
        <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.work}`}>
        <img
                src={getImageUrl("history/netflix.png")}
                alt=""
                width={32}
                height={32}
                className={styles.image}
        />
        Work
        </Link>
        <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.books}`}>
        <img
                src={getImageUrl("history/netflix.png")}
                alt=""
                width={32}
                height={32}
                className={styles.image}
        />
        Books
        </Link>
        <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.travel}`}>
        <img
                src={getImageUrl("history/netflix.png")}
                alt=""
                width={32}
                height={32}
                className={styles.image}
        />
        Travel
        </Link>
        <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.life}`}>
        <img
                src={getImageUrl("history/netflix.png")}
                alt=""
                width={32}
                height={32}
                className={styles.image}
        />
        Lifestyle
        </Link>

      </div>
      {/* <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <img
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div> */}
    </div>
  )
}

export default CategoryList
