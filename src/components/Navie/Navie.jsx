import "./Navie.css";
import { assets } from "../../assets/assets";
import Sectionsy from "../Sectionsy/Sectionsy";
import { Link } from "react-scroll";

function Navie() {
  return (
    <nav class="navbar-base">
      <h1 class="navbar-logo">CG</h1>

      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <button class="light-dark-button">
        <img src={assets.darkmode} width="26" height="26"></img>
      </button>
    </nav>
  );
}

export default Navie;
