import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";



const app = express();
dotenv.config()


app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});


const PORT  = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
  );
