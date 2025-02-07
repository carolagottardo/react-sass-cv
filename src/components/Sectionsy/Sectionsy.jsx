import React from "react";
import "./Sectionsy.css";
import Navie from "../Navie/Navie";

function Sectionsy() {
  return (
    <div className="sections-base">
      <div id="home" className="home-section">
        <h1>Testing 1</h1>
      </div>

      <div id="about" className="about-section">
        <h1>Testing 2</h1>
      </div>

      <div id="skills" className="skills-section">
        <h1>Testing 3</h1>
      </div>

      <div id="contact" className="contact-section">
        <h1>Testing 4</h1>
      </div>
    </div>
  );
}

export default Sectionsy;
