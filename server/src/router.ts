import express from "express";
import { sendMessage } from "./contact/ContactActions";
const router = express.Router();

/* ************************************************************************* */

/* ************************************************************************* */
// Define item-related routes

router.post("/contact", sendMessage);

/* ************************************************************************* */

export default router;
