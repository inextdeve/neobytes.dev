import { db } from "../../config/database";

export default async function handler(req, res) {
  const body = req.body;

  if (req.method === "POST") {
    if (!body.email || !body.name || !body.subject || !body.message) {
      throw new Error("Please fill all information");
    }

    try {
      const insertQuery = `INSERT INTO user_messages (email, name, subject, message, created_at, updated_at, published_at, created_by_id, updated_by_id)
      VALUES ("${body.email}", "${body.name}", "${body.subject}", "${body.message}", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);`;

      await db.query(insertQuery);

      res.status(200).json({ success: true, message: "Message Sent" });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Message Not Sent",
      });
    }
  } else {
    res.status(404).json({ success: false, message: "Not Found" });
  }
}
