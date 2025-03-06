import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isShowLinks, setIsShowLinks] = useState(false);

  const handleClick = () => {
    setIsShowLinks(!isShowLinks);
  };

  return (
    <header className="header">
      <h1>B | Web Developer</h1>
      <nav id="menu" className={`navbar ${isShowLinks ? "show-nav" : ""}`}>
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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className={`burger-menu ${isShowLinks ? "show-nav" : ""}`}
          type="button"
          id="check"
          onClick={handleClick}
        >
          <span className="bar-burger" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
