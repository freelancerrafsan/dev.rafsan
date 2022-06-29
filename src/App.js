import React from "react";
import Header from "./Componant/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Banner from "./Componant/Banner";
import About from "./Componant/about/About";
import Survise from "./Componant/Survise";
import Protfolio from "./Componant/protfolio/Protfolio";
import Contact from "./Componant/Contact/Contact";
import Footer from "./Componant/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Survise />
      <Protfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
