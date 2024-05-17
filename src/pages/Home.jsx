import React, { useState } from "react";
import Unduh from "../components/Input";

const Home = () => {
  return (
    <>
      <div className="home">
        <Unduh />
        <div className="home-download">
          <div className="drop-menu">
            <a href="" className="dropdown">
              dropdown
            </a>
            <div className="drop-items">
              <a href="">
                gatau
              </a>
              <a href="">
                gatau
              </a>
              <a href="">
                gatau
              </a>
              <a href="">
                gatau
              </a>
              <a href="">
                gatau
              </a>
            </div>
          </div>
          <a href="#" className="download" target="_blank" rel="noreferrer">
            unduh
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
