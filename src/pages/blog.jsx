import Featured from "../components/Blog/Featured/Featured";
import CardList from "../components/Blog/CardList/CardList";
import CategoryList from "../components/Blog/CategoryList/CategoryList";
import styles from './blogpage.module.css'
import Menu from "../components/Blog/Menu/Menu";
export default function HomePageBlog(){
    return(
        <div className={styles.container}>
            <Featured/>
            <CategoryList/>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    )
}