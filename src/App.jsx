import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div id="container">
      <section id="HomePage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
