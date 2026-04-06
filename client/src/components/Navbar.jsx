import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div id="nav-wrapper">
        <nav id="navbar">
          <div className="nav-left">
            <h1 id="nav-title">Elysium</h1>
          </div>

          <div className="nav-right">
            <select name="Langages" id="language-selector">
              <option value="Select One">Select One</option>
            </select>
            <button id="booking-button">Book Now</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
