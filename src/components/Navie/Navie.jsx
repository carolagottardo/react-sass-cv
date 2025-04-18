import "./Navie.css";
import { assets } from "../../assets/assets";
import Sectionsy from "../Sectionsy/Sectionsy";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Navie() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar-base ${theme}`}>
      <h1 class="navbar-logo">CG</h1>

      <div className="bg-nav">
        <div className="buttons-nav">
          <button className="buttons-style">
            <Link to="home" smooth={true} duration={500} offset={-160}>
              Home
            </Link>
          </button>
          <button className="buttons-style">
            <Link to="about" smooth={true} duration={500} offset={-160}>
              About
            </Link>
          </button>
          <button className="buttons-style">
            <Link to="skills" smooth={true} duration={500} offset={-160}>
              Skills
            </Link>
          </button>
          <button className="buttons-style">
            <Link to="contact" smooth={true} duration={500} offset={-160}>
              Contact
            </Link>
          </button>
        </div>
      </div>

      <button class="dl-button" onClick={toggleTheme}></button>
    </nav>
  );
}

export default Navie;
