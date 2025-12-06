import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="  dark:bg-background-dark text-slate-800 dark:text-slate-200 ">
      <div className="  dark:bg-background-dark dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,188,249,0.15),rgba(255,255,255,0))]">
        <div className=" w-[98%] md:container mx-auto px-0 sm:px-6 lg:px-8 ">
            <div className=" mx-0 md:mx-5 sticky top-0 z-50">
              <Navbar />
            </div>
          
          <div id="home"><Hero /></div>
          <div className=" w-[98%] md:container mx-auto">
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
