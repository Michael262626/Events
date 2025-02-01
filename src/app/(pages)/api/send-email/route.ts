import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, filePath } = req.body;

  if (!email || !filePath) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Event Ticket",
    text: "Thank you for your purchase! Your ticket is attached.",
    attachments: [
      {
        filename: `ticket_${Date.now()}.pdf`,
        path: filePath,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
