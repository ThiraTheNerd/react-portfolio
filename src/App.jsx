import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route index element={
        <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      }>
      </Route>
      <Route path={'/blog'} element={
        <div>Blog</div>
      } />
    </Routes>
  );
}

export default App
