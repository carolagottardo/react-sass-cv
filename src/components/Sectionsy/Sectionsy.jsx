import React from "react";
import "./Sectionsy.css";
import Navie from "../Navie/Navie";
import ScrollDown from "../ScrollDown";
import { assets } from "../../assets/assets";

function Sectionsy() {
  return (
    <div className="sections-base">
      <div id="home" className="home-section">
        <div className="social-group">
          <p className="uhhh" style={{ color: "#9b8abd", fontSize: "20px" }}>
            Follow On
          </p>
          <hr />
          <img src={assets.linkedinlogo} width="28" height="28"></img>
          <img src={assets.githublogo} width="28" height="28"></img>
        </div>
        <div className="title-group">
          <h1>Carola Gottardo</h1>
          <p>Aspiring Fullstack Developer</p>
          <div className="buttonie-container">
            <button className="buttonie-style1">Contact Me</button>
            <button className="buttonie-style2">Download CV</button>
          </div>
        </div>
      </div>

      <div id="about" className="about-section">
        <h1>About</h1>
        <div className="about-group">
          <h2>
            I'm an aspiring <span>Full Stack Developer</span>.
          </h2>
          <p>
            Recent Computer Science graduate from Università degli Studi
            dell'Insubria, ready to embark on my professional journey in the
            workforce and begin my career to continuously expand on my skills
            and knowledge in <span>Full Stack Development</span>. <br /> <br />{" "}
            Currently interested in UX/UI Design, Web and Visual Design because
            they allow me to be creative and solve problems. <br /> <br />
            I'm confident that my strong foundation in Computer Science,
            combined with my enthusiasm for Web and Software Development, will
            make me a valuable asset to any team.
          </p>
        </div>
        <div className="card-style1"></div>
      </div>

      <div id="skills" className="skills-section">
        <h1>Skills</h1>
        <div className="skills-container">
          <h2>Technical</h2>
          <h2>Languages</h2>
        </div>
      </div>

      <div id="contact" className="contact-section">
        <h1>Contact</h1>
        <div className="cardsies-pluraldouble">
          <div className="card-style1"></div>
          <div className="card-style2">
            <div className="row1">
              <input
                type="text"
                placeholder="First Name"
                className="input-style1"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-style1"
              />
            </div>
            <div className="row2">
              <input
                type="text"
                placeholder="Company"
                className="input-style1"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="input-style1"
              />
            </div>
            <div className="row3">
              <input
                type="text"
                placeholder="Subject"
                className="input-style2"
              />
            </div>
            <div className="row4">
              <input
                type="text"
                placeholder="Message"
                className="input-style2"
              />
            </div>
            <div className="row5">
              <button className="buttonie-style3">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <button className="butt">Back to Top</button>
      </footer>
    </div>
  );
}

export default Sectionsy;
