import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";

const App = () => {
  return (
    <div id="container">
      <Cursor />
      <Navbar />
      <Sidebar />
      <section id="HomePage">
        <Hero />
      </section>
      <section id="About">
        {/* <Parallax type="Services" /> */}
        <About/>
      </section>
      {/* <section>
        <Services />
      </section> */}
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
