const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// Config transport email (exemple Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tonemail@gmail.com",      // à remplacer
    pass: "tonmotdepasse"            // à remplacer ou utiliser App Password
  }
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "Akoumdor@gmail.com", // destinataire ONG
      subject: `Nouveau message de ${name}`,
      text: message
    });

    res.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur envoi email", error });
  }
});

module.exports = router;
