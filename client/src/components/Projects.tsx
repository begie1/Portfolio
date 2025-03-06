import "./Projects.css";
import projet1 from "../assets/projets/projet1.png";
import projet2 from "../assets/projets/projet2.png";
import projet3 from "../assets/projets/projet3.png";

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="projects">
        <article className="project">
          <img src={projet1} alt="Screenshot of Project 1" />
          <h2>Box Ebook</h2>
          <p>
            Our aim is to adapt the concept of book boxes to a digital format.
            demo site 2 working days.
          </p>
          <a
            href="https://github.com/begie1/boxEbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="github-button">
              View on GitHub
            </button>
          </a>
        </article>
        <article className="project">
          <img src={projet2} alt="Screenshot of Project 2" />
          <h2>Agis51</h2>
          <p>
            AGIS51 is an association that helps people in precarious situations.
            It provides them with a means of transportation to get to work, an
            internship, or a job interview.
          </p>
          <a
            href="https://github.com/begie1/JS-Reims-p3-Agis-51"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="github-button">
              View on GitHub
            </button>
          </a>
        </article>
        <article className="project">
          <img src={projet3} alt="Screenshot of Project 3" />
          <h2>Nebul Art</h2>
          <p>
            An application that lets you search through a library of information
            on works of art and museums in the Grand Est region.
          </p>
          <a
            href="https://github.com/begie1/JS-Reims-p2-Nebul-Art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="github-button">
              View on GitHub
            </button>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
