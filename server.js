const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload");
const contactRoutes = require("./routes/contact");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/contact", contactRoutes);

// Lancement serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur ONG Akoum Gold lancé sur http://localhost:${PORT}`);
});
