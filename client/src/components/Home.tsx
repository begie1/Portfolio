import "./Home.css";
import picture from "../assets/images/picture.jpeg";

const Home = () => {
  return (
    <section className="home-container">
      <div className="text-content">
        <h1 className="title">
          Hi, <br /> I’m Bergeline
        </h1>
        <p className="description">
          I am a tech enthusiast who does web development.
        </p>
        <p className="cta">
          Let’s connect and build something amazing together!
        </p>
      </div>
      <div className="image">
        <img src={picture} alt="pictur" />
      </div>
    </section>
  );
};

export default Home;
