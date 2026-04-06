import React from "react";
import homeImage from "../assets/Home.jpg";
import "../styles/HomePage.css";
export const HomePage = () => {
  return (
    <>
      <div id="homepage-container">
        <div className="center-wrapper">
          <div className="center-image">
            <img src={homeImage} />
          </div>

          <div id="center-text">
            <h2>Where Living Feels Effortless</h2>
          </div>
        </div>
      </div>
    </>
  );
};
