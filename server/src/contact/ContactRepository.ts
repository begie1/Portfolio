import type { ResultSetHeader } from "mysql2/promise";
import databaseClient from "../../database/client";

const ContactRepository = {
  async saveMessage(
    name: string,
    email: string,
    message: string,
  ): Promise<ResultSetHeader> {
    try {
      const query =
        "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
      const [result] = await databaseClient.execute<ResultSetHeader>(query, [
        name,
        email,
        message,
      ]);
      return result;
    } catch (error) {
      console.error("Error MySQL :", error);
      throw error;
    }
  },
};

export default ContactRepository;
