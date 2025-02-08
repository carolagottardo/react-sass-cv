import React from "react";
import "./Sectionsy.css";
import Navie from "../Navie/Navie";

function Sectionsy() {
  return (
    <div className="sections-base">
      <div id="home" className="home-section">
        <h1>Carola Gottardo</h1>
        <p>Aspiring Fullstack Developer</p>
        <div className="buttonie-container">
          <button className="buttonie">Contact Me</button>
          <button className="buttonie">Download CV</button>
        </div>
      </div>

      <div id="about" className="about-section">
        <h1>About</h1>
        <h2>I'm an aspiring Fullstack Developer.</h2>
        <p>
          Recent Computer Science graduate from Università degli Studi
          dell'Insubria, seeking to embark on my professional journey in the
          workforce to continuously expand on my skills and knowledge in
          Fullstack Development.
        </p>
      </div>

      <div id="skills" className="skills-section">
        <h1>Skills</h1>
      </div>

      <div id="contact" className="contact-section">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Sectionsy;
