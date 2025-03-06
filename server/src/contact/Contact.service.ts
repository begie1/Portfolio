import dotenv from "dotenv";
import nodemailer from "nodemailer";
import logger from "../../logger";
import ContactRepository from "./ContactRepository";
dotenv.config();

export namespace ContactService {
  export async function handleContactMessage(
    name: string,
    email: string,
    message: string,
  ): Promise<void> {
    try {
      logger.info(`Nouveau message reçu de ${name} (${email})`);
      // Sauvegarde du message dans la base de données
      await ContactRepository.saveMessage(name, email, message);

      // Configuration sécurisée de Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Préparation de l'email
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "Message de contact",
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email,
      };

      // Envoi de l'email
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Erreur dans ContactService:", error);
      throw error;
    }
  }
}
