import React from "react";
import "../styles/index.css";
import { Outlet } from "react-router-dom";

import brand from "../assets/images/brand.png";

const Layout = () => {
  return (
    <>
      <nav>
        <img src={brand} alt="" />
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3><center>Copyright © 2024. All Rights Reserved </center></h3>
      </footer>
    </>
  );
};

export default Layout;
