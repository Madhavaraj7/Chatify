import express from "express";
import cors from "cors";
import { chats } from "./data/data.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());  

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  console.log('req reached')
  res.send(chats);
});

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}...`);
});
