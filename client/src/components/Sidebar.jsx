import React from "react";
import { useTheme } from "../utils/ThemeContext";
import "../styles/Sidebar.css";

import HomeIcon from "../assets/icons/home.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

export const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="sidebar-container">
        <div className="home-button-wrapper">
          {" "}
          <HomeIcon className="svg-icon" id="home-button"></HomeIcon>
          <label>Home</label>
        </div>

        <div className="center-button-group">
          <a href="/">Who We Are</a>
          <a href="/">What We Do</a>
          <a href="/">Contact</a>
        </div>

        <div className="lower-button-group">
          <button>Langauge</button>
          <button
            id="darkmode-toggle"
            className="svg-icon"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </>
  );
};
