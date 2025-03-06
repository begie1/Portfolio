import "./Skills.css";
import css from "../assets/techno/css.png";
import figma from "../assets/techno/figma.png";
import html from "../assets/techno/html.png";
import js from "../assets/techno/js.png";
import mysql from "../assets/techno/mysql.png";
import node from "../assets/techno/node.png";
import react from "../assets/techno/react.png";

const Skills = () => {
  return (
    <section className="skills-section">
      <h1>Tech Stack</h1>
      <div className="skills-list">
        <div className="skill-item">
          <img src={html} alt="html logo" className="skill-logo" />
        </div>
        <div className="skill-item">
          <img src={css} alt="css logo" className="skill-logo" />
        </div>
        <div className="skill-item">
          <img src={js} alt="JavaScript logo" className="skill-logo" />
        </div>
        <div className="skill-item">
          <img src={react} alt="react logo" className="skill-logo" />
        </div>
        <div className="skill-item">
          <img src={node} alt="Node.js logo" className="skill-logo" />
        </div>
        <div className="skill-item">
          <img src={figma} alt="Figma logo" className="skill-logo" />
        </div>
        <div className="skill-item">
          <img src={mysql} alt="Mysql logo" className="skill-logo" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
