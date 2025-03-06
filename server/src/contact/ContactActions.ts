import type { NextFunction, Request, Response } from "express";
import { ContactService } from "./Contact.service";

export async function sendMessage(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    // 🔍 Ajouter un log avant d'envoyer le message
    console.info("Sending message with:", { name, email, message });

    await ContactService.handleContactMessage(name, email, message);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error in sendMessage:", error);
    res.status(500).json({ error: "Error sending message." });
  }
}
