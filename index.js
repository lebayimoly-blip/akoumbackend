const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(bodyParser.json());

// Exemple route
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend Akoum Gold OK" });
});

// Port Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
