import React from 'react'
import styles from './CategoryPage.module.css'
import CardList from '../../CardList/CardList'
import Menu from '../../Menu/Menu'
const CategoryPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Styles Category</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPage
