import "./Navie.css";
import { assets } from "../../assets/assets";

function Navie() {
  return (
    <nav class="navbar-base">
      <h1 class="navbar-logo">CG</h1>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button class="light-dark-button">
        <img src={assets.darkmode} width="26" height="26"></img>
      </button>
    </nav>
  );
}

export default Navie;
