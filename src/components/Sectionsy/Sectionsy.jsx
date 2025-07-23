import React from "react";
import "./Sectionsy.css";
import Navie from "../Navie/Navie";
import ScrollDown from "../ScrollDown";
import { assets } from "../../assets/assets";
import BackUpButton from "../BackUpButton";
import { Link } from "react-scroll";

function Sectionsy() {
  return (
    <div className="sections-base">
      <div id="home" className="home-section">
        <div className="social-group">
          <p className="uhhh" style={{ color: "#9b8abd", fontSize: "20px" }}>
            Follow On
          </p>
          <hr />
          <button className="logo-button">
            <img src={assets.linkedinlogo} width="30" height="30"></img>
          </button>
          <button className="logo-button">
            <img src={assets.githublogo} width="30" height="30"></img>
          </button>
        </div>
        <div className="title-group">
          <h1>Carola Gottardo</h1>
          <p>Aspiring Fullstack Developer</p>
          <div className="buttonie-container">
            <a
              href="https://raw.githubusercontent.com/carolagottardo/react-sass-cv/e0a3bae682fd2417fd956f1106f53d0efc6621b0/public/CV/Gottardo_Carola_CV.pdf"
              download="Gottardo_Carola_CV.pdf"
            >
              <button className="buttonie-style1">Download CV</button>
            </a>
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
            I'm confident that my strong foundation in Computer Science,
            combined with my enthusiasm for Web and Software Development, will
            make me a valuable asset to any team.
          </p>
        </div>
      </div>

      <div id="skills" className="skills-section">
        <div className="skills-container">
          <div className="technical-containers">
            <div className="technical-container1">
              <h2>Technical Skills</h2>
              <div className="card-style1">
                <img src={assets.javascriptlogo} width="48" height="48"></img>
                <h3>JavaScript</h3>
              </div>
              <div className="card-style1">
                <img src={assets.typescriptlogo} width="48" height="48"></img>
                <h3>TypeScript</h3>
              </div>
              <div className="card-style1">
                <img src={assets.reactlogo} width="48" height="48"></img>
                <h3>React</h3>
              </div>
              <div className="card-style1">
                <img src={assets.htmllogo} width="48" height="48"></img>
                <h3>HTML</h3>
              </div>
              <div className="card-style1">
                <img src={assets.csslogo} width="48" height="48"></img>
                <h3>CSS</h3>
              </div>
            </div>
            <div className="technical-container2">
              <h2>‎</h2>
              <div className="card-style3" dataName="Bootstrap">
                <img src={assets.bootstraplogo} width="48" height="48"></img>
              </div>
              <div className="card-style3" dataName="Tailwind CSS">
                <img src={assets.tailwindlogo} width="48" height="48"></img>
              </div>
              <div className="card-style3" dataName="Angular">
                <img src={assets.angularlogo} width="48" height="48"></img>
              </div>
              <div className="card-style3" dataName="Java">
                <img src={assets.javalogo} width="48" height="48"></img>
              </div>
              <div className="card-style3" dataName="Python">
                <img src={assets.pythonlogo} width="48" height="48"></img>
              </div>
            </div>
            <div className="technical-container3">
              <h2>‎</h2>
              <div className="card-style3" dataName="Kotlin">
                <img src={assets.kotlinlogo} width="48" height="48"></img>
              </div>
              <div className="card-style3" dataName="PostgreSQL">
                <img src={assets.postgresqllogo} width="48" height="48"></img>
              </div>
              <div className="card-style3" dataName="Sass">
                <img src={assets.sasslogo} width="48" height="48"></img>
              </div>
            </div>
          </div>
          <div className="language-container">
            <h2>Languages</h2>
            <div className="card-style1">
              <img src={assets.italianlogo} width="48" height="48"></img>
              <h3>Italian</h3>
            </div>
            <div className="card-style1">
              <img src={assets.englishlogo} width="48" height="48"></img>
              <h3>English</h3>
            </div>
            <div className="card-style1">
              <img src={assets.spanishlogo} width="48" height="48"></img>
              <h3>Spanish</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-section">
        <div className="cardsies-pluraldouble">
          <div className="card-style4">
            <div className="logo-socials-container">
              <img src={assets.maillogo} width="34" height="34"></img>
              <img src={assets.phonelogo} width="34" height="34"></img>
            </div>
            <div className="socials-container">
              <div className="social-1">
                <h3>E-mail</h3>
                <p>carolamgottardo@gmail.com</p>
              </div>
              <div className="social-2">
                <h3>Phone</h3>
                <p>+39 351 7423092</p>
              </div>
              <div className="social-3">
                <h3>Socials</h3>
              </div>
              <div className="logo-socials-container-2">
                <button className="logo-button">
                  <img src={assets.linkedinlogo} width="34" height="34"></img>
                </button>
                <button className="logo-button">
                  <img src={assets.githublogo} width="34" height="34"></img>
                </button>
              </div>
            </div>
          </div>

          <div className="card-style2">
            <h2>Contact Form</h2>
            <h3>*Fill out the following form to contact me.</h3>
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
              <textarea
                placeholder="Message"
                className="input-style2 message-input"
              />
            </div>
            <div className="row5">
              <button className="buttonie-style3">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <BackUpButton className="backupbutton" />
      </footer>
    </div>
  );
}

export default Sectionsy;
