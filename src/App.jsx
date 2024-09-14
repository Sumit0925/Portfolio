import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div id="container">
      <section id="HomePage">
        <Navbar />
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
