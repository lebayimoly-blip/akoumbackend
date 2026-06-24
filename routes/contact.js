const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// Configuration du transport SMTP (exemple Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // ton adresse Gmail (ex: akoumdor@gmail.com)
    pass: process.env.EMAIL_PASS, // mot de passe d'application (App Password)
  },
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // expéditeur
      to: process.env.EMAIL_RECEIVER || "lebayimoly@gmail.com", // destinataire ONG
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    res.status(500).json({ success: false, message: "Erreur envoi email", error });
  }
});

module.exports = router;
