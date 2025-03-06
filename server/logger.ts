import dotenv from "dotenv";
import winston from "winston";

dotenv.config();

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info", // Niveau de log configurable (debug, info, warn, error)
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
  transports: [
    new winston.transports.Console(), // Afficher les logs dans la console
    new winston.transports.File({ filename: "logs/error.log", level: "error" }), // Stocker les erreurs dans un fichier
    new winston.transports.File({ filename: "logs/combined.log" }), // Tous les logs
  ],
});

export default logger;
