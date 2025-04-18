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

      <ul>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-160}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-160}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-160}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-160}>
            Contact
          </Link>
        </li>
      </ul>

      <button class="light-dark-button" onClick={toggleTheme}>
        <img
          src={assets.darkmode}
          width="26"
          height="26"
          alt="Toggle Theme"
        ></img>
      </button>
    </nav>
  );
}

export default Navie;
