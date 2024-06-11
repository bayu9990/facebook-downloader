import { React, useState, useRef, useEffect } from "react";
import "../styles/about.css";
import "../../slider";

import jovial from "../assets/images/jovial.jpeg";
import nanang from "../assets/images/nanang.jpg";
import thoriq from "../assets/images/thoriq.jpg";
import shintia from "../assets/images/shintia.jpg";
import izzam from "../assets/images/izzam.jpg";
import putra from "../assets/images/putra.jpeg";

const About = () => {
  return (
    <div className="about">
      <h1>About Our Project</h1>
      <p>
        Projek Kami ialah sebuah aplikasi pengunduh video dari media sosial
        Facebook, Instagram, dan Youtube
      </p>
      <h1>Contributors & Developers</h1>
      <div className="contributor">
        <div className="group1">
          <div className="person">
            <img src={putra} alt="" />
            <h2>Rasyid Putra Wiendata</h2>
          </div>
          <div className="person">
            <img src={izzam} alt="" />
            <h2>Izzamuddin Royhul Firdaus</h2>
          </div>
          <div className="person">
            <img src={shintia} alt="" />
            <h2>Shintia Dewi Rahmawati</h2>
          </div>
          <div className="person">
            <img src={thoriq} alt="" />
            <h2>Muhammad Fariz Ath Thoriq</h2>
          </div>
        </div>
        <div className="group2">
          <div className="person2">
            <img src={nanang} alt="" />
            <h2>Nanang Bagus Ferdiansyah</h2>
          </div>
          <div className="person2">
            <img src={jovial} alt="" />
            <h2>Jovial Handy Putra</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
