import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import BlogNavbar from "./components/Blog/BlogNavbar/BlogNavbar";
import Footer from "./components/Footer/Footer";
import RootLayout from "./Layout";
import HomePageBlog from "./pages/blog";
import CategoryPage from "./components/Blog/pages/Category/CategoryPage";
import SinglePagePost from "./app/[slug]/SinglePage"
import LoginPage from "./components/Blog/pages/login/login";
import Write from "./components/Blog/pages/write/Write";
// import {BlogHomePage} from "./components/Blog/pages/BlogHomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout /> }>
        <Route index element={
          <div className={styles.App}>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </div>
        }>
        </Route>
        <Route path={'/blog'} className={styles.App} element={
        <div className={styles.App}>
          <HomePageBlog/>
        </div>
        }></Route>
        <Route path='/blog/:cat' className={styles.App} element={<CategoryPage />} />
        <Route path="/blog/:category/:post" element={<SinglePagePost/>}/>
        <Route path="/write" className={styles.App} element = {
        <div className={styles.App}><Write/></div>}></Route>
        <Route path={'/login'} element = {<LoginPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App
