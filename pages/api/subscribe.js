import { db } from "../../config/database";

export default async function subscribe(req, res) {
  const body = req.body;

  if (req.method === "POST") {
    if (!body.email || !body.name) {
      throw new Error("Please fill all information");
    }

    const checkQuery = `SELECT id FROM news_letter_subscribers WHERE email="${body.email}"`;

    try {
      const checkIfExist = await db.query(checkQuery);

      if (checkIfExist.length) {
        return res.status(200).json({ message: "Already Subscribed" });
      }

      const insertQuery = `INSERT INTO news_letter_subscribers (name, email, created_at, updated_at, published_at, created_by_id, updated_by_id)
      VALUES ("${body.name}", "${body.email}", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,1,1);`;

      await db.query(insertQuery);

      res
        .status(200)
        .json({ success: true, message: "Subscribed Successfully" });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || "Error Please Try Again",
      });
    }
  } else {
    res.status(404).json({ success: false, message: "Not Found" });
  }
}
