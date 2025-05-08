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
            <button className="buttonie-style1">Download CV</button>
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
            Currently developed in UX/UI Design, Web and Visual Design because
            they allow me to be creative. <br /> <br />
            I'm confident that my strong foundation in Computer Science,
            combined with my enthusiasm for Web and Software Development, will
            make me a valuable asset to any team.
          </p>
        </div>
      </div>

      <div id="skills" className="skills-section">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="technical-container">
            <h2>Technical</h2>
            <div className="card-style1">
              <img src={assets.javascriptlogo} width="34" height="34"></img>
              <h3>JavaScript</h3>
            </div>
            <div className="card-style1">
              <img src={assets.typescriptlogo} width="34" height="34"></img>
              <h3>TypeScript</h3>
            </div>
            <div className="card-style1">
              <img src={assets.reactlogo} width="34" height="34"></img>
              <h3>React</h3>
            </div>
            <div className="card-style1">
              <img src={assets.htmllogo} width="34" height="34"></img>
              <h3>HTML</h3>
            </div>
            <div className="card-style1">
              <img src={assets.csslogo} width="34" height="34"></img>
              <h3>CSS</h3>
            </div>
          </div>
          <div className="technical-container2">
            <div className="card-style3">
              <img src={assets.bootstraplogo} width="34" height="34"></img>
            </div>
            <div className="card-style3">
              <img src={assets.tailwindlogo} width="34" height="34"></img>
            </div>
            <div className="card-style3">
              <img src={assets.angularlogo} width="34" height="34"></img>
            </div>
            <div className="card-style3">
              <img src={assets.sasslogo} width="34" height="34"></img>
            </div>
          </div>
          <div className="language-container">
            <h2>Languages</h2>
            <div className="card-style1">
              <img src={assets.italianlogo} width="34" height="34"></img>
              <h3>Italian</h3>
            </div>
            <div className="card-style1">
              <img src={assets.englishlogo} width="34" height="34"></img>
              <h3>English</h3>
            </div>
            <div className="card-style1">
              <img src={assets.spanishlogo} width="34" height="34"></img>
              <h3>Spanish</h3>
            </div>
          </div>
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
