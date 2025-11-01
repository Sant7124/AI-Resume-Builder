const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route for resume generation page
app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/resume.html"));
});

// Route for AI Chatbot (future feature)
app.get("/ai-assistant", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/workinprogress.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
