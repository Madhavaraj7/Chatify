import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv";
import { chats } from "./data/data.js";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json())
app.use(cors());


app.get("/", (req, res) => {
  res.send("API is running");
});


app.use("/api/user", userRoute);
app.use('/api/chat',chatRoutes)






// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}...`);
});
