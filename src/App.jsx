import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import BlogNavbar from "./components/Blog/BlogNavbar/BlogNavbar";
import Footer from "./components/Footer/Footer";
import RootLayout from "./Layout";
import HomePageBlog from "./pages/blog";
// import {BlogHomePage} from "./components/Blog/pages/BlogHomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout /> }>
        <Route index element={
          <div className={styles.App}>
          {/* <Navbar /> */}
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        }>
        </Route>
        <Route path={'/blog'} element={
        <div className={styles.App}>
          {/* <BlogNavbar /> */}
          <HomePageBlog/>
          <Footer/>
          {/* <BlogHomePage /> */}
        </div>

      } />
      <Route path={'/login'}></Route>
      </Route>
    </Routes>
  );
}

export default App
