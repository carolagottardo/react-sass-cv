import React from "react";
import "./Sectionsy.css";
import Navie from "../Navie/Navie";
import ScrollDown from "../ScrollDown";
import { assets } from "../../assets/assets";
import BackUpButton from "../BackUpButton";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Sectionsy() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sections-base ${theme}`}>
      <div id="home" className={`home-section ${theme}`}>
        <div className={`social-group ${theme}`}>
          <p className="uhhh" style={{ color: "#9b8abd", fontSize: "20px" }}>
            Follow On
          </p>
          <hr />
          <a href="https://www.linkedin.com/in/carola-gottardo-579214333/">
            <button className="logo-button">
              <img src={assets.linkedinlogo} width="34" height="34"></img>
            </button>
          </a>
          <a href="https://github.com/carolagottardo">
            <button className="logo-button">
              <img src={assets.githublogo} width="30" height="30"></img>
            </button>
          </a>
        </div>
        <div className={`title-group ${theme}`}>
          <h1>Carola Gottardo</h1>
          <h2>Aspiring Frontend Developer</h2>
          <p>
            Recent Computer Science graduate ready to embark on my professional
            journey in the workforce and begin my career to continuously expand
            on my skills and knowledge in <span>Frontend Development</span>.
          </p>
          <div className={`buttonie-container ${theme}`}>
            <a
              href="https://raw.githubusercontent.com/carolagottardo/react-sass-cv/e0a3bae682fd2417fd956f1106f53d0efc6621b0/public/CV/Gottardo_Carola_CV.pdf"
              download="Gottardo_Carola_CV.pdf"
            >
              <button className="buttonie-style1">Download CV</button>
            </a>
          </div>
        </div>
        <div className="pic-div">
          <button className="pic"></button>
        </div>
      </div>

      <div id="about" className={`about-section ${theme}`}>
        <div className="projects">
          <h1>Projects</h1>
          <div className={`projects-group ${theme}`}>
            <div className="card-style5">
              <h2>Song Library</h2>
              <h3>Search & Manage App</h3>
              <p>
                An application for users to manage a song library. Users can add
                songs to their library and classify them according to various
                attributes, including mood, genre, duration and album; users can
                search for the songs by name or through filters based on the
                attributes previously mentioned.
              </p>
            </div>
            <div className="card-style5">
              <h2>Pedometer</h2>
              <h3>Step Tracker App</h3>
              <p>
                An application for users to record the number of steps taken
                (pedometer). Users can record and keep track of steps taken,
                distance traveled and walking time; users can participate in a
                series of challenges aimed at encouraging the user to reach
                their fitness goals and objectives.
              </p>
            </div>
            <div className="card-style5">
              <h2>Restaurant</h2>
              <h3>Search & Review App</h3>
              <p>
                An application for users to record the number of steps taken
                (pedometer). Users can record and keep track of steps taken,
                distance traveled and walking time; users can participate in a
                series of challenges aimed at encouraging the user to reach
                their fitness goals and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="skills-section">
        <div className="skills-container">
          <div className="technical-containers">
            <div className="technical-container1">
              <h2 className="skill-title">Technical Skills</h2>
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
              <div className="card-style3">
                <img src={assets.bootstraplogo} width="48" height="48"></img>
                <div className="tooltip-content2">Bootstrap</div>
              </div>
              <div className="card-style3">
                <img src={assets.tailwindlogo} width="48" height="48"></img>
                <div className="tooltip-content2"> Tailwind CSS</div>
              </div>
              <div className="card-style3">
                <img src={assets.angularlogo} width="48" height="48"></img>
                <div className="tooltip-content2">Angular</div>
              </div>
              <div className="card-style3" dataName="Java">
                <img src={assets.javalogo} width="48" height="48"></img>
                <div className="tooltip-content2">Java</div>
              </div>
              <div className="card-style3">
                <img src={assets.pythonlogo} width="48" height="48"></img>
                <div className="tooltip-content2">Python</div>
              </div>
            </div>
            <div className="technical-container3">
              <div className="card-style3">
                <img src={assets.kotlinlogo} width="48" height="48"></img>
                <div className="tooltip-content2">Kotlin</div>
              </div>
              <div className="card-style3">
                <img src={assets.postgresqllogo} width="48" height="48"></img>
                <div className="tooltip-content2">PostgreSQL</div>
              </div>
              <div className="card-style3">
                <img src={assets.sasslogo} width="48" height="48"></img>
                <div className="tooltip-content2">SASS</div>
              </div>
            </div>
          </div>
          <div className="language-container">
            <h2 className="skill-title">Languages</h2>
            <div className="card-style1">
              <img src={assets.italianlogo} width="48" height="48"></img>
              <h3>Italian</h3>
              <div className="tooltip-content">
                <h4>Italian: Native Language</h4>
                <p>
                  Proficient in all four skills: reading, writing, listening,
                  and speaking.
                </p>
              </div>
            </div>
            <div className="card-style1">
              <img src={assets.englishlogo} width="48" height="48"></img>
              <h3>English</h3>
              <div className="tooltip-content">
                <h4>English: C2 Proficient</h4>
                <p>
                  Proficient in all four skills: reading, writing, listening,
                  and speaking.
                </p>
              </div>
            </div>
            <div className="card-style1">
              <img src={assets.spanishlogo} width="48" height="48"></img>
              <h3>Spanish</h3>
              <div className="tooltip-content">
                <h4>Spanish: C2 Proficient</h4>
                <p>
                  Proficient in all four skills: reading, writing, listening,
                  and speaking.
                </p>
              </div>
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
                <a href="mailto:carolamgottardo@gmail.com">
                  carolamgottardo@gmail.com
                </a>
              </div>
              <div className="social-2">
                <h3>Phone</h3>
                <a href="tel:+393517423092">+39 351 742 3092</a>
              </div>
              <div className="social-3">
                <h3>Socials</h3>
              </div>
              <div className="logo-socials-container-2">
                <a href="https://www.linkedin.com/in/carola-gottardo-579214333/">
                  <button className="logo-button">
                    <img src={assets.linkedinlogo} width="34" height="34"></img>
                  </button>
                </a>
                <a href="https://github.com/carolagottardo">
                  <button className="logo-button">
                    <img src={assets.githublogo} width="34" height="34"></img>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="card-style2">
            <h2>Contact Form</h2>
            <h3>*Fill out the following form to contact me.</h3>
            <div className="row1">
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                className="input-style1"
              />
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                className="input-style1"
              />
            </div>
            <div className="row2">
              <input
                type="text"
                id="cname"
                placeholder="Company"
                className="input-style1"
              />
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="input-style1"
              />
            </div>
            <div className="row3">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="input-style2"
              />
            </div>
            <div className="row4">
              <textarea
                id="message"
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
        <div className="separation-footer">
          <div>
            <h1>Carola Gottardo</h1>
            <div className="column1-footer">
              <a href="mailto:carolamgottardo@gmail.com">
                carolamgottardo@gmail.com
              </a>
              <a href="tel:+393517423092">+39 351 742 3092</a>
            </div>
          </div>
          <div className="column2-footer">
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Contact</p>
          </div>
          <div className="column4-footer">
            <a href="https://www.linkedin.com/in/carola-gottardo-579214333/">
              LinkedIn
            </a>
            <a href="https://github.com/carolagottardo">GitHub</a>
          </div>
        </div>
        <BackUpButton className="backupbutton" />
      </footer>
    </div>
  );
}

export default Sectionsy;
