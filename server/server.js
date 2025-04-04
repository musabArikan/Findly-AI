require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000 || 5173 || 5174;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY environment variable is not set!");
  console.error(
    "Please create a .env file in the server directory with your API key."
  );
  process.exit(1);
}

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://127.0.0.1:5173",
      "https://findly-ai-o69i.onrender.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.post("/api/generate-ad", async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",
      {
        contents: [{ parts: [{ text: description }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { key: GEMINI_API_KEY },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("AI API Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "AI request failed",
      details: error.response?.data,
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}...`);
  console.log(`API endpoint: http://localhost:${PORT}/api/generate-ad`);
});
