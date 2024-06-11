import React from "react";
import "../styles/index.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import brand from "../assets/images/brand.png";

const Layout = () => {
  const ClickMeBrand = () => {
    window.location.href = "/";
  };

  return (
    <>
      <nav>
        <img
          src={brand}
          alt=""
          onClick={ClickMeBrand}
          style={{ cursor: "pointer" }}
        />
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright © 2024 by MultiSaveVerse Dev. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
