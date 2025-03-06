import { useState } from "react";
import "./Contact.css";
import plane from "../assets/video/plane.mp4";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        },
      );

      const data = await response.json(); // Attendre que la réponse soit analysée en JSON

      if (response.ok) {
        setStatus(data.message); // Affiche le message du serveur
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error); // Affiche l'erreur du serveur
      }
    } catch (error) {
      console.error("Erreur d'envoi du message :", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="contact-section">
      <video autoPlay loop muted className="background-video">
        <source src={plane} type="video/mp4" />
      </video>

      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="button" className="submit-button" onClick={handleSubmit}>
          Send Message{" "}
        </button>
      </form>
      {status && <p>{status}</p>}

      <div className="social-links">
        <a
          href="https://github.com/begie1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button" type="button">
            GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/bergeline-jean-352b51331"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button" type="button">
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
