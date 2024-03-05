import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Cta from "./components/cta/Cta"
import Brand from "./components/brand/Brand";
import Feature from "./components/feature/Feature";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/features/Features";
import Header from "./containers/header/Header";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import Possibility from "./containers/possibility/Possibility";




function App() {
  

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
