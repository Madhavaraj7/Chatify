import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv";
import { chats } from "./data/data.js";
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json())
app.use(cors());


app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.use("/api/user", router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}...`);
});
