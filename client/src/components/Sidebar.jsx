import React from "react";
import { useTheme } from "../utils/ThemeContext";
import "../styles/Sidebar.css";

import HomeIcon from "../assets/icons/home.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

export const Sidebar = ({ isCollapsed, onToggleCollapse }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        className={`sidebar-container${isCollapsed ? " is-collapsed" : ""}`}
      >
        <button
          type="button"
          className="sidebar-collapse-toggle"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? "‹" : "›"}
        </button>
        <h1 id="nav-title">Elysium</h1>
        <div className="home-button-wrapper">
          <button id="home-button" onClick={() => (window.location.href = "/")}>
            <HomeIcon className="svg-icon" id="home-button"></HomeIcon>
            <p id="home-button-label">Home</p>
          </button>
        </div>

        <div className="center-button-group">
          <a href="/">Who We Are</a>
          <a href="/">What We Do</a>
          <a href="/">Contact</a>
        </div>

        <div className="lower-button-group">
          <button type="button">Language</button>
          <button id="darkmode-toggle" type="button" onClick={toggleTheme}>
            {theme === "dark" ? (
              <MoonIcon className="svg-icon" />
            ) : (
              <SunIcon className="svg-icon" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
